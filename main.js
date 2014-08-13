var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    var Unit = {
        create: function (value) {
            return value;
        }
    };
    function LT() {

    };
    LT.value = new LT();
    function GT() {

    };
    GT.value = new GT();
    function EQ() {

    };
    EQ.value = new EQ();
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
    function Eq($div$eq, $eq$eq) {
        this["/="] = $div$eq;
        this["=="] = $eq$eq;
    };
    function Ord(__superclass_Prelude$dotEq_0, compare) {
        this["__superclass_Prelude.Eq_0"] = __superclass_Prelude$dotEq_0;
        this.compare = compare;
    };
    function Bits($amp, $up, complement, shl, shr, zshr, $bar) {
        this["&"] = $amp;
        this["^"] = $up;
        this.complement = complement;
        this.shl = shl;
        this.shr = shr;
        this.zshr = zshr;
        this["|"] = $bar;
    };
    function BoolLike($amp$amp, not, $bar$bar) {
        this["&&"] = $amp$amp;
        this.not = not;
        this["||"] = $bar$bar;
    };
    function Semigroup($less$greater) {
        this["<>"] = $less$greater;
    };
    function cons(e) {  return function (l) {    return [e].concat(l);  };};
    function showStringImpl(s) {  return JSON.stringify(s);};
    function showNumberImpl(n) {  return n.toString();};
    function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
    function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
    function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
    function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
    function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
    function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
    function numNegate(n) {  return -n;};
    function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
    function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
    function eqArrayImpl(f) {  return function(xs) {    return function(ys) {      if (xs.length !== ys.length) return false;      for (var i = 0; i < xs.length; i++) {        if (!f(xs[i])(ys[i])) return false;      }      return true;    };  };};
    function unsafeCompareImpl(lt) {  return function (eq) {    return function (gt) {      return function (x) {        return function (y) {          return x < y ? lt : x > y ? gt : eq;        };      };    };  };};
    function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
    function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
    function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
    function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
    function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
    function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
    function numComplement(n) {  return ~n;};
    function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
    function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
    function boolNot(b) {  return !b;};
    function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
    var $bar$bar = function (dict) {
        return dict["||"];
    };
    var $bar = function (dict) {
        return dict["|"];
    };
    var $up = function (dict) {
        return dict["^"];
    };
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $eq$eq = function (dict) {
        return dict["=="];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$less$less = function (dict) {
        return dict["<<<"];
    };
    var $greater$greater$greater = function (__dict_Semigroupoid_0) {
        return function (f) {
            return function (g) {
                return $less$less$less(__dict_Semigroupoid_0)(g)(f);
            };
        };
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $less$dollar$greater = function (dict) {
        return dict["<$>"];
    };
    var $colon = cons;
    var $div$eq = function (dict) {
        return dict["/="];
    };
    var $div = function (dict) {
        return dict["/"];
    };
    var $minus = function (dict) {
        return dict["-"];
    };
    var $plus$plus = function (__dict_Semigroup_1) {
        return $less$greater(__dict_Semigroup_1);
    };
    var $plus = function (dict) {
        return dict["+"];
    };
    var $times = function (dict) {
        return dict["*"];
    };
    var $amp$amp = function (dict) {
        return dict["&&"];
    };
    var $amp = function (dict) {
        return dict["&"];
    };
    var $percent = function (dict) {
        return dict["%"];
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var $hash = function (x) {
        return function (f) {
            return f(x);
        };
    };
    var zshr = function (dict) {
        return dict.zshr;
    };
    var unsafeCompare = unsafeCompareImpl(LT.value)(EQ.value)(GT.value);
    var unit = {};
    var shr = function (dict) {
        return dict.shr;
    };
    var showUnit = function (_) {
        return new Show(function (_36) {
            return "Unit {}";
        });
    };
    var showString = function (_) {
        return new Show(showStringImpl);
    };
    var showOrdering = function (_) {
        return new Show(function (_44) {
            if (_44 instanceof LT) {
                return "LT";
            };
            if (_44 instanceof GT) {
                return "GT";
            };
            if (_44 instanceof EQ) {
                return "EQ";
            };
            throw new Error("Failed pattern match");
        });
    };
    var showNumber = function (_) {
        return new Show(showNumberImpl);
    };
    var showBoolean = function (_) {
        return new Show(function (_37) {
            if (_37) {
                return "true";
            };
            if (!_37) {
                return "false";
            };
            throw new Error("Failed pattern match");
        });
    };
    var show = function (dict) {
        return dict.show;
    };
    var showArray = function (__dict_Show_2) {
        return new Show(showArrayImpl(show(__dict_Show_2)));
    };
    var shl = function (dict) {
        return dict.shl;
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
    var semigroupUnit = function (_) {
        return new Semigroup(function (_51) {
            return function (_52) {
                return {};
            };
        });
    };
    var semigroupString = function (_) {
        return new Semigroup(concatString);
    };
    var semigroupArr = function (__dict_Semigroup_3) {
        return new Semigroup(function (f) {
            return function (g) {
                return function (x) {
                    return $less$greater(__dict_Semigroup_3)(f(x))(g(x));
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
    var not = function (dict) {
        return dict.not;
    };
    var negate = function (dict) {
        return dict.negate;
    };
    var liftM1 = function (__dict_Monad_5) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_5["__superclass_Prelude.Bind_1"]({}))(a)(function (_0) {
                    return $$return(__dict_Monad_5)(f(_0));
                });
            };
        };
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
    var functorArr = function (_) {
        return new Functor($less$less$less(semigroupoidArr({})));
    };
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var eqUnit = function (_) {
        return new Eq(function (_40) {
            return function (_41) {
                return false;
            };
        }, function (_38) {
            return function (_39) {
                return true;
            };
        });
    };
    var ordUnit = function (_) {
        return new Ord(function (__1) {
            return eqUnit({});
        }, function (_45) {
            return function (_46) {
                return EQ.value;
            };
        });
    };
    var eqString = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordString = function (_) {
        return new Ord(function (__1) {
            return eqString({});
        }, unsafeCompare);
    };
    var eqNumber = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordNumber = function (_) {
        return new Ord(function (__1) {
            return eqNumber({});
        }, unsafeCompare);
    };
    var eqBoolean = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordBoolean = function (_) {
        return new Ord(function (__1) {
            return eqBoolean({});
        }, function (_47) {
            return function (_48) {
                if (!_47 && !_48) {
                    return EQ.value;
                };
                if (!_47 && _48) {
                    return LT.value;
                };
                if (_47 && _48) {
                    return EQ.value;
                };
                if (_47 && !_48) {
                    return GT.value;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var $$const = function (_32) {
        return function (_33) {
            return _32;
        };
    };
    var $$void = function (__dict_Functor_8) {
        return function (fa) {
            return $less$dollar$greater(__dict_Functor_8)($$const(unit))(fa);
        };
    };
    var complement = function (dict) {
        return dict.complement;
    };
    var compare = function (dict) {
        return dict.compare;
    };
    var $less = function (__dict_Ord_10) {
        return function (a1) {
            return function (a2) {
                return (function (_286) {
                    if (_286 instanceof LT) {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_10)(a1)(a2));
            };
        };
    };
    var $less$eq = function (__dict_Ord_11) {
        return function (a1) {
            return function (a2) {
                return (function (_287) {
                    if (_287 instanceof GT) {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_11)(a1)(a2));
            };
        };
    };
    var $greater = function (__dict_Ord_12) {
        return function (a1) {
            return function (a2) {
                return (function (_288) {
                    if (_288 instanceof GT) {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_12)(a1)(a2));
            };
        };
    };
    var $greater$eq = function (__dict_Ord_13) {
        return function (a1) {
            return function (a2) {
                return (function (_289) {
                    if (_289 instanceof LT) {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_13)(a1)(a2));
            };
        };
    };
    var categoryArr = function (_) {
        return new Category(function (__1) {
            return semigroupoidArr({});
        }, function (x) {
            return x;
        });
    };
    var boolLikeBoolean = function (_) {
        return new BoolLike(boolAnd, boolNot, boolOr);
    };
    var eqArray = function (__dict_Eq_7) {
        return new Eq(function (xs) {
            return function (ys) {
                return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_7))(xs)(ys));
            };
        }, function (xs) {
            return function (ys) {
                return eqArrayImpl($eq$eq(__dict_Eq_7))(xs)(ys);
            };
        });
    };
    var ordArray = function (__dict_Ord_9) {
        return new Ord(function (_) {
            return eqArray(__dict_Ord_9["__superclass_Prelude.Eq_0"]({}));
        }, function (_49) {
            return function (_50) {
                if (_49.length === 0 && _50.length === 0) {
                    return EQ.value;
                };
                if (_49.length === 0) {
                    return LT.value;
                };
                if (_50.length === 0) {
                    return GT.value;
                };
                if (_49.length > 0) {
                    var _296 = _49.slice(1);
                    if (_50.length > 0) {
                        var _294 = _50.slice(1);
                        return (function (_292) {
                            if (_292 instanceof EQ) {
                                return compare(ordArray(__dict_Ord_9))(_296)(_294);
                            };
                            return _292;
                        })(compare(__dict_Ord_9)(_49[0])(_50[0]));
                    };
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var eqOrdering = function (_) {
        return new Eq(function (x) {
            return function (y) {
                return not(boolLikeBoolean({}))($eq$eq(eqOrdering({}))(x)(y));
            };
        }, function (_42) {
            return function (_43) {
                if (_42 instanceof LT && _43 instanceof LT) {
                    return true;
                };
                if (_42 instanceof GT && _43 instanceof GT) {
                    return true;
                };
                if (_42 instanceof EQ && _43 instanceof EQ) {
                    return true;
                };
                return false;
            };
        });
    };
    var bitsNumber = function (_) {
        return new Bits(numAnd, numXor, numComplement, numShl, numShr, numZshr, numOr);
    };
    var asTypeOf = function (_34) {
        return function (_35) {
            return _34;
        };
    };
    var applyArr = function (_) {
        return new Apply(function (f) {
            return function (g) {
                return function (x) {
                    return f(x)(g(x));
                };
            };
        }, function (__1) {
            return functorArr({});
        });
    };
    var bindArr = function (_) {
        return new Bind(function (m) {
            return function (f) {
                return function (x) {
                    return f(m(x))(x);
                };
            };
        }, function (__1) {
            return applyArr({});
        });
    };
    var applicativeArr = function (_) {
        return new Applicative(function (__1) {
            return applyArr({});
        }, $$const);
    };
    var monadArr = function (_) {
        return new Monad(function (__1) {
            return applicativeArr({});
        }, function (__1) {
            return bindArr({});
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
        LT: LT, 
        GT: GT, 
        EQ: EQ, 
        Semigroup: Semigroup, 
        BoolLike: BoolLike, 
        Bits: Bits, 
        Ord: Ord, 
        Eq: Eq, 
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
        "++": $plus$plus, 
        "<>": $less$greater, 
        not: not, 
        "||": $bar$bar, 
        "&&": $amp$amp, 
        complement: complement, 
        zshr: zshr, 
        shr: shr, 
        shl: shl, 
        "^": $up, 
        "|": $bar, 
        "&": $amp, 
        ">=": $greater$eq, 
        "<=": $less$eq, 
        ">": $greater, 
        "<": $less, 
        compare: compare, 
        refIneq: refIneq, 
        refEq: refEq, 
        "/=": $div$eq, 
        "==": $eq$eq, 
        negate: negate, 
        "%": $percent, 
        "/": $div, 
        "*": $times, 
        "-": $minus, 
        "+": $plus, 
        ap: ap, 
        liftM1: liftM1, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "void": $$void, 
        "<$>": $less$dollar$greater, 
        show: show, 
        cons: cons, 
        ":": $colon, 
        "#": $hash, 
        "$": $dollar, 
        id: id, 
        ">>>": $greater$greater$greater, 
        "<<<": $less$less$less, 
        asTypeOf: asTypeOf, 
        "const": $$const, 
        flip: flip, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showUnit: showUnit, 
        showString: showString, 
        showBoolean: showBoolean, 
        showNumber: showNumber, 
        showArray: showArray, 
        functorArr: functorArr, 
        applyArr: applyArr, 
        applicativeArr: applicativeArr, 
        bindArr: bindArr, 
        monadArr: monadArr, 
        numNumber: numNumber, 
        eqUnit: eqUnit, 
        eqString: eqString, 
        eqNumber: eqNumber, 
        eqBoolean: eqBoolean, 
        eqArray: eqArray, 
        eqOrdering: eqOrdering, 
        showOrdering: showOrdering, 
        ordUnit: ordUnit, 
        ordBoolean: ordBoolean, 
        ordNumber: ordNumber, 
        ordString: ordString, 
        ordArray: ordArray, 
        bitsNumber: bitsNumber, 
        boolLikeBoolean: boolLikeBoolean, 
        semigroupUnit: semigroupUnit, 
        semigroupString: semigroupString, 
        semigroupArr: semigroupArr
    };
})();
var PS = PS || {};
PS.Prelude_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function unsafeIndex(xs) {  return function(n) {    return xs[n];  };};
    return {
        unsafeIndex: unsafeIndex
    };
})();
var PS = PS || {};
PS.Math = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var abs = Math.abs;;
    var acos = Math.acos;;
    var asin = Math.asin;;
    var atan = Math.atan;;
    function atan2(y){  return function (x) {    return Math.atan2(y, x);  };};
    var ceil = Math.ceil;;
    var cos = Math.cos;;
    var exp = Math.exp;;
    var floor = Math.floor;;
    var log = Math.log;;
    function max(n1){  return function(n2) {    return Math.max(n1, n2);  }};
    function min(n1){  return function(n2) {    return Math.min(n1, n2);  }};
    function pow(n){  return function(p) {    return Math.pow(n, p);  }};
    var round = Math.round;;
    var sin = Math.sin;;
    var sqrt = Math.sqrt;;
    var tan = Math.tan;;
    var e       = Math.E;;
    var ln2     = Math.LN2;;
    var ln10    = Math.LN10;;
    var log2e   = Math.LOG2E;;
    var log10e  = Math.LOG10E;;
    var pi      = Math.PI;;
    var sqrt1_2 = Math.SQRT1_2;;
    var sqrt2   = Math.SQRT2;;
    return {
        sqrt2: sqrt2, 
        sqrt1_2: sqrt1_2, 
        pi: pi, 
        log10e: log10e, 
        log2e: log2e, 
        ln10: ln10, 
        ln2: ln2, 
        e: e, 
        tan: tan, 
        sqrt: sqrt, 
        sin: sin, 
        round: round, 
        pow: pow, 
        min: min, 
        max: max, 
        log: log, 
        floor: floor, 
        exp: exp, 
        cos: cos, 
        ceil: ceil, 
        atan2: atan2, 
        atan: atan, 
        asin: asin, 
        acos: acos, 
        abs: abs
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function mkFn0(fn) {  return function() {    return fn({});  };};
    function mkFn1(fn) {  return function(a) {    return fn(a);  };};
    function mkFn2(fn) {  return function(a, b) {    return fn(a)(b);  };};
    function mkFn3(fn) {  return function(a, b, c) {    return fn(a)(b)(c);  };};
    function mkFn4(fn) {  return function(a, b, c, d) {    return fn(a)(b)(c)(d);  };};
    function mkFn5(fn) {  return function(a, b, c, d, e) {    return fn(a)(b)(c)(d)(e);  };};
    function mkFn6(fn) {  return function(a, b, c, d, e, f) {    return fn(a)(b)(c)(d)(e)(f);  };};
    function mkFn7(fn) {  return function(a, b, c, d, e, f, g) {    return fn(a)(b)(c)(d)(e)(f)(g);  };};
    function mkFn8(fn) {  return function(a, b, c, d, e, f, g, h) {    return fn(a)(b)(c)(d)(e)(f)(g)(h);  };};
    function mkFn9(fn) {  return function(a, b, c, d, e, f, g, h, i) {    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i);  };};
    function mkFn10(fn) {  return function(a, b, c, d, e, f, g, h, i, j) {    return fn(a)(b)(c)(d)(e)(f)(g)(h)(i)(j);  };};
    function runFn0(fn) {  return fn();};
    function runFn1(fn) {  return function(a) {    return fn(a);  };};
    function runFn2(fn) {  return function(a) {    return function(b) {      return fn(a, b);    };  };};
    function runFn3(fn) {  return function(a) {    return function(b) {      return function(c) {        return fn(a, b, c);      };    };  };};
    function runFn4(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return fn(a, b, c, d);        };      };    };  };};
    function runFn5(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return fn(a, b, c, d, e);          };        };      };    };  };};
    function runFn6(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return fn(a, b, c, d, e, f);            };          };        };      };    };  };};
    function runFn7(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return fn(a, b, c, d, e, f, g);              };            };          };        };      };    };  };};
    function runFn8(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return function(h) {                  return fn(a, b, c, d, e, f, g, h);                };              };            };          };        };      };    };  };};
    function runFn9(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return function(h) {                  return function(i) {                    return fn(a, b, c, d, e, f, g, h, i);                  };                };              };            };          };        };      };    };  };};
    function runFn10(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return function(f) {              return function(g) {                return function(h) {                  return function(i) {                    return function(j) {                      return fn(a, b, c, d, e, f, g, h, i, j);                    };                  };                };              };            };          };        };      };    };  };};
    var on = function (f) {
        return function (g) {
            return function (x) {
                return function (y) {
                    return f(g(x))(g(y));
                };
            };
        };
    };
    return {
        runFn10: runFn10, 
        runFn9: runFn9, 
        runFn8: runFn8, 
        runFn7: runFn7, 
        runFn6: runFn6, 
        runFn5: runFn5, 
        runFn4: runFn4, 
        runFn3: runFn3, 
        runFn2: runFn2, 
        runFn1: runFn1, 
        runFn0: runFn0, 
        mkFn10: mkFn10, 
        mkFn9: mkFn9, 
        mkFn8: mkFn8, 
        mkFn7: mkFn7, 
        mkFn6: mkFn6, 
        mkFn5: mkFn5, 
        mkFn4: mkFn4, 
        mkFn3: mkFn3, 
        mkFn2: mkFn2, 
        mkFn1: mkFn1, 
        mkFn0: mkFn0, 
        on: on
    };
})();
var PS = PS || {};
PS.Data_Eq = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Ref = {
        create: function (value) {
            return value;
        }
    };
    var liftRef = function (_53) {
        return function (_54) {
            return function (_55) {
                return _53(_54)(_55);
            };
        };
    };
    var functorRef = function (_) {
        return new Prelude.Functor(function (_56) {
            return function (_57) {
                return _56(_57);
            };
        });
    };
    var eqRef = function (_) {
        return new Prelude.Eq(liftRef(Prelude.refIneq), liftRef(Prelude.refEq));
    };
    return {
        Ref: Ref, 
        liftRef: liftRef, 
        eqRef: eqRef, 
        functorRef: functorRef
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
    var showEither = function (__dict_Show_15) {
        return function (__dict_Show_16) {
            return new Prelude.Show(function (_65) {
                if (_65 instanceof Left) {
                    return "Left (" + Prelude.show(__dict_Show_15)(_65.value0) + ")";
                };
                if (_65 instanceof Right) {
                    return "Right (" + Prelude.show(__dict_Show_16)(_65.value0) + ")";
                };
                throw new Error("Failed pattern match");
            });
        };
    };
    var functorEither = function (_) {
        return new Prelude.Functor(function (_61) {
            return function (_62) {
                if (_62 instanceof Left) {
                    return new Left(_62.value0);
                };
                if (_62 instanceof Right) {
                    return new Right(_61(_62.value0));
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var eqEither = function (__dict_Eq_19) {
        return function (__dict_Eq_20) {
            return new Prelude.Eq(function (a) {
                return function (b) {
                    return !Prelude["=="](eqEither(__dict_Eq_19)(__dict_Eq_20))(a)(b);
                };
            }, function (_66) {
                return function (_67) {
                    if (_66 instanceof Left && _67 instanceof Left) {
                        return Prelude["=="](__dict_Eq_19)(_66.value0)(_67.value0);
                    };
                    if (_66 instanceof Right && _67 instanceof Right) {
                        return Prelude["=="](__dict_Eq_20)(_66.value0)(_67.value0);
                    };
                    return false;
                };
            });
        };
    };
    var ordEither = function (__dict_Ord_17) {
        return function (__dict_Ord_18) {
            return new Prelude.Ord(function (_) {
                return eqEither(__dict_Ord_17["__superclass_Prelude.Eq_0"]({}))(__dict_Ord_18["__superclass_Prelude.Eq_0"]({}));
            }, function (_68) {
                return function (_69) {
                    if (_68 instanceof Left && _69 instanceof Left) {
                        return Prelude.compare(__dict_Ord_17)(_68.value0)(_69.value0);
                    };
                    if (_68 instanceof Right && _69 instanceof Right) {
                        return Prelude.compare(__dict_Ord_18)(_68.value0)(_69.value0);
                    };
                    if (_68 instanceof Left) {
                        return Prelude.LT.value;
                    };
                    if (_69 instanceof Left) {
                        return Prelude.GT.value;
                    };
                    throw new Error("Failed pattern match");
                };
            });
        };
    };
    var either = function (_58) {
        return function (_59) {
            return function (_60) {
                if (_60 instanceof Left) {
                    return _58(_60.value0);
                };
                if (_60 instanceof Right) {
                    return _59(_60.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var isLeft = either(Prelude["const"](true))(Prelude["const"](false));
    var isRight = either(Prelude["const"](false))(Prelude["const"](true));
    var applyEither = function (_) {
        return new Prelude.Apply(function (_63) {
            return function (_64) {
                if (_63 instanceof Left) {
                    return new Left(_63.value0);
                };
                if (_63 instanceof Right) {
                    return Prelude["<$>"](functorEither({}))(_63.value0)(_64);
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
    var applicativeEither = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyEither({});
        }, Right.create);
    };
    var monadEither = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeEither({});
        }, function (__1) {
            return bindEither({});
        });
    };
    return {
        Left: Left, 
        Right: Right, 
        isRight: isRight, 
        isLeft: isLeft, 
        either: either, 
        functorEither: functorEither, 
        applyEither: applyEither, 
        applicativeEither: applicativeEither, 
        bindEither: bindEither, 
        monadEither: monadEither, 
        showEither: showEither, 
        eqEither: eqEither, 
        ordEither: ordEither
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function returnE(a) {  return function() {    return a;  };};
    function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
    function runPure(f) {  return f();};
    function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
    function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
    function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
    function foreachE(as) {  return function(f) {    return function() {      for (var i = 0; i < as.length; i++) {        f(as[i])();      }    };  };};
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
        foreachE: foreachE, 
        forE: forE, 
        whileE: whileE, 
        untilE: untilE, 
        runPure: runPure, 
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
PS.Control_Monad_Eff_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function unsafeInterleaveEff(f) {  return f;};
    return {
        unsafeInterleaveEff: unsafeInterleaveEff
    };
})();
var PS = PS || {};
PS.Control_Monad_ST = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function newSTRef(val) {  return function () {    return { value: val };  };};
    function readSTRef(ref) {  return function() {    return ref.value;  };};
    function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
    function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
    function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
    function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
    function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
    function runST(f) {  return f;};
    function runSTArray(f) {  return f;};
    return {
        runSTArray: runSTArray, 
        runST: runST, 
        pokeSTArray: pokeSTArray, 
        peekSTArray: peekSTArray, 
        newSTArray: newSTArray, 
        writeSTRef: writeSTRef, 
        modifySTRef: modifySTRef, 
        readSTRef: readSTRef, 
        newSTRef: newSTRef
    };
})();
var PS = PS || {};
PS.Debug_Trace = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function trace(s) {  return function() {    console.log(s);    return {};  };};
    var print = function (__dict_Show_21) {
        return function (o) {
            return trace(Prelude.show(__dict_Show_21)(o));
        };
    };
    return {
        print: print, 
        trace: trace
    };
})();
var PS = PS || {};
PS.Control_Monad = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var when = function (__dict_Monad_22) {
        return function (_75) {
            return function (_76) {
                if (_75) {
                    return _76;
                };
                if (!_75) {
                    return Prelude["return"](__dict_Monad_22)(Prelude.unit);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var unless = function (__dict_Monad_23) {
        return function (_77) {
            return function (_78) {
                if (!_77) {
                    return _78;
                };
                if (_77) {
                    return Prelude["return"](__dict_Monad_23)(Prelude.unit);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var replicateM = function (__dict_Monad_24) {
        return function (_70) {
            return function (_71) {
                if (_70 === 0) {
                    return Prelude["return"](__dict_Monad_24)([  ]);
                };
                return Prelude[">>="](__dict_Monad_24["__superclass_Prelude.Bind_1"]({}))(_71)(function (_4) {
                    return Prelude[">>="](__dict_Monad_24["__superclass_Prelude.Bind_1"]({}))(replicateM(__dict_Monad_24)(_70 - 1)(_71))(function (_3) {
                        return Prelude["return"](__dict_Monad_24)(Prelude[":"](_4)(_3));
                    });
                });
            };
        };
    };
    var foldM = function (__dict_Monad_25) {
        return function (_72) {
            return function (_73) {
                return function (_74) {
                    if (_74.length === 0) {
                        return Prelude["return"](__dict_Monad_25)(_73);
                    };
                    if (_74.length > 0) {
                        var _350 = _74.slice(1);
                        return Prelude[">>="](__dict_Monad_25["__superclass_Prelude.Bind_1"]({}))(_72(_73)(_74[0]))(function (a$prime) {
                            return foldM(__dict_Monad_25)(_72)(a$prime)(_350);
                        });
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    return {
        unless: unless, 
        when: when, 
        foldM: foldM, 
        replicateM: replicateM
    };
})();
var PS = PS || {};
PS.Control_Lazy = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Lazy(defer) {
        this.defer = defer;
    };
    function Lazy1(defer1) {
        this.defer1 = defer1;
    };
    function Lazy2(defer2) {
        this.defer2 = defer2;
    };
    var defer2 = function (dict) {
        return dict.defer2;
    };
    var fix2 = function (__dict_Lazy2_26) {
        return function (f) {
            return defer2(__dict_Lazy2_26)(function (_) {
                return f(fix2(__dict_Lazy2_26)(f));
            });
        };
    };
    var defer1 = function (dict) {
        return dict.defer1;
    };
    var fix1 = function (__dict_Lazy1_27) {
        return function (f) {
            return defer1(__dict_Lazy1_27)(function (_) {
                return f(fix1(__dict_Lazy1_27)(f));
            });
        };
    };
    var defer = function (dict) {
        return dict.defer;
    };
    var fix = function (__dict_Lazy_28) {
        return function (f) {
            return defer(__dict_Lazy_28)(function (_) {
                return f(fix(__dict_Lazy_28)(f));
            });
        };
    };
    return {
        Lazy2: Lazy2, 
        Lazy1: Lazy1, 
        Lazy: Lazy, 
        fix2: fix2, 
        fix1: fix1, 
        fix: fix, 
        defer2: defer2, 
        defer1: defer1, 
        defer: defer
    };
})();
var PS = PS || {};
PS.Control_Bind = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $greater$eq$greater = function (__dict_Bind_29) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return Prelude[">>="](__dict_Bind_29)(f(a))(g);
                };
            };
        };
    };
    var $eq$less$less = function (__dict_Bind_30) {
        return function (f) {
            return function (m) {
                return Prelude[">>="](__dict_Bind_30)(m)(f);
            };
        };
    };
    var $less$eq$less = function (__dict_Bind_31) {
        return function (f) {
            return function (g) {
                return function (a) {
                    return $eq$less$less(__dict_Bind_31)(f)(g(a));
                };
            };
        };
    };
    var join = function (__dict_Bind_32) {
        return function (m) {
            return Prelude[">>="](__dict_Bind_32)(m)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var ifM = function (__dict_Bind_33) {
        return function (cond) {
            return function (t) {
                return function (f) {
                    return Prelude[">>="](__dict_Bind_33)(cond)(function (cond$prime) {
                        return cond$prime ? t : f;
                    });
                };
            };
        };
    };
    return {
        ifM: ifM, 
        join: join, 
        "<=<": $less$eq$less, 
        ">=>": $greater$eq$greater, 
        "=<<": $eq$less$less
    };
})();
var PS = PS || {};
PS.Control_Apply = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $less$times = function (__dict_Apply_34) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_34)(Prelude["<$>"](__dict_Apply_34["__superclass_Prelude.Functor_0"]({}))(Prelude["const"])(a))(b);
            };
        };
    };
    var $times$greater = function (__dict_Apply_35) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_35)(Prelude["<$>"](__dict_Apply_35["__superclass_Prelude.Functor_0"]({}))(Prelude["const"](Prelude.id(Prelude.categoryArr({}))))(a))(b);
            };
        };
    };
    var lift5 = function (__dict_Apply_36) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return Prelude["<*>"](__dict_Apply_36)(Prelude["<*>"](__dict_Apply_36)(Prelude["<*>"](__dict_Apply_36)(Prelude["<*>"](__dict_Apply_36)(Prelude["<$>"](__dict_Apply_36["__superclass_Prelude.Functor_0"]({}))(f)(a))(b))(c))(d))(e);
                            };
                        };
                    };
                };
            };
        };
    };
    var lift4 = function (__dict_Apply_37) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return Prelude["<*>"](__dict_Apply_37)(Prelude["<*>"](__dict_Apply_37)(Prelude["<*>"](__dict_Apply_37)(Prelude["<$>"](__dict_Apply_37["__superclass_Prelude.Functor_0"]({}))(f)(a))(b))(c))(d);
                        };
                    };
                };
            };
        };
    };
    var lift3 = function (__dict_Apply_38) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return Prelude["<*>"](__dict_Apply_38)(Prelude["<*>"](__dict_Apply_38)(Prelude["<$>"](__dict_Apply_38["__superclass_Prelude.Functor_0"]({}))(f)(a))(b))(c);
                    };
                };
            };
        };
    };
    var lift2 = function (__dict_Apply_39) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return Prelude["<*>"](__dict_Apply_39)(Prelude["<$>"](__dict_Apply_39["__superclass_Prelude.Functor_0"]({}))(f)(a))(b);
                };
            };
        };
    };
    var forever = function (__dict_Apply_40) {
        return function (a) {
            return $times$greater(__dict_Apply_40)(a)(forever(__dict_Apply_40)(a));
        };
    };
    return {
        forever: forever, 
        lift5: lift5, 
        lift4: lift4, 
        lift3: lift3, 
        lift2: lift2, 
        "*>": $times$greater, 
        "<*": $less$times
    };
})();
var PS = PS || {};
PS.Control_Alt = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Alt($less$bar$greater, __superclass_Prelude$dotFunctor_0) {
        this["<|>"] = $less$bar$greater;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
    };
    var $less$bar$greater = function (dict) {
        return dict["<|>"];
    };
    return {
        Alt: Alt, 
        "<|>": $less$bar$greater
    };
})();
var PS = PS || {};
PS.Control_Plus = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Plus(__superclass_Control$dotAlt$dotAlt_0, empty) {
        this["__superclass_Control.Alt.Alt_0"] = __superclass_Control$dotAlt$dotAlt_0;
        this.empty = empty;
    };
    var empty = function (dict) {
        return dict.empty;
    };
    return {
        Plus: Plus, 
        empty: empty
    };
})();
var PS = PS || {};
PS.Control_Alternative = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Alt = PS.Control_Alt;
    var Control_Lazy = PS.Control_Lazy;
    function Alternative(__superclass_Control$dotPlus$dotPlus_1, __superclass_Prelude$dotApplicative_0) {
        this["__superclass_Control.Plus.Plus_1"] = __superclass_Control$dotPlus$dotPlus_1;
        this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
    };
    var many = function (__dict_Alternative_41) {
        return function (__dict_Lazy1_42) {
            return function (v) {
                return Control_Alt["<|>"]((__dict_Alternative_41["__superclass_Control.Plus.Plus_1"]({}))["__superclass_Control.Alt.Alt_0"]({}))(some(__dict_Alternative_41)(__dict_Lazy1_42)(v))(Prelude.pure(__dict_Alternative_41["__superclass_Prelude.Applicative_0"]({}))([  ]));
            };
        };
    };
    var some = function (__dict_Alternative_43) {
        return function (__dict_Lazy1_44) {
            return function (v) {
                return Prelude["<*>"]((__dict_Alternative_43["__superclass_Prelude.Applicative_0"]({}))["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"](((__dict_Alternative_43["__superclass_Control.Plus.Plus_1"]({}))["__superclass_Control.Alt.Alt_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(v))(Control_Lazy.defer1(__dict_Lazy1_44)(function (_) {
                    return many(__dict_Alternative_43)(__dict_Lazy1_44)(v);
                }));
            };
        };
    };
    return {
        Alternative: Alternative, 
        many: many, 
        some: some
    };
})();
var PS = PS || {};
PS.Control_MonadPlus = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Plus = PS.Control_Plus;
    function MonadPlus(__superclass_Control$dotAlternative$dotAlternative_1, __superclass_Prelude$dotMonad_0) {
        this["__superclass_Control.Alternative.Alternative_1"] = __superclass_Control$dotAlternative$dotAlternative_1;
        this["__superclass_Prelude.Monad_0"] = __superclass_Prelude$dotMonad_0;
    };
    var guard = function (__dict_MonadPlus_45) {
        return function (_79) {
            if (_79) {
                return Prelude["return"](__dict_MonadPlus_45["__superclass_Prelude.Monad_0"]({}))(Prelude.unit);
            };
            if (!_79) {
                return Control_Plus.empty((__dict_MonadPlus_45["__superclass_Control.Alternative.Alternative_1"]({}))["__superclass_Control.Plus.Plus_1"]({}));
            };
            throw new Error("Failed pattern match");
        };
    };
    return {
        MonadPlus: MonadPlus, 
        guard: guard
    };
})();
var PS = PS || {};
PS.Data_Maybe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Alt = PS.Control_Alt;
    var Control_Plus = PS.Control_Plus;
    var Control_Alternative = PS.Control_Alternative;
    var Control_MonadPlus = PS.Control_MonadPlus;
    function Nothing() {

    };
    Nothing.value = new Nothing();
    function Just(value0) {
        this.value0 = value0;
    };
    Just.create = function (value0) {
        return new Just(value0);
    };
    var showMaybe = function (__dict_Show_46) {
        return new Prelude.Show(function (_91) {
            if (_91 instanceof Just) {
                return "Just (" + Prelude.show(__dict_Show_46)(_91.value0) + ")";
            };
            if (_91 instanceof Nothing) {
                return "Nothing";
            };
            throw new Error("Failed pattern match");
        });
    };
    var maybe = function (_80) {
        return function (_81) {
            return function (_82) {
                if (_82 instanceof Nothing) {
                    return _80;
                };
                if (_82 instanceof Just) {
                    return _81(_82.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var isNothing = maybe(true)(Prelude["const"](false));
    var isJust = maybe(false)(Prelude["const"](true));
    var functorMaybe = function (_) {
        return new Prelude.Functor(function (_83) {
            return function (_84) {
                if (_84 instanceof Just) {
                    return new Just(_83(_84.value0));
                };
                return Nothing.value;
            };
        });
    };
    var fromMaybe = function (a) {
        return maybe(a)(Prelude.id(Prelude.categoryArr({})));
    };
    var eqMaybe = function (__dict_Eq_48) {
        return new Prelude.Eq(function (a) {
            return function (b) {
                return !Prelude["=="](eqMaybe(__dict_Eq_48))(a)(b);
            };
        }, function (_92) {
            return function (_93) {
                if (_92 instanceof Nothing && _93 instanceof Nothing) {
                    return true;
                };
                if (_92 instanceof Just && _93 instanceof Just) {
                    return Prelude["=="](__dict_Eq_48)(_92.value0)(_93.value0);
                };
                return false;
            };
        });
    };
    var ordMaybe = function (__dict_Ord_47) {
        return new Prelude.Ord(function (_) {
            return eqMaybe(__dict_Ord_47["__superclass_Prelude.Eq_0"]({}));
        }, function (_94) {
            return function (_95) {
                if (_94 instanceof Just && _95 instanceof Just) {
                    return Prelude.compare(__dict_Ord_47)(_94.value0)(_95.value0);
                };
                if (_94 instanceof Nothing && _95 instanceof Nothing) {
                    return Prelude.EQ.value;
                };
                if (_94 instanceof Nothing) {
                    return Prelude.LT.value;
                };
                if (_95 instanceof Nothing) {
                    return Prelude.GT.value;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var applyMaybe = function (_) {
        return new Prelude.Apply(function (_85) {
            return function (_86) {
                if (_85 instanceof Just) {
                    return Prelude["<$>"](functorMaybe({}))(_85.value0)(_86);
                };
                if (_85 instanceof Nothing) {
                    return Nothing.value;
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return functorMaybe({});
        });
    };
    var bindMaybe = function (_) {
        return new Prelude.Bind(function (_89) {
            return function (_90) {
                if (_89 instanceof Just) {
                    return _90(_89.value0);
                };
                if (_89 instanceof Nothing) {
                    return Nothing.value;
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return applyMaybe({});
        });
    };
    var applicativeMaybe = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyMaybe({});
        }, Just.create);
    };
    var monadMaybe = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeMaybe({});
        }, function (__1) {
            return bindMaybe({});
        });
    };
    var altMaybe = function (_) {
        return new Control_Alt.Alt(function (_87) {
            return function (_88) {
                if (_87 instanceof Nothing) {
                    return _88;
                };
                return _87;
            };
        }, function (__1) {
            return functorMaybe({});
        });
    };
    var plusMaybe = function (_) {
        return new Control_Plus.Plus(function (__1) {
            return altMaybe({});
        }, Nothing.value);
    };
    var alternativeMaybe = function (_) {
        return new Control_Alternative.Alternative(function (__1) {
            return plusMaybe({});
        }, function (__1) {
            return applicativeMaybe({});
        });
    };
    var monadPlusMaybe = function (_) {
        return new Control_MonadPlus.MonadPlus(function (__1) {
            return alternativeMaybe({});
        }, function (__1) {
            return monadMaybe({});
        });
    };
    return {
        Nothing: Nothing, 
        Just: Just, 
        isNothing: isNothing, 
        isJust: isJust, 
        fromMaybe: fromMaybe, 
        maybe: maybe, 
        functorMaybe: functorMaybe, 
        applyMaybe: applyMaybe, 
        applicativeMaybe: applicativeMaybe, 
        altMaybe: altMaybe, 
        plusMaybe: plusMaybe, 
        alternativeMaybe: alternativeMaybe, 
        bindMaybe: bindMaybe, 
        monadMaybe: monadMaybe, 
        monadPlusMaybe: monadPlusMaybe, 
        showMaybe: showMaybe, 
        eqMaybe: eqMaybe, 
        ordMaybe: ordMaybe
    };
})();
var PS = PS || {};
PS.Data_Array = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Prelude_Unsafe = PS.Prelude_Unsafe;
    var Control_Alt = PS.Control_Alt;
    var Control_Plus = PS.Control_Plus;
    var Control_Alternative = PS.Control_Alternative;
    var Control_MonadPlus = PS.Control_MonadPlus;
    function snoc(l) {  return function (e) {    var l1 = l.slice();    l1.push(e);     return l1;  };};
    function length (xs) {  return xs.length;};
    function findIndex (f) {  return function (arr) {    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function findLastIndex (f) {  return function (arr) {    for (var i = arr.length - 1; i >= 0; i--) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
    function append (l1) {  return function (l2) {    return l1.concat(l2);  };};
    function concat (xss) {  var result = [];  for (var i = 0, l = xss.length; i < l; i++) {    result.push.apply(result, xss[i]);  }  return result;};
    function reverse (l) {  return l.slice().reverse();};
    function drop (n) {  return function (l) {    return l.slice(n);  };};
    function slice (s) {  return function (e) {    return function (l) {      return l.slice(s, e);    };  };};
    function insertAt (index) {  return function (a) {    return function (l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
    function deleteAt (index) {  return function (n) {    return function (l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
    function updateAt (index) {  return function (a) {    return function (l) {      var i = ~~index;      if (i < 0 || i >= l.length) return l;      var l1 = l.slice();      l1[i] = a;      return l1;    };   };};
    function concatMap (f) {  return function (arr) {    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      Array.prototype.push.apply(result, f(arr[i]));    }    return result;  };};
    function map (f) {  return function (arr) {    var l = arr.length;    var result = new Array(l);    for (var i = 0; i < l; i++) {      result[i] = f(arr[i]);    }    return result;  };};
    function filter (f) {  return function (arr) {    var n = 0;    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        result[n++] = arr[i];      }    }    return result;  };};
    function range (start) {  return function (end) {    var i = ~~start, e = ~~end;    var step = i > e ? -1 : 1;    var result = [i], n = 1;    while (i !== e) {      i += step;      result[n++] = i;    }    return result;  };};
    function zipWith (f) {  return function (xs) {    return function (ys) {      var l = xs.length < ys.length ? xs.length : ys.length;      var result = new Array(l);      for (var i = 0; i < l; i++) {        result[i] = f(xs[i])(ys[i]);      }      return result;    };  };};
    function sortJS (f) {  return function (l) {    return l.slice().sort(function (x, y) {      return f(x)(y);    });  };};
    var $bang$bang = function (xs) {
        return function (n) {
            var isInt = function (n_1) {
                return n_1 !== ~~n_1;
            };
            return n < 0 || n >= length(xs) || isInt(n) ? Data_Maybe.Nothing.value : new Data_Maybe.Just(xs[n]);
        };
    };
    var take = function (n) {
        return slice(0)(n);
    };
    var tail = function (_98) {
        if (_98.length > 0) {
            var _379 = _98.slice(1);
            return new Data_Maybe.Just(_379);
        };
        return Data_Maybe.Nothing.value;
    };
    var span = (function () {
        var go = function (__copy__114) {
            return function (__copy__115) {
                return function (__copy__116) {
                    var _114 = __copy__114;
                    var _115 = __copy__115;
                    var _116 = __copy__116;
                    tco: while (true) {
                        if (_116.length > 0) {
                            var _384 = _116.slice(1);
                            if (_115(_116[0])) {
                                var __tco__114 = Prelude[":"](_116[0])(_114);
                                var __tco__115 = _115;
                                _114 = __tco__114;
                                _115 = __tco__115;
                                _116 = _384;
                                continue tco;
                            };
                        };
                        return {
                            init: reverse(_114), 
                            rest: _116
                        };
                    };
                };
            };
        };
        return go([  ]);
    })();
    var sortBy = function (comp) {
        return function (xs) {
            var comp$prime = function (x) {
                return function (y) {
                    return (function (_385) {
                        if (_385 instanceof Prelude.GT) {
                            return 1;
                        };
                        if (_385 instanceof Prelude.EQ) {
                            return 0;
                        };
                        if (_385 instanceof Prelude.LT) {
                            return -1;
                        };
                        throw new Error("Failed pattern match");
                    })(comp(x)(y));
                };
            };
            return sortJS(comp$prime)(xs);
        };
    };
    var sort = function (__dict_Ord_49) {
        return function (xs) {
            return sortBy(Prelude.compare(__dict_Ord_49))(xs);
        };
    };
    var singleton = function (a) {
        return [ a ];
    };
    var semigroupArray = function (_) {
        return new Prelude.Semigroup(append);
    };
    var $$null = function (_100) {
        if (_100.length === 0) {
            return true;
        };
        return false;
    };
    var nubBy = function (_107) {
        return function (_108) {
            if (_108.length === 0) {
                return [  ];
            };
            if (_108.length > 0) {
                var _390 = _108.slice(1);
                return Prelude[":"](_108[0])(nubBy(_107)(filter(function (y) {
                    return !_107(_108[0])(y);
                })(_390)));
            };
            throw new Error("Failed pattern match");
        };
    };
    var nub = function (__dict_Eq_50) {
        return nubBy(Prelude["=="](__dict_Eq_50));
    };
    var mapMaybe = function (f) {
        return concatMap(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe.maybe([  ])(singleton))(f));
    };
    var last = function (__copy__97) {
        var _97 = __copy__97;
        tco: while (true) {
            if (_97.length > 0) {
                var _393 = _97.slice(1);
                if (_393.length === 0) {
                    return new Data_Maybe.Just(_97[0]);
                };
            };
            if (_97.length > 0) {
                var _395 = _97.slice(1);
                _97 = _395;
                continue tco;
            };
            return Data_Maybe.Nothing.value;
        };
    };
    var intersectBy = function (_104) {
        return function (_105) {
            return function (_106) {
                if (_105.length === 0) {
                    return [  ];
                };
                if (_106.length === 0) {
                    return [  ];
                };
                var el = function (x) {
                    return findIndex(_104(x))(_106) >= 0;
                };
                return filter(el)(_105);
            };
        };
    };
    var intersect = function (__dict_Eq_51) {
        return intersectBy(Prelude["=="](__dict_Eq_51));
    };
    var init = function (_99) {
        if (_99.length === 0) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(slice(0)(length(_99) - 1)(_99));
    };
    var head = function (_96) {
        if (_96.length > 0) {
            var _402 = _96.slice(1);
            return new Data_Maybe.Just(_96[0]);
        };
        return Data_Maybe.Nothing.value;
    };
    var groupBy = (function () {
        var go = function (__copy__111) {
            return function (__copy__112) {
                return function (__copy__113) {
                    var _111 = __copy__111;
                    var _112 = __copy__112;
                    var _113 = __copy__113;
                    tco: while (true) {
                        if (_113.length === 0) {
                            return reverse(_111);
                        };
                        if (_113.length > 0) {
                            var _407 = _113.slice(1);
                            var sp = span(_112(_113[0]))(_407);
                            var __tco__111 = Prelude[":"](Prelude[":"](_113[0])(sp.init))(_111);
                            var __tco__112 = _112;
                            _111 = __tco__111;
                            _112 = __tco__112;
                            _113 = sp.rest;
                            continue tco;
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        return go([  ]);
    })();
    var group = function (__dict_Eq_52) {
        return function (xs) {
            return groupBy(Prelude["=="](__dict_Eq_52))(xs);
        };
    };
    var group$prime = function (__dict_Ord_53) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(group(__dict_Ord_53["__superclass_Prelude.Eq_0"]({})))(sort(__dict_Ord_53));
    };
    var functorArray = function (_) {
        return new Prelude.Functor(map);
    };
    var elemLastIndex = function (__dict_Eq_54) {
        return function (x) {
            return findLastIndex(Prelude["=="](__dict_Eq_54)(x));
        };
    };
    var elemIndex = function (__dict_Eq_55) {
        return function (x) {
            return findIndex(Prelude["=="](__dict_Eq_55)(x));
        };
    };
    var deleteBy = function (_101) {
        return function (_102) {
            return function (_103) {
                if (_103.length === 0) {
                    return [  ];
                };
                return (function (_411) {
                    if (_411 < 0) {
                        return _103;
                    };
                    return deleteAt(_411)(1)(_103);
                })(findIndex(_101(_102))(_103));
            };
        };
    };
    var $$delete = function (__dict_Eq_56) {
        return deleteBy(Prelude["=="](__dict_Eq_56));
    };
    var $bslash$bslash = function (__dict_Eq_57) {
        return function (xs) {
            return function (ys) {
                var go = function (__copy__109) {
                    return function (__copy__110) {
                        var _109 = __copy__109;
                        var _110 = __copy__110;
                        tco: while (true) {
                            if (_110.length === 0) {
                                return _109;
                            };
                            if (_109.length === 0) {
                                return [  ];
                            };
                            if (_110.length > 0) {
                                var _415 = _110.slice(1);
                                var __tco__109 = $$delete(__dict_Eq_57)(_110[0])(_109);
                                _109 = __tco__109;
                                _110 = _415;
                                continue tco;
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
                return go(xs)(ys);
            };
        };
    };
    var catMaybes = concatMap(Data_Maybe.maybe([  ])(singleton));
    var applicativeArray = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyArray({});
        }, singleton);
    };
    var applyArray = function (_) {
        return new Prelude.Apply(Prelude.ap(monadArray({})), function (__1) {
            return functorArray({});
        });
    };
    var monadArray = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeArray({});
        }, function (__1) {
            return bindArray({});
        });
    };
    var bindArray = function (_) {
        return new Prelude.Bind(Prelude.flip(concatMap), function (__1) {
            return applyArray({});
        });
    };
    var altArray = function (_) {
        return new Control_Alt.Alt(append, function (__1) {
            return functorArray({});
        });
    };
    var plusArray = function (_) {
        return new Control_Plus.Plus(function (__1) {
            return altArray({});
        }, [  ]);
    };
    var alternativeArray = function (_) {
        return new Control_Alternative.Alternative(function (__1) {
            return plusArray({});
        }, function (__1) {
            return applicativeArray({});
        });
    };
    var monadPlusArray = function (_) {
        return new Control_MonadPlus.MonadPlus(function (__1) {
            return alternativeArray({});
        }, function (__1) {
            return monadArray({});
        });
    };
    return {
        span: span, 
        groupBy: groupBy, 
        "group'": group$prime, 
        group: group, 
        sortBy: sortBy, 
        sort: sort, 
        nubBy: nubBy, 
        nub: nub, 
        zipWith: zipWith, 
        range: range, 
        filter: filter, 
        concatMap: concatMap, 
        intersect: intersect, 
        intersectBy: intersectBy, 
        "\\\\": $bslash$bslash, 
        "delete": $$delete, 
        deleteBy: deleteBy, 
        updateAt: updateAt, 
        deleteAt: deleteAt, 
        insertAt: insertAt, 
        take: take, 
        drop: drop, 
        reverse: reverse, 
        concat: concat, 
        append: append, 
        elemLastIndex: elemLastIndex, 
        elemIndex: elemIndex, 
        findLastIndex: findLastIndex, 
        findIndex: findIndex, 
        length: length, 
        catMaybes: catMaybes, 
        mapMaybe: mapMaybe, 
        map: map, 
        "null": $$null, 
        init: init, 
        tail: tail, 
        last: last, 
        head: head, 
        singleton: singleton, 
        snoc: snoc, 
        "!!": $bang$bang, 
        functorArray: functorArray, 
        applyArray: applyArray, 
        applicativeArray: applicativeArray, 
        bindArray: bindArray, 
        monadArray: monadArray, 
        semigroupArray: semigroupArray, 
        altArray: altArray, 
        plusArray: plusArray, 
        alternativeArray: alternativeArray, 
        monadPlusArray: monadPlusArray
    };
})();
var PS = PS || {};
PS.Data_Monoid = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    function Monoid(__superclass_Prelude$dotSemigroup_0, mempty) {
        this["__superclass_Prelude.Semigroup_0"] = __superclass_Prelude$dotSemigroup_0;
        this.mempty = mempty;
    };
    var monoidUnit = function (_) {
        return new Monoid(function (__1) {
            return Prelude.semigroupUnit({});
        }, Prelude.unit);
    };
    var monoidString = function (_) {
        return new Monoid(function (__1) {
            return Prelude.semigroupString({});
        }, "");
    };
    var monoidArray = function (_) {
        return new Monoid(function (__1) {
            return Data_Array.semigroupArray({});
        }, [  ]);
    };
    var mempty = function (dict) {
        return dict.mempty;
    };
    return {
        Monoid: Monoid, 
        mempty: mempty, 
        monoidString: monoidString, 
        monoidArray: monoidArray, 
        monoidUnit: monoidUnit
    };
})();
var PS = PS || {};
PS.Data_Monoid_All = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var All = {
        create: function (value) {
            return value;
        }
    };
    var showAll = function (_) {
        return new Prelude.Show(function (_122) {
            return "All (" + Prelude.show(Prelude.showBoolean({}))(_122) + ")";
        });
    };
    var semigroupAll = function (_) {
        return new Prelude.Semigroup(function (_123) {
            return function (_124) {
                return _123 && _124;
            };
        });
    };
    var runAll = function (_117) {
        return _117;
    };
    var monoidAll = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupAll({});
        }, true);
    };
    var eqAll = function (_) {
        return new Prelude.Eq(function (_120) {
            return function (_121) {
                return _120 !== _121;
            };
        }, function (_118) {
            return function (_119) {
                return _118 === _119;
            };
        });
    };
    return {
        All: All, 
        runAll: runAll, 
        eqAll: eqAll, 
        showAll: showAll, 
        semigroupAll: semigroupAll, 
        monoidAll: monoidAll
    };
})();
var PS = PS || {};
PS.Data_Monoid_Any = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Any = {
        create: function (value) {
            return value;
        }
    };
    var showAny = function (_) {
        return new Prelude.Show(function (_130) {
            return "Any (" + Prelude.show(Prelude.showBoolean({}))(_130) + ")";
        });
    };
    var semigroupAny = function (_) {
        return new Prelude.Semigroup(function (_131) {
            return function (_132) {
                return _131 || _132;
            };
        });
    };
    var runAny = function (_125) {
        return _125;
    };
    var monoidAny = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupAny({});
        }, false);
    };
    var eqAny = function (_) {
        return new Prelude.Eq(function (_128) {
            return function (_129) {
                return _128 !== _129;
            };
        }, function (_126) {
            return function (_127) {
                return _126 === _127;
            };
        });
    };
    return {
        Any: Any, 
        runAny: runAny, 
        eqAny: eqAny, 
        showAny: showAny, 
        semigroupAny: semigroupAny, 
        monoidAny: monoidAny
    };
})();
var PS = PS || {};
PS.Data_Monoid_Dual = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Dual = {
        create: function (value) {
            return value;
        }
    };
    var showDual = function (__dict_Show_58) {
        return new Prelude.Show(function (_140) {
            return "Dual (" + Prelude.show(__dict_Show_58)(_140) + ")";
        });
    };
    var semigroupDual = function (__dict_Semigroup_59) {
        return new Prelude.Semigroup(function (_141) {
            return function (_142) {
                return Prelude["<>"](__dict_Semigroup_59)(_142)(_141);
            };
        });
    };
    var runDual = function (_133) {
        return _133;
    };
    var monoidDual = function (__dict_Monoid_61) {
        return new Data_Monoid.Monoid(function (_) {
            return semigroupDual(__dict_Monoid_61["__superclass_Prelude.Semigroup_0"]({}));
        }, Data_Monoid.mempty(__dict_Monoid_61));
    };
    var eqDual = function (__dict_Eq_62) {
        return new Prelude.Eq(function (_136) {
            return function (_137) {
                return Prelude["/="](__dict_Eq_62)(_136)(_137);
            };
        }, function (_134) {
            return function (_135) {
                return Prelude["=="](__dict_Eq_62)(_134)(_135);
            };
        });
    };
    var ordDual = function (__dict_Ord_60) {
        return new Prelude.Ord(function (_) {
            return eqDual(__dict_Ord_60["__superclass_Prelude.Eq_0"]({}));
        }, function (_138) {
            return function (_139) {
                return Prelude.compare(__dict_Ord_60)(_138)(_139);
            };
        });
    };
    return {
        Dual: Dual, 
        runDual: runDual, 
        eqDual: eqDual, 
        ordDual: ordDual, 
        showDual: showDual, 
        semigroupDual: semigroupDual, 
        monoidDual: monoidDual
    };
})();
var PS = PS || {};
PS.Data_Monoid_Endo = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Endo = {
        create: function (value) {
            return value;
        }
    };
    var semigroupEndo = function (_) {
        return new Prelude.Semigroup(function (_144) {
            return function (_145) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(_144)(_145);
            };
        });
    };
    var runEndo = function (_143) {
        return _143;
    };
    var monoidEndo = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupEndo({});
        }, Prelude.id(Prelude.categoryArr({})));
    };
    return {
        Endo: Endo, 
        runEndo: runEndo, 
        semigroupEndo: semigroupEndo, 
        monoidEndo: monoidEndo
    };
})();
var PS = PS || {};
PS.Data_Monoid_Product = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Product = {
        create: function (value) {
            return value;
        }
    };
    var showProduct = function (_) {
        return new Prelude.Show(function (_153) {
            return "Product (" + Prelude.show(Prelude.showNumber({}))(_153) + ")";
        });
    };
    var semigroupProduct = function (_) {
        return new Prelude.Semigroup(function (_154) {
            return function (_155) {
                return _154 * _155;
            };
        });
    };
    var runProduct = function (_146) {
        return _146;
    };
    var monoidProduct = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupProduct({});
        }, 1);
    };
    var eqProduct = function (_) {
        return new Prelude.Eq(function (_149) {
            return function (_150) {
                return _149 !== _150;
            };
        }, function (_147) {
            return function (_148) {
                return _147 === _148;
            };
        });
    };
    var ordProduct = function (_) {
        return new Prelude.Ord(function (__1) {
            return eqProduct({});
        }, function (_151) {
            return function (_152) {
                return Prelude.compare(Prelude.ordNumber({}))(_151)(_152);
            };
        });
    };
    return {
        Product: Product, 
        runProduct: runProduct, 
        eqProduct: eqProduct, 
        ordProduct: ordProduct, 
        showProduct: showProduct, 
        semigroupProduct: semigroupProduct, 
        monoidProduct: monoidProduct
    };
})();
var PS = PS || {};
PS.Data_Monoid_Sum = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Sum = {
        create: function (value) {
            return value;
        }
    };
    var showSum = function (_) {
        return new Prelude.Show(function (_163) {
            return "Sum (" + Prelude.show(Prelude.showNumber({}))(_163) + ")";
        });
    };
    var semigroupSum = function (_) {
        return new Prelude.Semigroup(function (_164) {
            return function (_165) {
                return _164 + _165;
            };
        });
    };
    var runSum = function (_156) {
        return _156;
    };
    var monoidSum = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupSum({});
        }, 0);
    };
    var eqSum = function (_) {
        return new Prelude.Eq(function (_159) {
            return function (_160) {
                return _159 !== _160;
            };
        }, function (_157) {
            return function (_158) {
                return _157 === _158;
            };
        });
    };
    var ordSum = function (_) {
        return new Prelude.Ord(function (__1) {
            return eqSum({});
        }, function (_161) {
            return function (_162) {
                return Prelude.compare(Prelude.ordNumber({}))(_161)(_162);
            };
        });
    };
    return {
        Sum: Sum, 
        runSum: runSum, 
        eqSum: eqSum, 
        ordSum: ordSum, 
        showSum: showSum, 
        semigroupSum: semigroupSum, 
        monoidSum: monoidSum
    };
})();
var PS = PS || {};
PS.Data_Tuple = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Control_Lazy = PS.Control_Lazy;
    var Data_Monoid = PS.Data_Monoid;
    function Tuple(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tuple.create = function (value0) {
        return function (value1) {
            return new Tuple(value0, value1);
        };
    };
    var zip = Data_Array.zipWith(Tuple.create);
    var unzip = function (_170) {
        if (_170.length > 0) {
            var _470 = _170.slice(1);
            return (function (_466) {
                return new Tuple(Prelude[":"]((_170[0]).value0)(_466.value0), Prelude[":"]((_170[0]).value1)(_466.value1));
            })(unzip(_470));
        };
        if (_170.length === 0) {
            return new Tuple([  ], [  ]);
        };
        throw new Error("Failed pattern match");
    };
    var uncurry = function (_168) {
        return function (_169) {
            return _168(_169.value0)(_169.value1);
        };
    };
    var swap = function (_171) {
        return new Tuple(_171.value1, _171.value0);
    };
    var snd = function (_167) {
        return _167.value1;
    };
    var showTuple = function (__dict_Show_63) {
        return function (__dict_Show_64) {
            return new Prelude.Show(function (_172) {
                return "Tuple (" + Prelude.show(__dict_Show_63)(_172.value0) + ") (" + Prelude.show(__dict_Show_64)(_172.value1) + ")";
            });
        };
    };
    var functorTuple = function (_) {
        return new Prelude.Functor(function (_177) {
            return function (_178) {
                return new Tuple(_178.value0, _177(_178.value1));
            };
        });
    };
    var fst = function (_166) {
        return _166.value0;
    };
    var lazyLazy1Tuple = function (__dict_Lazy1_68) {
        return function (__dict_Lazy1_69) {
            return new Control_Lazy.Lazy(function (f) {
                return new Tuple(Control_Lazy.defer1(__dict_Lazy1_68)(function (_) {
                    return fst(f(Prelude.unit));
                }), Control_Lazy.defer1(__dict_Lazy1_69)(function (_) {
                    return snd(f(Prelude.unit));
                }));
            });
        };
    };
    var lazyLazy2Tuple = function (__dict_Lazy2_70) {
        return function (__dict_Lazy2_71) {
            return new Control_Lazy.Lazy(function (f) {
                return new Tuple(Control_Lazy.defer2(__dict_Lazy2_70)(function (_) {
                    return fst(f(Prelude.unit));
                }), Control_Lazy.defer2(__dict_Lazy2_71)(function (_) {
                    return snd(f(Prelude.unit));
                }));
            });
        };
    };
    var lazyTuple = function (__dict_Lazy_72) {
        return function (__dict_Lazy_73) {
            return new Control_Lazy.Lazy(function (f) {
                return new Tuple(Control_Lazy.defer(__dict_Lazy_72)(function (_) {
                    return fst(f(Prelude.unit));
                }), Control_Lazy.defer(__dict_Lazy_73)(function (_) {
                    return snd(f(Prelude.unit));
                }));
            });
        };
    };
    var eqTuple = function (__dict_Eq_74) {
        return function (__dict_Eq_75) {
            return new Prelude.Eq(function (t1) {
                return function (t2) {
                    return !Prelude["=="](eqTuple(__dict_Eq_74)(__dict_Eq_75))(t1)(t2);
                };
            }, function (_173) {
                return function (_174) {
                    return Prelude["=="](__dict_Eq_74)(_173.value0)(_174.value0) && Prelude["=="](__dict_Eq_75)(_173.value1)(_174.value1);
                };
            });
        };
    };
    var ordTuple = function (__dict_Ord_65) {
        return function (__dict_Ord_66) {
            return new Prelude.Ord(function (_) {
                return eqTuple(__dict_Ord_65["__superclass_Prelude.Eq_0"]({}))(__dict_Ord_66["__superclass_Prelude.Eq_0"]({}));
            }, function (_175) {
                return function (_176) {
                    return (function (_501) {
                        if (_501 instanceof Prelude.EQ) {
                            return Prelude.compare(__dict_Ord_66)(_175.value1)(_176.value1);
                        };
                        return _501;
                    })(Prelude.compare(__dict_Ord_65)(_175.value0)(_176.value0));
                };
            });
        };
    };
    var curry = function (f) {
        return function (a) {
            return function (b) {
                return f(new Tuple(a, b));
            };
        };
    };
    var applyTuple = function (__dict_Semigroup_77) {
        return new Prelude.Apply(function (_179) {
            return function (_180) {
                return new Tuple(Prelude["<>"](__dict_Semigroup_77)(_179.value0)(_180.value0), _179.value1(_180.value1));
            };
        }, functorTuple);
    };
    var bindTuple = function (__dict_Semigroup_76) {
        return new Prelude.Bind(function (_181) {
            return function (_182) {
                return (function (_514) {
                    return new Tuple(Prelude["<>"](__dict_Semigroup_76)(_181.value0)(_514.value0), _514.value1);
                })(_182(_181.value1));
            };
        }, function (_) {
            return applyTuple(__dict_Semigroup_76);
        });
    };
    var applicativeTuple = function (__dict_Monoid_78) {
        return new Prelude.Applicative(function (_) {
            return applyTuple(__dict_Monoid_78["__superclass_Prelude.Semigroup_0"]({}));
        }, Tuple.create(Data_Monoid.mempty(__dict_Monoid_78)));
    };
    var monadTuple = function (__dict_Monoid_67) {
        return new Prelude.Monad(function (_) {
            return applicativeTuple(__dict_Monoid_67);
        }, function (_) {
            return bindTuple(__dict_Monoid_67["__superclass_Prelude.Semigroup_0"]({}));
        });
    };
    return {
        Tuple: Tuple, 
        swap: swap, 
        unzip: unzip, 
        zip: zip, 
        uncurry: uncurry, 
        curry: curry, 
        snd: snd, 
        fst: fst, 
        showTuple: showTuple, 
        eqTuple: eqTuple, 
        ordTuple: ordTuple, 
        functorTuple: functorTuple, 
        applyTuple: applyTuple, 
        applicativeTuple: applicativeTuple, 
        bindTuple: bindTuple, 
        monadTuple: monadTuple, 
        lazyTuple: lazyTuple, 
        lazyLazy1Tuple: lazyLazy1Tuple, 
        lazyLazy2Tuple: lazyLazy2Tuple
    };
})();
var PS = PS || {};
PS.Data_Maybe_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var fromJust = function (_183) {
        if (_183 instanceof Data_Maybe.Just) {
            return _183.value0;
        };
        throw new Error("Failed pattern match");
    };
    return {
        fromJust: fromJust
    };
})();
var PS = PS || {};
PS.Data_Array_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Prelude_Unsafe = PS.Prelude_Unsafe;
    var Data_Array = PS.Data_Array;
    var Data_Maybe_Unsafe = PS.Data_Maybe_Unsafe;
    var tail = function (_185) {
        if (_185.length > 0) {
            var _523 = _185.slice(1);
            return _523;
        };
        throw new Error("Failed pattern match");
    };
    var last = function (xs) {
        return xs[Data_Array.length(xs) - 1];
    };
    var init = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe_Unsafe.fromJust)(Data_Array.init);
    var head = function (_184) {
        if (_184.length > 0) {
            var _526 = _184.slice(1);
            return _184[0];
        };
        throw new Error("Failed pattern match");
    };
    return {
        init: init, 
        last: last, 
        tail: tail, 
        head: head
    };
})();
var PS = PS || {};
PS.Data_Monoid_First = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Monoid = PS.Data_Monoid;
    var First = {
        create: function (value) {
            return value;
        }
    };
    var showFirst = function (__dict_Show_79) {
        return new Prelude.Show(function (_193) {
            return "First (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_79))(_193) + ")";
        });
    };
    var semigroupFirst = function (_) {
        return new Prelude.Semigroup(function (_194) {
            return function (_195) {
                if (_194 instanceof Data_Maybe.Just) {
                    return _194;
                };
                return _195;
            };
        });
    };
    var runFirst = function (_186) {
        return _186;
    };
    var monoidFirst = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupFirst({});
        }, Data_Maybe.Nothing.value);
    };
    var eqFirst = function (__dict_Eq_81) {
        return new Prelude.Eq(function (_189) {
            return function (_190) {
                return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_81))(_189)(_190);
            };
        }, function (_187) {
            return function (_188) {
                return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_81))(_187)(_188);
            };
        });
    };
    var ordFirst = function (__dict_Ord_80) {
        return new Prelude.Ord(function (_) {
            return eqFirst(__dict_Ord_80["__superclass_Prelude.Eq_0"]({}));
        }, function (_191) {
            return function (_192) {
                return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_80))(_191)(_192);
            };
        });
    };
    return {
        First: First, 
        runFirst: runFirst, 
        eqFirst: eqFirst, 
        ordFirst: ordFirst, 
        showFirst: showFirst, 
        semigroupFirst: semigroupFirst, 
        monoidFirst: monoidFirst
    };
})();
var PS = PS || {};
PS.Data_Foldable = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Apply = PS.Control_Apply;
    var Data_Monoid = PS.Data_Monoid;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Eq = PS.Data_Eq;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Either = PS.Data_Either;
    var Data_Monoid_First = PS.Data_Monoid_First;
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
    var sequence_ = function (__dict_Applicative_86) {
        return function (__dict_Foldable_87) {
            return traverse_(__dict_Applicative_86)(__dict_Foldable_87)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var foldl = function (dict) {
        return dict.foldl;
    };
    var mconcat = function (__dict_Foldable_88) {
        return function (__dict_Monoid_89) {
            return foldl(__dict_Foldable_88)(Prelude["<>"](__dict_Monoid_89["__superclass_Prelude.Semigroup_0"]({})))(Data_Monoid.mempty(__dict_Monoid_89));
        };
    };
    var or = function (__dict_Foldable_90) {
        return foldl(__dict_Foldable_90)(Prelude["||"](Prelude.boolLikeBoolean({})))(false);
    };
    var product = function (__dict_Foldable_91) {
        return foldl(__dict_Foldable_91)(Prelude["*"](Prelude.numNumber({})))(1);
    };
    var sum = function (__dict_Foldable_92) {
        return foldl(__dict_Foldable_92)(Prelude["+"](Prelude.numNumber({})))(0);
    };
    var foldableTuple = function (_) {
        return new Foldable(function (__dict_Monoid_93) {
            return function (_227) {
                return function (_228) {
                    return _227(_228.value1);
                };
            };
        }, function (_224) {
            return function (_225) {
                return function (_226) {
                    return _224(_225)(_226.value1);
                };
            };
        }, function (_221) {
            return function (_222) {
                return function (_223) {
                    return _221(_223.value1)(_222);
                };
            };
        });
    };
    var foldableRef = function (_) {
        return new Foldable(function (__dict_Monoid_94) {
            return function (_219) {
                return function (_220) {
                    return _219(_220);
                };
            };
        }, function (_216) {
            return function (_217) {
                return function (_218) {
                    return _216(_217)(_218);
                };
            };
        }, function (_213) {
            return function (_214) {
                return function (_215) {
                    return _213(_215)(_214);
                };
            };
        });
    };
    var foldableMaybe = function (_) {
        return new Foldable(function (__dict_Monoid_95) {
            return function (_211) {
                return function (_212) {
                    if (_212 instanceof Data_Maybe.Nothing) {
                        return Data_Monoid.mempty(__dict_Monoid_95);
                    };
                    if (_212 instanceof Data_Maybe.Just) {
                        return _211(_212.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_208) {
            return function (_209) {
                return function (_210) {
                    if (_210 instanceof Data_Maybe.Nothing) {
                        return _209;
                    };
                    if (_210 instanceof Data_Maybe.Just) {
                        return _208(_209)(_210.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_205) {
            return function (_206) {
                return function (_207) {
                    if (_207 instanceof Data_Maybe.Nothing) {
                        return _206;
                    };
                    if (_207 instanceof Data_Maybe.Just) {
                        return _205(_207.value0)(_206);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var foldableEither = function (_) {
        return new Foldable(function (__dict_Monoid_96) {
            return function (_203) {
                return function (_204) {
                    if (_204 instanceof Data_Either.Left) {
                        return Data_Monoid.mempty(__dict_Monoid_96);
                    };
                    if (_204 instanceof Data_Either.Right) {
                        return _203(_204.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_200) {
            return function (_201) {
                return function (_202) {
                    if (_202 instanceof Data_Either.Left) {
                        return _201;
                    };
                    if (_202 instanceof Data_Either.Right) {
                        return _200(_201)(_202.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        }, function (_197) {
            return function (_198) {
                return function (_199) {
                    if (_199 instanceof Data_Either.Left) {
                        return _198;
                    };
                    if (_199 instanceof Data_Either.Right) {
                        return _197(_199.value0)(_198);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
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
    var foldMap = function (dict) {
        return dict.foldMap;
    };
    var lookup = function (__dict_Eq_98) {
        return function (__dict_Foldable_99) {
            return function (a) {
                return function (f) {
                    return Data_Monoid_First.runFirst(foldMap(__dict_Foldable_99)(Data_Monoid_First.monoidFirst({}))(function (_196) {
                        return Prelude["=="](__dict_Eq_98)(a)(_196.value0) ? new Data_Maybe.Just(_196.value1) : Data_Maybe.Nothing.value;
                    })(f));
                };
            };
        };
    };
    var fold = function (__dict_Foldable_100) {
        return function (__dict_Monoid_101) {
            return foldMap(__dict_Foldable_100)(__dict_Monoid_101)(Prelude.id(Prelude.categoryArr({})));
        };
    };
    var find = function (__dict_Foldable_102) {
        return function (p) {
            return function (f) {
                return (function (_588) {
                    if (_588.length > 0) {
                        var _590 = _588.slice(1);
                        return new Data_Maybe.Just(_588[0]);
                    };
                    if (_588.length === 0) {
                        return Data_Maybe.Nothing.value;
                    };
                    throw new Error("Failed pattern match");
                })(foldMap(__dict_Foldable_102)(Data_Monoid.monoidArray({}))(function (x) {
                    return p(x) ? [ x ] : [  ];
                })(f));
            };
        };
    };
    var any = function (__dict_Foldable_103) {
        return function (p) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_103)(Data_Monoid.monoidArray({}))(function (x) {
                return [ p(x) ];
            }));
        };
    };
    var elem = function (__dict_Eq_104) {
        return function (__dict_Foldable_105) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(any(__dict_Foldable_105))(Prelude["=="](__dict_Eq_104));
        };
    };
    var notElem = function (__dict_Eq_106) {
        return function (__dict_Foldable_107) {
            return function (x) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.not(Prelude.boolLikeBoolean({})))(elem(__dict_Eq_106)(__dict_Foldable_107)(x));
            };
        };
    };
    var and = function (__dict_Foldable_108) {
        return foldl(__dict_Foldable_108)(Prelude["&&"](Prelude.boolLikeBoolean({})))(true);
    };
    var all = function (__dict_Foldable_109) {
        return function (p) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_109)(Data_Monoid.monoidArray({}))(function (x) {
                return [ p(x) ];
            }));
        };
    };
    return {
        Foldable: Foldable, 
        foldlArray: foldlArray, 
        foldrArray: foldrArray, 
        lookup: lookup, 
        find: find, 
        notElem: notElem, 
        elem: elem, 
        product: product, 
        sum: sum, 
        all: all, 
        any: any, 
        or: or, 
        and: and, 
        mconcat: mconcat, 
        sequence_: sequence_, 
        for_: for_, 
        traverse_: traverse_, 
        fold: fold, 
        foldMap: foldMap, 
        foldl: foldl, 
        foldr: foldr, 
        foldableArray: foldableArray, 
        foldableEither: foldableEither, 
        foldableMaybe: foldableMaybe, 
        foldableRef: foldableRef, 
        foldableTuple: foldableTuple
    };
})();
var PS = PS || {};
PS.Data_Monoid_Last = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Monoid = PS.Data_Monoid;
    var Last = {
        create: function (value) {
            return value;
        }
    };
    var showLast = function (__dict_Show_110) {
        return new Prelude.Show(function (_236) {
            return "Last (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_110))(_236) + ")";
        });
    };
    var semigroupLast = function (_) {
        return new Prelude.Semigroup(function (_237) {
            return function (_238) {
                if (_238 instanceof Data_Maybe.Just) {
                    return _238;
                };
                if (_238 instanceof Data_Maybe.Nothing) {
                    return _237;
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var runLast = function (_229) {
        return _229;
    };
    var monoidLast = function (_) {
        return new Data_Monoid.Monoid(function (__1) {
            return semigroupLast({});
        }, Data_Maybe.Nothing.value);
    };
    var eqLast = function (__dict_Eq_112) {
        return new Prelude.Eq(function (_232) {
            return function (_233) {
                return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_112))(_232)(_233);
            };
        }, function (_230) {
            return function (_231) {
                return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_112))(_230)(_231);
            };
        });
    };
    var ordLast = function (__dict_Ord_111) {
        return new Prelude.Ord(function (_) {
            return eqLast(__dict_Ord_111["__superclass_Prelude.Eq_0"]({}));
        }, function (_234) {
            return function (_235) {
                return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_111))(_234)(_235);
            };
        });
    };
    return {
        Last: Last, 
        runLast: runLast, 
        eqLast: eqLast, 
        ordLast: ordLast, 
        showLast: showLast, 
        semigroupLast: semigroupLast, 
        monoidLast: monoidLast
    };
})();
var PS = PS || {};
PS.Data_Traversable = (function () {
    "use strict";
    var Data_Tuple = PS.Data_Tuple;
    var Prelude = PS.Prelude;
    var Data_Foldable = PS.Data_Foldable;
    var Data_Eq = PS.Data_Eq;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Either = PS.Data_Either;
    var Data_Array = PS.Data_Array;
    function Traversable(__superclass_Data$dotFoldable$dotFoldable_1, __superclass_Prelude$dotFunctor_0, sequence, traverse) {
        this["__superclass_Data.Foldable.Foldable_1"] = __superclass_Data$dotFoldable$dotFoldable_1;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
        this.sequence = sequence;
        this.traverse = traverse;
    };
    var traverse = function (dict) {
        return dict.traverse;
    };
    var traversableTuple = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableTuple({});
        }, function (__1) {
            return Data_Tuple.functorTuple({});
        }, function (__dict_Applicative_114) {
            return function (_253) {
                return Prelude["<$>"]((__dict_Applicative_114["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Tuple.Tuple.create(_253.value0))(_253.value1);
            };
        }, function (__dict_Applicative_113) {
            return function (_251) {
                return function (_252) {
                    return Prelude["<$>"]((__dict_Applicative_113["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Tuple.Tuple.create(_252.value0))(_251(_252.value1));
                };
            };
        });
    };
    var traversableRef = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableRef({});
        }, function (__1) {
            return Data_Eq.functorRef({});
        }, function (__dict_Applicative_116) {
            return function (_247) {
                return Prelude["<$>"]((__dict_Applicative_116["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Eq.Ref.create)(_247);
            };
        }, function (__dict_Applicative_115) {
            return function (_245) {
                return function (_246) {
                    return Prelude["<$>"]((__dict_Applicative_115["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Eq.Ref.create)(_245(_246));
                };
            };
        });
    };
    var traversableMaybe = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableMaybe({});
        }, function (__1) {
            return Data_Maybe.functorMaybe({});
        }, function (__dict_Applicative_118) {
            return function (_250) {
                if (_250 instanceof Data_Maybe.Nothing) {
                    return Prelude.pure(__dict_Applicative_118)(Data_Maybe.Nothing.value);
                };
                if (_250 instanceof Data_Maybe.Just) {
                    return Prelude["<$>"]((__dict_Applicative_118["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Maybe.Just.create)(_250.value0);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_117) {
            return function (_248) {
                return function (_249) {
                    if (_249 instanceof Data_Maybe.Nothing) {
                        return Prelude.pure(__dict_Applicative_117)(Data_Maybe.Nothing.value);
                    };
                    if (_249 instanceof Data_Maybe.Just) {
                        return Prelude["<$>"]((__dict_Applicative_117["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Maybe.Just.create)(_248(_249.value0));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var traversableEither = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableEither({});
        }, function (__1) {
            return Data_Either.functorEither({});
        }, function (__dict_Applicative_120) {
            return function (_244) {
                if (_244 instanceof Data_Either.Left) {
                    return Prelude.pure(__dict_Applicative_120)(new Data_Either.Left(_244.value0));
                };
                if (_244 instanceof Data_Either.Right) {
                    return Prelude["<$>"]((__dict_Applicative_120["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Either.Right.create)(_244.value0);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_119) {
            return function (_242) {
                return function (_243) {
                    if (_243 instanceof Data_Either.Left) {
                        return Prelude.pure(__dict_Applicative_119)(new Data_Either.Left(_243.value0));
                    };
                    if (_243 instanceof Data_Either.Right) {
                        return Prelude["<$>"]((__dict_Applicative_119["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Data_Either.Right.create)(_242(_243.value0));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
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
            return function (_241) {
                if (_241.length === 0) {
                    return Prelude.pure(__dict_Applicative_122)([  ]);
                };
                if (_241.length > 0) {
                    var _626 = _241.slice(1);
                    return Prelude["<*>"](__dict_Applicative_122["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_122["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_241[0]))(sequence(traversableArray({}))(__dict_Applicative_122)(_626));
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_121) {
            return function (_239) {
                return function (_240) {
                    if (_240.length === 0) {
                        return Prelude.pure(__dict_Applicative_121)([  ]);
                    };
                    if (_240.length > 0) {
                        var _630 = _240.slice(1);
                        return Prelude["<*>"](__dict_Applicative_121["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_121["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_239(_240[0])))(traverse(traversableArray({}))(__dict_Applicative_121)(_239)(_630));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var zipWithA = function (__dict_Applicative_123) {
        return function (f) {
            return function (xs) {
                return function (ys) {
                    return sequence(traversableArray({}))(__dict_Applicative_123)(Data_Array.zipWith(f)(xs)(ys));
                };
            };
        };
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
        zipWithA: zipWithA, 
        "for": $$for, 
        sequence: sequence, 
        traverse: traverse, 
        traversableArray: traversableArray, 
        traversableEither: traversableEither, 
        traversableRef: traversableRef, 
        traversableMaybe: traversableMaybe, 
        traversableTuple: traversableTuple
    };
})();
var PS = PS || {};
PS.Data_Foreign = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Function = PS.Data_Function;
    var Data_Either = PS.Data_Either;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Traversable = PS.Data_Traversable;
    var Data_Array = PS.Data_Array;
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
    function readMaybeImpl(nothing, just, value) {   return value === undefined || value === null ? nothing : just(value); };
    function readPropImpl(k, obj) {     return obj == undefined ? undefined : obj[k];};
    function readKeysImpl(left, right, k, obj) {   if (obj == undefined) {     return left('cannot get a key from an undefined or null value');   } else if (obj[k] == undefined) {     return left('value is undefined or null');   } else if (Array.isArray(obj[k])) {     return left('value is an array');   } else if (typeof obj[k] !== 'object') {     return left('value is not an object');   }   return right(Object.keys(obj[k])); };
    var showForeignImpl = JSON.stringify;;
    var showForeign = function (_) {
        return new Prelude.Show(showForeignImpl);
    };
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
    var readMaybeImpl$prime = function (x) {
        return readMaybeImpl(Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
    };
    var readBoolean = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("Boolean")));
    };
    var read = function (dict) {
        return dict.read;
    };
    var parseForeign = function (_254) {
        return function (_255) {
            return _254.value0(_255);
        };
    };
    var functorForeignParser = function (_) {
        return new Prelude.Functor(function (_256) {
            return function (_257) {
                return new ForeignParser(function (x) {
                    return Prelude["<$>"](Data_Either.functorEither({}))(_256)(_257.value0(x));
                });
            };
        });
    };
    var fromString = function (s) {
        return fromStringImpl(Data_Either.Left.create, Data_Either.Right.create, s);
    };
    var parseJSON = function (__dict_ReadForeign_130) {
        return function (json) {
            return Prelude[">>="](Data_Either.bindEither({}))(fromString(json))(parseForeign(read(__dict_ReadForeign_130)));
        };
    };
    var applyForeignParser = function (_) {
        return new Prelude.Apply(function (_260) {
            return function (_261) {
                return new ForeignParser(function (x) {
                    return (function (_639) {
                        if (_639 instanceof Data_Either.Left) {
                            return new Data_Either.Left(_639.value0);
                        };
                        if (_639 instanceof Data_Either.Right) {
                            return Prelude["<$>"](Data_Either.functorEither({}))(_639.value0)(_261.value0(x));
                        };
                        throw new Error("Failed pattern match");
                    })(_260.value0(x));
                });
            };
        }, function (__1) {
            return functorForeignParser({});
        });
    };
    var bindForeignParser = function (_) {
        return new Prelude.Bind(function (_258) {
            return function (_259) {
                return new ForeignParser(function (x) {
                    return (function (_646) {
                        if (_646 instanceof Data_Either.Left) {
                            return new Data_Either.Left(_646.value0);
                        };
                        if (_646 instanceof Data_Either.Right) {
                            return parseForeign(_259(_646.value0))(x);
                        };
                        throw new Error("Failed pattern match");
                    })(_258.value0(x));
                });
            };
        }, function (__1) {
            return applyForeignParser({});
        });
    };
    var index = function (__dict_ReadForeign_129) {
        return function (i) {
            return Prelude[">>="](bindForeignParser({}))(new ForeignParser(function (x) {
                return Data_Either.Right.create(readIndexImpl$prime(i)(x));
            }))(function (x) {
                return new ForeignParser(function (_) {
                    return (function (_650) {
                        if (_650 instanceof Data_Either.Right) {
                            return new Data_Either.Right(_650.value0);
                        };
                        if (_650 instanceof Data_Either.Left) {
                            return Data_Either.Left.create("Error reading index '" + Prelude.show(Prelude.showNumber({}))(i) + "':\n" + _650.value0);
                        };
                        throw new Error("Failed pattern match");
                    })(parseForeign(read(__dict_ReadForeign_129))(x));
                });
            });
        };
    };
    var readIndexImpl$prime = function (index_1) {
        return function (x) {
            return readPropImpl(index_1, x);
        };
    };
    var prop = function (__dict_ReadForeign_126) {
        return function (p) {
            return Prelude[">>="](bindForeignParser({}))(new ForeignParser(function (x) {
                return Data_Either.Right.create(readPropImpl$prime(p)(x));
            }))(function (x) {
                return new ForeignParser(function (_) {
                    return (function (_653) {
                        if (_653 instanceof Data_Either.Right) {
                            return new Data_Either.Right(_653.value0);
                        };
                        if (_653 instanceof Data_Either.Left) {
                            return Data_Either.Left.create("Error reading property '" + p + "':\n" + _653.value0);
                        };
                        throw new Error("Failed pattern match");
                    })(parseForeign(read(__dict_ReadForeign_126))(x));
                });
            });
        };
    };
    var readPropImpl$prime = function (prop_1) {
        return function (x) {
            return readPropImpl(prop_1, x);
        };
    };
    var readKeysImpl$prime = function (prop_1) {
        return function (x) {
            return readKeysImpl(Data_Either.Left.create, Data_Either.Right.create, prop_1, x);
        };
    };
    var keys = function (p) {
        return new ForeignParser(function (x) {
            return (function (_656) {
                if (_656 instanceof Data_Either.Right) {
                    return new Data_Either.Right(_656.value0);
                };
                if (_656 instanceof Data_Either.Left) {
                    return Data_Either.Left.create("Error reading object keys of '" + p + "':\n" + _656.value0);
                };
                throw new Error("Failed pattern match");
            })(readKeysImpl$prime(p)(x));
        });
    };
    var readArray = function (__dict_ReadForeign_127) {
        return new ReadForeign((function () {
            var arrayItem = function (_262) {
                return (function (_660) {
                    if (_660 instanceof Data_Either.Right) {
                        return new Data_Either.Right(_660.value0);
                    };
                    if (_660 instanceof Data_Either.Left) {
                        return Data_Either.Left.create("Error reading item at index " + Prelude.show(Prelude.showNumber({}))(_262.value0) + ":\n" + _660.value0);
                    };
                    throw new Error("Failed pattern match");
                })(parseForeign(read(__dict_ReadForeign_127))(_262.value1));
            };
            return Prelude[">>="](bindForeignParser({}))(ForeignParser.create(readPrimType("Array")))(function (xs) {
                return new ForeignParser(function (_) {
                    return Data_Traversable.traverse(Data_Traversable.traversableArray({}))(Data_Either.applicativeEither({}))(arrayItem)(Data_Tuple.zip(Data_Array.range(0)(Data_Array.length(xs)))(xs));
                });
            });
        })());
    };
    var readMaybe = function (__dict_ReadForeign_128) {
        return new ReadForeign(Prelude[">>="](bindForeignParser({}))(ForeignParser.create(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Either.Right.create)(readMaybeImpl$prime)))(function (x) {
            return new ForeignParser(function (_) {
                if (x instanceof Data_Maybe.Just) {
                    return Prelude[">>="](Data_Either.bindEither({}))(parseForeign(read(__dict_ReadForeign_128))(x.value0))(Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude["return"](Data_Either.monadEither({})))(Data_Maybe.Just.create));
                };
                if (x instanceof Data_Maybe.Nothing) {
                    return Prelude["return"](Data_Either.monadEither({}))(Data_Maybe.Nothing.value);
                };
                throw new Error("Failed pattern match");
            });
        }));
    };
    var applicativeForeignParser = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyForeignParser({});
        }, function (x) {
            return new ForeignParser(function (__1) {
                return new Data_Either.Right(x);
            });
        });
    };
    var monadForeignParser = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeForeignParser({});
        }, function (__1) {
            return bindForeignParser({});
        });
    };
    return {
        ForeignParser: ForeignParser, 
        ReadForeign: ReadForeign, 
        keys: keys, 
        index: index, 
        prop: prop, 
        read: read, 
        parseJSON: parseJSON, 
        parseForeign: parseForeign, 
        showForeign: showForeign, 
        functorForeignParser: functorForeignParser, 
        bindForeignParser: bindForeignParser, 
        applyForeignParser: applyForeignParser, 
        applicativeForeignParser: applicativeForeignParser, 
        monadForeignParser: monadForeignParser, 
        readString: readString, 
        readNumber: readNumber, 
        readBoolean: readBoolean, 
        readArray: readArray, 
        readMaybe: readMaybe
    };
})();
var PS = PS || {};
PS.Control_Monad_JQuery = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function ready(func) {   return function () {     jQuery(document).ready(func);   }; };
    function select(selector) {   return function () {     return jQuery(selector);   }; };
    function create(html) {   return function () {     return jQuery(html);   }; };
    function setAttr(attr) {   return function(val) {     return function(ob) {       return function () {         return ob.attr(attr, val);      };     };   }; };
    function attr(attrs) {   return function(ob) {     return function () {       return ob.attr(attrs);    };   }; };
    function css(props) {   return function(ob) {     return function () {       return ob.css(props);     };   }; };
    function addClass(cls) {   return function(ob) {     return function () {       return ob.addClass(cls);     };   }; };
    function removeClass(cls) {   return function(ob) {     return function () {       return ob.removeClass(cls);     };   }; };
    function setProp(p) {   return function(val) {     return function(ob) {       return function () {         return ob.prop(p, val);      };     };   }; };
    function getProp(p) {   return function(ob) {     return function () {       return ob.prop(p);    };   }; };
    function append(ob1) {   return function(ob) {     return function () {       return ob.append(ob1);     };   }; };
    function appendAtIndex(i) {   return function(ob1) {     return function(ob) {       return function () {         var children = ob.children();        if (children.length > 0) {          if (i <= 0) {             ob.prepend(ob1);          } else if (i >= children.length) {             ob.append(ob1);          } else {             ob1.insertBefore(jQuery(children[i]));          }          return ob;        } else {          return ob.append(ob1);         }      };     };   }; };
    function remove(ob) {   return function () {     return ob.remove();   }; };
    function clear(ob) {   return function () {     return ob.empty();   }; };
    function before(ob) {   return function(ob1) {     return function () {       return ob1.before(ob);     };   }; };
    function appendText(s) {   return function(ob) {     return function () {       return ob.append(s);     };   }; };
    function body() {   return jQuery(document.body); };
    function getText(ob) {   return function() {     return ob.text();   }; };
    function setText(text) {   return function(ob) {     return function() {       return ob.text(text);     };  };};
    function getValue(ob) {   return function() {     return ob.val();   }; };
    function setValue(val) {   return function(ob) {     return function() {       return ob.val(val);     };   }; };
    function on(evt) {   return function(act) {     return function(ob) {       return function() {         return ob.on(evt, function(e) {           act(e)(jQuery(this))();         });       };     };   }; };
    function on$prime(evt) {   return function(sel) {     return function(act) {       return function(ob) {         return function() {           return ob.on(evt, function(e) {             act(e)(jQuery(this))();           });         };       };     };   }; };
    function preventDefault(e) {   return function() {     e.preventDefault();  } };
    function stopPropagation(e) {   return function() {     e.stopPropagation();  } };
    function stopImmediatePropagation(e) {   return function() {     e.stopImmediatePropagation();  } };
    return {
        stopImmediatePropagation: stopImmediatePropagation, 
        stopPropagation: stopPropagation, 
        preventDefault: preventDefault, 
        "on'": on$prime, 
        on: on, 
        setValue: setValue, 
        getValue: getValue, 
        setText: setText, 
        getText: getText, 
        body: body, 
        appendText: appendText, 
        before: before, 
        clear: clear, 
        remove: remove, 
        appendAtIndex: appendAtIndex, 
        append: append, 
        getProp: getProp, 
        setProp: setProp, 
        removeClass: removeClass, 
        addClass: addClass, 
        css: css, 
        attr: attr, 
        setAttr: setAttr, 
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
    var Control_Monad_ST = PS.Control_Monad_ST;
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
    var sumStatus = function (_266) {
        return function __do() {
            var _10 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad_ST.readSTRef(_266.value0.raders))(Prelude.flip(Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({})))(Control_Monad_ST.readSTRef))();
            var _9 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad_ST.readSTRef(_266.value0.planes))(Prelude.flip(Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({})))(Control_Monad_ST.readSTRef))();
            var _8 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(_266.value0.fleet)(function (i) {
                return Control_Monad_ST.readSTRef(Data_Tuple.snd(i));
            })();
            return (function () {
                var fv = (Data_Foldable.sum(Data_Foldable.foldableArray({}))(_8) - Data_Foldable.sum(Data_Foldable.foldableArray({}))(_10)) - Data_Foldable.sum(Data_Foldable.foldableArray({}))(_9);
                return Prelude["return"](Control_Monad_Eff.monadEff({}))((Data_Foldable.sum(Data_Foldable.foldableArray({}))(_10) + 2 * Data_Foldable.sum(Data_Foldable.foldableArray({}))(_9)) + Math.floor(Math.sqrt(fv)));
            })()();
        };
    };
    var initStatus = function __do() {
        var _7 = Control_Monad_ST.newSTRef([  ])();
        var _6 = Control_Monad_ST.newSTRef([  ])();
        var _5 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(Data_Array.range(0)(5))(function (i) {
            return Prelude["<$>"](Control_Monad_Eff.functorEff({}))(Data_Tuple.Tuple.create(i))(Control_Monad_ST.newSTRef(0));
        })();
        return new Status({
            raders: _7, 
            planes: _6, 
            fleet: _5
        });
    };
    var initFleet = function (_267) {
        return function (_268) {
            return function (_269) {
                return Data_Foldable.for_(Control_Monad_Eff.applicativeEff({}))(Data_Foldable.foldableArray({}))(_269.value0.fleet)(function (_265) {
                    return function __do() {
                        var _26 = Control_Monad_ST.readSTRef(_265.value1)();
                        var _25 = Control_Monad_JQuery.create("<tr>")();
                        var _24 = Control_Monad_JQuery.create("<td>")();
                        var _23 = Control_Monad_JQuery.create("<td>")();
                        var _22 = Control_Monad_JQuery.create("<input style=\"width: 3em\" type=number value=0>")();
                        Control_Monad_JQuery.append(_22)(_23)();
                        var __1 = Control_Monad_JQuery.append(_24)(_25)();
                        var __2 = Control_Monad_JQuery.append(_23)(_25)();
                        var __3 = Control_Monad_JQuery.append(_25)(_268)();
                        var __4 = Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(_265.value0))(_24)();
                        var __5 = Control_Monad_JQuery.setValue(Prelude.show(Prelude.showNumber({}))(_26))(_22)();
                        return Prelude.flip(Control_Monad_JQuery.on("change"))(_22)(function (__6) {
                            return function (__7) {
                                return function __do() {
                                    var _21 = Control_Monad_JQuery.getValue(_22)();
                                    return (function (_685) {
                                        if (_685 instanceof Data_Either.Right) {
                                            return function __do() {
                                                var __8 = Control_Monad_ST.writeSTRef(_265.value1)(_685.value0)();
                                                var _20 = sumStatus(_269)();
                                                return Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(_20))(_267)();
                                            };
                                        };
                                        throw new Error("Failed pattern match");
                                    })(Prelude[">>="](Data_Either.bindEither({}))(Data_Foreign.parseForeign(Data_Foreign.read(Data_Foreign.readString({})))(_21))(Data_Foreign.parseJSON(Data_Foreign.readNumber({}))))();
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
                var _15 = Control_Monad_JQuery.create("<tr>")();
                var _14 = Control_Monad_JQuery.create("<td>")();
                var _13 = Control_Monad_JQuery.create("<td>")();
                var _12 = Control_Monad_JQuery.create("<td>")();
                var _11 = Control_Monad_JQuery.create("<input style=\"width: 3em\" type=number value=0>")();
                Control_Monad_JQuery.append(_11)(_14)();
                var __1 = Control_Monad_JQuery.append(_14)(_15)();
                var __2 = Control_Monad_JQuery.append(_13)(_15)();
                var __3 = Control_Monad_JQuery.append(_12)(_15)();
                var __4 = Control_Monad_JQuery.setText(name)(_13)();
                var __5 = Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(value))(_12)();
                return new Data_Tuple.Tuple(_11, _15);
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
                                var _19 = equipField(name)(value)();
                                var _18 = Control_Monad_ST.newSTRef(0)();
                                Control_Monad_ST.modifySTRef(getter(status))(function (s) {
                                    return Prelude[":"](_18)(s);
                                })();
                                var __1 = Prelude.flip(Control_Monad_JQuery.on("change"))(_19.value0)(function (__1) {
                                    return function (__2) {
                                        return function __do() {
                                            var _17 = Control_Monad_JQuery.getValue(_19.value0)();
                                            return (function (_699) {
                                                if (_699 instanceof Data_Either.Right) {
                                                    return function __do() {
                                                        var __3 = Control_Monad_ST.writeSTRef(_18)(value * _699.value0)();
                                                        var _16 = sumStatus(status)();
                                                        return Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(_16))(result)();
                                                    };
                                                };
                                                throw new Error("Failed pattern match");
                                            })(Prelude[">>="](Data_Either.bindEither({}))(Data_Foreign.parseForeign(Data_Foreign.read(Data_Foreign.readString({})))(_17))(Data_Foreign.parseJSON(Data_Foreign.readNumber({}))))();
                                        };
                                    };
                                })();
                                return Control_Monad_JQuery.append(_19.value1)(tbl)();
                            };
                        };
                    };
                };
            };
        };
    };
    var newPlane = newEquip(function (_264) {
        return _264.value0.planes;
    });
    var newRader = newEquip(function (_263) {
        return _263.value0.raders;
    });
    var main = Control_Monad_JQuery.ready(function __do() {
        var _31 = Control_Monad_JQuery.select("#rader")();
        var _30 = Control_Monad_JQuery.select("#plane")();
        var _29 = Control_Monad_JQuery.select("#fleet")();
        var _28 = Control_Monad_JQuery.select("#result")();
        var _27 = initStatus();
        initFleet(_28)(_29)(_27)();
        var __1 = newRader(_28)(_27)(_31)("13\u53f7\u5bfe\u7a7a\u96fb\u63a2")(3)();
        var __2 = newRader(_28)(_27)(_31)("13\u53f7\u5bfe\u7a7a\u96fb\u63a2\u6539")(4)();
        var __3 = newRader(_28)(_27)(_31)("14\u53f7\u5bfe\u7a7a\u96fb\u63a2")(5)();
        var __4 = newRader(_28)(_27)(_31)("21\u53f7\u5bfe\u7a7a\u96fb\u63a2")(4)();
        var __5 = newRader(_28)(_27)(_31)("21\u53f7\u5bfe\u7a7a\u96fb\u63a2\u6539")(6)();
        var __6 = newRader(_28)(_27)(_31)("22\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2")(5)();
        var __7 = newRader(_28)(_27)(_31)("22\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2\u6539\u56db")(5)();
        var __8 = newRader(_28)(_27)(_31)("32\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2")(10)();
        var __9 = newRader(_28)(_27)(_31)("33\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2")(7)();
        var __10 = newPlane(_28)(_27)(_30)("\u96f6\u5f0f\u6c34\u4e0a\u5075\u5bdf\u6a5f")(5)();
        var __11 = newPlane(_28)(_27)(_30)("\u96f6\u5f0f\u6c34\u4e0a\u89b3\u6e2c\u6a5f")(6)();
        var __12 = newPlane(_28)(_27)(_30)("\u4e5d\u516b\u5f0f\u6c34\u4e0a\u5075\u5bdf\u6a5f(\u591c\u5075)")(3)();
        var __13 = newPlane(_28)(_27)(_30)("\u745e\u96f2")(6)();
        var __14 = newPlane(_28)(_27)(_30)("\u745e\u96f2(\u516d\u4e09\u56db\u7a7a)")(6)();
        var __15 = newPlane(_28)(_27)(_30)("\u745e\u96f212\u578b")(6)();
        var __16 = newPlane(_28)(_27)(_30)("\u745e\u96f212\u578b(\u516d\u4e09\u56db\u7a7a)")(7)();
        var __17 = newPlane(_28)(_27)(_30)("\u5f69\u96f2")(9)();
        return newPlane(_28)(_27)(_30)("\u4e8c\u5f0f\u8266\u4e0a\u5075\u5bdf\u6a5f")(7)();
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