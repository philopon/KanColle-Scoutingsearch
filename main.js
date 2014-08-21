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
    function Eq($div$eq, $eq$eq) {
        this["/="] = $div$eq;
        this["=="] = $eq$eq;
    };
    function Semigroup($less$greater) {
        this["<>"] = $less$greater;
    };
    function cons(e) {  return function (l) {    return [e].concat(l);  };};
    function showStringImpl(s) {  return JSON.stringify(s);};
    function showNumberImpl(n) {  return n.toString();};
    function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
    function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
    function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
    function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
    function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
    function numNegate(n) {  return -n;};
    function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
    function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
    function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
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
    var $plus$plus = function (__dict_Semigroup_1) {
        return $less$greater(__dict_Semigroup_1);
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
    var showString = function (_) {
        return new Show(showStringImpl);
    };
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
    var semigroupString = function (_) {
        return new Semigroup(concatString);
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
    var eqString = function (_) {
        return new Eq(refIneq, refEq);
    };
    var $$const = function (_49) {
        return function (_50) {
            return _49;
        };
    };
    var $$void = function (__dict_Functor_8) {
        return function (fa) {
            return $less$dollar$greater(__dict_Functor_8)($$const(unit))(fa);
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
        Semigroup: Semigroup, 
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
        refIneq: refIneq, 
        refEq: refEq, 
        "==": $eq$eq, 
        "*": $times, 
        "-": $minus, 
        "+": $plus, 
        ap: ap, 
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
        "$": $dollar, 
        id: id, 
        "<<<": $less$less$less, 
        "const": $$const, 
        flip: flip, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showString: showString, 
        showNumber: showNumber, 
        numNumber: numNumber, 
        eqString: eqString, 
        semigroupString: semigroupString
    };
})();
var PS = PS || {};
PS.Math = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var sqrt = Math.sqrt;;
    return {
        sqrt: sqrt
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function runFn2(fn) {  return function(a) {    return function(b) {      return fn(a, b);    };  };};
    function runFn3(fn) {  return function(a) {    return function(b) {      return function(c) {        return fn(a, b, c);      };    };  };};
    return {
        runFn3: runFn3, 
        runFn2: runFn2
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
        return new Prelude.Functor(function (_78) {
            return function (_79) {
                if (_79 instanceof Left) {
                    return new Left(_79.value0);
                };
                if (_79 instanceof Right) {
                    return new Right(_78(_79.value0));
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var either = function (_75) {
        return function (_76) {
            return function (_77) {
                if (_77 instanceof Left) {
                    return _75(_77.value0);
                };
                if (_77 instanceof Right) {
                    return _76(_77.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var applyEither = function (_) {
        return new Prelude.Apply(function (_80) {
            return function (_81) {
                if (_80 instanceof Left) {
                    return new Left(_80.value0);
                };
                if (_80 instanceof Right) {
                    return Prelude["<$>"](functorEither({}))(_80.value0)(_81);
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
    return {
        Left: Left, 
        Right: Right, 
        either: either, 
        functorEither: functorEither, 
        applyEither: applyEither, 
        applicativeEither: applicativeEither, 
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
    function writeRef(ref) {  return function(val) {    return function() {      ref.value = val;      return {};    };  };};
    return {
        writeRef: writeRef, 
        readRef: readRef, 
        newRef: newRef
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
        return function (_92) {
            return function (_93) {
                if (_92) {
                    return _93;
                };
                if (!_92) {
                    return Prelude["return"](__dict_Monad_22)(Prelude.unit);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var replicateM = function (__dict_Monad_24) {
        return function (_87) {
            return function (_88) {
                if (_87 === 0) {
                    return Prelude["return"](__dict_Monad_24)([  ]);
                };
                return Prelude[">>="](__dict_Monad_24["__superclass_Prelude.Bind_1"]({}))(_88)(function (_4) {
                    return Prelude[">>="](__dict_Monad_24["__superclass_Prelude.Bind_1"]({}))(replicateM(__dict_Monad_24)(_87 - 1)(_88))(function (_3) {
                        return Prelude["return"](__dict_Monad_24)(Prelude[":"](_4)(_3));
                    });
                });
            };
        };
    };
    var foldM = function (__dict_Monad_25) {
        return function (_89) {
            return function (_90) {
                return function (_91) {
                    if (_91.length === 0) {
                        return Prelude["return"](__dict_Monad_25)(_90);
                    };
                    if (_91.length > 0) {
                        var _316 = _91.slice(1);
                        return Prelude[">>="](__dict_Monad_25["__superclass_Prelude.Bind_1"]({}))(_89(_90)(_91[0]))(function (a$prime) {
                            return foldM(__dict_Monad_25)(_89)(a$prime)(_316);
                        });
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    return {
        when: when, 
        foldM: foldM, 
        replicateM: replicateM
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
    var functorArray = function (_) {
        return new Prelude.Functor(map);
    };
    return {
        map: map, 
        functorArray: functorArray
    };
})();
var PS = PS || {};
PS.Data_Foreign = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Either = PS.Data_Either;
    var Data_Function = PS.Data_Function;
    function TypeMismatch(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    TypeMismatch.create = function (value0) {
        return function (value1) {
            return new TypeMismatch(value0, value1);
        };
    };
    function ErrorAtIndex(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    ErrorAtIndex.create = function (value0) {
        return function (value1) {
            return new ErrorAtIndex(value0, value1);
        };
    };
    function ErrorAtProperty(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    ErrorAtProperty.create = function (value0) {
        return function (value1) {
            return new ErrorAtProperty(value0, value1);
        };
    };
    function JSONError(value0) {
        this.value0 = value0;
    };
    JSONError.create = function (value0) {
        return new JSONError(value0);
    };
    function parseJSONImpl(left, right, str) {  try {    return right(JSON.parse(str));  } catch (e) {    return left(e.toString());  } };
    function unsafeFromForeign(value) {  return value;};
    function tagOf(value) {  return Object.prototype.toString.call(value).slice(8, -1);};
    var unsafeReadPrim = function (_134) {
        return function (_135) {
            if (tagOf(_135) === _134) {
                return Prelude.pure(Data_Either.applicativeEither({}))(unsafeFromForeign(_135));
            };
            return new Data_Either.Left(new TypeMismatch(_134, tagOf(_135)));
        };
    };
    var showForeignError = function (_) {
        return new Prelude.Show(function (_137) {
            if (_137 instanceof TypeMismatch) {
                return "Type mismatch: expected " + _137.value0 + ", found " + _137.value1;
            };
            if (_137 instanceof ErrorAtIndex) {
                return "Error at array index " + Prelude.show(Prelude.showNumber({}))(_137.value0) + ": " + Prelude.show(showForeignError({}))(_137.value1);
            };
            if (_137 instanceof ErrorAtProperty) {
                return "Error at property " + Prelude.show(Prelude.showString({}))(_137.value0) + ": " + Prelude.show(showForeignError({}))(_137.value1);
            };
            if (_137 instanceof JSONError) {
                return "JSON error: " + _137.value0;
            };
            throw new Error("Failed pattern match");
        });
    };
    var readString = unsafeReadPrim("String");
    var readNumber = unsafeReadPrim("Number");
    var parseJSON = function (json) {
        return parseJSONImpl(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Either.Left.create)(JSONError.create), Data_Either.Right.create, json);
    };
    return {
        TypeMismatch: TypeMismatch, 
        ErrorAtIndex: ErrorAtIndex, 
        ErrorAtProperty: ErrorAtProperty, 
        JSONError: JSONError, 
        readNumber: readNumber, 
        readString: readString, 
        tagOf: tagOf, 
        unsafeFromForeign: unsafeFromForeign, 
        parseJSON: parseJSON, 
        showForeignError: showForeignError
    };
})();
var PS = PS || {};
PS.Control_Monad_JQuery = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function ready(func) {   return function () {     jQuery(document).ready(func);   }; };
    function select(selector) {   return function () {     return jQuery(selector);   }; };
    function create(html) {   return function () {     return jQuery(html);   }; };
    function attr(attrs) {   return function(ob) {     return function () {       return ob.attr(attrs);    };   }; };
    function css(props) {   return function(ob) {     return function () {       return ob.css(props);     };   }; };
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
        css: css, 
        attr: attr, 
        create: create, 
        select: select, 
        ready: ready
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
        for_: for_, 
        traverse_: traverse_, 
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
            return function (_276) {
                if (_276.length === 0) {
                    return Prelude.pure(__dict_Applicative_122)([  ]);
                };
                if (_276.length > 0) {
                    var _329 = _276.slice(1);
                    return Prelude["<*>"](__dict_Applicative_122["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_122["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_276[0]))(sequence(traversableArray({}))(__dict_Applicative_122)(_329));
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_121) {
            return function (_274) {
                return function (_275) {
                    if (_275.length === 0) {
                        return Prelude.pure(__dict_Applicative_121)([  ]);
                    };
                    if (_275.length > 0) {
                        var _333 = _275.slice(1);
                        return Prelude["<*>"](__dict_Applicative_121["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_121["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_274(_275[0])))(traverse(traversableArray({}))(__dict_Applicative_121)(_274)(_333));
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
PS.Data_Foreign_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Foreign = PS.Data_Foreign;
    var Data_Either = PS.Data_Either;
    function IsForeign(read) {
        this.read = read;
    };
    var stringIsForeign = function (_) {
        return new IsForeign(Data_Foreign.readString);
    };
    var read = function (dict) {
        return dict.read;
    };
    var readJSON = function (__dict_IsForeign_126) {
        return function (json) {
            return Prelude[">>="](Data_Either.bindEither({}))(Data_Foreign.parseJSON(json))(read(__dict_IsForeign_126));
        };
    };
    var readWith = function (__dict_IsForeign_127) {
        return function (f) {
            return function (value) {
                return Data_Either.either(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Either.Left.create)(f))(Data_Either.Right.create)(read(__dict_IsForeign_127)(value));
            };
        };
    };
    var numberIsForeign = function (_) {
        return new IsForeign(Data_Foreign.readNumber);
    };
    return {
        IsForeign: IsForeign, 
        readWith: readWith, 
        readJSON: readJSON, 
        read: read, 
        stringIsForeign: stringIsForeign, 
        numberIsForeign: numberIsForeign
    };
})();
var PS = PS || {};
PS.Main = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Function = PS.Data_Function;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_JQuery = PS.Control_Monad_JQuery;
    var Control_Monad = PS.Control_Monad;
    var Data_Traversable = PS.Data_Traversable;
    var Control_Monad_Eff_Ref = PS.Control_Monad_Eff_Ref;
    var Data_Either = PS.Data_Either;
    var Data_Foreign_Class = PS.Data_Foreign_Class;
    var Debug_Trace = PS.Debug_Trace;
    var Data_Foreign = PS.Data_Foreign;
    var Data_Foldable = PS.Data_Foldable;
    var Math = PS.Math;
    function toFixedImpl(n,d) {return n.toFixed(d)};
    function getDictDefaultImpl(h,k,d) {return h[k] || d};
    var toFixed = Data_Function.runFn2(toFixedImpl);
    var itemTable = function __do() {
        var _18 = Control_Monad_JQuery.create("<table style='white-space: nowrap' class=\"table\">")();
        var _17 = Control_Monad_JQuery.create("<tr>")();
        return (function () {
            var apnd = function (s) {
                return function __do() {
                    var _16 = Control_Monad_JQuery.create(s)();
                    return Control_Monad_JQuery.append(_16)(_17)();
                };
            };
            return function __do() {
                apnd("<th style='min-width: 5em; width: 5em'>\u500b\u6570</th>")();
                var __1 = apnd("<th>\u540d\u79f0</th>")();
                var __2 = apnd("<th>\u7d22\u6575\u5024</th>")();
                var __3 = apnd("<th>\u5c0f\u8a08</th>")();
                var __4 = Control_Monad_JQuery.append(_17)(_18)();
                return _18;
            };
        })()();
    };
    var input = function (v) {
        return function __do() {
            var _5 = Control_Monad_JQuery.create("<input type=\"number\">")();
            Control_Monad_JQuery.css({
                width: "100%"
            })(_5)();
            var __1 = Control_Monad_JQuery.setValue(v)(_5)();
            return _5;
        };
    };
    var initGroup = function (title) {
        return function (factor) {
            return function (items) {
                return function (total) {
                    return function (callback) {
                        return function __do() {
                            var _34 = Control_Monad_JQuery.select("#items")();
                            var _33 = Control_Monad_JQuery.create("<div class=\"col-xs-12 col-sm-6\">")();
                            var _32 = itemTable();
                            var _31 = Control_Monad_JQuery.create("<tr>")();
                            return Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad.replicateM(Control_Monad_Eff.monadEff({}))(3)(function __do() {
                                var _19 = Control_Monad_JQuery.create("<th>")();
                                Control_Monad_JQuery.append(_19)(_31)();
                                return _19;
                            }))(function (_30) {
                                if (_30.length === 3) {
                                    return function __do() {
                                        Control_Monad_JQuery.attr({
                                            colspan: 2
                                        })(_30[0])();
                                        var __1 = Control_Monad_JQuery.setText(title)(_30[0])();
                                        var __2 = Control_Monad_JQuery.setText("x" + Prelude.show(Prelude.showNumber({}))(factor))(_30[1])();
                                        var _29 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(items)(function (item) {
                                            return function __do() {
                                                var _22 = Control_Monad_Eff_Ref.readRef(item.ref)();
                                                var _21 = input(_22)();
                                                var _20 = Control_Monad_JQuery.create("<td>")();
                                                return {
                                                    input: _21, 
                                                    item: item, 
                                                    total: _20
                                                };
                                            };
                                        })();
                                        return (function () {
                                            var reflesh = function (setValue) {
                                                return function __do() {
                                                    var _24 = Control_Monad.foldM(Control_Monad_Eff.monadEff({}))(function (s) {
                                                        return function (ii) {
                                                            return function __do() {
                                                                var _23 = Control_Monad_Eff_Ref.readRef(ii.item.ref)();
                                                                var __3 = Control_Monad.when(Control_Monad_Eff.monadEff({}))(setValue)(Prelude["void"](Control_Monad_Eff.functorEff({}))(Control_Monad_JQuery.setValue(Prelude.show(Prelude.showNumber({}))(_23))(ii.input)))();
                                                                var __4 = Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))((_23 * factor) * ii.item.scout))(ii.total)();
                                                                return s + _23 * ii.item.scout;
                                                            };
                                                        };
                                                    })(0)(_29)();
                                                    var __3 = Control_Monad_Eff_Ref.writeRef(total)(_24)();
                                                    var __4 = Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(_24 * factor))(_30[2])();
                                                    return Prelude.unit;
                                                };
                                            };
                                            return function __do() {
                                                var __3 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(_29)(function (ii) {
                                                    return function __do() {
                                                        var _28 = Control_Monad_JQuery.create("<tr>")();
                                                        return Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad.replicateM(Control_Monad_Eff.monadEff({}))(3)(function __do() {
                                                            var _25 = Control_Monad_JQuery.create("<td>")();
                                                            var __3 = Control_Monad_JQuery.append(_25)(_28)();
                                                            return _25;
                                                        }))(function (_27) {
                                                            if (_27.length === 3) {
                                                                return function __do() {
                                                                    var __3 = Control_Monad_JQuery.setText(ii.item.name)(_27[1])();
                                                                    var __4 = Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(ii.item.scout))(_27[2])();
                                                                    var __5 = Prelude.flip(Control_Monad_JQuery.on("change"))(ii.input)(function (__5) {
                                                                        return function (__6) {
                                                                            return function __do() {
                                                                                var _26 = Control_Monad_JQuery.getValue(ii.input)();
                                                                                return (function (_354) {
                                                                                    if (_354 instanceof Data_Either.Right) {
                                                                                        return function __do() {
                                                                                            var __7 = Control_Monad_Eff_Ref.writeRef(ii.item.ref)(_354.value0)();
                                                                                            var __8 = reflesh(false)();
                                                                                            return callback();
                                                                                        };
                                                                                    };
                                                                                    if (_354 instanceof Data_Either.Left) {
                                                                                        return Debug_Trace.print(Data_Foreign.showForeignError({}))(_354.value0);
                                                                                    };
                                                                                    throw new Error("Failed pattern match");
                                                                                })(Prelude[">>="](Data_Either.bindEither({}))(Data_Foreign_Class.readWith(Data_Foreign_Class.stringIsForeign({}))(Prelude.id(Prelude.categoryArr({})))(_26))(Data_Foreign_Class.readJSON(Data_Foreign_Class.numberIsForeign({}))))();
                                                                            };
                                                                        };
                                                                    })();
                                                                    var __6 = Control_Monad_JQuery.append(ii.total)(_28)();
                                                                    var __7 = Control_Monad_JQuery.append(ii.input)(_27[0])();
                                                                    return Control_Monad_JQuery.append(_28)(_32)();
                                                                };
                                                            };
                                                            throw new Error("Failed pattern match");
                                                        })();
                                                    };
                                                })();
                                                var __4 = Control_Monad_JQuery.append(_31)(_32)();
                                                var __5 = Control_Monad_JQuery.append(_32)(_33)();
                                                var __6 = Control_Monad_JQuery.append(_33)(_34)();
                                                return reflesh;
                                            };
                                        })()();
                                    };
                                };
                                throw new Error("Failed pattern match");
                            })();
                        };
                    };
                };
            };
        };
    };
    var initFleet = function (refs) {
        return function (sumRef) {
            return function (callback) {
                return function __do() {
                    var _15 = Control_Monad_JQuery.select("#fleet")();
                    var _14 = Control_Monad_JQuery.create("<tr>")();
                    var _13 = Control_Monad_JQuery.create("<td>")();
                    var _12 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(refs)(function (ref) {
                        return function __do() {
                            var _8 = Control_Monad_JQuery.create("<td>")();
                            var _7 = Control_Monad_Eff_Ref.readRef(ref)();
                            var _6 = input(_7)();
                            Control_Monad_JQuery.append(_6)(_8)();
                            var __1 = Control_Monad_JQuery.append(_8)(_14)();
                            return {
                                input: _6, 
                                ref: ref
                            };
                        };
                    })();
                    return (function () {
                        var reflesh = function (setValue) {
                            return function __do() {
                                var _10 = Control_Monad.foldM(Control_Monad_Eff.monadEff({}))(function (s) {
                                    return function (inp) {
                                        return function __do() {
                                            var _9 = Control_Monad_Eff_Ref.readRef(inp.ref)();
                                            Control_Monad.when(Control_Monad_Eff.monadEff({}))(setValue)(Prelude["void"](Control_Monad_Eff.functorEff({}))(Control_Monad_JQuery.setValue(Prelude.show(Prelude.showNumber({}))(_9))(inp.input)))();
                                            return s + _9;
                                        };
                                    };
                                })(0)(_12)();
                                Control_Monad_JQuery.setText(Prelude.show(Prelude.showNumber({}))(_10))(_13)();
                                var __1 = Control_Monad_Eff_Ref.writeRef(sumRef)(_10)();
                                return Prelude.unit;
                            };
                        };
                        return function __do() {
                            Data_Foldable.for_(Control_Monad_Eff.applicativeEff({}))(Data_Foldable.foldableArray({}))(_12)(function (inp) {
                                return Prelude.flip(Control_Monad_JQuery.on("change"))(inp.input)(function (_) {
                                    return function (__1) {
                                        return function __do() {
                                            var _11 = Control_Monad_JQuery.getValue(inp.input)();
                                            return (function (_373) {
                                                if (_373 instanceof Data_Either.Right) {
                                                    return function __do() {
                                                        var __2 = Control_Monad_Eff_Ref.writeRef(inp.ref)(_373.value0)();
                                                        var __3 = reflesh(false)();
                                                        return callback();
                                                    };
                                                };
                                                if (_373 instanceof Data_Either.Left) {
                                                    return Debug_Trace.print(Data_Foreign.showForeignError({}))(_373.value0);
                                                };
                                                throw new Error("Failed pattern match");
                                            })(Prelude[">>="](Data_Either.bindEither({}))(Data_Foreign_Class.readWith(Data_Foreign_Class.stringIsForeign({}))(Prelude.id(Prelude.categoryArr({})))(_11))(Data_Foreign_Class.readJSON(Data_Foreign_Class.numberIsForeign({}))))();
                                        };
                                    };
                                });
                            })();
                            var __1 = Control_Monad_JQuery.append(_13)(_14)();
                            var __2 = Control_Monad_JQuery.append(_14)(_15)();
                            return reflesh;
                        };
                    })()();
                };
            };
        };
    };
    var getDictDefault = Data_Function.runFn3(getDictDefaultImpl);
    var catalogToItem = function (inits) {
        return function (i) {
            return function __do() {
                var _35 = Control_Monad_Eff_Ref.newRef(getDictDefault(inits)(i.number)(0))();
                return {
                    number: i.number, 
                    name: i.name, 
                    scout: i.scout, 
                    category: i.category, 
                    ref: _35
                };
            };
        };
    };
    var main = Control_Monad_JQuery.ready(function __do() {
        var _48 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))([ 0, 0, 0, 0, 0, 0 ])(Control_Monad_Eff_Ref.newRef)();
        var _47 = Control_Monad_Eff_Ref.newRef(0)();
        return (function () {
            var rederCatalog = [ {
                number: 27, 
                name: "13\u53f7\u5bfe\u7a7a\u96fb\u63a2", 
                scout: 3, 
                category: "\u5c0f\u578b\u96fb\u63a2"
            }, {
                number: 106, 
                name: "13\u53f7\u5bfe\u7a7a\u96fb\u63a2\u6539", 
                scout: 4, 
                category: "\u5c0f\u578b\u96fb\u63a2"
            }, {
                number: 28, 
                name: "22\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2", 
                scout: 5, 
                category: "\u5c0f\u578b\u96fb\u63a2"
            }, {
                number: 88, 
                name: "22\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2\u6539\u56db", 
                scout: 5, 
                category: "\u5c0f\u578b\u96fb\u63a2"
            }, {
                number: 29, 
                name: "33\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2", 
                scout: 7, 
                category: "\u5c0f\u578b\u96fb\u63a2"
            }, {
                number: 30, 
                name: "21\u53f7\u5bfe\u7a7a\u96fb\u63a2", 
                scout: 4, 
                category: "\u5927\u578b\u96fb\u63a2"
            }, {
                number: 89, 
                name: "21\u53f7\u5bfe\u7a7a\u96fb\u63a2\u6539", 
                scout: 6, 
                category: "\u5927\u578b\u96fb\u63a2"
            }, {
                number: 31, 
                name: "32\u53f7\u5bfe\u6c34\u4e0a\u96fb\u63a2", 
                scout: 7, 
                category: "\u5927\u578b\u96fb\u63a2"
            }, {
                number: 32, 
                name: "14\u53f7\u5bfe\u7a7a\u96fb\u63a2", 
                scout: 5, 
                category: "\u5927\u578b\u96fb\u63a2"
            } ];
            return function __do() {
                var _46 = Control_Monad_Eff_Ref.newRef(0)();
                var _45 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(rederCatalog)(catalogToItem({}))();
                return (function () {
                    var planeCatalog = [ {
                        number: 25, 
                        name: "\u96f6\u5f0f\u6c34\u4e0a\u5075\u5bdf\u6a5f", 
                        scout: 5, 
                        category: "\u6c34\u4e0a\u5075\u5bdf\u6a5f"
                    }, {
                        number: 59, 
                        name: "\u96f6\u5f0f\u6c34\u4e0a\u89b3\u6e2c\u6a5f", 
                        scout: 6, 
                        category: "\u6c34\u4e0a\u5075\u5bdf\u6a5f"
                    }, {
                        number: 102, 
                        name: "\u4e5d\u516b\u5f0f\u6c34\u4e0a\u5075\u5bdf\u6a5f(\u591c\u5075)", 
                        scout: 3, 
                        category: "\u6c34\u4e0a\u5075\u5bdf\u6a5f"
                    }, {
                        number: 61, 
                        name: "\u4e8c\u5f0f\u6c34\u4e0a\u89b3\u6e2c\u6a5f", 
                        scout: 7, 
                        category: "\u8266\u4e0a\u5075\u5bdf\u6a5f"
                    }, {
                        number: 54, 
                        name: "\u5f69\u96f2", 
                        scout: 9, 
                        category: "\u8266\u4e0a\u5075\u5bdf\u6a5f"
                    }, {
                        number: 26, 
                        name: "\u745e\u96f2", 
                        scout: 6, 
                        category: "\u6c34\u4e0a\u7206\u6483\u6a5f"
                    }, {
                        number: 79, 
                        name: "\u745e\u96f2(\u516d\u4e09\u56db\u7a7a)", 
                        scout: 6, 
                        category: "\u6c34\u4e0a\u7206\u6483\u6a5f"
                    }, {
                        number: 80, 
                        name: "\u745e\u96f212\u578b", 
                        scout: 6, 
                        category: "\u6c34\u4e0a\u7206\u6483\u6a5f"
                    }, {
                        number: 81, 
                        name: "\u745e\u96f212\u578b(\u516d\u4e09\u56db\u7a7a)", 
                        scout: 7, 
                        category: "\u6c34\u4e0a\u7206\u6483\u6a5f"
                    }, {
                        number: 62, 
                        name: "\u8a66\u88fd\u6674\u5d50", 
                        scout: 6, 
                        category: "\u6c34\u4e0a\u7206\u6483\u6a5f"
                    } ];
                    return function __do() {
                        var _44 = Control_Monad_Eff_Ref.newRef(0)();
                        var _43 = Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(planeCatalog)(catalogToItem({}))();
                        var _42 = Control_Monad_JQuery.select("#result")();
                        return (function () {
                            var updateResult = function __do() {
                                var _38 = Control_Monad_Eff_Ref.readRef(_47)();
                                var _37 = Control_Monad_Eff_Ref.readRef(_46)();
                                var _36 = Control_Monad_Eff_Ref.readRef(_44)();
                                return (function () {
                                    var r = (Math.sqrt((_38 - _37) - _36) + _37) + 2 * _36;
                                    return function __do() {
                                        Control_Monad_JQuery.setText(toFixed(r)(2))(_42)();
                                        return Prelude.unit;
                                    };
                                })()();
                            };
                            return function __do() {
                                var _41 = initFleet(_48)(_47)(updateResult)();
                                var _40 = initGroup("\u96fb\u63a2")(1)(_45)(_46)(updateResult)();
                                var _39 = initGroup("\u5075\u5bdf\u6a5f")(2)(_43)(_44)(updateResult)();
                                _41(true)();
                                var __1 = _40(true)();
                                return _39(true)();
                            };
                        })()();
                    };
                })()();
            };
        })()();
    });
    return {
        main: main, 
        catalogToItem: catalogToItem, 
        getDictDefault: getDictDefault, 
        getDictDefaultImpl: getDictDefaultImpl, 
        initGroup: initGroup, 
        itemTable: itemTable, 
        initFleet: initFleet, 
        input: input, 
        toFixed: toFixed, 
        toFixedImpl: toFixedImpl
    };
})();
PS.Main.main();