module Main where

import Control.Monad
import Control.Monad.Eff
import Control.Monad.ST
import qualified Control.Monad.JQuery as J

import Math

import Data.Array
import Data.Tuple
import Data.Traversable
import Data.Foldable
import Data.Foreign
import Data.Either

data Status h = Status
    { raders :: STRef h [STRef h Number]
    , planes :: STRef h [STRef h Number]
    , fleet  :: [Tuple Number (STRef h Number)]
    }

initStatus = do
    r <- newSTRef []
    p <- newSTRef []
    f <- for (range 0 5) (\i -> Tuple i <$> newSTRef 0)
    return $ Status { raders: r, planes: p, fleet: f }

sumStatus :: forall h eff. Status h -> Eff (st :: ST h | eff) Number
sumStatus (Status st) = do
    rs <- readSTRef st.raders >>= flip for readSTRef
    ps <- readSTRef st.planes >>= flip for readSTRef 
    fs <- for st.fleet (\i -> readSTRef $ snd i)
    let fv = sum fs - sum rs - sum ps
    return $ sum rs + 2 * sum ps + floor (sqrt fv)

equipField name value = do
    tr         <- J.create "<tr>"
    numberCell <- J.create "<td>"
    nameCell   <- J.create "<td>"
    valueCell  <- J.create "<td>"

    input      <- J.create "<input style=\"width: 3em\" type=number value=0>"
    input `J.append` numberCell

    numberCell `J.append` tr
    nameCell   `J.append` tr
    valueCell  `J.append` tr

    name       `J.setText` nameCell
    show (value :: Number) `J.setText` valueCell

    return $ Tuple input tr

newEquip getter result status tbl name value = do
    Tuple inp tr <- equipField name value

    numRef <- newSTRef 0
    modifySTRef (getter status) (\s -> numRef:s)

    flip (J.on "change") inp $ \_ _ -> do
        v <- J.getValue inp
        case parseForeign read v >>= parseJSON of
            Right v -> do
                writeSTRef numRef (value * v)
                r <- sumStatus status
                show r `J.setText` result

    tr `J.append` tbl

newRader = newEquip (\(Status s) -> s.raders)
newPlane = newEquip (\(Status s) -> s.planes)

initFleet result tbl status@(Status h) = for_ h.fleet $ \(Tuple i ref) -> do
    init <- readSTRef ref

    tr         <- J.create "<tr>"
    indexCell  <- J.create "<td>"
    valueCell  <- J.create "<td>"
    input      <- J.create "<input style=\"width: 3em\" type=number value=0>"

    input `J.append` valueCell

    indexCell `J.append` tr
    valueCell `J.append` tr
    tr `J.append` tbl

    show i    `J.setText` indexCell
    show init `J.setValue` input

    flip (J.on "change") input $ \_ _ -> do
        v <- J.getValue input
        case parseForeign read v >>= parseJSON of
            Right v -> do
                writeSTRef ref v
                r <- sumStatus status
                show r `J.setText` result

main = J.ready $ do
    raders <- J.select "#rader"
    planes <- J.select "#plane"
    fleet  <- J.select "#fleet"
    result <- J.select "#result"

    st <- initStatus
    initFleet result fleet st

    newRader result st raders "13号対空電探" 3
    newRader result st raders "13号対空電探改" 4
    newRader result st raders "14号対空電探" 5
    newRader result st raders "21号対空電探" 4
    newRader result st raders "21号対空電探改" 6
    newRader result st raders "22号対水上電探" 5
    newRader result st raders "22号対水上電探改四" 5
    newRader result st raders "32号対水上電探" 10
    newRader result st raders "33号対水上電探" 7

    newPlane result st planes "零式水上偵察機" 5
    newPlane result st planes "零式水上観測機" 6
    newPlane result st planes "九八式水上偵察機(夜偵)" 3
    newPlane result st planes "瑞雲" 6
    newPlane result st planes "瑞雲(六三四空)" 6
    newPlane result st planes "瑞雲12型" 6
    newPlane result st planes "瑞雲12型(六三四空)" 7
    newPlane result st planes "彩雲" 9
    newPlane result st planes "二式艦上偵察機" 7



--    e1 <- newRader raders result "13号対空電探" 3
--    e2 <- equipField raders result "22号対水上電探" 5
--
--    sumStatus raders
--    e1 `J.append` rader
--    e2 `J.append` rader
