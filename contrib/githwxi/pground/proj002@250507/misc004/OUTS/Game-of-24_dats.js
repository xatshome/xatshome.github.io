// Mon Jan 26 11:54:08 AM EST 2026
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
// I1Dinclude(LCSRCsome1(Game-of-24.dats)@(41(line=3,offs=1)--82(line=4,offs=33)))
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
// I1Dinclude(LCSRCsome1(Game-of-24.dats)@(83(line=5,offs=1)--127(line=6,offs=36)))
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
// LCSRCsome1(Game-of-24.dats)@(1046(line=30,offs=1)--1067(line=31,offs=13))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rat;S2Ecst(double)))))
// LCSRCsome1(Game-of-24.dats)@(1068(line=32,offs=1)--1092(line=33,offs=16))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Cabstype(rat_type;A2TDFeqeq(S2Eimpr(LCSRCsome1(Game-of-24.dats)@(1089(line=33,offs=13)--1092(line=33,offs=16));S2Ecst(rat)))))))
// LCSRCsome1(Game-of-24.dats)@(1096(line=35,offs=1)--1119(line=35,offs=24))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rat;S2Ecst(rat_type)))))
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1163(line=39,offs=1)--1213(line=42,offs=26)))
// I1Dimplmnt0(DIMPLone2(g_ptype(196);$list(@(vw[749],T2Pcst(rat))))):timp
// LCSRCsome1(Game-of-24.dats)@(1237(line=45,offs=1)--1264(line=45,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();<;D2PTMsome(100;D2ITMcst($list(g_lt(224))))))))
// LCSRCsome1(Game-of-24.dats)@(1265(line=46,offs=1)--1292(line=46,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();>;D2PTMsome(100;D2ITMcst($list(g_gt(225))))))))
// LCSRCsome1(Game-of-24.dats)@(1293(line=47,offs=1)--1320(line=47,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();=;D2PTMsome(100;D2ITMcst($list(g_eq(226))))))))
// LCSRCsome1(Game-of-24.dats)@(1324(line=49,offs=1)--1352(line=49,offs=29))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();+;D2PTMsome(100;D2ITMcst($list(g_add(215))))))))
// LCSRCsome1(Game-of-24.dats)@(1353(line=50,offs=1)--1381(line=50,offs=29))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();-;D2PTMsome(100;D2ITMcst($list(g_sub(216))))))))
// LCSRCsome1(Game-of-24.dats)@(1382(line=51,offs=1)--1410(line=51,offs=29))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();*;D2PTMsome(100;D2ITMcst($list(g_mul(217))))))))
// LCSRCsome1(Game-of-24.dats)@(1411(line=52,offs=1)--1439(line=52,offs=29))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();/;D2PTMsome(100;D2ITMcst($list(g_div(218))))))))
// LCSRCsome1(Game-of-24.dats)@(1443(line=54,offs=1)--1473(line=54,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();abs;D2PTMsome(100;D2ITMcst($list(g_abs(212))))))))
// LCSRCsome1(Game-of-24.dats)@(1474(line=55,offs=1)--1504(line=55,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();neg;D2PTMsome(100;D2ITMcst($list(g_neg(211))))))))
// I1Dlocal0(LCSRCsome1(Game-of-24.dats)@(1551(line=60,offs=1)--2091(line=93,offs=7)))
// LCSRCsome1(Game-of-24.dats)@(1560(line=62,offs=1)--1584(line=63,offs=16))
// I1Dnone1(I0Dnone1(LCSRCsome1(Game-of-24.dats)@(1560(line=62,offs=1)--1584(line=63,offs=16));D3Cabsimpl(T_ABSIMPL();SIMPLone1(rat_type);S2Ecst(dflt))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(1599(line=67,offs=1)--1637(line=69,offs=21)))
// I1FUNDCL
function rat_mkof_dflt_1602(arg1)
{ // fun
  let jsxtnm2 = arg1
  // I1CMP:start
  // I1CMP:return:jsxtnm2
  return jsxtnm2
} // endfun(rat_mkof_dflt_1602)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(1638(line=70,offs=1)--1703(line=73,offs=30)))
// I1FUNDCL
function rat_mkof_sint_1641(arg1)
{ // fun
  let jsxtnm3 = arg1
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(1688(line=73,offs=15)--1692(line=73,offs=19))
  // I0Etapq(I0Ecst(g_si(207)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1563(line=56,offs=1)--1567(line=56,offs=5))));$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list())))))))
  // T1IMPallx(g_si(207);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1430(line=40,offs=1)--1557(line=50,offs=31)))
  // T1IMPallx(g_si(207)<$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list()))))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(207);$list(@(a[757],T2Pcst(dflt)))))))
  let jsxtnm8 = function (arg1) { // timp: g_si(207)
    let jsxtnm4 = arg1
    // I1CMP:start
    let jsxtnm7 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1497(line=47,offs=1)--1555(line=50,offs=29)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1505(line=48,offs=1)--1555(line=50,offs=29))
      // I1FUNDCL
      // XATS2JS_si2dflt_1510
        // FJARGdarg($list(I1BNDcons(I1TNM(5);I0Pvar(i1(4993));$list(@(i1(4993),I1Vtnm(I1TNM(5)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_si2dflt);G1Nlist($list())) // I1CMP:return
      let jsxtnm6 = XATSCAST("XATS2JS_si2dflt", [jsxtnm4])
      jsxtnm7 = jsxtnm6
    } // endlet
    // I1CMP:return:jsxtnm7
    return jsxtnm7
  } // endtimp(g_si(207))
  let jsxtnm9 = XATSDAPP(jsxtnm8(jsxtnm3))
  let jsxtnm10 = XATSDAPP(rat_mkof_dflt_1602(jsxtnm9))
  // I1CMP:return:jsxtnm10
  return jsxtnm10
} // endfun(rat_mkof_sint_1641)
// LCSRCsome1(Game-of-24.dats)@(1704(line=74,offs=1)--1735(line=74,offs=32))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();rat;D2PTMsome(0;D2ITMvar(rat_mkof_dflt(5214)))))))
// LCSRCsome1(Game-of-24.dats)@(1736(line=75,offs=1)--1767(line=75,offs=32))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();rat;D2PTMsome(0;D2ITMvar(rat_mkof_sint(5216)))))))
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1771(line=77,offs=1)--1802(line=78,offs=23)))
// I1Dimplmnt0(DIMPLone2(g_si(207);$list(@(a[757],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1806(line=80,offs=1)--1838(line=80,offs=33)))
// I1Dimplmnt0(DIMPLone2(g_abs(212);$list(@(x0[762],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1842(line=82,offs=1)--1879(line=82,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_cmp(230);$list(@(a[780],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1883(line=84,offs=1)--1920(line=84,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_add(215);$list(@(x0[765],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1921(line=85,offs=1)--1958(line=85,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_sub(216);$list(@(x0[766],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1959(line=86,offs=1)--1996(line=86,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_mul(217);$list(@(x0[767],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1997(line=87,offs=1)--2034(line=87,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_div(218);$list(@(x0[768],T2Pcst(rat))))):timp
// LCSRCsome1(Game-of-24.dats)@(2173(line=98,offs=1)--2291(line=101,offs=44))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Cdatatype(D1Cdatatype(T_DATATYPE(0);$list(D1TYPnode(T_IDALP(expr);$list();$optn();$list(D1TCNnode($list();T_IDALP(Int);$list();$optn(S1El1st($list(S1Eid0(int))))),D1TCNnode($list();T_IDALP(Add);$list();$optn(S1El1st($list(S1Eid0(expr),S1Eid0(expr))))),D1TCNnode($list();T_IDALP(Sub);$list();$optn(S1El1st($list(S1Eid0(expr),S1Eid0(expr))))),D1TCNnode($list();T_IDALP(Mul);$list();$optn(S1El1st($list(S1Eid0(expr),S1Eid0(expr))))),D1TCNnode($list();T_IDALP(Div);$list();$optn(S1El1st($list(S1Eid0(expr),S1Eid0(expr))))))));WD1CSnone());$list(expr)))))
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(2338(line=106,offs=1)--2735(line=137,offs=2)))
// I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr))))):timp
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(2983(line=151,offs=1)--3252(line=164,offs=33)))
// I1FUNDCL
function expr_eval_2986(arg1)
{ // fun
  let jsxtnm27 = arg1
  // I1CMP:start
  let jsxtnm84 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(28);I0Pdapp(I0Pcon(Int(32));$list(I0Pvar(i0(5232))));$list(@(i0(5232),I1Vp1cn(I0Pcon(Int(32));I1Vtnm(I1TNM(28));0)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Int",0))) { // gpt
      let jsxtnm28 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3042(line=156,offs=14)--3046(line=156,offs=18))
      // I0Etapq(I0Ecst(g_si(207)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1563(line=56,offs=1)--1567(line=56,offs=5))));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_si(207);LCSRCsome1(Game-of-24.dats)@(1771(line=77,offs=1)--1802(line=78,offs=23)))
      // T1IMPallx(g_si(207)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(207);$list(@(a[757],T2Pcst(rat)))))))
      let jsxtnm34
      // LCSRCsome1(Game-of-24.dats)@(1792(line=78,offs=13)--1796(line=78,offs=17))
      // I0Etapq(I0Ecst(g_si(207)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1563(line=56,offs=1)--1567(line=56,offs=5))));$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list())))))))
      // T1IMPallx(g_si(207);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1430(line=40,offs=1)--1557(line=50,offs=31)))
      // T1IMPallx(g_si(207)<$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list()))))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(207);$list(@(a[757],T2Pcst(dflt)))))))
      let jsxtnm33 = function (arg1) { // timp: g_si(207)
        let jsxtnm29 = arg1
        // I1CMP:start
        let jsxtnm32 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1497(line=47,offs=1)--1555(line=50,offs=29)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1505(line=48,offs=1)--1555(line=50,offs=29))
          // I1FUNDCL
          // XATS2JS_si2dflt_1510
            // FJARGdarg($list(I1BNDcons(I1TNM(30);I0Pvar(i1(4993));$list(@(i1(4993),I1Vtnm(I1TNM(30)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_si2dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm31 = XATSCAST("XATS2JS_si2dflt", [jsxtnm29])
          jsxtnm32 = jsxtnm31
        } // endlet
        // I1CMP:return:jsxtnm32
        return jsxtnm32
      } // endtimp(g_si(207))
      jsxtnm34 = jsxtnm33
      let jsxtnm35 = XATSDAPP(jsxtnm34(XATSP1CN("Int", jsxtnm28[0+1])))
      jsxtnm84 = jsxtnm35
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(36);I0Pdapp(I0Pcon(Add(33));$list(I0Pvar(x1(5233)),I0Pvar(x2(5234))));$list(@(x1(5233),I1Vp1cn(I0Pcon(Add(33));I1Vtnm(I1TNM(36));0)),@(x2(5234),I1Vp1cn(I0Pcon(Add(33));I1Vtnm(I1TNM(36));1)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Add",1))) { // gpt
      let jsxtnm36 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3089(line=158,offs=17)--3090(line=158,offs=18))
      // I0Etapq(I0Ecst(g_add(215)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1957(line=93,offs=1)--1962(line=93,offs=6))));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_add(215);LCSRCsome1(Game-of-24.dats)@(1883(line=84,offs=1)--1920(line=84,offs=38)))
      // T1IMPallx(g_add(215)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_add(215);$list(@(x0[765],T2Pcst(rat)))))))
      let jsxtnm44
      // LCSRCsome1(Game-of-24.dats)@(1905(line=84,offs=23)--1918(line=84,offs=36))
      // I0Etapq(I0Ecst(dflt_add$dflt(1002)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gflt000.sats)@(4366(line=215,offs=1)--4379(line=215,offs=14))));$list(T2JAG($list())))
      // T1IMPallx(dflt_add$dflt(1002);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3554(line=222,offs=1)--3718(line=234,offs=2)))
      // T1IMPallx(dflt_add$dflt(1002)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_add$dflt(1002);$list()))))
      let jsxtnm43 = function (arg1, arg2) { // timp: dflt_add$dflt(1002)
        let jsxtnm37 = arg1
        let jsxtnm38 = arg2
        // I1CMP:start
        let jsxtnm42 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3644(line=230,offs=1)--3716(line=233,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3652(line=231,offs=1)--3716(line=233,offs=39))
          // I1FUNDCL
          // XATS2JS_dflt_add$dflt_3655
            // FJARGdarg($list(I1BNDcons(I1TNM(39);I0Pvar(f1(5044));$list(@(f1(5044),I1Vtnm(I1TNM(39))))),I1BNDcons(I1TNM(40);I0Pvar(f2(5045));$list(@(f2(5045),I1Vtnm(I1TNM(40)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_add$dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm41 = XATSDAPP(XATS2JS_dflt_add$dflt(jsxtnm37, jsxtnm38))
          jsxtnm42 = jsxtnm41
        } // endlet
        // I1CMP:return:jsxtnm42
        return jsxtnm42
      } // endtimp(dflt_add$dflt(1002))
      jsxtnm44 = jsxtnm43
      let jsxtnm45 = XATSDAPP(expr_eval_2986(XATSP1CN("Add", jsxtnm36[0+1])))
      let jsxtnm46 = XATSDAPP(expr_eval_2986(XATSP1CN("Add", jsxtnm36[1+1])))
      let jsxtnm47 = XATSDAPP(jsxtnm44(jsxtnm45, jsxtnm46))
      jsxtnm84 = jsxtnm47
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(48);I0Pdapp(I0Pcon(Sub(34));$list(I0Pvar(x1(5235)),I0Pvar(x2(5236))));$list(@(x1(5235),I1Vp1cn(I0Pcon(Sub(34));I1Vtnm(I1TNM(48));0)),@(x2(5236),I1Vp1cn(I0Pcon(Sub(34));I1Vtnm(I1TNM(48));1)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Sub",2))) { // gpt
      let jsxtnm48 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3138(line=160,offs=17)--3139(line=160,offs=18))
      // I0Etapq(I0Ecst(g_sub(216)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1991(line=96,offs=1)--1996(line=96,offs=6))));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_sub(216);LCSRCsome1(Game-of-24.dats)@(1921(line=85,offs=1)--1958(line=85,offs=38)))
      // T1IMPallx(g_sub(216)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_sub(216);$list(@(x0[766],T2Pcst(rat)))))))
      let jsxtnm56
      // LCSRCsome1(Game-of-24.dats)@(1943(line=85,offs=23)--1956(line=85,offs=36))
      // I0Etapq(I0Ecst(dflt_sub$dflt(1003)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gflt000.sats)@(4413(line=218,offs=1)--4426(line=218,offs=14))));$list(T2JAG($list())))
      // T1IMPallx(dflt_sub$dflt(1003);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3722(line=236,offs=1)--3886(line=248,offs=2)))
      // T1IMPallx(dflt_sub$dflt(1003)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_sub$dflt(1003);$list()))))
      let jsxtnm55 = function (arg1, arg2) { // timp: dflt_sub$dflt(1003)
        let jsxtnm49 = arg1
        let jsxtnm50 = arg2
        // I1CMP:start
        let jsxtnm54 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3812(line=244,offs=1)--3884(line=247,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3820(line=245,offs=1)--3884(line=247,offs=39))
          // I1FUNDCL
          // XATS2JS_dflt_sub$dflt_3823
            // FJARGdarg($list(I1BNDcons(I1TNM(51);I0Pvar(f1(5049));$list(@(f1(5049),I1Vtnm(I1TNM(51))))),I1BNDcons(I1TNM(52);I0Pvar(f2(5050));$list(@(f2(5050),I1Vtnm(I1TNM(52)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_sub$dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm53 = XATSDAPP(XATS2JS_dflt_sub$dflt(jsxtnm49, jsxtnm50))
          jsxtnm54 = jsxtnm53
        } // endlet
        // I1CMP:return:jsxtnm54
        return jsxtnm54
      } // endtimp(dflt_sub$dflt(1003))
      jsxtnm56 = jsxtnm55
      let jsxtnm57 = XATSDAPP(expr_eval_2986(XATSP1CN("Sub", jsxtnm48[0+1])))
      let jsxtnm58 = XATSDAPP(expr_eval_2986(XATSP1CN("Sub", jsxtnm48[1+1])))
      let jsxtnm59 = XATSDAPP(jsxtnm56(jsxtnm57, jsxtnm58))
      jsxtnm84 = jsxtnm59
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(60);I0Pdapp(I0Pcon(Mul(35));$list(I0Pvar(x1(5237)),I0Pvar(x2(5238))));$list(@(x1(5237),I1Vp1cn(I0Pcon(Mul(35));I1Vtnm(I1TNM(60));0)),@(x2(5238),I1Vp1cn(I0Pcon(Mul(35));I1Vtnm(I1TNM(60));1)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Mul",3))) { // gpt
      let jsxtnm60 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3187(line=162,offs=17)--3188(line=162,offs=18))
      // I0Etapq(I0Ecst(g_mul(217)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(2025(line=99,offs=1)--2030(line=99,offs=6))));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_mul(217);LCSRCsome1(Game-of-24.dats)@(1959(line=86,offs=1)--1996(line=86,offs=38)))
      // T1IMPallx(g_mul(217)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_mul(217);$list(@(x0[767],T2Pcst(rat)))))))
      let jsxtnm68
      // LCSRCsome1(Game-of-24.dats)@(1981(line=86,offs=23)--1994(line=86,offs=36))
      // I0Etapq(I0Ecst(dflt_mul$dflt(1004)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gflt000.sats)@(4460(line=221,offs=1)--4473(line=221,offs=14))));$list(T2JAG($list())))
      // T1IMPallx(dflt_mul$dflt(1004);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3890(line=250,offs=1)--4054(line=262,offs=2)))
      // T1IMPallx(dflt_mul$dflt(1004)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_mul$dflt(1004);$list()))))
      let jsxtnm67 = function (arg1, arg2) { // timp: dflt_mul$dflt(1004)
        let jsxtnm61 = arg1
        let jsxtnm62 = arg2
        // I1CMP:start
        let jsxtnm66 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3980(line=258,offs=1)--4052(line=261,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3988(line=259,offs=1)--4052(line=261,offs=39))
          // I1FUNDCL
          // XATS2JS_dflt_mul$dflt_3991
            // FJARGdarg($list(I1BNDcons(I1TNM(63);I0Pvar(f1(5054));$list(@(f1(5054),I1Vtnm(I1TNM(63))))),I1BNDcons(I1TNM(64);I0Pvar(f2(5055));$list(@(f2(5055),I1Vtnm(I1TNM(64)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_mul$dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm65 = XATSDAPP(XATS2JS_dflt_mul$dflt(jsxtnm61, jsxtnm62))
          jsxtnm66 = jsxtnm65
        } // endlet
        // I1CMP:return:jsxtnm66
        return jsxtnm66
      } // endtimp(dflt_mul$dflt(1004))
      jsxtnm68 = jsxtnm67
      let jsxtnm69 = XATSDAPP(expr_eval_2986(XATSP1CN("Mul", jsxtnm60[0+1])))
      let jsxtnm70 = XATSDAPP(expr_eval_2986(XATSP1CN("Mul", jsxtnm60[1+1])))
      let jsxtnm71 = XATSDAPP(jsxtnm68(jsxtnm69, jsxtnm70))
      jsxtnm84 = jsxtnm71
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(72);I0Pdapp(I0Pcon(Div(36));$list(I0Pvar(x1(5239)),I0Pvar(x2(5240))));$list(@(x1(5239),I1Vp1cn(I0Pcon(Div(36));I1Vtnm(I1TNM(72));0)),@(x2(5240),I1Vp1cn(I0Pcon(Div(36));I1Vtnm(I1TNM(72));1)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Div",4))) { // gpt
      let jsxtnm72 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3236(line=164,offs=17)--3237(line=164,offs=18))
      // I0Etapq(I0Ecst(g_div(218)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(2059(line=102,offs=1)--2064(line=102,offs=6))));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_div(218);LCSRCsome1(Game-of-24.dats)@(1997(line=87,offs=1)--2034(line=87,offs=38)))
      // T1IMPallx(g_div(218)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_div(218);$list(@(x0[768],T2Pcst(rat)))))))
      let jsxtnm80
      // LCSRCsome1(Game-of-24.dats)@(2019(line=87,offs=23)--2032(line=87,offs=36))
      // I0Etapq(I0Ecst(dflt_div$dflt(1005)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gflt000.sats)@(4507(line=224,offs=1)--4520(line=224,offs=14))));$list(T2JAG($list())))
      // T1IMPallx(dflt_div$dflt(1005);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(4058(line=264,offs=1)--4222(line=276,offs=2)))
      // T1IMPallx(dflt_div$dflt(1005)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_div$dflt(1005);$list()))))
      let jsxtnm79 = function (arg1, arg2) { // timp: dflt_div$dflt(1005)
        let jsxtnm73 = arg1
        let jsxtnm74 = arg2
        // I1CMP:start
        let jsxtnm78 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(4148(line=272,offs=1)--4220(line=275,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(4156(line=273,offs=1)--4220(line=275,offs=39))
          // I1FUNDCL
          // XATS2JS_dflt_div$dflt_4159
            // FJARGdarg($list(I1BNDcons(I1TNM(75);I0Pvar(f1(5059));$list(@(f1(5059),I1Vtnm(I1TNM(75))))),I1BNDcons(I1TNM(76);I0Pvar(f2(5060));$list(@(f2(5060),I1Vtnm(I1TNM(76)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_div$dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm77 = XATSDAPP(XATS2JS_dflt_div$dflt(jsxtnm73, jsxtnm74))
          jsxtnm78 = jsxtnm77
        } // endlet
        // I1CMP:return:jsxtnm78
        return jsxtnm78
      } // endtimp(dflt_div$dflt(1005))
      jsxtnm80 = jsxtnm79
      let jsxtnm81 = XATSDAPP(expr_eval_2986(XATSP1CN("Div", jsxtnm72[0+1])))
      let jsxtnm82 = XATSDAPP(expr_eval_2986(XATSP1CN("Div", jsxtnm72[1+1])))
      let jsxtnm83 = XATSDAPP(jsxtnm80(jsxtnm81, jsxtnm82))
      jsxtnm84 = jsxtnm83
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm84
  return jsxtnm84
} // endfun(expr_eval_2986)
// LCSRCsome1(Game-of-24.dats)@(3256(line=166,offs=1)--3292(line=166,offs=37))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();eval;D2PTMsome(1000;D2ITMvar(expr_eval(5230)))))))
// I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(3476(line=178,offs=1)--3499(line=179,offs=20)))
// I1VALDCL
let jsxtnm86
let jsxtnm85 = XATSDAPP(rat_mkof_dflt_1602(XATSFLT1(1E-6)))
jsxtnm86 = jsxtnm85
XATS000_patck(true)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(3503(line=181,offs=1)--3565(line=184,offs=29)))
// I1FUNDCL
function expr_iseqz_3506(arg1)
{ // fun
  let jsxtnm87 = arg1
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(3556(line=184,offs=20)--3557(line=184,offs=21))
  // I0Etapq(I0Ecst(g_lt(224)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gord000.sats)@(1430(line=44,offs=1)--1434(line=44,offs=5))));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_lt(224);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1521(line=50,offs=1)--1579(line=54,offs=23)))
  // T1IMPallx(g_lt(224)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list(@(x0[5851],T2Pcst(rat_type)));I1Dimplmnt0(DIMPLone2(g_lt(224);$list(@(a[774],T2Pvar(x0[5851])))))))
  let jsxtnm107 = function (arg1, arg2) { // timp: g_lt(224)
    let jsxtnm88 = arg1
    let jsxtnm89 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1575(line=54,offs=19)--1576(line=54,offs=20))
    // I0Etapq(I0Ecst(sint_lt$sint(918)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2041(line=83,offs=1)--2053(line=83,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(sint_lt$sint(918);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1612(line=56,offs=1)--1773(line=68,offs=2)))
    // T1IMPallx(sint_lt$sint(918)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_lt$sint(918);$list()))))
    let jsxtnm96 = function (arg1, arg2) { // timp: sint_lt$sint(918)
      let jsxtnm90 = arg1
      let jsxtnm91 = arg2
      // I1CMP:start
      let jsxtnm95 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1700(line=64,offs=1)--1771(line=67,offs=39)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1708(line=65,offs=1)--1771(line=67,offs=39))
        // I1FUNDCL
        // XATS2JS_sint_lt$sint_1711
          // FJARGdarg($list(I1BNDcons(I1TNM(92);I0Pvar(i1(4903));$list(@(i1(4903),I1Vtnm(I1TNM(92))))),I1BNDcons(I1TNM(93);I0Pvar(i2(4904));$list(@(i2(4904),I1Vtnm(I1TNM(93)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_lt$sint);G1Nlist($list())) // I1CMP:return
        let jsxtnm94 = XATSDAPP(XATS2JS_sint_lt$sint(jsxtnm90, jsxtnm91))
        jsxtnm95 = jsxtnm94
      } // endlet
      // I1CMP:return:jsxtnm95
      return jsxtnm95
    } // endtimp(sint_lt$sint(918))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1557(line=54,offs=1)--1562(line=54,offs=6))
    // I0Etapq(I0Ecst(g_cmp(230)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gord000.sats)@(1630(line=66,offs=1)--1635(line=66,offs=6))));$list(T2JAG($list(T2Pvar(x0[5851])))))
    // T1IMPallx(g_cmp(230);LCSRCsome1(Game-of-24.dats)@(1842(line=82,offs=1)--1879(line=82,offs=38)))
    // T1IMPallx(g_cmp(230)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_cmp(230);$list(@(a[780],T2Pcst(rat)))))))
    let jsxtnm104
    // LCSRCsome1(Game-of-24.dats)@(1864(line=82,offs=23)--1877(line=82,offs=36))
    // I0Etapq(I0Ecst(dflt_cmp$dflt(999)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gflt000.sats)@(4053(line=197,offs=1)--4066(line=197,offs=14))));$list(T2JAG($list())))
    // T1IMPallx(dflt_cmp$dflt(999);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3343(line=205,offs=1)--3507(line=217,offs=2)))
    // T1IMPallx(dflt_cmp$dflt(999)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_cmp$dflt(999);$list()))))
    let jsxtnm103 = function (arg1, arg2) { // timp: dflt_cmp$dflt(999)
      let jsxtnm97 = arg1
      let jsxtnm98 = arg2
      // I1CMP:start
      let jsxtnm102 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3433(line=213,offs=1)--3505(line=216,offs=39)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3441(line=214,offs=1)--3505(line=216,offs=39))
        // I1FUNDCL
        // XATS2JS_dflt_cmp$dflt_3444
          // FJARGdarg($list(I1BNDcons(I1TNM(99);I0Pvar(f1(5039));$list(@(f1(5039),I1Vtnm(I1TNM(99))))),I1BNDcons(I1TNM(100);I0Pvar(f2(5040));$list(@(f2(5040),I1Vtnm(I1TNM(100)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_cmp$dflt);G1Nlist($list())) // I1CMP:return
        let jsxtnm101 = XATSDAPP(XATS2JS_dflt_cmp$dflt(jsxtnm97, jsxtnm98))
        jsxtnm102 = jsxtnm101
      } // endlet
      // I1CMP:return:jsxtnm102
      return jsxtnm102
    } // endtimp(dflt_cmp$dflt(999))
    jsxtnm104 = jsxtnm103
    let jsxtnm105 = XATSDAPP(jsxtnm104(jsxtnm88, jsxtnm89))
    let jsxtnm106 = XATSDAPP(jsxtnm96(jsxtnm105, XATSINT1(0)))
    // I1CMP:return:jsxtnm106
    return jsxtnm106
  } // endtimp(g_lt(224))
  // LCSRCsome1(Game-of-24.dats)@(3537(line=184,offs=1)--3540(line=184,offs=4))
  // I0Etapq(I0Ecst(g_abs(212)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1812(line=79,offs=1)--1817(line=79,offs=6))));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_abs(212);LCSRCsome1(Game-of-24.dats)@(1806(line=80,offs=1)--1838(line=80,offs=33)))
  // T1IMPallx(g_abs(212)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_abs(212);$list(@(x0[762],T2Pcst(rat)))))))
  let jsxtnm113
  // LCSRCsome1(Game-of-24.dats)@(1828(line=80,offs=23)--1836(line=80,offs=31))
  // I0Etapq(I0Ecst(dflt_abs(973)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gflt000.sats)@(1526(line=50,offs=1)--1534(line=50,offs=9))));$list(T2JAG($list())))
  // T1IMPallx(dflt_abs(973);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1766(line=70,offs=1)--1901(line=81,offs=31)))
  // T1IMPallx(dflt_abs(973)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_abs(973);$list()))))
  let jsxtnm112 = function (arg1) { // timp: dflt_abs(973)
    let jsxtnm108 = arg1
    // I1CMP:start
    let jsxtnm111 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1842(line=78,offs=1)--1899(line=81,offs=29)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1850(line=79,offs=1)--1899(line=81,offs=29))
      // I1FUNDCL
      // XATS2JS_dflt_abs_1853
        // FJARGdarg($list(I1BNDcons(I1TNM(109);I0Pvar(f1(4999));$list(@(f1(4999),I1Vtnm(I1TNM(109)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_abs);G1Nlist($list())) // I1CMP:return
      let jsxtnm110 = XATSDAPP(XATS2JS_dflt_abs(jsxtnm108))
      jsxtnm111 = jsxtnm110
    } // endlet
    // I1CMP:return:jsxtnm111
    return jsxtnm111
  } // endtimp(dflt_abs(973))
  jsxtnm113 = jsxtnm112
  let jsxtnm114 = XATSDAPP(expr_eval_2986(jsxtnm87))
  let jsxtnm115 = XATSDAPP(jsxtnm113(jsxtnm114))
  let jsxtnm116 = XATSDAPP(jsxtnm107(jsxtnm115, jsxtnm86))
  // I1CMP:return:jsxtnm116
  return jsxtnm116
} // endfun(expr_iseqz_3506)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(3569(line=186,offs=1)--3642(line=190,offs=34)))
// I1FUNDCL
function expr_iseq24_3572(arg1)
{ // fun
  let jsxtnm117 = arg1
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(3633(line=190,offs=25)--3634(line=190,offs=26))
  // I0Etapq(I0Ecst(g_lt(224)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gord000.sats)@(1430(line=44,offs=1)--1434(line=44,offs=5))));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_lt(224);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1521(line=50,offs=1)--1579(line=54,offs=23)))
  // T1IMPallx(g_lt(224)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list(@(x0[5851],T2Pcst(rat_type)));I1Dimplmnt0(DIMPLone2(g_lt(224);$list(@(a[774],T2Pvar(x0[5851])))))))
  let jsxtnm137 = function (arg1, arg2) { // timp: g_lt(224)
    let jsxtnm118 = arg1
    let jsxtnm119 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1575(line=54,offs=19)--1576(line=54,offs=20))
    // I0Etapq(I0Ecst(sint_lt$sint(918)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2041(line=83,offs=1)--2053(line=83,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(sint_lt$sint(918);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1612(line=56,offs=1)--1773(line=68,offs=2)))
    // T1IMPallx(sint_lt$sint(918)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_lt$sint(918);$list()))))
    let jsxtnm126 = function (arg1, arg2) { // timp: sint_lt$sint(918)
      let jsxtnm120 = arg1
      let jsxtnm121 = arg2
      // I1CMP:start
      let jsxtnm125 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1700(line=64,offs=1)--1771(line=67,offs=39)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1708(line=65,offs=1)--1771(line=67,offs=39))
        // I1FUNDCL
        // XATS2JS_sint_lt$sint_1711
          // FJARGdarg($list(I1BNDcons(I1TNM(122);I0Pvar(i1(4903));$list(@(i1(4903),I1Vtnm(I1TNM(122))))),I1BNDcons(I1TNM(123);I0Pvar(i2(4904));$list(@(i2(4904),I1Vtnm(I1TNM(123)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_lt$sint);G1Nlist($list())) // I1CMP:return
        let jsxtnm124 = XATSDAPP(XATS2JS_sint_lt$sint(jsxtnm120, jsxtnm121))
        jsxtnm125 = jsxtnm124
      } // endlet
      // I1CMP:return:jsxtnm125
      return jsxtnm125
    } // endtimp(sint_lt$sint(918))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1557(line=54,offs=1)--1562(line=54,offs=6))
    // I0Etapq(I0Ecst(g_cmp(230)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gord000.sats)@(1630(line=66,offs=1)--1635(line=66,offs=6))));$list(T2JAG($list(T2Pvar(x0[5851])))))
    // T1IMPallx(g_cmp(230);LCSRCsome1(Game-of-24.dats)@(1842(line=82,offs=1)--1879(line=82,offs=38)))
    // T1IMPallx(g_cmp(230)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_cmp(230);$list(@(a[780],T2Pcst(rat)))))))
    let jsxtnm134
    // LCSRCsome1(Game-of-24.dats)@(1864(line=82,offs=23)--1877(line=82,offs=36))
    // I0Etapq(I0Ecst(dflt_cmp$dflt(999)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gflt000.sats)@(4053(line=197,offs=1)--4066(line=197,offs=14))));$list(T2JAG($list())))
    // T1IMPallx(dflt_cmp$dflt(999);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3343(line=205,offs=1)--3507(line=217,offs=2)))
    // T1IMPallx(dflt_cmp$dflt(999)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_cmp$dflt(999);$list()))))
    let jsxtnm133 = function (arg1, arg2) { // timp: dflt_cmp$dflt(999)
      let jsxtnm127 = arg1
      let jsxtnm128 = arg2
      // I1CMP:start
      let jsxtnm132 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3433(line=213,offs=1)--3505(line=216,offs=39)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3441(line=214,offs=1)--3505(line=216,offs=39))
        // I1FUNDCL
        // XATS2JS_dflt_cmp$dflt_3444
          // FJARGdarg($list(I1BNDcons(I1TNM(129);I0Pvar(f1(5039));$list(@(f1(5039),I1Vtnm(I1TNM(129))))),I1BNDcons(I1TNM(130);I0Pvar(f2(5040));$list(@(f2(5040),I1Vtnm(I1TNM(130)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_cmp$dflt);G1Nlist($list())) // I1CMP:return
        let jsxtnm131 = XATSDAPP(XATS2JS_dflt_cmp$dflt(jsxtnm127, jsxtnm128))
        jsxtnm132 = jsxtnm131
      } // endlet
      // I1CMP:return:jsxtnm132
      return jsxtnm132
    } // endtimp(dflt_cmp$dflt(999))
    jsxtnm134 = jsxtnm133
    let jsxtnm135 = XATSDAPP(jsxtnm134(jsxtnm118, jsxtnm119))
    let jsxtnm136 = XATSDAPP(jsxtnm126(jsxtnm135, XATSINT1(0)))
    // I1CMP:return:jsxtnm136
    return jsxtnm136
  } // endtimp(g_lt(224))
  // LCSRCsome1(Game-of-24.dats)@(3604(line=189,offs=1)--3607(line=189,offs=4))
  // I0Etapq(I0Ecst(g_abs(212)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1812(line=79,offs=1)--1817(line=79,offs=6))));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_abs(212);LCSRCsome1(Game-of-24.dats)@(1806(line=80,offs=1)--1838(line=80,offs=33)))
  // T1IMPallx(g_abs(212)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_abs(212);$list(@(x0[762],T2Pcst(rat)))))))
  let jsxtnm143
  // LCSRCsome1(Game-of-24.dats)@(1828(line=80,offs=23)--1836(line=80,offs=31))
  // I0Etapq(I0Ecst(dflt_abs(973)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gflt000.sats)@(1526(line=50,offs=1)--1534(line=50,offs=9))));$list(T2JAG($list())))
  // T1IMPallx(dflt_abs(973);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1766(line=70,offs=1)--1901(line=81,offs=31)))
  // T1IMPallx(dflt_abs(973)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_abs(973);$list()))))
  let jsxtnm142 = function (arg1) { // timp: dflt_abs(973)
    let jsxtnm138 = arg1
    // I1CMP:start
    let jsxtnm141 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1842(line=78,offs=1)--1899(line=81,offs=29)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1850(line=79,offs=1)--1899(line=81,offs=29))
      // I1FUNDCL
      // XATS2JS_dflt_abs_1853
        // FJARGdarg($list(I1BNDcons(I1TNM(139);I0Pvar(f1(4999));$list(@(f1(4999),I1Vtnm(I1TNM(139)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_abs);G1Nlist($list())) // I1CMP:return
      let jsxtnm140 = XATSDAPP(XATS2JS_dflt_abs(jsxtnm138))
      jsxtnm141 = jsxtnm140
    } // endlet
    // I1CMP:return:jsxtnm141
    return jsxtnm141
  } // endtimp(dflt_abs(973))
  jsxtnm143 = jsxtnm142
  // LCSRCsome1(Game-of-24.dats)@(3622(line=190,offs=14)--3623(line=190,offs=15))
  // I0Etapq(I0Ecst(g_sub(216)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1991(line=96,offs=1)--1996(line=96,offs=6))));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_sub(216);LCSRCsome1(Game-of-24.dats)@(1921(line=85,offs=1)--1958(line=85,offs=38)))
  // T1IMPallx(g_sub(216)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_sub(216);$list(@(x0[766],T2Pcst(rat)))))))
  let jsxtnm151
  // LCSRCsome1(Game-of-24.dats)@(1943(line=85,offs=23)--1956(line=85,offs=36))
  // I0Etapq(I0Ecst(dflt_sub$dflt(1003)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gflt000.sats)@(4413(line=218,offs=1)--4426(line=218,offs=14))));$list(T2JAG($list())))
  // T1IMPallx(dflt_sub$dflt(1003);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3722(line=236,offs=1)--3886(line=248,offs=2)))
  // T1IMPallx(dflt_sub$dflt(1003)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_sub$dflt(1003);$list()))))
  let jsxtnm150 = function (arg1, arg2) { // timp: dflt_sub$dflt(1003)
    let jsxtnm144 = arg1
    let jsxtnm145 = arg2
    // I1CMP:start
    let jsxtnm149 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3812(line=244,offs=1)--3884(line=247,offs=39)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3820(line=245,offs=1)--3884(line=247,offs=39))
      // I1FUNDCL
      // XATS2JS_dflt_sub$dflt_3823
        // FJARGdarg($list(I1BNDcons(I1TNM(146);I0Pvar(f1(5049));$list(@(f1(5049),I1Vtnm(I1TNM(146))))),I1BNDcons(I1TNM(147);I0Pvar(f2(5050));$list(@(f2(5050),I1Vtnm(I1TNM(147)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_sub$dflt);G1Nlist($list())) // I1CMP:return
      let jsxtnm148 = XATSDAPP(XATS2JS_dflt_sub$dflt(jsxtnm144, jsxtnm145))
      jsxtnm149 = jsxtnm148
    } // endlet
    // I1CMP:return:jsxtnm149
    return jsxtnm149
  } // endtimp(dflt_sub$dflt(1003))
  jsxtnm151 = jsxtnm150
  let jsxtnm152 = XATSDAPP(expr_eval_2986(jsxtnm117))
  // LCSRCsome1(Game-of-24.dats)@(3623(line=190,offs=15)--3627(line=190,offs=19))
  // I0Etapq(I0Ecst(g_si(207)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1563(line=56,offs=1)--1567(line=56,offs=5))));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_si(207);LCSRCsome1(Game-of-24.dats)@(1771(line=77,offs=1)--1802(line=78,offs=23)))
  // T1IMPallx(g_si(207)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(207);$list(@(a[757],T2Pcst(rat)))))))
  let jsxtnm158
  // LCSRCsome1(Game-of-24.dats)@(1792(line=78,offs=13)--1796(line=78,offs=17))
  // I0Etapq(I0Ecst(g_si(207)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gnum000.sats)@(1563(line=56,offs=1)--1567(line=56,offs=5))));$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list())))))))
  // T1IMPallx(g_si(207);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1430(line=40,offs=1)--1557(line=50,offs=31)))
  // T1IMPallx(g_si(207)<$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list()))))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(207);$list(@(a[757],T2Pcst(dflt)))))))
  let jsxtnm157 = function (arg1) { // timp: g_si(207)
    let jsxtnm153 = arg1
    // I1CMP:start
    let jsxtnm156 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1497(line=47,offs=1)--1555(line=50,offs=29)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1505(line=48,offs=1)--1555(line=50,offs=29))
      // I1FUNDCL
      // XATS2JS_si2dflt_1510
        // FJARGdarg($list(I1BNDcons(I1TNM(154);I0Pvar(i1(4993));$list(@(i1(4993),I1Vtnm(I1TNM(154)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_si2dflt);G1Nlist($list())) // I1CMP:return
      let jsxtnm155 = XATSCAST("XATS2JS_si2dflt", [jsxtnm153])
      jsxtnm156 = jsxtnm155
    } // endlet
    // I1CMP:return:jsxtnm156
    return jsxtnm156
  } // endtimp(g_si(207))
  jsxtnm158 = jsxtnm157
  let jsxtnm159 = XATSDAPP(jsxtnm158(XATSINT1(24)))
  let jsxtnm160 = XATSDAPP(jsxtnm151(jsxtnm152, jsxtnm159))
  let jsxtnm161 = XATSDAPP(jsxtnm143(jsxtnm160))
  let jsxtnm162 = XATSDAPP(jsxtnm137(jsxtnm161, jsxtnm86))
  // I1CMP:return:jsxtnm162
  return jsxtnm162
} // endfun(expr_iseq24_3572)
// LCSRCsome1(Game-of-24.dats)@(3646(line=192,offs=1)--3676(line=192,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();iseqz;D2PTMsome(0;D2ITMvar(expr_iseqz(5242)))))))
// LCSRCsome1(Game-of-24.dats)@(3677(line=193,offs=1)--3709(line=193,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();iseq24;D2PTMsome(0;D2ITMvar(expr_iseq24(5244)))))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(3902(line=205,offs=1)--4281(line=233,offs=2)))
// I1FUNDCL
function expr_aops$expr_3905(arg1, arg2)
{ // fun
  let jsxtnm163 = arg1
  let jsxtnm164 = arg2
  // I1CMP:start
  let jsxtnm189 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(3978(line=214,offs=1)--3997(line=215,offs=11)))
    // I1VALDCL
    let jsxtnm166
    let jsxtnm165 = XATSCAPP("list_nil", [0])
    jsxtnm166 = jsxtnm165
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4001(line=217,offs=1)--4067(line=221,offs=32)))
    // I1VALDCL
    let jsxtnm171
    let jsxtnm167 = XATSDAPP(expr_iseqz_3506(jsxtnm163))
    let jsxtnm170 // ift
    if (jsxtnm167) // ift
    {
      jsxtnm170 = jsxtnm166
    } else {
      let jsxtnm168 = XATSCAPP("Div", [4, jsxtnm164, jsxtnm163])
      let jsxtnm169 = XATSCAPP("list_cons", [1, jsxtnm168, jsxtnm166])
      jsxtnm170 = jsxtnm169
    } // end(if)
    jsxtnm171 = jsxtnm170
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4071(line=223,offs=1)--4132(line=227,offs=32)))
    // I1VALDCL
    let jsxtnm176
    let jsxtnm172 = XATSDAPP(expr_iseqz_3506(jsxtnm164))
    let jsxtnm175 // ift
    if (jsxtnm172) // ift
    {
      jsxtnm175 = jsxtnm171
    } else {
      let jsxtnm173 = XATSCAPP("Div", [4, jsxtnm163, jsxtnm164])
      let jsxtnm174 = XATSCAPP("list_cons", [1, jsxtnm173, jsxtnm171])
      jsxtnm175 = jsxtnm174
    } // end(if)
    jsxtnm176 = jsxtnm175
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4136(line=229,offs=1)--4171(line=229,offs=36)))
    // I1VALDCL
    let jsxtnm179
    let jsxtnm177 = XATSCAPP("Mul", [3, jsxtnm163, jsxtnm164])
    let jsxtnm178 = XATSCAPP("list_cons", [1, jsxtnm177, jsxtnm176])
    jsxtnm179 = jsxtnm178
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4172(line=230,offs=1)--4207(line=230,offs=36)))
    // I1VALDCL
    let jsxtnm182
    let jsxtnm180 = XATSCAPP("Sub", [2, jsxtnm164, jsxtnm163])
    let jsxtnm181 = XATSCAPP("list_cons", [1, jsxtnm180, jsxtnm179])
    jsxtnm182 = jsxtnm181
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4208(line=231,offs=1)--4243(line=231,offs=36)))
    // I1VALDCL
    let jsxtnm185
    let jsxtnm183 = XATSCAPP("Sub", [2, jsxtnm163, jsxtnm164])
    let jsxtnm184 = XATSCAPP("list_cons", [1, jsxtnm183, jsxtnm182])
    jsxtnm185 = jsxtnm184
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4244(line=232,offs=1)--4279(line=232,offs=36)))
    // I1VALDCL
    let jsxtnm188
    let jsxtnm186 = XATSCAPP("Add", [1, jsxtnm163, jsxtnm164])
    let jsxtnm187 = XATSCAPP("list_cons", [1, jsxtnm186, jsxtnm185])
    jsxtnm188 = jsxtnm187
    XATS000_patck(true)
    jsxtnm189 = jsxtnm188
  } // endlet
  // I1CMP:return:jsxtnm189
  return jsxtnm189
} // endfun(expr_aops$expr_3905)
// LCSRCsome1(Game-of-24.dats)@(4285(line=235,offs=1)--4326(line=235,offs=42))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();aops;D2PTMsome(1000;D2ITMvar(expr_aops$expr(5246)))))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(4716(line=265,offs=1)--4841(line=270,offs=43)))
// I1FUNDCL
function expr_aops$exprlst_4719(arg1, arg2)
{ // fun
  let jsxtnm190 = arg1
  let jsxtnm191 = arg2
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(4781(line=269,offs=1)--4797(line=269,offs=17))
  // I0Etapq(I0Ecst(list_list$concat(1198)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(6649(line=412,offs=1)--6665(line=412,offs=17))));$list(T2JAG($list(T2Pcst(expr)))))
  // T1IMPallx(list_list$concat(1198);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9138(line=623,offs=1)--9228(line=628,offs=29)))
  // T1IMPallx(list_list$concat(1198)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7358],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat(1198);$list(@(a[3360],T2Pvar(a[7358])))))))
  let jsxtnm240 = function (arg1) { // timp: list_list$concat(1198)
    let jsxtnm192 = arg1
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9200(line=628,offs=1)--9219(line=628,offs=20))
    // I0Etapq(I0Ecst(list_list$concat_vt(1199)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(6701(line=415,offs=1)--6720(line=415,offs=20))));$list(T2JAG($list(T2Pvar(a[7358])))))
    // T1IMPallx(list_list$concat_vt(1199);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9232(line=630,offs=1)--9533(line=654,offs=2)))
    // T1IMPallx(list_list$concat_vt(1199)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7359],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat_vt(1199);$list(@(a[3361],T2Pvar(a[7359])))))))
    let jsxtnm237 = function (arg1) { // timp: list_list$concat_vt(1199)
      let jsxtnm193 = arg1
      // I1CMP:start
      let jsxtnm236 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9317(line=638,offs=1)--9338(line=638,offs=22)))
        // I1VALDCL
        let jsxtnm195
        let jsxtnm194 = XATSCAPP("list_vt_nil", [0])
        jsxtnm195 = jsxtnm194
        XATS000_patck(true)
        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9347(line=640,offs=1)--9528(line=652,offs=40)))
        // I1FUNDCL
        function loop_9350(arg1, arg2)
        { // fun
          let jsxtnm196 = arg1
          let jsxtnm197 = arg2
          // I1CMP:start
          let jsxtnm234 // cas
          do {
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(198);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
            if (XATS000_ctgeq(jsxtnm196, XATSCTAG("list_nil",0))) { // gpt
              let jsxtnm198 = jsxtnm196
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9442(line=649,offs=1)--9458(line=649,offs=17))
              // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(a[7359])))))
              // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
              // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[8401],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8401])))))))
              let jsxtnm217 = function (arg1) { // timp: list_vt_reverse0(2015)
                let jsxtnm199 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
                // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8401])))))
                // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
                // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[8398],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8398])))))))
                let jsxtnm214 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                  let jsxtnm200 = arg1
                  let jsxtnm201 = arg2
                  // I1CMP:start
                  let jsxtnm213 // let
                  { // let
                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                    // I1FUNDCL
                    function loop_6433(arg1, arg2)
                    { // fun
                      let jsxtnm202 = arg1
                      let jsxtnm203 = arg2
                      // I1CMP:start
                      let jsxtnm211 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(204);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm202, XATSCTAG("list_vt_nil",0))) { // gpt
                          let jsxtnm204 = jsxtnm202
                          jsxtnm211 = jsxtnm203
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(205);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                        if (XATS000_ctgeq(jsxtnm202, XATSCTAG("list_vt_cons",1))) { // gpt
                          let jsxtnm205 = jsxtnm202
                          let jsxtnm210 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                            // I1VALDCL
                            let jsxtnm207
                            let jsxtnm206 = XATSPCON(jsxtnm202,1)
                            jsxtnm207 = jsxtnm206
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                            // I1VALDCL
                            let jsxtnm208
                            XATS000_assgn(XATSLPCN(1, jsxtnm202), jsxtnm203)
                            jsxtnm208 = []
                            XATS000_patck(true)
                            XATS000_fold(jsxtnm202)
                            let jsxtnm209 = XATSDAPP(loop_6433(jsxtnm207, jsxtnm202))
                            jsxtnm210 = jsxtnm209
                          } // endlet
                          jsxtnm211 = jsxtnm210
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm211
                      return jsxtnm211
                    } // endfun(loop_6433)
                    let jsxtnm212 = XATSDAPP(loop_6433(jsxtnm200, jsxtnm201))
                    jsxtnm213 = jsxtnm212
                  } // endlet
                  // I1CMP:return:jsxtnm213
                  return jsxtnm213
                } // endtimp(list_vt_rappend00(2018))
                let jsxtnm215 = XATSCAPP("list_vt_nil", [0])
                let jsxtnm216 = XATSDAPP(jsxtnm214(jsxtnm199, jsxtnm215))
                // I1CMP:return:jsxtnm216
                return jsxtnm216
              } // endtimp(list_vt_reverse0(2015))
              let jsxtnm218 = XATSDAPP(jsxtnm217(jsxtnm197))
              jsxtnm234 = jsxtnm218
              break // cls
            } // gpt
            // } // cls
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(219);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(xs1(2561)),I0Pvar(xss(2562))));$list(@(xs1(2561),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(219));0)),@(xss(2562),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(219));1)))))
            if (XATS000_ctgeq(jsxtnm196, XATSCTAG("list_cons",1))) { // gpt
              let jsxtnm219 = jsxtnm196
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9499(line=652,offs=11)--9516(line=652,offs=28))
              // I0Etapq(I0Ecst(list_rappendx0_vt(1186)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(4757(line=298,offs=1)--4774(line=298,offs=18))));$list(T2JAG($list(T2Pvar(a[7359])))))
              // T1IMPallx(list_rappendx0_vt(1186);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(6095(line=404,offs=1)--6360(line=426,offs=2)))
              // T1IMPallx(list_rappendx0_vt(1186)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7339],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_rappendx0_vt(1186);$list(@(a[3342],T2Pvar(x0[7339])))))))
              let jsxtnm231 = function (arg1, arg2) { // timp: list_rappendx0_vt(1186)
                let jsxtnm220 = arg1
                let jsxtnm221 = arg2
                // I1CMP:start
                let jsxtnm230 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(6174(line=412,offs=1)--6350(line=424,offs=34)))
                  // I1FUNDCL
                  function loop_6177(arg1, arg2)
                  { // fun
                    let jsxtnm222 = arg1
                    let jsxtnm223 = arg2
                    // I1CMP:start
                    let jsxtnm228 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(224);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                      if (XATS000_ctgeq(jsxtnm222, XATSCTAG("list_nil",0))) { // gpt
                        let jsxtnm224 = jsxtnm222
                        jsxtnm228 = jsxtnm223
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(225);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2511)),I0Pvar(xs(2512))));$list(@(x0(2511),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(225));0)),@(xs(2512),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(225));1)))))
                      if (XATS000_ctgeq(jsxtnm222, XATSCTAG("list_cons",1))) { // gpt
                        let jsxtnm225 = jsxtnm222
                        let jsxtnm226 = XATSCAPP("list_vt_cons", [1, XATSP1CN("list_cons", jsxtnm225[0+1]), jsxtnm223])
                        let jsxtnm227 = XATSDAPP(loop_6177(XATSP1CN("list_cons", jsxtnm225[1+1]), jsxtnm226))
                        jsxtnm228 = jsxtnm227
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm228
                    return jsxtnm228
                  } // endfun(loop_6177)
                  let jsxtnm229 = XATSDAPP(loop_6177(jsxtnm220, jsxtnm221))
                  jsxtnm230 = jsxtnm229
                } // endlet
                // I1CMP:return:jsxtnm230
                return jsxtnm230
              } // endtimp(list_rappendx0_vt(1186))
              let jsxtnm232 = XATSDAPP(jsxtnm231(XATSP1CN("list_cons", jsxtnm219[0+1]), jsxtnm197))
              let jsxtnm233 = XATSDAPP(loop_9350(XATSP1CN("list_cons", jsxtnm219[1+1]), jsxtnm232))
              jsxtnm234 = jsxtnm233
              break // cls
            } // gpt
            // } // cls
            XATS000_cfail()
          } while (false) // end-of(do)
          // I1CMP:return:jsxtnm234
          return jsxtnm234
        } // endfun(loop_9350)
        let jsxtnm235 = XATSDAPP(loop_9350(jsxtnm193, jsxtnm195))
        jsxtnm236 = jsxtnm235
      } // endlet
      // I1CMP:return:jsxtnm236
      return jsxtnm236
    } // endtimp(list_list$concat_vt(1199))
    let jsxtnm238 = XATSDAPP(jsxtnm237(jsxtnm192))
    let jsxtnm239 = XATSCAST("list_vt2t_17651", [jsxtnm238])
    // I1CMP:return:jsxtnm239
    return jsxtnm239
  } // endtimp(list_list$concat(1198))
  // LCSRCsome1(Game-of-24.dats)@(4799(line=270,offs=1)--4812(line=270,offs=14))
  // I0Etapq(I0Ecst(list_map$f1un(1243)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(8026(line=382,offs=1)--8039(line=382,offs=14))));$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(list_map$f1un(1243);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(9918(line=664,offs=1)--9999(line=668,offs=37)))
  // T1IMPallx(list_map$f1un(1243)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7422],T2Pcst(expr)),@(y0[7423],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_map$f1un(1243);$list(@(x0[3419],T2Pvar(x0[7422])),@(y0[3420],T2Pvar(y0[7423])))))))
  let jsxtnm330
  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(9963(line=668,offs=1)--9981(line=668,offs=19))
  // I0Etapq(I0Ecst(gseq_map$f1un_list(428)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(13108(line=758,offs=1)--13126(line=758,offs=19))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7422]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[7422]))),T2JAG($list(T2Pvar(y0[7423])))))
  // T1IMPallx(gseq_map$f1un_list(428);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14500(line=996,offs=1)--14631(line=1004,offs=43)))
  // T1IMPallx(gseq_map$f1un_list(428)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6107],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6108],T2Pcst(expr)),@(y0[6109],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_list(428);$list(@(xs[1293],T2Pvar(xs[6107])),@(x0[1294],T2Pvar(x0[6108])),@(y0[1295],T2Pvar(y0[6109])))))))
  let jsxtnm329 = function (arg1, arg2) { // timp: gseq_map$f1un_list(428)
    let jsxtnm241 = arg1
    let jsxtnm242 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14589(line=1004,offs=1)--14608(line=1004,offs=20))
    // I0Etapq(I0Ecst(gseq_map$f1un_llist(429)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(13306(line=771,offs=1)--13325(line=771,offs=20))));$list(T2JAG($list(T2Pvar(xs[6107]))),T2JAG($list(T2Pvar(x0[6108]))),T2JAG($list(T2Pvar(y0[6109])))))
    // T1IMPallx(gseq_map$f1un_llist(429);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14781(line=1018,offs=1)--14943(line=1030,offs=2)))
    // T1IMPallx(gseq_map$f1un_llist(429)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6113],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6114],T2Pcst(expr)),@(y0[6115],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_llist(429);$list(@(xs[1296],T2Pvar(xs[6113])),@(x0[1297],T2Pvar(x0[6114])),@(y0[1298],T2Pvar(y0[6115])))))))
    let jsxtnm326 = function (arg1, arg2) { // timp: gseq_map$f1un_llist(429)
      let jsxtnm243 = arg1
      let jsxtnm244 = arg2
      // I1CMP:start
      let jsxtnm325 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14897(line=1028,offs=1)--14941(line=1029,offs=36)))
        // I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pvar(x0[6114])),@(y0[484],T2Pvar(y0[6115]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14857(line=1025,offs=1)--14871(line=1025,offs=15))
        // I0Etapq(I0Ecst(gseq_map_llist(425)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(12650(line=732,offs=1)--12664(line=732,offs=15))));$list(T2JAG($list(T2Pvar(xs[6113]))),T2JAG($list(T2Pvar(x0[6114]))),T2JAG($list(T2Pvar(y0[6115])))))
        // T1IMPallx(gseq_map_llist(425);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14658(line=1008,offs=1)--14777(line=1016,offs=32)))
        // T1IMPallx(gseq_map_llist(425)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6110],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6111],T2Pcst(expr)),@(y0[6112],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_llist(425);$list(@(xs[1284],T2Pvar(xs[6110])),@(x0[1285],T2Pvar(x0[6111])),@(y0[1286],T2Pvar(y0[6112])))))))
        let jsxtnm323 = function (arg1) { // timp: gseq_map_llist(425)
          let jsxtnm247 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14723(line=1014,offs=1)--14739(line=1014,offs=17))
          // I0Etapq(I0Ecst(strm_vt_listize0(2194)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8819(line=452,offs=1)--8835(line=452,offs=17))));$list(T2JAG($list(T2Pvar(y0[6112])))))
          // T1IMPallx(strm_vt_listize0(2194);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7222(line=450,offs=1)--7317(line=455,offs=28)))
          // T1IMPallx(strm_vt_listize0(2194)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8567],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_listize0(2194);$list(@(x0[5484],T2Pvar(x0[8567])))))))
          let jsxtnm284 = function (arg1) { // timp: strm_vt_listize0(2194)
            let jsxtnm248 = arg1
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7269(line=454,offs=1)--7285(line=454,offs=17))
            // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(x0[8567])))))
            // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
            // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8401],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8401])))))))
            let jsxtnm267 = function (arg1) { // timp: list_vt_reverse0(2015)
              let jsxtnm249 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
              // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8401])))))
              // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
              // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8398],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8398])))))))
              let jsxtnm264 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                let jsxtnm250 = arg1
                let jsxtnm251 = arg2
                // I1CMP:start
                let jsxtnm263 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                  // I1FUNDCL
                  function loop_6433(arg1, arg2)
                  { // fun
                    let jsxtnm252 = arg1
                    let jsxtnm253 = arg2
                    // I1CMP:start
                    let jsxtnm261 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(254);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm252, XATSCTAG("list_vt_nil",0))) { // gpt
                        let jsxtnm254 = jsxtnm252
                        jsxtnm261 = jsxtnm253
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(255);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                      if (XATS000_ctgeq(jsxtnm252, XATSCTAG("list_vt_cons",1))) { // gpt
                        let jsxtnm255 = jsxtnm252
                        let jsxtnm260 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                          // I1VALDCL
                          let jsxtnm257
                          let jsxtnm256 = XATSPCON(jsxtnm252,1)
                          jsxtnm257 = jsxtnm256
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                          // I1VALDCL
                          let jsxtnm258
                          XATS000_assgn(XATSLPCN(1, jsxtnm252), jsxtnm253)
                          jsxtnm258 = []
                          XATS000_patck(true)
                          XATS000_fold(jsxtnm252)
                          let jsxtnm259 = XATSDAPP(loop_6433(jsxtnm257, jsxtnm252))
                          jsxtnm260 = jsxtnm259
                        } // endlet
                        jsxtnm261 = jsxtnm260
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm261
                    return jsxtnm261
                  } // endfun(loop_6433)
                  let jsxtnm262 = XATSDAPP(loop_6433(jsxtnm250, jsxtnm251))
                  jsxtnm263 = jsxtnm262
                } // endlet
                // I1CMP:return:jsxtnm263
                return jsxtnm263
              } // endtimp(list_vt_rappend00(2018))
              let jsxtnm265 = XATSCAPP("list_vt_nil", [0])
              let jsxtnm266 = XATSDAPP(jsxtnm264(jsxtnm249, jsxtnm265))
              // I1CMP:return:jsxtnm266
              return jsxtnm266
            } // endtimp(list_vt_reverse0(2015))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7291(line=455,offs=2)--7308(line=455,offs=19))
            // I0Etapq(I0Ecst(strm_vt_rlistize0(2196)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8956(line=462,offs=1)--8973(line=462,offs=18))));$list(T2JAG($list(T2Pvar(x0[8567])))))
            // T1IMPallx(strm_vt_rlistize0(2196);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7321(line=457,offs=1)--7614(line=480,offs=2)))
            // T1IMPallx(strm_vt_rlistize0(2196)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8568],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_rlistize0(2196);$list(@(x0[5487],T2Pvar(x0[8568])))))))
            let jsxtnm281 = function (arg1) { // timp: strm_vt_rlistize0(2196)
              let jsxtnm268 = arg1
              // I1CMP:start
              let jsxtnm280 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7398(line=465,offs=1)--7420(line=465,offs=23)))
                // I1VALDCL
                let jsxtnm270
                let jsxtnm269 = XATSCAPP("list_vt_nil", [0])
                jsxtnm270 = jsxtnm269
                XATS000_patck(true)
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7424(line=467,offs=1)--7612(line=479,offs=35)))
                // I1FUNDCL
                function loop_7427(arg1, arg2)
                { // fun
                  let jsxtnm271 = arg1
                  let jsxtnm272 = arg2
                  // I1CMP:start
                  let jsxtnm273 = XATS000_dl1az(jsxtnm271)
                  let jsxtnm278 // cas
                  do {
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(274);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                    if (XATS000_ctgeq(jsxtnm273, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                      let jsxtnm274 = jsxtnm273
                      jsxtnm278 = jsxtnm272
                      break // cls
                    } // gpt
                    // } // cls
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(275);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4505)),I0Pvar(xs(4506)))));$list(@(x1(4505),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(275));0)),@(xs(4506),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(275));1)))))
                    if (XATS000_ctgeq(jsxtnm273, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                      let jsxtnm275 = jsxtnm273
                      let jsxtnm276 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm275[0+1]), jsxtnm272])
                      let jsxtnm277 = XATSDAPP(loop_7427(XATSP1CN("strmcon_vt_cons", jsxtnm275[1+1]), jsxtnm276))
                      jsxtnm278 = jsxtnm277
                      break // cls
                    } // gpt
                    // } // cls
                    XATS000_cfail()
                  } while (false) // end-of(do)
                  // I1CMP:return:jsxtnm278
                  return jsxtnm278
                } // endfun(loop_7427)
                let jsxtnm279 = XATSDAPP(loop_7427(jsxtnm268, jsxtnm270))
                jsxtnm280 = jsxtnm279
              } // endlet
              // I1CMP:return:jsxtnm280
              return jsxtnm280
            } // endtimp(strm_vt_rlistize0(2196))
            let jsxtnm282 = XATSDAPP(jsxtnm281(jsxtnm248))
            let jsxtnm283 = XATSDAPP(jsxtnm267(jsxtnm282))
            // I1CMP:return:jsxtnm283
            return jsxtnm283
          } // endtimp(strm_vt_listize0(2194))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14746(line=1016,offs=1)--14760(line=1016,offs=15))
          // I0Etapq(I0Ecst(gseq_map_lstrm(426)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(12714(line=737,offs=1)--12728(line=737,offs=15))));$list(T2JAG($list(T2Pvar(xs[6110]))),T2JAG($list(T2Pvar(x0[6111]))),T2JAG($list(T2Pvar(y0[6112])))))
          // T1IMPallx(gseq_map_lstrm(426);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15009(line=1034,offs=1)--15178(line=1046,offs=2)))
          // T1IMPallx(gseq_map_lstrm(426)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6116],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6117],T2Pcst(expr)),@(y0[6118],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_lstrm(426);$list(@(xs[1287],T2Pvar(xs[6116])),@(x0[1288],T2Pvar(x0[6117])),@(y0[1289],T2Pvar(y0[6118])))))))
          let jsxtnm320 = function (arg1) { // timp: gseq_map_lstrm(426)
            let jsxtnm285 = arg1
            // I1CMP:start
            let jsxtnm319 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15131(line=1044,offs=1)--15176(line=1045,offs=37)))
              // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pvar(x0[6117])),@(y0[3807],T2Pvar(y0[6118]))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15074(line=1040,offs=1)--15086(line=1040,offs=13))
              // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Pvar(x0[6117]))),T2JAG($list(T2Pvar(y0[6118])))))
              // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
              // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8550],T2Pcst(expr)),@(y0[8551],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8550])),@(y0[5444],T2Pvar(y0[8551])))))))
              let jsxtnm303 = function (arg1) { // timp: strm_vt_map0(2174)
                let jsxtnm286 = arg1
                // I1CMP:start
                let jsxtnm302 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
                  // I1FUNDCL
                  function auxmain_4114(arg1)
                  { // fun
                    let jsxtnm287 = arg1
                    // I1CMP:start
                    let jsxtnm300 = XATS000_l1azy(function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm288 = XATS000_dl1az(jsxtnm287)
                      let jsxtnm299 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(289);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm288, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                          let jsxtnm289 = jsxtnm288
                          let jsxtnm290 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm299 = jsxtnm290
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(291);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4467)),I0Pvar(xs(4468)))));$list(@(x1(4467),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(291));0)),@(xs(4468),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(291));1)))))
                        if (XATS000_ctgeq(jsxtnm288, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                          let jsxtnm291 = jsxtnm288
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                          // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8550]))),T2JAG($list(T2Pvar(y0[8551])))))
                          // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15131(line=1044,offs=1)--15176(line=1045,offs=37)))
                          // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6116],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6117],T2Pcst(expr)),@(y0[6118],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pcst(expr)),@(y0[3807],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm295
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15160(line=1045,offs=21)--15168(line=1045,offs=29))
                          // I0Etapq(I0Ecst(map$fopr(75)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(3732(line=232,offs=1)--3740(line=232,offs=9))));$list(T2JAG($list(T2Pvar(x0[6117]))),T2JAG($list(T2Pvar(y0[6118])))))
                          // T1IMPallx(map$fopr(75);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14897(line=1028,offs=1)--14941(line=1029,offs=36)))
                          // T1IMPallx(map$fopr(75)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6113],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6114],T2Pcst(expr)),@(y0[6115],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pcst(expr)),@(y0[484],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm294 = function (arg1) { // timp: map$fopr(75)
                            let jsxtnm292 = arg1
                            // I1CMP:start
                            let jsxtnm293 = XATSDAPP(jsxtnm244(jsxtnm292))
                            // I1CMP:return:jsxtnm293
                            return jsxtnm293
                          } // endtimp(map$fopr(75))
                          jsxtnm295 = jsxtnm294
                          let jsxtnm296 = XATSDAPP(jsxtnm295(XATSP1CN("strmcon_vt_cons", jsxtnm291[0+1])))
                          let jsxtnm297 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm291[1+1])))
                          let jsxtnm298 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm296, jsxtnm297])
                          jsxtnm299 = jsxtnm298
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm299
                      return jsxtnm299
                    }) // endfun(l1azy)
                    // I1CMP:return:jsxtnm300
                    return jsxtnm300
                  } // endfun(auxmain_4114)
                  let jsxtnm301 = XATSDAPP(auxmain_4114(jsxtnm286))
                  jsxtnm302 = jsxtnm301
                } // endlet
                // I1CMP:return:jsxtnm302
                return jsxtnm302
              } // endtimp(strm_vt_map0(2174))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15097(line=1042,offs=1)--15109(line=1042,offs=13))
              // I0Etapq(I0Ecst(gseq_strmize(372)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(2503(line=122,offs=1)--2515(line=122,offs=13))));$list(T2JAG($list(T2Pvar(xs[6116]))),T2JAG($list(T2Pvar(x0[6117])))))
              // T1IMPallx(gseq_strmize(372);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6711(line=443,offs=1)--6775(line=445,offs=46)))
              // T1IMPallx(gseq_strmize(372)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7407],T2Pcst(expr)),@(x0[7407],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_strmize(372);$list(@(xs[1109],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7407])))),@(x0[1110],T2Pvar(x0[7407])))))))
              let jsxtnm316
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6759(line=445,offs=30)--6771(line=445,offs=42))
              // I0Etapq(I0Ecst(list_strmize(1202)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(1677(line=61,offs=1)--1689(line=61,offs=13))));$list(T2JAG($list(T2Pvar(x0[7407])))))
              // T1IMPallx(list_strmize(1202);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6452(line=418,offs=1)--6671(line=441,offs=2)))
              // T1IMPallx(list_strmize(1202)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7406],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_strmize(1202);$list(@(a[3366],T2Pvar(x0[7406])))))))
              let jsxtnm315 = function (arg1) { // timp: list_strmize(1202)
                let jsxtnm304 = arg1
                // I1CMP:start
                let jsxtnm314 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6526(line=427,offs=1)--6666(line=439,offs=2)))
                  // I1FUNDCL
                  function auxmain_6529(arg1)
                  { // fun
                    let jsxtnm305 = arg1
                    // I1CMP:start
                    let jsxtnm312 = XATS000_l1azy(function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm311 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(306);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                        if (XATS000_ctgeq(jsxtnm305, XATSCTAG("list_nil",0))) { // gpt
                          let jsxtnm306 = jsxtnm305
                          let jsxtnm307 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm311 = jsxtnm307
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(308);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2601)),I0Pvar(xs(2602))));$list(@(x0(2601),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(308));0)),@(xs(2602),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(308));1)))))
                        if (XATS000_ctgeq(jsxtnm305, XATSCTAG("list_cons",1))) { // gpt
                          let jsxtnm308 = jsxtnm305
                          let jsxtnm309 = XATSDAPP(auxmain_6529(XATSP1CN("list_cons", jsxtnm308[1+1])))
                          let jsxtnm310 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("list_cons", jsxtnm308[0+1]), jsxtnm309])
                          jsxtnm311 = jsxtnm310
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm311
                      return jsxtnm311
                    }) // endfun(l1azy)
                    // I1CMP:return:jsxtnm312
                    return jsxtnm312
                  } // endfun(auxmain_6529)
                  let jsxtnm313 = XATSDAPP(auxmain_6529(jsxtnm304))
                  jsxtnm314 = jsxtnm313
                } // endlet
                // I1CMP:return:jsxtnm314
                return jsxtnm314
              } // endtimp(list_strmize(1202))
              jsxtnm316 = jsxtnm315
              let jsxtnm317 = XATSDAPP(jsxtnm316(jsxtnm285))
              let jsxtnm318 = XATSDAPP(jsxtnm303(jsxtnm317))
              jsxtnm319 = jsxtnm318
            } // endlet
            // I1CMP:return:jsxtnm319
            return jsxtnm319
          } // endtimp(gseq_map_lstrm(426))
          let jsxtnm321 = XATSDAPP(jsxtnm320(jsxtnm247))
          let jsxtnm322 = XATSDAPP(jsxtnm284(jsxtnm321))
          // I1CMP:return:jsxtnm322
          return jsxtnm322
        } // endtimp(gseq_map_llist(425))
        let jsxtnm324 = XATSDAPP(jsxtnm323(jsxtnm243))
        jsxtnm325 = jsxtnm324
      } // endlet
      // I1CMP:return:jsxtnm325
      return jsxtnm325
    } // endtimp(gseq_map$f1un_llist(429))
    let jsxtnm327 = XATSDAPP(jsxtnm326(jsxtnm241, jsxtnm242))
    let jsxtnm328 = XATSCAST("list_vt2t_17651", [jsxtnm327])
    // I1CMP:return:jsxtnm328
    return jsxtnm328
  } // endtimp(gseq_map$f1un_list(428))
  jsxtnm330 = jsxtnm329
  let jsxtnm333 = function (arg1) { // lam0(T_LAM(0))
    let jsxtnm331 = arg1
    // I1CMP:start
    let jsxtnm332 = XATSDAPP(expr_aops$expr_3905(jsxtnm190, jsxtnm331))
    // I1CMP:return:jsxtnm332
    return jsxtnm332
  } // endfun(lam0)
  let jsxtnm334 = XATSDAPP(jsxtnm330(jsxtnm191, jsxtnm333))
  let jsxtnm335 = XATSDAPP(jsxtnm240(jsxtnm334))
  // I1CMP:return:jsxtnm335
  return jsxtnm335
} // endfun(expr_aops$exprlst_4719)
// LCSRCsome1(Game-of-24.dats)@(4842(line=271,offs=1)--4886(line=271,offs=45))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();aops;D2PTMsome(1000;D2ITMvar(expr_aops$exprlst(5256)))))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(4890(line=273,offs=1)--5021(line=278,offs=43)))
// I1FUNDCL
function exprlst_aops$expr_4893(arg1, arg2)
{ // fun
  let jsxtnm336 = arg1
  let jsxtnm337 = arg2
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(4961(line=277,offs=1)--4977(line=277,offs=17))
  // I0Etapq(I0Ecst(list_list$concat(1198)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(6649(line=412,offs=1)--6665(line=412,offs=17))));$list(T2JAG($list(T2Pcst(expr)))))
  // T1IMPallx(list_list$concat(1198);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9138(line=623,offs=1)--9228(line=628,offs=29)))
  // T1IMPallx(list_list$concat(1198)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7358],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat(1198);$list(@(a[3360],T2Pvar(a[7358])))))))
  let jsxtnm386 = function (arg1) { // timp: list_list$concat(1198)
    let jsxtnm338 = arg1
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9200(line=628,offs=1)--9219(line=628,offs=20))
    // I0Etapq(I0Ecst(list_list$concat_vt(1199)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(6701(line=415,offs=1)--6720(line=415,offs=20))));$list(T2JAG($list(T2Pvar(a[7358])))))
    // T1IMPallx(list_list$concat_vt(1199);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9232(line=630,offs=1)--9533(line=654,offs=2)))
    // T1IMPallx(list_list$concat_vt(1199)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7359],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat_vt(1199);$list(@(a[3361],T2Pvar(a[7359])))))))
    let jsxtnm383 = function (arg1) { // timp: list_list$concat_vt(1199)
      let jsxtnm339 = arg1
      // I1CMP:start
      let jsxtnm382 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9317(line=638,offs=1)--9338(line=638,offs=22)))
        // I1VALDCL
        let jsxtnm341
        let jsxtnm340 = XATSCAPP("list_vt_nil", [0])
        jsxtnm341 = jsxtnm340
        XATS000_patck(true)
        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9347(line=640,offs=1)--9528(line=652,offs=40)))
        // I1FUNDCL
        function loop_9350(arg1, arg2)
        { // fun
          let jsxtnm342 = arg1
          let jsxtnm343 = arg2
          // I1CMP:start
          let jsxtnm380 // cas
          do {
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(344);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
            if (XATS000_ctgeq(jsxtnm342, XATSCTAG("list_nil",0))) { // gpt
              let jsxtnm344 = jsxtnm342
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9442(line=649,offs=1)--9458(line=649,offs=17))
              // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(a[7359])))))
              // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
              // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[8401],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8401])))))))
              let jsxtnm363 = function (arg1) { // timp: list_vt_reverse0(2015)
                let jsxtnm345 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
                // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8401])))))
                // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
                // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[8398],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8398])))))))
                let jsxtnm360 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                  let jsxtnm346 = arg1
                  let jsxtnm347 = arg2
                  // I1CMP:start
                  let jsxtnm359 // let
                  { // let
                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                    // I1FUNDCL
                    function loop_6433(arg1, arg2)
                    { // fun
                      let jsxtnm348 = arg1
                      let jsxtnm349 = arg2
                      // I1CMP:start
                      let jsxtnm357 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(350);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm348, XATSCTAG("list_vt_nil",0))) { // gpt
                          let jsxtnm350 = jsxtnm348
                          jsxtnm357 = jsxtnm349
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(351);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                        if (XATS000_ctgeq(jsxtnm348, XATSCTAG("list_vt_cons",1))) { // gpt
                          let jsxtnm351 = jsxtnm348
                          let jsxtnm356 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                            // I1VALDCL
                            let jsxtnm353
                            let jsxtnm352 = XATSPCON(jsxtnm348,1)
                            jsxtnm353 = jsxtnm352
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                            // I1VALDCL
                            let jsxtnm354
                            XATS000_assgn(XATSLPCN(1, jsxtnm348), jsxtnm349)
                            jsxtnm354 = []
                            XATS000_patck(true)
                            XATS000_fold(jsxtnm348)
                            let jsxtnm355 = XATSDAPP(loop_6433(jsxtnm353, jsxtnm348))
                            jsxtnm356 = jsxtnm355
                          } // endlet
                          jsxtnm357 = jsxtnm356
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm357
                      return jsxtnm357
                    } // endfun(loop_6433)
                    let jsxtnm358 = XATSDAPP(loop_6433(jsxtnm346, jsxtnm347))
                    jsxtnm359 = jsxtnm358
                  } // endlet
                  // I1CMP:return:jsxtnm359
                  return jsxtnm359
                } // endtimp(list_vt_rappend00(2018))
                let jsxtnm361 = XATSCAPP("list_vt_nil", [0])
                let jsxtnm362 = XATSDAPP(jsxtnm360(jsxtnm345, jsxtnm361))
                // I1CMP:return:jsxtnm362
                return jsxtnm362
              } // endtimp(list_vt_reverse0(2015))
              let jsxtnm364 = XATSDAPP(jsxtnm363(jsxtnm343))
              jsxtnm380 = jsxtnm364
              break // cls
            } // gpt
            // } // cls
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(365);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(xs1(2561)),I0Pvar(xss(2562))));$list(@(xs1(2561),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(365));0)),@(xss(2562),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(365));1)))))
            if (XATS000_ctgeq(jsxtnm342, XATSCTAG("list_cons",1))) { // gpt
              let jsxtnm365 = jsxtnm342
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9499(line=652,offs=11)--9516(line=652,offs=28))
              // I0Etapq(I0Ecst(list_rappendx0_vt(1186)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(4757(line=298,offs=1)--4774(line=298,offs=18))));$list(T2JAG($list(T2Pvar(a[7359])))))
              // T1IMPallx(list_rappendx0_vt(1186);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(6095(line=404,offs=1)--6360(line=426,offs=2)))
              // T1IMPallx(list_rappendx0_vt(1186)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7339],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_rappendx0_vt(1186);$list(@(a[3342],T2Pvar(x0[7339])))))))
              let jsxtnm377 = function (arg1, arg2) { // timp: list_rappendx0_vt(1186)
                let jsxtnm366 = arg1
                let jsxtnm367 = arg2
                // I1CMP:start
                let jsxtnm376 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(6174(line=412,offs=1)--6350(line=424,offs=34)))
                  // I1FUNDCL
                  function loop_6177(arg1, arg2)
                  { // fun
                    let jsxtnm368 = arg1
                    let jsxtnm369 = arg2
                    // I1CMP:start
                    let jsxtnm374 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(370);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                      if (XATS000_ctgeq(jsxtnm368, XATSCTAG("list_nil",0))) { // gpt
                        let jsxtnm370 = jsxtnm368
                        jsxtnm374 = jsxtnm369
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(371);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2511)),I0Pvar(xs(2512))));$list(@(x0(2511),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(371));0)),@(xs(2512),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(371));1)))))
                      if (XATS000_ctgeq(jsxtnm368, XATSCTAG("list_cons",1))) { // gpt
                        let jsxtnm371 = jsxtnm368
                        let jsxtnm372 = XATSCAPP("list_vt_cons", [1, XATSP1CN("list_cons", jsxtnm371[0+1]), jsxtnm369])
                        let jsxtnm373 = XATSDAPP(loop_6177(XATSP1CN("list_cons", jsxtnm371[1+1]), jsxtnm372))
                        jsxtnm374 = jsxtnm373
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm374
                    return jsxtnm374
                  } // endfun(loop_6177)
                  let jsxtnm375 = XATSDAPP(loop_6177(jsxtnm366, jsxtnm367))
                  jsxtnm376 = jsxtnm375
                } // endlet
                // I1CMP:return:jsxtnm376
                return jsxtnm376
              } // endtimp(list_rappendx0_vt(1186))
              let jsxtnm378 = XATSDAPP(jsxtnm377(XATSP1CN("list_cons", jsxtnm365[0+1]), jsxtnm343))
              let jsxtnm379 = XATSDAPP(loop_9350(XATSP1CN("list_cons", jsxtnm365[1+1]), jsxtnm378))
              jsxtnm380 = jsxtnm379
              break // cls
            } // gpt
            // } // cls
            XATS000_cfail()
          } while (false) // end-of(do)
          // I1CMP:return:jsxtnm380
          return jsxtnm380
        } // endfun(loop_9350)
        let jsxtnm381 = XATSDAPP(loop_9350(jsxtnm339, jsxtnm341))
        jsxtnm382 = jsxtnm381
      } // endlet
      // I1CMP:return:jsxtnm382
      return jsxtnm382
    } // endtimp(list_list$concat_vt(1199))
    let jsxtnm384 = XATSDAPP(jsxtnm383(jsxtnm338))
    let jsxtnm385 = XATSCAST("list_vt2t_17651", [jsxtnm384])
    // I1CMP:return:jsxtnm385
    return jsxtnm385
  } // endtimp(list_list$concat(1198))
  // LCSRCsome1(Game-of-24.dats)@(4979(line=278,offs=1)--4992(line=278,offs=14))
  // I0Etapq(I0Ecst(list_map$f1un(1243)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(8026(line=382,offs=1)--8039(line=382,offs=14))));$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(list_map$f1un(1243);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(9918(line=664,offs=1)--9999(line=668,offs=37)))
  // T1IMPallx(list_map$f1un(1243)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7422],T2Pcst(expr)),@(y0[7423],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_map$f1un(1243);$list(@(x0[3419],T2Pvar(x0[7422])),@(y0[3420],T2Pvar(y0[7423])))))))
  let jsxtnm476
  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(9963(line=668,offs=1)--9981(line=668,offs=19))
  // I0Etapq(I0Ecst(gseq_map$f1un_list(428)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(13108(line=758,offs=1)--13126(line=758,offs=19))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7422]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[7422]))),T2JAG($list(T2Pvar(y0[7423])))))
  // T1IMPallx(gseq_map$f1un_list(428);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14500(line=996,offs=1)--14631(line=1004,offs=43)))
  // T1IMPallx(gseq_map$f1un_list(428)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6107],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6108],T2Pcst(expr)),@(y0[6109],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_list(428);$list(@(xs[1293],T2Pvar(xs[6107])),@(x0[1294],T2Pvar(x0[6108])),@(y0[1295],T2Pvar(y0[6109])))))))
  let jsxtnm475 = function (arg1, arg2) { // timp: gseq_map$f1un_list(428)
    let jsxtnm387 = arg1
    let jsxtnm388 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14589(line=1004,offs=1)--14608(line=1004,offs=20))
    // I0Etapq(I0Ecst(gseq_map$f1un_llist(429)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(13306(line=771,offs=1)--13325(line=771,offs=20))));$list(T2JAG($list(T2Pvar(xs[6107]))),T2JAG($list(T2Pvar(x0[6108]))),T2JAG($list(T2Pvar(y0[6109])))))
    // T1IMPallx(gseq_map$f1un_llist(429);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14781(line=1018,offs=1)--14943(line=1030,offs=2)))
    // T1IMPallx(gseq_map$f1un_llist(429)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6113],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6114],T2Pcst(expr)),@(y0[6115],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_llist(429);$list(@(xs[1296],T2Pvar(xs[6113])),@(x0[1297],T2Pvar(x0[6114])),@(y0[1298],T2Pvar(y0[6115])))))))
    let jsxtnm472 = function (arg1, arg2) { // timp: gseq_map$f1un_llist(429)
      let jsxtnm389 = arg1
      let jsxtnm390 = arg2
      // I1CMP:start
      let jsxtnm471 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14897(line=1028,offs=1)--14941(line=1029,offs=36)))
        // I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pvar(x0[6114])),@(y0[484],T2Pvar(y0[6115]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14857(line=1025,offs=1)--14871(line=1025,offs=15))
        // I0Etapq(I0Ecst(gseq_map_llist(425)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(12650(line=732,offs=1)--12664(line=732,offs=15))));$list(T2JAG($list(T2Pvar(xs[6113]))),T2JAG($list(T2Pvar(x0[6114]))),T2JAG($list(T2Pvar(y0[6115])))))
        // T1IMPallx(gseq_map_llist(425);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14658(line=1008,offs=1)--14777(line=1016,offs=32)))
        // T1IMPallx(gseq_map_llist(425)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6110],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6111],T2Pcst(expr)),@(y0[6112],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_llist(425);$list(@(xs[1284],T2Pvar(xs[6110])),@(x0[1285],T2Pvar(x0[6111])),@(y0[1286],T2Pvar(y0[6112])))))))
        let jsxtnm469 = function (arg1) { // timp: gseq_map_llist(425)
          let jsxtnm393 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14723(line=1014,offs=1)--14739(line=1014,offs=17))
          // I0Etapq(I0Ecst(strm_vt_listize0(2194)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8819(line=452,offs=1)--8835(line=452,offs=17))));$list(T2JAG($list(T2Pvar(y0[6112])))))
          // T1IMPallx(strm_vt_listize0(2194);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7222(line=450,offs=1)--7317(line=455,offs=28)))
          // T1IMPallx(strm_vt_listize0(2194)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8567],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_listize0(2194);$list(@(x0[5484],T2Pvar(x0[8567])))))))
          let jsxtnm430 = function (arg1) { // timp: strm_vt_listize0(2194)
            let jsxtnm394 = arg1
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7269(line=454,offs=1)--7285(line=454,offs=17))
            // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(x0[8567])))))
            // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
            // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8401],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8401])))))))
            let jsxtnm413 = function (arg1) { // timp: list_vt_reverse0(2015)
              let jsxtnm395 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
              // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8401])))))
              // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
              // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8398],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8398])))))))
              let jsxtnm410 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                let jsxtnm396 = arg1
                let jsxtnm397 = arg2
                // I1CMP:start
                let jsxtnm409 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                  // I1FUNDCL
                  function loop_6433(arg1, arg2)
                  { // fun
                    let jsxtnm398 = arg1
                    let jsxtnm399 = arg2
                    // I1CMP:start
                    let jsxtnm407 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(400);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm398, XATSCTAG("list_vt_nil",0))) { // gpt
                        let jsxtnm400 = jsxtnm398
                        jsxtnm407 = jsxtnm399
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(401);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                      if (XATS000_ctgeq(jsxtnm398, XATSCTAG("list_vt_cons",1))) { // gpt
                        let jsxtnm401 = jsxtnm398
                        let jsxtnm406 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                          // I1VALDCL
                          let jsxtnm403
                          let jsxtnm402 = XATSPCON(jsxtnm398,1)
                          jsxtnm403 = jsxtnm402
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                          // I1VALDCL
                          let jsxtnm404
                          XATS000_assgn(XATSLPCN(1, jsxtnm398), jsxtnm399)
                          jsxtnm404 = []
                          XATS000_patck(true)
                          XATS000_fold(jsxtnm398)
                          let jsxtnm405 = XATSDAPP(loop_6433(jsxtnm403, jsxtnm398))
                          jsxtnm406 = jsxtnm405
                        } // endlet
                        jsxtnm407 = jsxtnm406
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm407
                    return jsxtnm407
                  } // endfun(loop_6433)
                  let jsxtnm408 = XATSDAPP(loop_6433(jsxtnm396, jsxtnm397))
                  jsxtnm409 = jsxtnm408
                } // endlet
                // I1CMP:return:jsxtnm409
                return jsxtnm409
              } // endtimp(list_vt_rappend00(2018))
              let jsxtnm411 = XATSCAPP("list_vt_nil", [0])
              let jsxtnm412 = XATSDAPP(jsxtnm410(jsxtnm395, jsxtnm411))
              // I1CMP:return:jsxtnm412
              return jsxtnm412
            } // endtimp(list_vt_reverse0(2015))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7291(line=455,offs=2)--7308(line=455,offs=19))
            // I0Etapq(I0Ecst(strm_vt_rlistize0(2196)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8956(line=462,offs=1)--8973(line=462,offs=18))));$list(T2JAG($list(T2Pvar(x0[8567])))))
            // T1IMPallx(strm_vt_rlistize0(2196);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7321(line=457,offs=1)--7614(line=480,offs=2)))
            // T1IMPallx(strm_vt_rlistize0(2196)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8568],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_rlistize0(2196);$list(@(x0[5487],T2Pvar(x0[8568])))))))
            let jsxtnm427 = function (arg1) { // timp: strm_vt_rlistize0(2196)
              let jsxtnm414 = arg1
              // I1CMP:start
              let jsxtnm426 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7398(line=465,offs=1)--7420(line=465,offs=23)))
                // I1VALDCL
                let jsxtnm416
                let jsxtnm415 = XATSCAPP("list_vt_nil", [0])
                jsxtnm416 = jsxtnm415
                XATS000_patck(true)
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7424(line=467,offs=1)--7612(line=479,offs=35)))
                // I1FUNDCL
                function loop_7427(arg1, arg2)
                { // fun
                  let jsxtnm417 = arg1
                  let jsxtnm418 = arg2
                  // I1CMP:start
                  let jsxtnm419 = XATS000_dl1az(jsxtnm417)
                  let jsxtnm424 // cas
                  do {
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(420);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                    if (XATS000_ctgeq(jsxtnm419, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                      let jsxtnm420 = jsxtnm419
                      jsxtnm424 = jsxtnm418
                      break // cls
                    } // gpt
                    // } // cls
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(421);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4505)),I0Pvar(xs(4506)))));$list(@(x1(4505),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(421));0)),@(xs(4506),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(421));1)))))
                    if (XATS000_ctgeq(jsxtnm419, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                      let jsxtnm421 = jsxtnm419
                      let jsxtnm422 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm421[0+1]), jsxtnm418])
                      let jsxtnm423 = XATSDAPP(loop_7427(XATSP1CN("strmcon_vt_cons", jsxtnm421[1+1]), jsxtnm422))
                      jsxtnm424 = jsxtnm423
                      break // cls
                    } // gpt
                    // } // cls
                    XATS000_cfail()
                  } while (false) // end-of(do)
                  // I1CMP:return:jsxtnm424
                  return jsxtnm424
                } // endfun(loop_7427)
                let jsxtnm425 = XATSDAPP(loop_7427(jsxtnm414, jsxtnm416))
                jsxtnm426 = jsxtnm425
              } // endlet
              // I1CMP:return:jsxtnm426
              return jsxtnm426
            } // endtimp(strm_vt_rlistize0(2196))
            let jsxtnm428 = XATSDAPP(jsxtnm427(jsxtnm394))
            let jsxtnm429 = XATSDAPP(jsxtnm413(jsxtnm428))
            // I1CMP:return:jsxtnm429
            return jsxtnm429
          } // endtimp(strm_vt_listize0(2194))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14746(line=1016,offs=1)--14760(line=1016,offs=15))
          // I0Etapq(I0Ecst(gseq_map_lstrm(426)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(12714(line=737,offs=1)--12728(line=737,offs=15))));$list(T2JAG($list(T2Pvar(xs[6110]))),T2JAG($list(T2Pvar(x0[6111]))),T2JAG($list(T2Pvar(y0[6112])))))
          // T1IMPallx(gseq_map_lstrm(426);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15009(line=1034,offs=1)--15178(line=1046,offs=2)))
          // T1IMPallx(gseq_map_lstrm(426)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6116],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6117],T2Pcst(expr)),@(y0[6118],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_lstrm(426);$list(@(xs[1287],T2Pvar(xs[6116])),@(x0[1288],T2Pvar(x0[6117])),@(y0[1289],T2Pvar(y0[6118])))))))
          let jsxtnm466 = function (arg1) { // timp: gseq_map_lstrm(426)
            let jsxtnm431 = arg1
            // I1CMP:start
            let jsxtnm465 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15131(line=1044,offs=1)--15176(line=1045,offs=37)))
              // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pvar(x0[6117])),@(y0[3807],T2Pvar(y0[6118]))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15074(line=1040,offs=1)--15086(line=1040,offs=13))
              // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Pvar(x0[6117]))),T2JAG($list(T2Pvar(y0[6118])))))
              // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
              // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8550],T2Pcst(expr)),@(y0[8551],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8550])),@(y0[5444],T2Pvar(y0[8551])))))))
              let jsxtnm449 = function (arg1) { // timp: strm_vt_map0(2174)
                let jsxtnm432 = arg1
                // I1CMP:start
                let jsxtnm448 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
                  // I1FUNDCL
                  function auxmain_4114(arg1)
                  { // fun
                    let jsxtnm433 = arg1
                    // I1CMP:start
                    let jsxtnm446 = XATS000_l1azy(function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm434 = XATS000_dl1az(jsxtnm433)
                      let jsxtnm445 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(435);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm434, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                          let jsxtnm435 = jsxtnm434
                          let jsxtnm436 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm445 = jsxtnm436
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(437);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4467)),I0Pvar(xs(4468)))));$list(@(x1(4467),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(437));0)),@(xs(4468),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(437));1)))))
                        if (XATS000_ctgeq(jsxtnm434, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                          let jsxtnm437 = jsxtnm434
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                          // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8550]))),T2JAG($list(T2Pvar(y0[8551])))))
                          // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15131(line=1044,offs=1)--15176(line=1045,offs=37)))
                          // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6116],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6117],T2Pcst(expr)),@(y0[6118],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pcst(expr)),@(y0[3807],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm441
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15160(line=1045,offs=21)--15168(line=1045,offs=29))
                          // I0Etapq(I0Ecst(map$fopr(75)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(3732(line=232,offs=1)--3740(line=232,offs=9))));$list(T2JAG($list(T2Pvar(x0[6117]))),T2JAG($list(T2Pvar(y0[6118])))))
                          // T1IMPallx(map$fopr(75);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14897(line=1028,offs=1)--14941(line=1029,offs=36)))
                          // T1IMPallx(map$fopr(75)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6113],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6114],T2Pcst(expr)),@(y0[6115],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pcst(expr)),@(y0[484],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm440 = function (arg1) { // timp: map$fopr(75)
                            let jsxtnm438 = arg1
                            // I1CMP:start
                            let jsxtnm439 = XATSDAPP(jsxtnm390(jsxtnm438))
                            // I1CMP:return:jsxtnm439
                            return jsxtnm439
                          } // endtimp(map$fopr(75))
                          jsxtnm441 = jsxtnm440
                          let jsxtnm442 = XATSDAPP(jsxtnm441(XATSP1CN("strmcon_vt_cons", jsxtnm437[0+1])))
                          let jsxtnm443 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm437[1+1])))
                          let jsxtnm444 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm442, jsxtnm443])
                          jsxtnm445 = jsxtnm444
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm445
                      return jsxtnm445
                    }) // endfun(l1azy)
                    // I1CMP:return:jsxtnm446
                    return jsxtnm446
                  } // endfun(auxmain_4114)
                  let jsxtnm447 = XATSDAPP(auxmain_4114(jsxtnm432))
                  jsxtnm448 = jsxtnm447
                } // endlet
                // I1CMP:return:jsxtnm448
                return jsxtnm448
              } // endtimp(strm_vt_map0(2174))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15097(line=1042,offs=1)--15109(line=1042,offs=13))
              // I0Etapq(I0Ecst(gseq_strmize(372)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(2503(line=122,offs=1)--2515(line=122,offs=13))));$list(T2JAG($list(T2Pvar(xs[6116]))),T2JAG($list(T2Pvar(x0[6117])))))
              // T1IMPallx(gseq_strmize(372);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6711(line=443,offs=1)--6775(line=445,offs=46)))
              // T1IMPallx(gseq_strmize(372)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7407],T2Pcst(expr)),@(x0[7407],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_strmize(372);$list(@(xs[1109],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7407])))),@(x0[1110],T2Pvar(x0[7407])))))))
              let jsxtnm462
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6759(line=445,offs=30)--6771(line=445,offs=42))
              // I0Etapq(I0Ecst(list_strmize(1202)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(1677(line=61,offs=1)--1689(line=61,offs=13))));$list(T2JAG($list(T2Pvar(x0[7407])))))
              // T1IMPallx(list_strmize(1202);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6452(line=418,offs=1)--6671(line=441,offs=2)))
              // T1IMPallx(list_strmize(1202)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7406],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_strmize(1202);$list(@(a[3366],T2Pvar(x0[7406])))))))
              let jsxtnm461 = function (arg1) { // timp: list_strmize(1202)
                let jsxtnm450 = arg1
                // I1CMP:start
                let jsxtnm460 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6526(line=427,offs=1)--6666(line=439,offs=2)))
                  // I1FUNDCL
                  function auxmain_6529(arg1)
                  { // fun
                    let jsxtnm451 = arg1
                    // I1CMP:start
                    let jsxtnm458 = XATS000_l1azy(function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm457 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(452);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                        if (XATS000_ctgeq(jsxtnm451, XATSCTAG("list_nil",0))) { // gpt
                          let jsxtnm452 = jsxtnm451
                          let jsxtnm453 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm457 = jsxtnm453
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(454);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2601)),I0Pvar(xs(2602))));$list(@(x0(2601),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(454));0)),@(xs(2602),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(454));1)))))
                        if (XATS000_ctgeq(jsxtnm451, XATSCTAG("list_cons",1))) { // gpt
                          let jsxtnm454 = jsxtnm451
                          let jsxtnm455 = XATSDAPP(auxmain_6529(XATSP1CN("list_cons", jsxtnm454[1+1])))
                          let jsxtnm456 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("list_cons", jsxtnm454[0+1]), jsxtnm455])
                          jsxtnm457 = jsxtnm456
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm457
                      return jsxtnm457
                    }) // endfun(l1azy)
                    // I1CMP:return:jsxtnm458
                    return jsxtnm458
                  } // endfun(auxmain_6529)
                  let jsxtnm459 = XATSDAPP(auxmain_6529(jsxtnm450))
                  jsxtnm460 = jsxtnm459
                } // endlet
                // I1CMP:return:jsxtnm460
                return jsxtnm460
              } // endtimp(list_strmize(1202))
              jsxtnm462 = jsxtnm461
              let jsxtnm463 = XATSDAPP(jsxtnm462(jsxtnm431))
              let jsxtnm464 = XATSDAPP(jsxtnm449(jsxtnm463))
              jsxtnm465 = jsxtnm464
            } // endlet
            // I1CMP:return:jsxtnm465
            return jsxtnm465
          } // endtimp(gseq_map_lstrm(426))
          let jsxtnm467 = XATSDAPP(jsxtnm466(jsxtnm393))
          let jsxtnm468 = XATSDAPP(jsxtnm430(jsxtnm467))
          // I1CMP:return:jsxtnm468
          return jsxtnm468
        } // endtimp(gseq_map_llist(425))
        let jsxtnm470 = XATSDAPP(jsxtnm469(jsxtnm389))
        jsxtnm471 = jsxtnm470
      } // endlet
      // I1CMP:return:jsxtnm471
      return jsxtnm471
    } // endtimp(gseq_map$f1un_llist(429))
    let jsxtnm473 = XATSDAPP(jsxtnm472(jsxtnm387, jsxtnm388))
    let jsxtnm474 = XATSCAST("list_vt2t_17651", [jsxtnm473])
    // I1CMP:return:jsxtnm474
    return jsxtnm474
  } // endtimp(gseq_map$f1un_list(428))
  jsxtnm476 = jsxtnm475
  let jsxtnm479 = function (arg1) { // lam0(T_LAM(0))
    let jsxtnm477 = arg1
    // I1CMP:start
    let jsxtnm478 = XATSDAPP(expr_aops$expr_3905(jsxtnm477, jsxtnm337))
    // I1CMP:return:jsxtnm478
    return jsxtnm478
  } // endfun(lam0)
  let jsxtnm480 = XATSDAPP(jsxtnm476(jsxtnm336, jsxtnm479))
  let jsxtnm481 = XATSDAPP(jsxtnm386(jsxtnm480))
  // I1CMP:return:jsxtnm481
  return jsxtnm481
} // endfun(exprlst_aops$expr_4893)
// LCSRCsome1(Game-of-24.dats)@(5022(line=279,offs=1)--5066(line=279,offs=45))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();aops;D2PTMsome(1000;D2ITMvar(exprlst_aops$expr(5260)))))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(5070(line=281,offs=1)--5204(line=286,offs=43)))
// I1FUNDCL
function exprlst_aops$exprlst_5073(arg1, arg2)
{ // fun
  let jsxtnm482 = arg1
  let jsxtnm483 = arg2
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(5144(line=285,offs=1)--5160(line=285,offs=17))
  // I0Etapq(I0Ecst(list_list$concat(1198)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(6649(line=412,offs=1)--6665(line=412,offs=17))));$list(T2JAG($list(T2Pcst(expr)))))
  // T1IMPallx(list_list$concat(1198);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9138(line=623,offs=1)--9228(line=628,offs=29)))
  // T1IMPallx(list_list$concat(1198)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7358],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat(1198);$list(@(a[3360],T2Pvar(a[7358])))))))
  let jsxtnm532 = function (arg1) { // timp: list_list$concat(1198)
    let jsxtnm484 = arg1
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9200(line=628,offs=1)--9219(line=628,offs=20))
    // I0Etapq(I0Ecst(list_list$concat_vt(1199)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(6701(line=415,offs=1)--6720(line=415,offs=20))));$list(T2JAG($list(T2Pvar(a[7358])))))
    // T1IMPallx(list_list$concat_vt(1199);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9232(line=630,offs=1)--9533(line=654,offs=2)))
    // T1IMPallx(list_list$concat_vt(1199)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7359],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat_vt(1199);$list(@(a[3361],T2Pvar(a[7359])))))))
    let jsxtnm529 = function (arg1) { // timp: list_list$concat_vt(1199)
      let jsxtnm485 = arg1
      // I1CMP:start
      let jsxtnm528 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9317(line=638,offs=1)--9338(line=638,offs=22)))
        // I1VALDCL
        let jsxtnm487
        let jsxtnm486 = XATSCAPP("list_vt_nil", [0])
        jsxtnm487 = jsxtnm486
        XATS000_patck(true)
        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9347(line=640,offs=1)--9528(line=652,offs=40)))
        // I1FUNDCL
        function loop_9350(arg1, arg2)
        { // fun
          let jsxtnm488 = arg1
          let jsxtnm489 = arg2
          // I1CMP:start
          let jsxtnm526 // cas
          do {
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(490);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
            if (XATS000_ctgeq(jsxtnm488, XATSCTAG("list_nil",0))) { // gpt
              let jsxtnm490 = jsxtnm488
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9442(line=649,offs=1)--9458(line=649,offs=17))
              // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(a[7359])))))
              // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
              // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[8401],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8401])))))))
              let jsxtnm509 = function (arg1) { // timp: list_vt_reverse0(2015)
                let jsxtnm491 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
                // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8401])))))
                // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
                // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[8398],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8398])))))))
                let jsxtnm506 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                  let jsxtnm492 = arg1
                  let jsxtnm493 = arg2
                  // I1CMP:start
                  let jsxtnm505 // let
                  { // let
                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                    // I1FUNDCL
                    function loop_6433(arg1, arg2)
                    { // fun
                      let jsxtnm494 = arg1
                      let jsxtnm495 = arg2
                      // I1CMP:start
                      let jsxtnm503 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(496);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm494, XATSCTAG("list_vt_nil",0))) { // gpt
                          let jsxtnm496 = jsxtnm494
                          jsxtnm503 = jsxtnm495
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(497);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                        if (XATS000_ctgeq(jsxtnm494, XATSCTAG("list_vt_cons",1))) { // gpt
                          let jsxtnm497 = jsxtnm494
                          let jsxtnm502 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                            // I1VALDCL
                            let jsxtnm499
                            let jsxtnm498 = XATSPCON(jsxtnm494,1)
                            jsxtnm499 = jsxtnm498
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                            // I1VALDCL
                            let jsxtnm500
                            XATS000_assgn(XATSLPCN(1, jsxtnm494), jsxtnm495)
                            jsxtnm500 = []
                            XATS000_patck(true)
                            XATS000_fold(jsxtnm494)
                            let jsxtnm501 = XATSDAPP(loop_6433(jsxtnm499, jsxtnm494))
                            jsxtnm502 = jsxtnm501
                          } // endlet
                          jsxtnm503 = jsxtnm502
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm503
                      return jsxtnm503
                    } // endfun(loop_6433)
                    let jsxtnm504 = XATSDAPP(loop_6433(jsxtnm492, jsxtnm493))
                    jsxtnm505 = jsxtnm504
                  } // endlet
                  // I1CMP:return:jsxtnm505
                  return jsxtnm505
                } // endtimp(list_vt_rappend00(2018))
                let jsxtnm507 = XATSCAPP("list_vt_nil", [0])
                let jsxtnm508 = XATSDAPP(jsxtnm506(jsxtnm491, jsxtnm507))
                // I1CMP:return:jsxtnm508
                return jsxtnm508
              } // endtimp(list_vt_reverse0(2015))
              let jsxtnm510 = XATSDAPP(jsxtnm509(jsxtnm489))
              jsxtnm526 = jsxtnm510
              break // cls
            } // gpt
            // } // cls
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(511);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(xs1(2561)),I0Pvar(xss(2562))));$list(@(xs1(2561),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(511));0)),@(xss(2562),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(511));1)))))
            if (XATS000_ctgeq(jsxtnm488, XATSCTAG("list_cons",1))) { // gpt
              let jsxtnm511 = jsxtnm488
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(9499(line=652,offs=11)--9516(line=652,offs=28))
              // I0Etapq(I0Ecst(list_rappendx0_vt(1186)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(4757(line=298,offs=1)--4774(line=298,offs=18))));$list(T2JAG($list(T2Pvar(a[7359])))))
              // T1IMPallx(list_rappendx0_vt(1186);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(6095(line=404,offs=1)--6360(line=426,offs=2)))
              // T1IMPallx(list_rappendx0_vt(1186)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7339],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_rappendx0_vt(1186);$list(@(a[3342],T2Pvar(x0[7339])))))))
              let jsxtnm523 = function (arg1, arg2) { // timp: list_rappendx0_vt(1186)
                let jsxtnm512 = arg1
                let jsxtnm513 = arg2
                // I1CMP:start
                let jsxtnm522 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(6174(line=412,offs=1)--6350(line=424,offs=34)))
                  // I1FUNDCL
                  function loop_6177(arg1, arg2)
                  { // fun
                    let jsxtnm514 = arg1
                    let jsxtnm515 = arg2
                    // I1CMP:start
                    let jsxtnm520 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(516);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                      if (XATS000_ctgeq(jsxtnm514, XATSCTAG("list_nil",0))) { // gpt
                        let jsxtnm516 = jsxtnm514
                        jsxtnm520 = jsxtnm515
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(517);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2511)),I0Pvar(xs(2512))));$list(@(x0(2511),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(517));0)),@(xs(2512),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(517));1)))))
                      if (XATS000_ctgeq(jsxtnm514, XATSCTAG("list_cons",1))) { // gpt
                        let jsxtnm517 = jsxtnm514
                        let jsxtnm518 = XATSCAPP("list_vt_cons", [1, XATSP1CN("list_cons", jsxtnm517[0+1]), jsxtnm515])
                        let jsxtnm519 = XATSDAPP(loop_6177(XATSP1CN("list_cons", jsxtnm517[1+1]), jsxtnm518))
                        jsxtnm520 = jsxtnm519
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm520
                    return jsxtnm520
                  } // endfun(loop_6177)
                  let jsxtnm521 = XATSDAPP(loop_6177(jsxtnm512, jsxtnm513))
                  jsxtnm522 = jsxtnm521
                } // endlet
                // I1CMP:return:jsxtnm522
                return jsxtnm522
              } // endtimp(list_rappendx0_vt(1186))
              let jsxtnm524 = XATSDAPP(jsxtnm523(XATSP1CN("list_cons", jsxtnm511[0+1]), jsxtnm489))
              let jsxtnm525 = XATSDAPP(loop_9350(XATSP1CN("list_cons", jsxtnm511[1+1]), jsxtnm524))
              jsxtnm526 = jsxtnm525
              break // cls
            } // gpt
            // } // cls
            XATS000_cfail()
          } while (false) // end-of(do)
          // I1CMP:return:jsxtnm526
          return jsxtnm526
        } // endfun(loop_9350)
        let jsxtnm527 = XATSDAPP(loop_9350(jsxtnm485, jsxtnm487))
        jsxtnm528 = jsxtnm527
      } // endlet
      // I1CMP:return:jsxtnm528
      return jsxtnm528
    } // endtimp(list_list$concat_vt(1199))
    let jsxtnm530 = XATSDAPP(jsxtnm529(jsxtnm484))
    let jsxtnm531 = XATSCAST("list_vt2t_17651", [jsxtnm530])
    // I1CMP:return:jsxtnm531
    return jsxtnm531
  } // endtimp(list_list$concat(1198))
  // LCSRCsome1(Game-of-24.dats)@(5162(line=286,offs=1)--5175(line=286,offs=14))
  // I0Etapq(I0Ecst(list_map$f1un(1243)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(8026(line=382,offs=1)--8039(line=382,offs=14))));$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(list_map$f1un(1243);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(9918(line=664,offs=1)--9999(line=668,offs=37)))
  // T1IMPallx(list_map$f1un(1243)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7422],T2Pcst(expr)),@(y0[7423],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_map$f1un(1243);$list(@(x0[3419],T2Pvar(x0[7422])),@(y0[3420],T2Pvar(y0[7423])))))))
  let jsxtnm622
  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(9963(line=668,offs=1)--9981(line=668,offs=19))
  // I0Etapq(I0Ecst(gseq_map$f1un_list(428)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(13108(line=758,offs=1)--13126(line=758,offs=19))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7422]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[7422]))),T2JAG($list(T2Pvar(y0[7423])))))
  // T1IMPallx(gseq_map$f1un_list(428);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14500(line=996,offs=1)--14631(line=1004,offs=43)))
  // T1IMPallx(gseq_map$f1un_list(428)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6107],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6108],T2Pcst(expr)),@(y0[6109],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_list(428);$list(@(xs[1293],T2Pvar(xs[6107])),@(x0[1294],T2Pvar(x0[6108])),@(y0[1295],T2Pvar(y0[6109])))))))
  let jsxtnm621 = function (arg1, arg2) { // timp: gseq_map$f1un_list(428)
    let jsxtnm533 = arg1
    let jsxtnm534 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14589(line=1004,offs=1)--14608(line=1004,offs=20))
    // I0Etapq(I0Ecst(gseq_map$f1un_llist(429)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(13306(line=771,offs=1)--13325(line=771,offs=20))));$list(T2JAG($list(T2Pvar(xs[6107]))),T2JAG($list(T2Pvar(x0[6108]))),T2JAG($list(T2Pvar(y0[6109])))))
    // T1IMPallx(gseq_map$f1un_llist(429);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14781(line=1018,offs=1)--14943(line=1030,offs=2)))
    // T1IMPallx(gseq_map$f1un_llist(429)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6113],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6114],T2Pcst(expr)),@(y0[6115],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_llist(429);$list(@(xs[1296],T2Pvar(xs[6113])),@(x0[1297],T2Pvar(x0[6114])),@(y0[1298],T2Pvar(y0[6115])))))))
    let jsxtnm618 = function (arg1, arg2) { // timp: gseq_map$f1un_llist(429)
      let jsxtnm535 = arg1
      let jsxtnm536 = arg2
      // I1CMP:start
      let jsxtnm617 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14897(line=1028,offs=1)--14941(line=1029,offs=36)))
        // I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pvar(x0[6114])),@(y0[484],T2Pvar(y0[6115]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14857(line=1025,offs=1)--14871(line=1025,offs=15))
        // I0Etapq(I0Ecst(gseq_map_llist(425)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(12650(line=732,offs=1)--12664(line=732,offs=15))));$list(T2JAG($list(T2Pvar(xs[6113]))),T2JAG($list(T2Pvar(x0[6114]))),T2JAG($list(T2Pvar(y0[6115])))))
        // T1IMPallx(gseq_map_llist(425);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14658(line=1008,offs=1)--14777(line=1016,offs=32)))
        // T1IMPallx(gseq_map_llist(425)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6110],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6111],T2Pcst(expr)),@(y0[6112],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_llist(425);$list(@(xs[1284],T2Pvar(xs[6110])),@(x0[1285],T2Pvar(x0[6111])),@(y0[1286],T2Pvar(y0[6112])))))))
        let jsxtnm615 = function (arg1) { // timp: gseq_map_llist(425)
          let jsxtnm539 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14723(line=1014,offs=1)--14739(line=1014,offs=17))
          // I0Etapq(I0Ecst(strm_vt_listize0(2194)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8819(line=452,offs=1)--8835(line=452,offs=17))));$list(T2JAG($list(T2Pvar(y0[6112])))))
          // T1IMPallx(strm_vt_listize0(2194);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7222(line=450,offs=1)--7317(line=455,offs=28)))
          // T1IMPallx(strm_vt_listize0(2194)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8567],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_listize0(2194);$list(@(x0[5484],T2Pvar(x0[8567])))))))
          let jsxtnm576 = function (arg1) { // timp: strm_vt_listize0(2194)
            let jsxtnm540 = arg1
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7269(line=454,offs=1)--7285(line=454,offs=17))
            // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(x0[8567])))))
            // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
            // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8401],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8401])))))))
            let jsxtnm559 = function (arg1) { // timp: list_vt_reverse0(2015)
              let jsxtnm541 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
              // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8401])))))
              // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
              // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8398],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8398])))))))
              let jsxtnm556 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                let jsxtnm542 = arg1
                let jsxtnm543 = arg2
                // I1CMP:start
                let jsxtnm555 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                  // I1FUNDCL
                  function loop_6433(arg1, arg2)
                  { // fun
                    let jsxtnm544 = arg1
                    let jsxtnm545 = arg2
                    // I1CMP:start
                    let jsxtnm553 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(546);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm544, XATSCTAG("list_vt_nil",0))) { // gpt
                        let jsxtnm546 = jsxtnm544
                        jsxtnm553 = jsxtnm545
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(547);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                      if (XATS000_ctgeq(jsxtnm544, XATSCTAG("list_vt_cons",1))) { // gpt
                        let jsxtnm547 = jsxtnm544
                        let jsxtnm552 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                          // I1VALDCL
                          let jsxtnm549
                          let jsxtnm548 = XATSPCON(jsxtnm544,1)
                          jsxtnm549 = jsxtnm548
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                          // I1VALDCL
                          let jsxtnm550
                          XATS000_assgn(XATSLPCN(1, jsxtnm544), jsxtnm545)
                          jsxtnm550 = []
                          XATS000_patck(true)
                          XATS000_fold(jsxtnm544)
                          let jsxtnm551 = XATSDAPP(loop_6433(jsxtnm549, jsxtnm544))
                          jsxtnm552 = jsxtnm551
                        } // endlet
                        jsxtnm553 = jsxtnm552
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm553
                    return jsxtnm553
                  } // endfun(loop_6433)
                  let jsxtnm554 = XATSDAPP(loop_6433(jsxtnm542, jsxtnm543))
                  jsxtnm555 = jsxtnm554
                } // endlet
                // I1CMP:return:jsxtnm555
                return jsxtnm555
              } // endtimp(list_vt_rappend00(2018))
              let jsxtnm557 = XATSCAPP("list_vt_nil", [0])
              let jsxtnm558 = XATSDAPP(jsxtnm556(jsxtnm541, jsxtnm557))
              // I1CMP:return:jsxtnm558
              return jsxtnm558
            } // endtimp(list_vt_reverse0(2015))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7291(line=455,offs=2)--7308(line=455,offs=19))
            // I0Etapq(I0Ecst(strm_vt_rlistize0(2196)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8956(line=462,offs=1)--8973(line=462,offs=18))));$list(T2JAG($list(T2Pvar(x0[8567])))))
            // T1IMPallx(strm_vt_rlistize0(2196);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7321(line=457,offs=1)--7614(line=480,offs=2)))
            // T1IMPallx(strm_vt_rlistize0(2196)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8568],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_rlistize0(2196);$list(@(x0[5487],T2Pvar(x0[8568])))))))
            let jsxtnm573 = function (arg1) { // timp: strm_vt_rlistize0(2196)
              let jsxtnm560 = arg1
              // I1CMP:start
              let jsxtnm572 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7398(line=465,offs=1)--7420(line=465,offs=23)))
                // I1VALDCL
                let jsxtnm562
                let jsxtnm561 = XATSCAPP("list_vt_nil", [0])
                jsxtnm562 = jsxtnm561
                XATS000_patck(true)
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7424(line=467,offs=1)--7612(line=479,offs=35)))
                // I1FUNDCL
                function loop_7427(arg1, arg2)
                { // fun
                  let jsxtnm563 = arg1
                  let jsxtnm564 = arg2
                  // I1CMP:start
                  let jsxtnm565 = XATS000_dl1az(jsxtnm563)
                  let jsxtnm570 // cas
                  do {
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(566);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                    if (XATS000_ctgeq(jsxtnm565, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                      let jsxtnm566 = jsxtnm565
                      jsxtnm570 = jsxtnm564
                      break // cls
                    } // gpt
                    // } // cls
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(567);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4505)),I0Pvar(xs(4506)))));$list(@(x1(4505),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(567));0)),@(xs(4506),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(567));1)))))
                    if (XATS000_ctgeq(jsxtnm565, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                      let jsxtnm567 = jsxtnm565
                      let jsxtnm568 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm567[0+1]), jsxtnm564])
                      let jsxtnm569 = XATSDAPP(loop_7427(XATSP1CN("strmcon_vt_cons", jsxtnm567[1+1]), jsxtnm568))
                      jsxtnm570 = jsxtnm569
                      break // cls
                    } // gpt
                    // } // cls
                    XATS000_cfail()
                  } while (false) // end-of(do)
                  // I1CMP:return:jsxtnm570
                  return jsxtnm570
                } // endfun(loop_7427)
                let jsxtnm571 = XATSDAPP(loop_7427(jsxtnm560, jsxtnm562))
                jsxtnm572 = jsxtnm571
              } // endlet
              // I1CMP:return:jsxtnm572
              return jsxtnm572
            } // endtimp(strm_vt_rlistize0(2196))
            let jsxtnm574 = XATSDAPP(jsxtnm573(jsxtnm540))
            let jsxtnm575 = XATSDAPP(jsxtnm559(jsxtnm574))
            // I1CMP:return:jsxtnm575
            return jsxtnm575
          } // endtimp(strm_vt_listize0(2194))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14746(line=1016,offs=1)--14760(line=1016,offs=15))
          // I0Etapq(I0Ecst(gseq_map_lstrm(426)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(12714(line=737,offs=1)--12728(line=737,offs=15))));$list(T2JAG($list(T2Pvar(xs[6110]))),T2JAG($list(T2Pvar(x0[6111]))),T2JAG($list(T2Pvar(y0[6112])))))
          // T1IMPallx(gseq_map_lstrm(426);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15009(line=1034,offs=1)--15178(line=1046,offs=2)))
          // T1IMPallx(gseq_map_lstrm(426)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6116],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6117],T2Pcst(expr)),@(y0[6118],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_lstrm(426);$list(@(xs[1287],T2Pvar(xs[6116])),@(x0[1288],T2Pvar(x0[6117])),@(y0[1289],T2Pvar(y0[6118])))))))
          let jsxtnm612 = function (arg1) { // timp: gseq_map_lstrm(426)
            let jsxtnm577 = arg1
            // I1CMP:start
            let jsxtnm611 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15131(line=1044,offs=1)--15176(line=1045,offs=37)))
              // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pvar(x0[6117])),@(y0[3807],T2Pvar(y0[6118]))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15074(line=1040,offs=1)--15086(line=1040,offs=13))
              // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Pvar(x0[6117]))),T2JAG($list(T2Pvar(y0[6118])))))
              // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
              // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8550],T2Pcst(expr)),@(y0[8551],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8550])),@(y0[5444],T2Pvar(y0[8551])))))))
              let jsxtnm595 = function (arg1) { // timp: strm_vt_map0(2174)
                let jsxtnm578 = arg1
                // I1CMP:start
                let jsxtnm594 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
                  // I1FUNDCL
                  function auxmain_4114(arg1)
                  { // fun
                    let jsxtnm579 = arg1
                    // I1CMP:start
                    let jsxtnm592 = XATS000_l1azy(function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm580 = XATS000_dl1az(jsxtnm579)
                      let jsxtnm591 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(581);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm580, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                          let jsxtnm581 = jsxtnm580
                          let jsxtnm582 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm591 = jsxtnm582
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(583);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4467)),I0Pvar(xs(4468)))));$list(@(x1(4467),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(583));0)),@(xs(4468),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(583));1)))))
                        if (XATS000_ctgeq(jsxtnm580, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                          let jsxtnm583 = jsxtnm580
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                          // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8550]))),T2JAG($list(T2Pvar(y0[8551])))))
                          // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15131(line=1044,offs=1)--15176(line=1045,offs=37)))
                          // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6116],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6117],T2Pcst(expr)),@(y0[6118],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pcst(expr)),@(y0[3807],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm587
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15160(line=1045,offs=21)--15168(line=1045,offs=29))
                          // I0Etapq(I0Ecst(map$fopr(75)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(3732(line=232,offs=1)--3740(line=232,offs=9))));$list(T2JAG($list(T2Pvar(x0[6117]))),T2JAG($list(T2Pvar(y0[6118])))))
                          // T1IMPallx(map$fopr(75);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14897(line=1028,offs=1)--14941(line=1029,offs=36)))
                          // T1IMPallx(map$fopr(75)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6113],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6114],T2Pcst(expr)),@(y0[6115],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pcst(expr)),@(y0[484],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm586 = function (arg1) { // timp: map$fopr(75)
                            let jsxtnm584 = arg1
                            // I1CMP:start
                            let jsxtnm585 = XATSDAPP(jsxtnm536(jsxtnm584))
                            // I1CMP:return:jsxtnm585
                            return jsxtnm585
                          } // endtimp(map$fopr(75))
                          jsxtnm587 = jsxtnm586
                          let jsxtnm588 = XATSDAPP(jsxtnm587(XATSP1CN("strmcon_vt_cons", jsxtnm583[0+1])))
                          let jsxtnm589 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm583[1+1])))
                          let jsxtnm590 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm588, jsxtnm589])
                          jsxtnm591 = jsxtnm590
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm591
                      return jsxtnm591
                    }) // endfun(l1azy)
                    // I1CMP:return:jsxtnm592
                    return jsxtnm592
                  } // endfun(auxmain_4114)
                  let jsxtnm593 = XATSDAPP(auxmain_4114(jsxtnm578))
                  jsxtnm594 = jsxtnm593
                } // endlet
                // I1CMP:return:jsxtnm594
                return jsxtnm594
              } // endtimp(strm_vt_map0(2174))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(15097(line=1042,offs=1)--15109(line=1042,offs=13))
              // I0Etapq(I0Ecst(gseq_strmize(372)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(2503(line=122,offs=1)--2515(line=122,offs=13))));$list(T2JAG($list(T2Pvar(xs[6116]))),T2JAG($list(T2Pvar(x0[6117])))))
              // T1IMPallx(gseq_strmize(372);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6711(line=443,offs=1)--6775(line=445,offs=46)))
              // T1IMPallx(gseq_strmize(372)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7407],T2Pcst(expr)),@(x0[7407],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_strmize(372);$list(@(xs[1109],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7407])))),@(x0[1110],T2Pvar(x0[7407])))))))
              let jsxtnm608
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6759(line=445,offs=30)--6771(line=445,offs=42))
              // I0Etapq(I0Ecst(list_strmize(1202)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(1677(line=61,offs=1)--1689(line=61,offs=13))));$list(T2JAG($list(T2Pvar(x0[7407])))))
              // T1IMPallx(list_strmize(1202);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6452(line=418,offs=1)--6671(line=441,offs=2)))
              // T1IMPallx(list_strmize(1202)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7406],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_strmize(1202);$list(@(a[3366],T2Pvar(x0[7406])))))))
              let jsxtnm607 = function (arg1) { // timp: list_strmize(1202)
                let jsxtnm596 = arg1
                // I1CMP:start
                let jsxtnm606 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6526(line=427,offs=1)--6666(line=439,offs=2)))
                  // I1FUNDCL
                  function auxmain_6529(arg1)
                  { // fun
                    let jsxtnm597 = arg1
                    // I1CMP:start
                    let jsxtnm604 = XATS000_l1azy(function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm603 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(598);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                        if (XATS000_ctgeq(jsxtnm597, XATSCTAG("list_nil",0))) { // gpt
                          let jsxtnm598 = jsxtnm597
                          let jsxtnm599 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm603 = jsxtnm599
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(600);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2601)),I0Pvar(xs(2602))));$list(@(x0(2601),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(600));0)),@(xs(2602),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(600));1)))))
                        if (XATS000_ctgeq(jsxtnm597, XATSCTAG("list_cons",1))) { // gpt
                          let jsxtnm600 = jsxtnm597
                          let jsxtnm601 = XATSDAPP(auxmain_6529(XATSP1CN("list_cons", jsxtnm600[1+1])))
                          let jsxtnm602 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("list_cons", jsxtnm600[0+1]), jsxtnm601])
                          jsxtnm603 = jsxtnm602
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm603
                      return jsxtnm603
                    }) // endfun(l1azy)
                    // I1CMP:return:jsxtnm604
                    return jsxtnm604
                  } // endfun(auxmain_6529)
                  let jsxtnm605 = XATSDAPP(auxmain_6529(jsxtnm596))
                  jsxtnm606 = jsxtnm605
                } // endlet
                // I1CMP:return:jsxtnm606
                return jsxtnm606
              } // endtimp(list_strmize(1202))
              jsxtnm608 = jsxtnm607
              let jsxtnm609 = XATSDAPP(jsxtnm608(jsxtnm577))
              let jsxtnm610 = XATSDAPP(jsxtnm595(jsxtnm609))
              jsxtnm611 = jsxtnm610
            } // endlet
            // I1CMP:return:jsxtnm611
            return jsxtnm611
          } // endtimp(gseq_map_lstrm(426))
          let jsxtnm613 = XATSDAPP(jsxtnm612(jsxtnm539))
          let jsxtnm614 = XATSDAPP(jsxtnm576(jsxtnm613))
          // I1CMP:return:jsxtnm614
          return jsxtnm614
        } // endtimp(gseq_map_llist(425))
        let jsxtnm616 = XATSDAPP(jsxtnm615(jsxtnm535))
        jsxtnm617 = jsxtnm616
      } // endlet
      // I1CMP:return:jsxtnm617
      return jsxtnm617
    } // endtimp(gseq_map$f1un_llist(429))
    let jsxtnm619 = XATSDAPP(jsxtnm618(jsxtnm533, jsxtnm534))
    let jsxtnm620 = XATSCAST("list_vt2t_17651", [jsxtnm619])
    // I1CMP:return:jsxtnm620
    return jsxtnm620
  } // endtimp(gseq_map$f1un_list(428))
  jsxtnm622 = jsxtnm621
  let jsxtnm625 = function (arg1) { // lam0(T_LAM(0))
    let jsxtnm623 = arg1
    // I1CMP:start
    let jsxtnm624 = XATSDAPP(expr_aops$exprlst_4719(jsxtnm623, jsxtnm483))
    // I1CMP:return:jsxtnm624
    return jsxtnm624
  } // endfun(lam0)
  let jsxtnm626 = XATSDAPP(jsxtnm622(jsxtnm482, jsxtnm625))
  let jsxtnm627 = XATSDAPP(jsxtnm532(jsxtnm626))
  // I1CMP:return:jsxtnm627
  return jsxtnm627
} // endfun(exprlst_aops$exprlst_5073)
// LCSRCsome1(Game-of-24.dats)@(5205(line=287,offs=1)--5252(line=287,offs=48))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();aops;D2PTMsome(1000;D2ITMvar(exprlst_aops$exprlst(5264)))))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(5473(line=300,offs=1)--5547(line=303,offs=22)))
// I1FUNDCL
function sint2_combine_5476(arg1, arg2)
{ // fun
  let jsxtnm628 = arg1
  let jsxtnm629 = arg2
  // I1CMP:start
  let jsxtnm630 = XATSCAPP("Int", [0, jsxtnm628])
  let jsxtnm631 = XATSCAPP("Int", [0, jsxtnm629])
  let jsxtnm632 = XATSDAPP(expr_aops$expr_3905(jsxtnm630, jsxtnm631))
  // I1CMP:return:jsxtnm632
  return jsxtnm632
} // endfun(sint2_combine_5476)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(5548(line=304,offs=1)--5730(line=311,offs=37)))
// I1FUNDCL
function sint3_combine_5551(arg1, arg2, arg3)
{ // fun
  let jsxtnm633 = arg1
  let jsxtnm634 = arg2
  let jsxtnm635 = arg3
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(5611(line=308,offs=1)--5618(line=308,offs=8))
  // I0Etapq(I0Ecst(gs_append_a3(821)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(15398(line=1012,offs=1)--15410(line=1012,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(gs_append_a3(821);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(28276(line=1734,offs=1)--28393(line=1744,offs=4)))
  // T1IMPallx(gs_append_a3(821)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7051],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_append_a3(821);$list(@(x0[2589],T2Pvar(xs[7051])))))))
  let jsxtnm666 = function (arg1, arg2, arg3) { // timp: gs_append_a3(821)
    let jsxtnm636 = arg1
    let jsxtnm637 = arg2
    let jsxtnm638 = arg3
    // I1CMP:start
    let jsxtnm665 // let
    { // let
      // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(28327(line=1739,offs=1)--28360(line=1741,offs=19)))
      // I1FUNDCL
      function f0_28330(arg1, arg2)
      { // fun
        let jsxtnm639 = arg1
        let jsxtnm640 = arg2
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(28342(line=1741,offs=1)--28350(line=1741,offs=9))
        // I0Etapq(I0Ecst(g_append(355)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq000.sats)@(3870(line=253,offs=1)--3878(line=253,offs=9))));$list(T2JAG($list(T2Pvar(xs[7051])))))
        // T1IMPallx(g_append(355);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4718(line=299,offs=1)--4790(line=303,offs=26)))
        // T1IMPallx(g_append(355)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7328],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(g_append(355);$list(@(xs[1073],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7328])))))))))
        let jsxtnm661
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4765(line=303,offs=1)--4776(line=303,offs=12))
        // I0Etapq(I0Ecst(gseq_append(357)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq000.sats)@(4148(line=276,offs=1)--4159(line=276,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7328]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[7328]))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7328]),T2Pnone0()))))))
        // T1IMPallx(gseq_append(357);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4802(line=305,offs=1)--4865(line=308,offs=33)))
        // T1IMPallx(gseq_append(357)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7329],T2Pcst(expr)),@(x0[7329],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_append(357);$list(@(xs[1075],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7329])))),@(x0[1076],T2Pvar(x0[7329])),@(ys[1077],T2Pxtv([T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7329]),T2Pnone0()))])))))))
        let jsxtnm660
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4850(line=308,offs=18)--4861(line=308,offs=29))
        // I0Etapq(I0Ecst(list_append(1179)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(3814(line=230,offs=1)--3825(line=230,offs=12))));$list(T2JAG($list(T2Pvar(x0[7329])))))
        // T1IMPallx(list_append(1179);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5034(line=323,offs=1)--5414(line=353,offs=4)))
        // T1IMPallx(list_append(1179)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7331],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_append(1179);$list(@(a[3323],T2Pvar(a[7331])))))))
        let jsxtnm659 = function (arg1, arg2) { // timp: list_append(1179)
          let jsxtnm641 = arg1
          let jsxtnm642 = arg2
          // I1CMP:start
          let jsxtnm658 // let
          { // let
            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5087(line=328,offs=1)--5356(line=348,offs=2)))
            // I1FUNDCL
            function loop_5090(arg1, arg2)
            { // fun
              let jsxtnm643 = arg1
              let jsxtnm644 = arg2
              // I1CMP:start
              let jsxtnm653 // cas
              do {
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(645);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                if (XATS000_ctgeq(jsxtnm643, XATSCTAG("list_nil",0))) { // gpt
                  let jsxtnm645 = jsxtnm643
                  XATS000_assgn(XATSADDR(jsxtnm644), jsxtnm642)
                  jsxtnm653 = []
                  break // cls
                } // gpt
                // } // cls
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(646);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2498)),I0Pvar(xs(2499))));$list(@(x0(2498),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(646));0)),@(xs(2499),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(646));1)))))
                if (XATS000_ctgeq(jsxtnm643, XATSCTAG("list_cons",1))) { // gpt
                  let jsxtnm646 = jsxtnm643
                  let jsxtnm652 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5247(line=342,offs=5)--5282(line=343,offs=27)))
                    // I1VALDCL
                    let jsxtnm648
                    let jsxtnm647 = XATSCAPP("list_cons", [1, XATSP1CN("list_cons", jsxtnm646[0+1]), XATSTOP0])
                    XATS000_assgn(XATSADDR(jsxtnm644), jsxtnm647)
                    jsxtnm648 = []
                    XATS000_patck(true)
                    let jsxtnm649 = XATSFLAT(jsxtnm644)
                    let jsxtnm650 = XATSDAPP(loop_5090(XATSP1CN("list_cons", jsxtnm646[1+1]), XATSLPCN(1, jsxtnm649)))
                    let jsxtnm651 = XATSFLAT(jsxtnm644)
                    XATS000_fold(jsxtnm651)
                    jsxtnm652 = []
                  } // endlet
                  jsxtnm653 = jsxtnm652
                  break // cls
                } // gpt
                // } // cls
                XATS000_cfail()
              } while (false) // end-of(do)
              // I1CMP:return:jsxtnm653
              return jsxtnm653
            } // endfun(loop_5090)
            let jsxtnm657 // let
            { // let
              // I1Dvardclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5364(line=351,offs=1)--5379(line=351,offs=16)))
              // I1VARDCL
              let jsxtnm654 = XATSVAR0()
              let jsxtnm655 = XATSDAPP(loop_5090(jsxtnm641, XATSADDR(jsxtnm654)))
              let jsxtnm656 = XATSFLAT(jsxtnm654)
              jsxtnm657 = jsxtnm656
            } // endlet
            jsxtnm658 = jsxtnm657
          } // endlet
          // I1CMP:return:jsxtnm658
          return jsxtnm658
        } // endtimp(list_append(1179))
        jsxtnm660 = jsxtnm659
        jsxtnm661 = jsxtnm660
        let jsxtnm662 = XATSDAPP(jsxtnm661(jsxtnm639, jsxtnm640))
        // I1CMP:return:jsxtnm662
        return jsxtnm662
      } // endfun(f0_28330)
      let jsxtnm663 = XATSDAPP(f0_28330(jsxtnm636, jsxtnm637))
      let jsxtnm664 = XATSDAPP(f0_28330(jsxtnm663, jsxtnm638))
      jsxtnm665 = jsxtnm664
    } // endlet
    // I1CMP:return:jsxtnm665
    return jsxtnm665
  } // endtimp(gs_append_a3(821))
  let jsxtnm667 = XATSCAPP("Int", [0, jsxtnm633])
  let jsxtnm668 = XATSDAPP(sint2_combine_5476(jsxtnm634, jsxtnm635))
  let jsxtnm669 = XATSDAPP(expr_aops$exprlst_4719(jsxtnm667, jsxtnm668))
  let jsxtnm670 = XATSCAPP("Int", [0, jsxtnm634])
  let jsxtnm671 = XATSDAPP(sint2_combine_5476(jsxtnm633, jsxtnm635))
  let jsxtnm672 = XATSDAPP(expr_aops$exprlst_4719(jsxtnm670, jsxtnm671))
  let jsxtnm673 = XATSCAPP("Int", [0, jsxtnm635])
  let jsxtnm674 = XATSDAPP(sint2_combine_5476(jsxtnm633, jsxtnm634))
  let jsxtnm675 = XATSDAPP(expr_aops$exprlst_4719(jsxtnm673, jsxtnm674))
  let jsxtnm676 = XATSDAPP(jsxtnm666(jsxtnm669, jsxtnm672, jsxtnm675))
  // I1CMP:return:jsxtnm676
  return jsxtnm676
} // endfun(sint3_combine_5551)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(5731(line=312,offs=1)--6131(line=323,offs=51)))
// I1FUNDCL
function sint4_combine_5734(arg1, arg2, arg3, arg4)
{ // fun
  let jsxtnm677 = arg1
  let jsxtnm678 = arg2
  let jsxtnm679 = arg3
  let jsxtnm680 = arg4
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(5806(line=316,offs=1)--5813(line=316,offs=8))
  // I0Etapq(I0Ecst(gs_append_a7(825)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(15586(line=1024,offs=1)--15598(line=1024,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(gs_append_a7(825);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(28936(line=1778,offs=1)--29093(line=1788,offs=4)))
  // T1IMPallx(gs_append_a7(825)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7055],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_append_a7(825);$list(@(x0[2593],T2Pvar(xs[7055])))))))
  let jsxtnm719 = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) { // timp: gs_append_a7(825)
    let jsxtnm681 = arg1
    let jsxtnm682 = arg2
    let jsxtnm683 = arg3
    let jsxtnm684 = arg4
    let jsxtnm685 = arg5
    let jsxtnm686 = arg6
    let jsxtnm687 = arg7
    // I1CMP:start
    let jsxtnm718 // let
    { // let
      // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(29003(line=1783,offs=1)--29036(line=1785,offs=19)))
      // I1FUNDCL
      function f0_29006(arg1, arg2)
      { // fun
        let jsxtnm688 = arg1
        let jsxtnm689 = arg2
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(29018(line=1785,offs=1)--29026(line=1785,offs=9))
        // I0Etapq(I0Ecst(g_append(355)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq000.sats)@(3870(line=253,offs=1)--3878(line=253,offs=9))));$list(T2JAG($list(T2Pvar(xs[7055])))))
        // T1IMPallx(g_append(355);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4718(line=299,offs=1)--4790(line=303,offs=26)))
        // T1IMPallx(g_append(355)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7328],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(g_append(355);$list(@(xs[1073],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7328])))))))))
        let jsxtnm710
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4765(line=303,offs=1)--4776(line=303,offs=12))
        // I0Etapq(I0Ecst(gseq_append(357)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq000.sats)@(4148(line=276,offs=1)--4159(line=276,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7328]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[7328]))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7328]),T2Pnone0()))))))
        // T1IMPallx(gseq_append(357);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4802(line=305,offs=1)--4865(line=308,offs=33)))
        // T1IMPallx(gseq_append(357)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7329],T2Pcst(expr)),@(x0[7329],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_append(357);$list(@(xs[1075],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7329])))),@(x0[1076],T2Pvar(x0[7329])),@(ys[1077],T2Pxtv([T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7329]),T2Pnone0()))])))))))
        let jsxtnm709
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4850(line=308,offs=18)--4861(line=308,offs=29))
        // I0Etapq(I0Ecst(list_append(1179)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(3814(line=230,offs=1)--3825(line=230,offs=12))));$list(T2JAG($list(T2Pvar(x0[7329])))))
        // T1IMPallx(list_append(1179);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5034(line=323,offs=1)--5414(line=353,offs=4)))
        // T1IMPallx(list_append(1179)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7331],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_append(1179);$list(@(a[3323],T2Pvar(a[7331])))))))
        let jsxtnm708 = function (arg1, arg2) { // timp: list_append(1179)
          let jsxtnm690 = arg1
          let jsxtnm691 = arg2
          // I1CMP:start
          let jsxtnm707 // let
          { // let
            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5087(line=328,offs=1)--5356(line=348,offs=2)))
            // I1FUNDCL
            function loop_5090(arg1, arg2)
            { // fun
              let jsxtnm692 = arg1
              let jsxtnm693 = arg2
              // I1CMP:start
              let jsxtnm702 // cas
              do {
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(694);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                if (XATS000_ctgeq(jsxtnm692, XATSCTAG("list_nil",0))) { // gpt
                  let jsxtnm694 = jsxtnm692
                  XATS000_assgn(XATSADDR(jsxtnm693), jsxtnm691)
                  jsxtnm702 = []
                  break // cls
                } // gpt
                // } // cls
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(695);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2498)),I0Pvar(xs(2499))));$list(@(x0(2498),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(695));0)),@(xs(2499),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(695));1)))))
                if (XATS000_ctgeq(jsxtnm692, XATSCTAG("list_cons",1))) { // gpt
                  let jsxtnm695 = jsxtnm692
                  let jsxtnm701 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5247(line=342,offs=5)--5282(line=343,offs=27)))
                    // I1VALDCL
                    let jsxtnm697
                    let jsxtnm696 = XATSCAPP("list_cons", [1, XATSP1CN("list_cons", jsxtnm695[0+1]), XATSTOP0])
                    XATS000_assgn(XATSADDR(jsxtnm693), jsxtnm696)
                    jsxtnm697 = []
                    XATS000_patck(true)
                    let jsxtnm698 = XATSFLAT(jsxtnm693)
                    let jsxtnm699 = XATSDAPP(loop_5090(XATSP1CN("list_cons", jsxtnm695[1+1]), XATSLPCN(1, jsxtnm698)))
                    let jsxtnm700 = XATSFLAT(jsxtnm693)
                    XATS000_fold(jsxtnm700)
                    jsxtnm701 = []
                  } // endlet
                  jsxtnm702 = jsxtnm701
                  break // cls
                } // gpt
                // } // cls
                XATS000_cfail()
              } while (false) // end-of(do)
              // I1CMP:return:jsxtnm702
              return jsxtnm702
            } // endfun(loop_5090)
            let jsxtnm706 // let
            { // let
              // I1Dvardclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5364(line=351,offs=1)--5379(line=351,offs=16)))
              // I1VARDCL
              let jsxtnm703 = XATSVAR0()
              let jsxtnm704 = XATSDAPP(loop_5090(jsxtnm690, XATSADDR(jsxtnm703)))
              let jsxtnm705 = XATSFLAT(jsxtnm703)
              jsxtnm706 = jsxtnm705
            } // endlet
            jsxtnm707 = jsxtnm706
          } // endlet
          // I1CMP:return:jsxtnm707
          return jsxtnm707
        } // endtimp(list_append(1179))
        jsxtnm709 = jsxtnm708
        jsxtnm710 = jsxtnm709
        let jsxtnm711 = XATSDAPP(jsxtnm710(jsxtnm688, jsxtnm689))
        // I1CMP:return:jsxtnm711
        return jsxtnm711
      } // endfun(f0_29006)
      let jsxtnm712 = XATSDAPP(f0_29006(jsxtnm681, jsxtnm682))
      let jsxtnm713 = XATSDAPP(f0_29006(jsxtnm712, jsxtnm683))
      let jsxtnm714 = XATSDAPP(f0_29006(jsxtnm713, jsxtnm684))
      let jsxtnm715 = XATSDAPP(f0_29006(jsxtnm714, jsxtnm685))
      let jsxtnm716 = XATSDAPP(f0_29006(jsxtnm715, jsxtnm686))
      let jsxtnm717 = XATSDAPP(f0_29006(jsxtnm716, jsxtnm687))
      jsxtnm718 = jsxtnm717
    } // endlet
    // I1CMP:return:jsxtnm718
    return jsxtnm718
  } // endtimp(gs_append_a7(825))
  let jsxtnm720 = XATSCAPP("Int", [0, jsxtnm677])
  let jsxtnm721 = XATSDAPP(sint3_combine_5551(jsxtnm678, jsxtnm679, jsxtnm680))
  let jsxtnm722 = XATSDAPP(expr_aops$exprlst_4719(jsxtnm720, jsxtnm721))
  let jsxtnm723 = XATSCAPP("Int", [0, jsxtnm678])
  let jsxtnm724 = XATSDAPP(sint3_combine_5551(jsxtnm677, jsxtnm679, jsxtnm680))
  let jsxtnm725 = XATSDAPP(expr_aops$exprlst_4719(jsxtnm723, jsxtnm724))
  let jsxtnm726 = XATSCAPP("Int", [0, jsxtnm679])
  let jsxtnm727 = XATSDAPP(sint3_combine_5551(jsxtnm677, jsxtnm678, jsxtnm680))
  let jsxtnm728 = XATSDAPP(expr_aops$exprlst_4719(jsxtnm726, jsxtnm727))
  let jsxtnm729 = XATSCAPP("Int", [0, jsxtnm680])
  let jsxtnm730 = XATSDAPP(sint3_combine_5551(jsxtnm677, jsxtnm678, jsxtnm679))
  let jsxtnm731 = XATSDAPP(expr_aops$exprlst_4719(jsxtnm729, jsxtnm730))
  let jsxtnm732 = XATSDAPP(sint2_combine_5476(jsxtnm677, jsxtnm678))
  let jsxtnm733 = XATSDAPP(sint2_combine_5476(jsxtnm679, jsxtnm680))
  let jsxtnm734 = XATSDAPP(exprlst_aops$exprlst_5073(jsxtnm732, jsxtnm733))
  let jsxtnm735 = XATSDAPP(sint2_combine_5476(jsxtnm677, jsxtnm679))
  let jsxtnm736 = XATSDAPP(sint2_combine_5476(jsxtnm678, jsxtnm680))
  let jsxtnm737 = XATSDAPP(exprlst_aops$exprlst_5073(jsxtnm735, jsxtnm736))
  let jsxtnm738 = XATSDAPP(sint2_combine_5476(jsxtnm677, jsxtnm680))
  let jsxtnm739 = XATSDAPP(sint2_combine_5476(jsxtnm678, jsxtnm679))
  let jsxtnm740 = XATSDAPP(exprlst_aops$exprlst_5073(jsxtnm738, jsxtnm739))
  let jsxtnm741 = XATSDAPP(jsxtnm719(jsxtnm722, jsxtnm725, jsxtnm728, jsxtnm731, jsxtnm734, jsxtnm737, jsxtnm740))
  // I1CMP:return:jsxtnm741
  return jsxtnm741
} // endfun(sint4_combine_5734)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(6301(line=335,offs=1)--6443(line=340,offs=45)))
// I1FUNDCL
function GameOf24_solve_6304(arg1, arg2, arg3, arg4)
{ // fun
  let jsxtnm742 = arg1
  let jsxtnm743 = arg2
  let jsxtnm744 = arg3
  let jsxtnm745 = arg4
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(6377(line=339,offs=1)--6398(line=339,offs=22))
  // I0Etapq(I0Ecst(gseq_filter$f1un_list(483)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(20887(line=1296,offs=1)--20908(line=1296,offs=22))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr)))))
  // T1IMPallx(gseq_filter$f1un_list(483);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22593(line=1609,offs=1)--22716(line=1616,offs=42)))
  // T1IMPallx(gseq_filter$f1un_list(483)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[6249],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6250],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_filter$f1un_list(483);$list(@(xs[1471],T2Pvar(xs[6249])),@(x0[1472],T2Pvar(x0[6250])))))))
  let jsxtnm827 = function (arg1, arg2) { // timp: gseq_filter$f1un_list(483)
    let jsxtnm746 = arg1
    let jsxtnm747 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22675(line=1616,offs=1)--22697(line=1616,offs=23))
    // I0Etapq(I0Ecst(gseq_filter$f1un_llist(484)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(20966(line=1301,offs=1)--20988(line=1301,offs=23))));$list(T2JAG($list(T2Pvar(xs[6249]))),T2JAG($list(T2Pvar(x0[6250])))))
    // T1IMPallx(gseq_filter$f1un_llist(484);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22858(line=1629,offs=1)--23012(line=1640,offs=2)))
    // T1IMPallx(gseq_filter$f1un_llist(484)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[6253],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6254],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_filter$f1un_llist(484);$list(@(xs[1473],T2Pvar(xs[6253])),@(x0[1474],T2Pvar(x0[6254])))))))
    let jsxtnm824 = function (arg1, arg2) { // timp: gseq_filter$f1un_llist(484)
      let jsxtnm748 = arg1
      let jsxtnm749 = arg2
      // I1CMP:start
      let jsxtnm823 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22967(line=1638,offs=1)--23004(line=1639,offs=29)))
        // I1Dimplmnt0(DIMPLone2(filter$test(71);$list(@(x0[479],T2Pvar(x0[6254]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22927(line=1635,offs=1)--22944(line=1635,offs=18))
        // I0Etapq(I0Ecst(gseq_filter_llist(480)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(20704(line=1282,offs=1)--20721(line=1282,offs=18))));$list(T2JAG($list(T2Pvar(xs[6253]))),T2JAG($list(T2Pvar(x0[6254])))))
        // T1IMPallx(gseq_filter_llist(480);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22743(line=1620,offs=1)--22854(line=1627,offs=31)))
        // T1IMPallx(gseq_filter_llist(480)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[6251],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6252],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_filter_llist(480);$list(@(xs[1465],T2Pvar(xs[6251])),@(x0[1466],T2Pvar(x0[6252])))))))
        let jsxtnm821 = function (arg1) { // timp: gseq_filter_llist(480)
          let jsxtnm750 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22801(line=1625,offs=1)--22817(line=1625,offs=17))
          // I0Etapq(I0Ecst(strm_vt_listize0(2194)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8819(line=452,offs=1)--8835(line=452,offs=17))));$list(T2JAG($list(T2Pvar(x0[6252])))))
          // T1IMPallx(strm_vt_listize0(2194);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7222(line=450,offs=1)--7317(line=455,offs=28)))
          // T1IMPallx(strm_vt_listize0(2194)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[8567],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(strm_vt_listize0(2194);$list(@(x0[5484],T2Pvar(x0[8567])))))))
          let jsxtnm787 = function (arg1) { // timp: strm_vt_listize0(2194)
            let jsxtnm751 = arg1
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7269(line=454,offs=1)--7285(line=454,offs=17))
            // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(x0[8567])))))
            // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
            // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[8401],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8401])))))))
            let jsxtnm770 = function (arg1) { // timp: list_vt_reverse0(2015)
              let jsxtnm752 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
              // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8401])))))
              // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
              // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[8398],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8398])))))))
              let jsxtnm767 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                let jsxtnm753 = arg1
                let jsxtnm754 = arg2
                // I1CMP:start
                let jsxtnm766 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                  // I1FUNDCL
                  function loop_6433(arg1, arg2)
                  { // fun
                    let jsxtnm755 = arg1
                    let jsxtnm756 = arg2
                    // I1CMP:start
                    let jsxtnm764 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(757);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm755, XATSCTAG("list_vt_nil",0))) { // gpt
                        let jsxtnm757 = jsxtnm755
                        jsxtnm764 = jsxtnm756
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(758);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                      if (XATS000_ctgeq(jsxtnm755, XATSCTAG("list_vt_cons",1))) { // gpt
                        let jsxtnm758 = jsxtnm755
                        let jsxtnm763 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                          // I1VALDCL
                          let jsxtnm760
                          let jsxtnm759 = XATSPCON(jsxtnm755,1)
                          jsxtnm760 = jsxtnm759
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                          // I1VALDCL
                          let jsxtnm761
                          XATS000_assgn(XATSLPCN(1, jsxtnm755), jsxtnm756)
                          jsxtnm761 = []
                          XATS000_patck(true)
                          XATS000_fold(jsxtnm755)
                          let jsxtnm762 = XATSDAPP(loop_6433(jsxtnm760, jsxtnm755))
                          jsxtnm763 = jsxtnm762
                        } // endlet
                        jsxtnm764 = jsxtnm763
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm764
                    return jsxtnm764
                  } // endfun(loop_6433)
                  let jsxtnm765 = XATSDAPP(loop_6433(jsxtnm753, jsxtnm754))
                  jsxtnm766 = jsxtnm765
                } // endlet
                // I1CMP:return:jsxtnm766
                return jsxtnm766
              } // endtimp(list_vt_rappend00(2018))
              let jsxtnm768 = XATSCAPP("list_vt_nil", [0])
              let jsxtnm769 = XATSDAPP(jsxtnm767(jsxtnm752, jsxtnm768))
              // I1CMP:return:jsxtnm769
              return jsxtnm769
            } // endtimp(list_vt_reverse0(2015))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7291(line=455,offs=2)--7308(line=455,offs=19))
            // I0Etapq(I0Ecst(strm_vt_rlistize0(2196)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(8956(line=462,offs=1)--8973(line=462,offs=18))));$list(T2JAG($list(T2Pvar(x0[8567])))))
            // T1IMPallx(strm_vt_rlistize0(2196);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7321(line=457,offs=1)--7614(line=480,offs=2)))
            // T1IMPallx(strm_vt_rlistize0(2196)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[8568],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(strm_vt_rlistize0(2196);$list(@(x0[5487],T2Pvar(x0[8568])))))))
            let jsxtnm784 = function (arg1) { // timp: strm_vt_rlistize0(2196)
              let jsxtnm771 = arg1
              // I1CMP:start
              let jsxtnm783 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7398(line=465,offs=1)--7420(line=465,offs=23)))
                // I1VALDCL
                let jsxtnm773
                let jsxtnm772 = XATSCAPP("list_vt_nil", [0])
                jsxtnm773 = jsxtnm772
                XATS000_patck(true)
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(7424(line=467,offs=1)--7612(line=479,offs=35)))
                // I1FUNDCL
                function loop_7427(arg1, arg2)
                { // fun
                  let jsxtnm774 = arg1
                  let jsxtnm775 = arg2
                  // I1CMP:start
                  let jsxtnm776 = XATS000_dl1az(jsxtnm774)
                  let jsxtnm781 // cas
                  do {
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(777);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                    if (XATS000_ctgeq(jsxtnm776, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                      let jsxtnm777 = jsxtnm776
                      jsxtnm781 = jsxtnm775
                      break // cls
                    } // gpt
                    // } // cls
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(778);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4505)),I0Pvar(xs(4506)))));$list(@(x1(4505),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(778));0)),@(xs(4506),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(778));1)))))
                    if (XATS000_ctgeq(jsxtnm776, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                      let jsxtnm778 = jsxtnm776
                      let jsxtnm779 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm778[0+1]), jsxtnm775])
                      let jsxtnm780 = XATSDAPP(loop_7427(XATSP1CN("strmcon_vt_cons", jsxtnm778[1+1]), jsxtnm779))
                      jsxtnm781 = jsxtnm780
                      break // cls
                    } // gpt
                    // } // cls
                    XATS000_cfail()
                  } while (false) // end-of(do)
                  // I1CMP:return:jsxtnm781
                  return jsxtnm781
                } // endfun(loop_7427)
                let jsxtnm782 = XATSDAPP(loop_7427(jsxtnm771, jsxtnm773))
                jsxtnm783 = jsxtnm782
              } // endlet
              // I1CMP:return:jsxtnm783
              return jsxtnm783
            } // endtimp(strm_vt_rlistize0(2196))
            let jsxtnm785 = XATSDAPP(jsxtnm784(jsxtnm751))
            let jsxtnm786 = XATSDAPP(jsxtnm770(jsxtnm785))
            // I1CMP:return:jsxtnm786
            return jsxtnm786
          } // endtimp(strm_vt_listize0(2194))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22824(line=1627,offs=1)--22841(line=1627,offs=18))
          // I0Etapq(I0Ecst(gseq_filter_lstrm(481)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(20766(line=1287,offs=1)--20783(line=1287,offs=18))));$list(T2JAG($list(T2Pvar(xs[6251]))),T2JAG($list(T2Pvar(x0[6252])))))
          // T1IMPallx(gseq_filter_lstrm(481);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(23077(line=1644,offs=1)--23238(line=1656,offs=2)))
          // T1IMPallx(gseq_filter_lstrm(481)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[6255],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6256],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_filter_lstrm(481);$list(@(xs[1467],T2Pvar(xs[6255])),@(x0[1468],T2Pvar(x0[6256])))))))
          let jsxtnm818 = function (arg1) { // timp: gseq_filter_lstrm(481)
            let jsxtnm788 = arg1
            // I1CMP:start
            let jsxtnm817 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(23193(line=1654,offs=1)--23236(line=1655,offs=35)))
              // I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Pvar(x0[6256]))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(23135(line=1649,offs=1)--23150(line=1649,offs=16))
              // I0Etapq(I0Ecst(strm_vt_filter0(2182)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(6654(line=333,offs=1)--6669(line=333,offs=16))));$list(T2JAG($list(T2Pvar(x0[6256])))))
              // T1IMPallx(strm_vt_filter0(2182);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(1980(line=78,offs=1)--2183(line=91,offs=4)))
              // T1IMPallx(strm_vt_filter0(2182)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[8825],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(strm_vt_filter0(2182);$list(@(x0[5463],T2Pvar(x0[8825])))))))
              let jsxtnm801 = function (arg1) { // timp: strm_vt_filter0(2182)
                let jsxtnm789 = arg1
                // I1CMP:start
                let jsxtnm800 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2032(line=83,offs=1)--2083(line=86,offs=24)))
                  // I1FUNDCL
                  function test_2035(arg1)
                  { // fun
                    let jsxtnm790 = arg1
                    // I1CMP:start
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2062(line=86,offs=3)--2074(line=86,offs=15))
                    // I0Etapq(I0Ecst(filter$test1(1491)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(6554(line=466,offs=1)--6566(line=466,offs=13))));$list(T2JAG($list(T2Pvar(x0[8825])))))
                    // T1IMPallx(filter$test1(1491);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(23193(line=1654,offs=1)--23236(line=1655,offs=35)))
                    // T1IMPallx(filter$test1(1491)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[6255],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6256],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Pcst(expr)))))))
                    let jsxtnm792
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(23221(line=1655,offs=20)--23232(line=1655,offs=31))
                    // I0Etapq(I0Ecst(filter$test(71)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(3500(line=215,offs=1)--3511(line=215,offs=12))));$list(T2JAG($list(T2Pvar(x0[6256])))))
                    // T1IMPallx(filter$test(71);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22967(line=1638,offs=1)--23004(line=1639,offs=29)))
                    // T1IMPallx(filter$test(71)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[6253],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6254],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(filter$test(71);$list(@(x0[479],T2Pcst(expr)))))))
                    let jsxtnm791
                    jsxtnm791 = jsxtnm749
                    jsxtnm792 = jsxtnm791
                    let jsxtnm793 = XATSDAPP(jsxtnm792(jsxtnm790))
                    // I1CMP:return:jsxtnm793
                    return jsxtnm793
                  } // endfun(test_2035)
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2084(line=87,offs=1)--2124(line=88,offs=37)))
                  // I1FUNDCL
                  function free_2087(arg1)
                  { // fun
                    let jsxtnm794 = arg1
                    // I1CMP:start
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2110(line=88,offs=23)--2116(line=88,offs=29))
                    // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1591(line=56,offs=1)--1597(line=56,offs=7))));$list(T2JAG($list(T2Pvar(x0[8825])))))
                    // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
                    // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[5602],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[418],T2Pvar(x0[5602])))))))
                    let jsxtnm797 = function (arg1) { // timp: g_free(23)
                      let jsxtnm795 = arg1
                      // I1CMP:start
                      let jsxtnm796 = XATSTUP0([])
                      // I1CMP:return:jsxtnm796
                      return jsxtnm796
                    } // endtimp(g_free(23))
                    let jsxtnm798 = XATSDAPP(jsxtnm797(jsxtnm794))
                    // I1CMP:return:jsxtnm798
                    return jsxtnm798
                  } // endfun(free_2087)
                  let jsxtnm799 = XATSDAPP(XATS2JS_strm_vt_filter0$f1un(jsxtnm789, test_2035, free_2087))
                  jsxtnm800 = jsxtnm799
                } // endlet
                // I1CMP:return:jsxtnm800
                return jsxtnm800
              } // endtimp(strm_vt_filter0(2182))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(23159(line=1651,offs=3)--23171(line=1651,offs=15))
              // I0Etapq(I0Ecst(gseq_strmize(372)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(2503(line=122,offs=1)--2515(line=122,offs=13))));$list(T2JAG($list(T2Pvar(xs[6255]))),T2JAG($list(T2Pvar(x0[6256])))))
              // T1IMPallx(gseq_strmize(372);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6711(line=443,offs=1)--6775(line=445,offs=46)))
              // T1IMPallx(gseq_strmize(372)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7407],T2Pcst(expr)),@(x0[7407],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_strmize(372);$list(@(xs[1109],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7407])))),@(x0[1110],T2Pvar(x0[7407])))))))
              let jsxtnm814
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6759(line=445,offs=30)--6771(line=445,offs=42))
              // I0Etapq(I0Ecst(list_strmize(1202)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(1677(line=61,offs=1)--1689(line=61,offs=13))));$list(T2JAG($list(T2Pvar(x0[7407])))))
              // T1IMPallx(list_strmize(1202);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6452(line=418,offs=1)--6671(line=441,offs=2)))
              // T1IMPallx(list_strmize(1202)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7406],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_strmize(1202);$list(@(a[3366],T2Pvar(x0[7406])))))))
              let jsxtnm813 = function (arg1) { // timp: list_strmize(1202)
                let jsxtnm802 = arg1
                // I1CMP:start
                let jsxtnm812 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6526(line=427,offs=1)--6666(line=439,offs=2)))
                  // I1FUNDCL
                  function auxmain_6529(arg1)
                  { // fun
                    let jsxtnm803 = arg1
                    // I1CMP:start
                    let jsxtnm810 = XATS000_l1azy(function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm809 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(804);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                        if (XATS000_ctgeq(jsxtnm803, XATSCTAG("list_nil",0))) { // gpt
                          let jsxtnm804 = jsxtnm803
                          let jsxtnm805 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm809 = jsxtnm805
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(806);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2601)),I0Pvar(xs(2602))));$list(@(x0(2601),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(806));0)),@(xs(2602),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(806));1)))))
                        if (XATS000_ctgeq(jsxtnm803, XATSCTAG("list_cons",1))) { // gpt
                          let jsxtnm806 = jsxtnm803
                          let jsxtnm807 = XATSDAPP(auxmain_6529(XATSP1CN("list_cons", jsxtnm806[1+1])))
                          let jsxtnm808 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("list_cons", jsxtnm806[0+1]), jsxtnm807])
                          jsxtnm809 = jsxtnm808
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm809
                      return jsxtnm809
                    }) // endfun(l1azy)
                    // I1CMP:return:jsxtnm810
                    return jsxtnm810
                  } // endfun(auxmain_6529)
                  let jsxtnm811 = XATSDAPP(auxmain_6529(jsxtnm802))
                  jsxtnm812 = jsxtnm811
                } // endlet
                // I1CMP:return:jsxtnm812
                return jsxtnm812
              } // endtimp(list_strmize(1202))
              jsxtnm814 = jsxtnm813
              let jsxtnm815 = XATSDAPP(jsxtnm814(jsxtnm788))
              let jsxtnm816 = XATSDAPP(jsxtnm801(jsxtnm815))
              jsxtnm817 = jsxtnm816
            } // endlet
            // I1CMP:return:jsxtnm817
            return jsxtnm817
          } // endtimp(gseq_filter_lstrm(481))
          let jsxtnm819 = XATSDAPP(jsxtnm818(jsxtnm750))
          let jsxtnm820 = XATSDAPP(jsxtnm787(jsxtnm819))
          // I1CMP:return:jsxtnm820
          return jsxtnm820
        } // endtimp(gseq_filter_llist(480))
        let jsxtnm822 = XATSDAPP(jsxtnm821(jsxtnm748))
        jsxtnm823 = jsxtnm822
      } // endlet
      // I1CMP:return:jsxtnm823
      return jsxtnm823
    } // endtimp(gseq_filter$f1un_llist(484))
    let jsxtnm825 = XATSDAPP(jsxtnm824(jsxtnm746, jsxtnm747))
    let jsxtnm826 = XATSCAST("list_vt2t_17651", [jsxtnm825])
    // I1CMP:return:jsxtnm826
    return jsxtnm826
  } // endtimp(gseq_filter$f1un_list(483))
  let jsxtnm828 = XATSDAPP(sint4_combine_5734(jsxtnm742, jsxtnm743, jsxtnm744, jsxtnm745))
  let jsxtnm829 = XATSDAPP(jsxtnm827(jsxtnm828, expr_iseq24_3572))
  // I1CMP:return:jsxtnm829
  return jsxtnm829
} // endfun(GameOf24_solve_6304)
// I1Dextern(LCSRCsome1(Game-of-24.dats)@(6823(line=352,offs=1)--6916(line=356,offs=40)))
// LCSRCsome1(Game-of-24.dats)@(6831(line=353,offs=1)--6916(line=356,offs=40))
// I1FUNDCL
// GameOf24_solve$print_6834
  // FJARGdarg($list(I1BNDcons(I1TNM(830);I0Pvar(n1(5286));$list(@(n1(5286),I1Vtnm(I1TNM(830))))),I1BNDcons(I1TNM(831);I0Pvar(n2(5287));$list(@(n2(5287),I1Vtnm(I1TNM(831))))),I1BNDcons(I1TNM(832);I0Pvar(n3(5288));$list(@(n3(5288),I1Vtnm(I1TNM(832))))),I1BNDcons(I1TNM(833);I0Pvar(n4(5289));$list(@(n4(5289),I1Vtnm(I1TNM(833)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(GameOf24_solve$print);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(6920(line=358,offs=1)--7187(line=372,offs=4)))
let GameOf24_solve$print = function (arg1, arg2, arg3, arg4) { // impl
  let jsxtnm834 = arg1
  let jsxtnm835 = arg2
  let jsxtnm836 = arg3
  let jsxtnm837 = arg4
  // I1CMP:start
  let jsxtnm1180 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(6978(line=362,offs=1)--7019(line=362,offs=42)))
    // I1VALDCL
    let jsxtnm839
    let jsxtnm838 = XATSDAPP(GameOf24_solve_6304(jsxtnm834, jsxtnm835, jsxtnm836, jsxtnm837))
    jsxtnm839 = jsxtnm838
    XATS000_patck(true)
    // LCSRCsome1(Game-of-24.dats)@(7040(line=366,offs=1)--7049(line=366,offs=10))
    // I0Etapq(I0Ecst(list_nilq(1162)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(1550(line=55,offs=1)--1559(line=55,offs=10))));$list(T2JAG($list())))
    // T1IMPallx(list_nilq(1162);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(1915(line=80,offs=1)--2019(line=87,offs=28)))
    // T1IMPallx(list_nilq(1162)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(list_nilq(1162);$list()))))
    let jsxtnm844 = function (arg1) { // timp: list_nilq(1162)
      let jsxtnm840 = arg1
      // I1CMP:start
      let jsxtnm843 // cas
      do {
        // { // cls
        // I1GPTpat(I1BNDcons(I1TNM(841);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
        if (XATS000_ctgeq(jsxtnm840, XATSCTAG("list_nil",0))) { // gpt
          let jsxtnm841 = jsxtnm840
          jsxtnm843 = XATSBOOL(true)
          break // cls
        } // gpt
        // } // cls
        // { // cls
        // I1GPTpat(I1BNDcons(I1TNM(842);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pany(),I0Pany()));$list()))
        if (XATS000_ctgeq(jsxtnm840, XATSCTAG("list_cons",1))) { // gpt
          let jsxtnm842 = jsxtnm840
          jsxtnm843 = XATSBOOL(false)
          break // cls
        } // gpt
        // } // cls
        XATS000_cfail()
      } while (false) // end-of(do)
      // I1CMP:return:jsxtnm843
      return jsxtnm843
    } // endtimp(list_nilq(1162))
    let jsxtnm845 = XATSDAPP(jsxtnm844(jsxtnm839))
    let jsxtnm1179 // ift
    if (jsxtnm845) // ift
    {
      // LCSRCsome1(Game-of-24.dats)@(7061(line=367,offs=1)--7068(line=367,offs=8))
      // I0Etapq(I0Ecst(gs_println_a1(810)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(13747(line=892,offs=1)--13760(line=892,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
      // T1IMPallx(gs_println_a1(810);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
      // T1IMPallx(gs_println_a1(810)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6995],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(810);$list(@(x0[2533],T2Pvar(x0[6995])))))))
      let jsxtnm872 = function (arg1) { // timp: gs_println_a1(810)
        let jsxtnm846 = arg1
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
        // I0Etapq(I0Ecst(gs_print_a1(797)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11760(line=745,offs=1)--11771(line=745,offs=12))));$list(T2JAG($list(T2Pvar(x0[6995])))))
        // T1IMPallx(gs_print_a1(797);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
        // T1IMPallx(gs_print_a1(797)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6917],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(797);$list(@(x0[2455],T2Pvar(x0[6917])))))))
        let jsxtnm863 = function (arg1) { // timp: gs_print_a1(797)
          let jsxtnm847 = arg1
          // I1CMP:start
          let jsxtnm862 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
            // I1VALDCL
            let jsxtnm851
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
            // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
            // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
            // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
            let jsxtnm849 = function () { // timp: gs_print$beg(793)
              // I1CMP:start
              let jsxtnm848 = XATSTUP0([])
              // I1CMP:return:jsxtnm848
              return jsxtnm848
            } // endtimp(gs_print$beg(793))
            let jsxtnm850 = XATSDAPP(jsxtnm849())
            jsxtnm851 = jsxtnm850
            XATS000_patck(true)
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
            // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6917])))))
            // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
            // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
            let jsxtnm857
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
            // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
            // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
            let jsxtnm856 = function (arg1) { // timp: strn_print(1029)
              let jsxtnm852 = arg1
              // I1CMP:start
              let jsxtnm855 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                // I1FUNDCL
                // XATS2JS_strn_print_2202
                  // FJARGdarg($list(I1BNDcons(I1TNM(853);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(853)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                let jsxtnm854 = XATSDAPP(XATS2JS_strn_print(jsxtnm852))
                jsxtnm855 = jsxtnm854
              } // endlet
              // I1CMP:return:jsxtnm855
              return jsxtnm855
            } // endtimp(strn_print(1029))
            jsxtnm857 = jsxtnm856
            let jsxtnm858 = XATSDAPP(jsxtnm857(jsxtnm847))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
            // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
            // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
            // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
            let jsxtnm860 = function () { // timp: gs_print$end(795)
              // I1CMP:start
              let jsxtnm859 = XATSTUP0([])
              // I1CMP:return:jsxtnm859
              return jsxtnm859
            } // endtimp(gs_print$end(795))
            let jsxtnm861 = XATSDAPP(jsxtnm860())
            jsxtnm862 = jsxtnm861
          } // endlet
          // I1CMP:return:jsxtnm862
          return jsxtnm862
        } // endtimp(gs_print_a1(797))
        let jsxtnm864 = XATSDAPP(jsxtnm863(jsxtnm846))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
        // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
        // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
        // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
        let jsxtnm870
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
        // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
        // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
        let jsxtnm869 = function (arg1) { // timp: strn_print(1029)
          let jsxtnm865 = arg1
          // I1CMP:start
          let jsxtnm868 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
            // I1FUNDCL
            // XATS2JS_strn_print_2202
              // FJARGdarg($list(I1BNDcons(I1TNM(866);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(866)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
            let jsxtnm867 = XATSDAPP(XATS2JS_strn_print(jsxtnm865))
            jsxtnm868 = jsxtnm867
          } // endlet
          // I1CMP:return:jsxtnm868
          return jsxtnm868
        } // endtimp(strn_print(1029))
        jsxtnm870 = jsxtnm869
        let jsxtnm871 = XATSDAPP(jsxtnm870(XATSSTRN("\n")))
        // I1CMP:return:jsxtnm871
        return jsxtnm871
      } // endtimp(gs_println_a1(810))
      let jsxtnm873 = XATSDAPP(jsxtnm872(XATSSTRN("No solution found!")))
      jsxtnm1179 = jsxtnm873
    } else {
      // LCSRCsome1(Game-of-24.dats)@(7098(line=369,offs=1)--7105(line=369,offs=8))
      // I0Etapq(I0Ecst(gs_println_a1(810)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(13747(line=892,offs=1)--13760(line=892,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
      // T1IMPallx(gs_println_a1(810);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
      // T1IMPallx(gs_println_a1(810)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6995],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(810);$list(@(x0[2533],T2Pvar(x0[6995])))))))
      let jsxtnm900 = function (arg1) { // timp: gs_println_a1(810)
        let jsxtnm874 = arg1
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
        // I0Etapq(I0Ecst(gs_print_a1(797)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11760(line=745,offs=1)--11771(line=745,offs=12))));$list(T2JAG($list(T2Pvar(x0[6995])))))
        // T1IMPallx(gs_print_a1(797);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
        // T1IMPallx(gs_print_a1(797)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6917],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(797);$list(@(x0[2455],T2Pvar(x0[6917])))))))
        let jsxtnm891 = function (arg1) { // timp: gs_print_a1(797)
          let jsxtnm875 = arg1
          // I1CMP:start
          let jsxtnm890 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
            // I1VALDCL
            let jsxtnm879
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
            // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
            // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
            // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
            let jsxtnm877 = function () { // timp: gs_print$beg(793)
              // I1CMP:start
              let jsxtnm876 = XATSTUP0([])
              // I1CMP:return:jsxtnm876
              return jsxtnm876
            } // endtimp(gs_print$beg(793))
            let jsxtnm878 = XATSDAPP(jsxtnm877())
            jsxtnm879 = jsxtnm878
            XATS000_patck(true)
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
            // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6917])))))
            // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
            // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
            let jsxtnm885
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
            // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
            // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
            let jsxtnm884 = function (arg1) { // timp: strn_print(1029)
              let jsxtnm880 = arg1
              // I1CMP:start
              let jsxtnm883 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                // I1FUNDCL
                // XATS2JS_strn_print_2202
                  // FJARGdarg($list(I1BNDcons(I1TNM(881);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(881)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                let jsxtnm882 = XATSDAPP(XATS2JS_strn_print(jsxtnm880))
                jsxtnm883 = jsxtnm882
              } // endlet
              // I1CMP:return:jsxtnm883
              return jsxtnm883
            } // endtimp(strn_print(1029))
            jsxtnm885 = jsxtnm884
            let jsxtnm886 = XATSDAPP(jsxtnm885(jsxtnm875))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
            // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
            // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
            // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
            let jsxtnm888 = function () { // timp: gs_print$end(795)
              // I1CMP:start
              let jsxtnm887 = XATSTUP0([])
              // I1CMP:return:jsxtnm887
              return jsxtnm887
            } // endtimp(gs_print$end(795))
            let jsxtnm889 = XATSDAPP(jsxtnm888())
            jsxtnm890 = jsxtnm889
          } // endlet
          // I1CMP:return:jsxtnm890
          return jsxtnm890
        } // endtimp(gs_print_a1(797))
        let jsxtnm892 = XATSDAPP(jsxtnm891(jsxtnm874))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
        // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
        // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
        // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
        let jsxtnm898
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
        // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
        // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
        let jsxtnm897 = function (arg1) { // timp: strn_print(1029)
          let jsxtnm893 = arg1
          // I1CMP:start
          let jsxtnm896 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
            // I1FUNDCL
            // XATS2JS_strn_print_2202
              // FJARGdarg($list(I1BNDcons(I1TNM(894);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(894)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
            let jsxtnm895 = XATSDAPP(XATS2JS_strn_print(jsxtnm893))
            jsxtnm896 = jsxtnm895
          } // endlet
          // I1CMP:return:jsxtnm896
          return jsxtnm896
        } // endtimp(strn_print(1029))
        jsxtnm898 = jsxtnm897
        let jsxtnm899 = XATSDAPP(jsxtnm898(XATSSTRN("\n")))
        // I1CMP:return:jsxtnm899
        return jsxtnm899
      } // endtimp(gs_println_a1(810))
      let jsxtnm901 = XATSDAPP(jsxtnm900(XATSSTRN("The solutions found:")))
      // LCSRCsome1(Game-of-24.dats)@(7131(line=370,offs=1)--7147(line=370,offs=17))
      // I0Etapq(I0Ecst(list_foritm$f1un(1222)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(4297(line=194,offs=1)--4313(line=194,offs=17))));$list(T2JAG($list(T2Pcst(expr)))))
      // T1IMPallx(list_foritm$f1un(1222);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6022(line=392,offs=1)--6090(line=395,offs=31)))
      // T1IMPallx(list_foritm$f1un(1222)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7402],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_foritm$f1un(1222);$list(@(x0[3388],T2Pvar(x0[7402])))))))
      let jsxtnm926
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6060(line=395,offs=1)--6076(line=395,offs=17))
      // I0Etapq(I0Ecst(gseq_foritm$f1un(400)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(7707(line=443,offs=1)--7723(line=443,offs=17))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7402]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[7402])))))
      // T1IMPallx(gseq_foritm$f1un(400);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6663(line=426,offs=1)--6801(line=435,offs=2)))
      // T1IMPallx(gseq_foritm$f1un(400)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[6030],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6031],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_foritm$f1un(400);$list(@(xs[1207],T2Pvar(xs[6030])),@(x0[1208],T2Pvar(x0[6031])))))))
      let jsxtnm925 = function (arg1, arg2) { // timp: gseq_foritm$f1un(400)
        let jsxtnm902 = arg1
        let jsxtnm903 = arg2
        // I1CMP:start
        let jsxtnm924 // let
        { // let
          // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6760(line=434,offs=1)--6799(line=434,offs=40)))
          // I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[451],T2Pvar(x0[6031]))))):timp
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6726(line=432,offs=1)--6737(line=432,offs=12))
          // I0Etapq(I0Ecst(gseq_foritm(396)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(7078(line=402,offs=1)--7089(line=402,offs=12))));$list(T2JAG($list(T2Pvar(xs[6030]))),T2JAG($list(T2Pvar(x0[6031])))))
          // T1IMPallx(gseq_foritm(396);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4997(line=316,offs=1)--5060(line=319,offs=33)))
          // T1IMPallx(gseq_foritm(396)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7393],T2Pcst(expr)),@(x0[7393],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_foritm(396);$list(@(xs[1191],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7393])))),@(x0[1192],T2Pvar(x0[7393])))))))
          let jsxtnm922
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5045(line=319,offs=18)--5056(line=319,offs=29))
          // I0Etapq(I0Ecst(list_foritm(1218)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(3916(line=174,offs=1)--3927(line=174,offs=12))));$list(T2JAG($list(T2Pvar(x0[7393])))))
          // T1IMPallx(list_foritm(1218);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4774(line=295,offs=1)--4993(line=314,offs=2)))
          // T1IMPallx(list_foritm(1218)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7392],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_foritm(1218);$list(@(x0[3384],T2Pvar(x0[7392])))))))
          let jsxtnm921 = function (arg1) { // timp: list_foritm(1218)
            let jsxtnm906 = arg1
            // I1CMP:start
            let jsxtnm920 // let
            { // let
              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4840(line=302,offs=1)--4991(line=313,offs=37)))
              // I1FUNDCL
              function loop_4843(arg1)
              { // fun
                let jsxtnm907 = arg1
                // I1CMP:start
                let jsxtnm918 // cas
                do {
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(908);I0Pfree(I0Pdapp(I0Pcon(list_nil(8));$list()));$list()))
                  if (XATS000_ctgeq(jsxtnm907, XATSCTAG("list_nil",0))) { // gpt
                    let jsxtnm908 = jsxtnm907
                    let jsxtnm909 = XATSTUP0([])
                    jsxtnm918 = jsxtnm909
                    break // cls
                  } // gpt
                  // } // cls
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(910);I0Pfree(I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x1(2591)),I0Pvar(xs(2592)))));$list(@(x1(2591),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(910));0)),@(xs(2592),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(910));1)))))
                  if (XATS000_ctgeq(jsxtnm907, XATSCTAG("list_cons",1))) { // gpt
                    let jsxtnm910 = jsxtnm907
                    let jsxtnm917 // let
                    { // let
                      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4946(line=312,offs=1)--4974(line=313,offs=20)))
                      // I1VALDCL
                      let jsxtnm915
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4955(line=313,offs=1)--4966(line=313,offs=12))
                      // I0Etapq(I0Ecst(foritm$work(51)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2341(line=124,offs=1)--2352(line=124,offs=12))));$list(T2JAG($list(T2Pvar(x0[7392])))))
                      // T1IMPallx(foritm$work(51);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6760(line=434,offs=1)--6799(line=434,offs=40)))
                      // T1IMPallx(foritm$work(51)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[6030],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[6031],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[451],T2Pcst(expr)))))))
                      let jsxtnm913 = function (arg1) { // timp: foritm$work(51)
                        let jsxtnm911 = arg1
                        // I1CMP:start
                        let jsxtnm912 = XATSDAPP(jsxtnm903(jsxtnm911))
                        // I1CMP:return:jsxtnm912
                        return jsxtnm912
                      } // endtimp(foritm$work(51))
                      let jsxtnm914 = XATSDAPP(jsxtnm913(XATSP1CN("list_cons", jsxtnm910[0+1])))
                      jsxtnm915 = jsxtnm914
                      XATS000_patck(true)
                      let jsxtnm916 = XATSDAPP(loop_4843(XATSP1CN("list_cons", jsxtnm910[1+1])))
                      jsxtnm917 = jsxtnm916
                    } // endlet
                    jsxtnm918 = jsxtnm917
                    break // cls
                  } // gpt
                  // } // cls
                  XATS000_cfail()
                } while (false) // end-of(do)
                // I1CMP:return:jsxtnm918
                return jsxtnm918
              } // endfun(loop_4843)
              let jsxtnm919 = XATSDAPP(loop_4843(jsxtnm906))
              jsxtnm920 = jsxtnm919
            } // endlet
            // I1CMP:return:jsxtnm920
            return jsxtnm920
          } // endtimp(list_foritm(1218))
          jsxtnm922 = jsxtnm921
          let jsxtnm923 = XATSDAPP(jsxtnm922(jsxtnm902))
          jsxtnm924 = jsxtnm923
        } // endlet
        // I1CMP:return:jsxtnm924
        return jsxtnm924
      } // endtimp(gseq_foritm$f1un(400))
      jsxtnm926 = jsxtnm925
      let jsxtnm1177 = function (arg1) { // lam0(T_LAM(0))
        let jsxtnm927 = arg1
        // I1CMP:start
        // LCSRCsome1(Game-of-24.dats)@(7166(line=370,offs=36)--7173(line=370,offs=43))
        // I0Etapq(I0Ecst(gs_println_a1(810)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(13747(line=892,offs=1)--13760(line=892,offs=14))));$list(T2JAG($list(T2Pcst(expr)))))
        // T1IMPallx(gs_println_a1(810);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
        // T1IMPallx(gs_println_a1(810)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6995],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gs_println_a1(810);$list(@(x0[2533],T2Pvar(x0[6995])))))))
        let jsxtnm1175 = function (arg1) { // timp: gs_println_a1(810)
          let jsxtnm928 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
          // I0Etapq(I0Ecst(gs_print_a1(797)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11760(line=745,offs=1)--11771(line=745,offs=12))));$list(T2JAG($list(T2Pvar(x0[6995])))))
          // T1IMPallx(gs_print_a1(797);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
          // T1IMPallx(gs_print_a1(797)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6917],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gs_print_a1(797);$list(@(x0[2455],T2Pvar(x0[6917])))))))
          let jsxtnm1166 = function (arg1) { // timp: gs_print_a1(797)
            let jsxtnm929 = arg1
            // I1CMP:start
            let jsxtnm1165 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
              // I1VALDCL
              let jsxtnm933
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
              // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
              // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
              // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
              let jsxtnm931 = function () { // timp: gs_print$beg(793)
                // I1CMP:start
                let jsxtnm930 = XATSTUP0([])
                // I1CMP:return:jsxtnm930
                return jsxtnm930
              } // endtimp(gs_print$beg(793))
              let jsxtnm932 = XATSDAPP(jsxtnm931())
              jsxtnm933 = jsxtnm932
              XATS000_patck(true)
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6917])))))
              // T1IMPallx(g_print(39);LCSRCsome1(Game-of-24.dats)@(2338(line=106,offs=1)--2735(line=137,offs=2)))
              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr)))))))
              let jsxtnm1160 = function (arg1) { // timp: g_print(39)
                let jsxtnm934 = arg1
                // I1CMP:start
                let jsxtnm1159 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(2406(line=113,offs=1)--2730(line=135,offs=2)))
                  // I1FUNDCL
                  function auxpr_2409(arg1)
                  { // fun
                    let jsxtnm935 = arg1
                    // I1CMP:start
                    let jsxtnm1157 // let
                    { // let
                      // I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(2690(line=134,offs=1)--2720(line=134,offs=31)))
                      // I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr))))):timp
                      let jsxtnm1156 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(936);I0Pdapp(I0Pcon(Int(32));$list(I0Pvar(i0(5221))));$list(@(i0(5221),I1Vp1cn(I0Pcon(Int(32));I1Vtnm(I1TNM(936));0)))))
                        if (XATS000_ctgeq(jsxtnm935, XATSCTAG("Int",0))) { // gpt
                          let jsxtnm936 = jsxtnm935
                          // LCSRCsome1(Game-of-24.dats)@(2463(line=118,offs=13)--2468(line=118,offs=18))
                          // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                          // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
                          // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(si)))))))
                          let jsxtnm942
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
                          // I0Etapq(I0Ecst(sint_print(913)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
                          // T1IMPallx(sint_print(913);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
                          // T1IMPallx(sint_print(913)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(913);$list()))))
                          let jsxtnm941 = function (arg1) { // timp: sint_print(913)
                            let jsxtnm937 = arg1
                            // I1CMP:start
                            let jsxtnm940 // let
                            { // let
                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
                              // I1FUNDCL
                              // XATS2JS_sint_print_3707
                                // FJARGdarg($list(I1BNDcons(I1TNM(938);I0Pvar(i0(4957));$list(@(i0(4957),I1Vtnm(I1TNM(938)))))))
                                // I1CMP:start
                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
                              let jsxtnm939 = XATSDAPP(XATS2JS_sint_print(jsxtnm937))
                              jsxtnm940 = jsxtnm939
                            } // endlet
                            // I1CMP:return:jsxtnm940
                            return jsxtnm940
                          } // endtimp(sint_print(913))
                          jsxtnm942 = jsxtnm941
                          let jsxtnm943 = XATSDAPP(jsxtnm942(XATSP1CN("Int", jsxtnm936[0+1])))
                          jsxtnm1156 = jsxtnm943
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(944);I0Pdapp(I0Pcon(Add(33));$list(I0Pvar(x1(5222)),I0Pvar(x2(5223))));$list(@(x1(5222),I1Vp1cn(I0Pcon(Add(33));I1Vtnm(I1TNM(944));0)),@(x2(5223),I1Vp1cn(I0Pcon(Add(33));I1Vtnm(I1TNM(944));1)))))
                        if (XATS000_ctgeq(jsxtnm935, XATSCTAG("Add",1))) { // gpt
                          let jsxtnm944 = jsxtnm935
                          // LCSRCsome1(Game-of-24.dats)@(2496(line=122,offs=3)--2502(line=122,offs=9))
                          // I0Etapq(I0Ecst(gs_print_a5(801)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                          // T1IMPallx(gs_print_a5(801);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
                          // T1IMPallx(gs_print_a5(801)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6927],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6928],T2Pcst(expr)),@(x2[6929],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6930],T2Pcst(expr)),@(x4[6931],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(801);$list(@(x0[2465],T2Pvar(x0[6927])),@(x1[2466],T2Pvar(x1[6928])),@(x2[2467],T2Pvar(x2[6929])),@(x3[2468],T2Pvar(x3[6930])),@(x4[2469],T2Pvar(x4[6931])))))))
                          let jsxtnm995 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(801)
                            let jsxtnm945 = arg1
                            let jsxtnm946 = arg2
                            let jsxtnm947 = arg3
                            let jsxtnm948 = arg4
                            let jsxtnm949 = arg5
                            // I1CMP:start
                            let jsxtnm994 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                              // I1VALDCL
                              let jsxtnm953
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                              // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                              // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
                              let jsxtnm951 = function () { // timp: gs_print$beg(793)
                                // I1CMP:start
                                let jsxtnm950 = XATSTUP0([])
                                // I1CMP:return:jsxtnm950
                                return jsxtnm950
                              } // endtimp(gs_print$beg(793))
                              let jsxtnm952 = XATSDAPP(jsxtnm951())
                              jsxtnm953 = jsxtnm952
                              XATS000_patck(true)
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6927])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm959
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm958 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm954 = arg1
                                // I1CMP:start
                                let jsxtnm957 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(955);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(955)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm956 = XATSDAPP(XATS2JS_strn_print(jsxtnm954))
                                  jsxtnm957 = jsxtnm956
                                } // endlet
                                // I1CMP:return:jsxtnm957
                                return jsxtnm957
                              } // endtimp(strn_print(1029))
                              jsxtnm959 = jsxtnm958
                              let jsxtnm960 = XATSDAPP(jsxtnm959(jsxtnm945))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm962 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm961 = XATSTUP0([])
                                // I1CMP:return:jsxtnm961
                                return jsxtnm961
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm963 = XATSDAPP(jsxtnm962())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6928])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(Game-of-24.dats)@(2690(line=134,offs=1)--2720(line=134,offs=31)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr)))))))
                              let jsxtnm964
                              jsxtnm964 = auxpr_2409
                              let jsxtnm965 = XATSDAPP(jsxtnm964(jsxtnm946))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm967 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm966 = XATSTUP0([])
                                // I1CMP:return:jsxtnm966
                                return jsxtnm966
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm968 = XATSDAPP(jsxtnm967())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6929])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm974
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm973 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm969 = arg1
                                // I1CMP:start
                                let jsxtnm972 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(970);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(970)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm971 = XATSDAPP(XATS2JS_strn_print(jsxtnm969))
                                  jsxtnm972 = jsxtnm971
                                } // endlet
                                // I1CMP:return:jsxtnm972
                                return jsxtnm972
                              } // endtimp(strn_print(1029))
                              jsxtnm974 = jsxtnm973
                              let jsxtnm975 = XATSDAPP(jsxtnm974(jsxtnm947))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm977 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm976 = XATSTUP0([])
                                // I1CMP:return:jsxtnm976
                                return jsxtnm976
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm978 = XATSDAPP(jsxtnm977())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6930])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(Game-of-24.dats)@(2690(line=134,offs=1)--2720(line=134,offs=31)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr)))))))
                              let jsxtnm979
                              jsxtnm979 = auxpr_2409
                              let jsxtnm980 = XATSDAPP(jsxtnm979(jsxtnm948))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm982 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm981 = XATSTUP0([])
                                // I1CMP:return:jsxtnm981
                                return jsxtnm981
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm983 = XATSDAPP(jsxtnm982())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x4[6931])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm989
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm988 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm984 = arg1
                                // I1CMP:start
                                let jsxtnm987 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(985);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(985)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm986 = XATSDAPP(XATS2JS_strn_print(jsxtnm984))
                                  jsxtnm987 = jsxtnm986
                                } // endlet
                                // I1CMP:return:jsxtnm987
                                return jsxtnm987
                              } // endtimp(strn_print(1029))
                              jsxtnm989 = jsxtnm988
                              let jsxtnm990 = XATSDAPP(jsxtnm989(jsxtnm949))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                              // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                              // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
                              let jsxtnm992 = function () { // timp: gs_print$end(795)
                                // I1CMP:start
                                let jsxtnm991 = XATSTUP0([])
                                // I1CMP:return:jsxtnm991
                                return jsxtnm991
                              } // endtimp(gs_print$end(795))
                              let jsxtnm993 = XATSDAPP(jsxtnm992())
                              jsxtnm994 = jsxtnm993
                            } // endlet
                            // I1CMP:return:jsxtnm994
                            return jsxtnm994
                          } // endtimp(gs_print_a5(801))
                          let jsxtnm996 = XATSDAPP(jsxtnm995(XATSSTRN("("), XATSP1CN("Add", jsxtnm944[0+1]), XATSSTRN("+"), XATSP1CN("Add", jsxtnm944[1+1]), XATSSTRN(")")))
                          jsxtnm1156 = jsxtnm996
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(997);I0Pdapp(I0Pcon(Sub(34));$list(I0Pvar(x1(5224)),I0Pvar(x2(5225))));$list(@(x1(5224),I1Vp1cn(I0Pcon(Sub(34));I1Vtnm(I1TNM(997));0)),@(x2(5225),I1Vp1cn(I0Pcon(Sub(34));I1Vtnm(I1TNM(997));1)))))
                        if (XATS000_ctgeq(jsxtnm935, XATSCTAG("Sub",2))) { // gpt
                          let jsxtnm997 = jsxtnm935
                          // LCSRCsome1(Game-of-24.dats)@(2547(line=125,offs=3)--2553(line=125,offs=9))
                          // I0Etapq(I0Ecst(gs_print_a5(801)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                          // T1IMPallx(gs_print_a5(801);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
                          // T1IMPallx(gs_print_a5(801)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6927],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6928],T2Pcst(expr)),@(x2[6929],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6930],T2Pcst(expr)),@(x4[6931],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(801);$list(@(x0[2465],T2Pvar(x0[6927])),@(x1[2466],T2Pvar(x1[6928])),@(x2[2467],T2Pvar(x2[6929])),@(x3[2468],T2Pvar(x3[6930])),@(x4[2469],T2Pvar(x4[6931])))))))
                          let jsxtnm1048 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(801)
                            let jsxtnm998 = arg1
                            let jsxtnm999 = arg2
                            let jsxtnm1000 = arg3
                            let jsxtnm1001 = arg4
                            let jsxtnm1002 = arg5
                            // I1CMP:start
                            let jsxtnm1047 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                              // I1VALDCL
                              let jsxtnm1006
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                              // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                              // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
                              let jsxtnm1004 = function () { // timp: gs_print$beg(793)
                                // I1CMP:start
                                let jsxtnm1003 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1003
                                return jsxtnm1003
                              } // endtimp(gs_print$beg(793))
                              let jsxtnm1005 = XATSDAPP(jsxtnm1004())
                              jsxtnm1006 = jsxtnm1005
                              XATS000_patck(true)
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6927])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm1012
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm1011 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm1007 = arg1
                                // I1CMP:start
                                let jsxtnm1010 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1008);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1008)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1009 = XATSDAPP(XATS2JS_strn_print(jsxtnm1007))
                                  jsxtnm1010 = jsxtnm1009
                                } // endlet
                                // I1CMP:return:jsxtnm1010
                                return jsxtnm1010
                              } // endtimp(strn_print(1029))
                              jsxtnm1012 = jsxtnm1011
                              let jsxtnm1013 = XATSDAPP(jsxtnm1012(jsxtnm998))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1015 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1014 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1014
                                return jsxtnm1014
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1016 = XATSDAPP(jsxtnm1015())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6928])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(Game-of-24.dats)@(2690(line=134,offs=1)--2720(line=134,offs=31)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr)))))))
                              let jsxtnm1017
                              jsxtnm1017 = auxpr_2409
                              let jsxtnm1018 = XATSDAPP(jsxtnm1017(jsxtnm999))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1020 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1019 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1019
                                return jsxtnm1019
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1021 = XATSDAPP(jsxtnm1020())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6929])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm1027
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm1026 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm1022 = arg1
                                // I1CMP:start
                                let jsxtnm1025 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1023);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1023)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1024 = XATSDAPP(XATS2JS_strn_print(jsxtnm1022))
                                  jsxtnm1025 = jsxtnm1024
                                } // endlet
                                // I1CMP:return:jsxtnm1025
                                return jsxtnm1025
                              } // endtimp(strn_print(1029))
                              jsxtnm1027 = jsxtnm1026
                              let jsxtnm1028 = XATSDAPP(jsxtnm1027(jsxtnm1000))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1030 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1029 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1029
                                return jsxtnm1029
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1031 = XATSDAPP(jsxtnm1030())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6930])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(Game-of-24.dats)@(2690(line=134,offs=1)--2720(line=134,offs=31)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr)))))))
                              let jsxtnm1032
                              jsxtnm1032 = auxpr_2409
                              let jsxtnm1033 = XATSDAPP(jsxtnm1032(jsxtnm1001))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1035 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1034 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1034
                                return jsxtnm1034
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1036 = XATSDAPP(jsxtnm1035())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x4[6931])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm1042
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm1041 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm1037 = arg1
                                // I1CMP:start
                                let jsxtnm1040 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1038);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1038)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1039 = XATSDAPP(XATS2JS_strn_print(jsxtnm1037))
                                  jsxtnm1040 = jsxtnm1039
                                } // endlet
                                // I1CMP:return:jsxtnm1040
                                return jsxtnm1040
                              } // endtimp(strn_print(1029))
                              jsxtnm1042 = jsxtnm1041
                              let jsxtnm1043 = XATSDAPP(jsxtnm1042(jsxtnm1002))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                              // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                              // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
                              let jsxtnm1045 = function () { // timp: gs_print$end(795)
                                // I1CMP:start
                                let jsxtnm1044 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1044
                                return jsxtnm1044
                              } // endtimp(gs_print$end(795))
                              let jsxtnm1046 = XATSDAPP(jsxtnm1045())
                              jsxtnm1047 = jsxtnm1046
                            } // endlet
                            // I1CMP:return:jsxtnm1047
                            return jsxtnm1047
                          } // endtimp(gs_print_a5(801))
                          let jsxtnm1049 = XATSDAPP(jsxtnm1048(XATSSTRN("("), XATSP1CN("Sub", jsxtnm997[0+1]), XATSSTRN("-"), XATSP1CN("Sub", jsxtnm997[1+1]), XATSSTRN(")")))
                          jsxtnm1156 = jsxtnm1049
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(1050);I0Pdapp(I0Pcon(Mul(35));$list(I0Pvar(x1(5226)),I0Pvar(x2(5227))));$list(@(x1(5226),I1Vp1cn(I0Pcon(Mul(35));I1Vtnm(I1TNM(1050));0)),@(x2(5227),I1Vp1cn(I0Pcon(Mul(35));I1Vtnm(I1TNM(1050));1)))))
                        if (XATS000_ctgeq(jsxtnm935, XATSCTAG("Mul",3))) { // gpt
                          let jsxtnm1050 = jsxtnm935
                          // LCSRCsome1(Game-of-24.dats)@(2598(line=128,offs=3)--2604(line=128,offs=9))
                          // I0Etapq(I0Ecst(gs_print_a5(801)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                          // T1IMPallx(gs_print_a5(801);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
                          // T1IMPallx(gs_print_a5(801)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6927],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6928],T2Pcst(expr)),@(x2[6929],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6930],T2Pcst(expr)),@(x4[6931],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(801);$list(@(x0[2465],T2Pvar(x0[6927])),@(x1[2466],T2Pvar(x1[6928])),@(x2[2467],T2Pvar(x2[6929])),@(x3[2468],T2Pvar(x3[6930])),@(x4[2469],T2Pvar(x4[6931])))))))
                          let jsxtnm1101 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(801)
                            let jsxtnm1051 = arg1
                            let jsxtnm1052 = arg2
                            let jsxtnm1053 = arg3
                            let jsxtnm1054 = arg4
                            let jsxtnm1055 = arg5
                            // I1CMP:start
                            let jsxtnm1100 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                              // I1VALDCL
                              let jsxtnm1059
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                              // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                              // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
                              let jsxtnm1057 = function () { // timp: gs_print$beg(793)
                                // I1CMP:start
                                let jsxtnm1056 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1056
                                return jsxtnm1056
                              } // endtimp(gs_print$beg(793))
                              let jsxtnm1058 = XATSDAPP(jsxtnm1057())
                              jsxtnm1059 = jsxtnm1058
                              XATS000_patck(true)
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6927])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm1065
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm1064 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm1060 = arg1
                                // I1CMP:start
                                let jsxtnm1063 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1061);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1061)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1062 = XATSDAPP(XATS2JS_strn_print(jsxtnm1060))
                                  jsxtnm1063 = jsxtnm1062
                                } // endlet
                                // I1CMP:return:jsxtnm1063
                                return jsxtnm1063
                              } // endtimp(strn_print(1029))
                              jsxtnm1065 = jsxtnm1064
                              let jsxtnm1066 = XATSDAPP(jsxtnm1065(jsxtnm1051))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1068 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1067 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1067
                                return jsxtnm1067
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1069 = XATSDAPP(jsxtnm1068())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6928])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(Game-of-24.dats)@(2690(line=134,offs=1)--2720(line=134,offs=31)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr)))))))
                              let jsxtnm1070
                              jsxtnm1070 = auxpr_2409
                              let jsxtnm1071 = XATSDAPP(jsxtnm1070(jsxtnm1052))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1073 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1072 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1072
                                return jsxtnm1072
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1074 = XATSDAPP(jsxtnm1073())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6929])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm1080
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm1079 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm1075 = arg1
                                // I1CMP:start
                                let jsxtnm1078 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1076);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1076)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1077 = XATSDAPP(XATS2JS_strn_print(jsxtnm1075))
                                  jsxtnm1078 = jsxtnm1077
                                } // endlet
                                // I1CMP:return:jsxtnm1078
                                return jsxtnm1078
                              } // endtimp(strn_print(1029))
                              jsxtnm1080 = jsxtnm1079
                              let jsxtnm1081 = XATSDAPP(jsxtnm1080(jsxtnm1053))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1083 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1082 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1082
                                return jsxtnm1082
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1084 = XATSDAPP(jsxtnm1083())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6930])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(Game-of-24.dats)@(2690(line=134,offs=1)--2720(line=134,offs=31)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr)))))))
                              let jsxtnm1085
                              jsxtnm1085 = auxpr_2409
                              let jsxtnm1086 = XATSDAPP(jsxtnm1085(jsxtnm1054))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1088 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1087 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1087
                                return jsxtnm1087
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1089 = XATSDAPP(jsxtnm1088())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x4[6931])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm1095
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm1094 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm1090 = arg1
                                // I1CMP:start
                                let jsxtnm1093 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1091);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1091)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1092 = XATSDAPP(XATS2JS_strn_print(jsxtnm1090))
                                  jsxtnm1093 = jsxtnm1092
                                } // endlet
                                // I1CMP:return:jsxtnm1093
                                return jsxtnm1093
                              } // endtimp(strn_print(1029))
                              jsxtnm1095 = jsxtnm1094
                              let jsxtnm1096 = XATSDAPP(jsxtnm1095(jsxtnm1055))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                              // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                              // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
                              let jsxtnm1098 = function () { // timp: gs_print$end(795)
                                // I1CMP:start
                                let jsxtnm1097 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1097
                                return jsxtnm1097
                              } // endtimp(gs_print$end(795))
                              let jsxtnm1099 = XATSDAPP(jsxtnm1098())
                              jsxtnm1100 = jsxtnm1099
                            } // endlet
                            // I1CMP:return:jsxtnm1100
                            return jsxtnm1100
                          } // endtimp(gs_print_a5(801))
                          let jsxtnm1102 = XATSDAPP(jsxtnm1101(XATSSTRN("("), XATSP1CN("Mul", jsxtnm1050[0+1]), XATSSTRN("*"), XATSP1CN("Mul", jsxtnm1050[1+1]), XATSSTRN(")")))
                          jsxtnm1156 = jsxtnm1102
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(1103);I0Pdapp(I0Pcon(Div(36));$list(I0Pvar(x1(5228)),I0Pvar(x2(5229))));$list(@(x1(5228),I1Vp1cn(I0Pcon(Div(36));I1Vtnm(I1TNM(1103));0)),@(x2(5229),I1Vp1cn(I0Pcon(Div(36));I1Vtnm(I1TNM(1103));1)))))
                        if (XATS000_ctgeq(jsxtnm935, XATSCTAG("Div",4))) { // gpt
                          let jsxtnm1103 = jsxtnm935
                          // LCSRCsome1(Game-of-24.dats)@(2649(line=131,offs=3)--2655(line=131,offs=9))
                          // I0Etapq(I0Ecst(gs_print_a5(801)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                          // T1IMPallx(gs_print_a5(801);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
                          // T1IMPallx(gs_print_a5(801)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6927],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6928],T2Pcst(expr)),@(x2[6929],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6930],T2Pcst(expr)),@(x4[6931],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(801);$list(@(x0[2465],T2Pvar(x0[6927])),@(x1[2466],T2Pvar(x1[6928])),@(x2[2467],T2Pvar(x2[6929])),@(x3[2468],T2Pvar(x3[6930])),@(x4[2469],T2Pvar(x4[6931])))))))
                          let jsxtnm1154 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(801)
                            let jsxtnm1104 = arg1
                            let jsxtnm1105 = arg2
                            let jsxtnm1106 = arg3
                            let jsxtnm1107 = arg4
                            let jsxtnm1108 = arg5
                            // I1CMP:start
                            let jsxtnm1153 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                              // I1VALDCL
                              let jsxtnm1112
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                              // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                              // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
                              let jsxtnm1110 = function () { // timp: gs_print$beg(793)
                                // I1CMP:start
                                let jsxtnm1109 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1109
                                return jsxtnm1109
                              } // endtimp(gs_print$beg(793))
                              let jsxtnm1111 = XATSDAPP(jsxtnm1110())
                              jsxtnm1112 = jsxtnm1111
                              XATS000_patck(true)
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6927])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm1118
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm1117 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm1113 = arg1
                                // I1CMP:start
                                let jsxtnm1116 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1114);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1114)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1115 = XATSDAPP(XATS2JS_strn_print(jsxtnm1113))
                                  jsxtnm1116 = jsxtnm1115
                                } // endlet
                                // I1CMP:return:jsxtnm1116
                                return jsxtnm1116
                              } // endtimp(strn_print(1029))
                              jsxtnm1118 = jsxtnm1117
                              let jsxtnm1119 = XATSDAPP(jsxtnm1118(jsxtnm1104))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1121 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1120 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1120
                                return jsxtnm1120
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1122 = XATSDAPP(jsxtnm1121())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6928])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(Game-of-24.dats)@(2690(line=134,offs=1)--2720(line=134,offs=31)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr)))))))
                              let jsxtnm1123
                              jsxtnm1123 = auxpr_2409
                              let jsxtnm1124 = XATSDAPP(jsxtnm1123(jsxtnm1105))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1126 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1125 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1125
                                return jsxtnm1125
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1127 = XATSDAPP(jsxtnm1126())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6929])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm1133
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm1132 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm1128 = arg1
                                // I1CMP:start
                                let jsxtnm1131 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1129);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1129)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1130 = XATSDAPP(XATS2JS_strn_print(jsxtnm1128))
                                  jsxtnm1131 = jsxtnm1130
                                } // endlet
                                // I1CMP:return:jsxtnm1131
                                return jsxtnm1131
                              } // endtimp(strn_print(1029))
                              jsxtnm1133 = jsxtnm1132
                              let jsxtnm1134 = XATSDAPP(jsxtnm1133(jsxtnm1106))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1136 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1135 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1135
                                return jsxtnm1135
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1137 = XATSDAPP(jsxtnm1136())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6930])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(Game-of-24.dats)@(2690(line=134,offs=1)--2720(line=134,offs=31)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(expr)))))))
                              let jsxtnm1138
                              jsxtnm1138 = auxpr_2409
                              let jsxtnm1139 = XATSDAPP(jsxtnm1138(jsxtnm1107))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                              let jsxtnm1141 = function () { // timp: gs_print$sep(794)
                                // I1CMP:start
                                let jsxtnm1140 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1140
                                return jsxtnm1140
                              } // endtimp(gs_print$sep(794))
                              let jsxtnm1142 = XATSDAPP(jsxtnm1141())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x4[6931])))))
                              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                              let jsxtnm1148
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                              let jsxtnm1147 = function (arg1) { // timp: strn_print(1029)
                                let jsxtnm1143 = arg1
                                // I1CMP:start
                                let jsxtnm1146 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2202
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1144);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1144)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1145 = XATSDAPP(XATS2JS_strn_print(jsxtnm1143))
                                  jsxtnm1146 = jsxtnm1145
                                } // endlet
                                // I1CMP:return:jsxtnm1146
                                return jsxtnm1146
                              } // endtimp(strn_print(1029))
                              jsxtnm1148 = jsxtnm1147
                              let jsxtnm1149 = XATSDAPP(jsxtnm1148(jsxtnm1108))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                              // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                              // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
                              let jsxtnm1151 = function () { // timp: gs_print$end(795)
                                // I1CMP:start
                                let jsxtnm1150 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1150
                                return jsxtnm1150
                              } // endtimp(gs_print$end(795))
                              let jsxtnm1152 = XATSDAPP(jsxtnm1151())
                              jsxtnm1153 = jsxtnm1152
                            } // endlet
                            // I1CMP:return:jsxtnm1153
                            return jsxtnm1153
                          } // endtimp(gs_print_a5(801))
                          let jsxtnm1155 = XATSDAPP(jsxtnm1154(XATSSTRN("("), XATSP1CN("Div", jsxtnm1103[0+1]), XATSSTRN("/"), XATSP1CN("Div", jsxtnm1103[1+1]), XATSSTRN(")")))
                          jsxtnm1156 = jsxtnm1155
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      jsxtnm1157 = jsxtnm1156
                    } // endlet
                    // I1CMP:return:jsxtnm1157
                    return jsxtnm1157
                  } // endfun(auxpr_2409)
                  let jsxtnm1158 = XATSDAPP(auxpr_2409(jsxtnm934))
                  jsxtnm1159 = jsxtnm1158
                } // endlet
                // I1CMP:return:jsxtnm1159
                return jsxtnm1159
              } // endtimp(g_print(39))
              let jsxtnm1161 = XATSDAPP(jsxtnm1160(jsxtnm929))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
              // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
              // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
              // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
              let jsxtnm1163 = function () { // timp: gs_print$end(795)
                // I1CMP:start
                let jsxtnm1162 = XATSTUP0([])
                // I1CMP:return:jsxtnm1162
                return jsxtnm1162
              } // endtimp(gs_print$end(795))
              let jsxtnm1164 = XATSDAPP(jsxtnm1163())
              jsxtnm1165 = jsxtnm1164
            } // endlet
            // I1CMP:return:jsxtnm1165
            return jsxtnm1165
          } // endtimp(gs_print_a1(797))
          let jsxtnm1167 = XATSDAPP(jsxtnm1166(jsxtnm928))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
          // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
          // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
          // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
          let jsxtnm1173
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
          // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
          // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
          let jsxtnm1172 = function (arg1) { // timp: strn_print(1029)
            let jsxtnm1168 = arg1
            // I1CMP:start
            let jsxtnm1171 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
              // I1FUNDCL
              // XATS2JS_strn_print_2202
                // FJARGdarg($list(I1BNDcons(I1TNM(1169);I0Pvar(cs(5093));$list(@(cs(5093),I1Vtnm(I1TNM(1169)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
              let jsxtnm1170 = XATSDAPP(XATS2JS_strn_print(jsxtnm1168))
              jsxtnm1171 = jsxtnm1170
            } // endlet
            // I1CMP:return:jsxtnm1171
            return jsxtnm1171
          } // endtimp(strn_print(1029))
          jsxtnm1173 = jsxtnm1172
          let jsxtnm1174 = XATSDAPP(jsxtnm1173(XATSSTRN("\n")))
          // I1CMP:return:jsxtnm1174
          return jsxtnm1174
        } // endtimp(gs_println_a1(810))
        let jsxtnm1176 = XATSDAPP(jsxtnm1175(jsxtnm927))
        // I1CMP:return:jsxtnm1176
        return jsxtnm1176
      } // endfun(lam0)
      let jsxtnm1178 = XATSDAPP(jsxtnm926(jsxtnm839, jsxtnm1177))
      jsxtnm1179 = jsxtnm1178
    } // end(if)
    jsxtnm1180 = jsxtnm1179
  } // endlet
  // I1CMP:return:jsxtnm1180
  return jsxtnm1180
} // endfun(impl)
// I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(7466(line=384,offs=1)--7519(line=385,offs=45)))
// I1VALDCL
let jsxtnm1191
// LCSRCsome1(Game-of-24.dats)@(7475(line=385,offs=1)--7486(line=385,offs=12))
// I0Etapq(I0Ecst(console_log(2559)(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1544(line=50,offs=1)--1555(line=50,offs=12))));$list(T2JAG($list())))
// T1IMPallx(console_log(2559);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1581(line=53,offs=1)--1730(line=65,offs=2)))
// T1IMPallx(console_log(2559)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(console_log(2559);$list()))))
let jsxtnm1185 = function (arg1) { // timp: console_log(2559)
  let jsxtnm1181 = arg1
  // I1CMP:start
  let jsxtnm1184 // let
  { // let
    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1663(line=61,offs=1)--1728(line=64,offs=34)))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1671(line=62,offs=1)--1728(line=64,offs=34))
    // I1FUNDCL
    // XATS2JS_console_log_1674
      // FJARGdarg($list(I1BNDcons(I1TNM(1182);I0Pvar(x0(4785));$list(@(x0(4785),I1Vtnm(I1TNM(1182)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_console_log);G1Nlist($list())) // I1CMP:return
    let jsxtnm1183 = XATSDAPP(XATS2JS_console_log(jsxtnm1181))
    jsxtnm1184 = jsxtnm1183
  } // endlet
  // I1CMP:return:jsxtnm1184
  return jsxtnm1184
} // endtimp(console_log(2559))
// LCSRCsome1(Game-of-24.dats)@(7487(line=385,offs=13)--7508(line=385,offs=34))
// I0Etapq(I0Ecst(the_print_store_flush(2562)(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1836(line=76,offs=1)--1857(line=76,offs=22))));$list(T2JAG($list())))
// T1IMPallx(the_print_store_flush(2562);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1998(line=87,offs=1)--2171(line=98,offs=2)))
// T1IMPallx(the_print_store_flush(2562)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(the_print_store_flush(2562);$list()))))
let jsxtnm1188 = function () { // timp: the_print_store_flush(2562)
  // I1CMP:start
  let jsxtnm1187 // let
  { // let
    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(2108(line=95,offs=1)--2169(line=97,offs=50)))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(2116(line=96,offs=1)--2169(line=97,offs=50))
    // I1FUNDCL
    // XATS2JS_the_print_store_flush_2119
      // FJARGdarg($list())
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_the_print_store_flush);G1Nlist($list())) // I1CMP:return
    let jsxtnm1186 = XATSDAPP(XATS2JS_the_print_store_flush())
    jsxtnm1187 = jsxtnm1186
  } // endlet
  // I1CMP:return:jsxtnm1187
  return jsxtnm1187
} // endtimp(the_print_store_flush(2562))
let jsxtnm1189 = XATSDAPP(jsxtnm1188())
let jsxtnm1190 = XATSDAPP(jsxtnm1185(jsxtnm1189))
jsxtnm1191 = jsxtnm1190
XATS000_patck(true)
// LCSRCsome1(Game-of-24.dats)@(7805(line=396,offs=1)--7805(line=396,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(Game-of-24.dats)@(7805(line=396,offs=1)--7805(line=396,offs=1));D3Cnone0()))
