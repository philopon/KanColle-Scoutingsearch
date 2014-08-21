var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    var Unit = {
        create: function (value) {
            return value;
        }
    };
    function Semigroupoid($less$less$less) {
        this["<<<"] = $less$less$less;
    };
    function Category(__superclass_Prelude$dotSemigroupoid_0, id) {
        this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
        this.id = id;
    };
    function Show(show) {
        this.show = show;
    };
    function Functor($less$dollar$greater) {
        this["<$>"] = $less$dollar$greater;
    };
    function Apply($less$times$greater, __superclass_Prelude$dotFunctor_0) {
        this["<*>"] = $less$times$greater;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
    };
    function Applicative(__superclass_Prelude$dotApply_0, pure) {
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
        this.pure = pure;
    };
    function Bind($greater$greater$eq, __superclass_Prelude$dotApply_0) {
        this[">>="] = $greater$greater$eq;
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
    };
    function Monad(__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
        this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
        this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
    };
    function Num($percent, $times, $plus, $minus, $div, negate) {
        this["%"] = $percent;
        this["*"] = $times;
        this["+"] = $plus;
        this["-"] = $minus;
        this["/"] = $div;
        this.negate = negate;
    };
    function cons(e) {  return function (l) {    return [e].concat(l);  };};
    function showNumberImpl(n) {  return n.toString();};
    function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
    function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
    function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
    function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
    function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
    function numNegate(n) {  return -n;};
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$less$less = function (dict) {
        return dict["<<<"];
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $less$dollar$greater = function (dict) {
        return dict["<$>"];
    };
    var $colon = cons;
    var $minus = function (dict) {
        return dict["-"];
    };
    var $plus = function (dict) {
        return dict["+"];
    };
    var $times = function (dict) {
        return dict["*"];
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var unit = {};
    var showNumber = function (_) {
        return new Show(showNumberImpl);
    };
    var show = function (dict) {
        return dict.show;
    };
    var semigroupoidArr = function (_) {
        return new Semigroupoid(function (f) {
            return function (g) {
                return function (x) {
                    return f(g(x));
                };
            };
        });
    };
    var pure = function (dict) {
        return dict.pure;
    };
    var $$return = function (__dict_Monad_4) {
        return pure(__dict_Monad_4["__superclass_Prelude.Applicative_0"]({}));
    };
    var numNumber = function (_) {
        return new Num(numMod, numMul, numAdd, numSub, numDiv, numNegate);
    };
    var liftA1 = function (__dict_Applicative_6) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_6["__superclass_Prelude.Apply_0"]({}))(pure(__dict_Applicative_6)(f))(a);
            };
        };
    };
    var id = function (dict) {
        return dict.id;
    };
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var $$const = function (_33) {
        return function (_34) {
            return _33;
        };
    };
    var categoryArr = function (_) {
        return new Category(function (__1) {
            return semigroupoidArr({});
        }, function (x) {
            return x;
        });
    };
    var ap = function (__dict_Monad_14) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(f)(function (_2) {
                    return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(a)(function (_1) {
                        return $$return(__dict_Monad_14)(_2(_1));
                    });
                });
            };
        };
    };
    return {
        Unit: Unit, 
        Num: Num, 
        Monad: Monad, 
        Bind: Bind, 
        Applicative: Applicative, 
        Apply: Apply, 
        Functor: Functor, 
        Show: Show, 
        Category: Category, 
        Semigroupoid: Semigroupoid, 
        unit: unit, 
        "<>": $less$greater, 
        "*": $times, 
        "-": $minus, 
        "+": $plus, 
        ap: ap, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "<$>": $less$dollar$greater, 
        show: show, 
        cons: cons, 
        ":": $colon, 
        "$": $dollar, 
        id: id, 
        "<<<": $less$less$less, 
        "const": $$const, 
        flip: flip, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showNumber: showNumber, 
        numNumber: numNumber
    };
})();
var PS = PS || {};
PS.Math = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var floor = Math.floor;;
    var sqrt = Math.sqrt;;
    return {
        sqrt: sqrt, 
        floor: floor
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function runFn3(fn) {  return function(a) {    return function(b) {      return function(c) {        return fn(a, b, c);      };    };  };};
    function runFn4(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return fn(a, b, c, d);        };      };    };  };};
    return {
        runFn4: runFn4, 
        runFn3: runFn3
    };
})();
var PS = PS || {};
PS.Data_Either = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Left(value0) {
        this.value0 = value0;
    };
    Left.create = function (value0) {
        return new Left(value0);
    };
    function Right(value0) {
        this.value0 = value0;
    };
    Right.create = function (value0) {
        return new Right(value0);
    };
    var functorEither = function (_) {
        return new Prelude.Functor(function (_62) {
            return function (_63) {
                if (_63 instanceof Left) {
                    return new Left(_63.value0);
                };
                if (_63 instanceof Right) {
                    return new Right(_62(_63.value0));
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var either = function (_59) {
        return function (_60) {
            return function (_61) {
                if (_61 instanceof Left) {
                    return _59(_61.value0);
                };
                if (_61 instanceof Right) {
                    return _60(_61.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var applyEither = function (_) {
        return new Prelude.Apply(function (_64) {
            return function (_65) {
                if (_64 instanceof Left) {
                    return new Left(_64.value0);
                };
                if (_64 instanceof Right) {
                    return Prelude["<$>"](functorEither({}))(_64.value0)(_65);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return functorEither({});
        });
    };
    var bindEither = function (_) {
        return new Prelude.Bind(either(function (e) {
            return function (__1) {
                return new Left(e);
            };
        })(function (a) {
            return function (f) {
                return f(a);
            };
        }), function (__1) {
            return applyEither({});
        });
    };
    return {
        Left: Left, 
        Right: Right, 
        either: either, 
        functorEither: functorEither, 
        applyEither: applyEither, 
        bindEither: bindEither
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function returnE(a) {  return function() {    return a;  };};
    function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
    var applicativeEff = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyEff({});
        }, returnE);
    };
    var applyEff = function (_) {
        return new Prelude.Apply(Prelude.ap(monadEff({})), function (__1) {
            return functorEff({});
        });
    };
    var monadEff = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeEff({});
        }, function (__1) {
            return bindEff({});
        });
    };
    var bindEff = function (_) {
        return new Prelude.Bind(bindE, function (__1) {
            return applyEff({});
        });
    };
    var functorEff = function (_) {
        return new Prelude.Functor(Prelude.liftA1(applicativeEff({})));
    };
    return {
        bindE: bindE, 
        returnE: returnE, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Ref = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function newRef(val) {  return function () {    return { value: val };  };};
    function readRef(ref) {  return function() {    return ref.value;  };};
    function modifyRef(ref) {  return function(f) {    return function() {      ref.value = f(ref.value);      return {};    };  };};
    function writeRef(ref) {  return function(val) {    return function() {      ref.value = val;      return {};    };  };};
    return {
        writeRef: writeRef, 
        modifyRef: modifyRef, 
        readRef: readRef, 
        newRef: newRef
    };
})();
var PS = PS || {};
PS.Control_Apply = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $times$greater = function (__dict_Apply_35) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_35)(Prelude["<$>"](__dict_Apply_35["__superclass_Prelude.Functor_0"]({}))(Prelude["const"](Prelude.id(Prelude.categoryArr({}))))(a))(b);
            };
        };
    };
    return {
        "*>": $times$greater
    };
})();
var PS = PS || {};
PS.Data_Array = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function map (f) {  return function (arr) {    var l = arr.length;    var result = new Array(l);    for (var i = 0; i < l; i++) {      result[i] = f(arr[i]);    }    return result;  };};
    function range (start) {  return function (end) {    var i = ~~start, e = ~~end;    var step = i > e ? -1 : 1;    var result = [i], n = 1;    while (i !== e) {      i += step;      result[n++] = i;    }    return result;  };};
    var functorArray = function (_) {
        return new Prelude.Functor(map);
    };
    return {
        range: range, 
        map: map, 
        functorArray: functorArray
    };
})();
var PS = PS || {};
PS.Data_Monoid = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var mempty = function (dict) {
        return dict.mempty;
    };
    return {
        mempty: mempty
    };
})();
var PS = PS || {};
PS.Data_Tuple = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Tuple(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tuple.create = function (value0) {
        return function (value1) {
            return new Tuple(value0, value1);
        };
    };
    var snd = function (_168) {
        return _168.value1;
    };
    return {
        Tuple: Tuple, 
        snd: snd
    };
})();
var PS = PS || {};
PS.Data_Foldable = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Apply = PS.Control_Apply;
    var Data_Monoid = PS.Data_Monoid;
    function Foldable(foldMap, foldl, foldr) {
        this.foldMap = foldMap;
        this.foldl = foldl;
        this.foldr = foldr;
    };
    function foldrArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = xs.length - 1; i >= 0; --i) {        acc = f(xs[i])(acc);      }      return acc;    }  }};
    function foldlArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = 0, len = xs.length; i < len; ++i) {        acc = f(acc)(xs[i]);      }      return acc;    }  }};
    var foldr = function (dict) {
        return dict.foldr;
    };
    var traverse_ = function (__dict_Applicative_82) {
        return function (__dict_Foldable_83) {
            return function (f) {
                return foldr(__dict_Foldable_83)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Apply["*>"](__dict_Applicative_82["__superclass_Prelude.Apply_0"]({})))(f))(Prelude.pure(__dict_Applicative_82)(Prelude.unit));
            };
        };
    };
    var for_ = function (__dict_Applicative_84) {
        return function (__dict_Foldable_85) {
            return Prelude.flip(traverse_(__dict_Applicative_84)(__dict_Foldable_85));
        };
    };
    var foldl = function (dict) {
        return dict.foldl;
    };
    var sum = function (__dict_Foldable_92) {
        return foldl(__dict_Foldable_92)(Prelude["+"](Prelude.numNumber({})))(0);
    };
    var foldableArray = function (_) {
        return new Foldable(function (__dict_Monoid_97) {
            return function (f) {
                return function (xs) {
                    return foldr(foldableArray({}))(function (x) {
                        return function (acc) {
                            return Prelude["<>"](__dict_Monoid_97["__superclass_Prelude.Semigroup_0"]({}))(f(x))(acc);
                        };
                    })(Data_Monoid.mempty(__dict_Monoid_97))(xs);
                };
            };
        }, function (f) {
            return function (z) {
                return function (xs) {
                    return foldlArray(f)(z)(xs);
                };
            };
        }, function (f) {
            return function (z) {
                return function (xs) {
                    return foldrArray(f)(z)(xs);
                };
            };
        });
    };
    return {
        Foldable: Foldable, 
        foldlArray: foldlArray, 
        foldrArray: foldrArray, 
        sum: sum, 
        for_: for_, 
        traverse_: traverse_, 
        foldl: foldl, 
        foldr: foldr, 
        foldableArray: foldableArray
    };
})();
var PS = PS || {};
PS.Data_Traversable = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Data_Foldable = PS.Data_Foldable;
    function Traversable(__superclass_Data$dotFoldable$dotFoldable_1, __superclass_Prelude$dotFunctor_0, sequence, traverse) {
        this["__superclass_Data.Foldable.Foldable_1"] = __superclass_Data$dotFoldable$dotFoldable_1;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
        this.sequence = sequence;
        this.traverse = traverse;
    };
    var traverse = function (dict) {
        return dict.traverse;
    };
    var sequence = function (dict) {
        return dict.sequence;
    };
    var traversableArray = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableArray({});
        }, function (__1) {
            return Data_Array.functorArray({});
        }, function (__dict_Applicative_122) {
            return function (_242) {
                if (_242.length === 0) {
                    return Prelude.pure(__dict_Applicative_122)([  ]);
                };
                if (_242.length > 0) {
                    var _293 = _242.slice(1);
                    return Prelude["<*>"](__dict_Applicative_122["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_122["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_242[0]))(sequence(traversableArray({}))(__dict_Applicative_122)(_293));
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_121) {
            return function (_240) {
                return function (_241) {
                    if (_241.length === 0) {
                        return Prelude.pure(__dict_Applicative_121)([  ]);
                    };
                    if (_241.length > 0) {
                        var _297 = _241.slice(1);
                        return Prelude["<*>"](__dict_Applicative_121["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_121["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_240(_241[0])))(traverse(traversableArray({}))(__dict_Applicative_121)(_240)(_297));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var $$for = function (__dict_Applicative_124) {
        return function (__dict_Traversable_125) {
            return function (x) {
                return function (f) {
                    return traverse(__dict_Traversable_125)(__dict_Applicative_124)(f)(x);
                };
            };
        };
    };
    return {
        Traversable: Traversable, 
        "for": $$for, 
        sequence: sequence, 
        traverse: traverse, 
        traversableArray: traversableArray
    };
})();
var PS = PS || {};
PS.Data_Foreign = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Function = PS.Data_Function;
    var Data_Either = PS.Data_Either;
    function ForeignParser(value0) {
        this.value0 = value0;
    };
    ForeignParser.create = function (value0) {
        return new ForeignParser(value0);
    };
    function ReadForeign(read) {
        this.read = read;
    };
    function fromStringImpl(left, right, str) {   try {     return right(JSON.parse(str));   } catch (e) {     return left(e.toString());   } };
    function readPrimTypeImpl(left, right, typeName, value) {   if (toString.call(value) == '[object ' + typeName + ']') {     return right(value);  }   return left('Value is not a ' + typeName + ''); };
    var readPrimType = function (ty) {
        return function (x) {
            return readPrimTypeImpl(Data_Either.Left.create, Data_Either.Right.create, ty, x);
        };
    };
    var readString = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("String")));
    };
    var readNumber = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("Number")));
    };
    var read = function (dict) {
        return dict.read;
    };
    var parseForeign = function (_255) {
        return function (_256) {
            return _255.value0(_256);
        };
    };
    var fromString = function (s) {
        return fromStringImpl(Data_Either.Left.create, Data_Either.Right.create, s);
    };
    var parseJSON = function (__dict_ReadForeign_130) {
        return function (json) {
            return Prelude[">>="](Data_Either.bindEither({}))(fromString(json))(parseForeign(read(__dict_ReadForeign_130)));
        };
    };
    return {
        ForeignParser: ForeignParser, 
        ReadForeign: ReadForeign, 
        read: read, 
        parseJSON: parseJSON, 
        parseForeign: parseForeign, 
        readString: readString, 
        readNumber: readNumber
    };
})();
var PS = PS || {};
PS.Control_Monad_JQuery = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function ready(func) {   return function () {     jQuery(document).ready(func);   }; };
    function select(selector) {   return function () {     return jQuery(selector);   }; };
    function create(html) {   return function () {     return jQuery(html);   }; };
    function append(ob1) {   return function(ob) {     return function () {       return ob.append(ob1);     };   }; };
    function setText(text) {   return function(ob) {     return function() {       return ob.text(text);     };  };};
    function getValue(ob) {   return function() {     return ob.val();   }; };
    function setValue(val) {   return function(ob) {     return function() {       return ob.val(val);     };   }; };
    function on(evt) {   return function(act) {     return function(ob) {       return function() {         return ob.on(evt, function(e) {           act(e)(jQuery(this))();         });       };     };   }; };
    return {
        on: on, 
        setValue: setValue, 
        getValue: getValue, 
        setText: setText, 
        append: append, 
        create: create, 
        select: select, 
        ready: ready
    };
})();
var PS = PS || {};
PS.Main = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_Eff_Ref = PS.Control_Monad_Eff_Ref;
    var Data_Traversable = PS.Data_Traversable;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Foldable = PS.Data_Foldable;
    var Math = PS.Math;
    var Data_Array = PS.Data_Array;
    var Control_Monad_JQuery = PS.Control_Monad_JQuery;
    var Data_Either = PS.Data_Either;
    var Data_Foreign = PS.Data_Foreign;
    function Status(value0) {
        this.value0 = value0;
    };
    Status.create = function (value0) {
        return new Status(value0);
    };
    var sumStatus = function (_267) {
        return function __do() {
            var _11 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad_Eff_Ref.readRef(_267.value0.raders))(Prelude.flip(Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({})))(Control_Monad_Eff_Ref.readRef))();
            var _10 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad_Eff_Ref.readRef(_267.value0.planes))(Prelude.flip(Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({})))(Control_Monad_Eff_Ref.readRef))();
            var _9 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(_267.value0.fleet)(function (i) {
                return Control_Monad_Eff_Ref.readRef(Data_Tuple.snd(i));
            })();
            return (function () {
                var fv = (Data_Foldable.sum(Data_Foldable.foldableArray({}))(_9) - Data_Foldable.sum(Data_Foldable.foldableArray({}))(_11)) - Data_Foldable.sum(Data_Foldable.foldableArray({}))(_10);
                return Prelude["return"](Control_Monad_Eff.monadEff({}))((Data_Foldable.sum(Data_Foldable.foldableArray({}))(_11) + 2 * Data_Foldable.sum(Data_Foldable.foldableArray({}))(_10)) + Math.floor(Math.sqrt(fv)));
            })()();
        };
    };
    var initStatus = function __do() {
        var _8 = Control_Monad_Eff_Ref.newRef([  ])();
        var _7 = Control_Monad_Eff_Ref.newRef([  ])();
        var _6 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(Data_Array.range(0)(5))(function (i) {
            return Prelude["<$>"](Control_Monad_Eff.functorEff({}))(Data_Tuple.Tuple.create(i))(Control_Monad_Eff_Ref.newRef(0));
        })();
        return new Status({
            raders: _8, 
            planes: _7, 
            fleet: _6
        });
    };
    var initFleet = function (_268) {
        return function (_269) {
            return function (_270) {
                return Data_Foldable.for_(Control_Monad_Eff.applicativeEff({}))(Data_Foldable.foldableArray({}))(_270.value0.fleet)(function (_266) {
                    return function __do() {
                        var _27 = Control_Monad_Eff_Ref.readRef(_266.value1)();
                        var _26 = Control_Monad_JQuery.create("<tr>")();
                        var _25 = Control_Monad_JQuery.create("<td>")();
                        var _24 = Control_Monad_JQuery.create("<td>")();
                        var _23 = Control_Monad_JQuery.create("<input style=\"width: 3em\" type=number value=0>")();
                        Control_Monad_JQuery.append(_23)(_24)();
                        var __1 = Control_Monad_JQuery.append(_25)(_26)();
                        var __2 = Control_Monad_JQuery.append(_24)(_26)();
                        var __3 = Control_Monad_JQuery.append(_26)(_269)();
                        var __4 = Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(_266.value0))(_25)();
                        var __5 = Control_Monad_JQuery.setValue(Prelude.show(Prelude.showNumber({}))(_27))(_23)();
                        return Prelude.flip(Control_Monad_JQuery.on("change"))(_23)(function (__6) {
                            return function (__7) {
                                return function __do() {
                                    var _22 = Control_Monad_JQuery.getValue(_23)();
                                    return (function (_319) {
                                        if (_319 instanceof Data_Either.Right) {
                                            return function __do() {
                                                var __8 = Control_Monad_Eff_Ref.writeRef(_266.value1)(_319.value0)();
                                                var _21 = sumStatus(_270)();
                                                return Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(_21))(_268)();
                                            };
                                        };
                                        throw new Error("Failed pattern match");
                                    })(Prelude[">>="](Data_Either.bindEither({}))(Data_Foreign.parseForeign(Data_Foreign.read(Data_Foreign.readString({})))(_22))(Data_Foreign.parseJSON(Data_Foreign.readNumber({}))))();
                                };
                            };
                        })();
                    };
                });
            };
        };
    };
    var equipField = function (name) {
        return function (value) {
            return function __do() {
                var _16 = Control_Monad_JQuery.create("<tr>")();
                var _15 = Control_Monad_JQuery.create("<td>")();
                var _14 = Control_Monad_JQuery.create("<td>")();
                var _13 = Control_Monad_JQuery.create("<td>")();
                var _12 = Control_Monad_JQuery.create("<input style=\"width: 3em\" type=number value=0>")();
                Control_Monad_JQuery.append(_12)(_15)();
                var __1 = Control_Monad_JQuery.append(_15)(_16)();
                var __2 = Control_Monad_JQuery.append(_14)(_16)();
                var __3 = Control_Monad_JQuery.append(_13)(_16)();
                var __4 = Control_Monad_JQuery.setText(name)(_14)();
                var __5 = Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(value))(_13)();
                return new Data_Tuple.Tuple(_12, _16);
            };
        };
    };
    var newEquip = function (getter) {
        return function (result) {
            return function (status) {
                return function (tbl) {
                    return function (name) {
                        return function (value) {
                            return function __do() {
                                var _20 = equipField(name)(value)();
                                var _19 = Control_Monad_Eff_Ref.newRef(0)();
                                Control_Monad_Eff_Ref.modifyRef(getter(status))(function (s) {
                                    return Prelude[":"](_19)(s);
                                })();
                                var __1 = Prelude.flip(Control_Monad_JQuery.on("change"))(_20.value0)(function (__1) {
                                    return function (__2) {
                                        return function __do() {
                                            var _18 = Control_Monad_JQuery.getValue(_20.value0)();
                                            return (function (_333) {
                                                if (_333 instanceof Data_Either.Right) {
                                                    return function __do() {
                                                        var __3 = Control_Monad_Eff_Ref.writeRef(_19)(value * _333.value0)();
                                                        var _17 = sumStatus(status)();
                                                        return Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(_17))(result)();
                                                    };
                                                };
                                                throw new Error("Failed pattern match");
                                            })(Prelude[">>="](Data_Either.bindEither({}))(Data_Foreign.parseForeign(Data_Foreign.read(Data_Foreign.readString({})))(_18))(Data_Foreign.parseJSON(Data_Foreign.readNumber({}))))();
                                        };
                                    };
                                })();
                                return Control_Monad_JQuery.append(_20.value1)(tbl)();
                            };
                        };
                    };
                };
            };
        };
    };
    var newPlane = newEquip(function (_265) {
        return _265.value0.planes;
    });
    var newRader = newEquip(function (_264) {
        return _264.value0.raders;
    });
    var main = Control_Monad_JQuery.ready(function __do() {
        var _32 = Control_Monad_JQuery.select("#rader")();
        var _31 = Control_Monad_JQuery.select("#plane")();
        var _30 = Control_Monad_JQuery.select("#fleet")();
        var _29 = Control_Monad_JQuery.select("#result")();
        var _28 = initStatus();
        initFleet(_29)(_30)(_28)();
        var __1 = newRader(_29)(_28)(_32)("13\u53f7\u5bfe\u7a7a\u96fb\u63a2")(3)();
        var __2 = newRader(_29)(_28)(_32)("13\u53f7\u5bfe\u7a7a\u96fb\u63a2\u6539")(4)();
        var __3 = newRader(_29)(_28)(_32)("14\u53f7\u5bfe\u7a7a\u96fb\u63a2")(5)();
        var __4 = newRader(_29)(_28)(_32)("21\u53f7\u5bfe\u7a7a\u96fb\u63a2")(4)();
        var __5 = newRader(_29)(_28)(_32)("21\u53f7\u5bfe\u7a7a\u96fb\u63a2\u6539")(6)();
        var __6 = newRader(_29)(_28)(_32)("22\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2")(5)();
        var __7 = newRader(_29)(_28)(_32)("22\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2\u6539\u56db")(5)();
        var __8 = newRader(_29)(_28)(_32)("32\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2")(10)();
        var __9 = newRader(_29)(_28)(_32)("33\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2")(7)();
        var __10 = newPlane(_29)(_28)(_31)("\u96f6\u5f0f\u6c34\u4e0a\u5075\u5bdf\u6a5f")(5)();
        var __11 = newPlane(_29)(_28)(_31)("\u96f6\u5f0f\u6c34\u4e0a\u89b3\u6e2c\u6a5f")(6)();
        var __12 = newPlane(_29)(_28)(_31)("\u4e5d\u516b\u5f0f\u6c34\u4e0a\u5075\u5bdf\u6a5f(\u591c\u5075)")(3)();
        var __13 = newPlane(_29)(_28)(_31)("\u745e\u96f2")(6)();
        var __14 = newPlane(_29)(_28)(_31)("\u745e\u96f2(\u516d\u4e09\u56db\u7a7a)")(6)();
        var __15 = newPlane(_29)(_28)(_31)("\u745e\u96f212\u578b")(6)();
        var __16 = newPlane(_29)(_28)(_31)("\u745e\u96f212\u578b(\u516d\u4e09\u56db\u7a7a)")(7)();
        var __17 = newPlane(_29)(_28)(_31)("\u5f69\u96f2")(9)();
        return newPlane(_29)(_28)(_31)("\u4e8c\u5f0f\u8266\u4e0a\u5075\u5bdf\u6a5f")(7)();
    });
    return {
        Status: Status, 
        main: main, 
        initFleet: initFleet, 
        newPlane: newPlane, 
        newRader: newRader, 
        newEquip: newEquip, 
        equipField: equipField, 
        sumStatus: sumStatus, 
        initStatus: initStatus
    };
})();
PS.Main.main();