// Mon Jan 26 11:38:10 AM EST 2026
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX-2024-06-22:
// ATS3-XANADU/srcgen2/xats2js/srcgen1
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.

'use strict';

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
let XATSTOP0 = undefined
//
////////////////////////////////////////////////////////////////////////.
//
let XATSINT0 = (i0) => i0
let XATSINT1 = (i0) => i0
//
let XATSBTF0 = (b0) => b0
let XATSBOOL = (b0) => b0
//
let XATSFLT0 = (f0) => f0
let XATSFLT1 = (f0) => f0
/*
let XATSSFLT = (sf) => sf
let XATSDFLT = (df) => df
*/
let XATSSTR0 = (cs) => cs
let XATSSTRN = (cs) => cs
//
let XATSCNUL = (  ) => (0)
let XATSCHR1 = (  ) => (0)
//
let XATSCHR0 =
    (ch) => ch.charCodeAt(0)
let XATSCHAR =
    (ch) => ch.charCodeAt(0)
let XATSCHR2 =
    (ch) => ch.charCodeAt(0)
//
let XATSCHR3 = (ch) => {
    var c1 // current one
    c1 = ch.charCodeAt(1)
    if (c1 < 48||c1 > 55)
    {
      return c1 ; // ascii
    } else {
	var i1 = 2;
	var d1 = (c1 - 48);
	while (i1 < ch.length) {
	    c1 = ch.charCodeAt(i1);
	    if (c1===39) // SQUOTE=39
	    {
		return d1; // ascii
	    } else {
		d1 = 8*d1 + (c1 - 48)
	    }
	}
	return d1 ; // ascii code of [ch]
    }
}
//
////////////////////////////////////////////////////////////////////////.
/*
HX: this is historic:
let XATSVAR0 = () => [null]
let XATSVAR1 = (init) => [init]
let XATSFLAT = (addr) => addr[0]
*/
////////////////////////////////////////////////////////////////////////.

let XATSDAPP = (dapp) => dapp
let XATSCAPP = (_, capp) => capp
let XATSCAST = (_, args) => args[0]

////////////////////////////////////////////////////////////////////////.
//
let XATSPCON =
  (pcon, argi) => pcon[argi+1]
//
let XATSPFLT = (pflt) => pflt
let XATSPROJ = (proj) => proj
let XATSP0RJ = (p0rj) => p0rj
let XATSP1RJ = (_, p1rj) => p1rj
let XATSP1CN = (_, p1cn) => p1cn
//
////////////////////////////////////////////////////////////////////////.
//
let XATSTRCD = (knd0) => knd0
//
let XATSTUP0 = (tpl0) => tpl0
let XATSTUP1 = (knd0, tpl1) => tpl1
let XATSRCD2 = (knd0, rcd2) => rcd2
//
////////////////////////////////////////////////////////////////////////.
//
let XATSROOT = (x) => [0, x]
let XATSLPFT = (i, x) => [1+0, x, i]
let XATSLPBX = (i, x) => [1+1, x, i]
let XATSLPCN = (i, x) => [1+2, x, i+1]
//
let XATSVAR0 = (    ) => XATSROOT([null])
let XATSVAR1 = (init) => XATSROOT([init])
//
let XATSADDR = (addr) => addr // HX: no-op
let XATSFLAT = (addr) => XATS000_lvget(addr)
//
////////////////////////////////////////////////////////////////////////.
//
let XATSCTAG = (_, t) => t
//
let XATS000_inteq = (x, y) => (x===y)
let XATS000_btfeq = (x, y) => (x===y)
let XATS000_chreq = (x, y) => (x===y)
//
let XATS000_streq = (x, y) => (x == y)
//
let XATS000_ctgeq = (v, t) => (v[0] == t)
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_optn_nil()
{
  return XATSCAPP("optn_nil", [0])
}
function
XATS2JS_optn_cons(x0)
{
  return XATSCAPP("optn_cons", [1, x0])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_list_nil()
{
  return XATSCAPP("list_nil", [0])
}
function
XATS2JS_list_cons(x0, xs)
{
  return XATSCAPP("list_cons", [1, x0, xs])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_optn_vt_nil()
{
  return XATSCAPP("optn_vt_nil", [0])
}
function
XATS2JS_optn_vt_cons(x0)
{
  return XATSCAPP("optn_vt_cons", [1, x0])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_list_vt_nil()
{
  return XATSCAPP("list_vt_nil", [0])
}
function
XATS2JS_list_vt_cons(x0, xs)
{
  return XATSCAPP("list_vt_cons", [1, x0, xs])
}
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.

let XATS000_cfail = function()
  {
    throw new Error("XATS000_cfail");
  }

let XATS000_patck = function(pck)
  {
    if (!pck) {
      throw new Error("XATS000_patck");
    } // end-of-[if]
  }

////////////////////////////////////////////////////////////////////////.

let XATS000_fold = (pcon) => null
let XATS000_free = (pcon) => null

////////////////////////////////////////////////////////////////////////.
//
let XATS000_dp2tr =
  (p2tr) => XATS000_lvget(p2tr)
//
let XATS000_l0azy = function(lfun)
{
  return [0, lfun]
}
let XATS000_dl0az = function(l0az)
{
  if (l0az[0] > 0) {
    l0az[0] += 1; return l0az[1]
  } else {
    let res = l0az[1]()
    l0az[0] = 0+1; l0az[1] = res; return res
  }
}
//
let XATS000_l1azy = (lfun) => lfun
let XATS000_dl1az = (l1az) => l1az(1)
//
let XATS000_assgn =
  (lval, rval) => XATS000_lvset(lval, rval)
//
////////////////////////////////////////////////////////////////////////.
//
let XATS000_ftset =
  function(tpl0, idx1, rval)
  {
    let tpl1 = tpl0.slice();
    tpl1[idx1] = rval; return tpl1
  }
//
let XATS000_lvget = function(lval)
  {
    let ctag = lval[0]
    if (ctag === 0)
      return lval[1][0]
    if (ctag === 1+0)
      return XATS000_lvget(lval[1])[lval[2]]
    if (ctag === 1+1)
      return lval[1][lval[2]]
    if (ctag === 1+2)
      return lval[1][lval[2]]
  }
//
let XATS000_lvset = function(lval, rval)
  {
    let ctag = lval[0]
    if (ctag === 0) return ( lval[1][0] = rval )
    if (ctag === 1+0)
    {
      return XATS000_lvset
	(lval[1], XATS000_ftset(XATS000_lvget(lval[1]), lval[2], rval))
    }
    if (ctag === 1+1) return ( lval[1][lval[2]] = rval )
    if (ctag === 1+2) return ( lval[1][lval[2]] = rval )
  }
//
////////////////////////////////////////////////////////////////////////.
//
let XATS000_raise = (xcon) => { throw(xcon) }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
the end of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/xats2js_js1emit.js]
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// Fri Jan 16 11:47:37 PM EST 2026
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
the beg of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/srcgen2_precats.js]
*/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Fri Jan 16 11:31:07 PM EST 2026
// LCSRCsome1(precats.dats)@(1291(line=30,offs=1)--1332(line=31,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(UN);G1Estr(T_STRN1_clsd("prelude/SATS/unsfx00.sats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats));...)))
// I1Dextern(LCSRCsome1(precats.dats)@(1958(line=80,offs=1)--2028(line=85,offs=29)))
// LCSRCsome1(precats.dats)@(1966(line=81,offs=1)--2028(line=85,offs=29))
// I1FUNDCL
// XATS2JS_optn_nilq_1969
  // FJARGdarg($list(I1BNDcons(I1TNM(1);I0Pvar(xs(3));$list(@(xs(3),I1Vtnm(I1TNM(1)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_nilq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2029(line=86,offs=1)--2118(line=90,offs=43)))
let XATS2JS_optn_nilq = function (arg1) { // impl
  let jsxtnm2 = arg1
  // I1CMP:start
  let jsxtnm5 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(3);I0Pdapp(I0Pcon(optn_nil(4));$list());$list()))
    if (XATS000_ctgeq(jsxtnm2, XATSCTAG("optn_nil",0))) { // gpt
      let jsxtnm3 = jsxtnm2
      jsxtnm5 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(4);I0Pdap1(I0Pcon(optn_cons(5)));$list()))
    if (XATS000_ctgeq(jsxtnm2, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm4 = jsxtnm2
      jsxtnm5 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm5
  return jsxtnm5
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(2122(line=92,offs=1)--2193(line=97,offs=29)))
// LCSRCsome1(precats.dats)@(2130(line=93,offs=1)--2193(line=97,offs=29))
// I1FUNDCL
// XATS2JS_optn_consq_2133
  // FJARGdarg($list(I1BNDcons(I1TNM(6);I0Pvar(xs(6));$list(@(xs(6),I1Vtnm(I1TNM(6)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_consq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2194(line=98,offs=1)--2286(line=102,offs=45)))
let XATS2JS_optn_consq = function (arg1) { // impl
  let jsxtnm7 = arg1
  // I1CMP:start
  let jsxtnm10 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(8);I0Pdapp(I0Pcon(optn_nil(4));$list());$list()))
    if (XATS000_ctgeq(jsxtnm7, XATSCTAG("optn_nil",0))) { // gpt
      let jsxtnm8 = jsxtnm7
      jsxtnm10 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(9);I0Pdap1(I0Pcon(optn_cons(5)));$list()))
    if (XATS000_ctgeq(jsxtnm7, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm9 = jsxtnm7
      jsxtnm10 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm10
  return jsxtnm10
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(2313(line=106,offs=1)--2386(line=111,offs=28)))
// LCSRCsome1(precats.dats)@(2321(line=107,offs=1)--2386(line=111,offs=28))
// I1FUNDCL
// XATS2JS_optn_head$raw_2324
  // FJARGdarg($list(I1BNDcons(I1TNM(11);I0Pvar(xs(9));$list(@(xs(9),I1Vtnm(I1TNM(11)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2387(line=112,offs=1)--2460(line=115,offs=35)))
let XATS2JS_optn_head$raw = function (arg1) { // impl
  let jsxtnm12 = arg1
  // I1CMP:start
  let jsxtnm14 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(13);I0Pdapp(I0Pcon(optn_cons(5));$list(I0Pvar(x0(11))));$list(@(x0(11),I1Vp1cn(I0Pcon(optn_cons(5));I1Vtnm(I1TNM(13));0)))))
    if (XATS000_ctgeq(jsxtnm12, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm13 = jsxtnm12
      jsxtnm14 = XATSP1CN("optn_cons", jsxtnm13[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm14
  return jsxtnm14
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(2464(line=117,offs=1)--2539(line=122,offs=28)))
// LCSRCsome1(precats.dats)@(2472(line=118,offs=1)--2539(line=122,offs=28))
// I1FUNDCL
// XATS2JS_optn_uncons$raw_2475
  // FJARGdarg($list(I1BNDcons(I1TNM(15);I0Pvar(xs(13));$list(@(xs(13),I1Vtnm(I1TNM(15)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_uncons$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2540(line=123,offs=1)--2615(line=126,offs=35)))
let XATS2JS_optn_uncons$raw = function (arg1) { // impl
  let jsxtnm16 = arg1
  // I1CMP:start
  let jsxtnm18 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(17);I0Pdapp(I0Pcon(optn_cons(5));$list(I0Pvar(x0(15))));$list(@(x0(15),I1Vp1cn(I0Pcon(optn_cons(5));I1Vtnm(I1TNM(17));0)))))
    if (XATS000_ctgeq(jsxtnm16, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm17 = jsxtnm16
      jsxtnm18 = XATSP1CN("optn_cons", jsxtnm17[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm18
  return jsxtnm18
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3007(line=159,offs=1)--3077(line=164,offs=29)))
// LCSRCsome1(precats.dats)@(3015(line=160,offs=1)--3077(line=164,offs=29))
// I1FUNDCL
// XATS2JS_list_nilq_3018
  // FJARGdarg($list(I1BNDcons(I1TNM(19);I0Pvar(xs(17));$list(@(xs(17),I1Vtnm(I1TNM(19)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_nilq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3078(line=165,offs=1)--3167(line=169,offs=43)))
let XATS2JS_list_nilq = function (arg1) { // impl
  let jsxtnm20 = arg1
  // I1CMP:start
  let jsxtnm23 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(21);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
    if (XATS000_ctgeq(jsxtnm20, XATSCTAG("list_nil",0))) { // gpt
      let jsxtnm21 = jsxtnm20
      jsxtnm23 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(22);I0Pdap1(I0Pcon(list_cons(9)));$list()))
    if (XATS000_ctgeq(jsxtnm20, XATSCTAG("list_cons",1))) { // gpt
      let jsxtnm22 = jsxtnm20
      jsxtnm23 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm23
  return jsxtnm23
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3171(line=171,offs=1)--3242(line=176,offs=29)))
// LCSRCsome1(precats.dats)@(3179(line=172,offs=1)--3242(line=176,offs=29))
// I1FUNDCL
// XATS2JS_list_consq_3182
  // FJARGdarg($list(I1BNDcons(I1TNM(24);I0Pvar(xs(20));$list(@(xs(20),I1Vtnm(I1TNM(24)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_consq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3243(line=177,offs=1)--3335(line=181,offs=45)))
let XATS2JS_list_consq = function (arg1) { // impl
  let jsxtnm25 = arg1
  // I1CMP:start
  let jsxtnm28 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(26);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
    if (XATS000_ctgeq(jsxtnm25, XATSCTAG("list_nil",0))) { // gpt
      let jsxtnm26 = jsxtnm25
      jsxtnm28 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(27);I0Pdap1(I0Pcon(list_cons(9)));$list()))
    if (XATS000_ctgeq(jsxtnm25, XATSCTAG("list_cons",1))) { // gpt
      let jsxtnm27 = jsxtnm25
      jsxtnm28 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm28
  return jsxtnm28
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3362(line=185,offs=1)--3435(line=190,offs=28)))
// LCSRCsome1(precats.dats)@(3370(line=186,offs=1)--3435(line=190,offs=28))
// I1FUNDCL
// XATS2JS_list_head$raw_3373
  // FJARGdarg($list(I1BNDcons(I1TNM(29);I0Pvar(xs(23));$list(@(xs(23),I1Vtnm(I1TNM(29)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3436(line=191,offs=1)--3513(line=194,offs=39)))
let XATS2JS_list_head$raw = function (arg1) { // impl
  let jsxtnm30 = arg1
  // I1CMP:start
  let jsxtnm32 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(31);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x1(25)),I0Pvar(xs(26))));$list(@(x1(25),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(31));0)),@(xs(26),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(31));1)))))
    if (XATS000_ctgeq(jsxtnm30, XATSCTAG("list_cons",1))) { // gpt
      let jsxtnm31 = jsxtnm30
      jsxtnm32 = XATSP1CN("list_cons", jsxtnm31[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm32
  return jsxtnm32
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3560(line=199,offs=1)--3638(line=204,offs=32)))
// LCSRCsome1(precats.dats)@(3568(line=200,offs=1)--3638(line=204,offs=32))
// I1FUNDCL
// XATS2JS_lazy_make_f0un_3571
  // FJARGdarg($list(I1BNDcons(I1TNM(33);I0Pvar(f0(28));$list(@(f0(28),I1Vtnm(I1TNM(33)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_make_f0un);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3639(line=205,offs=1)--3688(line=206,offs=41)))
let XATS2JS_lazy_make_f0un = function (arg1) { // impl
  let jsxtnm34 = arg1
  // I1CMP:start
  let jsxtnm36 = XATS000_l0azy(function () { // l0azy
    // I1CMP:start
    let jsxtnm35 = XATSDAPP(jsxtnm34())
    // I1CMP:return:jsxtnm35
    return jsxtnm35
  }) // endfun(l0azy)
  // I1CMP:return:jsxtnm36
  return jsxtnm36
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3735(line=211,offs=1)--3805(line=215,offs=32)))
// LCSRCsome1(precats.dats)@(3743(line=212,offs=1)--3805(line=215,offs=32))
// I1FUNDCL
// XATS2JS_strmcon_nil_3746
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_nil);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3806(line=216,offs=1)--3852(line=217,offs=38)))
let XATS2JS_strmcon_nil = function () { // impl
  // I1CMP:start
  let jsxtnm37 = XATSCAPP("strmcon_nil", [0])
  // I1CMP:return:jsxtnm37
  return jsxtnm37
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3856(line=219,offs=1)--3946(line=224,offs=38)))
// LCSRCsome1(precats.dats)@(3864(line=220,offs=1)--3946(line=224,offs=38))
// I1FUNDCL
// XATS2JS_strmcon_cons_3867
  // FJARGdarg($list(I1BNDcons(I1TNM(38);I0Pvar(x1(32));$list(@(x1(32),I1Vtnm(I1TNM(38))))),I1BNDcons(I1TNM(39);I0Pvar(xs(33));$list(@(xs(33),I1Vtnm(I1TNM(39)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3947(line=225,offs=1)--4005(line=226,offs=50)))
let XATS2JS_strmcon_cons = function (arg1, arg2) { // impl
  let jsxtnm40 = arg1
  let jsxtnm41 = arg2
  // I1CMP:start
  let jsxtnm42 = XATSCAPP("strmcon_cons", [1, jsxtnm40, jsxtnm41])
  // I1CMP:return:jsxtnm42
  return jsxtnm42
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4009(line=228,offs=1)--4099(line=233,offs=38)))
// LCSRCsome1(precats.dats)@(4017(line=229,offs=1)--4099(line=233,offs=38))
// I1FUNDCL
// XATS2JS_strxcon_cons_4020
  // FJARGdarg($list(I1BNDcons(I1TNM(43);I0Pvar(x1(37));$list(@(x1(37),I1Vtnm(I1TNM(43))))),I1BNDcons(I1TNM(44);I0Pvar(xs(38));$list(@(xs(38),I1Vtnm(I1TNM(44)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4100(line=234,offs=1)--4158(line=235,offs=50)))
let XATS2JS_strxcon_cons = function (arg1, arg2) { // impl
  let jsxtnm45 = arg1
  let jsxtnm46 = arg2
  // I1CMP:start
  let jsxtnm47 = XATSCAPP("strxcon_cons", [0, jsxtnm45, jsxtnm46])
  // I1CMP:return:jsxtnm47
  return jsxtnm47
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4185(line=239,offs=1)--4261(line=244,offs=32)))
// LCSRCsome1(precats.dats)@(4193(line=240,offs=1)--4261(line=244,offs=32))
// I1FUNDCL
// XATS2JS_strmcon_nilq_4196
  // FJARGdarg($list(I1BNDcons(I1TNM(48);I0Pvar(xs(42));$list(@(xs(42),I1Vtnm(I1TNM(48)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_nilq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4262(line=245,offs=1)--4360(line=249,offs=49)))
let XATS2JS_strmcon_nilq = function (arg1) { // impl
  let jsxtnm49 = arg1
  // I1CMP:start
  let jsxtnm52 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(50);I0Pdapp(I0Pcon(strmcon_nil(12));$list());$list()))
    if (XATS000_ctgeq(jsxtnm49, XATSCTAG("strmcon_nil",0))) { // gpt
      let jsxtnm50 = jsxtnm49
      jsxtnm52 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(51);I0Pdap1(I0Pcon(strmcon_cons(13)));$list()))
    if (XATS000_ctgeq(jsxtnm49, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm51 = jsxtnm49
      jsxtnm52 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm52
  return jsxtnm52
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4364(line=251,offs=1)--4441(line=256,offs=32)))
// LCSRCsome1(precats.dats)@(4372(line=252,offs=1)--4441(line=256,offs=32))
// I1FUNDCL
// XATS2JS_strmcon_consq_4375
  // FJARGdarg($list(I1BNDcons(I1TNM(53);I0Pvar(xs(45));$list(@(xs(45),I1Vtnm(I1TNM(53)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_consq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4442(line=257,offs=1)--4543(line=261,offs=51)))
let XATS2JS_strmcon_consq = function (arg1) { // impl
  let jsxtnm54 = arg1
  // I1CMP:start
  let jsxtnm57 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(55);I0Pdapp(I0Pcon(strmcon_nil(12));$list());$list()))
    if (XATS000_ctgeq(jsxtnm54, XATSCTAG("strmcon_nil",0))) { // gpt
      let jsxtnm55 = jsxtnm54
      jsxtnm57 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(56);I0Pdap1(I0Pcon(strmcon_cons(13)));$list()))
    if (XATS000_ctgeq(jsxtnm54, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm56 = jsxtnm54
      jsxtnm57 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm57
  return jsxtnm57
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4570(line=265,offs=1)--4649(line=270,offs=31)))
// LCSRCsome1(precats.dats)@(4578(line=266,offs=1)--4649(line=270,offs=31))
// I1FUNDCL
// XATS2JS_strmcon_head$raw_4581
  // FJARGdarg($list(I1BNDcons(I1TNM(58);I0Pvar(xs(48));$list(@(xs(48),I1Vtnm(I1TNM(58)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4650(line=271,offs=1)--4733(line=274,offs=42)))
let XATS2JS_strmcon_head$raw = function (arg1) { // impl
  let jsxtnm59 = arg1
  // I1CMP:start
  let jsxtnm61 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(60);I0Pdapp(I0Pcon(strmcon_cons(13));$list(I0Pvar(x1(50)),I0Pvar(xs(51))));$list(@(x1(50),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(60));0)),@(xs(51),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(60));1)))))
    if (XATS000_ctgeq(jsxtnm59, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm60 = jsxtnm59
      jsxtnm61 = XATSP1CN("strmcon_cons", jsxtnm60[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm61
  return jsxtnm61
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4737(line=276,offs=1)--4820(line=281,offs=35)))
// LCSRCsome1(precats.dats)@(4745(line=277,offs=1)--4820(line=281,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_tail$raw_4748
  // FJARGdarg($list(I1BNDcons(I1TNM(62);I0Pvar(xs(53));$list(@(xs(53),I1Vtnm(I1TNM(62)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_tail$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4821(line=282,offs=1)--4904(line=285,offs=42)))
let XATS2JS_strmcon_tail$raw = function (arg1) { // impl
  let jsxtnm63 = arg1
  // I1CMP:start
  let jsxtnm65 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(64);I0Pdapp(I0Pcon(strmcon_cons(13));$list(I0Pvar(x1(55)),I0Pvar(xs(56))));$list(@(x1(55),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(64));0)),@(xs(56),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(64));1)))))
    if (XATS000_ctgeq(jsxtnm63, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm64 = jsxtnm63
      jsxtnm65 = XATSP1CN("strmcon_cons", jsxtnm64[1+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm65
  return jsxtnm65
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4931(line=289,offs=1)--5032(line=297,offs=31)))
// LCSRCsome1(precats.dats)@(4939(line=290,offs=1)--5032(line=297,offs=31))
// I1FUNDCL
// XATS2JS_strxcon_head$raw_4964
  // FJARGdarg($list(I1BNDcons(I1TNM(66);I0Pvar(xs(58));$list(@(xs(58),I1Vtnm(I1TNM(66)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(5033(line=298,offs=1)--5116(line=301,offs=42)))
let XATS2JS_strxcon_head$raw = function (arg1) { // impl
  let jsxtnm67 = arg1
  // I1CMP:start
  let jsxtnm69 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(68);I0Pdapp(I0Pcon(strxcon_cons(14));$list(I0Pvar(x1(60)),I0Pvar(xs(61))));$list(@(x1(60),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(68));0)),@(xs(61),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(68));1)))))
    if (XATS000_ctgeq(jsxtnm67, XATSCTAG("strxcon_cons",0))) { // gpt
      let jsxtnm68 = jsxtnm67
      jsxtnm69 = XATSP1CN("strxcon_cons", jsxtnm68[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm69
  return jsxtnm69
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(5120(line=303,offs=1)--5225(line=311,offs=35)))
// LCSRCsome1(precats.dats)@(5128(line=304,offs=1)--5225(line=311,offs=35))
// I1FUNDCL
// XATS2JS_strxcon_tail$raw_5153
  // FJARGdarg($list(I1BNDcons(I1TNM(70);I0Pvar(xs(63));$list(@(xs(63),I1Vtnm(I1TNM(70)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_tail$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(5226(line=312,offs=1)--5309(line=315,offs=42)))
let XATS2JS_strxcon_tail$raw = function (arg1) { // impl
  let jsxtnm71 = arg1
  // I1CMP:start
  let jsxtnm73 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(72);I0Pdapp(I0Pcon(strxcon_cons(14));$list(I0Pvar(x1(65)),I0Pvar(xs(66))));$list(@(x1(65),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(72));0)),@(xs(66),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(72));1)))))
    if (XATS000_ctgeq(jsxtnm71, XATSCTAG("strxcon_cons",0))) { // gpt
      let jsxtnm72 = jsxtnm71
      jsxtnm73 = XATSP1CN("strxcon_cons", jsxtnm72[1+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm73
  return jsxtnm73
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(5767(line=352,offs=1)--5845(line=357,offs=32)))
// LCSRCsome1(precats.dats)@(5775(line=353,offs=1)--5845(line=357,offs=32))
// I1FUNDCL
// XATS2JS_optn_vt_nilq1_5778
  // FJARGdarg($list(I1BNDcons(I1TNM(74);I0Pvar(xs(68));$list(@(xs(68),I1Vtnm(I1TNM(74)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_nilq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(5846(line=358,offs=1)--5942(line=362,offs=46)))
let XATS2JS_optn_vt_nilq1 = function (arg1) { // impl
  let jsxtnm75 = arg1
  // I1CMP:start
  let jsxtnm78 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(76);I0Pdapp(I0Pcon(optn_vt_nil(6));$list());$list()))
    if (XATS000_ctgeq(jsxtnm75, XATSCTAG("optn_vt_nil",0))) { // gpt
      let jsxtnm76 = jsxtnm75
      jsxtnm78 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(77);I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(70))));$list(@(x0(70),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(77));0)))))
    if (XATS000_ctgeq(jsxtnm75, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm77 = jsxtnm75
      jsxtnm78 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm78
  return jsxtnm78
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(5946(line=364,offs=1)--6025(line=369,offs=32)))
// LCSRCsome1(precats.dats)@(5954(line=365,offs=1)--6025(line=369,offs=32))
// I1FUNDCL
// XATS2JS_optn_vt_consq1_5957
  // FJARGdarg($list(I1BNDcons(I1TNM(79);I0Pvar(xs(72));$list(@(xs(72),I1Vtnm(I1TNM(79)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_consq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6026(line=370,offs=1)--6125(line=374,offs=48)))
let XATS2JS_optn_vt_consq1 = function (arg1) { // impl
  let jsxtnm80 = arg1
  // I1CMP:start
  let jsxtnm83 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(81);I0Pdapp(I0Pcon(optn_vt_nil(6));$list());$list()))
    if (XATS000_ctgeq(jsxtnm80, XATSCTAG("optn_vt_nil",0))) { // gpt
      let jsxtnm81 = jsxtnm80
      jsxtnm83 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(82);I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(74))));$list(@(x0(74),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(82));0)))))
    if (XATS000_ctgeq(jsxtnm80, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm82 = jsxtnm80
      jsxtnm83 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm83
  return jsxtnm83
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(6152(line=378,offs=1)--6232(line=383,offs=31)))
// LCSRCsome1(precats.dats)@(6160(line=379,offs=1)--6232(line=383,offs=31))
// I1FUNDCL
// XATS2JS_optn_vt_head$raw0_6163
  // FJARGdarg($list(I1BNDcons(I1TNM(84);I0Pvar(xs(76));$list(@(xs(76),I1Vtnm(I1TNM(84)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_head$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6233(line=384,offs=1)--6314(line=387,offs=39)))
let XATS2JS_optn_vt_head$raw0 = function (arg1) { // impl
  let jsxtnm85 = arg1
  // I1CMP:start
  let jsxtnm87 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(86);I0Pfree(I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(78)))));$list(@(x0(78),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(86));0)))))
    if (XATS000_ctgeq(jsxtnm85, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm86 = jsxtnm85
      jsxtnm87 = XATSP1CN("optn_vt_cons", jsxtnm86[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm87
  return jsxtnm87
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(6318(line=389,offs=1)--6400(line=394,offs=31)))
// LCSRCsome1(precats.dats)@(6326(line=390,offs=1)--6400(line=394,offs=31))
// I1FUNDCL
// XATS2JS_optn_vt_uncons$raw0_6329
  // FJARGdarg($list(I1BNDcons(I1TNM(88);I0Pvar(xs(80));$list(@(xs(80),I1Vtnm(I1TNM(88)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_uncons$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6401(line=395,offs=1)--6484(line=398,offs=39)))
let XATS2JS_optn_vt_uncons$raw0 = function (arg1) { // impl
  let jsxtnm89 = arg1
  // I1CMP:start
  let jsxtnm91 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(90);I0Pfree(I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(82)))));$list(@(x0(82),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(90));0)))))
    if (XATS000_ctgeq(jsxtnm89, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm90 = jsxtnm89
      jsxtnm91 = XATSP1CN("optn_vt_cons", jsxtnm90[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm91
  return jsxtnm91
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(6903(line=431,offs=1)--6981(line=436,offs=32)))
// LCSRCsome1(precats.dats)@(6911(line=432,offs=1)--6981(line=436,offs=32))
// I1FUNDCL
// XATS2JS_list_vt_nilq1_6914
  // FJARGdarg($list(I1BNDcons(I1TNM(92);I0Pvar(xs(84));$list(@(xs(84),I1Vtnm(I1TNM(92)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_nilq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6982(line=437,offs=1)--7078(line=441,offs=46)))
let XATS2JS_list_vt_nilq1 = function (arg1) { // impl
  let jsxtnm93 = arg1
  // I1CMP:start
  let jsxtnm96 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(94);I0Pdapp(I0Pcon(list_vt_nil(10));$list());$list()))
    if (XATS000_ctgeq(jsxtnm93, XATSCTAG("list_vt_nil",0))) { // gpt
      let jsxtnm94 = jsxtnm93
      jsxtnm96 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(95);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
    if (XATS000_ctgeq(jsxtnm93, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm95 = jsxtnm93
      jsxtnm96 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm96
  return jsxtnm96
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7082(line=443,offs=1)--7161(line=448,offs=32)))
// LCSRCsome1(precats.dats)@(7090(line=444,offs=1)--7161(line=448,offs=32))
// I1FUNDCL
// XATS2JS_list_vt_consq1_7093
  // FJARGdarg($list(I1BNDcons(I1TNM(97);I0Pvar(xs(87));$list(@(xs(87),I1Vtnm(I1TNM(97)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_consq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7162(line=449,offs=1)--7261(line=453,offs=48)))
let XATS2JS_list_vt_consq1 = function (arg1) { // impl
  let jsxtnm98 = arg1
  // I1CMP:start
  let jsxtnm101 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(99);I0Pdapp(I0Pcon(list_vt_nil(10));$list());$list()))
    if (XATS000_ctgeq(jsxtnm98, XATSCTAG("list_vt_nil",0))) { // gpt
      let jsxtnm99 = jsxtnm98
      jsxtnm101 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(100);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
    if (XATS000_ctgeq(jsxtnm98, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm100 = jsxtnm98
      jsxtnm101 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm101
  return jsxtnm101
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7288(line=457,offs=1)--7368(line=462,offs=31)))
// LCSRCsome1(precats.dats)@(7296(line=458,offs=1)--7368(line=462,offs=31))
// I1FUNDCL
// XATS2JS_list_vt_head$raw1_7299
  // FJARGdarg($list(I1BNDcons(I1TNM(102);I0Pvar(xs(90));$list(@(xs(90),I1Vtnm(I1TNM(102)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_head$raw1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7369(line=463,offs=1)--7509(line=472,offs=42)))
let XATS2JS_list_vt_head$raw1 = function (arg1) { // impl
  let jsxtnm103 = arg1
  // I1CMP:start
  let jsxtnm109 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(104);I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(x1(92)),I0Pvar(xs(93))));$list(@(x1(92),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(104));0)),@(xs(93),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(104));1)))))
    if (XATS000_ctgeq(jsxtnm103, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm104 = jsxtnm103
      let jsxtnm108 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(7459(line=471,offs=1)--7484(line=472,offs=17)))
        // I1VALDCL
        let jsxtnm106
        let jsxtnm105 = XATSCAST("datacopy_1720", [XATSP1CN("list_vt_cons", jsxtnm104[0+1])])
        jsxtnm106 = jsxtnm105
        XATS000_patck(true)
        let jsxtnm107 = XATSCAST("enlinear_1756", [jsxtnm106])
        jsxtnm108 = jsxtnm107
      } // endlet
      jsxtnm109 = jsxtnm108
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm109
  return jsxtnm109
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7513(line=474,offs=1)--7601(line=479,offs=38)))
// LCSRCsome1(precats.dats)@(7521(line=475,offs=1)--7601(line=479,offs=38))
// I1FUNDCL
// XATS2JS_list_vt_tail$raw0_7524
  // FJARGdarg($list(I1BNDcons(I1TNM(110);I0Pvar(xs(96));$list(@(xs(96),I1Vtnm(I1TNM(110)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_tail$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7602(line=480,offs=1)--7732(line=487,offs=43)))
let XATS2JS_list_vt_tail$raw0 = function (arg1) { // impl
  let jsxtnm111 = arg1
  // I1CMP:start
  let jsxtnm116 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(112);I0Pfree(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(x1(98)),I0Pvar(xs(99)))));$list(@(x1(98),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(112));0)),@(xs(99),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(112));1)))))
    if (XATS000_ctgeq(jsxtnm111, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm112 = jsxtnm111
      let jsxtnm115 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(7696(line=487,offs=7)--7721(line=487,offs=32)))
        // I1VALDCL
        let jsxtnm114
        let jsxtnm113 = XATSCAST("delinear_1667", [XATSP1CN("list_vt_cons", jsxtnm112[0+1])])
        jsxtnm114 = jsxtnm113
        XATS000_patck(true)
        jsxtnm115 = XATSP1CN("list_vt_cons", jsxtnm112[1+1])
      } // endlet
      jsxtnm116 = jsxtnm115
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm116
  return jsxtnm116
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7779(line=492,offs=1)--7855(line=497,offs=31)))
// LCSRCsome1(precats.dats)@(7787(line=493,offs=1)--7855(line=497,offs=31))
// I1FUNDCL
// XATS2JS_lazy_vt_eval_7790
  // FJARGdarg($list(I1BNDcons(I1TNM(117);I0Pvar(lz(102));$list(@(lz(102),I1Vtnm(I1TNM(117)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_vt_eval);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7856(line=498,offs=1)--7901(line=499,offs=37)))
let XATS2JS_lazy_vt_eval = function (arg1) { // impl
  let jsxtnm118 = arg1
  // I1CMP:start
  let jsxtnm119 = XATS000_dl1az(jsxtnm118)
  // I1CMP:return:jsxtnm119
  return jsxtnm119
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7905(line=501,offs=1)--7982(line=506,offs=32)))
// LCSRCsome1(precats.dats)@(7913(line=502,offs=1)--7982(line=506,offs=32))
// I1FUNDCL
// XATS2JS_lazy_vt_free_7916
  // FJARGdarg($list(I1BNDcons(I1TNM(120);I0Pvar(lz(105));$list(@(lz(105),I1Vtnm(I1TNM(120)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_vt_free);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7983(line=507,offs=1)--8028(line=508,offs=37)))
let XATS2JS_lazy_vt_free = function (arg1) { // impl
  let jsxtnm121 = arg1
  // I1CMP:start
  XATS000_free(jsxtnm121)
  // I1CMP:return:[]
  return []
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8055(line=512,offs=1)--8139(line=517,offs=35)))
// LCSRCsome1(precats.dats)@(8063(line=513,offs=1)--8139(line=517,offs=35))
// I1FUNDCL
// XATS2JS_lazy_vt_make_f0un_8066
  // FJARGdarg($list(I1BNDcons(I1TNM(122);I0Pvar(f0(108));$list(@(f0(108),I1Vtnm(I1TNM(122)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_vt_make_f0un);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8140(line=518,offs=1)--8193(line=519,offs=45)))
let XATS2JS_lazy_vt_make_f0un = function (arg1) { // impl
  let jsxtnm123 = arg1
  // I1CMP:start
  let jsxtnm125 = XATS000_l1azy(function (tlaz) { // l1azy
    // I1CMP:start
    let jsxtnm124 = XATSDAPP(jsxtnm123())
    // I1CMP:return:jsxtnm124
    return jsxtnm124
  }) // endfun(l1azy)
  // I1CMP:return:jsxtnm125
  return jsxtnm125
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8240(line=524,offs=1)--8316(line=528,offs=35)))
// LCSRCsome1(precats.dats)@(8248(line=525,offs=1)--8316(line=528,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_vt_nil_8251
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_nil);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8317(line=529,offs=1)--8369(line=530,offs=44)))
let XATS2JS_strmcon_vt_nil = function () { // impl
  // I1CMP:start
  let jsxtnm126 = XATSCAPP("strmcon_vt_nil", [0])
  // I1CMP:return:jsxtnm126
  return jsxtnm126
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8373(line=532,offs=1)--8472(line=537,offs=44)))
// LCSRCsome1(precats.dats)@(8381(line=533,offs=1)--8472(line=537,offs=44))
// I1FUNDCL
// XATS2JS_strmcon_vt_cons_8384
  // FJARGdarg($list(I1BNDcons(I1TNM(127);I0Pvar(x1(112));$list(@(x1(112),I1Vtnm(I1TNM(127))))),I1BNDcons(I1TNM(128);I0Pvar(xs(113));$list(@(xs(113),I1Vtnm(I1TNM(128)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8473(line=538,offs=1)--8537(line=539,offs=56)))
let XATS2JS_strmcon_vt_cons = function (arg1, arg2) { // impl
  let jsxtnm129 = arg1
  let jsxtnm130 = arg2
  // I1CMP:start
  let jsxtnm131 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm129, jsxtnm130])
  // I1CMP:return:jsxtnm131
  return jsxtnm131
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8541(line=541,offs=1)--8640(line=546,offs=44)))
// LCSRCsome1(precats.dats)@(8549(line=542,offs=1)--8640(line=546,offs=44))
// I1FUNDCL
// XATS2JS_strxcon_vt_cons_8552
  // FJARGdarg($list(I1BNDcons(I1TNM(132);I0Pvar(x1(117));$list(@(x1(117),I1Vtnm(I1TNM(132))))),I1BNDcons(I1TNM(133);I0Pvar(xs(118));$list(@(xs(118),I1Vtnm(I1TNM(133)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_vt_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8641(line=547,offs=1)--8705(line=548,offs=56)))
let XATS2JS_strxcon_vt_cons = function (arg1, arg2) { // impl
  let jsxtnm134 = arg1
  let jsxtnm135 = arg2
  // I1CMP:start
  let jsxtnm136 = XATSCAPP("strxcon_vt_cons", [0, jsxtnm134, jsxtnm135])
  // I1CMP:return:jsxtnm136
  return jsxtnm136
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8732(line=552,offs=1)--8816(line=557,offs=35)))
// LCSRCsome1(precats.dats)@(8740(line=553,offs=1)--8816(line=557,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_vt_nilq1_8743
  // FJARGdarg($list(I1BNDcons(I1TNM(137);I0Pvar(xs(122));$list(@(xs(122),I1Vtnm(I1TNM(137)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_nilq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8817(line=558,offs=1)--8921(line=562,offs=51)))
let XATS2JS_strmcon_vt_nilq1 = function (arg1) { // impl
  let jsxtnm138 = arg1
  // I1CMP:start
  let jsxtnm141 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(139);I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list());$list()))
    if (XATS000_ctgeq(jsxtnm138, XATSCTAG("strmcon_vt_nil",0))) { // gpt
      let jsxtnm139 = jsxtnm138
      jsxtnm141 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(140);I0Pdap1(I0Pcon(strmcon_vt_cons(16)));$list()))
    if (XATS000_ctgeq(jsxtnm138, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm140 = jsxtnm138
      jsxtnm141 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm141
  return jsxtnm141
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8925(line=564,offs=1)--9010(line=569,offs=35)))
// LCSRCsome1(precats.dats)@(8933(line=565,offs=1)--9010(line=569,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_vt_consq1_8936
  // FJARGdarg($list(I1BNDcons(I1TNM(142);I0Pvar(xs(125));$list(@(xs(125),I1Vtnm(I1TNM(142)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_consq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9011(line=570,offs=1)--9118(line=574,offs=53)))
let XATS2JS_strmcon_vt_consq1 = function (arg1) { // impl
  let jsxtnm143 = arg1
  // I1CMP:start
  let jsxtnm146 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(144);I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list());$list()))
    if (XATS000_ctgeq(jsxtnm143, XATSCTAG("strmcon_vt_nil",0))) { // gpt
      let jsxtnm144 = jsxtnm143
      jsxtnm146 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(145);I0Pdap1(I0Pcon(strmcon_vt_cons(16)));$list()))
    if (XATS000_ctgeq(jsxtnm143, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm145 = jsxtnm143
      jsxtnm146 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm146
  return jsxtnm146
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9145(line=578,offs=1)--9232(line=583,offs=34)))
// LCSRCsome1(precats.dats)@(9153(line=579,offs=1)--9232(line=583,offs=34))
// I1FUNDCL
// XATS2JS_strmcon_vt_head$raw1_9156
  // FJARGdarg($list(I1BNDcons(I1TNM(147);I0Pvar(xs(128));$list(@(xs(128),I1Vtnm(I1TNM(147)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_head$raw1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9233(line=584,offs=1)--9382(line=593,offs=42)))
let XATS2JS_strmcon_vt_head$raw1 = function (arg1) { // impl
  let jsxtnm148 = arg1
  // I1CMP:start
  let jsxtnm154 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(149);I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(130)),I0Pvar(xs(131))));$list(@(x1(130),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(149));0)),@(xs(131),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(149));1)))))
    if (XATS000_ctgeq(jsxtnm148, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm149 = jsxtnm148
      let jsxtnm153 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(9332(line=592,offs=1)--9357(line=593,offs=17)))
        // I1VALDCL
        let jsxtnm151
        let jsxtnm150 = XATSCAST("datacopy_1720", [XATSP1CN("strmcon_vt_cons", jsxtnm149[0+1])])
        jsxtnm151 = jsxtnm150
        XATS000_patck(true)
        let jsxtnm152 = XATSCAST("enlinear_1756", [jsxtnm151])
        jsxtnm153 = jsxtnm152
      } // endlet
      jsxtnm154 = jsxtnm153
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm154
  return jsxtnm154
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9386(line=595,offs=1)--9480(line=600,offs=41)))
// LCSRCsome1(precats.dats)@(9394(line=596,offs=1)--9480(line=600,offs=41))
// I1FUNDCL
// XATS2JS_strmcon_vt_tail$raw0_9397
  // FJARGdarg($list(I1BNDcons(I1TNM(155);I0Pvar(xs(134));$list(@(xs(134),I1Vtnm(I1TNM(155)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_tail$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9481(line=601,offs=1)--9620(line=608,offs=43)))
let XATS2JS_strmcon_vt_tail$raw0 = function (arg1) { // impl
  let jsxtnm156 = arg1
  // I1CMP:start
  let jsxtnm161 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(157);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(136)),I0Pvar(xs(137)))));$list(@(x1(136),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(157));0)),@(xs(137),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(157));1)))))
    if (XATS000_ctgeq(jsxtnm156, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm157 = jsxtnm156
      let jsxtnm160 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(9584(line=608,offs=7)--9609(line=608,offs=32)))
        // I1VALDCL
        let jsxtnm159
        let jsxtnm158 = XATSCAST("delinear_1667", [XATSP1CN("strmcon_vt_cons", jsxtnm157[0+1])])
        jsxtnm159 = jsxtnm158
        XATS000_patck(true)
        jsxtnm160 = XATSP1CN("strmcon_vt_cons", jsxtnm157[1+1])
      } // endlet
      jsxtnm161 = jsxtnm160
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm161
  return jsxtnm161
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9669(line=615,offs=1)--9756(line=620,offs=34)))
// LCSRCsome1(precats.dats)@(9677(line=616,offs=1)--9756(line=620,offs=34))
// I1FUNDCL
// XATS2JS_strxcon_vt_head$raw1_9680
  // FJARGdarg($list(I1BNDcons(I1TNM(162);I0Pvar(xs(140));$list(@(xs(140),I1Vtnm(I1TNM(162)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_vt_head$raw1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9757(line=621,offs=1)--9906(line=630,offs=42)))
let XATS2JS_strxcon_vt_head$raw1 = function (arg1) { // impl
  let jsxtnm163 = arg1
  // I1CMP:start
  let jsxtnm169 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(164);I0Pdapp(I0Pcon(strxcon_vt_cons(17));$list(I0Pvar(x1(142)),I0Pvar(xs(143))));$list(@(x1(142),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(164));0)),@(xs(143),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(164));1)))))
    if (XATS000_ctgeq(jsxtnm163, XATSCTAG("strxcon_vt_cons",0))) { // gpt
      let jsxtnm164 = jsxtnm163
      let jsxtnm168 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(9856(line=629,offs=1)--9881(line=630,offs=17)))
        // I1VALDCL
        let jsxtnm166
        let jsxtnm165 = XATSCAST("datacopy_1720", [XATSP1CN("strxcon_vt_cons", jsxtnm164[0+1])])
        jsxtnm166 = jsxtnm165
        XATS000_patck(true)
        let jsxtnm167 = XATSCAST("enlinear_1756", [jsxtnm166])
        jsxtnm168 = jsxtnm167
      } // endlet
      jsxtnm169 = jsxtnm168
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm169
  return jsxtnm169
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9932(line=635,offs=1)--10026(line=640,offs=41)))
// LCSRCsome1(precats.dats)@(9940(line=636,offs=1)--10026(line=640,offs=41))
// I1FUNDCL
// XATS2JS_strxcon_vt_tail$raw0_9943
  // FJARGdarg($list(I1BNDcons(I1TNM(170);I0Pvar(xs(146));$list(@(xs(146),I1Vtnm(I1TNM(170)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_vt_tail$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(10027(line=641,offs=1)--10166(line=648,offs=43)))
let XATS2JS_strxcon_vt_tail$raw0 = function (arg1) { // impl
  let jsxtnm171 = arg1
  // I1CMP:start
  let jsxtnm176 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(172);I0Pfree(I0Pdapp(I0Pcon(strxcon_vt_cons(17));$list(I0Pvar(x1(148)),I0Pvar(xs(149)))));$list(@(x1(148),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(172));0)),@(xs(149),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(172));1)))))
    if (XATS000_ctgeq(jsxtnm171, XATSCTAG("strxcon_vt_cons",0))) { // gpt
      let jsxtnm172 = jsxtnm171
      let jsxtnm175 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(10130(line=648,offs=7)--10155(line=648,offs=32)))
        // I1VALDCL
        let jsxtnm174
        let jsxtnm173 = XATSCAST("delinear_1667", [XATSP1CN("strxcon_vt_cons", jsxtnm172[0+1])])
        jsxtnm174 = jsxtnm173
        XATS000_patck(true)
        jsxtnm175 = XATSP1CN("strxcon_vt_cons", jsxtnm172[1+1])
      } // endlet
      jsxtnm176 = jsxtnm175
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm176
  return jsxtnm176
} // endfun(impl)
// LCSRCsome1(precats.dats)@(10422(line=656,offs=1)--10422(line=656,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(precats.dats)@(10422(line=656,offs=1)--10422(line=656,offs=1));D3Cnone0()))
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// Fri Jan 16 11:47:37 PM EST 2026
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
the beg of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/srcgen2_prelude.js]
*/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Thu 05 Sep 2024 11:21:07 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_console_log
  (x0)
{
  return console.log(x0) // HX: void
}
//
////////////////////////////////////////////////////////////////////////.
//
const
XATS2JS_the_print_store = [] // HX: for prints?
//
const
XATS2JS_the_prout_store = [] // HX: for general output
//
const
XATS2JS_the_prerr_store = [] // HX: for reporting errors
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_the_print_store_clear
  ( /*void*/ )
{
  XATS2JS_the_print_store.length = 0; return
}
//
function
XATS2JS_the_print_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_print_store.join("")
  XATS2JS_the_print_store.length = 0; return cs
}
//
function
XATS2JS_the_prout_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_prout_store.join("")
  XATS2JS_the_prout_store.length = 0; return cs
}
//
function
XATS2JS_the_prerr_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_prerr_store.join("")
  XATS2JS_the_prerr_store.length = 0; return cs
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_xtop000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 09 Sep 2024 09:31:27 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_g_tostr
  ( obj )
{
  return String(obj) }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_sint$parse$fwork
  (rep0, work)
{
  let i0 = parseInt(rep0)
  if (!isNaN(i0)) { work(i0) }; return
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_dflt$parse$fwork
  (rep0, work)
{
  let f0 = parseFloat(rep0)
  if (!isNaN(f0)) { work(f0) }; return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gbas000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Sep 20 09:05:02 AM EDT 2024
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_bool_assert$errmsg
  (cond, emsg)
{
  if (!cond) {
    throw new Error("XATS2JS_bool_assert$errmsg: emsg = " + emsg)
  } ; return // HX: void is returned!
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gdbg000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 04:27:52 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_neg
  ( i1 )
{
  return ( -i1 ) // HX: neg
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_lt$sint
  (i1, i2)
{
  return (i1 < i2) // HX: lt
}
function
XATS2JS_sint_gt$sint
  (i1, i2)
{
  return (i1 > i2) // HX: gt
}
//
function
XATS2JS_sint_lte$sint
  (i1, i2)
{
  return (i1 <= i2) // HX: lte
}
function
XATS2JS_sint_gte$sint
  (i1, i2)
{
  return (i1 >= i2) // HX: gte
}
//
function
XATS2JS_sint_eq$sint
  (i1, i2)
{
  return (i1 === i2) // HX: equal
}
function
XATS2JS_sint_neq$sint
  (i1, i2)
{
  return (i1 !== i2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_add$sint
  (i1, i2)
{
  return (i1 + i2) // HX: add
}
//
function
XATS2JS_sint_sub$sint
  (i1, i2)
{
  return (i1 - i2) // HX: sub
}
//
function
XATS2JS_sint_mul$sint
  (i1, i2)
{
  return (i1 * i2) // HX: mul
}
//
function
XATS2JS_sint_div$sint
  (i1, i2)
{
  return Math.trunc(i1 / i2)
}
//
function
XATS2JS_sint_mod$sint
  (i1, i2)
{
  return (i1 % i2) // HX: mod
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_print
  ( i0 )
{
  let cs = i0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX-2025-09-27:
// for unsigned ints
// Sat Sep 27 12:38:38 PM EDT 2025
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_uint_print
  ( u0 )
{
  let cs = u0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_to$uint
  ( i0 )
{
  if (i0>=0)
  {
    return i0 // i0>=0
  } else {
    throw new Error("XATS2JS_sint_to$uint: i0 = " + i0.toString())
  } // end of [if(i0>=0)]
}
function
XATS2JS_uint_to$sint
  ( u0 )
{
  if (u0>=0)
  {
    return u0 // always?
  } else {
    throw new Error("XATS2JS_uint_to$sint: u0 = " + u0.toString())
  } // end of [if(u0>=0)]
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gint000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 05:07:38 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_bool_lt
  (b1, b2)
{
  return (b1 < b2) // HX: lt
}
function
XATS2JS_bool_gt
  (b1, b2)
{
  return (b1 > b2) // HX: gt
}
//
function
XATS2JS_bool_lte
  (b1, b2)
{
  return (b1 <= b2) // HX: lte
}
function
XATS2JS_bool_gte
  (b1, b2)
{
  return (b1 >= b2) // HX: gte
}
//
function
XATS2JS_bool_eq
  (b1, b2)
{
  return (b1 === b2) // HX: equal
}
function
XATS2JS_bool_neq
  (b1, b2)
{
  return (b1 !== b2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_bool000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 05:08:01 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_lt
  (c1, c2)
{
  return (c1 < c2) // HX: lt
}
function
XATS2JS_char_gt
  (c1, c2)
{
  return (c1 > c2) // HX: gt
}
//
function
XATS2JS_char_lte
  (c1, c2)
{
  return (c1 <= c2) // HX: lte
}
function
XATS2JS_char_gte
  (c1, c2)
{
  return (c1 >= c2) // HX: gte
}
//
function
XATS2JS_char_eq
  (c1, c2)
{
  return (c1 === c2) // HX: equal
}
function
XATS2JS_char_neq
  (c1, c2)
{
  return (c1 !== c2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_add$sint
  (c1, i2)
{
  let c2 = c1+i2
  return (c2%256) // HX: char=int8
}
//
function
XATS2JS_char_sub$char
  (c1, c2)
{
  return (c1 - c2) // HX: char=int8
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_print
  ( c0 )
{
  let cs = String.fromCharCode(c0)
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2025-01-10:
Taken from gavinz
Sun Jan 19 01:11:19 AM EST 2025
*/
function
XATS2JS_char_make_sint( i0 ) { return i0 }
//
/*
HX-2026-01-15:
Thu Jan 15 06:47:03 PM EST 2026
*/
function
XATS2JS_sint_make_char( ch ) { return ch }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_char000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 09 Sep 2024 06:14:11 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_neg
  ( df )
{
  return ( -df ) //HX:neg
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_abs
  ( df )
{
  if (df >= 0.0)
    return df
  else
    return (-df) //HX:abs
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_sqrt
  ( df )
{
  return Math.sqrt(  df  )
}
//
function
XATS2JS_dflt_cbrt
  ( df )
{
  return Math.cbrt(  df  )
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_lt$dflt
  (f1, f2)
{
  return (f1 < f2) // HX: lt
}
function
XATS2JS_dflt_gt$dflt
  (f1, f2)
{
  return (f1 > f2) // HX: gt
}
//
function
XATS2JS_dflt_lte$dflt
  (f1, f2)
{
  return (f1 <= f2) // HX: lte
}
function
XATS2JS_dflt_gte$dflt
  (f1, f2)
{
  return (f1 >= f2) // HX: gte
}
//
function
XATS2JS_dflt_eq$dflt
  (f1, f2)
{
  return (f1 === f2) // HX: eq
}
function
XATS2JS_dflt_neq$dflt
  (f1, f2)
{
  return (f1 !== f2) // HX: neq
}
//
/*
HX-2025-12-13:
Sat Dec 13 05:19:31 PM EST 2025
*/
//
function
XATS2JS_dflt_cmp$dflt
  (f1, f2)
{
  if (f1 < f2)
    return (-1) // lt
  else // f1 >= f2
    return (f1 > f2 ? 1 : 0)
  // HX: end-of-if( f1 < f2 )
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_add$dflt
  (f1, f2)
{
  return (f1 + f2) // HX: add
}
//
function
XATS2JS_dflt_sub$dflt
  (f1, f2)
{
  return (f1 - f2) // HX: sub
}
//
//
function
XATS2JS_dflt_mul$dflt
  (f1, f2)
{
  return (f1 * f2) // HX: mul
}
//
function
XATS2JS_dflt_div$dflt
  (f1, f2)
{
  return (f1 / f2) // HX: div
}
//
function
XATS2JS_dflt_mod$dflt
  (f1, f2)
{
  return (f1 % f2) // HX: mod
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_ceil
  ( df )
{
  return Math.ceil(df) // (1.2) = 2
}
function
XATS2JS_dflt_floor
  ( df )
{
  return Math.floor(df) // (1.2) = 1
}
function
XATS2JS_dflt_round
  ( df )
{
  // HX: (1.2) = 1 // (1.5) = 2
  return Math.round(df) // (-1.5) = 1
}
function
XATS2JS_dflt_trunc
  ( df )
{
  // HX: (1.2) = 1 // (1.9) = 1
  return Math.trunc(df) // (-1.2) = -1
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_print
  ( f0 )
{
  let cs = f0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gflt000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri 16 Aug 2024 05:26:45 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_cmp
  (x1, x2)
{
  var df
  var i0 = 0
  var n1 = x1.length;
  var n2 = x2.length;
  var n0 =
  (n1 <= n2) ? n1 : n2;
  while (i0 < n0) {
    df =
    x1.charCodeAt(i0)
    -
    x2.charCodeAt(i0)
    if (df !== 0) return df;
    i0 = (  i0 + 1  )
  }
  return (      n1 - n2      );
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_length
  (cs)
{
  return cs.length // HX: field
}
function
XATS000_strn_length
  (cs)
{
  return cs.length // HX: field
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_get$at$raw
  (cs, i0)
{
  return cs.charCodeAt(i0) // HX: ascii
}
function
XATS000_strn_get$at$raw
  (cs, i0)
{
  return XATS2JS_strn_get$at$raw(cs, i0)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_fmake_fwork
  (fwork)
{
  var cs = []
  fwork((ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_fmake_fwork
  (fwork)
{
  return XATS2JS_strn_fmake_fwork(fwork)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS000_strn_print
  ( cs )
{
  return XATS2JS_strn_print(cs)
}
function
XATS2JS_strn_print
  ( cs )
{
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2025-04-26:
Sat Apr 26 08:48:02 PM EDT 2025
*/
//
function
XATS2JS_strn_fmake_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
function
XATS2JS_strn_fmake1_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_fmake_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_fmake_env$fwork(env, fwork)
}
function
XATS000_strn_fmake1_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_fmake1_env$fwork(env, fwork)
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strn000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Jan  2 03:23:26 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_list_vt_foritm0$f1un
  (xs, work)
{
  let nilq1 =
    XATS2JS_list_vt_nilq1
  while (1) {
    if (nilq1(xs)) {
      break;
    } else {
      let x1 =
        XATS2JS_list_vt_head$raw1(xs)
      work(x1)
      xs = XATS2JS_list_vt_tail$raw0(xs)
    }
  }
  return // XATS2JS_list_vt_foritm0$f1un
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_list_vt_forall0$f1un
  (xs, test, free)
{
  let nilq1 =
    XATS2JS_list_vt_nilq1
  while (1) {
    if (nilq1(xs)) {
      break;
    } else {
      let x1 =
        XATS2JS_list_vt_head$raw1(xs)
      if (test(x1)) {
        xs = XATS2JS_list_vt_tail$raw0(xs)
      } else {
        xs = XATS2JS_list_vt_tail$raw0(xs)
        XATS2JS_list_vt_foritm0$f1un(xs, free); return false
      }
    }
  }
  return true // XATS2JS_list_vt_forall0$f1un
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_list000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Jan  2 03:23:26 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX: It is yet to be populated!
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_optn000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Jan  2 03:23:26 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strm_vt_forall0$f1un
  (fxs, test)
{
  let nilq1 =
    XATS2JS_strmcon_vt_nilq1
  while (1) {
    let cxs =
      XATS2JS_lazy_vt_eval(fxs)
    if (nilq1(cxs))
    {
      break;
    } else {
      let x01 =
        XATS2JS_strmcon_vt_head$raw1(cxs)
      if (test(x01))
      {
        fxs = XATS2JS_strmcon_vt_tail$raw0(cxs)
      } else {
        fxs = XATS2JS_strmcon_vt_tail$raw0(cxs)
        XATS2JS_lazy_vt_free(fxs); return false
      }
    }
  }
  return true // XATS2JS_strm_vt_forall0$f1un(...)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strm_vt_filter0$f1un
  (fxs, test, free)
{
  return XATS2JS_lazy_vt_make_f0un(
    () => XATS2JS_strmcon_vt_filter0$f1un(XATS2JS_lazy_vt_eval(fxs), test, free)
  )
}
//
function
XATS2JS_strmcon_vt_filter0$f1un
  (cxs, test, free)
{
  let nilq1 =
    XATS2JS_strmcon_vt_nilq1
  while (1) {
    if (nilq1(cxs))
    {
      return XATS2JS_strmcon_vt_nil()
    } else {
      let x01 = XATS2JS_strmcon_vt_head$raw1(cxs)
      let fxs = XATS2JS_strmcon_vt_tail$raw0(cxs)
      if (test(x01)) {
        return XATS2JS_strmcon_vt_cons(x01, XATS2JS_strm_vt_filter0$f1un(fxs, test, free))
      } else {
        free(x01);
        cxs = XATS2JS_lazy_vt_eval(fxs); continue;
      }
    }
  }
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strm000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Wed Jan 14 01:17:42 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strx_vt_forall0$f1un
  (fxs, test)
{
  while (1) {
    let cxs =
      XATS2JS_lazy_vt_eval(fxs)
    let x01 =
      XATS2JS_strxcon_vt_head$raw1(cxs)
    if (test(x01))
    {
      fxs = XATS2JS_strxcon_vt_tail$raw0(cxs)
    } else {
      fxs = XATS2JS_strxcon_vt_tail$raw0(cxs)
      XATS2JS_lazy_vt_free(fxs); return false
    }
  }
  return true // XATS2JS_strx_vt_forall0$f1un(...)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strx_vt_filter0$f1un
  (fxs, test, free)
{
  return XATS2JS_lazy_vt_make_f0un(
    () => XATS2JS_strxcon_vt_filter0$f1un(XATS2JS_lazy_vt_eval(fxs), test, free)
  )
}
//
function
XATS2JS_strxcon_vt_filter0$f1un
  (cxs, test, free)
{
  while (1) {
    let x01 = XATS2JS_strxcon_vt_head$raw1(cxs)
    let fxs = XATS2JS_strxcon_vt_tail$raw0(cxs)
    if (test(x01)) {
      return XATS2JS_strxcon_vt_cons(x01, XATS2JS_strx_vt_filter0$f1un(fxs, test, free))
    } else {
      free(x01);
      cxs = XATS2JS_lazy_vt_eval(fxs); continue;
    }
  }
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strx000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 12 Aug 2024 09:36:59 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a0rf_lget
  ( A0 )
{
  return A0[0]
}
function
XATS2JS_a0rf_lset
  (A0, x1)
{
  A0[0] = x1; return
}
//
function
XATS2JS_a0rf_make_1val
  ( x0 )
{
  return [x0] // HX: singleton
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1rf_lget$at
  (A0, i0)
{
  return A0[i0]
}
function
XATS2JS_a1rf_lset$at
  (A0, i0, x1)
{
  A0[i0] = x1; return
}
//
function
XATS2JS_a1rf_make_ncpy
  (n0, x0)
{
  var i0 = 0
  var A0 = new Array(n0);
  while (i0 < n0) {
    A0[i0] = x0; i0 = i0 + 1
  }
  return A0 // HX: A0=[x0, x0, ..., x0]
}
//
function
XATS2JS_a1rf_make_nfun
  (n0, fopr)
{
  var i0 = 0
  var A0 = new Array(n0);
  while (i0 < n0) {
    A0[i0] = fopr(i0); i0 = i0 + 1
  }
  return A0 // HX: A0 = [fopr(0),...,fopr(n-1)]
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_axrf000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Thu 15 Aug 2024 01:42:20 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_length
  ( A0 )
{
  return A0.length
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_lget$at
  (A0, i0)
{
  return A0[i0]
}
function
XATS2JS_a1sz_lset$at
  (A0, i0, x1)
{
  A0[i0] = x1; return
}
//
////////////////////////////////////////////////////////////////////////.
/*
HX-2024-09-06:
Fri 06 Sep 2024 04:18:38 PM EDT
*/
//
function
XATS2JS_a1sz_make_none
  ( n0 )
{
  var A0 = new Array(n0)
  return A0 // HX: A0 = [?, ..., ?]
}
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2024-08-15:
Thu 15 Aug 2024 01:50:45 PM EDT
*/
//
function
XATS2JS_a1sz_make_ncpy
  (n0, x0)
{
  var i0 = 0
  var A0 = new Array(n0)
  while (i0 < n0) {
    A0[i0] = x0; i0 = i0 + 1
  }
  return A0 // HX: A0 = [x0, ..., x0]
}
//
function
XATS2JS_a1sz_make_nfun
  (n0, fopr)
{
  var i0 = 0
  var A0 = new Array(n0)
  while (i0 < n0) {
    A0[i0] = fopr(i0); i0 = i0 + 1
  }
  return A0 // HX: A0 = [fopr(0),...,fopr(n-1)]
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_fmake_fwork
  (fwork)
{
  var A0 = []
  fwork((x0) => {A0.push(x0);return}); return A0
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_axsz000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// I1Dinclude(LCSRCsome1(spelling.dats)@(134(line=9,offs=1)--185(line=11,offs=33)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1487(line=46,offs=1)--1520(line=47,offs=25))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../SATS/pre2026.sats";24));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/SATS/pre2026.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1521(line=48,offs=1)--1560(line=49,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../SATS/VT/pre2026_vt.sats";30));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1607(line=54,offs=1)--1648(line=55,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/i1range.sats";32));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/SATS/i1range.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1649(line=56,offs=1)--1690(line=57,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/trec000.sats";32));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/SATS/trec000.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1737(line=62,offs=1)--1784(line=63,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/VT/strm000_vt.sats";38));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/SATS/VT/strm000_vt.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1785(line=64,offs=1)--1832(line=65,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/VT/trec000_vt.sats";38));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/SATS/VT/trec000_vt.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(2093(line=73,offs=1)--2093(line=73,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(2093(line=73,offs=1)--2093(line=73,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(spelling.dats)@(229(line=15,offs=1)--270(line=16,offs=33)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(244(line=17,offs=1)--291(line=19,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(292(line=20,offs=1)--339(line=22,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(340(line=23,offs=1)--387(line=25,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(414(line=29,offs=1)--461(line=31,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gdbg000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gdbg000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(488(line=35,offs=1)--541(line=37,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gbas000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(542(line=38,offs=1)--595(line=40,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gbas001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(767(line=51,offs=1)--807(line=51,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gxyz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gxyz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(854(line=56,offs=1)--894(line=56,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/unsfx00.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1038(line=65,offs=1)--1078(line=65,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gnum000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gnum000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1079(line=66,offs=1)--1119(line=66,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gord000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gord000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1120(line=67,offs=1)--1160(line=67,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gfun000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gfun000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1164(line=69,offs=1)--1204(line=69,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1205(line=70,offs=1)--1245(line=70,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1246(line=71,offs=1)--1286(line=71,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1290(line=73,offs=1)--1330(line=73,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasq000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1331(line=74,offs=1)--1371(line=74,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasq001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1372(line=75,offs=1)--1412(line=75,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasq002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1416(line=77,offs=1)--1456(line=77,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gmap000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gmap000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1457(line=78,offs=1)--1497(line=78,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gmap001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gmap001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1501(line=80,offs=1)--1541(line=80,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gcls000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gcls000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1542(line=81,offs=1)--1582(line=81,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1583(line=82,offs=1)--1623(line=82,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gsyn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1650(line=86,offs=1)--1690(line=86,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/bool000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1691(line=87,offs=1)--1731(line=87,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/char000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1732(line=88,offs=1)--1772(line=88,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1773(line=89,offs=1)--1813(line=89,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gint001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1814(line=90,offs=1)--1854(line=90,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gflt000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1881(line=94,offs=1)--1921(line=94,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1922(line=95,offs=1)--1962(line=95,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1989(line=99,offs=1)--2029(line=99,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2030(line=100,offs=1)--2070(line=100,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axrf001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2071(line=101,offs=1)--2111(line=101,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2112(line=102,offs=1)--2152(line=102,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axsz001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2153(line=103,offs=1)--2193(line=103,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/asrt000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/asrt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2194(line=104,offs=1)--2234(line=104,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2235(line=105,offs=1)--2275(line=105,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2276(line=106,offs=1)--2316(line=106,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2317(line=107,offs=1)--2357(line=107,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2358(line=108,offs=1)--2398(line=108,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2399(line=109,offs=1)--2439(line=109,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2440(line=110,offs=1)--2480(line=110,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/lsrt000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/lsrt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2481(line=111,offs=1)--2521(line=111,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/optn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2522(line=112,offs=1)--2562(line=112,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/optn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2563(line=113,offs=1)--2603(line=113,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strm000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2604(line=114,offs=1)--2644(line=114,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strm001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2645(line=115,offs=1)--2685(line=115,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strx000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2686(line=116,offs=1)--2726(line=116,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strx001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2773(line=121,offs=1)--2818(line=121,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gbas000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2822(line=123,offs=1)--2867(line=123,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/bool000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2868(line=124,offs=1)--2913(line=124,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/char000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2917(line=126,offs=1)--2962(line=126,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gint000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2963(line=127,offs=1)--3008(line=127,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gflt000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3012(line=129,offs=1)--3057(line=129,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/strn000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3061(line=131,offs=1)--3106(line=131,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axrf000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3107(line=132,offs=1)--3152(line=132,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axsz000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3196(line=136,offs=1)--3242(line=136,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gnum000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gnum000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3243(line=137,offs=1)--3289(line=137,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gord000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gord000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3290(line=138,offs=1)--3336(line=138,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gfun000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gfun000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3337(line=139,offs=1)--3383(line=139,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gcls000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gcls000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3384(line=140,offs=1)--3430(line=140,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3431(line=141,offs=1)--3477(line=141,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3478(line=142,offs=1)--3524(line=142,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq002_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq002_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3525(line=143,offs=1)--3571(line=143,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasq000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gasq000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3572(line=144,offs=1)--3618(line=144,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasq001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gasq001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3619(line=145,offs=1)--3665(line=145,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gsyn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gsyn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3686(line=147,offs=1)--3732(line=147,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3756(line=150,offs=1)--3802(line=150,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axrf000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/axrf000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3803(line=151,offs=1)--3849(line=151,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axsz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/axsz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3850(line=152,offs=1)--3896(line=152,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/tupl000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/tupl000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3900(line=154,offs=1)--3946(line=154,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3947(line=155,offs=1)--3993(line=155,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/list001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3994(line=156,offs=1)--4040(line=156,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/lsrt000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/lsrt000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4041(line=157,offs=1)--4087(line=157,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/optn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4088(line=158,offs=1)--4134(line=158,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/optn001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4138(line=160,offs=1)--4184(line=160,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4185(line=161,offs=1)--4231(line=161,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4232(line=162,offs=1)--4278(line=162,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm002_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm002_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4279(line=163,offs=1)--4325(line=163,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strx000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4326(line=164,offs=1)--4372(line=164,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4543(line=175,offs=1)--4589(line=175,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gxyz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gxyz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4913(line=183,offs=1)--4913(line=183,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4913(line=183,offs=1)--4913(line=183,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(spelling.dats)@(271(line=17,offs=1)--322(line=19,offs=33)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1487(line=46,offs=1)--1520(line=47,offs=25))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/pre2026.dats";24));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/DATS/pre2026.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1521(line=48,offs=1)--1560(line=49,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/VT/pre2026_vt.dats";30));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1607(line=54,offs=1)--1648(line=55,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/DATS/i1range.dats";32));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/DATS/i1range.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1649(line=56,offs=1)--1690(line=57,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/DATS/trec000.dats";32));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/DATS/trec000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1737(line=62,offs=1)--1784(line=63,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/DATS/VT/trec000_vt.dats";38));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/DATS/VT/trec000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(2045(line=71,offs=1)--2045(line=71,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(2045(line=71,offs=1)--2045(line=71,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(spelling.dats)@(326(line=21,offs=1)--370(line=22,offs=36)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(197(line=15,offs=1)--249(line=16,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/xtop000.dats";35));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(296(line=21,offs=1)--344(line=22,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gbas000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(345(line=23,offs=1)--393(line=24,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gdbg000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gdbg000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(440(line=29,offs=1)--488(line=30,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/bool000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(489(line=31,offs=1)--537(line=32,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/char000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(538(line=33,offs=1)--586(line=34,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gint000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(587(line=35,offs=1)--635(line=36,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gflt000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(682(line=41,offs=1)--730(line=42,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strn000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(777(line=47,offs=1)--825(line=48,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/list000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(826(line=49,offs=1)--874(line=50,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/optn000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/optn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(901(line=54,offs=1)--949(line=55,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strm000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(950(line=56,offs=1)--998(line=57,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strx000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strx000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1045(line=62,offs=1)--1093(line=63,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axrf000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1094(line=64,offs=1)--1142(line=65,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axsz000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1398(line=73,offs=1)--1398(line=73,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1398(line=73,offs=1)--1398(line=73,offs=1));D3Cnone0()))
// I1Dextern(LCSRCsome1(spelling.dats)@(417(line=27,offs=1)--490(line=31,offs=37)))
// LCSRCsome1(spelling.dats)@(425(line=28,offs=1)--490(line=31,offs=37))
// I1FUNDCL
// spelling$main_428
  // FJARGdarg($list(I1BNDcons(I1TNM(1);I0Pvar(dt(5334));$list(@(dt(5334),I1Vtnm(I1TNM(1))))),I1BNDcons(I1TNM(2);I0Pvar(c1(5335));$list(@(c1(5335),I1Vtnm(I1TNM(2))))),I1BNDcons(I1TNM(3);I0Pvar(cs(5336));$list(@(cs(5336),I1Vtnm(I1TNM(3)))))))
// I1Dextern(LCSRCsome1(spelling.dats)@(494(line=33,offs=1)--579(line=38,offs=37)))
// LCSRCsome1(spelling.dats)@(502(line=34,offs=1)--579(line=38,offs=37))
// I1FUNDCL
// spelling$filter_505
  // FJARGdarg($list(I1BNDcons(I1TNM(4);I0Pvar(ws(5338));$list(@(ws(5338),I1Vtnm(I1TNM(4))))),I1BNDcons(I1TNM(5);I0Pvar(c1(5339));$list(@(c1(5339),I1Vtnm(I1TNM(5))))),I1BNDcons(I1TNM(6);I0Pvar(cs(5340));$list(@(cs(5340),I1Vtnm(I1TNM(6)))))))
// I1Dfundclist(LCSRCsome1(spelling.dats)@(626(line=43,offs=1)--749(line=52,offs=2)))
// I1FUNDCL
function wtest1_629(arg1, arg2)
{ // fun
  let jsxtnm7 = arg1
  let jsxtnm8 = arg2
  // I1CMP:start
  let jsxtnm96 // let
  { // let
    // I1Dimplmnt0(LCSRCsome1(spelling.dats)@(705(line=50,offs=1)--747(line=51,offs=34)))
    // I1Dimplmnt0(DIMPLone2(exists$test(95);$list(@(x0[523],T2Pcst(char))))):timp
    // LCSRCsome1(spelling.dats)@(668(line=47,offs=1)--679(line=47,offs=12))
    // I0Etapq(I0Ecst(gseq_exists(381)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(3767(line=214,offs=1)--3778(line=214,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
    // T1IMPallx(gseq_exists(381);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(2803(line=142,offs=1)--2968(line=156,offs=4)))
    // T1IMPallx(gseq_exists(381)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6025],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[6026],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_exists(381);$list(@(xs[1145],T2Pvar(xs[6025])),@(x0[1146],T2Pvar(x0[6026])))))))
    let jsxtnm94 = function (arg1) { // timp: gseq_exists(381)
      let jsxtnm11 = arg1
      // I1CMP:start
      let jsxtnm93 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(2862(line=149,offs=1)--2922(line=152,offs=28)))
        // I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Pvar(x0[6026]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(2936(line=155,offs=3)--2939(line=155,offs=6))
        // I0Etapq(I0Ecst(bool_neg(857)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/bool000.sats)@(1748(line=63,offs=1)--1756(line=63,offs=9))));$list(T2JAG($list())))
        // T1IMPallx(bool_neg(857);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/bool000.dats)@(1851(line=70,offs=1)--1916(line=74,offs=30)))
        // T1IMPallx(bool_neg(857)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(bool_neg(857);$list()))))
        let jsxtnm17 = function (arg1) { // timp: bool_neg(857)
          let jsxtnm15 = arg1
          // I1CMP:start
          let jsxtnm16 // ift
          if (jsxtnm15) // ift
          {
            jsxtnm16 = XATSBOOL(false)
          } else {
            jsxtnm16 = XATSBOOL(true)
          } // end(if)
          // I1CMP:return:jsxtnm16
          return jsxtnm16
        } // endtimp(bool_neg(857))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(2940(line=155,offs=7)--2951(line=155,offs=18))
        // I0Etapq(I0Ecst(gseq_forall(380)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(3721(line=210,offs=1)--3732(line=210,offs=12))));$list(T2JAG($list(T2Pvar(xs[6025]))),T2JAG($list(T2Pvar(x0[6026])))))
        // T1IMPallx(gseq_forall(380);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1976(line=85,offs=1)--2025(line=87,offs=29)))
        // T1IMPallx(gseq_forall(380)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_forall(380);$list(@(xs[1143],T2Pcst(strn)),@(x0[1144],T2Pcst(cgtz)))))))
        let jsxtnm90
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(2012(line=87,offs=16)--2023(line=87,offs=27))
        // I0Etapq(I0Ecst(strn_forall(1063)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn001.sats)@(2101(line=80,offs=1)--2112(line=80,offs=12))));$list(T2JAG($list())))
        // T1IMPallx(strn_forall(1063);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1556(line=51,offs=1)--1772(line=72,offs=2)))
        // T1IMPallx(strn_forall(1063)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_forall(1063);$list()))))
        let jsxtnm89 = function (arg1) { // timp: strn_forall(1063)
          let jsxtnm18 = arg1
          // I1CMP:start
          let jsxtnm88 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1627(line=59,offs=1)--1658(line=61,offs=21)))
            // I1VALDCL
            let jsxtnm25
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1640(line=61,offs=3)--1651(line=61,offs=14))
            // I0Etapq(I0Ecst(strn_length(1030)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2709(line=131,offs=1)--2720(line=131,offs=12))));$list(T2JAG($list())))
            // T1IMPallx(strn_length(1030);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1610(line=57,offs=1)--1756(line=69,offs=2)))
            // T1IMPallx(strn_length(1030)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(1030);$list()))))
            let jsxtnm23 = function (arg1) { // timp: strn_length(1030)
              let jsxtnm19 = arg1
              // I1CMP:start
              let jsxtnm22 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1692(line=65,offs=1)--1754(line=68,offs=31)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1700(line=66,offs=1)--1754(line=68,offs=31))
                // I1FUNDCL
                // XATS2JS_strn_length_1703
                  // FJARGdarg($list(I1BNDcons(I1TNM(20);I0Pvar(cs(5204));$list(@(cs(5204),I1Vtnm(I1TNM(20)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                let jsxtnm21 = XATSDAPP(XATS2JS_strn_length(jsxtnm19))
                jsxtnm22 = jsxtnm21
              } // endlet
              // I1CMP:return:jsxtnm22
              return jsxtnm22
            } // endtimp(strn_length(1030))
            let jsxtnm24 = XATSDAPP(jsxtnm23(jsxtnm18))
            jsxtnm25 = jsxtnm24
            XATS000_patck(true)
            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
            // I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Pcst(ni))))):timp
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1597(line=55,offs=3)--1608(line=55,offs=14))
            // I0Etapq(I0Ecst(nint_forall(947)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(1757(line=66,offs=1)--1768(line=66,offs=12))));$list(T2JAG($list())))
            // T1IMPallx(nint_forall(947);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2796(line=146,offs=1)--2981(line=160,offs=33)))
            // T1IMPallx(nint_forall(947)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_forall(947);$list()))))
            let jsxtnm86 = function (arg1) { // timp: nint_forall(947)
              let jsxtnm31 = arg1
              // I1CMP:start
              let jsxtnm85 // let
              { // let
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2859(line=151,offs=1)--2980(line=160,offs=32)))
                // I1FUNDCL
                function loop_2862(arg1, arg2)
                { // fun
                  let jsxtnm32 = arg1
                  let jsxtnm33 = arg2
                  // I1CMP:start
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2900(line=155,offs=5)--2902(line=155,offs=7))
                  // I0Etapq(I0Ecst(sint_gte$sint(922)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
                  // T1IMPallx(sint_gte$sint(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                  // T1IMPallx(sint_gte$sint(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(922);$list()))))
                  let jsxtnm40 = function (arg1, arg2) { // timp: sint_gte$sint(922)
                    let jsxtnm34 = arg1
                    let jsxtnm35 = arg2
                    // I1CMP:start
                    let jsxtnm39 // let
                    { // let
                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                      // I1FUNDCL
                      // XATS2JS_sint_gte$sint_2399
                        // FJARGdarg($list(I1BNDcons(I1TNM(36);I0Pvar(i1(5042));$list(@(i1(5042),I1Vtnm(I1TNM(36))))),I1BNDcons(I1TNM(37);I0Pvar(i2(5043));$list(@(i2(5043),I1Vtnm(I1TNM(37)))))))
                        // I1CMP:start
                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                      let jsxtnm38 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm34, jsxtnm35))
                      jsxtnm39 = jsxtnm38
                    } // endlet
                    // I1CMP:return:jsxtnm39
                    return jsxtnm39
                  } // endtimp(sint_gte$sint(922))
                  let jsxtnm41 = XATSDAPP(jsxtnm40(jsxtnm33, jsxtnm32))
                  let jsxtnm83 // ift
                  if (jsxtnm41) // ift
                  {
                    jsxtnm83 = XATSBOOL(true)
                  } else {
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2929(line=159,offs=1)--2940(line=159,offs=12))
                    // I0Etapq(I0Ecst(forall$test(47)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2003(line=96,offs=1)--2014(line=96,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                    // T1IMPallx(forall$test(47);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                    // T1IMPallx(forall$test(47)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Pcst(ni)))))))
                    let jsxtnm71 = function (arg1) { // timp: forall$test(47)
                      let jsxtnm42 = arg1
                      // I1CMP:start
                      let jsxtnm70 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1728(line=69,offs=1)--1768(line=70,offs=32)))
                        // I1VALDCL
                        let jsxtnm51
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1743(line=70,offs=7)--1758(line=70,offs=22))
                        // I0Etapq(I0Ecst(strn_get$at$raw(2345)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4484(line=273,offs=1)--4499(line=273,offs=16))));$list(T2JAG($list())))
                        // T1IMPallx(strn_get$at$raw(2345);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
                        // T1IMPallx(strn_get$at$raw(2345)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(2345);$list()))))
                        let jsxtnm49 = function (arg1, arg2) { // timp: strn_get$at$raw(2345)
                          let jsxtnm43 = arg1
                          let jsxtnm44 = arg2
                          // I1CMP:start
                          let jsxtnm48 // let
                          { // let
                            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
                            // I1FUNDCL
                            // XATS000_strn_get$at$raw_2309
                              // FJARGdarg($list(I1BNDcons(I1TNM(45);I0Pvar(cs(3280));$list(@(cs(3280),I1Vtnm(I1TNM(45))))),I1BNDcons(I1TNM(46);I0Pvar(i0(3281));$list(@(i0(3281),I1Vtnm(I1TNM(46)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                            let jsxtnm47 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm43, jsxtnm44))
                            jsxtnm48 = jsxtnm47
                          } // endlet
                          // I1CMP:return:jsxtnm48
                          return jsxtnm48
                        } // endtimp(strn_get$at$raw(2345))
                        let jsxtnm50 = XATSDAPP(jsxtnm49(jsxtnm18, jsxtnm42))
                        jsxtnm51 = jsxtnm50
                        XATS000_patck(true)
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1697(line=66,offs=3)--1708(line=66,offs=14))
                        // I0Etapq(I0Ecst(forall$test(47)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2003(line=96,offs=1)--2014(line=96,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
                        // T1IMPallx(forall$test(47);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(2862(line=149,offs=1)--2922(line=152,offs=28)))
                        // T1IMPallx(forall$test(47)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6025],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[6026],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))
                        let jsxtnm68 = function (arg1) { // timp: forall$test(47)
                          let jsxtnm52 = arg1
                          // I1CMP:start
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(2897(line=152,offs=3)--2900(line=152,offs=6))
                          // I0Etapq(I0Ecst(bool_neg(857)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/bool000.sats)@(1748(line=63,offs=1)--1756(line=63,offs=9))));$list(T2JAG($list())))
                          // T1IMPallx(bool_neg(857);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/bool000.dats)@(1851(line=70,offs=1)--1916(line=74,offs=30)))
                          // T1IMPallx(bool_neg(857)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(bool_neg(857);$list()))))
                          let jsxtnm55 = function (arg1) { // timp: bool_neg(857)
                            let jsxtnm53 = arg1
                            // I1CMP:start
                            let jsxtnm54 // ift
                            if (jsxtnm53) // ift
                            {
                              jsxtnm54 = XATSBOOL(false)
                            } else {
                              jsxtnm54 = XATSBOOL(true)
                            } // end(if)
                            // I1CMP:return:jsxtnm54
                            return jsxtnm54
                          } // endtimp(bool_neg(857))
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(2901(line=152,offs=7)--2912(line=152,offs=18))
                          // I0Etapq(I0Ecst(exists$test(95)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(5093(line=331,offs=1)--5104(line=331,offs=12))));$list(T2JAG($list(T2Pvar(x0[6026])))))
                          // T1IMPallx(exists$test(95);LCSRCsome1(spelling.dats)@(705(line=50,offs=1)--747(line=51,offs=34)))
                          // T1IMPallx(exists$test(95)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(exists$test(95);$list(@(x0[523],T2Pcst(char)))))))
                          let jsxtnm65 = function (arg1) { // timp: exists$test(95)
                            let jsxtnm56 = arg1
                            // I1CMP:start
                            // LCSRCsome1(spelling.dats)@(742(line=51,offs=29)--743(line=51,offs=30))
                            // I0Etapq(I0Ecst(char_eq(888)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3373(line=176,offs=1)--3380(line=176,offs=8))));$list(T2JAG($list())))
                            // T1IMPallx(char_eq(888);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1772(line=72,offs=1)--1916(line=84,offs=2)))
                            // T1IMPallx(char_eq(888)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_eq(888);$list()))))
                            let jsxtnm63 = function (arg1, arg2) { // timp: char_eq(888)
                              let jsxtnm57 = arg1
                              let jsxtnm58 = arg2
                              // I1CMP:start
                              let jsxtnm62 // let
                              { // let
                                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1848(line=80,offs=1)--1914(line=83,offs=39)))
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1856(line=81,offs=1)--1914(line=83,offs=39))
                                // I1FUNDCL
                                // XATS2JS_char_eq_1859
                                  // FJARGdarg($list(I1BNDcons(I1TNM(59);I0Pvar(c1(4980));$list(@(c1(4980),I1Vtnm(I1TNM(59))))),I1BNDcons(I1TNM(60);I0Pvar(c2(4981));$list(@(c2(4981),I1Vtnm(I1TNM(60)))))))
                                  // I1CMP:start
                                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_eq);G1Nlist($list())) // I1CMP:return
                                let jsxtnm61 = XATSDAPP(XATS2JS_char_eq(jsxtnm57, jsxtnm58))
                                jsxtnm62 = jsxtnm61
                              } // endlet
                              // I1CMP:return:jsxtnm62
                              return jsxtnm62
                            } // endtimp(char_eq(888))
                            let jsxtnm64 = XATSDAPP(jsxtnm63(jsxtnm8, jsxtnm56))
                            // I1CMP:return:jsxtnm64
                            return jsxtnm64
                          } // endtimp(exists$test(95))
                          let jsxtnm66 = XATSDAPP(jsxtnm65(jsxtnm52))
                          let jsxtnm67 = XATSDAPP(jsxtnm55(jsxtnm66))
                          // I1CMP:return:jsxtnm67
                          return jsxtnm67
                        } // endtimp(forall$test(47))
                        let jsxtnm69 = XATSDAPP(jsxtnm68(jsxtnm51))
                        jsxtnm70 = jsxtnm69
                      } // endlet
                      // I1CMP:return:jsxtnm70
                      return jsxtnm70
                    } // endtimp(forall$test(47))
                    let jsxtnm72 = XATSDAPP(jsxtnm71(jsxtnm33))
                    let jsxtnm82 // ift
                    if (jsxtnm72) // ift
                    {
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2965(line=160,offs=17)--2966(line=160,offs=18))
                      // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                      // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                      // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                      let jsxtnm79 = function (arg1, arg2) { // timp: sint_add$sint(925)
                        let jsxtnm73 = arg1
                        let jsxtnm74 = arg2
                        // I1CMP:start
                        let jsxtnm78 // let
                        { // let
                          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                          // I1FUNDCL
                          // XATS2JS_sint_add$sint_2778
                            // FJARGdarg($list(I1BNDcons(I1TNM(75);I0Pvar(i1(5052));$list(@(i1(5052),I1Vtnm(I1TNM(75))))),I1BNDcons(I1TNM(76);I0Pvar(i2(5053));$list(@(i2(5053),I1Vtnm(I1TNM(76)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                          let jsxtnm77 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm73, jsxtnm74))
                          jsxtnm78 = jsxtnm77
                        } // endlet
                        // I1CMP:return:jsxtnm78
                        return jsxtnm78
                      } // endtimp(sint_add$sint(925))
                      let jsxtnm80 = XATSDAPP(jsxtnm79(jsxtnm33, XATSINT1(1)))
                      let jsxtnm81 = XATSDAPP(loop_2862(jsxtnm32, jsxtnm80))
                      jsxtnm82 = jsxtnm81
                    } else {
                      jsxtnm82 = XATSBOOL(false)
                    } // end(if)
                    jsxtnm83 = jsxtnm82
                  } // end(if)
                  // I1CMP:return:jsxtnm83
                  return jsxtnm83
                } // endfun(loop_2862)
                let jsxtnm84 = XATSDAPP(loop_2862(jsxtnm31, XATSINT1(0)))
                jsxtnm85 = jsxtnm84
              } // endlet
              // I1CMP:return:jsxtnm85
              return jsxtnm85
            } // endtimp(nint_forall(947))
            let jsxtnm87 = XATSDAPP(jsxtnm86(jsxtnm25))
            jsxtnm88 = jsxtnm87
          } // endlet
          // I1CMP:return:jsxtnm88
          return jsxtnm88
        } // endtimp(strn_forall(1063))
        jsxtnm90 = jsxtnm89
        let jsxtnm91 = XATSDAPP(jsxtnm90(jsxtnm11))
        let jsxtnm92 = XATSDAPP(jsxtnm17(jsxtnm91))
        jsxtnm93 = jsxtnm92
      } // endlet
      // I1CMP:return:jsxtnm93
      return jsxtnm93
    } // endtimp(gseq_exists(381))
    let jsxtnm95 = XATSDAPP(jsxtnm94(jsxtnm7))
    jsxtnm96 = jsxtnm95
  } // endlet
  // I1CMP:return:jsxtnm96
  return jsxtnm96
} // endfun(wtest1_629)
// I1Dfundclist(LCSRCsome1(spelling.dats)@(776(line=56,offs=1)--904(line=65,offs=2)))
// I1FUNDCL
function wtest2_779(arg1, arg2)
{ // fun
  let jsxtnm97 = arg1
  let jsxtnm98 = arg2
  // I1CMP:start
  let jsxtnm161 // let
  { // let
    // I1Dimplmnt0(LCSRCsome1(spelling.dats)@(855(line=63,offs=1)--902(line=64,offs=39)))
    // I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Pcst(char))))):timp
    // LCSRCsome1(spelling.dats)@(818(line=60,offs=1)--829(line=60,offs=12))
    // I0Etapq(I0Ecst(gseq_forall(380)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(3721(line=210,offs=1)--3732(line=210,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
    // T1IMPallx(gseq_forall(380);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1976(line=85,offs=1)--2025(line=87,offs=29)))
    // T1IMPallx(gseq_forall(380)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_forall(380);$list(@(xs[1143],T2Pcst(strn)),@(x0[1144],T2Pcst(cgtz)))))))
    let jsxtnm159
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(2012(line=87,offs=16)--2023(line=87,offs=27))
    // I0Etapq(I0Ecst(strn_forall(1063)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn001.sats)@(2101(line=80,offs=1)--2112(line=80,offs=12))));$list(T2JAG($list())))
    // T1IMPallx(strn_forall(1063);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1556(line=51,offs=1)--1772(line=72,offs=2)))
    // T1IMPallx(strn_forall(1063)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_forall(1063);$list()))))
    let jsxtnm158 = function (arg1) { // timp: strn_forall(1063)
      let jsxtnm101 = arg1
      // I1CMP:start
      let jsxtnm157 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1627(line=59,offs=1)--1658(line=61,offs=21)))
        // I1VALDCL
        let jsxtnm108
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1640(line=61,offs=3)--1651(line=61,offs=14))
        // I0Etapq(I0Ecst(strn_length(1030)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2709(line=131,offs=1)--2720(line=131,offs=12))));$list(T2JAG($list())))
        // T1IMPallx(strn_length(1030);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1610(line=57,offs=1)--1756(line=69,offs=2)))
        // T1IMPallx(strn_length(1030)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(1030);$list()))))
        let jsxtnm106 = function (arg1) { // timp: strn_length(1030)
          let jsxtnm102 = arg1
          // I1CMP:start
          let jsxtnm105 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1692(line=65,offs=1)--1754(line=68,offs=31)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1700(line=66,offs=1)--1754(line=68,offs=31))
            // I1FUNDCL
            // XATS2JS_strn_length_1703
              // FJARGdarg($list(I1BNDcons(I1TNM(103);I0Pvar(cs(5204));$list(@(cs(5204),I1Vtnm(I1TNM(103)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
            let jsxtnm104 = XATSDAPP(XATS2JS_strn_length(jsxtnm102))
            jsxtnm105 = jsxtnm104
          } // endlet
          // I1CMP:return:jsxtnm105
          return jsxtnm105
        } // endtimp(strn_length(1030))
        let jsxtnm107 = XATSDAPP(jsxtnm106(jsxtnm101))
        jsxtnm108 = jsxtnm107
        XATS000_patck(true)
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
        // I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Pcst(ni))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1597(line=55,offs=3)--1608(line=55,offs=14))
        // I0Etapq(I0Ecst(nint_forall(947)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(1757(line=66,offs=1)--1768(line=66,offs=12))));$list(T2JAG($list())))
        // T1IMPallx(nint_forall(947);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2796(line=146,offs=1)--2981(line=160,offs=33)))
        // T1IMPallx(nint_forall(947)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_forall(947);$list()))))
        let jsxtnm155 = function (arg1) { // timp: nint_forall(947)
          let jsxtnm114 = arg1
          // I1CMP:start
          let jsxtnm154 // let
          { // let
            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2859(line=151,offs=1)--2980(line=160,offs=32)))
            // I1FUNDCL
            function loop_2862(arg1, arg2)
            { // fun
              let jsxtnm115 = arg1
              let jsxtnm116 = arg2
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2900(line=155,offs=5)--2902(line=155,offs=7))
              // I0Etapq(I0Ecst(sint_gte$sint(922)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
              // T1IMPallx(sint_gte$sint(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
              // T1IMPallx(sint_gte$sint(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(922);$list()))))
              let jsxtnm123 = function (arg1, arg2) { // timp: sint_gte$sint(922)
                let jsxtnm117 = arg1
                let jsxtnm118 = arg2
                // I1CMP:start
                let jsxtnm122 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                  // I1FUNDCL
                  // XATS2JS_sint_gte$sint_2399
                    // FJARGdarg($list(I1BNDcons(I1TNM(119);I0Pvar(i1(5042));$list(@(i1(5042),I1Vtnm(I1TNM(119))))),I1BNDcons(I1TNM(120);I0Pvar(i2(5043));$list(@(i2(5043),I1Vtnm(I1TNM(120)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                  let jsxtnm121 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm117, jsxtnm118))
                  jsxtnm122 = jsxtnm121
                } // endlet
                // I1CMP:return:jsxtnm122
                return jsxtnm122
              } // endtimp(sint_gte$sint(922))
              let jsxtnm124 = XATSDAPP(jsxtnm123(jsxtnm116, jsxtnm115))
              let jsxtnm152 // ift
              if (jsxtnm124) // ift
              {
                jsxtnm152 = XATSBOOL(true)
              } else {
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2929(line=159,offs=1)--2940(line=159,offs=12))
                // I0Etapq(I0Ecst(forall$test(47)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2003(line=96,offs=1)--2014(line=96,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                // T1IMPallx(forall$test(47);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                // T1IMPallx(forall$test(47)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Pcst(ni)))))))
                let jsxtnm140 = function (arg1) { // timp: forall$test(47)
                  let jsxtnm125 = arg1
                  // I1CMP:start
                  let jsxtnm139 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1728(line=69,offs=1)--1768(line=70,offs=32)))
                    // I1VALDCL
                    let jsxtnm134
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1743(line=70,offs=7)--1758(line=70,offs=22))
                    // I0Etapq(I0Ecst(strn_get$at$raw(2345)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4484(line=273,offs=1)--4499(line=273,offs=16))));$list(T2JAG($list())))
                    // T1IMPallx(strn_get$at$raw(2345);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
                    // T1IMPallx(strn_get$at$raw(2345)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(2345);$list()))))
                    let jsxtnm132 = function (arg1, arg2) { // timp: strn_get$at$raw(2345)
                      let jsxtnm126 = arg1
                      let jsxtnm127 = arg2
                      // I1CMP:start
                      let jsxtnm131 // let
                      { // let
                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
                        // I1FUNDCL
                        // XATS000_strn_get$at$raw_2309
                          // FJARGdarg($list(I1BNDcons(I1TNM(128);I0Pvar(cs(3280));$list(@(cs(3280),I1Vtnm(I1TNM(128))))),I1BNDcons(I1TNM(129);I0Pvar(i0(3281));$list(@(i0(3281),I1Vtnm(I1TNM(129)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                        let jsxtnm130 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm126, jsxtnm127))
                        jsxtnm131 = jsxtnm130
                      } // endlet
                      // I1CMP:return:jsxtnm131
                      return jsxtnm131
                    } // endtimp(strn_get$at$raw(2345))
                    let jsxtnm133 = XATSDAPP(jsxtnm132(jsxtnm101, jsxtnm125))
                    jsxtnm134 = jsxtnm133
                    XATS000_patck(true)
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1697(line=66,offs=3)--1708(line=66,offs=14))
                    // I0Etapq(I0Ecst(forall$test(47)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2003(line=96,offs=1)--2014(line=96,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
                    // T1IMPallx(forall$test(47);LCSRCsome1(spelling.dats)@(855(line=63,offs=1)--902(line=64,offs=39)))
                    // T1IMPallx(forall$test(47)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Pcst(char)))))))
                    let jsxtnm137 = function (arg1) { // timp: forall$test(47)
                      let jsxtnm135 = arg1
                      // I1CMP:start
                      let jsxtnm136 = XATSDAPP(wtest1_629(jsxtnm98, jsxtnm135))
                      // I1CMP:return:jsxtnm136
                      return jsxtnm136
                    } // endtimp(forall$test(47))
                    let jsxtnm138 = XATSDAPP(jsxtnm137(jsxtnm134))
                    jsxtnm139 = jsxtnm138
                  } // endlet
                  // I1CMP:return:jsxtnm139
                  return jsxtnm139
                } // endtimp(forall$test(47))
                let jsxtnm141 = XATSDAPP(jsxtnm140(jsxtnm116))
                let jsxtnm151 // ift
                if (jsxtnm141) // ift
                {
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2965(line=160,offs=17)--2966(line=160,offs=18))
                  // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                  // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                  // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                  let jsxtnm148 = function (arg1, arg2) { // timp: sint_add$sint(925)
                    let jsxtnm142 = arg1
                    let jsxtnm143 = arg2
                    // I1CMP:start
                    let jsxtnm147 // let
                    { // let
                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                      // I1FUNDCL
                      // XATS2JS_sint_add$sint_2778
                        // FJARGdarg($list(I1BNDcons(I1TNM(144);I0Pvar(i1(5052));$list(@(i1(5052),I1Vtnm(I1TNM(144))))),I1BNDcons(I1TNM(145);I0Pvar(i2(5053));$list(@(i2(5053),I1Vtnm(I1TNM(145)))))))
                        // I1CMP:start
                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                      let jsxtnm146 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm142, jsxtnm143))
                      jsxtnm147 = jsxtnm146
                    } // endlet
                    // I1CMP:return:jsxtnm147
                    return jsxtnm147
                  } // endtimp(sint_add$sint(925))
                  let jsxtnm149 = XATSDAPP(jsxtnm148(jsxtnm116, XATSINT1(1)))
                  let jsxtnm150 = XATSDAPP(loop_2862(jsxtnm115, jsxtnm149))
                  jsxtnm151 = jsxtnm150
                } else {
                  jsxtnm151 = XATSBOOL(false)
                } // end(if)
                jsxtnm152 = jsxtnm151
              } // end(if)
              // I1CMP:return:jsxtnm152
              return jsxtnm152
            } // endfun(loop_2862)
            let jsxtnm153 = XATSDAPP(loop_2862(jsxtnm114, XATSINT1(0)))
            jsxtnm154 = jsxtnm153
          } // endlet
          // I1CMP:return:jsxtnm154
          return jsxtnm154
        } // endtimp(nint_forall(947))
        let jsxtnm156 = XATSDAPP(jsxtnm155(jsxtnm108))
        jsxtnm157 = jsxtnm156
      } // endlet
      // I1CMP:return:jsxtnm157
      return jsxtnm157
    } // endtimp(strn_forall(1063))
    jsxtnm159 = jsxtnm158
    let jsxtnm160 = XATSDAPP(jsxtnm159(jsxtnm97))
    jsxtnm161 = jsxtnm160
  } // endlet
  // I1CMP:return:jsxtnm161
  return jsxtnm161
} // endfun(wtest2_779)
// I1Dimplmnt0(LCSRCsome1(spelling.dats)@(951(line=70,offs=1)--1013(line=73,offs=25)))
// I1Dimplmnt0(DIMPLone2(gseq_strmize0(1682);$list(@(xs[4215],T2Pcst(strn)),@(x0[4216],T2Pcst(cgtz))))):timp
// I1Dimplmnt0(LCSRCsome1(spelling.dats)@(1040(line=77,offs=1)--1546(line=110,offs=2)))
let spelling$main_428 = function (arg1, arg2, arg3) { // impl
  let jsxtnm162 = arg1
  let jsxtnm163 = arg2
  let jsxtnm164 = arg3
  // I1CMP:start
  let jsxtnm391 // let
  { // let
    // I1Dfundclist(LCSRCsome1(spelling.dats)@(1233(line=93,offs=1)--1502(line=108,offs=2)))
    // I1FUNDCL
    function dict_line$split_1236(arg1)
    { // fun
      let jsxtnm165 = arg1
      // I1CMP:start
      let jsxtnm386 // let
      { // let
        // LCSRCsome1(spelling.dats)@(1355(line=100,offs=1)--1373(line=101,offs=10))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(c0;S2Ecst(cgtz)))))
        // LCSRCsome1(spelling.dats)@(1374(line=102,offs=1)--1392(line=103,offs=10))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(cs;S2Ecst(strn)))))
        // LCSRCsome1(spelling.dats)@(1393(line=104,offs=1)--1420(line=105,offs=19))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rs;S2Eapps(S2Ecst(list_vt);$list(S2Ecst(cgtz)))))))
        // I1Dvaldclist(LCSRCsome1(spelling.dats)@(1421(line=106,offs=1)--1500(line=107,offs=70)))
        // I1VALDCL
        let jsxtnm342
        // LCSRCsome1(spelling.dats)@(1431(line=107,offs=1)--1464(line=107,offs=34))
        // I0Etapq(I0Ecst(gseq_segmentize0$f1un_lstrm$llist(2281)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1894(line=77,offs=1)--1927(line=77,offs=34))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
        // T1IMPallx(gseq_segmentize0$f1un_lstrm$llist(2281);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2891(line=144,offs=1)--3073(line=157,offs=4)))
        // T1IMPallx(gseq_segmentize0$f1un_lstrm$llist(2281)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8849],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8850],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_segmentize0$f1un_lstrm$llist(2281);$list(@(xs[5611],T2Pvar(xs[8849])),@(x0[5612],T2Pvar(x0[8850])))))))
        let jsxtnm330 = function (arg1, arg2) { // timp: gseq_segmentize0$f1un_lstrm$llist(2281)
          let jsxtnm166 = arg1
          let jsxtnm167 = arg2
          // I1CMP:start
          let jsxtnm329 // let
          { // let
            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2972(line=151,offs=1)--3006(line=152,offs=26)))
            // I1Dimplmnt0(DIMPLone2(segment$delim1(2277);$list(@(x0[5605],T2Pvar(x0[8850]))))):timp
            // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(3028(line=156,offs=3)--3056(line=156,offs=31))
            // I0Etapq(I0Ecst(gseq_segmentize0_lstrm$llist(2278)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1636(line=61,offs=1)--1664(line=61,offs=29))));$list(T2JAG($list(T2Pvar(xs[8849]))),T2JAG($list(T2Pvar(x0[8850])))))
            // T1IMPallx(gseq_segmentize0_lstrm$llist(2278);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1566(line=52,offs=1)--1795(line=66,offs=4)))
            // T1IMPallx(gseq_segmentize0_lstrm$llist(2278)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8844],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8845],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_segmentize0_lstrm$llist(2278);$list(@(xs[5606],T2Pvar(xs[8844])),@(x0[5607],T2Pvar(x0[8845])))))))
            let jsxtnm327 = function (arg1) { // timp: gseq_segmentize0_lstrm$llist(2278)
              let jsxtnm168 = arg1
              // I1CMP:start
              let jsxtnm326 // let
              { // let
                // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1644(line=59,offs=1)--1669(line=59,offs=26))
                // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rs;S2Eapps(S2Ecst(list_vt);$list(S2Evar(x0[8845])))))))
                // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1673(line=61,offs=1)--1722(line=62,offs=41)))
                // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pcst(rs)),@(y0[3807],T2Pcst(rs))))):timp
                // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1731(line=64,offs=1)--1743(line=64,offs=13))
                // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8845]),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8845]),T2Pnone0()))))))
                // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
                // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8575],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8576],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8575])),@(y0[5444],T2Pvar(y0[8576])))))))
                let jsxtnm202 = function (arg1) { // timp: strm_vt_map0(2174)
                  let jsxtnm169 = arg1
                  // I1CMP:start
                  let jsxtnm201 // let
                  { // let
                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
                    // I1FUNDCL
                    function auxmain_4114(arg1)
                    { // fun
                      let jsxtnm170 = arg1
                      // I1CMP:start
                      let jsxtnm199 = XATS000_l1azy(function (tlaz) { // l1azy
                        // I1CMP:start
                        let jsxtnm171 = XATS000_dl1az(jsxtnm170)
                        let jsxtnm198 // cas
                        do {
                          // { // cls
                          // I1GPTpat(I1BNDcons(I1TNM(172);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                          if (XATS000_ctgeq(jsxtnm171, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                            let jsxtnm172 = jsxtnm171
                            let jsxtnm173 = XATSCAPP("strmcon_vt_nil", [0])
                            jsxtnm198 = jsxtnm173
                            break // cls
                          } // gpt
                          // } // cls
                          // { // cls
                          // I1GPTpat(I1BNDcons(I1TNM(174);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4467)),I0Pvar(xs(4468)))));$list(@(x1(4467),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(174));0)),@(xs(4468),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(174));1)))))
                          if (XATS000_ctgeq(jsxtnm171, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                            let jsxtnm174 = jsxtnm171
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                            // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8575]))),T2JAG($list(T2Pvar(y0[8576])))))
                            // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1673(line=61,offs=1)--1722(line=62,offs=41)))
                            // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8844],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8845],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Papps(T2Pcst(list_vt);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))),@(y0[3807],T2Papps(T2Pcst(list_vt);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))))
                            let jsxtnm194
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1702(line=62,offs=21)--1718(line=62,offs=37))
                            // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(x0[8845])))))
                            // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
                            // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8426],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8426])))))))
                            let jsxtnm193 = function (arg1) { // timp: list_vt_reverse0(2015)
                              let jsxtnm175 = arg1
                              // I1CMP:start
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
                              // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8426])))))
                              // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
                              // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8423],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8423])))))))
                              let jsxtnm190 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                                let jsxtnm176 = arg1
                                let jsxtnm177 = arg2
                                // I1CMP:start
                                let jsxtnm189 // let
                                { // let
                                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                                  // I1FUNDCL
                                  function loop_6433(arg1, arg2)
                                  { // fun
                                    let jsxtnm178 = arg1
                                    let jsxtnm179 = arg2
                                    // I1CMP:start
                                    let jsxtnm187 // cas
                                    do {
                                      // { // cls
                                      // I1GPTpat(I1BNDcons(I1TNM(180);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                                      if (XATS000_ctgeq(jsxtnm178, XATSCTAG("list_vt_nil",0))) { // gpt
                                        let jsxtnm180 = jsxtnm178
                                        jsxtnm187 = jsxtnm179
                                        break // cls
                                      } // gpt
                                      // } // cls
                                      // { // cls
                                      // I1GPTpat(I1BNDcons(I1TNM(181);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                                      if (XATS000_ctgeq(jsxtnm178, XATSCTAG("list_vt_cons",1))) { // gpt
                                        let jsxtnm181 = jsxtnm178
                                        let jsxtnm186 // let
                                        { // let
                                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                                          // I1VALDCL
                                          let jsxtnm183
                                          let jsxtnm182 = XATSPCON(jsxtnm178,1)
                                          jsxtnm183 = jsxtnm182
                                          XATS000_patck(true)
                                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                                          // I1VALDCL
                                          let jsxtnm184
                                          XATS000_assgn(XATSLPCN(1, jsxtnm178), jsxtnm179)
                                          jsxtnm184 = []
                                          XATS000_patck(true)
                                          XATS000_fold(jsxtnm178)
                                          let jsxtnm185 = XATSDAPP(loop_6433(jsxtnm183, jsxtnm178))
                                          jsxtnm186 = jsxtnm185
                                        } // endlet
                                        jsxtnm187 = jsxtnm186
                                        break // cls
                                      } // gpt
                                      // } // cls
                                      XATS000_cfail()
                                    } while (false) // end-of(do)
                                    // I1CMP:return:jsxtnm187
                                    return jsxtnm187
                                  } // endfun(loop_6433)
                                  let jsxtnm188 = XATSDAPP(loop_6433(jsxtnm176, jsxtnm177))
                                  jsxtnm189 = jsxtnm188
                                } // endlet
                                // I1CMP:return:jsxtnm189
                                return jsxtnm189
                              } // endtimp(list_vt_rappend00(2018))
                              let jsxtnm191 = XATSCAPP("list_vt_nil", [0])
                              let jsxtnm192 = XATSDAPP(jsxtnm190(jsxtnm175, jsxtnm191))
                              // I1CMP:return:jsxtnm192
                              return jsxtnm192
                            } // endtimp(list_vt_reverse0(2015))
                            jsxtnm194 = jsxtnm193
                            let jsxtnm195 = XATSDAPP(jsxtnm194(XATSP1CN("strmcon_vt_cons", jsxtnm174[0+1])))
                            let jsxtnm196 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm174[1+1])))
                            let jsxtnm197 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm195, jsxtnm196])
                            jsxtnm198 = jsxtnm197
                            break // cls
                          } // gpt
                          // } // cls
                          XATS000_cfail()
                        } while (false) // end-of(do)
                        // I1CMP:return:jsxtnm198
                        return jsxtnm198
                      }) // endfun(l1azy)
                      // I1CMP:return:jsxtnm199
                      return jsxtnm199
                    } // endfun(auxmain_4114)
                    let jsxtnm200 = XATSDAPP(auxmain_4114(jsxtnm169))
                    jsxtnm201 = jsxtnm200
                  } // endlet
                  // I1CMP:return:jsxtnm201
                  return jsxtnm201
                } // endtimp(strm_vt_map0(2174))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1749(line=65,offs=1)--1778(line=65,offs=30))
                // I0Etapq(I0Ecst(gseq_segmentize0_lstrm$rllist(2279)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1721(line=67,offs=1)--1750(line=67,offs=30))));$list(T2JAG($list(T2Pvar(xs[8844]))),T2JAG($list(T2Pvar(x0[8845])))))
                // T1IMPallx(gseq_segmentize0_lstrm$rllist(2279);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1870(line=70,offs=1)--2038(line=80,offs=4)))
                // T1IMPallx(gseq_segmentize0_lstrm$rllist(2279)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8846],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8847],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_segmentize0_lstrm$rllist(2279);$list(@(xs[5608],T2Pvar(xs[8846])),@(x0[5609],T2Pvar(x0[8847])))))))
                let jsxtnm323 = function (arg1) { // timp: gseq_segmentize0_lstrm$rllist(2279)
                  let jsxtnm203 = arg1
                  // I1CMP:start
                  let jsxtnm322 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1946(line=76,offs=1)--1980(line=77,offs=26)))
                    // I1VALDCL
                    let jsxtnm281
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1955(line=77,offs=1)--1968(line=77,offs=14))
                    // I0Etapq(I0Ecst(gseq_strmize0(1682)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gseq001_vt.sats)@(1810(line=69,offs=1)--1823(line=69,offs=14))));$list(T2JAG($list(T2Pvar(xs[8846]))),T2JAG($list(T2Pvar(x0[8847])))))
                    // T1IMPallx(gseq_strmize0(1682);LCSRCsome1(spelling.dats)@(951(line=70,offs=1)--1013(line=73,offs=25)))
                    // T1IMPallx(gseq_strmize0(1682)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_strmize0(1682);$list(@(xs[4215],T2Pcst(strn)),@(x0[4216],T2Pcst(cgtz)))))))
                    let jsxtnm279
                    // LCSRCsome1(spelling.dats)@(989(line=73,offs=1)--1001(line=73,offs=13))
                    // I0Etapq(I0Ecst(gasq_strmize(599)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gasq001.sats)@(1638(line=60,offs=1)--1650(line=60,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
                    // T1IMPallx(gasq_strmize(599);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2169(line=98,offs=1)--2394(line=118,offs=4)))
                    // T1IMPallx(gasq_strmize(599)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6447],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[6448],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gasq_strmize(599);$list(@(xs[1876],T2Pvar(xs[6447])),@(x0[1877],T2Pvar(x0[6448])))))))
                    let jsxtnm278 = function (arg1) { // timp: gasq_strmize(599)
                      let jsxtnm204 = arg1
                      // I1CMP:start
                      let jsxtnm277 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2226(line=104,offs=1)--2259(line=106,offs=13)))
                        // I1VALDCL
                        let jsxtnm212
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2235(line=105,offs=1)--2246(line=105,offs=12))
                        // I0Etapq(I0Ecst(gasq_length(588)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gasq000.sats)@(1495(line=47,offs=1)--1506(line=47,offs=12))));$list(T2JAG($list(T2Pvar(xs[6447]))),T2JAG($list(T2Pvar(x0[6448])))))
                        // T1IMPallx(gasq_length(588);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2584(line=128,offs=1)--2633(line=130,offs=29)))
                        // T1IMPallx(gasq_length(588)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gasq_length(588);$list(@(xs[1850],T2Pcst(strn)),@(x0[1851],T2Pcst(char)))))))
                        let jsxtnm210
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2620(line=130,offs=16)--2631(line=130,offs=27))
                        // I0Etapq(I0Ecst(strn_length(1030)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2709(line=131,offs=1)--2720(line=131,offs=12))));$list(T2JAG($list())))
                        // T1IMPallx(strn_length(1030);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1610(line=57,offs=1)--1756(line=69,offs=2)))
                        // T1IMPallx(strn_length(1030)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(1030);$list()))))
                        let jsxtnm209 = function (arg1) { // timp: strn_length(1030)
                          let jsxtnm205 = arg1
                          // I1CMP:start
                          let jsxtnm208 // let
                          { // let
                            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1692(line=65,offs=1)--1754(line=68,offs=31)))
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1700(line=66,offs=1)--1754(line=68,offs=31))
                            // I1FUNDCL
                            // XATS2JS_strn_length_1703
                              // FJARGdarg($list(I1BNDcons(I1TNM(206);I0Pvar(cs(5204));$list(@(cs(5204),I1Vtnm(I1TNM(206)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                            let jsxtnm207 = XATSDAPP(XATS2JS_strn_length(jsxtnm205))
                            jsxtnm208 = jsxtnm207
                          } // endlet
                          // I1CMP:return:jsxtnm208
                          return jsxtnm208
                        } // endtimp(strn_length(1030))
                        jsxtnm210 = jsxtnm209
                        let jsxtnm211 = XATSDAPP(jsxtnm210(jsxtnm204))
                        jsxtnm212 = jsxtnm211
                        XATS000_patck(true)
                        let jsxtnm276 // let
                        { // let
                          // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2302(line=112,offs=1)--2388(line=116,offs=32)))
                          // I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pcst(ni)),@(y0[484],T2Pvar(x0[6448]))))):timp
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2270(line=109,offs=1)--2284(line=109,offs=15))
                          // I0Etapq(I0Ecst(nint_map_lstrm(961)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(4532(line=235,offs=1)--4546(line=235,offs=15))));$list(T2JAG($list(T2Pvar(x0[6448])))))
                          // T1IMPallx(nint_map_lstrm(961);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5537(line=350,offs=1)--5804(line=371,offs=2)))
                          // T1IMPallx(nint_map_lstrm(961)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(y0[7165],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(nint_map_lstrm(961);$list(@(y0[2843],T2Pvar(y0[7165])))))))
                          let jsxtnm274 = function (arg1) { // timp: nint_map_lstrm(961)
                            let jsxtnm215 = arg1
                            // I1CMP:start
                            let jsxtnm273 // let
                            { // let
                              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5606(line=357,offs=1)--5802(line=370,offs=2)))
                              // I1FUNDCL
                              function auxmain_5609(arg1)
                              { // fun
                                let jsxtnm216 = arg1
                                // I1CMP:start
                                let jsxtnm271 = XATS000_l1azy(function (tlaz) { // l1azy
                                  // I1CMP:start
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5660(line=363,offs=5)--5662(line=363,offs=7))
                                  // I0Etapq(I0Ecst(sint_gte$sint(922)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
                                  // T1IMPallx(sint_gte$sint(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                                  // T1IMPallx(sint_gte$sint(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(922);$list()))))
                                  let jsxtnm223 = function (arg1, arg2) { // timp: sint_gte$sint(922)
                                    let jsxtnm217 = arg1
                                    let jsxtnm218 = arg2
                                    // I1CMP:start
                                    let jsxtnm222 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                                      // I1FUNDCL
                                      // XATS2JS_sint_gte$sint_2399
                                        // FJARGdarg($list(I1BNDcons(I1TNM(219);I0Pvar(i1(5042));$list(@(i1(5042),I1Vtnm(I1TNM(219))))),I1BNDcons(I1TNM(220);I0Pvar(i2(5043));$list(@(i2(5043),I1Vtnm(I1TNM(220)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                                      let jsxtnm221 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm217, jsxtnm218))
                                      jsxtnm222 = jsxtnm221
                                    } // endlet
                                    // I1CMP:return:jsxtnm222
                                    return jsxtnm222
                                  } // endtimp(sint_gte$sint(922))
                                  let jsxtnm224 = XATSDAPP(jsxtnm223(jsxtnm216, jsxtnm215))
                                  let jsxtnm270 // ift
                                  if (jsxtnm224) // ift
                                  {
                                    let jsxtnm225 = XATSCAPP("strmcon_vt_nil", [0])
                                    jsxtnm270 = jsxtnm225
                                  } else {
                                    let jsxtnm269 // let
                                    { // let
                                      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5698(line=366,offs=1)--5727(line=367,offs=21)))
                                      // I1VALDCL
                                      let jsxtnm258
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5707(line=367,offs=1)--5715(line=367,offs=9))
                                      // I0Etapq(I0Ecst(map$fopr(75)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(3732(line=232,offs=1)--3740(line=232,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Pvar(y0[7165])))))
                                      // T1IMPallx(map$fopr(75);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2302(line=112,offs=1)--2388(line=116,offs=32)))
                                      // T1IMPallx(map$fopr(75)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6447],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[6448],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pcst(ni)),@(y0[484],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))
                                      let jsxtnm256 = function (arg1) { // timp: map$fopr(75)
                                        let jsxtnm226 = arg1
                                        // I1CMP:start
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2340(line=115,offs=5)--2356(line=115,offs=21))
                                        // I0Etapq(I0Ecst(gasq_cget$at$raw(2339)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4087(line=241,offs=1)--4103(line=241,offs=17))));$list(T2JAG($list(T2Pvar(xs[6447]))),T2JAG($list(T2Pvar(x0[6448])))))
                                        // T1IMPallx(gasq_cget$at$raw(2339);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2236(line=148,offs=1)--2442(line=165,offs=2)))
                                        // T1IMPallx(gasq_cget$at$raw(2339)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5862],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[5863],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gasq_cget$at$raw(2339);$list(@(xs[5682],T2Pxtv([T2Pvar(xs[5862])])),@(x0[5683],T2Pxtv([T2Pvar(x0[5863])])))))))
                                        let jsxtnm254 = function (arg1, arg2) { // timp: gasq_cget$at$raw(2339)
                                          let jsxtnm227 = arg1
                                          let jsxtnm228 = arg2
                                          // I1CMP:start
                                          let jsxtnm253 // let
                                          { // let
                                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2383(line=162,offs=1)--2440(line=164,offs=40)))
                                            // I1VALDCL
                                            let jsxtnm245
                                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2407(line=164,offs=7)--2423(line=164,offs=23))
                                            // I0Etapq(I0Ecst(gasq_lget$at$raw(2341)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4218(line=252,offs=1)--4234(line=252,offs=17))));$list(T2JAG($list(T2Pvar(xs[5862]))),T2JAG($list(T2Pvar(x0[5863])))))
                                            // T1IMPallx(gasq_lget$at$raw(2341);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(6912(line=452,offs=1)--7056(line=459,offs=4)))
                                            // T1IMPallx(gasq_lget$at$raw(2341)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gasq_lget$at$raw(2341);$list(@(xs[5686],T2Pcst(strn)),@(x0[5687],T2Pcst(cgtz)))))))
                                            let jsxtnm243 = function (arg1, arg2) { // timp: gasq_lget$at$raw(2341)
                                              let jsxtnm229 = arg1
                                              let jsxtnm230 = arg2
                                              // I1CMP:start
                                              let jsxtnm242 // let
                                              { // let
                                                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(6973(line=456,offs=1)--7011(line=457,offs=30)))
                                                // I1VALDCL
                                                let jsxtnm239
                                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(6986(line=457,offs=5)--7001(line=457,offs=20))
                                                // I0Etapq(I0Ecst(strn_get$at$raw(2345)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4484(line=273,offs=1)--4499(line=273,offs=16))));$list(T2JAG($list())))
                                                // T1IMPallx(strn_get$at$raw(2345);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
                                                // T1IMPallx(strn_get$at$raw(2345)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(2345);$list()))))
                                                let jsxtnm237 = function (arg1, arg2) { // timp: strn_get$at$raw(2345)
                                                  let jsxtnm231 = arg1
                                                  let jsxtnm232 = arg2
                                                  // I1CMP:start
                                                  let jsxtnm236 // let
                                                  { // let
                                                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
                                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
                                                    // I1FUNDCL
                                                    // XATS000_strn_get$at$raw_2309
                                                      // FJARGdarg($list(I1BNDcons(I1TNM(233);I0Pvar(cs(3280));$list(@(cs(3280),I1Vtnm(I1TNM(233))))),I1BNDcons(I1TNM(234);I0Pvar(i0(3281));$list(@(i0(3281),I1Vtnm(I1TNM(234)))))))
                                                      // I1CMP:start
                                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                                                    let jsxtnm235 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm231, jsxtnm232))
                                                    jsxtnm236 = jsxtnm235
                                                  } // endlet
                                                  // I1CMP:return:jsxtnm236
                                                  return jsxtnm236
                                                } // endtimp(strn_get$at$raw(2345))
                                                let jsxtnm238 = XATSDAPP(jsxtnm237(jsxtnm229, jsxtnm230))
                                                jsxtnm239 = jsxtnm238
                                                XATS000_patck(true)
                                                // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(7012(line=458,offs=1)--7041(line=458,offs=30)))
                                                // I1VALDCL
                                                // I1BNDcons(I1TNM(241);I0Pvar(pf(2228));$list(@(pf(2228),I1Vtnm(I1TNM(241)))))
                                                // I1CMP:start
                                                // I1LETnew1(I1TNM(240);...)
                                                  // I1INSdapp(I1Vcst(owed_t0_make(4));$list())
                                                // I1CMP(ival):I1Vtnm(I1TNM(240)) // I1CMP:return
                                                jsxtnm242 = jsxtnm239
                                              } // endlet
                                              // I1CMP:return:jsxtnm242
                                              return jsxtnm242
                                            } // endtimp(gasq_lget$at$raw(2341))
                                            let jsxtnm244 = XATSDAPP(jsxtnm243(jsxtnm227, jsxtnm228))
                                            jsxtnm245 = jsxtnm244
                                            XATS000_patck(true)
                                            let jsxtnm252 // let
                                            { // let
                                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2302(line=155,offs=1)--2325(line=155,offs=24)))
                                              // I1VALDCL
                                              let jsxtnm249
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2311(line=155,offs=10)--2317(line=155,offs=16))
                                              // I0Etapq(I0Ecst(g_copy(24)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1621(line=59,offs=1)--1627(line=59,offs=7))));$list(T2JAG($list(T2Pvar(x0[5863])))))
                                              // T1IMPallx(g_copy(24);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1673(line=62,offs=1)--1713(line=64,offs=22)))
                                              // T1IMPallx(g_copy(24)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5628],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_copy(24);$list(@(a[419],T2Pvar(x0[5628])))))))
                                              let jsxtnm247 = function (arg1) { // timp: g_copy(24)
                                                let jsxtnm246 = arg1
                                                // I1CMP:start
                                                // I1CMP:return:jsxtnm246
                                                return jsxtnm246
                                              } // endtimp(g_copy(24))
                                              let jsxtnm248 = XATSDAPP(jsxtnm247(jsxtnm245))
                                              jsxtnm249 = jsxtnm248
                                              XATS000_patck(true)
                                              // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2329(line=157,offs=1)--2364(line=159,offs=25)))
                                              // I1VALDCL
                                              // I1BNDcons(I1TNM(251);I0Ptup0($list());$list())
                                              // I1CMP:start
                                              // I1LETnew1(I1TNM(250);...)
                                                // I1INSdapp(I1Vcst(owed_vt_return0(6));$list(I1Vnone0(),I1Vtnm(I1TNM(249))))
                                              // I1CMP(ival):I1Vtnm(I1TNM(250)) // I1CMP:return
                                              jsxtnm252 = jsxtnm245
                                            } // endlet
                                            jsxtnm253 = jsxtnm252
                                          } // endlet
                                          // I1CMP:return:jsxtnm253
                                          return jsxtnm253
                                        } // endtimp(gasq_cget$at$raw(2339))
                                        let jsxtnm255 = XATSDAPP(jsxtnm254(jsxtnm204, jsxtnm226))
                                        // I1CMP:return:jsxtnm255
                                        return jsxtnm255
                                      } // endtimp(map$fopr(75))
                                      let jsxtnm257 = XATSDAPP(jsxtnm256(jsxtnm216))
                                      jsxtnm258 = jsxtnm257
                                      XATS000_patck(true)
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5766(line=368,offs=31)--5767(line=368,offs=32))
                                      // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                                      // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                      // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                                      let jsxtnm265 = function (arg1, arg2) { // timp: sint_add$sint(925)
                                        let jsxtnm259 = arg1
                                        let jsxtnm260 = arg2
                                        // I1CMP:start
                                        let jsxtnm264 // let
                                        { // let
                                          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                          // I1FUNDCL
                                          // XATS2JS_sint_add$sint_2778
                                            // FJARGdarg($list(I1BNDcons(I1TNM(261);I0Pvar(i1(5052));$list(@(i1(5052),I1Vtnm(I1TNM(261))))),I1BNDcons(I1TNM(262);I0Pvar(i2(5053));$list(@(i2(5053),I1Vtnm(I1TNM(262)))))))
                                            // I1CMP:start
                                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                          let jsxtnm263 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm259, jsxtnm260))
                                          jsxtnm264 = jsxtnm263
                                        } // endlet
                                        // I1CMP:return:jsxtnm264
                                        return jsxtnm264
                                      } // endtimp(sint_add$sint(925))
                                      let jsxtnm266 = XATSDAPP(jsxtnm265(jsxtnm216, XATSINT1(1)))
                                      let jsxtnm267 = XATSDAPP(auxmain_5609(jsxtnm266))
                                      let jsxtnm268 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm258, jsxtnm267])
                                      jsxtnm269 = jsxtnm268
                                    } // endlet
                                    jsxtnm270 = jsxtnm269
                                  } // end(if)
                                  // I1CMP:return:jsxtnm270
                                  return jsxtnm270
                                }) // endfun(l1azy)
                                // I1CMP:return:jsxtnm271
                                return jsxtnm271
                              } // endfun(auxmain_5609)
                              let jsxtnm272 = XATSDAPP(auxmain_5609(XATSINT1(0)))
                              jsxtnm273 = jsxtnm272
                            } // endlet
                            // I1CMP:return:jsxtnm273
                            return jsxtnm273
                          } // endtimp(nint_map_lstrm(961))
                          let jsxtnm275 = XATSDAPP(jsxtnm274(jsxtnm212))
                          jsxtnm276 = jsxtnm275
                        } // endlet
                        jsxtnm277 = jsxtnm276
                      } // endlet
                      // I1CMP:return:jsxtnm277
                      return jsxtnm277
                    } // endtimp(gasq_strmize(599))
                    jsxtnm279 = jsxtnm278
                    let jsxtnm280 = XATSDAPP(jsxtnm279(jsxtnm203))
                    jsxtnm281 = jsxtnm280
                    XATS000_patck(true)
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1993(line=79,offs=3)--2025(line=79,offs=35))
                    // I0Etapq(I0Ecst(strm_vt_segmentize0_lstrm$rllist(2280)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1796(line=71,offs=1)--1828(line=71,offs=33))));$list(T2JAG($list(T2Pvar(x0[8847])))))
                    // T1IMPallx(strm_vt_segmentize0_lstrm$rllist(2280);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2114(line=84,offs=1)--2812(line=140,offs=2)))
                    // T1IMPallx(strm_vt_segmentize0_lstrm$rllist(2280)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8848],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_segmentize0_lstrm$rllist(2280);$list(@(x0[5610],T2Pvar(x0[8848])))))))
                    let jsxtnm320 = function (arg1) { // timp: strm_vt_segmentize0_lstrm$rllist(2280)
                      let jsxtnm282 = arg1
                      // I1CMP:start
                      let jsxtnm319 // let
                      { // let
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2207(line=92,offs=1)--2232(line=92,offs=26))
                        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(xs;S2Eapps(S2Ecst(strm_vt);$list(S2Evar(x0[8848])))))))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2233(line=93,offs=1)--2258(line=93,offs=26))
                        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rs;S2Eapps(S2Ecst(list_vt);$list(S2Evar(x0[8848])))))))
                        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2262(line=95,offs=1)--2770(line=138,offs=2)))
                        // I1FUNDCL
                        function auxmain_2265(arg1)
                        { // fun
                          let jsxtnm283 = arg1
                          // I1CMP:start
                          let jsxtnm286 = XATS000_l1azy(function (tlaz) { // l1azy
                            // I1CMP:start
                            let jsxtnm284 = XATSCAPP("list_vt_nil", [0])
                            let jsxtnm285 = XATSDAPP(auxloop_2339(jsxtnm283, jsxtnm284))
                            // I1CMP:return:jsxtnm285
                            return jsxtnm285
                          }) // endfun(l1azy)
                          // I1CMP:return:jsxtnm286
                          return jsxtnm286
                        } // endfun(auxmain_2265)
                        // I1FUNDCL
                        function auxloop_2339(arg1, arg2)
                        { // fun
                          let jsxtnm287 = arg1
                          let jsxtnm288 = arg2
                          // I1CMP:start
                          let jsxtnm289 = XATS000_dl1az(jsxtnm287)
                          let jsxtnm317 // cas
                          do {
                            // { // cls
                            // I1GPTpat(I1BNDcons(I1TNM(290);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                            if (XATS000_ctgeq(jsxtnm289, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                              let jsxtnm290 = jsxtnm289
                              let jsxtnm302 // cas
                              do {
                                // { // cls
                                // I1GPTpat(I1BNDcons(I1TNM(291);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                                if (XATS000_ctgeq(jsxtnm288, XATSCTAG("list_vt_nil",0))) { // gpt
                                  let jsxtnm291 = jsxtnm288
                                  let jsxtnm292 = XATSCAPP("strmcon_vt_nil", [0])
                                  jsxtnm302 = jsxtnm292
                                  break // cls
                                } // gpt
                                // } // cls
                                // { // cls
                                // I1GPTpat(I1BNDcons(I1TNM(293);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
                                if (XATS000_ctgeq(jsxtnm288, XATSCTAG("list_vt_cons",1))) { // gpt
                                  let jsxtnm293 = jsxtnm288
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2525(line=120,offs=3)--2540(line=120,offs=18))
                                  // I0Etapq(I0Ecst(strmcon_vt_sing(2119)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1656(line=62,offs=1)--1671(line=62,offs=16))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8848]),T2Pnone0()))))))
                                  // T1IMPallx(strmcon_vt_sing(2119);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1849(line=78,offs=1)--1928(line=83,offs=21)))
                                  // T1IMPallx(strmcon_vt_sing(2119)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8527],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strmcon_vt_sing(2119);$list(@(x0[5376],T2Pvar(a[8527])))))))
                                  let jsxtnm300 = function (arg1) { // timp: strmcon_vt_sing(2119)
                                    let jsxtnm294 = arg1
                                    // I1CMP:start
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1913(line=83,offs=6)--1924(line=83,offs=17))
                                    // I0Etapq(I0Ecst(strm_vt_nil(2115)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1422(line=42,offs=1)--1433(line=42,offs=12))));$list(T2JAG($list())))
                                    // T1IMPallx(strm_vt_nil(2115);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1708(line=66,offs=1)--1771(line=70,offs=21)))
                                    // T1IMPallx(strm_vt_nil(2115)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strm_vt_nil(2115);$list()))))
                                    let jsxtnm297 = function () { // timp: strm_vt_nil(2115)
                                      // I1CMP:start
                                      let jsxtnm296 = XATS000_l1azy(function (tlaz) { // l1azy
                                        // I1CMP:start
                                        let jsxtnm295 = XATSCAPP("strmcon_vt_nil", [0])
                                        // I1CMP:return:jsxtnm295
                                        return jsxtnm295
                                      }) // endfun(l1azy)
                                      // I1CMP:return:jsxtnm296
                                      return jsxtnm296
                                    } // endtimp(strm_vt_nil(2115))
                                    let jsxtnm298 = XATSDAPP(jsxtnm297())
                                    let jsxtnm299 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm294, jsxtnm298])
                                    // I1CMP:return:jsxtnm299
                                    return jsxtnm299
                                  } // endtimp(strmcon_vt_sing(2119))
                                  let jsxtnm301 = XATSDAPP(jsxtnm300(jsxtnm288))
                                  jsxtnm302 = jsxtnm301
                                  break // cls
                                } // gpt
                                // } // cls
                                XATS000_cfail()
                              } while (false) // end-of(do)
                              jsxtnm317 = jsxtnm302
                              break // cls
                            } // gpt
                            // } // cls
                            // { // cls
                            // I1GPTpat(I1BNDcons(I1TNM(303);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4824)),I0Pvar(xs(4825)))));$list(@(x1(4824),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(303));0)),@(xs(4825),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(303));1)))))
                            if (XATS000_ctgeq(jsxtnm289, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                              let jsxtnm303 = jsxtnm289
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2598(line=127,offs=1)--2612(line=127,offs=15))
                              // I0Etapq(I0Ecst(segment$delim1(2277)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1504(line=49,offs=1)--1518(line=49,offs=15))));$list(T2JAG($list(T2Pvar(x0[8848])))))
                              // T1IMPallx(segment$delim1(2277);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2972(line=151,offs=1)--3006(line=152,offs=26)))
                              // T1IMPallx(segment$delim1(2277)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8849],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8850],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(segment$delim1(2277);$list(@(x0[5605],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))
                              let jsxtnm304
                              jsxtnm304 = jsxtnm167
                              let jsxtnm305 = XATSDAPP(jsxtnm304(XATSP1CN("strmcon_vt_cons", jsxtnm303[0+1])))
                              let jsxtnm316 // ift
                              if (jsxtnm305) // ift
                              {
                                let jsxtnm313 // let
                                { // let
                                  // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2630(line=130,offs=1)--2653(line=131,offs=15)))
                                  // I1VALDCL
                                  let jsxtnm310
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2639(line=131,offs=1)--2645(line=131,offs=7))
                                  // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1591(line=56,offs=1)--1597(line=56,offs=7))));$list(T2JAG($list(T2Pvar(x0[8848])))))
                                  // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
                                  // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5627],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[418],T2Pvar(x0[5627])))))))
                                  let jsxtnm308 = function (arg1) { // timp: g_free(23)
                                    let jsxtnm306 = arg1
                                    // I1CMP:start
                                    let jsxtnm307 = XATSTUP0([])
                                    // I1CMP:return:jsxtnm307
                                    return jsxtnm307
                                  } // endtimp(g_free(23))
                                  let jsxtnm309 = XATSDAPP(jsxtnm308(XATSP1CN("strmcon_vt_cons", jsxtnm303[0+1])))
                                  jsxtnm310 = jsxtnm309
                                  XATS000_patck(true)
                                  let jsxtnm311 = XATSDAPP(auxmain_2265(XATSP1CN("strmcon_vt_cons", jsxtnm303[1+1])))
                                  let jsxtnm312 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm288, jsxtnm311])
                                  jsxtnm313 = jsxtnm312
                                } // endlet
                                jsxtnm316 = jsxtnm313
                              } else {
                                let jsxtnm314 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm303[0+1]), jsxtnm288])
                                let jsxtnm315 = XATSDAPP(auxloop_2339(XATSP1CN("strmcon_vt_cons", jsxtnm303[1+1]), jsxtnm314))
                                jsxtnm316 = jsxtnm315
                              } // end(if)
                              jsxtnm317 = jsxtnm316
                              break // cls
                            } // gpt
                            // } // cls
                            XATS000_cfail()
                          } while (false) // end-of(do)
                          // I1CMP:return:jsxtnm317
                          return jsxtnm317
                        } // endfun(auxloop_2339)
                        let jsxtnm318 = XATSDAPP(auxmain_2265(jsxtnm282))
                        jsxtnm319 = jsxtnm318
                      } // endlet
                      // I1CMP:return:jsxtnm319
                      return jsxtnm319
                    } // endtimp(strm_vt_segmentize0_lstrm$rllist(2280))
                    let jsxtnm321 = XATSDAPP(jsxtnm320(jsxtnm281))
                    jsxtnm322 = jsxtnm321
                  } // endlet
                  // I1CMP:return:jsxtnm322
                  return jsxtnm322
                } // endtimp(gseq_segmentize0_lstrm$rllist(2279))
                let jsxtnm324 = XATSDAPP(jsxtnm323(jsxtnm168))
                let jsxtnm325 = XATSDAPP(jsxtnm202(jsxtnm324))
                jsxtnm326 = jsxtnm325
              } // endlet
              // I1CMP:return:jsxtnm326
              return jsxtnm326
            } // endtimp(gseq_segmentize0_lstrm$llist(2278))
            let jsxtnm328 = XATSDAPP(jsxtnm327(jsxtnm166))
            jsxtnm329 = jsxtnm328
          } // endlet
          // I1CMP:return:jsxtnm329
          return jsxtnm329
        } // endtimp(gseq_segmentize0$f1un_lstrm$llist(2281))
        let jsxtnm340 = function (arg1) { // lam0(T_LAM(0))
          let jsxtnm331 = arg1
          // I1CMP:start
          // LCSRCsome1(spelling.dats)@(1492(line=107,offs=62)--1493(line=107,offs=63))
          // I0Etapq(I0Ecst(char_eq(888)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3373(line=176,offs=1)--3380(line=176,offs=8))));$list(T2JAG($list())))
          // T1IMPallx(char_eq(888);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1772(line=72,offs=1)--1916(line=84,offs=2)))
          // T1IMPallx(char_eq(888)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_eq(888);$list()))))
          let jsxtnm338 = function (arg1, arg2) { // timp: char_eq(888)
            let jsxtnm332 = arg1
            let jsxtnm333 = arg2
            // I1CMP:start
            let jsxtnm337 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1848(line=80,offs=1)--1914(line=83,offs=39)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1856(line=81,offs=1)--1914(line=83,offs=39))
              // I1FUNDCL
              // XATS2JS_char_eq_1859
                // FJARGdarg($list(I1BNDcons(I1TNM(334);I0Pvar(c1(4980));$list(@(c1(4980),I1Vtnm(I1TNM(334))))),I1BNDcons(I1TNM(335);I0Pvar(c2(4981));$list(@(c2(4981),I1Vtnm(I1TNM(335)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_eq);G1Nlist($list())) // I1CMP:return
              let jsxtnm336 = XATSDAPP(XATS2JS_char_eq(jsxtnm332, jsxtnm333))
              jsxtnm337 = jsxtnm336
            } // endlet
            // I1CMP:return:jsxtnm337
            return jsxtnm337
          } // endtimp(char_eq(888))
          let jsxtnm339 = XATSDAPP(jsxtnm338(jsxtnm331, XATSCHR2('\n')))
          // I1CMP:return:jsxtnm339
          return jsxtnm339
        } // endfun(lam0)
        let jsxtnm341 = XATSDAPP(jsxtnm330(jsxtnm165, jsxtnm340))
        jsxtnm342 = jsxtnm341
        XATS000_patck(true)
        // LCSRCsome1(spelling.dats)@(1286(line=97,offs=1)--1303(line=97,offs=18))
        // I0Etapq(I0Ecst(strm_vt_map0$f1un(2178)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5605(line=289,offs=1)--5622(line=289,offs=18))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
        // T1IMPallx(strm_vt_map0$f1un(2178);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4356(line=239,offs=1)--4501(line=250,offs=2)))
        // T1IMPallx(strm_vt_map0$f1un(2178)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8577],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8578],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0$f1un(2178);$list(@(x0[5453],T2Pxtv([T2Pvar(x0[8577])])),@(y0[5454],T2Pxtv([T2Pvar(y0[8578])])))))))
        let jsxtnm362 = function (arg1, arg2) { // timp: strm_vt_map0$f1un(2178)
          let jsxtnm343 = arg1
          let jsxtnm344 = arg2
          // I1CMP:start
          let jsxtnm361 // let
          { // let
            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4454(line=248,offs=1)--4493(line=249,offs=31)))
            // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pvar(x0[8577])),@(y0[3807],T2Pvar(y0[8578]))))):timp
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4420(line=245,offs=1)--4432(line=245,offs=13))
            // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Pvar(x0[8577]))),T2JAG($list(T2Pvar(y0[8578])))))
            // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
            // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8575],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8576],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8575])),@(y0[5444],T2Pvar(y0[8576])))))))
            let jsxtnm359 = function (arg1) { // timp: strm_vt_map0(2174)
              let jsxtnm345 = arg1
              // I1CMP:start
              let jsxtnm358 // let
              { // let
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
                // I1FUNDCL
                function auxmain_4114(arg1)
                { // fun
                  let jsxtnm346 = arg1
                  // I1CMP:start
                  let jsxtnm356 = XATS000_l1azy(function (tlaz) { // l1azy
                    // I1CMP:start
                    let jsxtnm347 = XATS000_dl1az(jsxtnm346)
                    let jsxtnm355 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(348);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm347, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                        let jsxtnm348 = jsxtnm347
                        let jsxtnm349 = XATSCAPP("strmcon_vt_nil", [0])
                        jsxtnm355 = jsxtnm349
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(350);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4467)),I0Pvar(xs(4468)))));$list(@(x1(4467),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(350));0)),@(xs(4468),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(350));1)))))
                      if (XATS000_ctgeq(jsxtnm347, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                        let jsxtnm350 = jsxtnm347
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                        // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8575]))),T2JAG($list(T2Pvar(y0[8576])))))
                        // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4454(line=248,offs=1)--4493(line=249,offs=31)))
                        // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8577],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8578],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[3807],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                        let jsxtnm351
                        jsxtnm351 = jsxtnm344
                        let jsxtnm352 = XATSDAPP(jsxtnm351(XATSP1CN("strmcon_vt_cons", jsxtnm350[0+1])))
                        let jsxtnm353 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm350[1+1])))
                        let jsxtnm354 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm352, jsxtnm353])
                        jsxtnm355 = jsxtnm354
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm355
                    return jsxtnm355
                  }) // endfun(l1azy)
                  // I1CMP:return:jsxtnm356
                  return jsxtnm356
                } // endfun(auxmain_4114)
                let jsxtnm357 = XATSDAPP(auxmain_4114(jsxtnm345))
                jsxtnm358 = jsxtnm357
              } // endlet
              // I1CMP:return:jsxtnm358
              return jsxtnm358
            } // endtimp(strm_vt_map0(2174))
            let jsxtnm360 = XATSDAPP(jsxtnm359(jsxtnm343))
            jsxtnm361 = jsxtnm360
          } // endlet
          // I1CMP:return:jsxtnm361
          return jsxtnm361
        } // endtimp(strm_vt_map0$f1un(2178))
        let jsxtnm384 = function (arg1) { // lam0(T_LAM(0))
          let jsxtnm363 = arg1
          // I1CMP:start
          // LCSRCsome1(spelling.dats)@(1324(line=97,offs=39)--1339(line=97,offs=54))
          // I0Etapq(I0Ecst(strn_make_llist(1048)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(5050(line=299,offs=1)--5065(line=299,offs=16))));$list(T2JAG($list())))
          // T1IMPallx(strn_make_llist(1048);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5741(line=361,offs=1)--6020(line=385,offs=4)))
          // T1IMPallx(strn_make_llist(1048)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_make_llist(1048);$list()))))
          let jsxtnm382 = function (arg1) { // timp: strn_make_llist(1048)
            let jsxtnm364 = arg1
            // I1CMP:start
            let jsxtnm381 // let
            { // let
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5794(line=367,offs=1)--5822(line=368,offs=20))
              // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(env;S2Eapps(S2Ecst(list_vt);$list(S2Ecst(cgtz)))))))
              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5826(line=370,offs=1)--5962(line=379,offs=29)))
              // I1FUNDCL
              function fwork_5829(arg1, arg2)
              { // fun
                let jsxtnm365 = arg1
                let jsxtnm366 = arg2
                // I1CMP:start
                let jsxtnm372 // cas
                do {
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(367);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                  if (XATS000_ctgeq(jsxtnm365, XATSCTAG("list_vt_nil",0))) { // gpt
                    let jsxtnm367 = jsxtnm365
                    let jsxtnm368 = XATSTUP0([])
                    jsxtnm372 = jsxtnm368
                    break // cls
                  } // gpt
                  // } // cls
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(369);I0Pfree(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(c1(2209)),I0Pvar(cs(2210)))));$list(@(c1(2209),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(369));0)),@(cs(2210),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(369));1)))))
                  if (XATS000_ctgeq(jsxtnm365, XATSCTAG("list_vt_cons",1))) { // gpt
                    let jsxtnm369 = jsxtnm365
                    let jsxtnm370 = XATSDAPP(jsxtnm366(XATSP1CN("list_vt_cons", jsxtnm369[0+1])))
                    let jsxtnm371 = XATSDAPP(fwork_5829(XATSP1CN("list_vt_cons", jsxtnm369[1+1]), jsxtnm366))
                    jsxtnm372 = jsxtnm371
                    break // cls
                  } // gpt
                  // } // cls
                  XATS000_cfail()
                } while (false) // end-of(do)
                // I1CMP:return:jsxtnm372
                return jsxtnm372
              } // endfun(fwork_5829)
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5979(line=384,offs=1)--5999(line=384,offs=21))
              // I0Etapq(I0Ecst(strn_fmake_env$fwork(1080)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn001.sats)@(4184(line=190,offs=1)--4204(line=190,offs=21))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))))))
              // T1IMPallx(strn_fmake_env$fwork(1080);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2764(line=149,offs=1)--2980(line=162,offs=2)))
              // T1IMPallx(strn_fmake_env$fwork(1080)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(env[7657],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strn_fmake_env$fwork(1080);$list(@(env[2886],T2Pvar(env[7657])))))))
              let jsxtnm379 = function (arg1, arg2) { // timp: strn_fmake_env$fwork(1080)
                let jsxtnm373 = arg1
                let jsxtnm374 = arg2
                // I1CMP:start
                let jsxtnm378 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2875(line=157,offs=1)--2978(line=161,offs=52)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2883(line=158,offs=1)--2978(line=161,offs=52))
                  // I1FUNDCL
                  // XATS000_strn_fmake_env$fwork_2886
                    // FJARGdarg($list(I1BNDcons(I1TNM(375);I0Pvar(env(3288));$list(@(env(3288),I1Vtnm(I1TNM(375))))),I1BNDcons(I1TNM(376);I0Pvar(fwork(3289));$list(@(fwork(3289),I1Vtnm(I1TNM(376)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_fmake_env$fwork);G1Nlist($list())) // I1CMP:return
                  let jsxtnm377 = XATSDAPP(XATS000_strn_fmake_env$fwork(jsxtnm373, jsxtnm374))
                  jsxtnm378 = jsxtnm377
                } // endlet
                // I1CMP:return:jsxtnm378
                return jsxtnm378
              } // endtimp(strn_fmake_env$fwork(1080))
              let jsxtnm380 = XATSDAPP(jsxtnm379(jsxtnm364, fwork_5829))
              jsxtnm381 = jsxtnm380
            } // endlet
            // I1CMP:return:jsxtnm381
            return jsxtnm381
          } // endtimp(strn_make_llist(1048))
          let jsxtnm383 = XATSDAPP(jsxtnm382(jsxtnm363))
          // I1CMP:return:jsxtnm383
          return jsxtnm383
        } // endfun(lam0)
        let jsxtnm385 = XATSDAPP(jsxtnm362(jsxtnm342, jsxtnm384))
        jsxtnm386 = jsxtnm385
      } // endlet
      // I1CMP:return:jsxtnm386
      return jsxtnm386
    } // endfun(dict_line$split_1236)
    let jsxtnm390 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(spelling.dats)@(1082(line=81,offs=1)--1110(line=82,offs=20)))
      // I1VALDCL
      let jsxtnm388
      let jsxtnm387 = XATSDAPP(dict_line$split_1236(jsxtnm162))
      jsxtnm388 = jsxtnm387
      XATS000_patck(true)
      let jsxtnm389 = XATSDAPP(spelling$filter_505(jsxtnm388, jsxtnm163, jsxtnm164))
      jsxtnm390 = jsxtnm389
    } // endlet
    jsxtnm391 = jsxtnm390
  } // endlet
  // I1CMP:return:jsxtnm391
  return jsxtnm391
} // endfun(impl)
// I1Dimplmnt0(LCSRCsome1(spelling.dats)@(1636(line=115,offs=1)--1911(line=143,offs=2)))
let spelling$filter_505 = function (arg1, arg2, arg3) { // impl
  let jsxtnm392 = arg1
  let jsxtnm393 = arg2
  let jsxtnm394 = arg3
  // I1CMP:start
  let jsxtnm436 // let
  { // let
    // I1Dimplmnt0(LCSRCsome1(spelling.dats)@(1710(line=123,offs=1)--1906(line=141,offs=2)))
    // I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Pcst(strn))))):timp
    // LCSRCsome1(spelling.dats)@(1678(line=119,offs=1)--1693(line=119,offs=16))
    // I0Etapq(I0Ecst(strm_vt_filter0(2182)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(6654(line=333,offs=1)--6669(line=333,offs=16))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
    // T1IMPallx(strm_vt_filter0(2182);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(1980(line=78,offs=1)--2183(line=91,offs=4)))
    // T1IMPallx(strm_vt_filter0(2182)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8868],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_filter0(2182);$list(@(x0[5463],T2Pvar(x0[8868])))))))
    let jsxtnm434 = function (arg1) { // timp: strm_vt_filter0(2182)
      let jsxtnm403 = arg1
      // I1CMP:start
      let jsxtnm433 // let
      { // let
        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2032(line=83,offs=1)--2083(line=86,offs=24)))
        // I1FUNDCL
        function test_2035(arg1)
        { // fun
          let jsxtnm404 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2062(line=86,offs=3)--2074(line=86,offs=15))
          // I0Etapq(I0Ecst(filter$test1(1491)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(6554(line=466,offs=1)--6566(line=466,offs=13))));$list(T2JAG($list(T2Pvar(x0[8868])))))
          // T1IMPallx(filter$test1(1491);LCSRCsome1(spelling.dats)@(1710(line=123,offs=1)--1906(line=141,offs=2)))
          // T1IMPallx(filter$test1(1491)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Pcst(strn)))))))
          let jsxtnm425 = function (arg1) { // timp: filter$test1(1491)
            let jsxtnm405 = arg1
            // I1CMP:start
            let jsxtnm424 // let
            { // let
              // LCSRCsome1(spelling.dats)@(1764(line=129,offs=11)--1765(line=129,offs=12))
              // I0Etapq(I0Ecst(sint_lt$sint(918)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2041(line=83,offs=1)--2053(line=83,offs=13))));$list(T2JAG($list())))
              // T1IMPallx(sint_lt$sint(918);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1612(line=56,offs=1)--1773(line=68,offs=2)))
              // T1IMPallx(sint_lt$sint(918)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_lt$sint(918);$list()))))
              let jsxtnm412 = function (arg1, arg2) { // timp: sint_lt$sint(918)
                let jsxtnm406 = arg1
                let jsxtnm407 = arg2
                // I1CMP:start
                let jsxtnm411 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1700(line=64,offs=1)--1771(line=67,offs=39)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1708(line=65,offs=1)--1771(line=67,offs=39))
                  // I1FUNDCL
                  // XATS2JS_sint_lt$sint_1711
                    // FJARGdarg($list(I1BNDcons(I1TNM(408);I0Pvar(i1(5022));$list(@(i1(5022),I1Vtnm(I1TNM(408))))),I1BNDcons(I1TNM(409);I0Pvar(i2(5023));$list(@(i2(5023),I1Vtnm(I1TNM(409)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_lt$sint);G1Nlist($list())) // I1CMP:return
                  let jsxtnm410 = XATSDAPP(XATS2JS_sint_lt$sint(jsxtnm406, jsxtnm407))
                  jsxtnm411 = jsxtnm410
                } // endlet
                // I1CMP:return:jsxtnm411
                return jsxtnm411
              } // endtimp(sint_lt$sint(918))
              // LCSRCsome1(spelling.dats)@(1754(line=129,offs=1)--1760(line=129,offs=7))
              // I0Etapq(I0Ecst(strn_length(1030)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2709(line=131,offs=1)--2720(line=131,offs=12))));$list(T2JAG($list())))
              // T1IMPallx(strn_length(1030);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1610(line=57,offs=1)--1756(line=69,offs=2)))
              // T1IMPallx(strn_length(1030)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(1030);$list()))))
              let jsxtnm417 = function (arg1) { // timp: strn_length(1030)
                let jsxtnm413 = arg1
                // I1CMP:start
                let jsxtnm416 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1692(line=65,offs=1)--1754(line=68,offs=31)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1700(line=66,offs=1)--1754(line=68,offs=31))
                  // I1FUNDCL
                  // XATS2JS_strn_length_1703
                    // FJARGdarg($list(I1BNDcons(I1TNM(414);I0Pvar(cs(5204));$list(@(cs(5204),I1Vtnm(I1TNM(414)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                  let jsxtnm415 = XATSDAPP(XATS2JS_strn_length(jsxtnm413))
                  jsxtnm416 = jsxtnm415
                } // endlet
                // I1CMP:return:jsxtnm416
                return jsxtnm416
              } // endtimp(strn_length(1030))
              let jsxtnm418 = XATSDAPP(jsxtnm417(jsxtnm405))
              let jsxtnm419 = XATSDAPP(jsxtnm412(jsxtnm418, XATSINT1(6)))
              let jsxtnm423 // ift
              if (jsxtnm419) // ift
              {
                jsxtnm423 = XATSBOOL(false)
              } else {
                let jsxtnm420 = XATSDAPP(wtest1_629(jsxtnm405, jsxtnm393))
                let jsxtnm422 // ift
                if (jsxtnm420) // ift
                {
                  let jsxtnm421 = XATSDAPP(wtest2_779(jsxtnm405, jsxtnm394))
                  jsxtnm422 = jsxtnm421
                } else {
                  jsxtnm422 = XATSBOOL(false)
                } // end(if)
                jsxtnm423 = jsxtnm422
              } // end(if)
              jsxtnm424 = jsxtnm423
            } // endlet
            // I1CMP:return:jsxtnm424
            return jsxtnm424
          } // endtimp(filter$test1(1491))
          let jsxtnm426 = XATSDAPP(jsxtnm425(jsxtnm404))
          // I1CMP:return:jsxtnm426
          return jsxtnm426
        } // endfun(test_2035)
        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2084(line=87,offs=1)--2124(line=88,offs=37)))
        // I1FUNDCL
        function free_2087(arg1)
        { // fun
          let jsxtnm427 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2110(line=88,offs=23)--2116(line=88,offs=29))
          // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1591(line=56,offs=1)--1597(line=56,offs=7))));$list(T2JAG($list(T2Pvar(x0[8868])))))
          // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
          // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5627],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[418],T2Pvar(x0[5627])))))))
          let jsxtnm430 = function (arg1) { // timp: g_free(23)
            let jsxtnm428 = arg1
            // I1CMP:start
            let jsxtnm429 = XATSTUP0([])
            // I1CMP:return:jsxtnm429
            return jsxtnm429
          } // endtimp(g_free(23))
          let jsxtnm431 = XATSDAPP(jsxtnm430(jsxtnm427))
          // I1CMP:return:jsxtnm431
          return jsxtnm431
        } // endfun(free_2087)
        let jsxtnm432 = XATSDAPP(XATS2JS_strm_vt_filter0$f1un(jsxtnm403, test_2035, free_2087))
        jsxtnm433 = jsxtnm432
      } // endlet
      // I1CMP:return:jsxtnm433
      return jsxtnm433
    } // endtimp(strm_vt_filter0(2182))
    let jsxtnm435 = XATSDAPP(jsxtnm434(jsxtnm392))
    jsxtnm436 = jsxtnm435
  } // endlet
  // I1CMP:return:jsxtnm436
  return jsxtnm436
} // endfun(impl)
// LCSRCsome1(spelling.dats)@(2240(line=154,offs=1)--2240(line=154,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(spelling.dats)@(2240(line=154,offs=1)--2240(line=154,offs=1));D3Cnone0()))
// LCSRCsome1(JS_spelling.dats)@(41(line=3,offs=1)--82(line=4,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(UN);G1Estr(T_STRN1_clsd("prelude/SATS/unsfx00.sats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats));...)))
// LCSRCsome1(JS_spelling.dats)@(103(line=6,offs=1)--134(line=6,offs=32))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(SP);G1Estr(T_STRN1_clsd("./spelling.dats";17)));$optn(FPATH(spelling.dats));...)))
// I1Dinclude(LCSRCsome1(JS_spelling.dats)@(175(line=9,offs=1)--226(line=11,offs=33)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1487(line=46,offs=1)--1520(line=47,offs=25))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../SATS/pre2026.sats";24));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/SATS/pre2026.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1521(line=48,offs=1)--1560(line=49,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../SATS/VT/pre2026_vt.sats";30));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1607(line=54,offs=1)--1648(line=55,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/i1range.sats";32));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/SATS/i1range.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1649(line=56,offs=1)--1690(line=57,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/trec000.sats";32));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/SATS/trec000.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1737(line=62,offs=1)--1784(line=63,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/VT/strm000_vt.sats";38));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/SATS/VT/strm000_vt.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(1785(line=64,offs=1)--1832(line=65,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/SATS/VT/trec000_vt.sats";38));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/SATS/VT/trec000_vt.sats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(2093(line=73,offs=1)--2093(line=73,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_sats.hats)@(2093(line=73,offs=1)--2093(line=73,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(JS_spelling.dats)@(270(line=15,offs=1)--311(line=16,offs=33)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(244(line=17,offs=1)--291(line=19,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(292(line=20,offs=1)--339(line=22,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(340(line=23,offs=1)--387(line=25,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(414(line=29,offs=1)--461(line=31,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gdbg000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gdbg000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(488(line=35,offs=1)--541(line=37,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gbas000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(542(line=38,offs=1)--595(line=40,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gbas001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(767(line=51,offs=1)--807(line=51,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gxyz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gxyz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(854(line=56,offs=1)--894(line=56,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/unsfx00.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1038(line=65,offs=1)--1078(line=65,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gnum000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gnum000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1079(line=66,offs=1)--1119(line=66,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gord000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gord000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1120(line=67,offs=1)--1160(line=67,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gfun000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gfun000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1164(line=69,offs=1)--1204(line=69,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1205(line=70,offs=1)--1245(line=70,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1246(line=71,offs=1)--1286(line=71,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1290(line=73,offs=1)--1330(line=73,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasq000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1331(line=74,offs=1)--1371(line=74,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasq001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1372(line=75,offs=1)--1412(line=75,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasq002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1416(line=77,offs=1)--1456(line=77,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gmap000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gmap000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1457(line=78,offs=1)--1497(line=78,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gmap001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gmap001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1501(line=80,offs=1)--1541(line=80,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gcls000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gcls000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1542(line=81,offs=1)--1582(line=81,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1583(line=82,offs=1)--1623(line=82,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gsyn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1650(line=86,offs=1)--1690(line=86,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/bool000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1691(line=87,offs=1)--1731(line=87,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/char000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1732(line=88,offs=1)--1772(line=88,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1773(line=89,offs=1)--1813(line=89,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gint001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1814(line=90,offs=1)--1854(line=90,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gflt000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1881(line=94,offs=1)--1921(line=94,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1922(line=95,offs=1)--1962(line=95,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1989(line=99,offs=1)--2029(line=99,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2030(line=100,offs=1)--2070(line=100,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axrf001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2071(line=101,offs=1)--2111(line=101,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2112(line=102,offs=1)--2152(line=102,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axsz001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2153(line=103,offs=1)--2193(line=103,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/asrt000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/asrt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2194(line=104,offs=1)--2234(line=104,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2235(line=105,offs=1)--2275(line=105,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2276(line=106,offs=1)--2316(line=106,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2317(line=107,offs=1)--2357(line=107,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2358(line=108,offs=1)--2398(line=108,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2399(line=109,offs=1)--2439(line=109,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2440(line=110,offs=1)--2480(line=110,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/lsrt000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/lsrt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2481(line=111,offs=1)--2521(line=111,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/optn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2522(line=112,offs=1)--2562(line=112,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/optn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2563(line=113,offs=1)--2603(line=113,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strm000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2604(line=114,offs=1)--2644(line=114,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strm001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2645(line=115,offs=1)--2685(line=115,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strx000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2686(line=116,offs=1)--2726(line=116,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strx001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2773(line=121,offs=1)--2818(line=121,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gbas000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2822(line=123,offs=1)--2867(line=123,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/bool000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2868(line=124,offs=1)--2913(line=124,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/char000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2917(line=126,offs=1)--2962(line=126,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gint000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2963(line=127,offs=1)--3008(line=127,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gflt000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3012(line=129,offs=1)--3057(line=129,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/strn000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3061(line=131,offs=1)--3106(line=131,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axrf000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3107(line=132,offs=1)--3152(line=132,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axsz000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3196(line=136,offs=1)--3242(line=136,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gnum000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gnum000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3243(line=137,offs=1)--3289(line=137,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gord000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gord000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3290(line=138,offs=1)--3336(line=138,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gfun000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gfun000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3337(line=139,offs=1)--3383(line=139,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gcls000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gcls000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3384(line=140,offs=1)--3430(line=140,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3431(line=141,offs=1)--3477(line=141,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3478(line=142,offs=1)--3524(line=142,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq002_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq002_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3525(line=143,offs=1)--3571(line=143,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasq000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gasq000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3572(line=144,offs=1)--3618(line=144,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasq001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gasq001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3619(line=145,offs=1)--3665(line=145,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gsyn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gsyn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3686(line=147,offs=1)--3732(line=147,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3756(line=150,offs=1)--3802(line=150,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axrf000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/axrf000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3803(line=151,offs=1)--3849(line=151,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axsz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/axsz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3850(line=152,offs=1)--3896(line=152,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/tupl000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/tupl000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3900(line=154,offs=1)--3946(line=154,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3947(line=155,offs=1)--3993(line=155,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/list001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3994(line=156,offs=1)--4040(line=156,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/lsrt000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/lsrt000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4041(line=157,offs=1)--4087(line=157,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/optn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4088(line=158,offs=1)--4134(line=158,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/optn001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4138(line=160,offs=1)--4184(line=160,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4185(line=161,offs=1)--4231(line=161,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4232(line=162,offs=1)--4278(line=162,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm002_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm002_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4279(line=163,offs=1)--4325(line=163,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strx000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4326(line=164,offs=1)--4372(line=164,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4543(line=175,offs=1)--4589(line=175,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gxyz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gxyz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4913(line=183,offs=1)--4913(line=183,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4913(line=183,offs=1)--4913(line=183,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(JS_spelling.dats)@(312(line=17,offs=1)--363(line=19,offs=33)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1487(line=46,offs=1)--1520(line=47,offs=25))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/pre2026.dats";24));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/DATS/pre2026.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1521(line=48,offs=1)--1560(line=49,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/VT/pre2026_vt.dats";30));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1607(line=54,offs=1)--1648(line=55,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/DATS/i1range.dats";32));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/DATS/i1range.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1649(line=56,offs=1)--1690(line=57,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/DATS/trec000.dats";32));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/DATS/trec000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(1737(line=62,offs=1)--1784(line=63,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../pre2026/DATS/VT/trec000_vt.dats";38));$optn(FPATH(../../../../../../XATSHOME/prelude/almanac/pre2026/DATS/VT/trec000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(2045(line=71,offs=1)--2045(line=71,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/HATS/pre2026_dats.hats)@(2045(line=71,offs=1)--2045(line=71,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(JS_spelling.dats)@(410(line=24,offs=1)--454(line=25,offs=36)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(197(line=15,offs=1)--246(line=16,offs=36))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/xtop000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(273(line=20,offs=1)--322(line=21,offs=36))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gbas000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(323(line=22,offs=1)--372(line=23,offs=36))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gdbg000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(419(line=28,offs=1)--467(line=29,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/bool000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(468(line=30,offs=1)--516(line=31,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/char000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(517(line=32,offs=1)--565(line=33,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gint000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(566(line=34,offs=1)--614(line=35,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gflt000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(615(line=36,offs=1)--663(line=37,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strn000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(710(line=42,offs=1)--758(line=43,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/list000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(759(line=44,offs=1)--807(line=45,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/optn000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(811(line=47,offs=1)--859(line=48,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strm000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(860(line=49,offs=1)--908(line=50,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strx000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(935(line=54,offs=1)--983(line=55,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axrf000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(984(line=56,offs=1)--1032(line=57,offs=40))
// I1Dnone1(I0Dextcode(T_SRP_EXTCODE();G1Ea1pp(G1Eid0(file);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axsz000.cats";35)))))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(1288(line=65,offs=1)--1288(line=65,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_cats.hats)@(1288(line=65,offs=1)--1288(line=65,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(JS_spelling.dats)@(455(line=26,offs=1)--499(line=27,offs=36)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(197(line=15,offs=1)--249(line=16,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/xtop000.dats";35));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(296(line=21,offs=1)--344(line=22,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gbas000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(345(line=23,offs=1)--393(line=24,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gdbg000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gdbg000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(440(line=29,offs=1)--488(line=30,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/bool000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(489(line=31,offs=1)--537(line=32,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/char000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(538(line=33,offs=1)--586(line=34,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gint000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(587(line=35,offs=1)--635(line=36,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gflt000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(682(line=41,offs=1)--730(line=42,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strn000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(777(line=47,offs=1)--825(line=48,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/list000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(826(line=49,offs=1)--874(line=50,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/optn000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/optn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(901(line=54,offs=1)--949(line=55,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strm000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(950(line=56,offs=1)--998(line=57,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strx000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strx000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1045(line=62,offs=1)--1093(line=63,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axrf000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1094(line=64,offs=1)--1142(line=65,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axsz000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1398(line=73,offs=1)--1398(line=73,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1398(line=73,offs=1)--1398(line=73,offs=1));D3Cnone0()))
// I1Dextern(LCSRCsome1(JS_spelling.dats)@(546(line=32,offs=1)--607(line=35,offs=33)))
// LCSRCsome1(JS_spelling.dats)@(554(line=33,offs=1)--607(line=35,offs=33))
// I1FUNDCL
// JS_spelling_arg0_557
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(JS_spelling_arg0);G1Nlist($list())) // I1CMP:return
// I1Dextern(LCSRCsome1(JS_spelling.dats)@(608(line=36,offs=1)--669(line=39,offs=33)))
// LCSRCsome1(JS_spelling.dats)@(616(line=37,offs=1)--669(line=39,offs=33))
// I1FUNDCL
// JS_spelling_arg1_619
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(JS_spelling_arg1);G1Nlist($list())) // I1CMP:return
// I1Dextern(LCSRCsome1(JS_spelling.dats)@(670(line=40,offs=1)--731(line=43,offs=33)))
// LCSRCsome1(JS_spelling.dats)@(678(line=41,offs=1)--731(line=43,offs=33))
// I1FUNDCL
// JS_spelling_dict_681
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(JS_spelling_dict);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(JS_spelling.dats)@(778(line=48,offs=1)--889(line=58,offs=29)))
// I1Dimplmnt0(DIMPLone2(char_lower(893);$list())):timp
// I1Dfundclist(LCSRCsome1(JS_spelling.dats)@(916(line=62,offs=1)--1036(line=71,offs=4)))
// I1FUNDCL
function JS_spelling_char1_919()
{ // fun
  // I1CMP:start
  let jsxtnm58 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(JS_spelling.dats)@(962(line=66,offs=1)--989(line=67,offs=19)))
    // I1VALDCL
    let jsxtnm9
    let jsxtnm8 = XATSDAPP(JS_spelling_arg0())
    jsxtnm9 = jsxtnm8
    XATS000_patck(true)
    // LCSRCsome1(JS_spelling.dats)@(998(line=69,offs=1)--1008(line=69,offs=11))
    // I0Etapq(I0Ecst(char_lower(893)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(4049(line=217,offs=1)--4059(line=217,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(char_lower(893);LCSRCsome1(JS_spelling.dats)@(778(line=48,offs=1)--889(line=58,offs=29)))
    // T1IMPallx(char_lower(893)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_lower(893);$list()))))
    let jsxtnm45 = function (arg1) { // timp: char_lower(893)
      let jsxtnm10 = arg1
      // I1CMP:start
      // LCSRCsome1(JS_spelling.dats)@(827(line=54,offs=5)--828(line=54,offs=6))
      // I0Etapq(I0Ecst(char_lt(886)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3231(line=166,offs=1)--3238(line=166,offs=8))));$list(T2JAG($list())))
      // T1IMPallx(char_lt(886);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1430(line=40,offs=1)--1574(line=52,offs=2)))
      // T1IMPallx(char_lt(886)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_lt(886);$list()))))
      let jsxtnm17 = function (arg1, arg2) { // timp: char_lt(886)
        let jsxtnm11 = arg1
        let jsxtnm12 = arg2
        // I1CMP:start
        let jsxtnm16 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1506(line=48,offs=1)--1572(line=51,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1514(line=49,offs=1)--1572(line=51,offs=39))
          // I1FUNDCL
          // XATS2JS_char_lt_1517
            // FJARGdarg($list(I1BNDcons(I1TNM(13);I0Pvar(c1(4970));$list(@(c1(4970),I1Vtnm(I1TNM(13))))),I1BNDcons(I1TNM(14);I0Pvar(c2(4971));$list(@(c2(4971),I1Vtnm(I1TNM(14)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_lt);G1Nlist($list())) // I1CMP:return
          let jsxtnm15 = XATSDAPP(XATS2JS_char_lt(jsxtnm11, jsxtnm12))
          jsxtnm16 = jsxtnm15
        } // endlet
        // I1CMP:return:jsxtnm16
        return jsxtnm16
      } // endtimp(char_lt(886))
      let jsxtnm18 = XATSDAPP(jsxtnm17(jsxtnm10, XATSCHR2('A')))
      let jsxtnm44 // ift
      if (jsxtnm18) // ift
      {
        jsxtnm44 = jsxtnm10
      } else {
        // LCSRCsome1(JS_spelling.dats)@(854(line=57,offs=5)--855(line=57,offs=6))
        // I0Etapq(I0Ecst(char_gt(887)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3302(line=171,offs=1)--3309(line=171,offs=8))));$list(T2JAG($list())))
        // T1IMPallx(char_gt(887);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1601(line=56,offs=1)--1745(line=68,offs=2)))
        // T1IMPallx(char_gt(887)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_gt(887);$list()))))
        let jsxtnm25 = function (arg1, arg2) { // timp: char_gt(887)
          let jsxtnm19 = arg1
          let jsxtnm20 = arg2
          // I1CMP:start
          let jsxtnm24 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1677(line=64,offs=1)--1743(line=67,offs=39)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1685(line=65,offs=1)--1743(line=67,offs=39))
            // I1FUNDCL
            // XATS2JS_char_gt_1688
              // FJARGdarg($list(I1BNDcons(I1TNM(21);I0Pvar(c1(4975));$list(@(c1(4975),I1Vtnm(I1TNM(21))))),I1BNDcons(I1TNM(22);I0Pvar(c2(4976));$list(@(c2(4976),I1Vtnm(I1TNM(22)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_gt);G1Nlist($list())) // I1CMP:return
            let jsxtnm23 = XATSDAPP(XATS2JS_char_gt(jsxtnm19, jsxtnm20))
            jsxtnm24 = jsxtnm23
          } // endlet
          // I1CMP:return:jsxtnm24
          return jsxtnm24
        } // endtimp(char_gt(887))
        let jsxtnm26 = XATSDAPP(jsxtnm25(jsxtnm10, XATSCHR2('Z')))
        let jsxtnm43 // ift
        if (jsxtnm26) // ift
        {
          jsxtnm43 = jsxtnm10
        } else {
          // LCSRCsome1(JS_spelling.dats)@(878(line=58,offs=18)--879(line=58,offs=19))
          // I0Etapq(I0Ecst(char_add$sint(895)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(4254(line=230,offs=1)--4267(line=230,offs=14))));$list(T2JAG($list())))
          // T1IMPallx(char_add$sint(895);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2485(line=137,offs=1)--2649(line=149,offs=2)))
          // T1IMPallx(char_add$sint(895)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_add$sint(895);$list()))))
          let jsxtnm33 = function (arg1, arg2) { // timp: char_add$sint(895)
            let jsxtnm27 = arg1
            let jsxtnm28 = arg2
            // I1CMP:start
            let jsxtnm32 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2575(line=145,offs=1)--2647(line=148,offs=39)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2583(line=146,offs=1)--2647(line=148,offs=39))
              // I1FUNDCL
              // XATS2JS_char_add$sint_2586
                // FJARGdarg($list(I1BNDcons(I1TNM(29);I0Pvar(c1(5000));$list(@(c1(5000),I1Vtnm(I1TNM(29))))),I1BNDcons(I1TNM(30);I0Pvar(i2(5001));$list(@(i2(5001),I1Vtnm(I1TNM(30)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_add$sint);G1Nlist($list())) // I1CMP:return
              let jsxtnm31 = XATSDAPP(XATS2JS_char_add$sint(jsxtnm27, jsxtnm28))
              jsxtnm32 = jsxtnm31
            } // endlet
            // I1CMP:return:jsxtnm32
            return jsxtnm32
          } // endtimp(char_add$sint(895))
          // LCSRCsome1(JS_spelling.dats)@(882(line=58,offs=22)--883(line=58,offs=23))
          // I0Etapq(I0Ecst(char_sub$char(896)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(4334(line=237,offs=1)--4347(line=237,offs=14))));$list(T2JAG($list())))
          // T1IMPallx(char_sub$char(896);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2676(line=153,offs=1)--2840(line=165,offs=2)))
          // T1IMPallx(char_sub$char(896)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_sub$char(896);$list()))))
          let jsxtnm40 = function (arg1, arg2) { // timp: char_sub$char(896)
            let jsxtnm34 = arg1
            let jsxtnm35 = arg2
            // I1CMP:start
            let jsxtnm39 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2766(line=161,offs=1)--2838(line=164,offs=39)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2774(line=162,offs=1)--2838(line=164,offs=39))
              // I1FUNDCL
              // XATS2JS_char_sub$char_2777
                // FJARGdarg($list(I1BNDcons(I1TNM(36);I0Pvar(c1(5005));$list(@(c1(5005),I1Vtnm(I1TNM(36))))),I1BNDcons(I1TNM(37);I0Pvar(c2(5006));$list(@(c2(5006),I1Vtnm(I1TNM(37)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_sub$char);G1Nlist($list())) // I1CMP:return
              let jsxtnm38 = XATSDAPP(XATS2JS_char_sub$char(jsxtnm34, jsxtnm35))
              jsxtnm39 = jsxtnm38
            } // endlet
            // I1CMP:return:jsxtnm39
            return jsxtnm39
          } // endtimp(char_sub$char(896))
          let jsxtnm41 = XATSDAPP(jsxtnm40(jsxtnm10, XATSCHR2('A')))
          let jsxtnm42 = XATSDAPP(jsxtnm33(XATSCHR2('a'), jsxtnm41))
          jsxtnm43 = jsxtnm42
        } // end(if)
        jsxtnm44 = jsxtnm43
      } // end(if)
      // I1CMP:return:jsxtnm44
      return jsxtnm44
    } // endtimp(char_lower(893))
    // LCSRCsome1(JS_spelling.dats)@(1014(line=70,offs=5)--1027(line=70,offs=18))
    // I0Etapq(I0Ecst(strn_head$raw(2299)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4403(line=266,offs=1)--4416(line=266,offs=14))));$list(T2JAG($list())))
    // T1IMPallx(strn_head$raw(2299);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(3060(line=205,offs=1)--3130(line=207,offs=52)))
    // T1IMPallx(strn_head$raw(2299)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_head$raw(2299);$list()))))
    let jsxtnm55 = function (arg1) { // timp: strn_head$raw(2299)
      let jsxtnm46 = arg1
      // I1CMP:start
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(3107(line=207,offs=29)--3122(line=207,offs=44))
      // I0Etapq(I0Ecst(strn_get$at$raw(2301)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4484(line=273,offs=1)--4499(line=273,offs=16))));$list(T2JAG($list())))
      // T1IMPallx(strn_get$at$raw(2301);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
      // T1IMPallx(strn_get$at$raw(2301)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(2301);$list()))))
      let jsxtnm53 = function (arg1, arg2) { // timp: strn_get$at$raw(2301)
        let jsxtnm47 = arg1
        let jsxtnm48 = arg2
        // I1CMP:start
        let jsxtnm52 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
          // I1FUNDCL
          // XATS000_strn_get$at$raw_2309
            // FJARGdarg($list(I1BNDcons(I1TNM(49);I0Pvar(cs(3280));$list(@(cs(3280),I1Vtnm(I1TNM(49))))),I1BNDcons(I1TNM(50);I0Pvar(i0(3281));$list(@(i0(3281),I1Vtnm(I1TNM(50)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
          let jsxtnm51 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm47, jsxtnm48))
          jsxtnm52 = jsxtnm51
        } // endlet
        // I1CMP:return:jsxtnm52
        return jsxtnm52
      } // endtimp(strn_get$at$raw(2301))
      let jsxtnm54 = XATSDAPP(jsxtnm53(jsxtnm46, XATSINT1(0)))
      // I1CMP:return:jsxtnm54
      return jsxtnm54
    } // endtimp(strn_head$raw(2299))
    let jsxtnm56 = XATSDAPP(jsxtnm55(jsxtnm9))
    let jsxtnm57 = XATSDAPP(jsxtnm45(jsxtnm56))
    jsxtnm58 = jsxtnm57
  } // endlet
  // I1CMP:return:jsxtnm58
  return jsxtnm58
} // endfun(JS_spelling_char1_919)
// I1Dfundclist(LCSRCsome1(JS_spelling.dats)@(1066(line=73,offs=1)--1141(line=76,offs=33)))
// I1FUNDCL
function JS_spelling_chars_1069()
{ // fun
  // I1CMP:start
  // LCSRCsome1(JS_spelling.dats)@(1109(line=76,offs=1)--1119(line=76,offs=11))
  // I0Etapq(I0Ecst(strn_lower(1035)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(3515(line=188,offs=1)--3525(line=188,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_lower(1035);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(3817(line=219,offs=1)--3978(line=232,offs=4)))
  // T1IMPallx(strn_lower(1035)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_lower(1035);$list()))))
  let jsxtnm185 = function (arg1) { // timp: strn_lower(1035)
    let jsxtnm59 = arg1
    // I1CMP:start
    let jsxtnm184 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(3864(line=224,offs=1)--3890(line=225,offs=18)))
      // I1VALDCL
      let jsxtnm66
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(3873(line=225,offs=1)--3884(line=225,offs=12))
      // I0Etapq(I0Ecst(strn_length(1030)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2709(line=131,offs=1)--2720(line=131,offs=12))));$list(T2JAG($list())))
      // T1IMPallx(strn_length(1030);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1610(line=57,offs=1)--1756(line=69,offs=2)))
      // T1IMPallx(strn_length(1030)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(1030);$list()))))
      let jsxtnm64 = function (arg1) { // timp: strn_length(1030)
        let jsxtnm60 = arg1
        // I1CMP:start
        let jsxtnm63 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1692(line=65,offs=1)--1754(line=68,offs=31)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1700(line=66,offs=1)--1754(line=68,offs=31))
          // I1FUNDCL
          // XATS2JS_strn_length_1703
            // FJARGdarg($list(I1BNDcons(I1TNM(61);I0Pvar(cs(5204));$list(@(cs(5204),I1Vtnm(I1TNM(61)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
          let jsxtnm62 = XATSDAPP(XATS2JS_strn_length(jsxtnm60))
          jsxtnm63 = jsxtnm62
        } // endlet
        // I1CMP:return:jsxtnm63
        return jsxtnm63
      } // endtimp(strn_length(1030))
      let jsxtnm65 = XATSDAPP(jsxtnm64(jsxtnm59))
      jsxtnm66 = jsxtnm65
      XATS000_patck(true)
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(3899(line=227,offs=1)--3913(line=227,offs=15))
      // I0Etapq(I0Ecst(strn_make_nfun(1044)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(4632(line=268,offs=1)--4646(line=268,offs=15))));$list(T2JAG($list())))
      // T1IMPallx(strn_make_nfun(1044);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(4940(line=305,offs=1)--5078(line=313,offs=28)))
      // T1IMPallx(strn_make_nfun(1044)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_make_nfun(1044);$list()))))
      let jsxtnm135 = function (arg1, arg2) { // timp: strn_make_nfun(1044)
        let jsxtnm67 = arg1
        let jsxtnm68 = arg2
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(4987(line=309,offs=1)--5003(line=309,offs=17))
        // I0Etapq(I0Ecst(strn_fmake_fwork(1079)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn001.sats)@(4102(line=185,offs=1)--4118(line=185,offs=17))));$list(T2JAG($list())))
        // T1IMPallx(strn_fmake_fwork(1079);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2479(line=126,offs=1)--2661(line=139,offs=2)))
        // T1IMPallx(strn_fmake_fwork(1079)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_fmake_fwork(1079);$list()))))
        let jsxtnm73 = function (arg1) { // timp: strn_fmake_fwork(1079)
          let jsxtnm69 = arg1
          // I1CMP:start
          let jsxtnm72 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2573(line=134,offs=1)--2659(line=138,offs=42)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2581(line=135,offs=1)--2659(line=138,offs=42))
            // I1FUNDCL
            // XATS000_strn_fmake_fwork_2584
              // FJARGdarg($list(I1BNDcons(I1TNM(70);I0Pvar(fwork(3284));$list(@(fwork(3284),I1Vtnm(I1TNM(70)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_fmake_fwork);G1Nlist($list())) // I1CMP:return
            let jsxtnm71 = XATSDAPP(XATS000_strn_fmake_fwork(jsxtnm69))
            jsxtnm72 = jsxtnm71
          } // endlet
          // I1CMP:return:jsxtnm72
          return jsxtnm72
        } // endtimp(strn_fmake_fwork(1079))
        let jsxtnm133 = function (arg1) { // lam0(T_LAM(0))
          let jsxtnm74 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5021(line=312,offs=1)--5027(line=312,offs=7))
          // I0Etapq(I0Ecst(nint_foritm$f1un(953)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(3054(line=146,offs=1)--3070(line=146,offs=17))));$list(T2JAG($list())))
          // T1IMPallx(nint_foritm$f1un(953);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(4008(line=237,offs=1)--4137(line=246,offs=2)))
          // T1IMPallx(nint_foritm$f1un(953)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_foritm$f1un(953);$list()))))
          let jsxtnm127 = function (arg1, arg2) { // timp: nint_foritm$f1un(953)
            let jsxtnm75 = arg1
            let jsxtnm76 = arg2
            // I1CMP:start
            let jsxtnm126 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(4090(line=244,offs=1)--4135(line=245,offs=37)))
              // I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[451],T2Pcst(ni))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(4063(line=242,offs=3)--4074(line=242,offs=14))
              // I0Etapq(I0Ecst(nint_foritm(951)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(2701(line=122,offs=1)--2712(line=122,offs=12))));$list(T2JAG($list())))
              // T1IMPallx(nint_foritm(951);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(3945(line=233,offs=1)--3999(line=236,offs=22)))
              // T1IMPallx(nint_foritm(951)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_foritm(951);$list()))))
              let jsxtnm124
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(3978(line=236,offs=1)--3989(line=236,offs=12))
              // I0Etapq(I0Ecst(gseq_foritm(396)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(7078(line=402,offs=1)--7089(line=402,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
              // T1IMPallx(gseq_foritm(396);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6437(line=407,offs=1)--6624(line=424,offs=2)))
              // T1IMPallx(gseq_foritm(396)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6053],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x0[6054],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_foritm(396);$list(@(xs[1191],T2Pvar(xs[6053])),@(x0[1192],T2Pvar(x0[6054])))))))
              let jsxtnm123 = function (arg1) { // timp: gseq_foritm(396)
                let jsxtnm79 = arg1
                // I1CMP:start
                let jsxtnm122 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6547(line=419,offs=1)--6622(line=423,offs=32)))
                  // I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Pvar(x0[6054]))))):timp
                  let jsxtnm121 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6495(line=414,offs=1)--6527(line=416,offs=13)))
                    // I1VALDCL
                    let jsxtnm120
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6503(line=415,offs=1)--6514(line=415,offs=12))
                    // I0Etapq(I0Ecst(gseq_forall(380)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(3721(line=210,offs=1)--3732(line=210,offs=12))));$list(T2JAG($list(T2Pvar(xs[6053]))),T2JAG($list(T2Pvar(x0[6054])))))
                    // T1IMPallx(gseq_forall(380);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(3103(line=172,offs=1)--3149(line=173,offs=38)))
                    // T1IMPallx(gseq_forall(380)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_forall(380);$list(@(xs[1143],T2Pcst(nint)),@(x0[1144],T2Pcst(ni)))))))
                    let jsxtnm118
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(3136(line=173,offs=25)--3147(line=173,offs=36))
                    // I0Etapq(I0Ecst(nint_forall(947)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(1757(line=66,offs=1)--1768(line=66,offs=12))));$list(T2JAG($list())))
                    // T1IMPallx(nint_forall(947);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2796(line=146,offs=1)--2981(line=160,offs=33)))
                    // T1IMPallx(nint_forall(947)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_forall(947);$list()))))
                    let jsxtnm117 = function (arg1) { // timp: nint_forall(947)
                      let jsxtnm84 = arg1
                      // I1CMP:start
                      let jsxtnm116 // let
                      { // let
                        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2859(line=151,offs=1)--2980(line=160,offs=32)))
                        // I1FUNDCL
                        function loop_2862(arg1, arg2)
                        { // fun
                          let jsxtnm85 = arg1
                          let jsxtnm86 = arg2
                          // I1CMP:start
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2900(line=155,offs=5)--2902(line=155,offs=7))
                          // I0Etapq(I0Ecst(sint_gte$sint(922)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
                          // T1IMPallx(sint_gte$sint(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                          // T1IMPallx(sint_gte$sint(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(922);$list()))))
                          let jsxtnm93 = function (arg1, arg2) { // timp: sint_gte$sint(922)
                            let jsxtnm87 = arg1
                            let jsxtnm88 = arg2
                            // I1CMP:start
                            let jsxtnm92 // let
                            { // let
                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                              // I1FUNDCL
                              // XATS2JS_sint_gte$sint_2399
                                // FJARGdarg($list(I1BNDcons(I1TNM(89);I0Pvar(i1(5042));$list(@(i1(5042),I1Vtnm(I1TNM(89))))),I1BNDcons(I1TNM(90);I0Pvar(i2(5043));$list(@(i2(5043),I1Vtnm(I1TNM(90)))))))
                                // I1CMP:start
                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                              let jsxtnm91 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm87, jsxtnm88))
                              jsxtnm92 = jsxtnm91
                            } // endlet
                            // I1CMP:return:jsxtnm92
                            return jsxtnm92
                          } // endtimp(sint_gte$sint(922))
                          let jsxtnm94 = XATSDAPP(jsxtnm93(jsxtnm86, jsxtnm85))
                          let jsxtnm114 // ift
                          if (jsxtnm94) // ift
                          {
                            jsxtnm114 = XATSBOOL(true)
                          } else {
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2929(line=159,offs=1)--2940(line=159,offs=12))
                            // I0Etapq(I0Ecst(forall$test(47)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2003(line=96,offs=1)--2014(line=96,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                            // T1IMPallx(forall$test(47);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6547(line=419,offs=1)--6622(line=423,offs=32)))
                            // T1IMPallx(forall$test(47)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6053],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x0[6054],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))
                            let jsxtnm102 = function (arg1) { // timp: forall$test(47)
                              let jsxtnm95 = arg1
                              // I1CMP:start
                              let jsxtnm101 // let
                              { // let
                                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6582(line=422,offs=1)--6610(line=423,offs=20)))
                                // I1VALDCL
                                let jsxtnm100
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6591(line=423,offs=1)--6602(line=423,offs=12))
                                // I0Etapq(I0Ecst(foritm$work(51)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2341(line=124,offs=1)--2352(line=124,offs=12))));$list(T2JAG($list(T2Pvar(x0[6054])))))
                                // T1IMPallx(foritm$work(51);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(4090(line=244,offs=1)--4135(line=245,offs=37)))
                                // T1IMPallx(foritm$work(51)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[451],T2Pcst(ni)))))))
                                let jsxtnm98 = function (arg1) { // timp: foritm$work(51)
                                  let jsxtnm96 = arg1
                                  // I1CMP:start
                                  let jsxtnm97 = XATSDAPP(jsxtnm76(jsxtnm96))
                                  // I1CMP:return:jsxtnm97
                                  return jsxtnm97
                                } // endtimp(foritm$work(51))
                                let jsxtnm99 = XATSDAPP(jsxtnm98(jsxtnm95))
                                jsxtnm100 = jsxtnm99
                                XATS000_patck(true)
                                jsxtnm101 = XATSBOOL(true)
                              } // endlet
                              // I1CMP:return:jsxtnm101
                              return jsxtnm101
                            } // endtimp(forall$test(47))
                            let jsxtnm103 = XATSDAPP(jsxtnm102(jsxtnm86))
                            let jsxtnm113 // ift
                            if (jsxtnm103) // ift
                            {
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2965(line=160,offs=17)--2966(line=160,offs=18))
                              // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                              // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                              // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                              let jsxtnm110 = function (arg1, arg2) { // timp: sint_add$sint(925)
                                let jsxtnm104 = arg1
                                let jsxtnm105 = arg2
                                // I1CMP:start
                                let jsxtnm109 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                  // I1FUNDCL
                                  // XATS2JS_sint_add$sint_2778
                                    // FJARGdarg($list(I1BNDcons(I1TNM(106);I0Pvar(i1(5052));$list(@(i1(5052),I1Vtnm(I1TNM(106))))),I1BNDcons(I1TNM(107);I0Pvar(i2(5053));$list(@(i2(5053),I1Vtnm(I1TNM(107)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm108 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm104, jsxtnm105))
                                  jsxtnm109 = jsxtnm108
                                } // endlet
                                // I1CMP:return:jsxtnm109
                                return jsxtnm109
                              } // endtimp(sint_add$sint(925))
                              let jsxtnm111 = XATSDAPP(jsxtnm110(jsxtnm86, XATSINT1(1)))
                              let jsxtnm112 = XATSDAPP(loop_2862(jsxtnm85, jsxtnm111))
                              jsxtnm113 = jsxtnm112
                            } else {
                              jsxtnm113 = XATSBOOL(false)
                            } // end(if)
                            jsxtnm114 = jsxtnm113
                          } // end(if)
                          // I1CMP:return:jsxtnm114
                          return jsxtnm114
                        } // endfun(loop_2862)
                        let jsxtnm115 = XATSDAPP(loop_2862(jsxtnm84, XATSINT1(0)))
                        jsxtnm116 = jsxtnm115
                      } // endlet
                      // I1CMP:return:jsxtnm116
                      return jsxtnm116
                    } // endtimp(nint_forall(947))
                    jsxtnm118 = jsxtnm117
                    let jsxtnm119 = XATSDAPP(jsxtnm118(jsxtnm79))
                    jsxtnm120 = jsxtnm119
                    XATS000_patck(true)
                    jsxtnm121 = []
                  } // endlet
                  jsxtnm122 = jsxtnm121
                } // endlet
                // I1CMP:return:jsxtnm122
                return jsxtnm122
              } // endtimp(gseq_foritm(396))
              jsxtnm124 = jsxtnm123
              let jsxtnm125 = XATSDAPP(jsxtnm124(jsxtnm75))
              jsxtnm126 = jsxtnm125
            } // endlet
            // I1CMP:return:jsxtnm126
            return jsxtnm126
          } // endtimp(nint_foritm$f1un(953))
          let jsxtnm131 = function (arg1) { // lam0(T_LAM(0))
            let jsxtnm128 = arg1
            // I1CMP:start
            let jsxtnm129 = XATSDAPP(jsxtnm68(jsxtnm128))
            let jsxtnm130 = XATSDAPP(jsxtnm74(jsxtnm129))
            // I1CMP:return:jsxtnm130
            return jsxtnm130
          } // endfun(lam0)
          let jsxtnm132 = XATSDAPP(jsxtnm127(jsxtnm67, jsxtnm131))
          // I1CMP:return:jsxtnm132
          return jsxtnm132
        } // endfun(lam0)
        let jsxtnm134 = XATSDAPP(jsxtnm73(jsxtnm133))
        // I1CMP:return:jsxtnm134
        return jsxtnm134
      } // endtimp(strn_make_nfun(1044))
      let jsxtnm182 = function (arg1) { // lam0(T_LAM(0))
        let jsxtnm136 = arg1
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(3932(line=230,offs=1)--3942(line=230,offs=11))
        // I0Etapq(I0Ecst(char_lower(893)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(4049(line=217,offs=1)--4059(line=217,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(char_lower(893);LCSRCsome1(JS_spelling.dats)@(778(line=48,offs=1)--889(line=58,offs=29)))
        // T1IMPallx(char_lower(893)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_lower(893);$list()))))
        let jsxtnm172 = function (arg1) { // timp: char_lower(893)
          let jsxtnm137 = arg1
          // I1CMP:start
          // LCSRCsome1(JS_spelling.dats)@(827(line=54,offs=5)--828(line=54,offs=6))
          // I0Etapq(I0Ecst(char_lt(886)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3231(line=166,offs=1)--3238(line=166,offs=8))));$list(T2JAG($list())))
          // T1IMPallx(char_lt(886);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1430(line=40,offs=1)--1574(line=52,offs=2)))
          // T1IMPallx(char_lt(886)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_lt(886);$list()))))
          let jsxtnm144 = function (arg1, arg2) { // timp: char_lt(886)
            let jsxtnm138 = arg1
            let jsxtnm139 = arg2
            // I1CMP:start
            let jsxtnm143 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1506(line=48,offs=1)--1572(line=51,offs=39)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1514(line=49,offs=1)--1572(line=51,offs=39))
              // I1FUNDCL
              // XATS2JS_char_lt_1517
                // FJARGdarg($list(I1BNDcons(I1TNM(140);I0Pvar(c1(4970));$list(@(c1(4970),I1Vtnm(I1TNM(140))))),I1BNDcons(I1TNM(141);I0Pvar(c2(4971));$list(@(c2(4971),I1Vtnm(I1TNM(141)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_lt);G1Nlist($list())) // I1CMP:return
              let jsxtnm142 = XATSDAPP(XATS2JS_char_lt(jsxtnm138, jsxtnm139))
              jsxtnm143 = jsxtnm142
            } // endlet
            // I1CMP:return:jsxtnm143
            return jsxtnm143
          } // endtimp(char_lt(886))
          let jsxtnm145 = XATSDAPP(jsxtnm144(jsxtnm137, XATSCHR2('A')))
          let jsxtnm171 // ift
          if (jsxtnm145) // ift
          {
            jsxtnm171 = jsxtnm137
          } else {
            // LCSRCsome1(JS_spelling.dats)@(854(line=57,offs=5)--855(line=57,offs=6))
            // I0Etapq(I0Ecst(char_gt(887)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3302(line=171,offs=1)--3309(line=171,offs=8))));$list(T2JAG($list())))
            // T1IMPallx(char_gt(887);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1601(line=56,offs=1)--1745(line=68,offs=2)))
            // T1IMPallx(char_gt(887)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_gt(887);$list()))))
            let jsxtnm152 = function (arg1, arg2) { // timp: char_gt(887)
              let jsxtnm146 = arg1
              let jsxtnm147 = arg2
              // I1CMP:start
              let jsxtnm151 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1677(line=64,offs=1)--1743(line=67,offs=39)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1685(line=65,offs=1)--1743(line=67,offs=39))
                // I1FUNDCL
                // XATS2JS_char_gt_1688
                  // FJARGdarg($list(I1BNDcons(I1TNM(148);I0Pvar(c1(4975));$list(@(c1(4975),I1Vtnm(I1TNM(148))))),I1BNDcons(I1TNM(149);I0Pvar(c2(4976));$list(@(c2(4976),I1Vtnm(I1TNM(149)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_gt);G1Nlist($list())) // I1CMP:return
                let jsxtnm150 = XATSDAPP(XATS2JS_char_gt(jsxtnm146, jsxtnm147))
                jsxtnm151 = jsxtnm150
              } // endlet
              // I1CMP:return:jsxtnm151
              return jsxtnm151
            } // endtimp(char_gt(887))
            let jsxtnm153 = XATSDAPP(jsxtnm152(jsxtnm137, XATSCHR2('Z')))
            let jsxtnm170 // ift
            if (jsxtnm153) // ift
            {
              jsxtnm170 = jsxtnm137
            } else {
              // LCSRCsome1(JS_spelling.dats)@(878(line=58,offs=18)--879(line=58,offs=19))
              // I0Etapq(I0Ecst(char_add$sint(895)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(4254(line=230,offs=1)--4267(line=230,offs=14))));$list(T2JAG($list())))
              // T1IMPallx(char_add$sint(895);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2485(line=137,offs=1)--2649(line=149,offs=2)))
              // T1IMPallx(char_add$sint(895)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_add$sint(895);$list()))))
              let jsxtnm160 = function (arg1, arg2) { // timp: char_add$sint(895)
                let jsxtnm154 = arg1
                let jsxtnm155 = arg2
                // I1CMP:start
                let jsxtnm159 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2575(line=145,offs=1)--2647(line=148,offs=39)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2583(line=146,offs=1)--2647(line=148,offs=39))
                  // I1FUNDCL
                  // XATS2JS_char_add$sint_2586
                    // FJARGdarg($list(I1BNDcons(I1TNM(156);I0Pvar(c1(5000));$list(@(c1(5000),I1Vtnm(I1TNM(156))))),I1BNDcons(I1TNM(157);I0Pvar(i2(5001));$list(@(i2(5001),I1Vtnm(I1TNM(157)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_add$sint);G1Nlist($list())) // I1CMP:return
                  let jsxtnm158 = XATSDAPP(XATS2JS_char_add$sint(jsxtnm154, jsxtnm155))
                  jsxtnm159 = jsxtnm158
                } // endlet
                // I1CMP:return:jsxtnm159
                return jsxtnm159
              } // endtimp(char_add$sint(895))
              // LCSRCsome1(JS_spelling.dats)@(882(line=58,offs=22)--883(line=58,offs=23))
              // I0Etapq(I0Ecst(char_sub$char(896)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(4334(line=237,offs=1)--4347(line=237,offs=14))));$list(T2JAG($list())))
              // T1IMPallx(char_sub$char(896);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2676(line=153,offs=1)--2840(line=165,offs=2)))
              // T1IMPallx(char_sub$char(896)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_sub$char(896);$list()))))
              let jsxtnm167 = function (arg1, arg2) { // timp: char_sub$char(896)
                let jsxtnm161 = arg1
                let jsxtnm162 = arg2
                // I1CMP:start
                let jsxtnm166 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2766(line=161,offs=1)--2838(line=164,offs=39)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2774(line=162,offs=1)--2838(line=164,offs=39))
                  // I1FUNDCL
                  // XATS2JS_char_sub$char_2777
                    // FJARGdarg($list(I1BNDcons(I1TNM(163);I0Pvar(c1(5005));$list(@(c1(5005),I1Vtnm(I1TNM(163))))),I1BNDcons(I1TNM(164);I0Pvar(c2(5006));$list(@(c2(5006),I1Vtnm(I1TNM(164)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_sub$char);G1Nlist($list())) // I1CMP:return
                  let jsxtnm165 = XATSDAPP(XATS2JS_char_sub$char(jsxtnm161, jsxtnm162))
                  jsxtnm166 = jsxtnm165
                } // endlet
                // I1CMP:return:jsxtnm166
                return jsxtnm166
              } // endtimp(char_sub$char(896))
              let jsxtnm168 = XATSDAPP(jsxtnm167(jsxtnm137, XATSCHR2('A')))
              let jsxtnm169 = XATSDAPP(jsxtnm160(XATSCHR2('a'), jsxtnm168))
              jsxtnm170 = jsxtnm169
            } // end(if)
            jsxtnm171 = jsxtnm170
          } // end(if)
          // I1CMP:return:jsxtnm171
          return jsxtnm171
        } // endtimp(char_lower(893))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(3948(line=231,offs=5)--3963(line=231,offs=20))
        // I0Etapq(I0Ecst(strn_get$at$raw(2301)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4484(line=273,offs=1)--4499(line=273,offs=16))));$list(T2JAG($list())))
        // T1IMPallx(strn_get$at$raw(2301);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
        // T1IMPallx(strn_get$at$raw(2301)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(2301);$list()))))
        let jsxtnm179 = function (arg1, arg2) { // timp: strn_get$at$raw(2301)
          let jsxtnm173 = arg1
          let jsxtnm174 = arg2
          // I1CMP:start
          let jsxtnm178 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
            // I1FUNDCL
            // XATS000_strn_get$at$raw_2309
              // FJARGdarg($list(I1BNDcons(I1TNM(175);I0Pvar(cs(3280));$list(@(cs(3280),I1Vtnm(I1TNM(175))))),I1BNDcons(I1TNM(176);I0Pvar(i0(3281));$list(@(i0(3281),I1Vtnm(I1TNM(176)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
            let jsxtnm177 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm173, jsxtnm174))
            jsxtnm178 = jsxtnm177
          } // endlet
          // I1CMP:return:jsxtnm178
          return jsxtnm178
        } // endtimp(strn_get$at$raw(2301))
        let jsxtnm180 = XATSDAPP(jsxtnm179(jsxtnm59, jsxtnm136))
        let jsxtnm181 = XATSDAPP(jsxtnm172(jsxtnm180))
        // I1CMP:return:jsxtnm181
        return jsxtnm181
      } // endfun(lam0)
      let jsxtnm183 = XATSDAPP(jsxtnm135(jsxtnm66, jsxtnm182))
      jsxtnm184 = jsxtnm183
    } // endlet
    // I1CMP:return:jsxtnm184
    return jsxtnm184
  } // endtimp(strn_lower(1035))
  let jsxtnm186 = XATSDAPP(JS_spelling_arg1())
  let jsxtnm187 = XATSDAPP(jsxtnm185(jsxtnm186))
  // I1CMP:return:jsxtnm187
  return jsxtnm187
} // endfun(JS_spelling_chars_1069)
// I1Dextern(LCSRCsome1(JS_spelling.dats)@(1188(line=81,offs=1)--1249(line=84,offs=33)))
// LCSRCsome1(JS_spelling.dats)@(1196(line=82,offs=1)--1249(line=84,offs=33))
// I1FUNDCL
// JS_spelling_main_1199
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(JS_spelling_main);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(JS_spelling.dats)@(1253(line=86,offs=1)--1629(line=116,offs=4)))
let JS_spelling_main = function () { // impl
  // I1CMP:start
  let jsxtnm385 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(JS_spelling.dats)@(1303(line=91,offs=1)--1330(line=92,offs=19)))
    // I1VALDCL
    let jsxtnm189
    let jsxtnm188 = XATSDAPP(JS_spelling_dict())
    jsxtnm189 = jsxtnm188
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(JS_spelling.dats)@(1331(line=93,offs=1)--1359(line=94,offs=20)))
    // I1VALDCL
    let jsxtnm191
    let jsxtnm190 = XATSDAPP(JS_spelling_char1_919())
    jsxtnm191 = jsxtnm190
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(JS_spelling.dats)@(1360(line=95,offs=1)--1388(line=96,offs=20)))
    // I1VALDCL
    let jsxtnm193
    let jsxtnm192 = XATSDAPP(JS_spelling_chars_1069())
    jsxtnm193 = jsxtnm192
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(JS_spelling.dats)@(1392(line=98,offs=1)--1433(line=99,offs=30)))
    // I1VALDCL
    let jsxtnm195
    let jsxtnm194 = XATSDAPP(spelling$main_428(jsxtnm189, jsxtnm191, jsxtnm193))
    jsxtnm195 = jsxtnm194
    XATS000_patck(true)
    let jsxtnm384 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(JS_spelling.dats)@(1452(line=104,offs=1)--1487(line=105,offs=24)))
      // I1VALDCL
      let jsxtnm234
      // LCSRCsome1(JS_spelling.dats)@(1464(line=105,offs=1)--1480(line=105,offs=17))
      // I0Etapq(I0Ecst(strm_vt_listize0(2194)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8819(line=452,offs=1)--8835(line=452,offs=17))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
      // T1IMPallx(strm_vt_listize0(2194);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7222(line=450,offs=1)--7317(line=455,offs=28)))
      // T1IMPallx(strm_vt_listize0(2194)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8592],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_listize0(2194);$list(@(x0[5484],T2Pvar(x0[8592])))))))
      let jsxtnm232 = function (arg1) { // timp: strm_vt_listize0(2194)
        let jsxtnm196 = arg1
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7269(line=454,offs=1)--7285(line=454,offs=17))
        // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(x0[8592])))))
        // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
        // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8426],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8426])))))))
        let jsxtnm215 = function (arg1) { // timp: list_vt_reverse0(2015)
          let jsxtnm197 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
          // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8426])))))
          // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
          // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8423],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8423])))))))
          let jsxtnm212 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
            let jsxtnm198 = arg1
            let jsxtnm199 = arg2
            // I1CMP:start
            let jsxtnm211 // let
            { // let
              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
              // I1FUNDCL
              function loop_6433(arg1, arg2)
              { // fun
                let jsxtnm200 = arg1
                let jsxtnm201 = arg2
                // I1CMP:start
                let jsxtnm209 // cas
                do {
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(202);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                  if (XATS000_ctgeq(jsxtnm200, XATSCTAG("list_vt_nil",0))) { // gpt
                    let jsxtnm202 = jsxtnm200
                    jsxtnm209 = jsxtnm201
                    break // cls
                  } // gpt
                  // } // cls
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(203);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                  if (XATS000_ctgeq(jsxtnm200, XATSCTAG("list_vt_cons",1))) { // gpt
                    let jsxtnm203 = jsxtnm200
                    let jsxtnm208 // let
                    { // let
                      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                      // I1VALDCL
                      let jsxtnm205
                      let jsxtnm204 = XATSPCON(jsxtnm200,1)
                      jsxtnm205 = jsxtnm204
                      XATS000_patck(true)
                      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                      // I1VALDCL
                      let jsxtnm206
                      XATS000_assgn(XATSLPCN(1, jsxtnm200), jsxtnm201)
                      jsxtnm206 = []
                      XATS000_patck(true)
                      XATS000_fold(jsxtnm200)
                      let jsxtnm207 = XATSDAPP(loop_6433(jsxtnm205, jsxtnm200))
                      jsxtnm208 = jsxtnm207
                    } // endlet
                    jsxtnm209 = jsxtnm208
                    break // cls
                  } // gpt
                  // } // cls
                  XATS000_cfail()
                } while (false) // end-of(do)
                // I1CMP:return:jsxtnm209
                return jsxtnm209
              } // endfun(loop_6433)
              let jsxtnm210 = XATSDAPP(loop_6433(jsxtnm198, jsxtnm199))
              jsxtnm211 = jsxtnm210
            } // endlet
            // I1CMP:return:jsxtnm211
            return jsxtnm211
          } // endtimp(list_vt_rappend00(2018))
          let jsxtnm213 = XATSCAPP("list_vt_nil", [0])
          let jsxtnm214 = XATSDAPP(jsxtnm212(jsxtnm197, jsxtnm213))
          // I1CMP:return:jsxtnm214
          return jsxtnm214
        } // endtimp(list_vt_reverse0(2015))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7291(line=455,offs=2)--7308(line=455,offs=19))
        // I0Etapq(I0Ecst(strm_vt_rlistize0(2196)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8956(line=462,offs=1)--8973(line=462,offs=18))));$list(T2JAG($list(T2Pvar(x0[8592])))))
        // T1IMPallx(strm_vt_rlistize0(2196);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7321(line=457,offs=1)--7614(line=480,offs=2)))
        // T1IMPallx(strm_vt_rlistize0(2196)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8593],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_rlistize0(2196);$list(@(x0[5487],T2Pvar(x0[8593])))))))
        let jsxtnm229 = function (arg1) { // timp: strm_vt_rlistize0(2196)
          let jsxtnm216 = arg1
          // I1CMP:start
          let jsxtnm228 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7398(line=465,offs=1)--7420(line=465,offs=23)))
            // I1VALDCL
            let jsxtnm218
            let jsxtnm217 = XATSCAPP("list_vt_nil", [0])
            jsxtnm218 = jsxtnm217
            XATS000_patck(true)
            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7424(line=467,offs=1)--7612(line=479,offs=35)))
            // I1FUNDCL
            function loop_7427(arg1, arg2)
            { // fun
              let jsxtnm219 = arg1
              let jsxtnm220 = arg2
              // I1CMP:start
              let jsxtnm221 = XATS000_dl1az(jsxtnm219)
              let jsxtnm226 // cas
              do {
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(222);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                if (XATS000_ctgeq(jsxtnm221, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                  let jsxtnm222 = jsxtnm221
                  jsxtnm226 = jsxtnm220
                  break // cls
                } // gpt
                // } // cls
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(223);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4505)),I0Pvar(xs(4506)))));$list(@(x1(4505),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(223));0)),@(xs(4506),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(223));1)))))
                if (XATS000_ctgeq(jsxtnm221, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                  let jsxtnm223 = jsxtnm221
                  let jsxtnm224 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm223[0+1]), jsxtnm220])
                  let jsxtnm225 = XATSDAPP(loop_7427(XATSP1CN("strmcon_vt_cons", jsxtnm223[1+1]), jsxtnm224))
                  jsxtnm226 = jsxtnm225
                  break // cls
                } // gpt
                // } // cls
                XATS000_cfail()
              } while (false) // end-of(do)
              // I1CMP:return:jsxtnm226
              return jsxtnm226
            } // endfun(loop_7427)
            let jsxtnm227 = XATSDAPP(loop_7427(jsxtnm216, jsxtnm218))
            jsxtnm228 = jsxtnm227
          } // endlet
          // I1CMP:return:jsxtnm228
          return jsxtnm228
        } // endtimp(strm_vt_rlistize0(2196))
        let jsxtnm230 = XATSDAPP(jsxtnm229(jsxtnm196))
        let jsxtnm231 = XATSDAPP(jsxtnm215(jsxtnm230))
        // I1CMP:return:jsxtnm231
        return jsxtnm231
      } // endtimp(strm_vt_listize0(2194))
      let jsxtnm233 = XATSDAPP(jsxtnm232(jsxtnm195))
      jsxtnm234 = jsxtnm233
      XATS000_patck(true)
      let jsxtnm383 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(JS_spelling.dats)@(1537(line=111,offs=1)--1611(line=113,offs=52)))
        // I1Dimplmnt0(DIMPLone2(iforitm$work0(1435);$list(@(x0[3740],T2Pcst(strn))))):timp
        // LCSRCsome1(JS_spelling.dats)@(1498(line=108,offs=1)--1514(line=108,offs=17))
        // I0Etapq(I0Ecst(list_vt_iforitm0(2045)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list001_vt.sats)@(2675(line=143,offs=1)--2691(line=143,offs=17))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
        // T1IMPallx(list_vt_iforitm0(2045);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list001_vt.dats)@(3901(line=221,offs=1)--3969(line=223,offs=50)))
        // T1IMPallx(list_vt_iforitm0(2045)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8453],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_iforitm0(2045);$list(@(x0[5225],T2Pvar(x0[8453])))))))
        let jsxtnm381
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list001_vt.dats)@(3939(line=223,offs=20)--3952(line=223,offs=33))
        // I0Etapq(I0Ecst(gseq_iforitm0(1732)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gseq001_vt.sats)@(10830(line=584,offs=1)--10843(line=584,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8453]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[8453])))))
        // T1IMPallx(gseq_iforitm0(1732);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(9613(line=652,offs=1)--9818(line=669,offs=2)))
        // T1IMPallx(gseq_iforitm0(1732)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7947],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))),@(x0[7948],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_iforitm0(1732);$list(@(xs[4335],T2Pvar(xs[7947])),@(x0[4336],T2Pvar(x0[7948])))))))
        let jsxtnm380 = function (arg1) { // timp: gseq_iforitm0(1732)
          let jsxtnm239 = arg1
          // I1CMP:start
          let jsxtnm379 // let
          { // let
            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(9729(line=664,offs=1)--9816(line=668,offs=38)))
            // I1Dimplmnt0(DIMPLone2(iforall$test0(1421);$list(@(x0[3726],T2Pvar(x0[7948]))))):timp
            let jsxtnm378 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(9673(line=659,offs=1)--9709(line=661,offs=15)))
              // I1VALDCL
              let jsxtnm377
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(9681(line=660,offs=1)--9694(line=660,offs=14))
              // I0Etapq(I0Ecst(gseq_iforall0(1708)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gseq001_vt.sats)@(6472(line=342,offs=1)--6485(line=342,offs=14))));$list(T2JAG($list(T2Pvar(xs[7947]))),T2JAG($list(T2Pvar(x0[7948])))))
              // T1IMPallx(gseq_iforall0(1708);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5537(line=342,offs=1)--5840(line=368,offs=2)))
              // T1IMPallx(gseq_iforall0(1708)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7915],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))),@(x0[7916],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_iforall0(1708);$list(@(xs[4287],T2Pvar(xs[7915])),@(x0[4288],T2Pvar(x0[7916])))))))
              let jsxtnm375 = function (arg1) { // timp: gseq_iforall0(1708)
                let jsxtnm245 = arg1
                // I1CMP:start
                let jsxtnm374 // let
                { // let
                  // I1Dvardclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5605(line=349,offs=1)--5621(line=349,offs=17)))
                  // I1VARDCL
                  // I1CMP:start
                  // I1CMP:return:XATSINT1(0)
                  let jsxtnm246 = XATSVAR1(XATSINT1(0))
                  // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5625(line=351,offs=1)--5643(line=351,offs=19)))
                  // I1VALDCL
                  let jsxtnm247
                  jsxtnm247 = XATSADDR(jsxtnm246)
                  XATS000_patck(true)
                  // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5647(line=353,offs=1)--5835(line=366,offs=2)))
                  // I1VALDCL
                  let jsxtnm373
                  let jsxtnm372 // let
                  { // let
                    // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5693(line=358,offs=1)--5833(line=365,offs=37)))
                    // I1Dimplmnt0(DIMPLone2(forall$test0(1409);$list(@(x0[3714],T2Pvar(x0[7916]))))):timp
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5658(line=355,offs=1)--5670(line=355,offs=13))
                    // I0Etapq(I0Ecst(gseq_forall0(1692)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gseq001_vt.sats)@(3648(line=181,offs=1)--3660(line=181,offs=13))));$list(T2JAG($list(T2Pvar(xs[7915]))),T2JAG($list(T2Pvar(x0[7916])))))
                    // T1IMPallx(gseq_forall0(1692);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list001_vt.dats)@(1962(line=88,offs=1)--2033(line=91,offs=40)))
                    // T1IMPallx(gseq_forall0(1692)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8437],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8437],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_forall0(1692);$list(@(xs[4255],T2Papps(T2Pcst(list_vt);$list(T2Pvar(x0[8437])))),@(x0[4256],T2Pvar(x0[8437])))))))
                    let jsxtnm370
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list001_vt.dats)@(2014(line=91,offs=21)--2029(line=91,offs=36))
                    // I0Etapq(I0Ecst(list_vt_forall0(2025)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list001_vt.sats)@(1428(line=43,offs=1)--1443(line=43,offs=16))));$list(T2JAG($list(T2Pvar(x0[8437])))))
                    // T1IMPallx(list_vt_forall0(2025);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats)@(2021(line=82,offs=1)--2226(line=95,offs=4)))
                    // T1IMPallx(list_vt_forall0(2025)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8864],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_forall0(2025);$list(@(x0[5205],T2Pvar(x0[8864])))))))
                    let jsxtnm369 = function (arg1) { // timp: list_vt_forall0(2025)
                      let jsxtnm256 = arg1
                      // I1CMP:start
                      let jsxtnm368 // let
                      { // let
                        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats)@(2073(line=87,offs=1)--2124(line=90,offs=24)))
                        // I1FUNDCL
                        function test_2076(arg1)
                        { // fun
                          let jsxtnm257 = arg1
                          // I1CMP:start
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats)@(2103(line=90,offs=3)--2115(line=90,offs=15))
                          // I0Etapq(I0Ecst(forall$test0(1409)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(2108(line=107,offs=1)--2120(line=107,offs=13))));$list(T2JAG($list(T2Pvar(x0[8864])))))
                          // T1IMPallx(forall$test0(1409);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5693(line=358,offs=1)--5833(line=365,offs=37)))
                          // T1IMPallx(forall$test0(1409)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7915],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))),@(x0[7916],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(forall$test0(1409);$list(@(x0[3714],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                          let jsxtnm360 = function (arg1) { // timp: forall$test0(1409)
                            let jsxtnm258 = arg1
                            // I1CMP:start
                            let jsxtnm359 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5767(line=364,offs=1)--5796(line=364,offs=30)))
                              // I1VALDCL
                              let jsxtnm263
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5780(line=364,offs=14)--5788(line=364,offs=22))
                              // I0Etapq(I0Ecst(p2tr_get(2280)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(2573(line=124,offs=1)--2581(line=124,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                              // T1IMPallx(p2tr_get(2280);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(197(line=15,offs=1)--245(line=18,offs=17)))
                              // T1IMPallx(p2tr_get(2280)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5843],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_get(2280);$list(@(a[5620],T2Pvar(a[5843])))))))
                              let jsxtnm261 = function (arg1) { // timp: p2tr_get(2280)
                                let jsxtnm259 = arg1
                                // I1CMP:start
                                let jsxtnm260 = XATS000_dp2tr(jsxtnm259)
                                // I1CMP:return:jsxtnm260
                                return jsxtnm260
                              } // endtimp(p2tr_get(2280))
                              let jsxtnm262 = XATSDAPP(jsxtnm261(jsxtnm247))
                              jsxtnm263 = jsxtnm262
                              XATS000_patck(true)
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5797(line=365,offs=1)--5831(line=365,offs=35)))
                              // I1VALDCL
                              let jsxtnm346
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5806(line=365,offs=10)--5819(line=365,offs=23))
                              // I0Etapq(I0Ecst(iforall$test0(1421)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(2652(line=151,offs=1)--2665(line=151,offs=14))));$list(T2JAG($list(T2Pvar(x0[7916])))))
                              // T1IMPallx(iforall$test0(1421);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(9729(line=664,offs=1)--9816(line=668,offs=38)))
                              // T1IMPallx(iforall$test0(1421)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7947],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))),@(x0[7948],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(iforall$test0(1421);$list(@(x0[3726],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                              let jsxtnm344 = function (arg1, arg2) { // timp: iforall$test0(1421)
                                let jsxtnm264 = arg1
                                let jsxtnm265 = arg2
                                // I1CMP:start
                                let jsxtnm343 // let
                                { // let
                                  // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(9770(line=667,offs=1)--9804(line=668,offs=26)))
                                  // I1VALDCL
                                  let jsxtnm342
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(9779(line=668,offs=1)--9792(line=668,offs=14))
                                  // I0Etapq(I0Ecst(iforitm$work0(1435)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(3293(line=203,offs=1)--3306(line=203,offs=14))));$list(T2JAG($list(T2Pvar(x0[7948])))))
                                  // T1IMPallx(iforitm$work0(1435);LCSRCsome1(JS_spelling.dats)@(1537(line=111,offs=1)--1611(line=113,offs=52)))
                                  // T1IMPallx(iforitm$work0(1435)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(iforitm$work0(1435);$list(@(x0[3740],T2Pcst(strn)))))))
                                  let jsxtnm340 = function (arg1, arg2) { // timp: iforitm$work0(1435)
                                    let jsxtnm266 = arg1
                                    let jsxtnm267 = arg2
                                    // I1CMP:start
                                    // LCSRCsome1(JS_spelling.dats)@(1577(line=113,offs=18)--1585(line=113,offs=26))
                                    // I0Etapq(I0Ecst(gs_println_a4(813)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(13918(line=908,offs=1)--13931(line=908,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                                    // T1IMPallx(gs_println_a4(813);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26470(line=1604,offs=1)--26614(line=1613,offs=59)))
                                    // T1IMPallx(gs_println_a4(813)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7026],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[7027],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[7028],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7029],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a4(813);$list(@(x0[2539],T2Pvar(x0[7026])),@(x1[2540],T2Pvar(x1[7027])),@(x2[2541],T2Pvar(x2[7028])),@(x3[2542],T2Pvar(x3[7029])))))))
                                    let jsxtnm330 = function (arg1, arg2, arg3, arg4) { // timp: gs_println_a4(813)
                                      let jsxtnm268 = arg1
                                      let jsxtnm269 = arg2
                                      let jsxtnm270 = arg3
                                      let jsxtnm271 = arg4
                                      // I1CMP:start
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26558(line=1613,offs=3)--26569(line=1613,offs=14))
                                      // I0Etapq(I0Ecst(gs_print_a4(800)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11925(line=761,offs=1)--11936(line=761,offs=12))));$list(T2JAG($list(T2Pvar(x0[7026]))),T2JAG($list(T2Pvar(x1[7027]))),T2JAG($list(T2Pvar(x2[7028]))),T2JAG($list(T2Pvar(x3[7029])))))
                                      // T1IMPallx(gs_print_a4(800);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21602(line=1332,offs=1)--21862(line=1348,offs=4)))
                                      // T1IMPallx(gs_print_a4(800)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6948],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6949],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x2[6950],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6951],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a4(800);$list(@(x0[2461],T2Pvar(x0[6948])),@(x1[2462],T2Pvar(x1[6949])),@(x2[2463],T2Pvar(x2[6950])),@(x3[2464],T2Pvar(x3[6951])))))))
                                      let jsxtnm321 = function (arg1, arg2, arg3, arg4) { // timp: gs_print_a4(800)
                                        let jsxtnm272 = arg1
                                        let jsxtnm273 = arg2
                                        let jsxtnm274 = arg3
                                        let jsxtnm275 = arg4
                                        // I1CMP:start
                                        let jsxtnm320 // let
                                        { // let
                                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21688(line=1341,offs=1)--21711(line=1342,offs=15)))
                                          // I1VALDCL
                                          let jsxtnm279
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21697(line=1342,offs=1)--21709(line=1342,offs=13))
                                          // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
                                          // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                                          // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
                                          let jsxtnm277 = function () { // timp: gs_print$beg(793)
                                            // I1CMP:start
                                            let jsxtnm276 = XATSTUP0([])
                                            // I1CMP:return:jsxtnm276
                                            return jsxtnm276
                                          } // endtimp(gs_print$beg(793))
                                          let jsxtnm278 = XATSDAPP(jsxtnm277())
                                          jsxtnm279 = jsxtnm278
                                          XATS000_patck(true)
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21724(line=1344,offs=3)--21731(line=1344,offs=10))
                                          // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6948])))))
                                          // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                                          // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                                          let jsxtnm285
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                                          // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                          // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                                          // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                                          let jsxtnm284 = function (arg1) { // timp: strn_print(1029)
                                            let jsxtnm280 = arg1
                                            // I1CMP:start
                                            let jsxtnm283 // let
                                            { // let
                                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                              // I1FUNDCL
                                              // XATS2JS_strn_print_2202
                                                // FJARGdarg($list(I1BNDcons(I1TNM(281);I0Pvar(cs(5212));$list(@(cs(5212),I1Vtnm(I1TNM(281)))))))
                                                // I1CMP:start
                                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                              let jsxtnm282 = XATSDAPP(XATS2JS_strn_print(jsxtnm280))
                                              jsxtnm283 = jsxtnm282
                                            } // endlet
                                            // I1CMP:return:jsxtnm283
                                            return jsxtnm283
                                          } // endtimp(strn_print(1029))
                                          jsxtnm285 = jsxtnm284
                                          let jsxtnm286 = XATSDAPP(jsxtnm285(jsxtnm272))
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21741(line=1344,offs=20)--21753(line=1344,offs=32))
                                          // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                                          // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                                          // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                                          let jsxtnm288 = function () { // timp: gs_print$sep(794)
                                            // I1CMP:start
                                            let jsxtnm287 = XATSTUP0([])
                                            // I1CMP:return:jsxtnm287
                                            return jsxtnm287
                                          } // endtimp(gs_print$sep(794))
                                          let jsxtnm289 = XATSDAPP(jsxtnm288())
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21758(line=1345,offs=3)--21765(line=1345,offs=10))
                                          // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6949])))))
                                          // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
                                          // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
                                          let jsxtnm295
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
                                          // I0Etapq(I0Ecst(sint_print(913)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
                                          // T1IMPallx(sint_print(913);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
                                          // T1IMPallx(sint_print(913)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(913);$list()))))
                                          let jsxtnm294 = function (arg1) { // timp: sint_print(913)
                                            let jsxtnm290 = arg1
                                            // I1CMP:start
                                            let jsxtnm293 // let
                                            { // let
                                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
                                              // I1FUNDCL
                                              // XATS2JS_sint_print_3707
                                                // FJARGdarg($list(I1BNDcons(I1TNM(291);I0Pvar(i0(5076));$list(@(i0(5076),I1Vtnm(I1TNM(291)))))))
                                                // I1CMP:start
                                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
                                              let jsxtnm292 = XATSDAPP(XATS2JS_sint_print(jsxtnm290))
                                              jsxtnm293 = jsxtnm292
                                            } // endlet
                                            // I1CMP:return:jsxtnm293
                                            return jsxtnm293
                                          } // endtimp(sint_print(913))
                                          jsxtnm295 = jsxtnm294
                                          let jsxtnm296 = XATSDAPP(jsxtnm295(jsxtnm273))
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21775(line=1345,offs=20)--21787(line=1345,offs=32))
                                          // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                                          // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                                          // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                                          let jsxtnm298 = function () { // timp: gs_print$sep(794)
                                            // I1CMP:start
                                            let jsxtnm297 = XATSTUP0([])
                                            // I1CMP:return:jsxtnm297
                                            return jsxtnm297
                                          } // endtimp(gs_print$sep(794))
                                          let jsxtnm299 = XATSDAPP(jsxtnm298())
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21792(line=1346,offs=3)--21799(line=1346,offs=10))
                                          // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6950])))))
                                          // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                                          // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                                          let jsxtnm305
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                                          // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                          // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                                          // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                                          let jsxtnm304 = function (arg1) { // timp: strn_print(1029)
                                            let jsxtnm300 = arg1
                                            // I1CMP:start
                                            let jsxtnm303 // let
                                            { // let
                                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                              // I1FUNDCL
                                              // XATS2JS_strn_print_2202
                                                // FJARGdarg($list(I1BNDcons(I1TNM(301);I0Pvar(cs(5212));$list(@(cs(5212),I1Vtnm(I1TNM(301)))))))
                                                // I1CMP:start
                                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                              let jsxtnm302 = XATSDAPP(XATS2JS_strn_print(jsxtnm300))
                                              jsxtnm303 = jsxtnm302
                                            } // endlet
                                            // I1CMP:return:jsxtnm303
                                            return jsxtnm303
                                          } // endtimp(strn_print(1029))
                                          jsxtnm305 = jsxtnm304
                                          let jsxtnm306 = XATSDAPP(jsxtnm305(jsxtnm274))
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21809(line=1346,offs=20)--21821(line=1346,offs=32))
                                          // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                                          // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                                          // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                                          let jsxtnm308 = function () { // timp: gs_print$sep(794)
                                            // I1CMP:start
                                            let jsxtnm307 = XATSTUP0([])
                                            // I1CMP:return:jsxtnm307
                                            return jsxtnm307
                                          } // endtimp(gs_print$sep(794))
                                          let jsxtnm309 = XATSDAPP(jsxtnm308())
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21826(line=1347,offs=3)--21833(line=1347,offs=10))
                                          // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6951])))))
                                          // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                                          // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                                          let jsxtnm315
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                                          // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                          // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                                          // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                                          let jsxtnm314 = function (arg1) { // timp: strn_print(1029)
                                            let jsxtnm310 = arg1
                                            // I1CMP:start
                                            let jsxtnm313 // let
                                            { // let
                                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                              // I1FUNDCL
                                              // XATS2JS_strn_print_2202
                                                // FJARGdarg($list(I1BNDcons(I1TNM(311);I0Pvar(cs(5212));$list(@(cs(5212),I1Vtnm(I1TNM(311)))))))
                                                // I1CMP:start
                                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                              let jsxtnm312 = XATSDAPP(XATS2JS_strn_print(jsxtnm310))
                                              jsxtnm313 = jsxtnm312
                                            } // endlet
                                            // I1CMP:return:jsxtnm313
                                            return jsxtnm313
                                          } // endtimp(strn_print(1029))
                                          jsxtnm315 = jsxtnm314
                                          let jsxtnm316 = XATSDAPP(jsxtnm315(jsxtnm275))
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21843(line=1347,offs=20)--21855(line=1347,offs=32))
                                          // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
                                          // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                                          // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
                                          let jsxtnm318 = function () { // timp: gs_print$end(795)
                                            // I1CMP:start
                                            let jsxtnm317 = XATSTUP0([])
                                            // I1CMP:return:jsxtnm317
                                            return jsxtnm317
                                          } // endtimp(gs_print$end(795))
                                          let jsxtnm319 = XATSDAPP(jsxtnm318())
                                          jsxtnm320 = jsxtnm319
                                        } // endlet
                                        // I1CMP:return:jsxtnm320
                                        return jsxtnm320
                                      } // endtimp(gs_print_a4(800))
                                      let jsxtnm322 = XATSDAPP(jsxtnm321(jsxtnm268, jsxtnm269, jsxtnm270, jsxtnm271))
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26600(line=1613,offs=45)--26607(line=1613,offs=52))
                                      // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                                      // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                                      // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                                      let jsxtnm328
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                                      // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                      // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                                      // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                                      let jsxtnm327 = function (arg1) { // timp: strn_print(1029)
                                        let jsxtnm323 = arg1
                                        // I1CMP:start
                                        let jsxtnm326 // let
                                        { // let
                                          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                          // I1FUNDCL
                                          // XATS2JS_strn_print_2202
                                            // FJARGdarg($list(I1BNDcons(I1TNM(324);I0Pvar(cs(5212));$list(@(cs(5212),I1Vtnm(I1TNM(324)))))))
                                            // I1CMP:start
                                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                          let jsxtnm325 = XATSDAPP(XATS2JS_strn_print(jsxtnm323))
                                          jsxtnm326 = jsxtnm325
                                        } // endlet
                                        // I1CMP:return:jsxtnm326
                                        return jsxtnm326
                                      } // endtimp(strn_print(1029))
                                      jsxtnm328 = jsxtnm327
                                      let jsxtnm329 = XATSDAPP(jsxtnm328(XATSSTRN("\n")))
                                      // I1CMP:return:jsxtnm329
                                      return jsxtnm329
                                    } // endtimp(gs_println_a4(813))
                                    // LCSRCsome1(JS_spelling.dats)@(1596(line=113,offs=37)--1597(line=113,offs=38))
                                    // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                                    // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                    // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                                    let jsxtnm337 = function (arg1, arg2) { // timp: sint_add$sint(925)
                                      let jsxtnm331 = arg1
                                      let jsxtnm332 = arg2
                                      // I1CMP:start
                                      let jsxtnm336 // let
                                      { // let
                                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                        // I1FUNDCL
                                        // XATS2JS_sint_add$sint_2778
                                          // FJARGdarg($list(I1BNDcons(I1TNM(333);I0Pvar(i1(5052));$list(@(i1(5052),I1Vtnm(I1TNM(333))))),I1BNDcons(I1TNM(334);I0Pvar(i2(5053));$list(@(i2(5053),I1Vtnm(I1TNM(334)))))))
                                          // I1CMP:start
                                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                        let jsxtnm335 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm331, jsxtnm332))
                                        jsxtnm336 = jsxtnm335
                                      } // endlet
                                      // I1CMP:return:jsxtnm336
                                      return jsxtnm336
                                    } // endtimp(sint_add$sint(925))
                                    let jsxtnm338 = XATSDAPP(jsxtnm337(jsxtnm266, XATSINT1(1)))
                                    let jsxtnm339 = XATSDAPP(jsxtnm330(XATSSTRN("Word("), jsxtnm338, XATSSTRN("): "), jsxtnm267))
                                    // I1CMP:return:jsxtnm339
                                    return jsxtnm339
                                  } // endtimp(iforitm$work0(1435))
                                  let jsxtnm341 = XATSDAPP(jsxtnm340(jsxtnm264, jsxtnm265))
                                  jsxtnm342 = jsxtnm341
                                  XATS000_patck(true)
                                  jsxtnm343 = XATSBOOL(true)
                                } // endlet
                                // I1CMP:return:jsxtnm343
                                return jsxtnm343
                              } // endtimp(iforall$test0(1421))
                              let jsxtnm345 = XATSDAPP(jsxtnm344(jsxtnm263, jsxtnm258))
                              jsxtnm346 = jsxtnm345
                              XATS000_patck(true)
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5731(line=361,offs=5)--5739(line=361,offs=13))
                              // I0Etapq(I0Ecst(p2tr_set(2281)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(2611(line=127,offs=1)--2619(line=127,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                              // T1IMPallx(p2tr_set(2281);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(246(line=19,offs=1)--305(line=22,offs=27)))
                              // T1IMPallx(p2tr_set(2281)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5844],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_set(2281);$list(@(a[5621],T2Pvar(a[5844])))))))
                              let jsxtnm349 = function (arg1, arg2) { // timp: p2tr_set(2281)
                                let jsxtnm347 = arg1
                                let jsxtnm348 = arg2
                                // I1CMP:start
                                XATS000_assgn(jsxtnm347, jsxtnm348)
                                // I1CMP:return:[]
                                return []
                              } // endtimp(p2tr_set(2281))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(5750(line=361,offs=24)--5751(line=361,offs=25))
                              // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                              // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                              // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                              let jsxtnm356 = function (arg1, arg2) { // timp: sint_add$sint(925)
                                let jsxtnm350 = arg1
                                let jsxtnm351 = arg2
                                // I1CMP:start
                                let jsxtnm355 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                  // I1FUNDCL
                                  // XATS2JS_sint_add$sint_2778
                                    // FJARGdarg($list(I1BNDcons(I1TNM(352);I0Pvar(i1(5052));$list(@(i1(5052),I1Vtnm(I1TNM(352))))),I1BNDcons(I1TNM(353);I0Pvar(i2(5053));$list(@(i2(5053),I1Vtnm(I1TNM(353)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm354 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm350, jsxtnm351))
                                  jsxtnm355 = jsxtnm354
                                } // endlet
                                // I1CMP:return:jsxtnm355
                                return jsxtnm355
                              } // endtimp(sint_add$sint(925))
                              let jsxtnm357 = XATSDAPP(jsxtnm356(jsxtnm263, XATSINT1(1)))
                              let jsxtnm358 = XATSDAPP(jsxtnm349(jsxtnm247, jsxtnm357))
                              jsxtnm359 = jsxtnm346
                            } // endlet
                            // I1CMP:return:jsxtnm359
                            return jsxtnm359
                          } // endtimp(forall$test0(1409))
                          let jsxtnm361 = XATSDAPP(jsxtnm360(jsxtnm257))
                          // I1CMP:return:jsxtnm361
                          return jsxtnm361
                        } // endfun(test_2076)
                        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats)@(2125(line=91,offs=1)--2165(line=92,offs=37)))
                        // I1FUNDCL
                        function free_2128(arg1)
                        { // fun
                          let jsxtnm362 = arg1
                          // I1CMP:start
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats)@(2151(line=92,offs=23)--2157(line=92,offs=29))
                          // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1591(line=56,offs=1)--1597(line=56,offs=7))));$list(T2JAG($list(T2Pvar(x0[8864])))))
                          // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
                          // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5690],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[418],T2Pvar(x0[5690])))))))
                          let jsxtnm365 = function (arg1) { // timp: g_free(23)
                            let jsxtnm363 = arg1
                            // I1CMP:start
                            let jsxtnm364 = XATSTUP0([])
                            // I1CMP:return:jsxtnm364
                            return jsxtnm364
                          } // endtimp(g_free(23))
                          let jsxtnm366 = XATSDAPP(jsxtnm365(jsxtnm362))
                          // I1CMP:return:jsxtnm366
                          return jsxtnm366
                        } // endfun(free_2128)
                        let jsxtnm367 = XATSDAPP(XATS2JS_list_vt_forall0$f1un(jsxtnm256, test_2076, free_2128))
                        jsxtnm368 = jsxtnm367
                      } // endlet
                      // I1CMP:return:jsxtnm368
                      return jsxtnm368
                    } // endtimp(list_vt_forall0(2025))
                    jsxtnm370 = jsxtnm369
                    let jsxtnm371 = XATSDAPP(jsxtnm370(jsxtnm245))
                    jsxtnm372 = jsxtnm371
                  } // endlet
                  jsxtnm373 = jsxtnm372
                  XATS000_patck(true)
                  jsxtnm374 = jsxtnm373
                } // endlet
                // I1CMP:return:jsxtnm374
                return jsxtnm374
              } // endtimp(gseq_iforall0(1708))
              let jsxtnm376 = XATSDAPP(jsxtnm375(jsxtnm239))
              jsxtnm377 = jsxtnm376
              XATS000_patck(true)
              jsxtnm378 = []
            } // endlet
            jsxtnm379 = jsxtnm378
          } // endlet
          // I1CMP:return:jsxtnm379
          return jsxtnm379
        } // endtimp(gseq_iforitm0(1732))
        jsxtnm381 = jsxtnm380
        let jsxtnm382 = XATSDAPP(jsxtnm381(jsxtnm234))
        jsxtnm383 = jsxtnm382
      } // endlet
      jsxtnm384 = jsxtnm383
    } // endlet
    jsxtnm385 = jsxtnm384
  } // endlet
  // I1CMP:return:jsxtnm385
  return jsxtnm385
} // endfun(impl)
// LCSRCsome1(JS_spelling.dats)@(1950(line=127,offs=1)--1950(line=127,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(JS_spelling.dats)@(1950(line=127,offs=1)--1950(line=127,offs=1));D3Cnone0()))
