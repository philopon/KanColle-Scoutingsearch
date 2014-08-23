module Main where

import Control.Monad
import Control.Monad.Eff
import Control.Monad.Eff.Ref
import qualified Control.Monad.JQuery as J

import Math

import Data.Traversable
import Data.Foldable
import Data.Foreign.Class
import Data.Either
import Data.Function

foreign import toFixedImpl "function toFixedImpl(n,d) {return n.toFixed(d)}"
    :: Fn2 Number Number String

toFixed :: Number -> Number -> String
toFixed = runFn2 toFixedImpl

input v = do
    inp <- J.create "<input type=\"number\">"
    {width: "100%"} `J.css` inp
    v `J.setValue` inp
    return inp

initFleet refs sumRef callback = do
    flt  <- J.select "#fleet"

    tr   <- J.create "<tr>"

    sumd <- J.create "<td>"

    inps <- for refs $ \ref -> do
        td      <- J.create "<td>"
        initial <- readRef ref
        inp <- input initial
        inp `J.append` td
        td  `J.append` tr
        return {input: inp, ref: ref}

    let reflesh setValue = do
            sum <- foldM (\s inp -> do
                v <- readRef inp.ref
                when setValue $ void $ show v `J.setValue` inp.input
                return (s + v)
                ) 0 inps

            show sum `J.setText` sumd
            writeRef sumRef sum

            return unit
                
    for_ inps $ \inp -> do
        flip (J.on "change") inp.input $ \_ _ -> do
            v <- J.getValue inp.input
            case read v >>= readJSON of
                Right v -> do
                    writeRef inp.ref v
                    reflesh false
                    callback
                Left e  -> Debug.Trace.print e
                
    sumd   `J.append` tr

    tr   `J.append` flt
    return reflesh

itemTable = do
    tbl <- J.create "<table style='white-space: nowrap' class=\"table\">"
    tr  <- J.create "<tr>"

    let apnd s = do
            dom <- J.create s
            dom `J.append` tr

    apnd "<th style='min-width: 5em; width: 5em'>個数</th>"
    apnd "<th>名称</th>"
    apnd "<th>索敵値</th>"
    apnd "<th>小計</th>"

    tr `J.append` tbl
    return tbl

type Item =
    { number   :: Number
    , name     :: String
    , scout    :: Number
    , category :: String
    , ref      :: RefVal Number
    }

initGroup title factor items total callback = do
    itm <- J.select "#items"
    div <- J.create "<div class=\"col-xs-12 col-sm-6\">"
    tbl <- itemTable

    tottr  <- J.create "<tr>"
    [titleCell, factorCell, totalCell] <- replicateM 3 $ do
        th <- J.create "<th>"
        th `J.append` tottr
        return th

    {colspan: 2} `J.attr` titleCell
    title `J.setText` titleCell
    ("x" ++ show (factor :: Number)) `J.setText` factorCell

    iis <- for (items :: [Item]) $ \item -> do
        init <- readRef item.ref
        inp <- input init
        tot <- J.create "<td>"
        return {input: inp, item: item, total: tot}

    let reflesh setValue = do
            sum <- foldM (\s ii -> do
                v <- readRef ii.item.ref
                when setValue $ void $ show v `J.setValue` ii.input
                show (v * factor * ii.item.scout) `J.setText` ii.total
                return (s + v * ii.item.scout)
                ) 0 iis

            writeRef total sum
            show (sum * factor) `J.setText` totalCell

            return unit


    for iis $ \ii -> do
        tr   <- J.create "<tr>"

        [numCell, nameCell, scoutCell] <- replicateM 3 $ do
            td <- J.create "<td>"
            td `J.append` tr
            return td

        ii.item.name       `J.setText` nameCell
        show ii.item.scout `J.setText` scoutCell

        flip (J.on "change") ii.input $ \_ _ -> do
            v <- J.getValue ii.input
            case readWith id v >>= readJSON of
                Right v -> do
                    writeRef ii.item.ref v
                    reflesh false
                    callback
                Left e  -> Debug.Trace.print e
 

        ii.total `J.append` tr
        ii.input `J.append` numCell
        tr `J.append` tbl

    tottr `J.append` tbl
    tbl   `J.append` div
    div   `J.append` itm
    return reflesh


foreign import getDictDefaultImpl "function getDictDefaultImpl(h,k,d) {return h[k] || d}"
    :: forall d k a. Fn3 {|d} k a a

getDictDefault = runFn3 getDictDefaultImpl

type ItemCatalog = 
    { number   :: Number
    , name     :: String
    , scout    :: Number
    , category :: String
    }

catalogToItem :: forall eff i d. {|i} -> ItemCatalog -> Eff (ref :: Ref | eff) Item
catalogToItem inits i = do
    ref <- newRef (getDictDefault inits i.number 0)
    return { number:   i.number
           , name:     i.name
           , scout:    i.scout
           , category: i.category
           , ref:      ref
           }

main = J.ready $ do
    fleet    <- for [0,0,0,0,0,0] newRef
    fleetTot <- newRef 0

    let rederCatalog =
            [ {number: 27, name:"13号対空電探",       scout: 3, category:"小型電探"}
            , {number:106, name:"13号対空電探改",     scout: 4, category:"小型電探"}
            , {number: 28, name:"22号対水上電探",     scout: 5, category:"小型電探"}
            , {number: 88, name:"22号対水上電探改四", scout: 5, category:"小型電探"}
            , {number: 29, name:"33号対水上電探",     scout: 7, category:"小型電探"}
            , {number: 30, name:"21号対空電探",       scout: 4, category:"大型電探"}
            , {number: 89, name:"21号対空電探改",     scout: 6, category:"大型電探"}
            , {number: 31, name:"32号対水上電探",     scout: 7, category:"大型電探"}
            , {number: 32, name:"14号対空電探",       scout: 5, category:"大型電探"}
            ]
    rederTot <- newRef 0
    reders <- for rederCatalog (catalogToItem {})

    let planeCatalog =
            [ {number: 25, name:"零式水上偵察機",         scout: 5, category:"水上偵察機"}
            , {number: 59, name:"零式水上観測機",         scout: 6, category:"水上偵察機"}
            , {number:102, name:"九八式水上偵察機(夜偵)", scout: 3, category:"水上偵察機"}
            , {number: 61, name:"二式水上観測機",         scout: 7, category:"艦上偵察機"}
            , {number: 54, name:"彩雲",                   scout: 9, category:"艦上偵察機"}
            , {number: 26, name:"瑞雲",                   scout: 6, category:"水上爆撃機"}
            , {number: 79, name:"瑞雲(六三四空)",         scout: 6, category:"水上爆撃機"}
            , {number: 80, name:"瑞雲12型",               scout: 6, category:"水上爆撃機"}
            , {number: 81, name:"瑞雲12型(六三四空)",     scout: 7, category:"水上爆撃機"}
            , {number: 62, name:"試製晴嵐",               scout: 6, category:"水上爆撃機"}
            ]
    planeTot <- newRef 0
    planes   <- for planeCatalog (catalogToItem {})

    result <- J.select "#result"

    let updateResult = do
            fleet <- readRef fleetTot
            reder <- readRef rederTot
            plane <- readRef planeTot
            let r = sqrt (fleet - reder - plane) + reder + 2 * plane
            toFixed r 2 `J.setText` result
            return unit

    refleshFleet <- initFleet fleet fleetTot updateResult
    refleshReder <- initGroup "電探"   1 reders rederTot updateResult
    refleshPlane <- initGroup "偵察機" 2 planes planeTot updateResult

    refleshFleet true
    refleshReder true
    refleshPlane true
