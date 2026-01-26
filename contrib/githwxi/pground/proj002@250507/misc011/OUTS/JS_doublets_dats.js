// Mon Jan 26 11:30:35 AM EST 2026
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
// LCSRCsome1(doublets.dats)@(137(line=10,offs=1)--160(line=10,offs=24))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./ggrph.dats";14));$optn(FPATH(ggrph.dats));...)))
// LCSRCsome1(doublets.dats)@(164(line=12,offs=1)--202(line=13,offs=26))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("./../misc008/gtree.dats";25)));$optn(FPATH(../misc008/gtree.dats));...)))
// I1Dinclude(LCSRCsome1(doublets.dats)@(249(line=18,offs=1)--300(line=20,offs=33)))
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
// I1Dinclude(LCSRCsome1(doublets.dats)@(347(line=25,offs=1)--388(line=26,offs=33)))
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
// I1Dinclude(LCSRCsome1(doublets.dats)@(389(line=27,offs=1)--440(line=29,offs=33)))
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
// I1Dinclude(LCSRCsome1(doublets.dats)@(444(line=31,offs=1)--488(line=32,offs=36)))
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
// I1Dfundclist(LCSRCsome1(doublets.dats)@(535(line=37,offs=1)--1079(line=94,offs=2)))
// I1FUNDCL
function word_adjs$get_538(arg1)
{ // fun
  let jsxtnm1 = arg1
  // I1CMP:start
  let jsxtnm192 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(doublets.dats)@(612(line=45,offs=1)--632(line=45,offs=21)))
    // I1VALDCL
    let jsxtnm8
    // LCSRCsome1(doublets.dats)@(621(line=45,offs=10)--627(line=45,offs=16))
    // I0Etapq(I0Ecst(strn_length(1030)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2709(line=131,offs=1)--2720(line=131,offs=12))));$list(T2JAG($list())))
    // T1IMPallx(strn_length(1030);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1610(line=57,offs=1)--1756(line=69,offs=2)))
    // T1IMPallx(strn_length(1030)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(1030);$list()))))
    let jsxtnm6 = function (arg1) { // timp: strn_length(1030)
      let jsxtnm2 = arg1
      // I1CMP:start
      let jsxtnm5 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1692(line=65,offs=1)--1754(line=68,offs=31)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1700(line=66,offs=1)--1754(line=68,offs=31))
        // I1FUNDCL
        // XATS2JS_strn_length_1703
          // FJARGdarg($list(I1BNDcons(I1TNM(3);I0Pvar(cs(5253));$list(@(cs(5253),I1Vtnm(I1TNM(3)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
        let jsxtnm4 = XATSDAPP(XATS2JS_strn_length(jsxtnm2))
        jsxtnm5 = jsxtnm4
      } // endlet
      // I1CMP:return:jsxtnm5
      return jsxtnm5
    } // endtimp(strn_length(1030))
    let jsxtnm7 = XATSDAPP(jsxtnm6(jsxtnm1))
    jsxtnm8 = jsxtnm7
    XATS000_patck(true)
    // I1Dfundclist(LCSRCsome1(doublets.dats)@(636(line=47,offs=1)--1074(line=92,offs=3)))
    // I1FUNDCL
    function helper0_639(arg1)
    { // fun
      let jsxtnm9 = arg1
      // I1CMP:start
      // LCSRCsome1(doublets.dats)@(670(line=52,offs=5)--672(line=52,offs=7))
      // I0Etapq(I0Ecst(sint_gte$sint(922)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
      // T1IMPallx(sint_gte$sint(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
      // T1IMPallx(sint_gte$sint(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(922);$list()))))
      let jsxtnm16 = function (arg1, arg2) { // timp: sint_gte$sint(922)
        let jsxtnm10 = arg1
        let jsxtnm11 = arg2
        // I1CMP:start
        let jsxtnm15 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
          // I1FUNDCL
          // XATS2JS_sint_gte$sint_2399
            // FJARGdarg($list(I1BNDcons(I1TNM(12);I0Pvar(i1(5091));$list(@(i1(5091),I1Vtnm(I1TNM(12))))),I1BNDcons(I1TNM(13);I0Pvar(i2(5092));$list(@(i2(5092),I1Vtnm(I1TNM(13)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
          let jsxtnm14 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm10, jsxtnm11))
          jsxtnm15 = jsxtnm14
        } // endlet
        // I1CMP:return:jsxtnm15
        return jsxtnm15
      } // endtimp(sint_gte$sint(922))
      let jsxtnm17 = XATSDAPP(jsxtnm16(jsxtnm9, jsxtnm8))
      let jsxtnm34 // ift
      if (jsxtnm17) // ift
      {
        // LCSRCsome1(doublets.dats)@(684(line=55,offs=1)--695(line=55,offs=12))
        // I0Etapq(I0Ecst(strm_vt_nil(2115)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1422(line=42,offs=1)--1433(line=42,offs=12))));$list(T2JAG($list())))
        // T1IMPallx(strm_vt_nil(2115);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1708(line=66,offs=1)--1771(line=70,offs=21)))
        // T1IMPallx(strm_vt_nil(2115)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strm_vt_nil(2115);$list()))))
        let jsxtnm20 = function () { // timp: strm_vt_nil(2115)
          // I1CMP:start
          let jsxtnm19 = XATS000_l1azy(function (tlaz) { // l1azy
            // I1CMP:start
            let jsxtnm18 = XATSCAPP("strmcon_vt_nil", [0])
            // I1CMP:return:jsxtnm18
            return jsxtnm18
          }) // endfun(l1azy)
          // I1CMP:return:jsxtnm19
          return jsxtnm19
        } // endtimp(strm_vt_nil(2115))
        let jsxtnm21 = XATSDAPP(jsxtnm20())
        jsxtnm34 = jsxtnm21
      } else {
        let jsxtnm33 // let
        { // let
          // I1Dvaldclist(LCSRCsome1(doublets.dats)@(740(line=61,offs=1)--769(line=62,offs=21)))
          // I1VALDCL
          let jsxtnm30
          // LCSRCsome1(doublets.dats)@(749(line=62,offs=1)--756(line=62,offs=8))
          // I0Etapq(I0Ecst(strn_get$at(1031)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2850(line=142,offs=1)--2861(line=142,offs=12))));$list(T2JAG($list())))
          // T1IMPallx(strn_get$at(1031);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2354(line=122,offs=1)--2541(line=135,offs=2)))
          // T1IMPallx(strn_get$at(1031)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at(1031);$list()))))
          let jsxtnm28 = function (arg1, arg2) { // timp: strn_get$at(1031)
            let jsxtnm22 = arg1
            let jsxtnm23 = arg2
            // I1CMP:start
            let jsxtnm27 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2457(line=131,offs=1)--2539(line=134,offs=47)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2465(line=132,offs=1)--2539(line=134,offs=47))
              // I1FUNDCL
              // XATS2JS_strn_get$at$raw_2468
                // FJARGdarg($list(I1BNDcons(I1TNM(24);I0Pvar(cs(5265));$list(@(cs(5265),I1Vtnm(I1TNM(24))))),I1BNDcons(I1TNM(25);I0Pvar(i0(5266));$list(@(i0(5266),I1Vtnm(I1TNM(25)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
              let jsxtnm26 = XATSDAPP(XATS2JS_strn_get$at$raw(jsxtnm22, jsxtnm23))
              jsxtnm27 = jsxtnm26
            } // endlet
            // I1CMP:return:jsxtnm27
            return jsxtnm27
          } // endtimp(strn_get$at(1031))
          let jsxtnm29 = XATSDAPP(jsxtnm28(jsxtnm1, jsxtnm9))
          jsxtnm30 = jsxtnm29
          XATS000_patck(true)
          // I1VALDCL
          let jsxtnm31
          jsxtnm31 = XATSCHR2('a')
          XATS000_patck(true)
          let jsxtnm32 = XATSDAPP(helper1_778(jsxtnm9, jsxtnm30, jsxtnm31))
          jsxtnm33 = jsxtnm32
        } // endlet
        jsxtnm34 = jsxtnm33
      } // end(if)
      // I1CMP:return:jsxtnm34
      return jsxtnm34
    } // endfun(helper0_639)
    // I1FUNDCL
    function helper1_778(arg1, arg2, arg3)
    { // fun
      let jsxtnm35 = arg1
      let jsxtnm36 = arg2
      let jsxtnm37 = arg3
      // I1CMP:start
      let jsxtnm190 = XATS000_l1azy(function (tlaz) { // l1azy
        // I1CMP:start
        // LCSRCsome1(doublets.dats)@(855(line=72,offs=5)--856(line=72,offs=6))
        // I0Etapq(I0Ecst(char_gt(887)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3302(line=171,offs=1)--3309(line=171,offs=8))));$list(T2JAG($list())))
        // T1IMPallx(char_gt(887);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1601(line=56,offs=1)--1745(line=68,offs=2)))
        // T1IMPallx(char_gt(887)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_gt(887);$list()))))
        let jsxtnm44 = function (arg1, arg2) { // timp: char_gt(887)
          let jsxtnm38 = arg1
          let jsxtnm39 = arg2
          // I1CMP:start
          let jsxtnm43 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1677(line=64,offs=1)--1743(line=67,offs=39)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1685(line=65,offs=1)--1743(line=67,offs=39))
            // I1FUNDCL
            // XATS2JS_char_gt_1688
              // FJARGdarg($list(I1BNDcons(I1TNM(40);I0Pvar(c1(5024));$list(@(c1(5024),I1Vtnm(I1TNM(40))))),I1BNDcons(I1TNM(41);I0Pvar(c2(5025));$list(@(c2(5025),I1Vtnm(I1TNM(41)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_gt);G1Nlist($list())) // I1CMP:return
            let jsxtnm42 = XATSDAPP(XATS2JS_char_gt(jsxtnm38, jsxtnm39))
            jsxtnm43 = jsxtnm42
          } // endlet
          // I1CMP:return:jsxtnm43
          return jsxtnm43
        } // endtimp(char_gt(887))
        let jsxtnm45 = XATSDAPP(jsxtnm44(jsxtnm37, XATSCHR2('z')))
        let jsxtnm189 // ift
        if (jsxtnm45) // ift
        {
          // LCSRCsome1(doublets.dats)@(881(line=75,offs=11)--882(line=75,offs=12))
          // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
          // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
          // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
          let jsxtnm52 = function (arg1, arg2) { // timp: sint_add$sint(925)
            let jsxtnm46 = arg1
            let jsxtnm47 = arg2
            // I1CMP:start
            let jsxtnm51 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
              // I1FUNDCL
              // XATS2JS_sint_add$sint_2778
                // FJARGdarg($list(I1BNDcons(I1TNM(48);I0Pvar(i1(5101));$list(@(i1(5101),I1Vtnm(I1TNM(48))))),I1BNDcons(I1TNM(49);I0Pvar(i2(5102));$list(@(i2(5102),I1Vtnm(I1TNM(49)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
              let jsxtnm50 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm46, jsxtnm47))
              jsxtnm51 = jsxtnm50
            } // endlet
            // I1CMP:return:jsxtnm51
            return jsxtnm51
          } // endtimp(sint_add$sint(925))
          let jsxtnm53 = XATSDAPP(jsxtnm52(jsxtnm35, XATSINT1(1)))
          let jsxtnm54 = XATSDAPP(helper0_639(jsxtnm53))
          let jsxtnm55 = XATS000_dl1az(jsxtnm54)
          jsxtnm189 = jsxtnm55
        } else {
          // LCSRCsome1(doublets.dats)@(900(line=79,offs=5)--901(line=79,offs=6))
          // I0Etapq(I0Ecst(char_eq(888)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3373(line=176,offs=1)--3380(line=176,offs=8))));$list(T2JAG($list())))
          // T1IMPallx(char_eq(888);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1772(line=72,offs=1)--1916(line=84,offs=2)))
          // T1IMPallx(char_eq(888)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_eq(888);$list()))))
          let jsxtnm62 = function (arg1, arg2) { // timp: char_eq(888)
            let jsxtnm56 = arg1
            let jsxtnm57 = arg2
            // I1CMP:start
            let jsxtnm61 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1848(line=80,offs=1)--1914(line=83,offs=39)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1856(line=81,offs=1)--1914(line=83,offs=39))
              // I1FUNDCL
              // XATS2JS_char_eq_1859
                // FJARGdarg($list(I1BNDcons(I1TNM(58);I0Pvar(c1(5029));$list(@(c1(5029),I1Vtnm(I1TNM(58))))),I1BNDcons(I1TNM(59);I0Pvar(c2(5030));$list(@(c2(5030),I1Vtnm(I1TNM(59)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_eq);G1Nlist($list())) // I1CMP:return
              let jsxtnm60 = XATSDAPP(XATS2JS_char_eq(jsxtnm56, jsxtnm57))
              jsxtnm61 = jsxtnm60
            } // endlet
            // I1CMP:return:jsxtnm61
            return jsxtnm61
          } // endtimp(char_eq(888))
          let jsxtnm63 = XATSDAPP(jsxtnm62(jsxtnm36, jsxtnm37))
          let jsxtnm188 // ift
          if (jsxtnm63) // ift
          {
            // LCSRCsome1(doublets.dats)@(933(line=82,offs=19)--934(line=82,offs=20))
            // I0Etapq(I0Ecst(char_add$sint(895)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(4254(line=230,offs=1)--4267(line=230,offs=14))));$list(T2JAG($list())))
            // T1IMPallx(char_add$sint(895);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2485(line=137,offs=1)--2649(line=149,offs=2)))
            // T1IMPallx(char_add$sint(895)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_add$sint(895);$list()))))
            let jsxtnm70 = function (arg1, arg2) { // timp: char_add$sint(895)
              let jsxtnm64 = arg1
              let jsxtnm65 = arg2
              // I1CMP:start
              let jsxtnm69 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2575(line=145,offs=1)--2647(line=148,offs=39)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2583(line=146,offs=1)--2647(line=148,offs=39))
                // I1FUNDCL
                // XATS2JS_char_add$sint_2586
                  // FJARGdarg($list(I1BNDcons(I1TNM(66);I0Pvar(c1(5049));$list(@(c1(5049),I1Vtnm(I1TNM(66))))),I1BNDcons(I1TNM(67);I0Pvar(i2(5050));$list(@(i2(5050),I1Vtnm(I1TNM(67)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_add$sint);G1Nlist($list())) // I1CMP:return
                let jsxtnm68 = XATSDAPP(XATS2JS_char_add$sint(jsxtnm64, jsxtnm65))
                jsxtnm69 = jsxtnm68
              } // endlet
              // I1CMP:return:jsxtnm69
              return jsxtnm69
            } // endtimp(char_add$sint(895))
            let jsxtnm71 = XATSDAPP(jsxtnm70(jsxtnm37, XATSINT1(1)))
            let jsxtnm72 = XATSDAPP(helper1_778(jsxtnm35, jsxtnm36, jsxtnm71))
            let jsxtnm73 = XATS000_dl1az(jsxtnm72)
            jsxtnm188 = jsxtnm73
          } else {
            let jsxtnm187 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(doublets.dats)@(947(line=85,offs=1)--982(line=87,offs=24)))
              // I1VALDCL
              let jsxtnm176
              // LCSRCsome1(doublets.dats)@(961(line=87,offs=3)--968(line=87,offs=10))
              // I0Etapq(I0Ecst(strn_fset$at(1032)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2895(line=145,offs=1)--2907(line=145,offs=13))));$list(T2JAG($list())))
              // T1IMPallx(strn_fset$at(1032);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2861(line=150,offs=1)--3016(line=162,offs=4)))
              // T1IMPallx(strn_fset$at(1032)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_fset$at(1032);$list()))))
              let jsxtnm174 = function (arg1, arg2, arg3) { // timp: strn_fset$at(1032)
                let jsxtnm74 = arg1
                let jsxtnm75 = arg2
                let jsxtnm76 = arg3
                // I1CMP:start
                let jsxtnm173 // let
                { // let
                  // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2912(line=155,offs=1)--2938(line=156,offs=18)))
                  // I1VALDCL
                  let jsxtnm83
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2921(line=156,offs=1)--2932(line=156,offs=12))
                  // I0Etapq(I0Ecst(strn_length(1030)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2709(line=131,offs=1)--2720(line=131,offs=12))));$list(T2JAG($list())))
                  // T1IMPallx(strn_length(1030);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1610(line=57,offs=1)--1756(line=69,offs=2)))
                  // T1IMPallx(strn_length(1030)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(1030);$list()))))
                  let jsxtnm81 = function (arg1) { // timp: strn_length(1030)
                    let jsxtnm77 = arg1
                    // I1CMP:start
                    let jsxtnm80 // let
                    { // let
                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1692(line=65,offs=1)--1754(line=68,offs=31)))
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1700(line=66,offs=1)--1754(line=68,offs=31))
                      // I1FUNDCL
                      // XATS2JS_strn_length_1703
                        // FJARGdarg($list(I1BNDcons(I1TNM(78);I0Pvar(cs(5253));$list(@(cs(5253),I1Vtnm(I1TNM(78)))))))
                        // I1CMP:start
                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                      let jsxtnm79 = XATSDAPP(XATS2JS_strn_length(jsxtnm77))
                      jsxtnm80 = jsxtnm79
                    } // endlet
                    // I1CMP:return:jsxtnm80
                    return jsxtnm80
                  } // endtimp(strn_length(1030))
                  let jsxtnm82 = XATSDAPP(jsxtnm81(jsxtnm74))
                  jsxtnm83 = jsxtnm82
                  XATS000_patck(true)
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2947(line=158,offs=1)--2961(line=158,offs=15))
                  // I0Etapq(I0Ecst(strn_make_nfun(1044)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(4632(line=268,offs=1)--4646(line=268,offs=15))));$list(T2JAG($list())))
                  // T1IMPallx(strn_make_nfun(1044);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(4940(line=305,offs=1)--5078(line=313,offs=28)))
                  // T1IMPallx(strn_make_nfun(1044)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_make_nfun(1044);$list()))))
                  let jsxtnm152 = function (arg1, arg2) { // timp: strn_make_nfun(1044)
                    let jsxtnm84 = arg1
                    let jsxtnm85 = arg2
                    // I1CMP:start
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(4987(line=309,offs=1)--5003(line=309,offs=17))
                    // I0Etapq(I0Ecst(strn_fmake_fwork(1079)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn001.sats)@(4102(line=185,offs=1)--4118(line=185,offs=17))));$list(T2JAG($list())))
                    // T1IMPallx(strn_fmake_fwork(1079);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2479(line=126,offs=1)--2661(line=139,offs=2)))
                    // T1IMPallx(strn_fmake_fwork(1079)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_fmake_fwork(1079);$list()))))
                    let jsxtnm90 = function (arg1) { // timp: strn_fmake_fwork(1079)
                      let jsxtnm86 = arg1
                      // I1CMP:start
                      let jsxtnm89 // let
                      { // let
                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2573(line=134,offs=1)--2659(line=138,offs=42)))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2581(line=135,offs=1)--2659(line=138,offs=42))
                        // I1FUNDCL
                        // XATS000_strn_fmake_fwork_2584
                          // FJARGdarg($list(I1BNDcons(I1TNM(87);I0Pvar(fwork(3333));$list(@(fwork(3333),I1Vtnm(I1TNM(87)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_fmake_fwork);G1Nlist($list())) // I1CMP:return
                        let jsxtnm88 = XATSDAPP(XATS000_strn_fmake_fwork(jsxtnm86))
                        jsxtnm89 = jsxtnm88
                      } // endlet
                      // I1CMP:return:jsxtnm89
                      return jsxtnm89
                    } // endtimp(strn_fmake_fwork(1079))
                    let jsxtnm150 = function (arg1) { // lam0(T_LAM(0))
                      let jsxtnm91 = arg1
                      // I1CMP:start
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5021(line=312,offs=1)--5027(line=312,offs=7))
                      // I0Etapq(I0Ecst(nint_foritm$f1un(953)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(3054(line=146,offs=1)--3070(line=146,offs=17))));$list(T2JAG($list())))
                      // T1IMPallx(nint_foritm$f1un(953);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(4008(line=237,offs=1)--4137(line=246,offs=2)))
                      // T1IMPallx(nint_foritm$f1un(953)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_foritm$f1un(953);$list()))))
                      let jsxtnm144 = function (arg1, arg2) { // timp: nint_foritm$f1un(953)
                        let jsxtnm92 = arg1
                        let jsxtnm93 = arg2
                        // I1CMP:start
                        let jsxtnm143 // let
                        { // let
                          // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(4090(line=244,offs=1)--4135(line=245,offs=37)))
                          // I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[451],T2Pcst(ni))))):timp
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(4063(line=242,offs=3)--4074(line=242,offs=14))
                          // I0Etapq(I0Ecst(nint_foritm(951)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(2701(line=122,offs=1)--2712(line=122,offs=12))));$list(T2JAG($list())))
                          // T1IMPallx(nint_foritm(951);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(3945(line=233,offs=1)--3999(line=236,offs=22)))
                          // T1IMPallx(nint_foritm(951)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_foritm(951);$list()))))
                          let jsxtnm141
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(3978(line=236,offs=1)--3989(line=236,offs=12))
                          // I0Etapq(I0Ecst(gseq_foritm(396)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(7078(line=402,offs=1)--7089(line=402,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                          // T1IMPallx(gseq_foritm(396);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6437(line=407,offs=1)--6624(line=424,offs=2)))
                          // T1IMPallx(gseq_foritm(396)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6066],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x0[6067],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_foritm(396);$list(@(xs[1191],T2Pvar(xs[6066])),@(x0[1192],T2Pvar(x0[6067])))))))
                          let jsxtnm140 = function (arg1) { // timp: gseq_foritm(396)
                            let jsxtnm96 = arg1
                            // I1CMP:start
                            let jsxtnm139 // let
                            { // let
                              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6547(line=419,offs=1)--6622(line=423,offs=32)))
                              // I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Pvar(x0[6067]))))):timp
                              let jsxtnm138 // let
                              { // let
                                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6495(line=414,offs=1)--6527(line=416,offs=13)))
                                // I1VALDCL
                                let jsxtnm137
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6503(line=415,offs=1)--6514(line=415,offs=12))
                                // I0Etapq(I0Ecst(gseq_forall(380)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(3721(line=210,offs=1)--3732(line=210,offs=12))));$list(T2JAG($list(T2Pvar(xs[6066]))),T2JAG($list(T2Pvar(x0[6067])))))
                                // T1IMPallx(gseq_forall(380);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(3103(line=172,offs=1)--3149(line=173,offs=38)))
                                // T1IMPallx(gseq_forall(380)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_forall(380);$list(@(xs[1143],T2Pcst(nint)),@(x0[1144],T2Pcst(ni)))))))
                                let jsxtnm135
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(3136(line=173,offs=25)--3147(line=173,offs=36))
                                // I0Etapq(I0Ecst(nint_forall(947)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(1757(line=66,offs=1)--1768(line=66,offs=12))));$list(T2JAG($list())))
                                // T1IMPallx(nint_forall(947);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2796(line=146,offs=1)--2981(line=160,offs=33)))
                                // T1IMPallx(nint_forall(947)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_forall(947);$list()))))
                                let jsxtnm134 = function (arg1) { // timp: nint_forall(947)
                                  let jsxtnm101 = arg1
                                  // I1CMP:start
                                  let jsxtnm133 // let
                                  { // let
                                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2859(line=151,offs=1)--2980(line=160,offs=32)))
                                    // I1FUNDCL
                                    function loop_2862(arg1, arg2)
                                    { // fun
                                      let jsxtnm102 = arg1
                                      let jsxtnm103 = arg2
                                      // I1CMP:start
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2900(line=155,offs=5)--2902(line=155,offs=7))
                                      // I0Etapq(I0Ecst(sint_gte$sint(922)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
                                      // T1IMPallx(sint_gte$sint(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                                      // T1IMPallx(sint_gte$sint(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(922);$list()))))
                                      let jsxtnm110 = function (arg1, arg2) { // timp: sint_gte$sint(922)
                                        let jsxtnm104 = arg1
                                        let jsxtnm105 = arg2
                                        // I1CMP:start
                                        let jsxtnm109 // let
                                        { // let
                                          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                                          // I1FUNDCL
                                          // XATS2JS_sint_gte$sint_2399
                                            // FJARGdarg($list(I1BNDcons(I1TNM(106);I0Pvar(i1(5091));$list(@(i1(5091),I1Vtnm(I1TNM(106))))),I1BNDcons(I1TNM(107);I0Pvar(i2(5092));$list(@(i2(5092),I1Vtnm(I1TNM(107)))))))
                                            // I1CMP:start
                                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                                          let jsxtnm108 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm104, jsxtnm105))
                                          jsxtnm109 = jsxtnm108
                                        } // endlet
                                        // I1CMP:return:jsxtnm109
                                        return jsxtnm109
                                      } // endtimp(sint_gte$sint(922))
                                      let jsxtnm111 = XATSDAPP(jsxtnm110(jsxtnm103, jsxtnm102))
                                      let jsxtnm131 // ift
                                      if (jsxtnm111) // ift
                                      {
                                        jsxtnm131 = XATSBOOL(true)
                                      } else {
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2929(line=159,offs=1)--2940(line=159,offs=12))
                                        // I0Etapq(I0Ecst(forall$test(47)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2003(line=96,offs=1)--2014(line=96,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                                        // T1IMPallx(forall$test(47);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6547(line=419,offs=1)--6622(line=423,offs=32)))
                                        // T1IMPallx(forall$test(47)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6066],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))),@(x0[6067],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[447],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))
                                        let jsxtnm119 = function (arg1) { // timp: forall$test(47)
                                          let jsxtnm112 = arg1
                                          // I1CMP:start
                                          let jsxtnm118 // let
                                          { // let
                                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6582(line=422,offs=1)--6610(line=423,offs=20)))
                                            // I1VALDCL
                                            let jsxtnm117
                                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6591(line=423,offs=1)--6602(line=423,offs=12))
                                            // I0Etapq(I0Ecst(foritm$work(51)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2341(line=124,offs=1)--2352(line=124,offs=12))));$list(T2JAG($list(T2Pvar(x0[6067])))))
                                            // T1IMPallx(foritm$work(51);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(4090(line=244,offs=1)--4135(line=245,offs=37)))
                                            // T1IMPallx(foritm$work(51)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[451],T2Pcst(ni)))))))
                                            let jsxtnm115 = function (arg1) { // timp: foritm$work(51)
                                              let jsxtnm113 = arg1
                                              // I1CMP:start
                                              let jsxtnm114 = XATSDAPP(jsxtnm93(jsxtnm113))
                                              // I1CMP:return:jsxtnm114
                                              return jsxtnm114
                                            } // endtimp(foritm$work(51))
                                            let jsxtnm116 = XATSDAPP(jsxtnm115(jsxtnm112))
                                            jsxtnm117 = jsxtnm116
                                            XATS000_patck(true)
                                            jsxtnm118 = XATSBOOL(true)
                                          } // endlet
                                          // I1CMP:return:jsxtnm118
                                          return jsxtnm118
                                        } // endtimp(forall$test(47))
                                        let jsxtnm120 = XATSDAPP(jsxtnm119(jsxtnm103))
                                        let jsxtnm130 // ift
                                        if (jsxtnm120) // ift
                                        {
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2965(line=160,offs=17)--2966(line=160,offs=18))
                                          // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                                          // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                          // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                                          let jsxtnm127 = function (arg1, arg2) { // timp: sint_add$sint(925)
                                            let jsxtnm121 = arg1
                                            let jsxtnm122 = arg2
                                            // I1CMP:start
                                            let jsxtnm126 // let
                                            { // let
                                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                              // I1FUNDCL
                                              // XATS2JS_sint_add$sint_2778
                                                // FJARGdarg($list(I1BNDcons(I1TNM(123);I0Pvar(i1(5101));$list(@(i1(5101),I1Vtnm(I1TNM(123))))),I1BNDcons(I1TNM(124);I0Pvar(i2(5102));$list(@(i2(5102),I1Vtnm(I1TNM(124)))))))
                                                // I1CMP:start
                                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                              let jsxtnm125 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm121, jsxtnm122))
                                              jsxtnm126 = jsxtnm125
                                            } // endlet
                                            // I1CMP:return:jsxtnm126
                                            return jsxtnm126
                                          } // endtimp(sint_add$sint(925))
                                          let jsxtnm128 = XATSDAPP(jsxtnm127(jsxtnm103, XATSINT1(1)))
                                          let jsxtnm129 = XATSDAPP(loop_2862(jsxtnm102, jsxtnm128))
                                          jsxtnm130 = jsxtnm129
                                        } else {
                                          jsxtnm130 = XATSBOOL(false)
                                        } // end(if)
                                        jsxtnm131 = jsxtnm130
                                      } // end(if)
                                      // I1CMP:return:jsxtnm131
                                      return jsxtnm131
                                    } // endfun(loop_2862)
                                    let jsxtnm132 = XATSDAPP(loop_2862(jsxtnm101, XATSINT1(0)))
                                    jsxtnm133 = jsxtnm132
                                  } // endlet
                                  // I1CMP:return:jsxtnm133
                                  return jsxtnm133
                                } // endtimp(nint_forall(947))
                                jsxtnm135 = jsxtnm134
                                let jsxtnm136 = XATSDAPP(jsxtnm135(jsxtnm96))
                                jsxtnm137 = jsxtnm136
                                XATS000_patck(true)
                                jsxtnm138 = []
                              } // endlet
                              jsxtnm139 = jsxtnm138
                            } // endlet
                            // I1CMP:return:jsxtnm139
                            return jsxtnm139
                          } // endtimp(gseq_foritm(396))
                          jsxtnm141 = jsxtnm140
                          let jsxtnm142 = XATSDAPP(jsxtnm141(jsxtnm92))
                          jsxtnm143 = jsxtnm142
                        } // endlet
                        // I1CMP:return:jsxtnm143
                        return jsxtnm143
                      } // endtimp(nint_foritm$f1un(953))
                      let jsxtnm148 = function (arg1) { // lam0(T_LAM(0))
                        let jsxtnm145 = arg1
                        // I1CMP:start
                        let jsxtnm146 = XATSDAPP(jsxtnm85(jsxtnm145))
                        let jsxtnm147 = XATSDAPP(jsxtnm91(jsxtnm146))
                        // I1CMP:return:jsxtnm147
                        return jsxtnm147
                      } // endfun(lam0)
                      let jsxtnm149 = XATSDAPP(jsxtnm144(jsxtnm84, jsxtnm148))
                      // I1CMP:return:jsxtnm149
                      return jsxtnm149
                    } // endfun(lam0)
                    let jsxtnm151 = XATSDAPP(jsxtnm90(jsxtnm150))
                    // I1CMP:return:jsxtnm151
                    return jsxtnm151
                  } // endtimp(strn_make_nfun(1044))
                  let jsxtnm171 = function (arg1) { // lam0(T_LAM(0))
                    let jsxtnm153 = arg1
                    // I1CMP:start
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2986(line=161,offs=8)--2987(line=161,offs=9))
                    // I0Etapq(I0Ecst(sint_eq$sint(920)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2165(line=91,offs=1)--2177(line=91,offs=13))));$list(T2JAG($list())))
                    // T1IMPallx(sint_eq$sint(920);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1942(line=84,offs=1)--2103(line=96,offs=2)))
                    // T1IMPallx(sint_eq$sint(920)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_eq$sint(920);$list()))))
                    let jsxtnm160 = function (arg1, arg2) { // timp: sint_eq$sint(920)
                      let jsxtnm154 = arg1
                      let jsxtnm155 = arg2
                      // I1CMP:start
                      let jsxtnm159 // let
                      { // let
                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2030(line=92,offs=1)--2101(line=95,offs=39)))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2038(line=93,offs=1)--2101(line=95,offs=39))
                        // I1FUNDCL
                        // XATS2JS_sint_eq$sint_2041
                          // FJARGdarg($list(I1BNDcons(I1TNM(156);I0Pvar(i1(5081));$list(@(i1(5081),I1Vtnm(I1TNM(156))))),I1BNDcons(I1TNM(157);I0Pvar(i2(5082));$list(@(i2(5082),I1Vtnm(I1TNM(157)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_eq$sint);G1Nlist($list())) // I1CMP:return
                        let jsxtnm158 = XATSDAPP(XATS2JS_sint_eq$sint(jsxtnm154, jsxtnm155))
                        jsxtnm159 = jsxtnm158
                      } // endlet
                      // I1CMP:return:jsxtnm159
                      return jsxtnm159
                    } // endtimp(sint_eq$sint(920))
                    let jsxtnm161 = XATSDAPP(jsxtnm160(jsxtnm75, jsxtnm153))
                    let jsxtnm170 // ift
                    if (jsxtnm161) // ift
                    {
                      jsxtnm170 = jsxtnm76
                    } else {
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(3004(line=161,offs=26)--3010(line=161,offs=32))
                      // I0Etapq(I0Ecst(strn_get$at(1031)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2850(line=142,offs=1)--2861(line=142,offs=12))));$list(T2JAG($list())))
                      // T1IMPallx(strn_get$at(1031);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2354(line=122,offs=1)--2541(line=135,offs=2)))
                      // T1IMPallx(strn_get$at(1031)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at(1031);$list()))))
                      let jsxtnm168 = function (arg1, arg2) { // timp: strn_get$at(1031)
                        let jsxtnm162 = arg1
                        let jsxtnm163 = arg2
                        // I1CMP:start
                        let jsxtnm167 // let
                        { // let
                          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2457(line=131,offs=1)--2539(line=134,offs=47)))
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2465(line=132,offs=1)--2539(line=134,offs=47))
                          // I1FUNDCL
                          // XATS2JS_strn_get$at$raw_2468
                            // FJARGdarg($list(I1BNDcons(I1TNM(164);I0Pvar(cs(5265));$list(@(cs(5265),I1Vtnm(I1TNM(164))))),I1BNDcons(I1TNM(165);I0Pvar(i0(5266));$list(@(i0(5266),I1Vtnm(I1TNM(165)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                          let jsxtnm166 = XATSDAPP(XATS2JS_strn_get$at$raw(jsxtnm162, jsxtnm163))
                          jsxtnm167 = jsxtnm166
                        } // endlet
                        // I1CMP:return:jsxtnm167
                        return jsxtnm167
                      } // endtimp(strn_get$at(1031))
                      let jsxtnm169 = XATSDAPP(jsxtnm168(jsxtnm74, jsxtnm153))
                      jsxtnm170 = jsxtnm169
                    } // end(if)
                    // I1CMP:return:jsxtnm170
                    return jsxtnm170
                  } // endfun(lam0)
                  let jsxtnm172 = XATSDAPP(jsxtnm152(jsxtnm83, jsxtnm171))
                  jsxtnm173 = jsxtnm172
                } // endlet
                // I1CMP:return:jsxtnm173
                return jsxtnm173
              } // endtimp(strn_fset$at(1032))
              let jsxtnm175 = XATSDAPP(jsxtnm174(jsxtnm1, jsxtnm35, jsxtnm37))
              jsxtnm176 = jsxtnm175
              XATS000_patck(true)
              // LCSRCsome1(doublets.dats)@(1031(line=90,offs=24)--1032(line=90,offs=25))
              // I0Etapq(I0Ecst(char_add$sint(895)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(4254(line=230,offs=1)--4267(line=230,offs=14))));$list(T2JAG($list())))
              // T1IMPallx(char_add$sint(895);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2485(line=137,offs=1)--2649(line=149,offs=2)))
              // T1IMPallx(char_add$sint(895)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_add$sint(895);$list()))))
              let jsxtnm183 = function (arg1, arg2) { // timp: char_add$sint(895)
                let jsxtnm177 = arg1
                let jsxtnm178 = arg2
                // I1CMP:start
                let jsxtnm182 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2575(line=145,offs=1)--2647(line=148,offs=39)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(2583(line=146,offs=1)--2647(line=148,offs=39))
                  // I1FUNDCL
                  // XATS2JS_char_add$sint_2586
                    // FJARGdarg($list(I1BNDcons(I1TNM(179);I0Pvar(c1(5049));$list(@(c1(5049),I1Vtnm(I1TNM(179))))),I1BNDcons(I1TNM(180);I0Pvar(i2(5050));$list(@(i2(5050),I1Vtnm(I1TNM(180)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_add$sint);G1Nlist($list())) // I1CMP:return
                  let jsxtnm181 = XATSDAPP(XATS2JS_char_add$sint(jsxtnm177, jsxtnm178))
                  jsxtnm182 = jsxtnm181
                } // endlet
                // I1CMP:return:jsxtnm182
                return jsxtnm182
              } // endtimp(char_add$sint(895))
              let jsxtnm184 = XATSDAPP(jsxtnm183(jsxtnm37, XATSINT1(1)))
              let jsxtnm185 = XATSDAPP(helper1_778(jsxtnm35, jsxtnm36, jsxtnm184))
              let jsxtnm186 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm176, jsxtnm185])
              jsxtnm187 = jsxtnm186
            } // endlet
            jsxtnm188 = jsxtnm187
          } // end(if)
          jsxtnm189 = jsxtnm188
        } // end(if)
        // I1CMP:return:jsxtnm189
        return jsxtnm189
      }) // endfun(l1azy)
      // I1CMP:return:jsxtnm190
      return jsxtnm190
    } // endfun(helper1_778)
    let jsxtnm191 = XATSDAPP(helper0_639(XATSINT1(0)))
    jsxtnm192 = jsxtnm191
  } // endlet
  // I1CMP:return:jsxtnm192
  return jsxtnm192
} // endfun(word_adjs$get_538)
// I1Dfundclist(LCSRCsome1(doublets.dats)@(1873(line=154,offs=1)--2151(line=170,offs=2)))
// I1FUNDCL
function dict_wordize_1876(arg1)
{ // fun
  let jsxtnm193 = arg1
  // I1CMP:start
  let jsxtnm418 // let
  { // let
    // LCSRCsome1(doublets.dats)@(1996(line=163,offs=1)--2014(line=163,offs=19))
    // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(c0;S2Ecst(cgtz)))))
    // LCSRCsome1(doublets.dats)@(2015(line=164,offs=1)--2033(line=164,offs=19))
    // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(cs;S2Ecst(strn)))))
    // LCSRCsome1(doublets.dats)@(2034(line=165,offs=1)--2061(line=165,offs=28))
    // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rs;S2Eapps(S2Ecst(list_vt);$list(S2Ecst(cgtz)))))))
    // I1Dvaldclist(LCSRCsome1(doublets.dats)@(2065(line=167,offs=1)--2146(line=168,offs=72)))
    // I1VALDCL
    let jsxtnm374
    // LCSRCsome1(doublets.dats)@(2075(line=168,offs=1)--2108(line=168,offs=34))
    // I0Etapq(I0Ecst(gseq_segmentize0$f1un_lstrm$llist(2290)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1894(line=77,offs=1)--1927(line=77,offs=34))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
    // T1IMPallx(gseq_segmentize0$f1un_lstrm$llist(2290);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2891(line=144,offs=1)--3073(line=157,offs=4)))
    // T1IMPallx(gseq_segmentize0$f1un_lstrm$llist(2290)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8862],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8863],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_segmentize0$f1un_lstrm$llist(2290);$list(@(xs[5624],T2Pvar(xs[8862])),@(x0[5625],T2Pvar(x0[8863])))))))
    let jsxtnm362 = function (arg1, arg2) { // timp: gseq_segmentize0$f1un_lstrm$llist(2290)
      let jsxtnm194 = arg1
      let jsxtnm195 = arg2
      // I1CMP:start
      let jsxtnm361 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2972(line=151,offs=1)--3006(line=152,offs=26)))
        // I1Dimplmnt0(DIMPLone2(segment$delim1(2286);$list(@(x0[5618],T2Pvar(x0[8863]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(3028(line=156,offs=3)--3056(line=156,offs=31))
        // I0Etapq(I0Ecst(gseq_segmentize0_lstrm$llist(2287)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1636(line=61,offs=1)--1664(line=61,offs=29))));$list(T2JAG($list(T2Pvar(xs[8862]))),T2JAG($list(T2Pvar(x0[8863])))))
        // T1IMPallx(gseq_segmentize0_lstrm$llist(2287);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1566(line=52,offs=1)--1795(line=66,offs=4)))
        // T1IMPallx(gseq_segmentize0_lstrm$llist(2287)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8857],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8858],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_segmentize0_lstrm$llist(2287);$list(@(xs[5619],T2Pvar(xs[8857])),@(x0[5620],T2Pvar(x0[8858])))))))
        let jsxtnm359 = function (arg1) { // timp: gseq_segmentize0_lstrm$llist(2287)
          let jsxtnm196 = arg1
          // I1CMP:start
          let jsxtnm358 // let
          { // let
            // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1644(line=59,offs=1)--1669(line=59,offs=26))
            // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rs;S2Eapps(S2Ecst(list_vt);$list(S2Evar(x0[8858])))))))
            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1673(line=61,offs=1)--1722(line=62,offs=41)))
            // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pcst(rs)),@(y0[3807],T2Pcst(rs))))):timp
            // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1731(line=64,offs=1)--1743(line=64,offs=13))
            // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8858]),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8858]),T2Pnone0()))))))
            // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
            // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8588],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8589],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8588])),@(y0[5444],T2Pvar(y0[8589])))))))
            let jsxtnm230 = function (arg1) { // timp: strm_vt_map0(2174)
              let jsxtnm197 = arg1
              // I1CMP:start
              let jsxtnm229 // let
              { // let
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
                // I1FUNDCL
                function auxmain_4114(arg1)
                { // fun
                  let jsxtnm198 = arg1
                  // I1CMP:start
                  let jsxtnm227 = XATS000_l1azy(function (tlaz) { // l1azy
                    // I1CMP:start
                    let jsxtnm199 = XATS000_dl1az(jsxtnm198)
                    let jsxtnm226 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(200);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm199, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                        let jsxtnm200 = jsxtnm199
                        let jsxtnm201 = XATSCAPP("strmcon_vt_nil", [0])
                        jsxtnm226 = jsxtnm201
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(202);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4516)),I0Pvar(xs(4517)))));$list(@(x1(4516),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(202));0)),@(xs(4517),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(202));1)))))
                      if (XATS000_ctgeq(jsxtnm199, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                        let jsxtnm202 = jsxtnm199
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                        // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8588]))),T2JAG($list(T2Pvar(y0[8589])))))
                        // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1673(line=61,offs=1)--1722(line=62,offs=41)))
                        // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8857],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8858],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Papps(T2Pcst(list_vt);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))),@(y0[3807],T2Papps(T2Pcst(list_vt);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))))
                        let jsxtnm222
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1702(line=62,offs=21)--1718(line=62,offs=37))
                        // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(x0[8858])))))
                        // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
                        // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8439],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8439])))))))
                        let jsxtnm221 = function (arg1) { // timp: list_vt_reverse0(2015)
                          let jsxtnm203 = arg1
                          // I1CMP:start
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
                          // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8439])))))
                          // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
                          // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8436],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8436])))))))
                          let jsxtnm218 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                            let jsxtnm204 = arg1
                            let jsxtnm205 = arg2
                            // I1CMP:start
                            let jsxtnm217 // let
                            { // let
                              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                              // I1FUNDCL
                              function loop_6433(arg1, arg2)
                              { // fun
                                let jsxtnm206 = arg1
                                let jsxtnm207 = arg2
                                // I1CMP:start
                                let jsxtnm215 // cas
                                do {
                                  // { // cls
                                  // I1GPTpat(I1BNDcons(I1TNM(208);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                                  if (XATS000_ctgeq(jsxtnm206, XATSCTAG("list_vt_nil",0))) { // gpt
                                    let jsxtnm208 = jsxtnm206
                                    jsxtnm215 = jsxtnm207
                                    break // cls
                                  } // gpt
                                  // } // cls
                                  // { // cls
                                  // I1GPTpat(I1BNDcons(I1TNM(209);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                                  if (XATS000_ctgeq(jsxtnm206, XATSCTAG("list_vt_cons",1))) { // gpt
                                    let jsxtnm209 = jsxtnm206
                                    let jsxtnm214 // let
                                    { // let
                                      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                                      // I1VALDCL
                                      let jsxtnm211
                                      let jsxtnm210 = XATSPCON(jsxtnm206,1)
                                      jsxtnm211 = jsxtnm210
                                      XATS000_patck(true)
                                      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                                      // I1VALDCL
                                      let jsxtnm212
                                      XATS000_assgn(XATSLPCN(1, jsxtnm206), jsxtnm207)
                                      jsxtnm212 = []
                                      XATS000_patck(true)
                                      XATS000_fold(jsxtnm206)
                                      let jsxtnm213 = XATSDAPP(loop_6433(jsxtnm211, jsxtnm206))
                                      jsxtnm214 = jsxtnm213
                                    } // endlet
                                    jsxtnm215 = jsxtnm214
                                    break // cls
                                  } // gpt
                                  // } // cls
                                  XATS000_cfail()
                                } while (false) // end-of(do)
                                // I1CMP:return:jsxtnm215
                                return jsxtnm215
                              } // endfun(loop_6433)
                              let jsxtnm216 = XATSDAPP(loop_6433(jsxtnm204, jsxtnm205))
                              jsxtnm217 = jsxtnm216
                            } // endlet
                            // I1CMP:return:jsxtnm217
                            return jsxtnm217
                          } // endtimp(list_vt_rappend00(2018))
                          let jsxtnm219 = XATSCAPP("list_vt_nil", [0])
                          let jsxtnm220 = XATSDAPP(jsxtnm218(jsxtnm203, jsxtnm219))
                          // I1CMP:return:jsxtnm220
                          return jsxtnm220
                        } // endtimp(list_vt_reverse0(2015))
                        jsxtnm222 = jsxtnm221
                        let jsxtnm223 = XATSDAPP(jsxtnm222(XATSP1CN("strmcon_vt_cons", jsxtnm202[0+1])))
                        let jsxtnm224 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm202[1+1])))
                        let jsxtnm225 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm223, jsxtnm224])
                        jsxtnm226 = jsxtnm225
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm226
                    return jsxtnm226
                  }) // endfun(l1azy)
                  // I1CMP:return:jsxtnm227
                  return jsxtnm227
                } // endfun(auxmain_4114)
                let jsxtnm228 = XATSDAPP(auxmain_4114(jsxtnm197))
                jsxtnm229 = jsxtnm228
              } // endlet
              // I1CMP:return:jsxtnm229
              return jsxtnm229
            } // endtimp(strm_vt_map0(2174))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1749(line=65,offs=1)--1778(line=65,offs=30))
            // I0Etapq(I0Ecst(gseq_segmentize0_lstrm$rllist(2288)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1721(line=67,offs=1)--1750(line=67,offs=30))));$list(T2JAG($list(T2Pvar(xs[8857]))),T2JAG($list(T2Pvar(x0[8858])))))
            // T1IMPallx(gseq_segmentize0_lstrm$rllist(2288);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1870(line=70,offs=1)--2038(line=80,offs=4)))
            // T1IMPallx(gseq_segmentize0_lstrm$rllist(2288)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8859],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8860],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_segmentize0_lstrm$rllist(2288);$list(@(xs[5621],T2Pvar(xs[8859])),@(x0[5622],T2Pvar(x0[8860])))))))
            let jsxtnm355 = function (arg1) { // timp: gseq_segmentize0_lstrm$rllist(2288)
              let jsxtnm231 = arg1
              // I1CMP:start
              let jsxtnm354 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1946(line=76,offs=1)--1980(line=77,offs=26)))
                // I1VALDCL
                let jsxtnm313
                // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1955(line=77,offs=1)--1968(line=77,offs=14))
                // I0Etapq(I0Ecst(gseq_strmize0(1682)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gseq001_vt.sats)@(1810(line=69,offs=1)--1823(line=69,offs=14))));$list(T2JAG($list(T2Pvar(xs[8859]))),T2JAG($list(T2Pvar(x0[8860])))))
                // T1IMPallx(gseq_strmize0(1682);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gxyz000_vt.dats)@(1783(line=71,offs=1)--1861(line=76,offs=28)))
                // T1IMPallx(gseq_strmize0(1682)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8703],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8704],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_strmize0(1682);$list(@(xs[4215],T2Pvar(xs[8703])),@(x0[4216],T2Pvar(x0[8704])))))))
                let jsxtnm311 = function (arg1) { // timp: gseq_strmize0(1682)
                  let jsxtnm232 = arg1
                  // I1CMP:start
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gxyz000_vt.dats)@(1836(line=76,offs=3)--1848(line=76,offs=15))
                  // I0Etapq(I0Ecst(gseq_strmize(372)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(2503(line=122,offs=1)--2515(line=122,offs=13))));$list(T2JAG($list(T2Pvar(xs[8703]))),T2JAG($list(T2Pvar(x0[8704])))))
                  // T1IMPallx(gseq_strmize(372);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(4972(line=311,offs=1)--5020(line=312,offs=40)))
                  // T1IMPallx(gseq_strmize(372)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_strmize(372);$list(@(xs[1109],T2Pcst(strn)),@(x0[1110],T2Pcst(cgtz)))))))
                  let jsxtnm309
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(5008(line=312,offs=28)--5020(line=312,offs=40))
                  // I0Etapq(I0Ecst(strn_strmize(1057)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn001.sats)@(1422(line=42,offs=1)--1434(line=42,offs=13))));$list(T2JAG($list())))
                  // T1IMPallx(strn_strmize(1057);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(4913(line=308,offs=1)--4971(line=310,offs=40)))
                  // T1IMPallx(strn_strmize(1057)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_strmize(1057);$list()))))
                  let jsxtnm308
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(4947(line=310,offs=16)--4959(line=310,offs=28))
                  // I0Etapq(I0Ecst(gasq_strmize(599)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gasq001.sats)@(1638(line=60,offs=1)--1650(line=60,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
                  // T1IMPallx(gasq_strmize(599);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2169(line=98,offs=1)--2394(line=118,offs=4)))
                  // T1IMPallx(gasq_strmize(599)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6460],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[6461],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gasq_strmize(599);$list(@(xs[1876],T2Pvar(xs[6460])),@(x0[1877],T2Pvar(x0[6461])))))))
                  let jsxtnm307 = function (arg1) { // timp: gasq_strmize(599)
                    let jsxtnm233 = arg1
                    // I1CMP:start
                    let jsxtnm306 // let
                    { // let
                      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2226(line=104,offs=1)--2259(line=106,offs=13)))
                      // I1VALDCL
                      let jsxtnm241
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2235(line=105,offs=1)--2246(line=105,offs=12))
                      // I0Etapq(I0Ecst(gasq_length(588)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gasq000.sats)@(1495(line=47,offs=1)--1506(line=47,offs=12))));$list(T2JAG($list(T2Pvar(xs[6460]))),T2JAG($list(T2Pvar(x0[6461])))))
                      // T1IMPallx(gasq_length(588);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2584(line=128,offs=1)--2633(line=130,offs=29)))
                      // T1IMPallx(gasq_length(588)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gasq_length(588);$list(@(xs[1850],T2Pcst(strn)),@(x0[1851],T2Pcst(char)))))))
                      let jsxtnm239
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2620(line=130,offs=16)--2631(line=130,offs=27))
                      // I0Etapq(I0Ecst(strn_length(1030)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2709(line=131,offs=1)--2720(line=131,offs=12))));$list(T2JAG($list())))
                      // T1IMPallx(strn_length(1030);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1610(line=57,offs=1)--1756(line=69,offs=2)))
                      // T1IMPallx(strn_length(1030)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(1030);$list()))))
                      let jsxtnm238 = function (arg1) { // timp: strn_length(1030)
                        let jsxtnm234 = arg1
                        // I1CMP:start
                        let jsxtnm237 // let
                        { // let
                          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1692(line=65,offs=1)--1754(line=68,offs=31)))
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1700(line=66,offs=1)--1754(line=68,offs=31))
                          // I1FUNDCL
                          // XATS2JS_strn_length_1703
                            // FJARGdarg($list(I1BNDcons(I1TNM(235);I0Pvar(cs(5253));$list(@(cs(5253),I1Vtnm(I1TNM(235)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                          let jsxtnm236 = XATSDAPP(XATS2JS_strn_length(jsxtnm234))
                          jsxtnm237 = jsxtnm236
                        } // endlet
                        // I1CMP:return:jsxtnm237
                        return jsxtnm237
                      } // endtimp(strn_length(1030))
                      jsxtnm239 = jsxtnm238
                      let jsxtnm240 = XATSDAPP(jsxtnm239(jsxtnm233))
                      jsxtnm241 = jsxtnm240
                      XATS000_patck(true)
                      let jsxtnm305 // let
                      { // let
                        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2302(line=112,offs=1)--2388(line=116,offs=32)))
                        // I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pcst(ni)),@(y0[484],T2Pvar(x0[6461]))))):timp
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2270(line=109,offs=1)--2284(line=109,offs=15))
                        // I0Etapq(I0Ecst(nint_map_lstrm(961)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(4532(line=235,offs=1)--4546(line=235,offs=15))));$list(T2JAG($list(T2Pvar(x0[6461])))))
                        // T1IMPallx(nint_map_lstrm(961);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5537(line=350,offs=1)--5804(line=371,offs=2)))
                        // T1IMPallx(nint_map_lstrm(961)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(y0[7178],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(nint_map_lstrm(961);$list(@(y0[2843],T2Pvar(y0[7178])))))))
                        let jsxtnm303 = function (arg1) { // timp: nint_map_lstrm(961)
                          let jsxtnm244 = arg1
                          // I1CMP:start
                          let jsxtnm302 // let
                          { // let
                            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5606(line=357,offs=1)--5802(line=370,offs=2)))
                            // I1FUNDCL
                            function auxmain_5609(arg1)
                            { // fun
                              let jsxtnm245 = arg1
                              // I1CMP:start
                              let jsxtnm300 = XATS000_l1azy(function (tlaz) { // l1azy
                                // I1CMP:start
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5660(line=363,offs=5)--5662(line=363,offs=7))
                                // I0Etapq(I0Ecst(sint_gte$sint(922)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
                                // T1IMPallx(sint_gte$sint(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                                // T1IMPallx(sint_gte$sint(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(922);$list()))))
                                let jsxtnm252 = function (arg1, arg2) { // timp: sint_gte$sint(922)
                                  let jsxtnm246 = arg1
                                  let jsxtnm247 = arg2
                                  // I1CMP:start
                                  let jsxtnm251 // let
                                  { // let
                                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                                    // I1FUNDCL
                                    // XATS2JS_sint_gte$sint_2399
                                      // FJARGdarg($list(I1BNDcons(I1TNM(248);I0Pvar(i1(5091));$list(@(i1(5091),I1Vtnm(I1TNM(248))))),I1BNDcons(I1TNM(249);I0Pvar(i2(5092));$list(@(i2(5092),I1Vtnm(I1TNM(249)))))))
                                      // I1CMP:start
                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                                    let jsxtnm250 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm246, jsxtnm247))
                                    jsxtnm251 = jsxtnm250
                                  } // endlet
                                  // I1CMP:return:jsxtnm251
                                  return jsxtnm251
                                } // endtimp(sint_gte$sint(922))
                                let jsxtnm253 = XATSDAPP(jsxtnm252(jsxtnm245, jsxtnm244))
                                let jsxtnm299 // ift
                                if (jsxtnm253) // ift
                                {
                                  let jsxtnm254 = XATSCAPP("strmcon_vt_nil", [0])
                                  jsxtnm299 = jsxtnm254
                                } else {
                                  let jsxtnm298 // let
                                  { // let
                                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5698(line=366,offs=1)--5727(line=367,offs=21)))
                                    // I1VALDCL
                                    let jsxtnm287
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5707(line=367,offs=1)--5715(line=367,offs=9))
                                    // I0Etapq(I0Ecst(map$fopr(75)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(3732(line=232,offs=1)--3740(line=232,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Pvar(y0[7178])))))
                                    // T1IMPallx(map$fopr(75);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2302(line=112,offs=1)--2388(line=116,offs=32)))
                                    // T1IMPallx(map$fopr(75)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6460],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[6461],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pcst(ni)),@(y0[484],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))
                                    let jsxtnm285 = function (arg1) { // timp: map$fopr(75)
                                      let jsxtnm255 = arg1
                                      // I1CMP:start
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2340(line=115,offs=5)--2356(line=115,offs=21))
                                      // I0Etapq(I0Ecst(gasq_cget$at$raw(2348)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4087(line=241,offs=1)--4103(line=241,offs=17))));$list(T2JAG($list(T2Pvar(xs[6460]))),T2JAG($list(T2Pvar(x0[6461])))))
                                      // T1IMPallx(gasq_cget$at$raw(2348);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2236(line=148,offs=1)--2442(line=165,offs=2)))
                                      // T1IMPallx(gasq_cget$at$raw(2348)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5875],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[5876],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gasq_cget$at$raw(2348);$list(@(xs[5695],T2Pxtv([T2Pvar(xs[5875])])),@(x0[5696],T2Pxtv([T2Pvar(x0[5876])])))))))
                                      let jsxtnm283 = function (arg1, arg2) { // timp: gasq_cget$at$raw(2348)
                                        let jsxtnm256 = arg1
                                        let jsxtnm257 = arg2
                                        // I1CMP:start
                                        let jsxtnm282 // let
                                        { // let
                                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2383(line=162,offs=1)--2440(line=164,offs=40)))
                                          // I1VALDCL
                                          let jsxtnm274
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2407(line=164,offs=7)--2423(line=164,offs=23))
                                          // I0Etapq(I0Ecst(gasq_lget$at$raw(2350)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4218(line=252,offs=1)--4234(line=252,offs=17))));$list(T2JAG($list(T2Pvar(xs[5875]))),T2JAG($list(T2Pvar(x0[5876])))))
                                          // T1IMPallx(gasq_lget$at$raw(2350);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(6912(line=452,offs=1)--7056(line=459,offs=4)))
                                          // T1IMPallx(gasq_lget$at$raw(2350)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gasq_lget$at$raw(2350);$list(@(xs[5699],T2Pcst(strn)),@(x0[5700],T2Pcst(cgtz)))))))
                                          let jsxtnm272 = function (arg1, arg2) { // timp: gasq_lget$at$raw(2350)
                                            let jsxtnm258 = arg1
                                            let jsxtnm259 = arg2
                                            // I1CMP:start
                                            let jsxtnm271 // let
                                            { // let
                                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(6973(line=456,offs=1)--7011(line=457,offs=30)))
                                              // I1VALDCL
                                              let jsxtnm268
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(6986(line=457,offs=5)--7001(line=457,offs=20))
                                              // I0Etapq(I0Ecst(strn_get$at$raw(2354)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4484(line=273,offs=1)--4499(line=273,offs=16))));$list(T2JAG($list())))
                                              // T1IMPallx(strn_get$at$raw(2354);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
                                              // T1IMPallx(strn_get$at$raw(2354)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(2354);$list()))))
                                              let jsxtnm266 = function (arg1, arg2) { // timp: strn_get$at$raw(2354)
                                                let jsxtnm260 = arg1
                                                let jsxtnm261 = arg2
                                                // I1CMP:start
                                                let jsxtnm265 // let
                                                { // let
                                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
                                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
                                                  // I1FUNDCL
                                                  // XATS000_strn_get$at$raw_2309
                                                    // FJARGdarg($list(I1BNDcons(I1TNM(262);I0Pvar(cs(3329));$list(@(cs(3329),I1Vtnm(I1TNM(262))))),I1BNDcons(I1TNM(263);I0Pvar(i0(3330));$list(@(i0(3330),I1Vtnm(I1TNM(263)))))))
                                                    // I1CMP:start
                                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                                                  let jsxtnm264 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm260, jsxtnm261))
                                                  jsxtnm265 = jsxtnm264
                                                } // endlet
                                                // I1CMP:return:jsxtnm265
                                                return jsxtnm265
                                              } // endtimp(strn_get$at$raw(2354))
                                              let jsxtnm267 = XATSDAPP(jsxtnm266(jsxtnm258, jsxtnm259))
                                              jsxtnm268 = jsxtnm267
                                              XATS000_patck(true)
                                              // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(7012(line=458,offs=1)--7041(line=458,offs=30)))
                                              // I1VALDCL
                                              // I1BNDcons(I1TNM(270);I0Pvar(pf(2277));$list(@(pf(2277),I1Vtnm(I1TNM(270)))))
                                              // I1CMP:start
                                              // I1LETnew1(I1TNM(269);...)
                                                // I1INSdapp(I1Vcst(owed_t0_make(4));$list())
                                              // I1CMP(ival):I1Vtnm(I1TNM(269)) // I1CMP:return
                                              jsxtnm271 = jsxtnm268
                                            } // endlet
                                            // I1CMP:return:jsxtnm271
                                            return jsxtnm271
                                          } // endtimp(gasq_lget$at$raw(2350))
                                          let jsxtnm273 = XATSDAPP(jsxtnm272(jsxtnm256, jsxtnm257))
                                          jsxtnm274 = jsxtnm273
                                          XATS000_patck(true)
                                          let jsxtnm281 // let
                                          { // let
                                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2302(line=155,offs=1)--2325(line=155,offs=24)))
                                            // I1VALDCL
                                            let jsxtnm278
                                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2311(line=155,offs=10)--2317(line=155,offs=16))
                                            // I0Etapq(I0Ecst(g_copy(24)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1621(line=59,offs=1)--1627(line=59,offs=7))));$list(T2JAG($list(T2Pvar(x0[5876])))))
                                            // T1IMPallx(g_copy(24);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1673(line=62,offs=1)--1713(line=64,offs=22)))
                                            // T1IMPallx(g_copy(24)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5641],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_copy(24);$list(@(a[419],T2Pvar(x0[5641])))))))
                                            let jsxtnm276 = function (arg1) { // timp: g_copy(24)
                                              let jsxtnm275 = arg1
                                              // I1CMP:start
                                              // I1CMP:return:jsxtnm275
                                              return jsxtnm275
                                            } // endtimp(g_copy(24))
                                            let jsxtnm277 = XATSDAPP(jsxtnm276(jsxtnm274))
                                            jsxtnm278 = jsxtnm277
                                            XATS000_patck(true)
                                            // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2329(line=157,offs=1)--2364(line=159,offs=25)))
                                            // I1VALDCL
                                            // I1BNDcons(I1TNM(280);I0Ptup0($list());$list())
                                            // I1CMP:start
                                            // I1LETnew1(I1TNM(279);...)
                                              // I1INSdapp(I1Vcst(owed_vt_return0(6));$list(I1Vnone0(),I1Vtnm(I1TNM(278))))
                                            // I1CMP(ival):I1Vtnm(I1TNM(279)) // I1CMP:return
                                            jsxtnm281 = jsxtnm274
                                          } // endlet
                                          jsxtnm282 = jsxtnm281
                                        } // endlet
                                        // I1CMP:return:jsxtnm282
                                        return jsxtnm282
                                      } // endtimp(gasq_cget$at$raw(2348))
                                      let jsxtnm284 = XATSDAPP(jsxtnm283(jsxtnm233, jsxtnm255))
                                      // I1CMP:return:jsxtnm284
                                      return jsxtnm284
                                    } // endtimp(map$fopr(75))
                                    let jsxtnm286 = XATSDAPP(jsxtnm285(jsxtnm245))
                                    jsxtnm287 = jsxtnm286
                                    XATS000_patck(true)
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5766(line=368,offs=31)--5767(line=368,offs=32))
                                    // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                                    // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                    // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                                    let jsxtnm294 = function (arg1, arg2) { // timp: sint_add$sint(925)
                                      let jsxtnm288 = arg1
                                      let jsxtnm289 = arg2
                                      // I1CMP:start
                                      let jsxtnm293 // let
                                      { // let
                                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                        // I1FUNDCL
                                        // XATS2JS_sint_add$sint_2778
                                          // FJARGdarg($list(I1BNDcons(I1TNM(290);I0Pvar(i1(5101));$list(@(i1(5101),I1Vtnm(I1TNM(290))))),I1BNDcons(I1TNM(291);I0Pvar(i2(5102));$list(@(i2(5102),I1Vtnm(I1TNM(291)))))))
                                          // I1CMP:start
                                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                        let jsxtnm292 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm288, jsxtnm289))
                                        jsxtnm293 = jsxtnm292
                                      } // endlet
                                      // I1CMP:return:jsxtnm293
                                      return jsxtnm293
                                    } // endtimp(sint_add$sint(925))
                                    let jsxtnm295 = XATSDAPP(jsxtnm294(jsxtnm245, XATSINT1(1)))
                                    let jsxtnm296 = XATSDAPP(auxmain_5609(jsxtnm295))
                                    let jsxtnm297 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm287, jsxtnm296])
                                    jsxtnm298 = jsxtnm297
                                  } // endlet
                                  jsxtnm299 = jsxtnm298
                                } // end(if)
                                // I1CMP:return:jsxtnm299
                                return jsxtnm299
                              }) // endfun(l1azy)
                              // I1CMP:return:jsxtnm300
                              return jsxtnm300
                            } // endfun(auxmain_5609)
                            let jsxtnm301 = XATSDAPP(auxmain_5609(XATSINT1(0)))
                            jsxtnm302 = jsxtnm301
                          } // endlet
                          // I1CMP:return:jsxtnm302
                          return jsxtnm302
                        } // endtimp(nint_map_lstrm(961))
                        let jsxtnm304 = XATSDAPP(jsxtnm303(jsxtnm241))
                        jsxtnm305 = jsxtnm304
                      } // endlet
                      jsxtnm306 = jsxtnm305
                    } // endlet
                    // I1CMP:return:jsxtnm306
                    return jsxtnm306
                  } // endtimp(gasq_strmize(599))
                  jsxtnm308 = jsxtnm307
                  jsxtnm309 = jsxtnm308
                  let jsxtnm310 = XATSDAPP(jsxtnm309(jsxtnm232))
                  // I1CMP:return:jsxtnm310
                  return jsxtnm310
                } // endtimp(gseq_strmize0(1682))
                let jsxtnm312 = XATSDAPP(jsxtnm311(jsxtnm231))
                jsxtnm313 = jsxtnm312
                XATS000_patck(true)
                // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1993(line=79,offs=3)--2025(line=79,offs=35))
                // I0Etapq(I0Ecst(strm_vt_segmentize0_lstrm$rllist(2289)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1796(line=71,offs=1)--1828(line=71,offs=33))));$list(T2JAG($list(T2Pvar(x0[8860])))))
                // T1IMPallx(strm_vt_segmentize0_lstrm$rllist(2289);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2114(line=84,offs=1)--2812(line=140,offs=2)))
                // T1IMPallx(strm_vt_segmentize0_lstrm$rllist(2289)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8861],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_segmentize0_lstrm$rllist(2289);$list(@(x0[5623],T2Pvar(x0[8861])))))))
                let jsxtnm352 = function (arg1) { // timp: strm_vt_segmentize0_lstrm$rllist(2289)
                  let jsxtnm314 = arg1
                  // I1CMP:start
                  let jsxtnm351 // let
                  { // let
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2207(line=92,offs=1)--2232(line=92,offs=26))
                    // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(xs;S2Eapps(S2Ecst(strm_vt);$list(S2Evar(x0[8861])))))))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2233(line=93,offs=1)--2258(line=93,offs=26))
                    // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rs;S2Eapps(S2Ecst(list_vt);$list(S2Evar(x0[8861])))))))
                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2262(line=95,offs=1)--2770(line=138,offs=2)))
                    // I1FUNDCL
                    function auxmain_2265(arg1)
                    { // fun
                      let jsxtnm315 = arg1
                      // I1CMP:start
                      let jsxtnm318 = XATS000_l1azy(function (tlaz) { // l1azy
                        // I1CMP:start
                        let jsxtnm316 = XATSCAPP("list_vt_nil", [0])
                        let jsxtnm317 = XATSDAPP(auxloop_2339(jsxtnm315, jsxtnm316))
                        // I1CMP:return:jsxtnm317
                        return jsxtnm317
                      }) // endfun(l1azy)
                      // I1CMP:return:jsxtnm318
                      return jsxtnm318
                    } // endfun(auxmain_2265)
                    // I1FUNDCL
                    function auxloop_2339(arg1, arg2)
                    { // fun
                      let jsxtnm319 = arg1
                      let jsxtnm320 = arg2
                      // I1CMP:start
                      let jsxtnm321 = XATS000_dl1az(jsxtnm319)
                      let jsxtnm349 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(322);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm321, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                          let jsxtnm322 = jsxtnm321
                          let jsxtnm334 // cas
                          do {
                            // { // cls
                            // I1GPTpat(I1BNDcons(I1TNM(323);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                            if (XATS000_ctgeq(jsxtnm320, XATSCTAG("list_vt_nil",0))) { // gpt
                              let jsxtnm323 = jsxtnm320
                              let jsxtnm324 = XATSCAPP("strmcon_vt_nil", [0])
                              jsxtnm334 = jsxtnm324
                              break // cls
                            } // gpt
                            // } // cls
                            // { // cls
                            // I1GPTpat(I1BNDcons(I1TNM(325);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
                            if (XATS000_ctgeq(jsxtnm320, XATSCTAG("list_vt_cons",1))) { // gpt
                              let jsxtnm325 = jsxtnm320
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2525(line=120,offs=3)--2540(line=120,offs=18))
                              // I0Etapq(I0Ecst(strmcon_vt_sing(2119)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1656(line=62,offs=1)--1671(line=62,offs=16))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8861]),T2Pnone0()))))))
                              // T1IMPallx(strmcon_vt_sing(2119);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1849(line=78,offs=1)--1928(line=83,offs=21)))
                              // T1IMPallx(strmcon_vt_sing(2119)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8540],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strmcon_vt_sing(2119);$list(@(x0[5376],T2Pvar(a[8540])))))))
                              let jsxtnm332 = function (arg1) { // timp: strmcon_vt_sing(2119)
                                let jsxtnm326 = arg1
                                // I1CMP:start
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1913(line=83,offs=6)--1924(line=83,offs=17))
                                // I0Etapq(I0Ecst(strm_vt_nil(2115)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1422(line=42,offs=1)--1433(line=42,offs=12))));$list(T2JAG($list())))
                                // T1IMPallx(strm_vt_nil(2115);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1708(line=66,offs=1)--1771(line=70,offs=21)))
                                // T1IMPallx(strm_vt_nil(2115)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strm_vt_nil(2115);$list()))))
                                let jsxtnm329 = function () { // timp: strm_vt_nil(2115)
                                  // I1CMP:start
                                  let jsxtnm328 = XATS000_l1azy(function (tlaz) { // l1azy
                                    // I1CMP:start
                                    let jsxtnm327 = XATSCAPP("strmcon_vt_nil", [0])
                                    // I1CMP:return:jsxtnm327
                                    return jsxtnm327
                                  }) // endfun(l1azy)
                                  // I1CMP:return:jsxtnm328
                                  return jsxtnm328
                                } // endtimp(strm_vt_nil(2115))
                                let jsxtnm330 = XATSDAPP(jsxtnm329())
                                let jsxtnm331 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm326, jsxtnm330])
                                // I1CMP:return:jsxtnm331
                                return jsxtnm331
                              } // endtimp(strmcon_vt_sing(2119))
                              let jsxtnm333 = XATSDAPP(jsxtnm332(jsxtnm320))
                              jsxtnm334 = jsxtnm333
                              break // cls
                            } // gpt
                            // } // cls
                            XATS000_cfail()
                          } while (false) // end-of(do)
                          jsxtnm349 = jsxtnm334
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(335);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4873)),I0Pvar(xs(4874)))));$list(@(x1(4873),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(335));0)),@(xs(4874),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(335));1)))))
                        if (XATS000_ctgeq(jsxtnm321, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                          let jsxtnm335 = jsxtnm321
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2598(line=127,offs=1)--2612(line=127,offs=15))
                          // I0Etapq(I0Ecst(segment$delim1(2286)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1504(line=49,offs=1)--1518(line=49,offs=15))));$list(T2JAG($list(T2Pvar(x0[8861])))))
                          // T1IMPallx(segment$delim1(2286);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2972(line=151,offs=1)--3006(line=152,offs=26)))
                          // T1IMPallx(segment$delim1(2286)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8862],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8863],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(segment$delim1(2286);$list(@(x0[5618],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))
                          let jsxtnm336
                          jsxtnm336 = jsxtnm195
                          let jsxtnm337 = XATSDAPP(jsxtnm336(XATSP1CN("strmcon_vt_cons", jsxtnm335[0+1])))
                          let jsxtnm348 // ift
                          if (jsxtnm337) // ift
                          {
                            let jsxtnm345 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2630(line=130,offs=1)--2653(line=131,offs=15)))
                              // I1VALDCL
                              let jsxtnm342
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2639(line=131,offs=1)--2645(line=131,offs=7))
                              // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1591(line=56,offs=1)--1597(line=56,offs=7))));$list(T2JAG($list(T2Pvar(x0[8861])))))
                              // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
                              // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5640],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[418],T2Pvar(x0[5640])))))))
                              let jsxtnm340 = function (arg1) { // timp: g_free(23)
                                let jsxtnm338 = arg1
                                // I1CMP:start
                                let jsxtnm339 = XATSTUP0([])
                                // I1CMP:return:jsxtnm339
                                return jsxtnm339
                              } // endtimp(g_free(23))
                              let jsxtnm341 = XATSDAPP(jsxtnm340(XATSP1CN("strmcon_vt_cons", jsxtnm335[0+1])))
                              jsxtnm342 = jsxtnm341
                              XATS000_patck(true)
                              let jsxtnm343 = XATSDAPP(auxmain_2265(XATSP1CN("strmcon_vt_cons", jsxtnm335[1+1])))
                              let jsxtnm344 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm320, jsxtnm343])
                              jsxtnm345 = jsxtnm344
                            } // endlet
                            jsxtnm348 = jsxtnm345
                          } else {
                            let jsxtnm346 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm335[0+1]), jsxtnm320])
                            let jsxtnm347 = XATSDAPP(auxloop_2339(XATSP1CN("strmcon_vt_cons", jsxtnm335[1+1]), jsxtnm346))
                            jsxtnm348 = jsxtnm347
                          } // end(if)
                          jsxtnm349 = jsxtnm348
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm349
                      return jsxtnm349
                    } // endfun(auxloop_2339)
                    let jsxtnm350 = XATSDAPP(auxmain_2265(jsxtnm314))
                    jsxtnm351 = jsxtnm350
                  } // endlet
                  // I1CMP:return:jsxtnm351
                  return jsxtnm351
                } // endtimp(strm_vt_segmentize0_lstrm$rllist(2289))
                let jsxtnm353 = XATSDAPP(jsxtnm352(jsxtnm313))
                jsxtnm354 = jsxtnm353
              } // endlet
              // I1CMP:return:jsxtnm354
              return jsxtnm354
            } // endtimp(gseq_segmentize0_lstrm$rllist(2288))
            let jsxtnm356 = XATSDAPP(jsxtnm355(jsxtnm196))
            let jsxtnm357 = XATSDAPP(jsxtnm230(jsxtnm356))
            jsxtnm358 = jsxtnm357
          } // endlet
          // I1CMP:return:jsxtnm358
          return jsxtnm358
        } // endtimp(gseq_segmentize0_lstrm$llist(2287))
        let jsxtnm360 = XATSDAPP(jsxtnm359(jsxtnm194))
        jsxtnm361 = jsxtnm360
      } // endlet
      // I1CMP:return:jsxtnm361
      return jsxtnm361
    } // endtimp(gseq_segmentize0$f1un_lstrm$llist(2290))
    let jsxtnm372 = function (arg1) { // lam0(T_LAM(0))
      let jsxtnm363 = arg1
      // I1CMP:start
      // LCSRCsome1(doublets.dats)@(2138(line=168,offs=64)--2139(line=168,offs=65))
      // I0Etapq(I0Ecst(char_eq(888)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3373(line=176,offs=1)--3380(line=176,offs=8))));$list(T2JAG($list())))
      // T1IMPallx(char_eq(888);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1772(line=72,offs=1)--1916(line=84,offs=2)))
      // T1IMPallx(char_eq(888)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_eq(888);$list()))))
      let jsxtnm370 = function (arg1, arg2) { // timp: char_eq(888)
        let jsxtnm364 = arg1
        let jsxtnm365 = arg2
        // I1CMP:start
        let jsxtnm369 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1848(line=80,offs=1)--1914(line=83,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1856(line=81,offs=1)--1914(line=83,offs=39))
          // I1FUNDCL
          // XATS2JS_char_eq_1859
            // FJARGdarg($list(I1BNDcons(I1TNM(366);I0Pvar(c1(5029));$list(@(c1(5029),I1Vtnm(I1TNM(366))))),I1BNDcons(I1TNM(367);I0Pvar(c2(5030));$list(@(c2(5030),I1Vtnm(I1TNM(367)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_eq);G1Nlist($list())) // I1CMP:return
          let jsxtnm368 = XATSDAPP(XATS2JS_char_eq(jsxtnm364, jsxtnm365))
          jsxtnm369 = jsxtnm368
        } // endlet
        // I1CMP:return:jsxtnm369
        return jsxtnm369
      } // endtimp(char_eq(888))
      let jsxtnm371 = XATSDAPP(jsxtnm370(jsxtnm363, XATSCHR2('\n')))
      // I1CMP:return:jsxtnm371
      return jsxtnm371
    } // endfun(lam0)
    let jsxtnm373 = XATSDAPP(jsxtnm362(jsxtnm193, jsxtnm372))
    jsxtnm374 = jsxtnm373
    XATS000_patck(true)
    // LCSRCsome1(doublets.dats)@(1924(line=158,offs=1)--1941(line=158,offs=18))
    // I0Etapq(I0Ecst(strm_vt_map0$f1un(2178)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5605(line=289,offs=1)--5622(line=289,offs=18))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
    // T1IMPallx(strm_vt_map0$f1un(2178);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4356(line=239,offs=1)--4501(line=250,offs=2)))
    // T1IMPallx(strm_vt_map0$f1un(2178)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8590],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8591],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0$f1un(2178);$list(@(x0[5453],T2Pxtv([T2Pvar(x0[8590])])),@(y0[5454],T2Pxtv([T2Pvar(y0[8591])])))))))
    let jsxtnm394 = function (arg1, arg2) { // timp: strm_vt_map0$f1un(2178)
      let jsxtnm375 = arg1
      let jsxtnm376 = arg2
      // I1CMP:start
      let jsxtnm393 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4454(line=248,offs=1)--4493(line=249,offs=31)))
        // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pvar(x0[8590])),@(y0[3807],T2Pvar(y0[8591]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4420(line=245,offs=1)--4432(line=245,offs=13))
        // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Pvar(x0[8590]))),T2JAG($list(T2Pvar(y0[8591])))))
        // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
        // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8588],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8589],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8588])),@(y0[5444],T2Pvar(y0[8589])))))))
        let jsxtnm391 = function (arg1) { // timp: strm_vt_map0(2174)
          let jsxtnm377 = arg1
          // I1CMP:start
          let jsxtnm390 // let
          { // let
            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
            // I1FUNDCL
            function auxmain_4114(arg1)
            { // fun
              let jsxtnm378 = arg1
              // I1CMP:start
              let jsxtnm388 = XATS000_l1azy(function (tlaz) { // l1azy
                // I1CMP:start
                let jsxtnm379 = XATS000_dl1az(jsxtnm378)
                let jsxtnm387 // cas
                do {
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(380);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                  if (XATS000_ctgeq(jsxtnm379, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                    let jsxtnm380 = jsxtnm379
                    let jsxtnm381 = XATSCAPP("strmcon_vt_nil", [0])
                    jsxtnm387 = jsxtnm381
                    break // cls
                  } // gpt
                  // } // cls
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(382);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4516)),I0Pvar(xs(4517)))));$list(@(x1(4516),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(382));0)),@(xs(4517),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(382));1)))))
                  if (XATS000_ctgeq(jsxtnm379, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                    let jsxtnm382 = jsxtnm379
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                    // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8588]))),T2JAG($list(T2Pvar(y0[8589])))))
                    // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4454(line=248,offs=1)--4493(line=249,offs=31)))
                    // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8590],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8591],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[3807],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                    let jsxtnm383
                    jsxtnm383 = jsxtnm376
                    let jsxtnm384 = XATSDAPP(jsxtnm383(XATSP1CN("strmcon_vt_cons", jsxtnm382[0+1])))
                    let jsxtnm385 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm382[1+1])))
                    let jsxtnm386 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm384, jsxtnm385])
                    jsxtnm387 = jsxtnm386
                    break // cls
                  } // gpt
                  // } // cls
                  XATS000_cfail()
                } while (false) // end-of(do)
                // I1CMP:return:jsxtnm387
                return jsxtnm387
              }) // endfun(l1azy)
              // I1CMP:return:jsxtnm388
              return jsxtnm388
            } // endfun(auxmain_4114)
            let jsxtnm389 = XATSDAPP(auxmain_4114(jsxtnm377))
            jsxtnm390 = jsxtnm389
          } // endlet
          // I1CMP:return:jsxtnm390
          return jsxtnm390
        } // endtimp(strm_vt_map0(2174))
        let jsxtnm392 = XATSDAPP(jsxtnm391(jsxtnm375))
        jsxtnm393 = jsxtnm392
      } // endlet
      // I1CMP:return:jsxtnm393
      return jsxtnm393
    } // endtimp(strm_vt_map0$f1un(2178))
    let jsxtnm416 = function (arg1) { // lam0(T_LAM(0))
      let jsxtnm395 = arg1
      // I1CMP:start
      // LCSRCsome1(doublets.dats)@(1963(line=159,offs=18)--1978(line=159,offs=33))
      // I0Etapq(I0Ecst(strn_make_llist(1048)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(5050(line=299,offs=1)--5065(line=299,offs=16))));$list(T2JAG($list())))
      // T1IMPallx(strn_make_llist(1048);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5741(line=361,offs=1)--6020(line=385,offs=4)))
      // T1IMPallx(strn_make_llist(1048)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_make_llist(1048);$list()))))
      let jsxtnm414 = function (arg1) { // timp: strn_make_llist(1048)
        let jsxtnm396 = arg1
        // I1CMP:start
        let jsxtnm413 // let
        { // let
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5794(line=367,offs=1)--5822(line=368,offs=20))
          // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(env;S2Eapps(S2Ecst(list_vt);$list(S2Ecst(cgtz)))))))
          // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5826(line=370,offs=1)--5962(line=379,offs=29)))
          // I1FUNDCL
          function fwork_5829(arg1, arg2)
          { // fun
            let jsxtnm397 = arg1
            let jsxtnm398 = arg2
            // I1CMP:start
            let jsxtnm404 // cas
            do {
              // { // cls
              // I1GPTpat(I1BNDcons(I1TNM(399);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
              if (XATS000_ctgeq(jsxtnm397, XATSCTAG("list_vt_nil",0))) { // gpt
                let jsxtnm399 = jsxtnm397
                let jsxtnm400 = XATSTUP0([])
                jsxtnm404 = jsxtnm400
                break // cls
              } // gpt
              // } // cls
              // { // cls
              // I1GPTpat(I1BNDcons(I1TNM(401);I0Pfree(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(c1(2258)),I0Pvar(cs(2259)))));$list(@(c1(2258),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(401));0)),@(cs(2259),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(401));1)))))
              if (XATS000_ctgeq(jsxtnm397, XATSCTAG("list_vt_cons",1))) { // gpt
                let jsxtnm401 = jsxtnm397
                let jsxtnm402 = XATSDAPP(jsxtnm398(XATSP1CN("list_vt_cons", jsxtnm401[0+1])))
                let jsxtnm403 = XATSDAPP(fwork_5829(XATSP1CN("list_vt_cons", jsxtnm401[1+1]), jsxtnm398))
                jsxtnm404 = jsxtnm403
                break // cls
              } // gpt
              // } // cls
              XATS000_cfail()
            } while (false) // end-of(do)
            // I1CMP:return:jsxtnm404
            return jsxtnm404
          } // endfun(fwork_5829)
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5979(line=384,offs=1)--5999(line=384,offs=21))
          // I0Etapq(I0Ecst(strn_fmake_env$fwork(1080)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn001.sats)@(4184(line=190,offs=1)--4204(line=190,offs=21))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))))))
          // T1IMPallx(strn_fmake_env$fwork(1080);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2764(line=149,offs=1)--2980(line=162,offs=2)))
          // T1IMPallx(strn_fmake_env$fwork(1080)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(env[7670],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strn_fmake_env$fwork(1080);$list(@(env[2886],T2Pvar(env[7670])))))))
          let jsxtnm411 = function (arg1, arg2) { // timp: strn_fmake_env$fwork(1080)
            let jsxtnm405 = arg1
            let jsxtnm406 = arg2
            // I1CMP:start
            let jsxtnm410 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2875(line=157,offs=1)--2978(line=161,offs=52)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2883(line=158,offs=1)--2978(line=161,offs=52))
              // I1FUNDCL
              // XATS000_strn_fmake_env$fwork_2886
                // FJARGdarg($list(I1BNDcons(I1TNM(407);I0Pvar(env(3337));$list(@(env(3337),I1Vtnm(I1TNM(407))))),I1BNDcons(I1TNM(408);I0Pvar(fwork(3338));$list(@(fwork(3338),I1Vtnm(I1TNM(408)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_fmake_env$fwork);G1Nlist($list())) // I1CMP:return
              let jsxtnm409 = XATSDAPP(XATS000_strn_fmake_env$fwork(jsxtnm405, jsxtnm406))
              jsxtnm410 = jsxtnm409
            } // endlet
            // I1CMP:return:jsxtnm410
            return jsxtnm410
          } // endtimp(strn_fmake_env$fwork(1080))
          let jsxtnm412 = XATSDAPP(jsxtnm411(jsxtnm396, fwork_5829))
          jsxtnm413 = jsxtnm412
        } // endlet
        // I1CMP:return:jsxtnm413
        return jsxtnm413
      } // endtimp(strn_make_llist(1048))
      let jsxtnm415 = XATSDAPP(jsxtnm414(jsxtnm395))
      // I1CMP:return:jsxtnm415
      return jsxtnm415
    } // endfun(lam0)
    let jsxtnm417 = XATSDAPP(jsxtnm394(jsxtnm374, jsxtnm416))
    jsxtnm418 = jsxtnm417
  } // endlet
  // I1CMP:return:jsxtnm418
  return jsxtnm418
} // endfun(dict_wordize_1876)
// I1Dextern(LCSRCsome1(doublets.dats)@(2236(line=175,offs=1)--2328(line=181,offs=24)))
// LCSRCsome1(doublets.dats)@(2244(line=176,offs=1)--2328(line=181,offs=24))
// I1FUNDCL
// doublets_solve_2247
  // FJARGdarg($list(I1BNDcons(I1TNM(419);I0Pvar(wd1(5400));$list(@(wd1(5400),I1Vtnm(I1TNM(419))))),I1BNDcons(I1TNM(420);I0Pvar(wd2(5401));$list(@(wd2(5401),I1Vtnm(I1TNM(420))))),I1BNDcons(I1TNM(421);I0Pvar(dct(5402));$list(@(dct(5402),I1Vtnm(I1TNM(421)))))))
// I1Dimplmnt0(LCSRCsome1(doublets.dats)@(2332(line=183,offs=1)--3267(line=265,offs=4)))
let doublets_solve_2247 = function (arg1, arg2, arg3) { // impl
  let jsxtnm422 = arg1
  let jsxtnm423 = arg2
  let jsxtnm424 = arg3
  // I1CMP:start
  let jsxtnm882 // let
  { // let
    // LCSRCsome1(doublets.dats)@(2381(line=188,offs=1)--2407(line=189,offs=18))
    // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(node;S2Eapps(S2Ecst(list);$list(S2Ecst(strn)))))))
    // I1Dfundclist(LCSRCsome1(doublets.dats)@(2411(line=191,offs=1)--2470(line=195,offs=24)))
    // I1FUNDCL
    function word_test_2414(arg1)
    { // fun
      let jsxtnm425 = arg1
      // I1CMP:start
      // LCSRCsome1(doublets.dats)@(2447(line=195,offs=1)--2459(line=195,offs=13))
      // I0Etapq(I0Ecst(asrt_memberq(1159)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/asrt000.sats)@(2586(line=126,offs=1)--2598(line=126,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
      // T1IMPallx(asrt_memberq(1159);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(3202(line=196,offs=1)--3331(line=205,offs=2)))
      // T1IMPallx(asrt_memberq(1159)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7289],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(asrt_memberq(1159);$list(@(x0[3073],T2Pvar(x0[7289])))))))
      let jsxtnm535 = function (arg1, arg2) { // timp: asrt_memberq(1159)
        let jsxtnm426 = arg1
        let jsxtnm427 = arg2
        // I1CMP:start
        let jsxtnm534 // let
        { // let
          // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(3278(line=203,offs=1)--3329(line=204,offs=43)))
          // I1Dimplmnt0(DIMPLone2(exists$tcmp1(1414);$list(@(x0[3719],T2Pvar(x0[7289]))))):timp
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(3249(line=201,offs=1)--3260(line=201,offs=12))
          // I0Etapq(I0Ecst(asrt_exists(1157)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/asrt000.sats)@(2166(line=97,offs=1)--2177(line=97,offs=12))));$list(T2JAG($list(T2Pvar(x0[7289])))))
          // T1IMPallx(asrt_exists(1157);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2120(line=100,offs=1)--2589(line=144,offs=2)))
          // T1IMPallx(asrt_exists(1157)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7287],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(asrt_exists(1157);$list(@(x0[3070],T2Pvar(x0[7287])))))))
          let jsxtnm532 = function (arg1) { // timp: asrt_exists(1157)
            let jsxtnm430 = arg1
            // I1CMP:start
            let jsxtnm531 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2193(line=108,offs=1)--2215(line=109,offs=14)))
              // I1VALDCL
              let jsxtnm432
              let jsxtnm431 = XATSCAST("asrt_decd_1701", [jsxtnm430])
              jsxtnm432 = jsxtnm431
              XATS000_patck(true)
              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2216(line=110,offs=1)--2244(line=111,offs=20)))
              // I1VALDCL
              let jsxtnm439
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2225(line=111,offs=1)--2236(line=111,offs=12))
              // I0Etapq(I0Ecst(a1sz_length(1114)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axsz000.sats)@(3102(line=157,offs=1)--3113(line=157,offs=12))));$list(T2JAG($list(T2Pvar(x0[7287])))))
              // T1IMPallx(a1sz_length(1114);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats)@(1594(line=50,offs=1)--1768(line=64,offs=2)))
              // T1IMPallx(a1sz_length(1114)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8910],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a1sz_length(1114);$list(@(a[3003],T2Pvar(a[8910])))))))
              let jsxtnm437 = function (arg1) { // timp: a1sz_length(1114)
                let jsxtnm433 = arg1
                // I1CMP:start
                let jsxtnm436 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats)@(1684(line=58,offs=1)--1766(line=63,offs=37)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats)@(1692(line=59,offs=1)--1766(line=63,offs=37))
                  // I1FUNDCL
                  // XATS2JS_a1sz_length_1695
                    // FJARGdarg($list(I1BNDcons(I1TNM(434);I0Pvar(A(5351));$list(@(A(5351),I1Vtnm(I1TNM(434)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a1sz_length);G1Nlist($list())) // I1CMP:return
                  let jsxtnm435 = XATSDAPP(XATS2JS_a1sz_length(jsxtnm433))
                  jsxtnm436 = jsxtnm435
                } // endlet
                // I1CMP:return:jsxtnm436
                return jsxtnm436
              } // endtimp(a1sz_length(1114))
              let jsxtnm438 = XATSDAPP(jsxtnm437(jsxtnm432))
              jsxtnm439 = jsxtnm438
              XATS000_patck(true)
              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2248(line=113,offs=1)--2555(line=142,offs=4)))
              // I1FUNDCL
              function loop_2251(arg1, arg2)
              { // fun
                let jsxtnm440 = arg1
                let jsxtnm441 = arg2
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2295(line=118,offs=5)--2297(line=118,offs=7))
                // I0Etapq(I0Ecst(sint_gte$sint(922)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
                // T1IMPallx(sint_gte$sint(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                // T1IMPallx(sint_gte$sint(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(922);$list()))))
                let jsxtnm448 = function (arg1, arg2) { // timp: sint_gte$sint(922)
                  let jsxtnm442 = arg1
                  let jsxtnm443 = arg2
                  // I1CMP:start
                  let jsxtnm447 // let
                  { // let
                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                    // I1FUNDCL
                    // XATS2JS_sint_gte$sint_2399
                      // FJARGdarg($list(I1BNDcons(I1TNM(444);I0Pvar(i1(5091));$list(@(i1(5091),I1Vtnm(I1TNM(444))))),I1BNDcons(I1TNM(445);I0Pvar(i2(5092));$list(@(i2(5092),I1Vtnm(I1TNM(445)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                    let jsxtnm446 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm442, jsxtnm443))
                    jsxtnm447 = jsxtnm446
                  } // endlet
                  // I1CMP:return:jsxtnm447
                  return jsxtnm447
                } // endtimp(sint_gte$sint(922))
                let jsxtnm449 = XATSDAPP(jsxtnm448(jsxtnm440, jsxtnm441))
                let jsxtnm529 // ift
                if (jsxtnm449) // ift
                {
                  jsxtnm529 = XATSBOOL(false)
                } else {
                  let jsxtnm528 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2322(line=121,offs=1)--2348(line=123,offs=16)))
                    // I1VALDCL
                    let jsxtnm474
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2335(line=123,offs=3)--2336(line=123,offs=4))
                    // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                    // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                    // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                    let jsxtnm456 = function (arg1, arg2) { // timp: sint_add$sint(925)
                      let jsxtnm450 = arg1
                      let jsxtnm451 = arg2
                      // I1CMP:start
                      let jsxtnm455 // let
                      { // let
                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                        // I1FUNDCL
                        // XATS2JS_sint_add$sint_2778
                          // FJARGdarg($list(I1BNDcons(I1TNM(452);I0Pvar(i1(5101));$list(@(i1(5101),I1Vtnm(I1TNM(452))))),I1BNDcons(I1TNM(453);I0Pvar(i2(5102));$list(@(i2(5102),I1Vtnm(I1TNM(453)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                        let jsxtnm454 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm450, jsxtnm451))
                        jsxtnm455 = jsxtnm454
                      } // endlet
                      // I1CMP:return:jsxtnm455
                      return jsxtnm455
                    } // endtimp(sint_add$sint(925))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2344(line=123,offs=12)--2345(line=123,offs=13))
                    // I0Etapq(I0Ecst(sint_div$sint(928)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(3011(line=139,offs=1)--3024(line=139,offs=14))));$list(T2JAG($list())))
                    // T1IMPallx(sint_div$sint(928);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3181(line=187,offs=1)--3345(line=199,offs=2)))
                    // T1IMPallx(sint_div$sint(928)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_div$sint(928);$list()))))
                    let jsxtnm463 = function (arg1, arg2) { // timp: sint_div$sint(928)
                      let jsxtnm457 = arg1
                      let jsxtnm458 = arg2
                      // I1CMP:start
                      let jsxtnm462 // let
                      { // let
                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3271(line=195,offs=1)--3343(line=198,offs=39)))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3279(line=196,offs=1)--3343(line=198,offs=39))
                        // I1FUNDCL
                        // XATS2JS_sint_div$sint_3282
                          // FJARGdarg($list(I1BNDcons(I1TNM(459);I0Pvar(i1(5116));$list(@(i1(5116),I1Vtnm(I1TNM(459))))),I1BNDcons(I1TNM(460);I0Pvar(i2(5117));$list(@(i2(5117),I1Vtnm(I1TNM(460)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_div$sint);G1Nlist($list())) // I1CMP:return
                        let jsxtnm461 = XATSDAPP(XATS2JS_sint_div$sint(jsxtnm457, jsxtnm458))
                        jsxtnm462 = jsxtnm461
                      } // endlet
                      // I1CMP:return:jsxtnm462
                      return jsxtnm462
                    } // endtimp(sint_div$sint(928))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2339(line=123,offs=7)--2340(line=123,offs=8))
                    // I0Etapq(I0Ecst(sint_sub$sint(926)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2881(line=131,offs=1)--2894(line=131,offs=14))));$list(T2JAG($list())))
                    // T1IMPallx(sint_sub$sint(926);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2845(line=159,offs=1)--3009(line=171,offs=2)))
                    // T1IMPallx(sint_sub$sint(926)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_sub$sint(926);$list()))))
                    let jsxtnm470 = function (arg1, arg2) { // timp: sint_sub$sint(926)
                      let jsxtnm464 = arg1
                      let jsxtnm465 = arg2
                      // I1CMP:start
                      let jsxtnm469 // let
                      { // let
                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2935(line=167,offs=1)--3007(line=170,offs=39)))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2943(line=168,offs=1)--3007(line=170,offs=39))
                        // I1FUNDCL
                        // XATS2JS_sint_sub$sint_2946
                          // FJARGdarg($list(I1BNDcons(I1TNM(466);I0Pvar(i1(5106));$list(@(i1(5106),I1Vtnm(I1TNM(466))))),I1BNDcons(I1TNM(467);I0Pvar(i2(5107));$list(@(i2(5107),I1Vtnm(I1TNM(467)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_sub$sint);G1Nlist($list())) // I1CMP:return
                        let jsxtnm468 = XATSDAPP(XATS2JS_sint_sub$sint(jsxtnm464, jsxtnm465))
                        jsxtnm469 = jsxtnm468
                      } // endlet
                      // I1CMP:return:jsxtnm469
                      return jsxtnm469
                    } // endtimp(sint_sub$sint(926))
                    let jsxtnm471 = XATSDAPP(jsxtnm470(jsxtnm441, jsxtnm440))
                    let jsxtnm472 = XATSDAPP(jsxtnm463(jsxtnm471, XATSINT1(2)))
                    let jsxtnm473 = XATSDAPP(jsxtnm456(jsxtnm440, jsxtnm472))
                    jsxtnm474 = jsxtnm473
                    XATS000_patck(true)
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2349(line=124,offs=1)--2385(line=125,offs=21)))
                    // I1VALDCL
                    let jsxtnm483
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2365(line=125,offs=1)--2377(line=125,offs=13))
                    // I0Etapq(I0Ecst(a1sz_lget$at(1119)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axsz000.sats)@(3798(line=201,offs=1)--3810(line=201,offs=13))));$list(T2JAG($list(T2Pvar(x0[7287])))))
                    // T1IMPallx(a1sz_lget$at(1119);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats)@(1815(line=69,offs=1)--1992(line=84,offs=2)))
                    // T1IMPallx(a1sz_lget$at(1119)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8914],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a1sz_lget$at(1119);$list(@(a[3013],T2Pvar(a[8914])))))))
                    let jsxtnm481 = function (arg1, arg2) { // timp: a1sz_lget$at(1119)
                      let jsxtnm475 = arg1
                      let jsxtnm476 = arg2
                      // I1CMP:start
                      let jsxtnm480 // let
                      { // let
                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats)@(1899(line=77,offs=1)--1990(line=83,offs=38)))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats)@(1907(line=78,offs=1)--1990(line=83,offs=38))
                        // I1FUNDCL
                        // XATS2JS_a1sz_lget$at_1910
                          // FJARGdarg($list(I1BNDcons(I1TNM(477);I0Pvar(A(5355));$list(@(A(5355),I1Vtnm(I1TNM(477))))),I1BNDcons(I1TNM(478);I0Pvar(i(5356));$list(@(i(5356),I1Vtnm(I1TNM(478)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a1sz_lget$at);G1Nlist($list())) // I1CMP:return
                        let jsxtnm479 = XATSDAPP(XATS2JS_a1sz_lget$at(jsxtnm475, jsxtnm476))
                        jsxtnm480 = jsxtnm479
                      } // endlet
                      // I1CMP:return:jsxtnm480
                      return jsxtnm480
                    } // endtimp(a1sz_lget$at(1119))
                    let jsxtnm482 = XATSDAPP(jsxtnm481(jsxtnm432, jsxtnm474))
                    jsxtnm483 = jsxtnm482
                    XATS000_patck(true)
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2389(line=127,offs=1)--2415(line=128,offs=23)))
                    // I1VALDCL
                    let jsxtnm497
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2399(line=128,offs=7)--2411(line=128,offs=19))
                    // I0Etapq(I0Ecst(exists$tcmp1(1414)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(2311(line=123,offs=1)--2323(line=123,offs=13))));$list(T2JAG($list(T2Pvar(x0[7287])))))
                    // T1IMPallx(exists$tcmp1(1414);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(3278(line=203,offs=1)--3329(line=204,offs=43)))
                    // T1IMPallx(exists$tcmp1(1414)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7289],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(exists$tcmp1(1414);$list(@(x0[3719],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                    let jsxtnm495 = function (arg1) { // timp: exists$tcmp1(1414)
                      let jsxtnm484 = arg1
                      // I1CMP:start
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(3310(line=204,offs=24)--3317(line=204,offs=31))
                      // I0Etapq(I0Ecst(g_cmp11(1581)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gord000_vt.sats)@(1841(line=83,offs=1)--1848(line=83,offs=8))));$list(T2JAG($list(T2Pvar(x0[7289])))))
                      // T1IMPallx(g_cmp11(1581);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gord000_vt.dats)@(1977(line=87,offs=1)--2014(line=89,offs=22)))
                      // T1IMPallx(g_cmp11(1581)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[7734],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_cmp11(1581);$list(@(a[4000],T2Pvar(a[7734])))))))
                      let jsxtnm493
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gord000_vt.dats)@(2006(line=89,offs=14)--2011(line=89,offs=19))
                      // I0Etapq(I0Ecst(g_cmp(230)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gord000.sats)@(1630(line=66,offs=1)--1635(line=66,offs=6))));$list(T2JAG($list(T2Pvar(a[7734])))))
                      // T1IMPallx(g_cmp(230);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1828(line=69,offs=1)--1861(line=70,offs=25)))
                      // T1IMPallx(g_cmp(230)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_cmp(230);$list(@(a[780],T2Pcst(strn)))))))
                      let jsxtnm492
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1851(line=70,offs=15)--1859(line=70,offs=23))
                      // I0Etapq(I0Ecst(strn_cmp(1028)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2269(line=99,offs=1)--2277(line=99,offs=9))));$list(T2JAG($list())))
                      // T1IMPallx(strn_cmp(1028);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1859(line=79,offs=1)--2008(line=91,offs=2)))
                      // T1IMPallx(strn_cmp(1028)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_cmp(1028);$list()))))
                      let jsxtnm491 = function (arg1, arg2) { // timp: strn_cmp(1028)
                        let jsxtnm485 = arg1
                        let jsxtnm486 = arg2
                        // I1CMP:start
                        let jsxtnm490 // let
                        { // let
                          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1939(line=87,offs=1)--2006(line=90,offs=39)))
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1947(line=88,offs=1)--2006(line=90,offs=39))
                          // I1FUNDCL
                          // XATS2JS_strn_cmp_1950
                            // FJARGdarg($list(I1BNDcons(I1TNM(487);I0Pvar(x1(5257));$list(@(x1(5257),I1Vtnm(I1TNM(487))))),I1BNDcons(I1TNM(488);I0Pvar(x2(5258));$list(@(x2(5258),I1Vtnm(I1TNM(488)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_cmp);G1Nlist($list())) // I1CMP:return
                          let jsxtnm489 = XATSDAPP(XATS2JS_strn_cmp(jsxtnm485, jsxtnm486))
                          jsxtnm490 = jsxtnm489
                        } // endlet
                        // I1CMP:return:jsxtnm490
                        return jsxtnm490
                      } // endtimp(strn_cmp(1028))
                      jsxtnm492 = jsxtnm491
                      jsxtnm493 = jsxtnm492
                      let jsxtnm494 = XATSDAPP(jsxtnm493(jsxtnm427, jsxtnm484))
                      // I1CMP:return:jsxtnm494
                      return jsxtnm494
                    } // endtimp(exists$tcmp1(1414))
                    let jsxtnm496 = XATSDAPP(jsxtnm495(jsxtnm483))
                    jsxtnm497 = jsxtnm496
                    XATS000_patck(true)
                    // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2416(line=129,offs=1)--2448(line=130,offs=24)))
                    // I1VALDCL
                    // I1BNDcons(I1TNM(499);I0Ptup0($list());$list())
                    // I1CMP:start
                    // I1LETnew1(I1TNM(498);...)
                      // I1INSdapp(I1Vcst(owed_vt_return0(6));$list(I1Vnone0(),I1Vtnm(I1TNM(483))))
                    // I1CMP(ival):I1Vtnm(I1TNM(498)) // I1CMP:return
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2477(line=135,offs=6)--2478(line=135,offs=7))
                    // I0Etapq(I0Ecst(sint_eq$sint(920)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2165(line=91,offs=1)--2177(line=91,offs=13))));$list(T2JAG($list())))
                    // T1IMPallx(sint_eq$sint(920);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1942(line=84,offs=1)--2103(line=96,offs=2)))
                    // T1IMPallx(sint_eq$sint(920)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_eq$sint(920);$list()))))
                    let jsxtnm506 = function (arg1, arg2) { // timp: sint_eq$sint(920)
                      let jsxtnm500 = arg1
                      let jsxtnm501 = arg2
                      // I1CMP:start
                      let jsxtnm505 // let
                      { // let
                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2030(line=92,offs=1)--2101(line=95,offs=39)))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2038(line=93,offs=1)--2101(line=95,offs=39))
                        // I1FUNDCL
                        // XATS2JS_sint_eq$sint_2041
                          // FJARGdarg($list(I1BNDcons(I1TNM(502);I0Pvar(i1(5081));$list(@(i1(5081),I1Vtnm(I1TNM(502))))),I1BNDcons(I1TNM(503);I0Pvar(i2(5082));$list(@(i2(5082),I1Vtnm(I1TNM(503)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_eq$sint);G1Nlist($list())) // I1CMP:return
                        let jsxtnm504 = XATSDAPP(XATS2JS_sint_eq$sint(jsxtnm500, jsxtnm501))
                        jsxtnm505 = jsxtnm504
                      } // endlet
                      // I1CMP:return:jsxtnm505
                      return jsxtnm505
                    } // endtimp(sint_eq$sint(920))
                    let jsxtnm507 = XATSDAPP(jsxtnm506(jsxtnm497, XATSINT1(0)))
                    let jsxtnm527 // ift
                    if (jsxtnm507) // ift
                    {
                      jsxtnm527 = XATSBOOL(true)
                    } else {
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2507(line=139,offs=6)--2508(line=139,offs=7))
                      // I0Etapq(I0Ecst(sint_lt$sint(918)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2041(line=83,offs=1)--2053(line=83,offs=13))));$list(T2JAG($list())))
                      // T1IMPallx(sint_lt$sint(918);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1612(line=56,offs=1)--1773(line=68,offs=2)))
                      // T1IMPallx(sint_lt$sint(918)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_lt$sint(918);$list()))))
                      let jsxtnm514 = function (arg1, arg2) { // timp: sint_lt$sint(918)
                        let jsxtnm508 = arg1
                        let jsxtnm509 = arg2
                        // I1CMP:start
                        let jsxtnm513 // let
                        { // let
                          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1700(line=64,offs=1)--1771(line=67,offs=39)))
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1708(line=65,offs=1)--1771(line=67,offs=39))
                          // I1FUNDCL
                          // XATS2JS_sint_lt$sint_1711
                            // FJARGdarg($list(I1BNDcons(I1TNM(510);I0Pvar(i1(5071));$list(@(i1(5071),I1Vtnm(I1TNM(510))))),I1BNDcons(I1TNM(511);I0Pvar(i2(5072));$list(@(i2(5072),I1Vtnm(I1TNM(511)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_lt$sint);G1Nlist($list())) // I1CMP:return
                          let jsxtnm512 = XATSDAPP(XATS2JS_sint_lt$sint(jsxtnm508, jsxtnm509))
                          jsxtnm513 = jsxtnm512
                        } // endlet
                        // I1CMP:return:jsxtnm513
                        return jsxtnm513
                      } // endtimp(sint_lt$sint(918))
                      let jsxtnm515 = XATSDAPP(jsxtnm514(jsxtnm497, XATSINT1(0)))
                      let jsxtnm526 // ift
                      if (jsxtnm515) // ift
                      {
                        let jsxtnm516 = XATSDAPP(loop_2251(jsxtnm440, jsxtnm474))
                        jsxtnm526 = jsxtnm516
                      } else {
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/asrt000.dats)@(2541(line=140,offs=25)--2542(line=140,offs=26))
                        // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                        // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                        // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                        let jsxtnm523 = function (arg1, arg2) { // timp: sint_add$sint(925)
                          let jsxtnm517 = arg1
                          let jsxtnm518 = arg2
                          // I1CMP:start
                          let jsxtnm522 // let
                          { // let
                            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                            // I1FUNDCL
                            // XATS2JS_sint_add$sint_2778
                              // FJARGdarg($list(I1BNDcons(I1TNM(519);I0Pvar(i1(5101));$list(@(i1(5101),I1Vtnm(I1TNM(519))))),I1BNDcons(I1TNM(520);I0Pvar(i2(5102));$list(@(i2(5102),I1Vtnm(I1TNM(520)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                            let jsxtnm521 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm517, jsxtnm518))
                            jsxtnm522 = jsxtnm521
                          } // endlet
                          // I1CMP:return:jsxtnm522
                          return jsxtnm522
                        } // endtimp(sint_add$sint(925))
                        let jsxtnm524 = XATSDAPP(jsxtnm523(jsxtnm474, XATSINT1(1)))
                        let jsxtnm525 = XATSDAPP(loop_2251(jsxtnm524, jsxtnm441))
                        jsxtnm526 = jsxtnm525
                      } // end(if)
                      jsxtnm527 = jsxtnm526
                    } // end(if)
                    jsxtnm528 = jsxtnm527
                  } // endlet
                  jsxtnm529 = jsxtnm528
                } // end(if)
                // I1CMP:return:jsxtnm529
                return jsxtnm529
              } // endfun(loop_2251)
              let jsxtnm530 = XATSDAPP(loop_2251(XATSINT1(0), jsxtnm439))
              jsxtnm531 = jsxtnm530
            } // endlet
            // I1CMP:return:jsxtnm531
            return jsxtnm531
          } // endtimp(asrt_exists(1157))
          let jsxtnm533 = XATSDAPP(jsxtnm532(jsxtnm426))
          jsxtnm534 = jsxtnm533
        } // endlet
        // I1CMP:return:jsxtnm534
        return jsxtnm534
      } // endtimp(asrt_memberq(1159))
      let jsxtnm536 = XATSDAPP(jsxtnm535(jsxtnm424, jsxtnm425))
      // I1CMP:return:jsxtnm536
      return jsxtnm536
    } // endfun(word_test_2414)
    // I1Dimplmnt0(LCSRCsome1(doublets.dats)@(2474(line=197,offs=1)--2629(line=207,offs=30)))
    // I1Dimplmnt0(DIMPLone2(ggrph$node_equal(2270);$list(@(node[5605],T2Pcst(node))))):timp
    // I1Dfundclist(LCSRCsome1(doublets.dats)@(2633(line=209,offs=1)--2904(line=231,offs=4)))
    // I1FUNDCL
    function node_adjs$get_2636(arg1)
    { // fun
      let jsxtnm543 = arg1
      // I1CMP:start
      let jsxtnm586 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(doublets.dats)@(2687(line=214,offs=1)--2715(line=215,offs=24)))
        // I1VALDCL
        let jsxtnm544
        jsxtnm544 = jsxtnm543
        XATS000_patck(XATS000_ctgeq(jsxtnm543, XATSCTAG("list_cons",1)))
        // I1Dvaldclist(LCSRCsome1(doublets.dats)@(2719(line=217,offs=1)--2747(line=218,offs=19)))
        // I1VALDCL
        let jsxtnm546
        let jsxtnm545 = XATSDAPP(word_adjs$get_538(XATSP1CN("list_cons", jsxtnm544[0+1])))
        jsxtnm546 = jsxtnm545
        XATS000_patck(true)
        // I1Dvaldclist(LCSRCsome1(doublets.dats)@(2748(line=219,offs=1)--2831(line=225,offs=33)))
        // I1VALDCL
        let jsxtnm561
        let jsxtnm560 // let
        { // let
          // I1Dimplmnt0(LCSRCsome1(doublets.dats)@(2790(line=224,offs=1)--2829(line=225,offs=31)))
          // I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Pcst(strn))))):timp
          // LCSRCsome1(doublets.dats)@(2760(line=221,offs=1)--2775(line=221,offs=16))
          // I0Etapq(I0Ecst(strm_vt_filter0(2182)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(6654(line=333,offs=1)--6669(line=333,offs=16))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
          // T1IMPallx(strm_vt_filter0(2182);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(1980(line=78,offs=1)--2183(line=91,offs=4)))
          // T1IMPallx(strm_vt_filter0(2182)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8881],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_filter0(2182);$list(@(x0[5463],T2Pvar(x0[8881])))))))
          let jsxtnm558 = function (arg1) { // timp: strm_vt_filter0(2182)
            let jsxtnm547 = arg1
            // I1CMP:start
            let jsxtnm557 // let
            { // let
              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2032(line=83,offs=1)--2083(line=86,offs=24)))
              // I1FUNDCL
              function test_2035(arg1)
              { // fun
                let jsxtnm548 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2062(line=86,offs=3)--2074(line=86,offs=15))
                // I0Etapq(I0Ecst(filter$test1(1491)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(6554(line=466,offs=1)--6566(line=466,offs=13))));$list(T2JAG($list(T2Pvar(x0[8881])))))
                // T1IMPallx(filter$test1(1491);LCSRCsome1(doublets.dats)@(2790(line=224,offs=1)--2829(line=225,offs=31)))
                // T1IMPallx(filter$test1(1491)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Pcst(strn)))))))
                let jsxtnm549
                jsxtnm549 = word_test_2414
                let jsxtnm550 = XATSDAPP(jsxtnm549(jsxtnm548))
                // I1CMP:return:jsxtnm550
                return jsxtnm550
              } // endfun(test_2035)
              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2084(line=87,offs=1)--2124(line=88,offs=37)))
              // I1FUNDCL
              function free_2087(arg1)
              { // fun
                let jsxtnm551 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2110(line=88,offs=23)--2116(line=88,offs=29))
                // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1591(line=56,offs=1)--1597(line=56,offs=7))));$list(T2JAG($list(T2Pvar(x0[8881])))))
                // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
                // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5640],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[418],T2Pvar(x0[5640])))))))
                let jsxtnm554 = function (arg1) { // timp: g_free(23)
                  let jsxtnm552 = arg1
                  // I1CMP:start
                  let jsxtnm553 = XATSTUP0([])
                  // I1CMP:return:jsxtnm553
                  return jsxtnm553
                } // endtimp(g_free(23))
                let jsxtnm555 = XATSDAPP(jsxtnm554(jsxtnm551))
                // I1CMP:return:jsxtnm555
                return jsxtnm555
              } // endfun(free_2087)
              let jsxtnm556 = XATSDAPP(XATS2JS_strm_vt_filter0$f1un(jsxtnm547, test_2035, free_2087))
              jsxtnm557 = jsxtnm556
            } // endlet
            // I1CMP:return:jsxtnm557
            return jsxtnm557
          } // endtimp(strm_vt_filter0(2182))
          let jsxtnm559 = XATSDAPP(jsxtnm558(jsxtnm546))
          jsxtnm560 = jsxtnm559
        } // endlet
        jsxtnm561 = jsxtnm560
        XATS000_patck(true)
        // LCSRCsome1(doublets.dats)@(2843(line=228,offs=1)--2860(line=228,offs=18))
        // I0Etapq(I0Ecst(strm_vt_map0$f1un(2178)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5605(line=289,offs=1)--5622(line=289,offs=18))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))
        // T1IMPallx(strm_vt_map0$f1un(2178);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4356(line=239,offs=1)--4501(line=250,offs=2)))
        // T1IMPallx(strm_vt_map0$f1un(2178)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8590],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(y0[8591],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0$f1un(2178);$list(@(x0[5453],T2Pxtv([T2Pvar(x0[8590])])),@(y0[5454],T2Pxtv([T2Pvar(y0[8591])])))))))
        let jsxtnm581 = function (arg1, arg2) { // timp: strm_vt_map0$f1un(2178)
          let jsxtnm562 = arg1
          let jsxtnm563 = arg2
          // I1CMP:start
          let jsxtnm580 // let
          { // let
            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4454(line=248,offs=1)--4493(line=249,offs=31)))
            // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pvar(x0[8590])),@(y0[3807],T2Pvar(y0[8591]))))):timp
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4420(line=245,offs=1)--4432(line=245,offs=13))
            // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Pvar(x0[8590]))),T2JAG($list(T2Pvar(y0[8591])))))
            // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
            // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8588],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(y0[8589],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8588])),@(y0[5444],T2Pvar(y0[8589])))))))
            let jsxtnm578 = function (arg1) { // timp: strm_vt_map0(2174)
              let jsxtnm564 = arg1
              // I1CMP:start
              let jsxtnm577 // let
              { // let
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
                // I1FUNDCL
                function auxmain_4114(arg1)
                { // fun
                  let jsxtnm565 = arg1
                  // I1CMP:start
                  let jsxtnm575 = XATS000_l1azy(function (tlaz) { // l1azy
                    // I1CMP:start
                    let jsxtnm566 = XATS000_dl1az(jsxtnm565)
                    let jsxtnm574 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(567);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm566, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                        let jsxtnm567 = jsxtnm566
                        let jsxtnm568 = XATSCAPP("strmcon_vt_nil", [0])
                        jsxtnm574 = jsxtnm568
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(569);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4516)),I0Pvar(xs(4517)))));$list(@(x1(4516),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(569));0)),@(xs(4517),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(569));1)))))
                      if (XATS000_ctgeq(jsxtnm566, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                        let jsxtnm569 = jsxtnm566
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                        // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8588]))),T2JAG($list(T2Pvar(y0[8589])))))
                        // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4454(line=248,offs=1)--4493(line=249,offs=31)))
                        // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8590],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(y0[8591],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(y0[3807],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))))
                        let jsxtnm570
                        jsxtnm570 = jsxtnm563
                        let jsxtnm571 = XATSDAPP(jsxtnm570(XATSP1CN("strmcon_vt_cons", jsxtnm569[0+1])))
                        let jsxtnm572 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm569[1+1])))
                        let jsxtnm573 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm571, jsxtnm572])
                        jsxtnm574 = jsxtnm573
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm574
                    return jsxtnm574
                  }) // endfun(l1azy)
                  // I1CMP:return:jsxtnm575
                  return jsxtnm575
                } // endfun(auxmain_4114)
                let jsxtnm576 = XATSDAPP(auxmain_4114(jsxtnm564))
                jsxtnm577 = jsxtnm576
              } // endlet
              // I1CMP:return:jsxtnm577
              return jsxtnm577
            } // endtimp(strm_vt_map0(2174))
            let jsxtnm579 = XATSDAPP(jsxtnm578(jsxtnm562))
            jsxtnm580 = jsxtnm579
          } // endlet
          // I1CMP:return:jsxtnm580
          return jsxtnm580
        } // endtimp(strm_vt_map0$f1un(2178))
        let jsxtnm584 = function (arg1) { // lam0(T_LAM(0))
          let jsxtnm582 = arg1
          // I1CMP:start
          let jsxtnm583 = XATSCAPP("list_cons", [1, jsxtnm582, jsxtnm543])
          // I1CMP:return:jsxtnm583
          return jsxtnm583
        } // endfun(lam0)
        let jsxtnm585 = XATSDAPP(jsxtnm581(jsxtnm561, jsxtnm584))
        jsxtnm586 = jsxtnm585
      } // endlet
      // I1CMP:return:jsxtnm586
      return jsxtnm586
    } // endfun(node_adjs$get_2636)
    let jsxtnm881 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(doublets.dats)@(2931(line=237,offs=1)--2956(line=238,offs=15)))
      // I1VALDCL
      let jsxtnm592
      // LCSRCsome1(doublets.dats)@(2942(line=238,offs=1)--2951(line=238,offs=10))
      // I0Etapq(I0Ecst(list_make_1val(1170)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(2472(line=126,offs=1)--2486(line=126,offs=15))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
      // T1IMPallx(list_make_1val(1170);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(6447(line=431,offs=1)--6516(line=435,offs=29)))
      // T1IMPallx(list_make_1val(1170)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7380],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_make_1val(1170);$list(@(a[3308],T2Pvar(x0[7380])))))))
      let jsxtnm590 = function (arg1) { // timp: list_make_1val(1170)
        let jsxtnm587 = arg1
        // I1CMP:start
        let jsxtnm588 = XATSCAPP("list_nil", [0])
        let jsxtnm589 = XATSCAPP("list_cons", [1, jsxtnm587, jsxtnm588])
        // I1CMP:return:jsxtnm589
        return jsxtnm589
      } // endtimp(list_make_1val(1170))
      let jsxtnm591 = XATSDAPP(jsxtnm590(jsxtnm422))
      jsxtnm592 = jsxtnm591
      XATS000_patck(true)
      // I1Dimplmnt0(LCSRCsome1(doublets.dats)@(2960(line=240,offs=1)--3038(line=244,offs=26)))
      // I1Dimplmnt0(DIMPLone2(ggrph$node_adjs$get(2271);$list(@(node[5606],T2Pcst(node))))):timp
      // I1Dfundclist(LCSRCsome1(doublets.dats)@(3042(line=246,offs=1)--3126(line=252,offs=32)))
      // I1FUNDCL
      function node_test_3045(arg1)
      { // fun
        let jsxtnm595 = arg1
        // I1CMP:start
        let jsxtnm619 // let
        { // let
          // I1Dvaldclist(LCSRCsome1(doublets.dats)@(3080(line=250,offs=1)--3109(line=252,offs=15)))
          // I1VALDCL
          let jsxtnm596
          jsxtnm596 = jsxtnm595
          XATS000_patck(XATS000_ctgeq(jsxtnm595, XATSCTAG("list_cons",1)))
          // LCSRCsome1(doublets.dats)@(3117(line=252,offs=23)--3118(line=252,offs=24))
          // I0Etapq(I0Ecst(strn_eq(1024)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(1883(line=77,offs=1)--1890(line=77,offs=8))));$list(T2JAG($list())))
          // T1IMPallx(strn_eq(1024);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1665(line=57,offs=1)--1696(line=58,offs=23)))
          // T1IMPallx(strn_eq(1024)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_eq(1024);$list()))))
          let jsxtnm617
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1686(line=58,offs=13)--1690(line=58,offs=17))
          // I0Etapq(I0Ecst(g_eq(226)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gord000.sats)@(1486(line=50,offs=1)--1490(line=50,offs=5))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
          // T1IMPallx(g_eq(226);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1922(line=85,offs=1)--1980(line=89,offs=23)))
          // T1IMPallx(g_eq(226)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5895],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_eq(226);$list(@(a[776],T2Pvar(x0[5895])))))))
          let jsxtnm616 = function (arg1, arg2) { // timp: g_eq(226)
            let jsxtnm597 = arg1
            let jsxtnm598 = arg2
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1976(line=89,offs=19)--1977(line=89,offs=20))
            // I0Etapq(I0Ecst(sint_eq$sint(920)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2165(line=91,offs=1)--2177(line=91,offs=13))));$list(T2JAG($list())))
            // T1IMPallx(sint_eq$sint(920);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1942(line=84,offs=1)--2103(line=96,offs=2)))
            // T1IMPallx(sint_eq$sint(920)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_eq$sint(920);$list()))))
            let jsxtnm605 = function (arg1, arg2) { // timp: sint_eq$sint(920)
              let jsxtnm599 = arg1
              let jsxtnm600 = arg2
              // I1CMP:start
              let jsxtnm604 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2030(line=92,offs=1)--2101(line=95,offs=39)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2038(line=93,offs=1)--2101(line=95,offs=39))
                // I1FUNDCL
                // XATS2JS_sint_eq$sint_2041
                  // FJARGdarg($list(I1BNDcons(I1TNM(601);I0Pvar(i1(5081));$list(@(i1(5081),I1Vtnm(I1TNM(601))))),I1BNDcons(I1TNM(602);I0Pvar(i2(5082));$list(@(i2(5082),I1Vtnm(I1TNM(602)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_eq$sint);G1Nlist($list())) // I1CMP:return
                let jsxtnm603 = XATSDAPP(XATS2JS_sint_eq$sint(jsxtnm599, jsxtnm600))
                jsxtnm604 = jsxtnm603
              } // endlet
              // I1CMP:return:jsxtnm604
              return jsxtnm604
            } // endtimp(sint_eq$sint(920))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1958(line=89,offs=1)--1963(line=89,offs=6))
            // I0Etapq(I0Ecst(g_cmp(230)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gord000.sats)@(1630(line=66,offs=1)--1635(line=66,offs=6))));$list(T2JAG($list(T2Pvar(x0[5895])))))
            // T1IMPallx(g_cmp(230);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1828(line=69,offs=1)--1861(line=70,offs=25)))
            // T1IMPallx(g_cmp(230)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_cmp(230);$list(@(a[780],T2Pcst(strn)))))))
            let jsxtnm613
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1851(line=70,offs=15)--1859(line=70,offs=23))
            // I0Etapq(I0Ecst(strn_cmp(1028)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2269(line=99,offs=1)--2277(line=99,offs=9))));$list(T2JAG($list())))
            // T1IMPallx(strn_cmp(1028);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1859(line=79,offs=1)--2008(line=91,offs=2)))
            // T1IMPallx(strn_cmp(1028)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_cmp(1028);$list()))))
            let jsxtnm612 = function (arg1, arg2) { // timp: strn_cmp(1028)
              let jsxtnm606 = arg1
              let jsxtnm607 = arg2
              // I1CMP:start
              let jsxtnm611 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1939(line=87,offs=1)--2006(line=90,offs=39)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1947(line=88,offs=1)--2006(line=90,offs=39))
                // I1FUNDCL
                // XATS2JS_strn_cmp_1950
                  // FJARGdarg($list(I1BNDcons(I1TNM(608);I0Pvar(x1(5257));$list(@(x1(5257),I1Vtnm(I1TNM(608))))),I1BNDcons(I1TNM(609);I0Pvar(x2(5258));$list(@(x2(5258),I1Vtnm(I1TNM(609)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_cmp);G1Nlist($list())) // I1CMP:return
                let jsxtnm610 = XATSDAPP(XATS2JS_strn_cmp(jsxtnm606, jsxtnm607))
                jsxtnm611 = jsxtnm610
              } // endlet
              // I1CMP:return:jsxtnm611
              return jsxtnm611
            } // endtimp(strn_cmp(1028))
            jsxtnm613 = jsxtnm612
            let jsxtnm614 = XATSDAPP(jsxtnm613(jsxtnm597, jsxtnm598))
            let jsxtnm615 = XATSDAPP(jsxtnm605(jsxtnm614, XATSINT1(0)))
            // I1CMP:return:jsxtnm615
            return jsxtnm615
          } // endtimp(g_eq(226))
          jsxtnm617 = jsxtnm616
          let jsxtnm618 = XATSDAPP(jsxtnm617(jsxtnm423, XATSP1CN("list_cons", jsxtnm596[0+1])))
          jsxtnm619 = jsxtnm618
        } // endlet
        // I1CMP:return:jsxtnm619
        return jsxtnm619
      } // endfun(node_test_3045)
      let jsxtnm880 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(doublets.dats)@(3210(line=261,offs=1)--3249(line=261,offs=40)))
        // I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Pcst(node))))):timp
        // LCSRCsome1(doublets.dats)@(3140(line=256,offs=1)--3155(line=256,offs=16))
        // I0Etapq(I0Ecst(strm_vt_filter0(2182)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(6654(line=333,offs=1)--6669(line=333,offs=16))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))
        // T1IMPallx(strm_vt_filter0(2182);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(1980(line=78,offs=1)--2183(line=91,offs=4)))
        // T1IMPallx(strm_vt_filter0(2182)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8881],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_filter0(2182);$list(@(x0[5463],T2Pvar(x0[8881])))))))
        let jsxtnm631 = function (arg1) { // timp: strm_vt_filter0(2182)
          let jsxtnm620 = arg1
          // I1CMP:start
          let jsxtnm630 // let
          { // let
            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2032(line=83,offs=1)--2083(line=86,offs=24)))
            // I1FUNDCL
            function test_2035(arg1)
            { // fun
              let jsxtnm621 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2062(line=86,offs=3)--2074(line=86,offs=15))
              // I0Etapq(I0Ecst(filter$test1(1491)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(6554(line=466,offs=1)--6566(line=466,offs=13))));$list(T2JAG($list(T2Pvar(x0[8881])))))
              // T1IMPallx(filter$test1(1491);LCSRCsome1(doublets.dats)@(3210(line=261,offs=1)--3249(line=261,offs=40)))
              // T1IMPallx(filter$test1(1491)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Pcst(node)))))))
              let jsxtnm622
              jsxtnm622 = node_test_3045
              let jsxtnm623 = XATSDAPP(jsxtnm622(jsxtnm621))
              // I1CMP:return:jsxtnm623
              return jsxtnm623
            } // endfun(test_2035)
            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2084(line=87,offs=1)--2124(line=88,offs=37)))
            // I1FUNDCL
            function free_2087(arg1)
            { // fun
              let jsxtnm624 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2110(line=88,offs=23)--2116(line=88,offs=29))
              // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1591(line=56,offs=1)--1597(line=56,offs=7))));$list(T2JAG($list(T2Pvar(x0[8881])))))
              // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
              // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5640],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[418],T2Pvar(x0[5640])))))))
              let jsxtnm627 = function (arg1) { // timp: g_free(23)
                let jsxtnm625 = arg1
                // I1CMP:start
                let jsxtnm626 = XATSTUP0([])
                // I1CMP:return:jsxtnm626
                return jsxtnm626
              } // endtimp(g_free(23))
              let jsxtnm628 = XATSDAPP(jsxtnm627(jsxtnm624))
              // I1CMP:return:jsxtnm628
              return jsxtnm628
            } // endfun(free_2087)
            let jsxtnm629 = XATSDAPP(XATS2JS_strm_vt_filter0$f1un(jsxtnm620, test_2035, free_2087))
            jsxtnm630 = jsxtnm629
          } // endlet
          // I1CMP:return:jsxtnm630
          return jsxtnm630
        } // endtimp(strm_vt_filter0(2182))
        // LCSRCsome1(doublets.dats)@(3166(line=258,offs=3)--3188(line=258,offs=25))
        // I0Etapq(I0Ecst(ggrph$node_bfs$strmize(2272)(LCSRCsome1(ggrph.dats)@(460(line=36,offs=1)--482(line=36,offs=23))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))
        // T1IMPallx(ggrph$node_bfs$strmize(2272);LCSRCsome1(ggrph.dats)@(763(line=56,offs=1)--901(line=65,offs=4)))
        // T1IMPallx(ggrph$node_bfs$strmize(2272)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(node[5610],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(ggrph$node_bfs$strmize(2272);$list(@(node[5607],T2Pvar(node[5610])))))))
        let jsxtnm877 = function (arg1) { // timp: ggrph$node_bfs$strmize(2272)
          let jsxtnm632 = arg1
          // I1CMP:start
          let jsxtnm876 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(ggrph.dats)@(822(line=61,offs=1)--851(line=62,offs=19)))
            // I1VALDCL
            let jsxtnm646
            // LCSRCsome1(ggrph.dats)@(833(line=62,offs=1)--845(line=62,offs=13))
            // I0Etapq(I0Ecst(strm_vt_sing(2117)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1553(line=53,offs=1)--1565(line=53,offs=13))));$list(T2JAG($list(T2Pvar(node[5610])))))
            // T1IMPallx(strm_vt_sing(2117);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1775(line=72,offs=1)--1848(line=77,offs=21)))
            // T1IMPallx(strm_vt_sing(2117)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8539],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_sing(2117);$list(@(a[5374],T2Pvar(a[8539])))))))
            let jsxtnm644 = function (arg1) { // timp: strm_vt_sing(2117)
              let jsxtnm633 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1815(line=76,offs=1)--1827(line=76,offs=13))
              // I0Etapq(I0Ecst(strm_vt_cons(2121)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1810(line=74,offs=1)--1822(line=74,offs=13))));$list(T2JAG($list(T2Pvar(a[8539])))))
              // T1IMPallx(strm_vt_cons(2121);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1932(line=85,offs=1)--2006(line=89,offs=25)))
              // T1IMPallx(strm_vt_cons(2121)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8541],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_cons(2121);$list(@(a[5378],T2Pvar(a[8541])))))))
              let jsxtnm638 = function (arg1, arg2) { // timp: strm_vt_cons(2121)
                let jsxtnm634 = arg1
                let jsxtnm635 = arg2
                // I1CMP:start
                let jsxtnm637 = XATS000_l1azy(function (tlaz) { // l1azy
                  // I1CMP:start
                  let jsxtnm636 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm634, jsxtnm635])
                  // I1CMP:return:jsxtnm636
                  return jsxtnm636
                }) // endfun(l1azy)
                // I1CMP:return:jsxtnm637
                return jsxtnm637
              } // endtimp(strm_vt_cons(2121))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1833(line=77,offs=6)--1844(line=77,offs=17))
              // I0Etapq(I0Ecst(strm_vt_nil(2115)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1422(line=42,offs=1)--1433(line=42,offs=12))));$list(T2JAG($list())))
              // T1IMPallx(strm_vt_nil(2115);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1708(line=66,offs=1)--1771(line=70,offs=21)))
              // T1IMPallx(strm_vt_nil(2115)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strm_vt_nil(2115);$list()))))
              let jsxtnm641 = function () { // timp: strm_vt_nil(2115)
                // I1CMP:start
                let jsxtnm640 = XATS000_l1azy(function (tlaz) { // l1azy
                  // I1CMP:start
                  let jsxtnm639 = XATSCAPP("strmcon_vt_nil", [0])
                  // I1CMP:return:jsxtnm639
                  return jsxtnm639
                }) // endfun(l1azy)
                // I1CMP:return:jsxtnm640
                return jsxtnm640
              } // endtimp(strm_vt_nil(2115))
              let jsxtnm642 = XATSDAPP(jsxtnm641())
              let jsxtnm643 = XATSDAPP(jsxtnm638(jsxtnm633, jsxtnm642))
              // I1CMP:return:jsxtnm643
              return jsxtnm643
            } // endtimp(strm_vt_sing(2117))
            let jsxtnm645 = XATSDAPP(jsxtnm644(jsxtnm632))
            jsxtnm646 = jsxtnm645
            XATS000_patck(true)
            // LCSRCsome1(ggrph.dats)@(860(line=64,offs=1)--885(line=64,offs=26))
            // I0Etapq(I0Ecst(ggrph$nodelst_bfs$strmize(2273)(LCSRCsome1(ggrph.dats)@(532(line=41,offs=1)--557(line=41,offs=26))));$list(T2JAG($list(T2Pvar(node[5610])))))
            // T1IMPallx(ggrph$nodelst_bfs$strmize(2273);LCSRCsome1(ggrph.dats)@(1405(line=95,offs=1)--2336(line=173,offs=4)))
            // T1IMPallx(ggrph$nodelst_bfs$strmize(2273)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(node[5612],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(ggrph$nodelst_bfs$strmize(2273);$list(@(node[5608],T2Pvar(node[5612])))))))
            let jsxtnm874 = function (arg1) { // timp: ggrph$nodelst_bfs$strmize(2273)
              let jsxtnm647 = arg1
              // I1CMP:start
              let jsxtnm873 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(ggrph.dats)@(1522(line=106,offs=1)--1553(line=107,offs=22)))
                // I1VALDCL
                let jsxtnm655
                // LCSRCsome1(ggrph.dats)@(1532(line=107,offs=1)--1535(line=107,offs=4))
                // I0Etapq(I0Ecst(a0rf_make_1val(1085)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axrf000.sats)@(2556(line=112,offs=1)--2570(line=112,offs=15))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(node[5612]),T2Pnone0()))))))
                // T1IMPallx(a0rf_make_1val(1085);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(2098(line=95,offs=1)--2259(line=107,offs=2)))
                // T1IMPallx(a0rf_make_1val(1085)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8896],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a0rf_make_1val(1085);$list(@(a[2925],T2Pvar(a[8896])))))))
                let jsxtnm652 = function (arg1) { // timp: a0rf_make_1val(1085)
                  let jsxtnm648 = arg1
                  // I1CMP:start
                  let jsxtnm651 // let
                  { // let
                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(2186(line=103,offs=1)--2257(line=106,offs=37)))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(2194(line=104,offs=1)--2257(line=106,offs=37))
                    // I1FUNDCL
                    // XATS2JS_a0rf_make_1val_2197
                      // FJARGdarg($list(I1BNDcons(I1TNM(649);I0Pvar(x0(5324));$list(@(x0(5324),I1Vtnm(I1TNM(649)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_make_1val);G1Nlist($list())) // I1CMP:return
                    let jsxtnm650 = XATSDAPP(XATS2JS_a0rf_make_1val(jsxtnm648))
                    jsxtnm651 = jsxtnm650
                  } // endlet
                  // I1CMP:return:jsxtnm651
                  return jsxtnm651
                } // endtimp(a0rf_make_1val(1085))
                let jsxtnm653 = XATSCAPP("list_nil", [0])
                let jsxtnm654 = XATSDAPP(jsxtnm652(jsxtnm653))
                jsxtnm655 = jsxtnm654
                XATS000_patck(true)
                let jsxtnm872 // let
                { // let
                  // LCSRCsome1(ggrph.dats)@(1597(line=114,offs=1)--1623(line=115,offs=18))
                  // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(nds1;S2Eapps(S2Ecst(list);$list(S2Evar(node[5612])))))))
                  // LCSRCsome1(ggrph.dats)@(1624(line=116,offs=1)--1653(line=117,offs=21))
                  // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(nds2;S2Eapps(S2Ecst(strm_vt);$list(S2Evar(node[5612])))))))
                  // I1Dvaldclist(LCSRCsome1(ggrph.dats)@(1657(line=119,offs=1)--1981(line=145,offs=4)))
                  // I1VALDCL
                  let jsxtnm829
                  let jsxtnm828 // let
                  { // let
                    // I1Dimplmnt0(LCSRCsome1(ggrph.dats)@(1671(line=121,offs=1)--1929(line=141,offs=2)))
                    // I1Dimplmnt0(DIMPLone2(gtree$node_subs$get(2266);$list(@(node[5600],T2Pvar(node[5612]))))):timp
                    // LCSRCsome1(ggrph.dats)@(1940(line=144,offs=1)--1965(line=144,offs=26))
                    // I0Etapq(I0Ecst(gtree$nodelst_bfs$strmize(2268)(LCSRCsome1(../misc008/gtree.dats)@(381(line=29,offs=1)--406(line=29,offs=26))));$list(T2JAG($list(T2Pvar(node[5612])))))
                    // T1IMPallx(gtree$nodelst_bfs$strmize(2268);LCSRCsome1(../misc008/gtree.dats)@(698(line=48,offs=1)--2026(line=148,offs=2)))
                    // T1IMPallx(gtree$nodelst_bfs$strmize(2268)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(node[5604],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gtree$nodelst_bfs$strmize(2268);$list(@(node[5602],T2Pvar(node[5604])))))))
                    let jsxtnm826 = function (arg1) { // timp: gtree$nodelst_bfs$strmize(2268)
                      let jsxtnm665 = arg1
                      // I1CMP:start
                      let jsxtnm825 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(../misc008/gtree.dats)@(799(line=57,offs=1)--814(line=57,offs=16)))
                        // I1VALDCL
                        let jsxtnm666
                        jsxtnm666 = jsxtnm665
                        XATS000_patck(true)
                        // I1Dvaldclist(LCSRCsome1(../misc008/gtree.dats)@(815(line=58,offs=1)--837(line=58,offs=23)))
                        // I1VALDCL
                        let jsxtnm668
                        let jsxtnm667 = XATSCAPP("list_vt_nil", [0])
                        jsxtnm668 = jsxtnm667
                        XATS000_patck(true)
                        // I1Dvaldclist(LCSRCsome1(../misc008/gtree.dats)@(846(line=59,offs=1)--868(line=59,offs=23)))
                        // I1VALDCL
                        let jsxtnm670
                        let jsxtnm669 = XATSCAPP("list_vt_nil", [0])
                        jsxtnm670 = jsxtnm669
                        XATS000_patck(true)
                        // I1Dfundclist(LCSRCsome1(../misc008/gtree.dats)@(1096(line=74,offs=1)--1973(line=146,offs=2)))
                        // I1FUNDCL
                        function auxmain_1099(arg1, arg2, arg3)
                        { // fun
                          let jsxtnm671 = arg1
                          let jsxtnm672 = arg2
                          let jsxtnm673 = arg3
                          // I1CMP:start
                          let jsxtnm823 = XATS000_l1azy(function (tlaz) { // l1azy
                            // I1CMP:start
                            let jsxtnm674 = XATS000_dl1az(jsxtnm671)
                            let jsxtnm822 // cas
                            do {
                              // { // cls
                              // I1GPTpat(I1BNDcons(I1TNM(675);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                              if (XATS000_ctgeq(jsxtnm674, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                                let jsxtnm675 = jsxtnm674
                                let jsxtnm712 // cas
                                do {
                                  // { // cls
                                  // I1GPTpat(I1BNDcons(I1TNM(676);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                                  if (XATS000_ctgeq(jsxtnm672, XATSCTAG("list_vt_nil",0))) { // gpt
                                    let jsxtnm676 = jsxtnm672
                                    let jsxtnm708 // cas
                                    do {
                                      // { // cls
                                      // I1GPTpat(I1BNDcons(I1TNM(677);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                                      if (XATS000_ctgeq(jsxtnm673, XATSCTAG("list_vt_nil",0))) { // gpt
                                        let jsxtnm677 = jsxtnm673
                                        let jsxtnm678 = XATSCAPP("strmcon_vt_nil", [0])
                                        jsxtnm708 = jsxtnm678
                                        break // cls
                                      } // gpt
                                      // } // cls
                                      // { // cls
                                      // I1GPTpat(I1BNDcons(I1TNM(679);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
                                      if (XATS000_ctgeq(jsxtnm673, XATSCTAG("list_vt_cons",1))) { // gpt
                                        let jsxtnm679 = jsxtnm673
                                        let jsxtnm707 // let
                                        { // let
                                          // I1Dvaldclist(LCSRCsome1(../misc008/gtree.dats)@(1426(line=106,offs=1)--1459(line=107,offs=23)))
                                          // I1VALDCL
                                          let jsxtnm700
                                          // LCSRCsome1(../misc008/gtree.dats)@(1437(line=107,offs=1)--1453(line=107,offs=17))
                                          // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(node[5604])))))))))
                                          // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
                                          // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))))))>;I1Dtmpsub($list(@(a[8439],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8439])))))))
                                          let jsxtnm698 = function (arg1) { // timp: list_vt_reverse0(2015)
                                            let jsxtnm680 = arg1
                                            // I1CMP:start
                                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
                                            // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8439])))))
                                            // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
                                            // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))))))>;I1Dtmpsub($list(@(a[8436],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8436])))))))
                                            let jsxtnm695 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                                              let jsxtnm681 = arg1
                                              let jsxtnm682 = arg2
                                              // I1CMP:start
                                              let jsxtnm694 // let
                                              { // let
                                                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                                                // I1FUNDCL
                                                function loop_6433(arg1, arg2)
                                                { // fun
                                                  let jsxtnm683 = arg1
                                                  let jsxtnm684 = arg2
                                                  // I1CMP:start
                                                  let jsxtnm692 // cas
                                                  do {
                                                    // { // cls
                                                    // I1GPTpat(I1BNDcons(I1TNM(685);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                                                    if (XATS000_ctgeq(jsxtnm683, XATSCTAG("list_vt_nil",0))) { // gpt
                                                      let jsxtnm685 = jsxtnm683
                                                      jsxtnm692 = jsxtnm684
                                                      break // cls
                                                    } // gpt
                                                    // } // cls
                                                    // { // cls
                                                    // I1GPTpat(I1BNDcons(I1TNM(686);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                                                    if (XATS000_ctgeq(jsxtnm683, XATSCTAG("list_vt_cons",1))) { // gpt
                                                      let jsxtnm686 = jsxtnm683
                                                      let jsxtnm691 // let
                                                      { // let
                                                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                                                        // I1VALDCL
                                                        let jsxtnm688
                                                        let jsxtnm687 = XATSPCON(jsxtnm683,1)
                                                        jsxtnm688 = jsxtnm687
                                                        XATS000_patck(true)
                                                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                                                        // I1VALDCL
                                                        let jsxtnm689
                                                        XATS000_assgn(XATSLPCN(1, jsxtnm683), jsxtnm684)
                                                        jsxtnm689 = []
                                                        XATS000_patck(true)
                                                        XATS000_fold(jsxtnm683)
                                                        let jsxtnm690 = XATSDAPP(loop_6433(jsxtnm688, jsxtnm683))
                                                        jsxtnm691 = jsxtnm690
                                                      } // endlet
                                                      jsxtnm692 = jsxtnm691
                                                      break // cls
                                                    } // gpt
                                                    // } // cls
                                                    XATS000_cfail()
                                                  } while (false) // end-of(do)
                                                  // I1CMP:return:jsxtnm692
                                                  return jsxtnm692
                                                } // endfun(loop_6433)
                                                let jsxtnm693 = XATSDAPP(loop_6433(jsxtnm681, jsxtnm682))
                                                jsxtnm694 = jsxtnm693
                                              } // endlet
                                              // I1CMP:return:jsxtnm694
                                              return jsxtnm694
                                            } // endtimp(list_vt_rappend00(2018))
                                            let jsxtnm696 = XATSCAPP("list_vt_nil", [0])
                                            let jsxtnm697 = XATSDAPP(jsxtnm695(jsxtnm680, jsxtnm696))
                                            // I1CMP:return:jsxtnm697
                                            return jsxtnm697
                                          } // endtimp(list_vt_reverse0(2015))
                                          let jsxtnm699 = XATSDAPP(jsxtnm698(jsxtnm673))
                                          jsxtnm700 = jsxtnm699
                                          XATS000_patck(true)
                                          // I1Dvaldclist(LCSRCsome1(../misc008/gtree.dats)@(1460(line=108,offs=1)--1484(line=108,offs=25)))
                                          // I1VALDCL
                                          let jsxtnm702
                                          let jsxtnm701 = XATSCAPP("list_vt_nil", [0])
                                          jsxtnm702 = jsxtnm701
                                          XATS000_patck(true)
                                          let jsxtnm706 // let
                                          { // let
                                            // I1Dvaldclist(LCSRCsome1(../misc008/gtree.dats)@(1497(line=111,offs=1)--1534(line=113,offs=20)))
                                            // I1VALDCL
                                            let jsxtnm703
                                            jsxtnm703 = jsxtnm700
                                            XATS000_patck(XATS000_ctgeq(jsxtnm700, XATSCTAG("list_vt_cons",1)))
                                            let jsxtnm704 = XATSDAPP(auxmain_1099(XATSP1CN("list_vt_cons", jsxtnm703[0+1]), XATSP1CN("list_vt_cons", jsxtnm703[1+1]), jsxtnm702))
                                            let jsxtnm705 = XATS000_dl1az(jsxtnm704)
                                            jsxtnm706 = jsxtnm705
                                          } // endlet
                                          jsxtnm707 = jsxtnm706
                                        } // endlet
                                        jsxtnm708 = jsxtnm707
                                        break // cls
                                      } // gpt
                                      // } // cls
                                      XATS000_cfail()
                                    } while (false) // end-of(do)
                                    jsxtnm712 = jsxtnm708
                                    break // cls
                                  } // gpt
                                  // } // cls
                                  // { // cls
                                  // I1GPTpat(I1BNDcons(I1TNM(709);I0Pfree(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(nds1(22)),I0Pvar(r1st(23)))));$list(@(nds1(22),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(709));0)),@(r1st(23),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(709));1)))))
                                  if (XATS000_ctgeq(jsxtnm672, XATSCTAG("list_vt_cons",1))) { // gpt
                                    let jsxtnm709 = jsxtnm672
                                    let jsxtnm710 = XATSDAPP(auxmain_1099(XATSP1CN("list_vt_cons", jsxtnm709[0+1]), XATSP1CN("list_vt_cons", jsxtnm709[1+1]), jsxtnm673))
                                    let jsxtnm711 = XATS000_dl1az(jsxtnm710)
                                    jsxtnm712 = jsxtnm711
                                    break // cls
                                  } // gpt
                                  // } // cls
                                  XATS000_cfail()
                                } while (false) // end-of(do)
                                jsxtnm822 = jsxtnm712
                                break // cls
                              } // gpt
                              // } // cls
                              // { // cls
                              // I1GPTpat(I1BNDcons(I1TNM(713);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(node(24)),I0Pvar(frst(25)))));$list(@(node(24),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(713));0)),@(frst(25),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(713));1)))))
                              if (XATS000_ctgeq(jsxtnm674, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                                let jsxtnm713 = jsxtnm674
                                let jsxtnm821 // let
                                { // let
                                  // I1Dvaldclist(LCSRCsome1(../misc008/gtree.dats)@(1746(line=133,offs=1)--1857(line=139,offs=33)))
                                  // I1VALDCL
                                  let jsxtnm818
                                  let jsxtnm817 // let
                                  { // let
                                    // I1Dvaldclist(LCSRCsome1(../misc008/gtree.dats)@(1814(line=138,offs=1)--1856(line=139,offs=32)))
                                    // I1VALDCL
                                    let jsxtnm815
                                    // LCSRCsome1(../misc008/gtree.dats)@(1825(line=139,offs=1)--1844(line=139,offs=20))
                                    // I0Etapq(I0Ecst(gtree$node_subs$get(2266)(LCSRCsome1(../misc008/gtree.dats)@(237(line=18,offs=1)--256(line=18,offs=20))));$list(T2JAG($list(T2Pvar(node[5604])))))
                                    // T1IMPallx(gtree$node_subs$get(2266);LCSRCsome1(ggrph.dats)@(1671(line=121,offs=1)--1929(line=141,offs=2)))
                                    // T1IMPallx(gtree$node_subs$get(2266)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(node[5612],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gtree$node_subs$get(2266);$list(@(node[5600],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))))
                                    let jsxtnm813 = function (arg1) { // timp: gtree$node_subs$get(2266)
                                      let jsxtnm714 = arg1
                                      // I1CMP:start
                                      let jsxtnm812 // let
                                      { // let
                                        // I1Dimplmnt0(LCSRCsome1(ggrph.dats)@(1783(line=130,offs=1)--1924(line=139,offs=36)))
                                        // I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Pvar(node[5612]))))):timp
                                        // LCSRCsome1(ggrph.dats)@(1722(line=124,offs=1)--1737(line=124,offs=16))
                                        // I0Etapq(I0Ecst(strm_vt_filter0(2182)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(6654(line=333,offs=1)--6669(line=333,offs=16))));$list(T2JAG($list(T2Pvar(node[5612])))))
                                        // T1IMPallx(strm_vt_filter0(2182);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(1980(line=78,offs=1)--2183(line=91,offs=4)))
                                        // T1IMPallx(strm_vt_filter0(2182)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8881],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_filter0(2182);$list(@(x0[5463],T2Pvar(x0[8881])))))))
                                        let jsxtnm806 = function (arg1) { // timp: strm_vt_filter0(2182)
                                          let jsxtnm720 = arg1
                                          // I1CMP:start
                                          let jsxtnm805 // let
                                          { // let
                                            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2032(line=83,offs=1)--2083(line=86,offs=24)))
                                            // I1FUNDCL
                                            function test_2035(arg1)
                                            { // fun
                                              let jsxtnm721 = arg1
                                              // I1CMP:start
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2062(line=86,offs=3)--2074(line=86,offs=15))
                                              // I0Etapq(I0Ecst(filter$test1(1491)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(6554(line=466,offs=1)--6566(line=466,offs=13))));$list(T2JAG($list(T2Pvar(x0[8881])))))
                                              // T1IMPallx(filter$test1(1491);LCSRCsome1(ggrph.dats)@(1783(line=130,offs=1)--1924(line=139,offs=36)))
                                              // T1IMPallx(filter$test1(1491)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(node[5612],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(filter$test1(1491);$list(@(x0[3838],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))))
                                              let jsxtnm797 = function (arg1) { // timp: filter$test1(1491)
                                                let jsxtnm722 = arg1
                                                // I1CMP:start
                                                let jsxtnm796 // let
                                                { // let
                                                  // I1Dimplmnt0(LCSRCsome1(ggrph.dats)@(1864(line=137,offs=1)--1911(line=139,offs=23)))
                                                  // I1Dimplmnt0(DIMPLone2(g_equal(30);$list(@(a[425],T2Pvar(node[5612]))))):timp
                                                  // LCSRCsome1(ggrph.dats)@(1825(line=134,offs=3)--1828(line=134,offs=6))
                                                  // I0Etapq(I0Ecst(bool_neg(857)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/bool000.sats)@(1748(line=63,offs=1)--1756(line=63,offs=9))));$list(T2JAG($list())))
                                                  // T1IMPallx(bool_neg(857);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/bool000.dats)@(1851(line=70,offs=1)--1916(line=74,offs=30)))
                                                  // T1IMPallx(bool_neg(857)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(bool_neg(857);$list()))))
                                                  let jsxtnm725 = function (arg1) { // timp: bool_neg(857)
                                                    let jsxtnm723 = arg1
                                                    // I1CMP:start
                                                    let jsxtnm724 // ift
                                                    if (jsxtnm723) // ift
                                                    {
                                                      jsxtnm724 = XATSBOOL(false)
                                                    } else {
                                                      jsxtnm724 = XATSBOOL(true)
                                                    } // end(if)
                                                    // I1CMP:return:jsxtnm724
                                                    return jsxtnm724
                                                  } // endtimp(bool_neg(857))
                                                  // LCSRCsome1(ggrph.dats)@(1829(line=134,offs=7)--1841(line=134,offs=19))
                                                  // I0Etapq(I0Ecst(list_memberq(1257)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(11353(line=558,offs=1)--11365(line=558,offs=13))));$list(T2JAG($list(T2Pvar(node[5612])))))
                                                  // T1IMPallx(list_memberq(1257);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(14533(line=973,offs=1)--14593(line=975,offs=42)))
                                                  // T1IMPallx(list_memberq(1257)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7499],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_memberq(1257);$list(@(x0[3458],T2Pvar(x0[7499])))))))
                                                  let jsxtnm780
                                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(14567(line=975,offs=16)--14579(line=975,offs=28))
                                                  // I0Etapq(I0Ecst(gseq_memberq(520)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(26266(line=1636,offs=1)--26278(line=1636,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7499]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[7499])))))
                                                  // T1IMPallx(gseq_memberq(520);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(32038(line=2310,offs=1)--32177(line=2319,offs=2)))
                                                  // T1IMPallx(gseq_memberq(520)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6374],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0()))),@(x0[6375],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_memberq(520);$list(@(xs[1564],T2Pvar(xs[6374])),@(x0[1565],T2Pvar(x0[6375])))))))
                                                  let jsxtnm779 = function (arg1, arg2) { // timp: gseq_memberq(520)
                                                    let jsxtnm726 = arg1
                                                    let jsxtnm727 = arg2
                                                    // I1CMP:start
                                                    let jsxtnm778 // let
                                                    { // let
                                                      // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(32125(line=2317,offs=1)--32175(line=2318,offs=42)))
                                                      // I1Dimplmnt0(DIMPLone2(exists$test(95);$list(@(x0[523],T2Pvar(x0[6375]))))):timp
                                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(32092(line=2315,offs=1)--32103(line=2315,offs=12))
                                                      // I0Etapq(I0Ecst(gseq_exists(381)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(3767(line=214,offs=1)--3778(line=214,offs=12))));$list(T2JAG($list(T2Pvar(xs[6374]))),T2JAG($list(T2Pvar(x0[6375])))))
                                                      // T1IMPallx(gseq_exists(381);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3485(line=203,offs=1)--3548(line=206,offs=33)))
                                                      // T1IMPallx(gseq_exists(381)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7418],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))),@(x0[7418],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_exists(381);$list(@(xs[1145],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7418])))),@(x0[1146],T2Pvar(x0[7418])))))))
                                                      let jsxtnm776
                                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3533(line=206,offs=18)--3544(line=206,offs=29))
                                                      // I0Etapq(I0Ecst(list_exists(1212)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(3038(line=133,offs=1)--3049(line=133,offs=12))));$list(T2JAG($list(T2Pvar(x0[7418])))))
                                                      // T1IMPallx(list_exists(1212);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3232(line=179,offs=1)--3481(line=201,offs=2)))
                                                      // T1IMPallx(list_exists(1212)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7417],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_exists(1212);$list(@(x0[3378],T2Pvar(x0[7417])))))))
                                                      let jsxtnm775 = function (arg1) { // timp: list_exists(1212)
                                                        let jsxtnm730 = arg1
                                                        // I1CMP:start
                                                        let jsxtnm774 // let
                                                        { // let
                                                          // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3298(line=186,offs=1)--3479(line=200,offs=31)))
                                                          // I1FUNDCL
                                                          function loop_3301(arg1)
                                                          { // fun
                                                            let jsxtnm731 = arg1
                                                            // I1CMP:start
                                                            let jsxtnm772 // cas
                                                            do {
                                                              // { // cls
                                                              // I1GPTpat(I1BNDcons(I1TNM(732);I0Pfree(I0Pdapp(I0Pcon(list_nil(8));$list()));$list()))
                                                              if (XATS000_ctgeq(jsxtnm731, XATSCTAG("list_nil",0))) { // gpt
                                                                let jsxtnm732 = jsxtnm731
                                                                jsxtnm772 = XATSBOOL(false)
                                                                break // cls
                                                              } // gpt
                                                              // } // cls
                                                              // { // cls
                                                              // I1GPTpat(I1BNDcons(I1TNM(733);I0Pfree(I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x1(2629)),I0Pvar(xs(2630)))));$list(@(x1(2629),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(733));0)),@(xs(2630),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(733));1)))))
                                                              if (XATS000_ctgeq(jsxtnm731, XATSCTAG("list_cons",1))) { // gpt
                                                                let jsxtnm733 = jsxtnm731
                                                                let jsxtnm771 // let
                                                                { // let
                                                                  // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3401(line=197,offs=1)--3431(line=198,offs=20)))
                                                                  // I1VALDCL
                                                                  let jsxtnm768
                                                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3412(line=198,offs=1)--3423(line=198,offs=12))
                                                                  // I0Etapq(I0Ecst(exists$test(95)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(5093(line=331,offs=1)--5104(line=331,offs=12))));$list(T2JAG($list(T2Pvar(x0[7417])))))
                                                                  // T1IMPallx(exists$test(95);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(32125(line=2317,offs=1)--32175(line=2318,offs=42)))
                                                                  // T1IMPallx(exists$test(95)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6374],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0()))),@(x0[6375],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(exists$test(95);$list(@(x0[523],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))))
                                                                  let jsxtnm766 = function (arg1) { // timp: exists$test(95)
                                                                    let jsxtnm734 = arg1
                                                                    // I1CMP:start
                                                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(32156(line=2318,offs=23)--32163(line=2318,offs=30))
                                                                    // I0Etapq(I0Ecst(g_equal(30)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2018(line=97,offs=1)--2025(line=97,offs=8))));$list(T2JAG($list(T2Pvar(x0[6375])))))
                                                                    // T1IMPallx(g_equal(30);LCSRCsome1(ggrph.dats)@(1864(line=137,offs=1)--1911(line=139,offs=23)))
                                                                    // T1IMPallx(g_equal(30)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(node[5612],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_equal(30);$list(@(a[425],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))))
                                                                    let jsxtnm764
                                                                    // LCSRCsome1(ggrph.dats)@(1889(line=139,offs=1)--1905(line=139,offs=17))
                                                                    // I0Etapq(I0Ecst(ggrph$node_equal(2270)(LCSRCsome1(ggrph.dats)@(318(line=24,offs=1)--334(line=24,offs=17))));$list(T2JAG($list(T2Pvar(node[5612])))))
                                                                    // T1IMPallx(ggrph$node_equal(2270);LCSRCsome1(doublets.dats)@(2474(line=197,offs=1)--2629(line=207,offs=30)))
                                                                    // T1IMPallx(ggrph$node_equal(2270)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(ggrph$node_equal(2270);$list(@(node[5605],T2Pcst(node)))))))
                                                                    let jsxtnm763 = function (arg1, arg2) { // timp: ggrph$node_equal(2270)
                                                                      let jsxtnm735 = arg1
                                                                      let jsxtnm736 = arg2
                                                                      // I1CMP:start
                                                                      let jsxtnm762 // let
                                                                      { // let
                                                                        // I1Dvaldclist(LCSRCsome1(doublets.dats)@(2572(line=206,offs=1)--2599(line=206,offs=28)))
                                                                        // I1VALDCL
                                                                        let jsxtnm737
                                                                        jsxtnm737 = jsxtnm735
                                                                        XATS000_patck(XATS000_ctgeq(jsxtnm735, XATSCTAG("list_cons",1)))
                                                                        // I1Dvaldclist(LCSRCsome1(doublets.dats)@(2600(line=207,offs=1)--2627(line=207,offs=28)))
                                                                        // I1VALDCL
                                                                        let jsxtnm738
                                                                        jsxtnm738 = jsxtnm736
                                                                        XATS000_patck(XATS000_ctgeq(jsxtnm736, XATSCTAG("list_cons",1)))
                                                                        // LCSRCsome1(doublets.dats)@(2538(line=202,offs=1)--2545(line=202,offs=8))
                                                                        // I0Etapq(I0Ecst(g_equal(30)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2018(line=97,offs=1)--2025(line=97,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                                                                        // T1IMPallx(g_equal(30);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1888(line=74,offs=1)--1922(line=75,offs=26)))
                                                                        // T1IMPallx(g_equal(30)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_equal(30);$list(@(a[425],T2Pcst(strn)))))))
                                                                        let jsxtnm760
                                                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1913(line=75,offs=17)--1920(line=75,offs=24))
                                                                        // I0Etapq(I0Ecst(strn_eq(1024)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(1883(line=77,offs=1)--1890(line=77,offs=8))));$list(T2JAG($list())))
                                                                        // T1IMPallx(strn_eq(1024);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1665(line=57,offs=1)--1696(line=58,offs=23)))
                                                                        // T1IMPallx(strn_eq(1024)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_eq(1024);$list()))))
                                                                        let jsxtnm759
                                                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1686(line=58,offs=13)--1690(line=58,offs=17))
                                                                        // I0Etapq(I0Ecst(g_eq(226)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gord000.sats)@(1486(line=50,offs=1)--1490(line=50,offs=5))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                                                                        // T1IMPallx(g_eq(226);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1922(line=85,offs=1)--1980(line=89,offs=23)))
                                                                        // T1IMPallx(g_eq(226)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5895],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_eq(226);$list(@(a[776],T2Pvar(x0[5895])))))))
                                                                        let jsxtnm758 = function (arg1, arg2) { // timp: g_eq(226)
                                                                          let jsxtnm739 = arg1
                                                                          let jsxtnm740 = arg2
                                                                          // I1CMP:start
                                                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1976(line=89,offs=19)--1977(line=89,offs=20))
                                                                          // I0Etapq(I0Ecst(sint_eq$sint(920)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2165(line=91,offs=1)--2177(line=91,offs=13))));$list(T2JAG($list())))
                                                                          // T1IMPallx(sint_eq$sint(920);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1942(line=84,offs=1)--2103(line=96,offs=2)))
                                                                          // T1IMPallx(sint_eq$sint(920)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_eq$sint(920);$list()))))
                                                                          let jsxtnm747 = function (arg1, arg2) { // timp: sint_eq$sint(920)
                                                                            let jsxtnm741 = arg1
                                                                            let jsxtnm742 = arg2
                                                                            // I1CMP:start
                                                                            let jsxtnm746 // let
                                                                            { // let
                                                                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2030(line=92,offs=1)--2101(line=95,offs=39)))
                                                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2038(line=93,offs=1)--2101(line=95,offs=39))
                                                                              // I1FUNDCL
                                                                              // XATS2JS_sint_eq$sint_2041
                                                                                // FJARGdarg($list(I1BNDcons(I1TNM(743);I0Pvar(i1(5081));$list(@(i1(5081),I1Vtnm(I1TNM(743))))),I1BNDcons(I1TNM(744);I0Pvar(i2(5082));$list(@(i2(5082),I1Vtnm(I1TNM(744)))))))
                                                                                // I1CMP:start
                                                                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_eq$sint);G1Nlist($list())) // I1CMP:return
                                                                              let jsxtnm745 = XATSDAPP(XATS2JS_sint_eq$sint(jsxtnm741, jsxtnm742))
                                                                              jsxtnm746 = jsxtnm745
                                                                            } // endlet
                                                                            // I1CMP:return:jsxtnm746
                                                                            return jsxtnm746
                                                                          } // endtimp(sint_eq$sint(920))
                                                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1958(line=89,offs=1)--1963(line=89,offs=6))
                                                                          // I0Etapq(I0Ecst(g_cmp(230)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gord000.sats)@(1630(line=66,offs=1)--1635(line=66,offs=6))));$list(T2JAG($list(T2Pvar(x0[5895])))))
                                                                          // T1IMPallx(g_cmp(230);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1828(line=69,offs=1)--1861(line=70,offs=25)))
                                                                          // T1IMPallx(g_cmp(230)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_cmp(230);$list(@(a[780],T2Pcst(strn)))))))
                                                                          let jsxtnm755
                                                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(1851(line=70,offs=15)--1859(line=70,offs=23))
                                                                          // I0Etapq(I0Ecst(strn_cmp(1028)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2269(line=99,offs=1)--2277(line=99,offs=9))));$list(T2JAG($list())))
                                                                          // T1IMPallx(strn_cmp(1028);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1859(line=79,offs=1)--2008(line=91,offs=2)))
                                                                          // T1IMPallx(strn_cmp(1028)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_cmp(1028);$list()))))
                                                                          let jsxtnm754 = function (arg1, arg2) { // timp: strn_cmp(1028)
                                                                            let jsxtnm748 = arg1
                                                                            let jsxtnm749 = arg2
                                                                            // I1CMP:start
                                                                            let jsxtnm753 // let
                                                                            { // let
                                                                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1939(line=87,offs=1)--2006(line=90,offs=39)))
                                                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1947(line=88,offs=1)--2006(line=90,offs=39))
                                                                              // I1FUNDCL
                                                                              // XATS2JS_strn_cmp_1950
                                                                                // FJARGdarg($list(I1BNDcons(I1TNM(750);I0Pvar(x1(5257));$list(@(x1(5257),I1Vtnm(I1TNM(750))))),I1BNDcons(I1TNM(751);I0Pvar(x2(5258));$list(@(x2(5258),I1Vtnm(I1TNM(751)))))))
                                                                                // I1CMP:start
                                                                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_cmp);G1Nlist($list())) // I1CMP:return
                                                                              let jsxtnm752 = XATSDAPP(XATS2JS_strn_cmp(jsxtnm748, jsxtnm749))
                                                                              jsxtnm753 = jsxtnm752
                                                                            } // endlet
                                                                            // I1CMP:return:jsxtnm753
                                                                            return jsxtnm753
                                                                          } // endtimp(strn_cmp(1028))
                                                                          jsxtnm755 = jsxtnm754
                                                                          let jsxtnm756 = XATSDAPP(jsxtnm755(jsxtnm739, jsxtnm740))
                                                                          let jsxtnm757 = XATSDAPP(jsxtnm747(jsxtnm756, XATSINT1(0)))
                                                                          // I1CMP:return:jsxtnm757
                                                                          return jsxtnm757
                                                                        } // endtimp(g_eq(226))
                                                                        jsxtnm759 = jsxtnm758
                                                                        jsxtnm760 = jsxtnm759
                                                                        let jsxtnm761 = XATSDAPP(jsxtnm760(XATSP1CN("list_cons", jsxtnm737[0+1]), XATSP1CN("list_cons", jsxtnm738[0+1])))
                                                                        jsxtnm762 = jsxtnm761
                                                                      } // endlet
                                                                      // I1CMP:return:jsxtnm762
                                                                      return jsxtnm762
                                                                    } // endtimp(ggrph$node_equal(2270))
                                                                    jsxtnm764 = jsxtnm763
                                                                    let jsxtnm765 = XATSDAPP(jsxtnm764(jsxtnm727, jsxtnm734))
                                                                    // I1CMP:return:jsxtnm765
                                                                    return jsxtnm765
                                                                  } // endtimp(exists$test(95))
                                                                  let jsxtnm767 = XATSDAPP(jsxtnm766(XATSP1CN("list_cons", jsxtnm733[0+1])))
                                                                  jsxtnm768 = jsxtnm767
                                                                  XATS000_patck(true)
                                                                  let jsxtnm770 // ift
                                                                  if (jsxtnm768) // ift
                                                                  {
                                                                    jsxtnm770 = XATSBOOL(true)
                                                                  } else {
                                                                    let jsxtnm769 = XATSDAPP(loop_3301(XATSP1CN("list_cons", jsxtnm733[1+1])))
                                                                    jsxtnm770 = jsxtnm769
                                                                  } // end(if)
                                                                  jsxtnm771 = jsxtnm770
                                                                } // endlet
                                                                jsxtnm772 = jsxtnm771
                                                                break // cls
                                                              } // gpt
                                                              // } // cls
                                                              XATS000_cfail()
                                                            } while (false) // end-of(do)
                                                            // I1CMP:return:jsxtnm772
                                                            return jsxtnm772
                                                          } // endfun(loop_3301)
                                                          let jsxtnm773 = XATSDAPP(loop_3301(jsxtnm730))
                                                          jsxtnm774 = jsxtnm773
                                                        } // endlet
                                                        // I1CMP:return:jsxtnm774
                                                        return jsxtnm774
                                                      } // endtimp(list_exists(1212))
                                                      jsxtnm776 = jsxtnm775
                                                      let jsxtnm777 = XATSDAPP(jsxtnm776(jsxtnm726))
                                                      jsxtnm778 = jsxtnm777
                                                    } // endlet
                                                    // I1CMP:return:jsxtnm778
                                                    return jsxtnm778
                                                  } // endtimp(gseq_memberq(520))
                                                  jsxtnm780 = jsxtnm779
                                                  // LCSRCsome1(ggrph.dats)@(1842(line=134,offs=20)--1847(line=134,offs=25))
                                                  // I0Etapq(I0Ecst(a0rf_get(1086)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axrf000.sats)@(2845(line=132,offs=1)--2853(line=132,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(node[5612]),T2Pnone0()))))))
                                                  // T1IMPallx(a0rf_get(1086);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2631(line=130,offs=1)--2736(line=139,offs=28)))
                                                  // T1IMPallx(a0rf_get(1086)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7203],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a0rf_get(1086);$list(@(a[2926],T2Pvar(x0[7203])))))))
                                                  let jsxtnm792 = function (arg1) { // timp: a0rf_get(1086)
                                                    let jsxtnm781 = arg1
                                                    // I1CMP:start
                                                    let jsxtnm791 // let
                                                    { // let
                                                      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2668(line=134,offs=1)--2699(line=137,offs=17)))
                                                      // I1VALDCL
                                                      let jsxtnm788
                                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2683(line=137,offs=1)--2692(line=137,offs=10))
                                                      // I0Etapq(I0Ecst(a0rf_lget(1090)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axrf000.sats)@(3279(line=158,offs=1)--3288(line=158,offs=10))));$list(T2JAG($list(T2Pvar(x0[7203])))))
                                                      // T1IMPallx(a0rf_lget(1090);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1722(line=59,offs=1)--1879(line=74,offs=2)))
                                                      // T1IMPallx(a0rf_lget(1090)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8892],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a0rf_lget(1090);$list(@(a[2930],T2Pvar(a[8892])))))))
                                                      let jsxtnm786 = function (arg1) { // timp: a0rf_lget(1090)
                                                        let jsxtnm782 = arg1
                                                        // I1CMP:start
                                                        let jsxtnm785 // let
                                                        { // let
                                                          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1798(line=67,offs=1)--1877(line=73,offs=28)))
                                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1806(line=68,offs=1)--1877(line=73,offs=28))
                                                          // I1FUNDCL
                                                          // XATS2JS_a0rf_lget_1809
                                                            // FJARGdarg($list(I1BNDcons(I1TNM(783);I0Pvar(A(5314));$list(@(A(5314),I1Vtnm(I1TNM(783)))))))
                                                            // I1CMP:start
                                                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_lget);G1Nlist($list())) // I1CMP:return
                                                          let jsxtnm784 = XATSDAPP(XATS2JS_a0rf_lget(jsxtnm782))
                                                          jsxtnm785 = jsxtnm784
                                                        } // endlet
                                                        // I1CMP:return:jsxtnm785
                                                        return jsxtnm785
                                                      } // endtimp(a0rf_lget(1090))
                                                      let jsxtnm787 = XATSDAPP(jsxtnm786(jsxtnm781))
                                                      jsxtnm788 = jsxtnm787
                                                      XATS000_patck(true)
                                                      // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2700(line=138,offs=1)--2726(line=139,offs=18)))
                                                      // I1VALDCL
                                                      // I1BNDcons(I1TNM(790);I0Ptup0($list());$list())
                                                      // I1CMP:start
                                                      // I1LETnew1(I1TNM(789);...)
                                                        // I1INSdapp(I1Vcst(owed_t0_elim0(5));$list(I1Vnone0()))
                                                      // I1CMP(ival):I1Vtnm(I1TNM(789)) // I1CMP:return
                                                      jsxtnm791 = jsxtnm788
                                                    } // endlet
                                                    // I1CMP:return:jsxtnm791
                                                    return jsxtnm791
                                                  } // endtimp(a0rf_get(1086))
                                                  let jsxtnm793 = XATSDAPP(jsxtnm792(jsxtnm655))
                                                  let jsxtnm794 = XATSDAPP(jsxtnm780(jsxtnm793, jsxtnm722))
                                                  let jsxtnm795 = XATSDAPP(jsxtnm725(jsxtnm794))
                                                  jsxtnm796 = jsxtnm795
                                                } // endlet
                                                // I1CMP:return:jsxtnm796
                                                return jsxtnm796
                                              } // endtimp(filter$test1(1491))
                                              let jsxtnm798 = XATSDAPP(jsxtnm797(jsxtnm721))
                                              // I1CMP:return:jsxtnm798
                                              return jsxtnm798
                                            } // endfun(test_2035)
                                            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2084(line=87,offs=1)--2124(line=88,offs=37)))
                                            // I1FUNDCL
                                            function free_2087(arg1)
                                            { // fun
                                              let jsxtnm799 = arg1
                                              // I1CMP:start
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(2110(line=88,offs=23)--2116(line=88,offs=29))
                                              // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1591(line=56,offs=1)--1597(line=56,offs=7))));$list(T2JAG($list(T2Pvar(x0[8881])))))
                                              // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
                                              // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5640],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[418],T2Pvar(x0[5640])))))))
                                              let jsxtnm802 = function (arg1) { // timp: g_free(23)
                                                let jsxtnm800 = arg1
                                                // I1CMP:start
                                                let jsxtnm801 = XATSTUP0([])
                                                // I1CMP:return:jsxtnm801
                                                return jsxtnm801
                                              } // endtimp(g_free(23))
                                              let jsxtnm803 = XATSDAPP(jsxtnm802(jsxtnm799))
                                              // I1CMP:return:jsxtnm803
                                              return jsxtnm803
                                            } // endfun(free_2087)
                                            let jsxtnm804 = XATSDAPP(XATS2JS_strm_vt_filter0$f1un(jsxtnm720, test_2035, free_2087))
                                            jsxtnm805 = jsxtnm804
                                          } // endlet
                                          // I1CMP:return:jsxtnm805
                                          return jsxtnm805
                                        } // endtimp(strm_vt_filter0(2182))
                                        // LCSRCsome1(ggrph.dats)@(1740(line=126,offs=1)--1759(line=126,offs=20))
                                        // I0Etapq(I0Ecst(ggrph$node_adjs$get(2271)(LCSRCsome1(ggrph.dats)@(388(line=30,offs=1)--407(line=30,offs=20))));$list(T2JAG($list(T2Pvar(node[5612])))))
                                        // T1IMPallx(ggrph$node_adjs$get(2271);LCSRCsome1(doublets.dats)@(2960(line=240,offs=1)--3038(line=244,offs=26)))
                                        // T1IMPallx(ggrph$node_adjs$get(2271)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(ggrph$node_adjs$get(2271);$list(@(node[5606],T2Pcst(node)))))))
                                        let jsxtnm809 = function (arg1) { // timp: ggrph$node_adjs$get(2271)
                                          let jsxtnm807 = arg1
                                          // I1CMP:start
                                          let jsxtnm808 = XATSDAPP(node_adjs$get_2636(jsxtnm807))
                                          // I1CMP:return:jsxtnm808
                                          return jsxtnm808
                                        } // endtimp(ggrph$node_adjs$get(2271))
                                        let jsxtnm810 = XATSDAPP(jsxtnm809(jsxtnm714))
                                        let jsxtnm811 = XATSDAPP(jsxtnm806(jsxtnm810))
                                        jsxtnm812 = jsxtnm811
                                      } // endlet
                                      // I1CMP:return:jsxtnm812
                                      return jsxtnm812
                                    } // endtimp(gtree$node_subs$get(2266))
                                    let jsxtnm814 = XATSDAPP(jsxtnm813(XATSP1CN("strmcon_vt_cons", jsxtnm713[0+1])))
                                    jsxtnm815 = jsxtnm814
                                    XATS000_patck(true)
                                    let jsxtnm816 = XATSCAPP("list_vt_cons", [1, jsxtnm815, jsxtnm673])
                                    jsxtnm817 = jsxtnm816
                                  } // endlet
                                  jsxtnm818 = jsxtnm817
                                  XATS000_patck(true)
                                  let jsxtnm819 = XATSDAPP(auxmain_1099(XATSP1CN("strmcon_vt_cons", jsxtnm713[1+1]), jsxtnm672, jsxtnm818))
                                  let jsxtnm820 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm713[0+1]), jsxtnm819])
                                  jsxtnm821 = jsxtnm820
                                } // endlet
                                jsxtnm822 = jsxtnm821
                                break // cls
                              } // gpt
                              // } // cls
                              XATS000_cfail()
                            } while (false) // end-of(do)
                            // I1CMP:return:jsxtnm822
                            return jsxtnm822
                          }) // endfun(l1azy)
                          // I1CMP:return:jsxtnm823
                          return jsxtnm823
                        } // endfun(auxmain_1099)
                        let jsxtnm824 = XATSDAPP(auxmain_1099(jsxtnm666, jsxtnm668, jsxtnm670))
                        jsxtnm825 = jsxtnm824
                      } // endlet
                      // I1CMP:return:jsxtnm825
                      return jsxtnm825
                    } // endtimp(gtree$nodelst_bfs$strmize(2268))
                    let jsxtnm827 = XATSDAPP(jsxtnm826(jsxtnm647))
                    jsxtnm828 = jsxtnm827
                  } // endlet
                  jsxtnm829 = jsxtnm828
                  XATS000_patck(true)
                  // I1Dfundclist(LCSRCsome1(ggrph.dats)@(1990(line=147,offs=1)--2271(line=170,offs=2)))
                  // I1FUNDCL
                  function auxmain_1993(arg1, arg2)
                  { // fun
                    let jsxtnm830 = arg1
                    let jsxtnm831 = arg2
                    // I1CMP:start
                    let jsxtnm870 = XATS000_l1azy(function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm832 = XATS000_dl1az(jsxtnm830)
                      let jsxtnm869 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(833);I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list());$list()))
                        if (XATS000_ctgeq(jsxtnm832, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                          let jsxtnm833 = jsxtnm832
                          let jsxtnm834 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm869 = jsxtnm834
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(835);I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(nd1(49)),I0Pvar(nds(50))));$list(@(nd1(49),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(835));0)),@(nds(50),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(835));1)))))
                        if (XATS000_ctgeq(jsxtnm832, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                          let jsxtnm835 = jsxtnm832
                          let jsxtnm868 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(ggrph.dats)@(2168(line=164,offs=1)--2209(line=165,offs=33)))
                            // I1VALDCL
                            let jsxtnm865
                            // LCSRCsome1(ggrph.dats)@(2178(line=165,offs=2)--2208(line=165,offs=32))
                            // I0Etapq(I0Ecst(a0rf_set(1087)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axrf000.sats)@(2882(line=135,offs=1)--2890(line=135,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(node[5612]),T2Pnone0()))))))
                            // T1IMPallx(a0rf_set(1087);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2737(line=140,offs=1)--2842(line=146,offs=29)))
                            // T1IMPallx(a0rf_set(1087)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7204],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a0rf_set(1087);$list(@(a[2927],T2Pvar(x0[7204])))))))
                            let jsxtnm849 = function (arg1, arg2) { // timp: a0rf_set(1087)
                              let jsxtnm836 = arg1
                              let jsxtnm837 = arg2
                              // I1CMP:start
                              let jsxtnm848 // let
                              { // let
                                // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2777(line=144,offs=1)--2805(line=145,offs=20)))
                                // I1VALDCL
                                // I1BNDcons(I1TNM(839);I0Pvar(px(2345));$list(@(px(2345),I1Vtnm(I1TNM(839)))))
                                // I1CMP:start
                                // I1LETnew1(I1TNM(838);...)
                                  // I1INSdapp(I1Vcst(owed_t0_make(4));$list())
                                // I1CMP(ival):I1Vtnm(I1TNM(838)) // I1CMP:return
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2814(line=146,offs=1)--2823(line=146,offs=10))
                                // I0Etapq(I0Ecst(a0rf_lset(1091)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axrf000.sats)@(3327(line=162,offs=1)--3336(line=162,offs=10))));$list(T2JAG($list(T2Pvar(x0[7204])))))
                                // T1IMPallx(a0rf_lset(1091);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1883(line=76,offs=1)--2051(line=90,offs=2)))
                                // T1IMPallx(a0rf_lset(1091)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8894],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a0rf_lset(1091);$list(@(a[2931],T2Pvar(a[8894])))))))
                                let jsxtnm846 = function (arg1, arg2) { // timp: a0rf_lset(1091)
                                  let jsxtnm840 = arg1
                                  let jsxtnm841 = arg2
                                  // I1CMP:start
                                  let jsxtnm845 // let
                                  { // let
                                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1967(line=84,offs=1)--2049(line=89,offs=35)))
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1975(line=85,offs=1)--2049(line=89,offs=35))
                                    // I1FUNDCL
                                    // XATS2JS_a0rf_lset_1978
                                      // FJARGdarg($list(I1BNDcons(I1TNM(842);I0Pvar(A(5320));$list(@(A(5320),I1Vtnm(I1TNM(842))))),I1BNDcons(I1TNM(843);I0Pvar(x(5321));$list(@(x(5321),I1Vtnm(I1TNM(843)))))))
                                      // I1CMP:start
                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_lset);G1Nlist($list())) // I1CMP:return
                                    let jsxtnm844 = XATSDAPP(XATS2JS_a0rf_lset(jsxtnm840, jsxtnm841))
                                    jsxtnm845 = jsxtnm844
                                  } // endlet
                                  // I1CMP:return:jsxtnm845
                                  return jsxtnm845
                                } // endtimp(a0rf_lset(1091))
                                let jsxtnm847 = XATSDAPP(jsxtnm846(jsxtnm836, jsxtnm837))
                                jsxtnm848 = jsxtnm847
                              } // endlet
                              // I1CMP:return:jsxtnm848
                              return jsxtnm848
                            } // endtimp(a0rf_set(1087))
                            // LCSRCsome1(ggrph.dats)@(2202(line=165,offs=26)--2207(line=165,offs=31))
                            // I0Etapq(I0Ecst(a0rf_get(1086)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axrf000.sats)@(2845(line=132,offs=1)--2853(line=132,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(node[5612]),T2Pnone0()))))))
                            // T1IMPallx(a0rf_get(1086);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2631(line=130,offs=1)--2736(line=139,offs=28)))
                            // T1IMPallx(a0rf_get(1086)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7203],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a0rf_get(1086);$list(@(a[2926],T2Pvar(x0[7203])))))))
                            let jsxtnm861 = function (arg1) { // timp: a0rf_get(1086)
                              let jsxtnm850 = arg1
                              // I1CMP:start
                              let jsxtnm860 // let
                              { // let
                                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2668(line=134,offs=1)--2699(line=137,offs=17)))
                                // I1VALDCL
                                let jsxtnm857
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2683(line=137,offs=1)--2692(line=137,offs=10))
                                // I0Etapq(I0Ecst(a0rf_lget(1090)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axrf000.sats)@(3279(line=158,offs=1)--3288(line=158,offs=10))));$list(T2JAG($list(T2Pvar(x0[7203])))))
                                // T1IMPallx(a0rf_lget(1090);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1722(line=59,offs=1)--1879(line=74,offs=2)))
                                // T1IMPallx(a0rf_lget(1090)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8892],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a0rf_lget(1090);$list(@(a[2930],T2Pvar(a[8892])))))))
                                let jsxtnm855 = function (arg1) { // timp: a0rf_lget(1090)
                                  let jsxtnm851 = arg1
                                  // I1CMP:start
                                  let jsxtnm854 // let
                                  { // let
                                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1798(line=67,offs=1)--1877(line=73,offs=28)))
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1806(line=68,offs=1)--1877(line=73,offs=28))
                                    // I1FUNDCL
                                    // XATS2JS_a0rf_lget_1809
                                      // FJARGdarg($list(I1BNDcons(I1TNM(852);I0Pvar(A(5314));$list(@(A(5314),I1Vtnm(I1TNM(852)))))))
                                      // I1CMP:start
                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_lget);G1Nlist($list())) // I1CMP:return
                                    let jsxtnm853 = XATSDAPP(XATS2JS_a0rf_lget(jsxtnm851))
                                    jsxtnm854 = jsxtnm853
                                  } // endlet
                                  // I1CMP:return:jsxtnm854
                                  return jsxtnm854
                                } // endtimp(a0rf_lget(1090))
                                let jsxtnm856 = XATSDAPP(jsxtnm855(jsxtnm850))
                                jsxtnm857 = jsxtnm856
                                XATS000_patck(true)
                                // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2700(line=138,offs=1)--2726(line=139,offs=18)))
                                // I1VALDCL
                                // I1BNDcons(I1TNM(859);I0Ptup0($list());$list())
                                // I1CMP:start
                                // I1LETnew1(I1TNM(858);...)
                                  // I1INSdapp(I1Vcst(owed_t0_elim0(5));$list(I1Vnone0()))
                                // I1CMP(ival):I1Vtnm(I1TNM(858)) // I1CMP:return
                                jsxtnm860 = jsxtnm857
                              } // endlet
                              // I1CMP:return:jsxtnm860
                              return jsxtnm860
                            } // endtimp(a0rf_get(1086))
                            let jsxtnm862 = XATSDAPP(jsxtnm861(jsxtnm831))
                            let jsxtnm863 = XATSCAPP("list_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm835[0+1]), jsxtnm862])
                            let jsxtnm864 = XATSDAPP(jsxtnm849(jsxtnm831, jsxtnm863))
                            jsxtnm865 = jsxtnm864
                            XATS000_patck(true)
                            let jsxtnm866 = XATSDAPP(auxmain_1993(XATSP1CN("strmcon_vt_cons", jsxtnm835[1+1]), jsxtnm831))
                            let jsxtnm867 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm835[0+1]), jsxtnm866])
                            jsxtnm868 = jsxtnm867
                          } // endlet
                          jsxtnm869 = jsxtnm868
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm869
                      return jsxtnm869
                    }) // endfun(l1azy)
                    // I1CMP:return:jsxtnm870
                    return jsxtnm870
                  } // endfun(auxmain_1993)
                  let jsxtnm871 = XATSDAPP(auxmain_1993(jsxtnm829, jsxtnm655))
                  jsxtnm872 = jsxtnm871
                } // endlet
                jsxtnm873 = jsxtnm872
              } // endlet
              // I1CMP:return:jsxtnm873
              return jsxtnm873
            } // endtimp(ggrph$nodelst_bfs$strmize(2273))
            let jsxtnm875 = XATSDAPP(jsxtnm874(jsxtnm646))
            jsxtnm876 = jsxtnm875
          } // endlet
          // I1CMP:return:jsxtnm876
          return jsxtnm876
        } // endtimp(ggrph$node_bfs$strmize(2272))
        let jsxtnm878 = XATSDAPP(jsxtnm877(jsxtnm592))
        let jsxtnm879 = XATSDAPP(jsxtnm631(jsxtnm878))
        jsxtnm880 = jsxtnm879
      } // endlet
      jsxtnm881 = jsxtnm880
    } // endlet
    jsxtnm882 = jsxtnm881
  } // endlet
  // I1CMP:return:jsxtnm882
  return jsxtnm882
} // endfun(impl)
// I1Dvaldclist(LCSRCsome1(doublets.dats)@(3359(line=270,offs=1)--3412(line=270,offs=54)))
// I1VALDCL
let jsxtnm893
// LCSRCsome1(doublets.dats)@(3368(line=270,offs=10)--3379(line=270,offs=21))
// I0Etapq(I0Ecst(console_log(2626)(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1544(line=50,offs=1)--1555(line=50,offs=12))));$list(T2JAG($list())))
// T1IMPallx(console_log(2626);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1581(line=53,offs=1)--1730(line=65,offs=2)))
// T1IMPallx(console_log(2626)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(console_log(2626);$list()))))
let jsxtnm887 = function (arg1) { // timp: console_log(2626)
  let jsxtnm883 = arg1
  // I1CMP:start
  let jsxtnm886 // let
  { // let
    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1663(line=61,offs=1)--1728(line=64,offs=34)))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1671(line=62,offs=1)--1728(line=64,offs=34))
    // I1FUNDCL
    // XATS2JS_console_log_1674
      // FJARGdarg($list(I1BNDcons(I1TNM(884);I0Pvar(x0(4953));$list(@(x0(4953),I1Vtnm(I1TNM(884)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_console_log);G1Nlist($list())) // I1CMP:return
    let jsxtnm885 = XATSDAPP(XATS2JS_console_log(jsxtnm883))
    jsxtnm886 = jsxtnm885
  } // endlet
  // I1CMP:return:jsxtnm886
  return jsxtnm886
} // endtimp(console_log(2626))
// LCSRCsome1(doublets.dats)@(3380(line=270,offs=22)--3401(line=270,offs=43))
// I0Etapq(I0Ecst(the_print_store_flush(2629)(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1836(line=76,offs=1)--1857(line=76,offs=22))));$list(T2JAG($list())))
// T1IMPallx(the_print_store_flush(2629);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1998(line=87,offs=1)--2171(line=98,offs=2)))
// T1IMPallx(the_print_store_flush(2629)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(the_print_store_flush(2629);$list()))))
let jsxtnm890 = function () { // timp: the_print_store_flush(2629)
  // I1CMP:start
  let jsxtnm889 // let
  { // let
    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(2108(line=95,offs=1)--2169(line=97,offs=50)))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(2116(line=96,offs=1)--2169(line=97,offs=50))
    // I1FUNDCL
    // XATS2JS_the_print_store_flush_2119
      // FJARGdarg($list())
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_the_print_store_flush);G1Nlist($list())) // I1CMP:return
    let jsxtnm888 = XATSDAPP(XATS2JS_the_print_store_flush())
    jsxtnm889 = jsxtnm888
  } // endlet
  // I1CMP:return:jsxtnm889
  return jsxtnm889
} // endtimp(the_print_store_flush(2629))
let jsxtnm891 = XATSDAPP(jsxtnm890())
let jsxtnm892 = XATSDAPP(jsxtnm887(jsxtnm891))
jsxtnm893 = jsxtnm892
XATS000_patck(true)
// LCSRCsome1(doublets.dats)@(3696(line=281,offs=1)--3696(line=281,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(doublets.dats)@(3696(line=281,offs=1)--3696(line=281,offs=1));D3Cnone0()))
// LCSRCsome1(JS_doublets.dats)@(41(line=3,offs=1)--82(line=4,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(UN);G1Estr(T_STRN1_clsd("prelude/SATS/unsfx00.sats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats));...)))
// LCSRCsome1(JS_doublets.dats)@(103(line=6,offs=1)--134(line=6,offs=32))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(DB);G1Estr(T_STRN1_clsd("./doublets.dats";17)));$optn(FPATH(doublets.dats));...)))
// I1Dinclude(LCSRCsome1(JS_doublets.dats)@(175(line=9,offs=1)--226(line=11,offs=33)))
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
// I1Dinclude(LCSRCsome1(JS_doublets.dats)@(270(line=15,offs=1)--311(line=16,offs=33)))
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
// I1Dinclude(LCSRCsome1(JS_doublets.dats)@(312(line=17,offs=1)--363(line=19,offs=33)))
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
// I1Dinclude(LCSRCsome1(JS_doublets.dats)@(410(line=24,offs=1)--454(line=25,offs=36)))
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
// I1Dinclude(LCSRCsome1(JS_doublets.dats)@(455(line=26,offs=1)--499(line=27,offs=36)))
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
// I1Dextern(LCSRCsome1(JS_doublets.dats)@(546(line=32,offs=1)--607(line=35,offs=33)))
// LCSRCsome1(JS_doublets.dats)@(554(line=33,offs=1)--607(line=35,offs=33))
// I1FUNDCL
// JS_doublets_arg1_557
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(JS_doublets_arg1);G1Nlist($list())) // I1CMP:return
// I1Dextern(LCSRCsome1(JS_doublets.dats)@(608(line=36,offs=1)--669(line=39,offs=33)))
// LCSRCsome1(JS_doublets.dats)@(616(line=37,offs=1)--669(line=39,offs=33))
// I1FUNDCL
// JS_doublets_arg2_619
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(JS_doublets_arg2);G1Nlist($list())) // I1CMP:return
// I1Dextern(LCSRCsome1(JS_doublets.dats)@(670(line=40,offs=1)--731(line=43,offs=33)))
// LCSRCsome1(JS_doublets.dats)@(678(line=41,offs=1)--731(line=43,offs=33))
// I1FUNDCL
// JS_doublets_dict_681
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(JS_doublets_dict);G1Nlist($list())) // I1CMP:return
// I1Dextern(LCSRCsome1(JS_doublets.dats)@(778(line=48,offs=1)--839(line=51,offs=33)))
// LCSRCsome1(JS_doublets.dats)@(786(line=49,offs=1)--839(line=51,offs=33))
// I1FUNDCL
// JS_doublets_main_789
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(JS_doublets_main);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(JS_doublets.dats)@(843(line=53,offs=1)--1778(line=116,offs=2)))
let JS_doublets_main = function () { // impl
  // I1CMP:start
  let jsxtnm517 // let
  { // let
    // I1Dfundclist(LCSRCsome1(JS_doublets.dats)@(1465(line=99,offs=1)--1734(line=114,offs=2)))
    // I1FUNDCL
    function dict_line$split_1468(arg1)
    { // fun
      let jsxtnm1 = arg1
      // I1CMP:start
      let jsxtnm226 // let
      { // let
        // LCSRCsome1(JS_doublets.dats)@(1587(line=106,offs=1)--1605(line=107,offs=10))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(c0;S2Ecst(cgtz)))))
        // LCSRCsome1(JS_doublets.dats)@(1606(line=108,offs=1)--1624(line=109,offs=10))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(cs;S2Ecst(strn)))))
        // LCSRCsome1(JS_doublets.dats)@(1625(line=110,offs=1)--1652(line=111,offs=19))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rs;S2Eapps(S2Ecst(list_vt);$list(S2Ecst(cgtz)))))))
        // I1Dvaldclist(LCSRCsome1(JS_doublets.dats)@(1653(line=112,offs=1)--1732(line=113,offs=70)))
        // I1VALDCL
        let jsxtnm182
        // LCSRCsome1(JS_doublets.dats)@(1663(line=113,offs=1)--1696(line=113,offs=34))
        // I0Etapq(I0Ecst(gseq_segmentize0$f1un_lstrm$llist(2336)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1894(line=77,offs=1)--1927(line=77,offs=34))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
        // T1IMPallx(gseq_segmentize0$f1un_lstrm$llist(2336);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2891(line=144,offs=1)--3073(line=157,offs=4)))
        // T1IMPallx(gseq_segmentize0$f1un_lstrm$llist(2336)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8862],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8863],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_segmentize0$f1un_lstrm$llist(2336);$list(@(xs[5687],T2Pvar(xs[8862])),@(x0[5688],T2Pvar(x0[8863])))))))
        let jsxtnm170 = function (arg1, arg2) { // timp: gseq_segmentize0$f1un_lstrm$llist(2336)
          let jsxtnm2 = arg1
          let jsxtnm3 = arg2
          // I1CMP:start
          let jsxtnm169 // let
          { // let
            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2972(line=151,offs=1)--3006(line=152,offs=26)))
            // I1Dimplmnt0(DIMPLone2(segment$delim1(2332);$list(@(x0[5681],T2Pvar(x0[8863]))))):timp
            // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(3028(line=156,offs=3)--3056(line=156,offs=31))
            // I0Etapq(I0Ecst(gseq_segmentize0_lstrm$llist(2333)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1636(line=61,offs=1)--1664(line=61,offs=29))));$list(T2JAG($list(T2Pvar(xs[8862]))),T2JAG($list(T2Pvar(x0[8863])))))
            // T1IMPallx(gseq_segmentize0_lstrm$llist(2333);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1566(line=52,offs=1)--1795(line=66,offs=4)))
            // T1IMPallx(gseq_segmentize0_lstrm$llist(2333)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8857],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8858],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_segmentize0_lstrm$llist(2333);$list(@(xs[5682],T2Pvar(xs[8857])),@(x0[5683],T2Pvar(x0[8858])))))))
            let jsxtnm167 = function (arg1) { // timp: gseq_segmentize0_lstrm$llist(2333)
              let jsxtnm4 = arg1
              // I1CMP:start
              let jsxtnm166 // let
              { // let
                // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1644(line=59,offs=1)--1669(line=59,offs=26))
                // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rs;S2Eapps(S2Ecst(list_vt);$list(S2Evar(x0[8858])))))))
                // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1673(line=61,offs=1)--1722(line=62,offs=41)))
                // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pcst(rs)),@(y0[3807],T2Pcst(rs))))):timp
                // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1731(line=64,offs=1)--1743(line=64,offs=13))
                // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8858]),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8858]),T2Pnone0()))))))
                // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
                // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8588],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8589],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8588])),@(y0[5444],T2Pvar(y0[8589])))))))
                let jsxtnm38 = function (arg1) { // timp: strm_vt_map0(2174)
                  let jsxtnm5 = arg1
                  // I1CMP:start
                  let jsxtnm37 // let
                  { // let
                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
                    // I1FUNDCL
                    function auxmain_4114(arg1)
                    { // fun
                      let jsxtnm6 = arg1
                      // I1CMP:start
                      let jsxtnm35 = XATS000_l1azy(function (tlaz) { // l1azy
                        // I1CMP:start
                        let jsxtnm7 = XATS000_dl1az(jsxtnm6)
                        let jsxtnm34 // cas
                        do {
                          // { // cls
                          // I1GPTpat(I1BNDcons(I1TNM(8);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                          if (XATS000_ctgeq(jsxtnm7, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                            let jsxtnm8 = jsxtnm7
                            let jsxtnm9 = XATSCAPP("strmcon_vt_nil", [0])
                            jsxtnm34 = jsxtnm9
                            break // cls
                          } // gpt
                          // } // cls
                          // { // cls
                          // I1GPTpat(I1BNDcons(I1TNM(10);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4516)),I0Pvar(xs(4517)))));$list(@(x1(4516),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(10));0)),@(xs(4517),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(10));1)))))
                          if (XATS000_ctgeq(jsxtnm7, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                            let jsxtnm10 = jsxtnm7
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                            // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8588]))),T2JAG($list(T2Pvar(y0[8589])))))
                            // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1673(line=61,offs=1)--1722(line=62,offs=41)))
                            // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8857],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8858],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Papps(T2Pcst(list_vt);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))),@(y0[3807],T2Papps(T2Pcst(list_vt);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))))
                            let jsxtnm30
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1702(line=62,offs=21)--1718(line=62,offs=37))
                            // I0Etapq(I0Ecst(list_vt_reverse0(2015)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4454(line=254,offs=1)--4470(line=254,offs=17))));$list(T2JAG($list(T2Pvar(x0[8858])))))
                            // T1IMPallx(list_vt_reverse0(2015);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6829(line=462,offs=1)--6916(line=465,offs=46)))
                            // T1IMPallx(list_vt_reverse0(2015)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8439],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2015);$list(@(x0[5185],T2Pvar(a[8439])))))))
                            let jsxtnm29 = function (arg1) { // timp: list_vt_reverse0(2015)
                              let jsxtnm11 = arg1
                              // I1CMP:start
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6871(line=465,offs=1)--6888(line=465,offs=18))
                              // I0Etapq(I0Ecst(list_vt_rappend00(2018)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list000_vt.sats)@(4835(line=280,offs=1)--4852(line=280,offs=18))));$list(T2JAG($list(T2Pvar(a[8439])))))
                              // T1IMPallx(list_vt_rappend00(2018);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6351(line=426,offs=1)--6760(line=458,offs=2)))
                              // T1IMPallx(list_vt_rappend00(2018)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[8436],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2018);$list(@(x0[5192],T2Pvar(a[8436])))))))
                              let jsxtnm26 = function (arg1, arg2) { // timp: list_vt_rappend00(2018)
                                let jsxtnm12 = arg1
                                let jsxtnm13 = arg2
                                // I1CMP:start
                                let jsxtnm25 // let
                                { // let
                                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6430(line=434,offs=1)--6721(line=456,offs=2)))
                                  // I1FUNDCL
                                  function loop_6433(arg1, arg2)
                                  { // fun
                                    let jsxtnm14 = arg1
                                    let jsxtnm15 = arg2
                                    // I1CMP:start
                                    let jsxtnm23 // cas
                                    do {
                                      // { // cls
                                      // I1GPTpat(I1BNDcons(I1TNM(16);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                                      if (XATS000_ctgeq(jsxtnm14, XATSCTAG("list_vt_nil",0))) { // gpt
                                        let jsxtnm16 = jsxtnm14
                                        jsxtnm23 = jsxtnm15
                                        break // cls
                                      } // gpt
                                      // } // cls
                                      // { // cls
                                      // I1GPTpat(I1BNDcons(I1TNM(17);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                                      if (XATS000_ctgeq(jsxtnm14, XATSCTAG("list_vt_cons",1))) { // gpt
                                        let jsxtnm17 = jsxtnm14
                                        let jsxtnm22 // let
                                        { // let
                                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6604(line=450,offs=3)--6619(line=450,offs=18)))
                                          // I1VALDCL
                                          let jsxtnm19
                                          let jsxtnm18 = XATSPCON(jsxtnm14,1)
                                          jsxtnm19 = jsxtnm18
                                          XATS000_patck(true)
                                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(6622(line=451,offs=3)--6644(line=451,offs=25)))
                                          // I1VALDCL
                                          let jsxtnm20
                                          XATS000_assgn(XATSLPCN(1, jsxtnm14), jsxtnm15)
                                          jsxtnm20 = []
                                          XATS000_patck(true)
                                          XATS000_fold(jsxtnm14)
                                          let jsxtnm21 = XATSDAPP(loop_6433(jsxtnm19, jsxtnm14))
                                          jsxtnm22 = jsxtnm21
                                        } // endlet
                                        jsxtnm23 = jsxtnm22
                                        break // cls
                                      } // gpt
                                      // } // cls
                                      XATS000_cfail()
                                    } while (false) // end-of(do)
                                    // I1CMP:return:jsxtnm23
                                    return jsxtnm23
                                  } // endfun(loop_6433)
                                  let jsxtnm24 = XATSDAPP(loop_6433(jsxtnm12, jsxtnm13))
                                  jsxtnm25 = jsxtnm24
                                } // endlet
                                // I1CMP:return:jsxtnm25
                                return jsxtnm25
                              } // endtimp(list_vt_rappend00(2018))
                              let jsxtnm27 = XATSCAPP("list_vt_nil", [0])
                              let jsxtnm28 = XATSDAPP(jsxtnm26(jsxtnm11, jsxtnm27))
                              // I1CMP:return:jsxtnm28
                              return jsxtnm28
                            } // endtimp(list_vt_reverse0(2015))
                            jsxtnm30 = jsxtnm29
                            let jsxtnm31 = XATSDAPP(jsxtnm30(XATSP1CN("strmcon_vt_cons", jsxtnm10[0+1])))
                            let jsxtnm32 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm10[1+1])))
                            let jsxtnm33 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm31, jsxtnm32])
                            jsxtnm34 = jsxtnm33
                            break // cls
                          } // gpt
                          // } // cls
                          XATS000_cfail()
                        } while (false) // end-of(do)
                        // I1CMP:return:jsxtnm34
                        return jsxtnm34
                      }) // endfun(l1azy)
                      // I1CMP:return:jsxtnm35
                      return jsxtnm35
                    } // endfun(auxmain_4114)
                    let jsxtnm36 = XATSDAPP(auxmain_4114(jsxtnm5))
                    jsxtnm37 = jsxtnm36
                  } // endlet
                  // I1CMP:return:jsxtnm37
                  return jsxtnm37
                } // endtimp(strm_vt_map0(2174))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1749(line=65,offs=1)--1778(line=65,offs=30))
                // I0Etapq(I0Ecst(gseq_segmentize0_lstrm$rllist(2334)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1721(line=67,offs=1)--1750(line=67,offs=30))));$list(T2JAG($list(T2Pvar(xs[8857]))),T2JAG($list(T2Pvar(x0[8858])))))
                // T1IMPallx(gseq_segmentize0_lstrm$rllist(2334);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1870(line=70,offs=1)--2038(line=80,offs=4)))
                // T1IMPallx(gseq_segmentize0_lstrm$rllist(2334)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8859],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8860],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_segmentize0_lstrm$rllist(2334);$list(@(xs[5684],T2Pvar(xs[8859])),@(x0[5685],T2Pvar(x0[8860])))))))
                let jsxtnm163 = function (arg1) { // timp: gseq_segmentize0_lstrm$rllist(2334)
                  let jsxtnm39 = arg1
                  // I1CMP:start
                  let jsxtnm162 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1946(line=76,offs=1)--1980(line=77,offs=26)))
                    // I1VALDCL
                    let jsxtnm121
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1955(line=77,offs=1)--1968(line=77,offs=14))
                    // I0Etapq(I0Ecst(gseq_strmize0(1682)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gseq001_vt.sats)@(1810(line=69,offs=1)--1823(line=69,offs=14))));$list(T2JAG($list(T2Pvar(xs[8859]))),T2JAG($list(T2Pvar(x0[8860])))))
                    // T1IMPallx(gseq_strmize0(1682);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gxyz000_vt.dats)@(1783(line=71,offs=1)--1861(line=76,offs=28)))
                    // T1IMPallx(gseq_strmize0(1682)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8703],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8704],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_strmize0(1682);$list(@(xs[4215],T2Pvar(xs[8703])),@(x0[4216],T2Pvar(x0[8704])))))))
                    let jsxtnm119 = function (arg1) { // timp: gseq_strmize0(1682)
                      let jsxtnm40 = arg1
                      // I1CMP:start
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gxyz000_vt.dats)@(1836(line=76,offs=3)--1848(line=76,offs=15))
                      // I0Etapq(I0Ecst(gseq_strmize(372)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(2503(line=122,offs=1)--2515(line=122,offs=13))));$list(T2JAG($list(T2Pvar(xs[8703]))),T2JAG($list(T2Pvar(x0[8704])))))
                      // T1IMPallx(gseq_strmize(372);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(4972(line=311,offs=1)--5020(line=312,offs=40)))
                      // T1IMPallx(gseq_strmize(372)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_strmize(372);$list(@(xs[1109],T2Pcst(strn)),@(x0[1110],T2Pcst(cgtz)))))))
                      let jsxtnm117
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(5008(line=312,offs=28)--5020(line=312,offs=40))
                      // I0Etapq(I0Ecst(strn_strmize(1057)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn001.sats)@(1422(line=42,offs=1)--1434(line=42,offs=13))));$list(T2JAG($list())))
                      // T1IMPallx(strn_strmize(1057);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(4913(line=308,offs=1)--4971(line=310,offs=40)))
                      // T1IMPallx(strn_strmize(1057)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_strmize(1057);$list()))))
                      let jsxtnm116
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(4947(line=310,offs=16)--4959(line=310,offs=28))
                      // I0Etapq(I0Ecst(gasq_strmize(599)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gasq001.sats)@(1638(line=60,offs=1)--1650(line=60,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
                      // T1IMPallx(gasq_strmize(599);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2169(line=98,offs=1)--2394(line=118,offs=4)))
                      // T1IMPallx(gasq_strmize(599)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6460],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[6461],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gasq_strmize(599);$list(@(xs[1876],T2Pvar(xs[6460])),@(x0[1877],T2Pvar(x0[6461])))))))
                      let jsxtnm115 = function (arg1) { // timp: gasq_strmize(599)
                        let jsxtnm41 = arg1
                        // I1CMP:start
                        let jsxtnm114 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2226(line=104,offs=1)--2259(line=106,offs=13)))
                          // I1VALDCL
                          let jsxtnm49
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2235(line=105,offs=1)--2246(line=105,offs=12))
                          // I0Etapq(I0Ecst(gasq_length(588)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gasq000.sats)@(1495(line=47,offs=1)--1506(line=47,offs=12))));$list(T2JAG($list(T2Pvar(xs[6460]))),T2JAG($list(T2Pvar(x0[6461])))))
                          // T1IMPallx(gasq_length(588);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2584(line=128,offs=1)--2633(line=130,offs=29)))
                          // T1IMPallx(gasq_length(588)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gasq_length(588);$list(@(xs[1850],T2Pcst(strn)),@(x0[1851],T2Pcst(char)))))))
                          let jsxtnm47
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2620(line=130,offs=16)--2631(line=130,offs=27))
                          // I0Etapq(I0Ecst(strn_length(1030)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2709(line=131,offs=1)--2720(line=131,offs=12))));$list(T2JAG($list())))
                          // T1IMPallx(strn_length(1030);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1610(line=57,offs=1)--1756(line=69,offs=2)))
                          // T1IMPallx(strn_length(1030)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(1030);$list()))))
                          let jsxtnm46 = function (arg1) { // timp: strn_length(1030)
                            let jsxtnm42 = arg1
                            // I1CMP:start
                            let jsxtnm45 // let
                            { // let
                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1692(line=65,offs=1)--1754(line=68,offs=31)))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1700(line=66,offs=1)--1754(line=68,offs=31))
                              // I1FUNDCL
                              // XATS2JS_strn_length_1703
                                // FJARGdarg($list(I1BNDcons(I1TNM(43);I0Pvar(cs(5253));$list(@(cs(5253),I1Vtnm(I1TNM(43)))))))
                                // I1CMP:start
                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                              let jsxtnm44 = XATSDAPP(XATS2JS_strn_length(jsxtnm42))
                              jsxtnm45 = jsxtnm44
                            } // endlet
                            // I1CMP:return:jsxtnm45
                            return jsxtnm45
                          } // endtimp(strn_length(1030))
                          jsxtnm47 = jsxtnm46
                          let jsxtnm48 = XATSDAPP(jsxtnm47(jsxtnm41))
                          jsxtnm49 = jsxtnm48
                          XATS000_patck(true)
                          let jsxtnm113 // let
                          { // let
                            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2302(line=112,offs=1)--2388(line=116,offs=32)))
                            // I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pcst(ni)),@(y0[484],T2Pvar(x0[6461]))))):timp
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2270(line=109,offs=1)--2284(line=109,offs=15))
                            // I0Etapq(I0Ecst(nint_map_lstrm(961)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint001.sats)@(4532(line=235,offs=1)--4546(line=235,offs=15))));$list(T2JAG($list(T2Pvar(x0[6461])))))
                            // T1IMPallx(nint_map_lstrm(961);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5537(line=350,offs=1)--5804(line=371,offs=2)))
                            // T1IMPallx(nint_map_lstrm(961)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(y0[7178],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(nint_map_lstrm(961);$list(@(y0[2843],T2Pvar(y0[7178])))))))
                            let jsxtnm111 = function (arg1) { // timp: nint_map_lstrm(961)
                              let jsxtnm52 = arg1
                              // I1CMP:start
                              let jsxtnm110 // let
                              { // let
                                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5606(line=357,offs=1)--5802(line=370,offs=2)))
                                // I1FUNDCL
                                function auxmain_5609(arg1)
                                { // fun
                                  let jsxtnm53 = arg1
                                  // I1CMP:start
                                  let jsxtnm108 = XATS000_l1azy(function (tlaz) { // l1azy
                                    // I1CMP:start
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5660(line=363,offs=5)--5662(line=363,offs=7))
                                    // I0Etapq(I0Ecst(sint_gte$sint(922)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
                                    // T1IMPallx(sint_gte$sint(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                                    // T1IMPallx(sint_gte$sint(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(922);$list()))))
                                    let jsxtnm60 = function (arg1, arg2) { // timp: sint_gte$sint(922)
                                      let jsxtnm54 = arg1
                                      let jsxtnm55 = arg2
                                      // I1CMP:start
                                      let jsxtnm59 // let
                                      { // let
                                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                                        // I1FUNDCL
                                        // XATS2JS_sint_gte$sint_2399
                                          // FJARGdarg($list(I1BNDcons(I1TNM(56);I0Pvar(i1(5091));$list(@(i1(5091),I1Vtnm(I1TNM(56))))),I1BNDcons(I1TNM(57);I0Pvar(i2(5092));$list(@(i2(5092),I1Vtnm(I1TNM(57)))))))
                                          // I1CMP:start
                                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                                        let jsxtnm58 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm54, jsxtnm55))
                                        jsxtnm59 = jsxtnm58
                                      } // endlet
                                      // I1CMP:return:jsxtnm59
                                      return jsxtnm59
                                    } // endtimp(sint_gte$sint(922))
                                    let jsxtnm61 = XATSDAPP(jsxtnm60(jsxtnm53, jsxtnm52))
                                    let jsxtnm107 // ift
                                    if (jsxtnm61) // ift
                                    {
                                      let jsxtnm62 = XATSCAPP("strmcon_vt_nil", [0])
                                      jsxtnm107 = jsxtnm62
                                    } else {
                                      let jsxtnm106 // let
                                      { // let
                                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5698(line=366,offs=1)--5727(line=367,offs=21)))
                                        // I1VALDCL
                                        let jsxtnm95
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5707(line=367,offs=1)--5715(line=367,offs=9))
                                        // I0Etapq(I0Ecst(map$fopr(75)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(3732(line=232,offs=1)--3740(line=232,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Pvar(y0[7178])))))
                                        // T1IMPallx(map$fopr(75);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2302(line=112,offs=1)--2388(line=116,offs=32)))
                                        // T1IMPallx(map$fopr(75)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6460],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[6461],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr(75);$list(@(x0[483],T2Pcst(ni)),@(y0[484],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))
                                        let jsxtnm93 = function (arg1) { // timp: map$fopr(75)
                                          let jsxtnm63 = arg1
                                          // I1CMP:start
                                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gasq001.dats)@(2340(line=115,offs=5)--2356(line=115,offs=21))
                                          // I0Etapq(I0Ecst(gasq_cget$at$raw(2295)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4087(line=241,offs=1)--4103(line=241,offs=17))));$list(T2JAG($list(T2Pvar(xs[6460]))),T2JAG($list(T2Pvar(x0[6461])))))
                                          // T1IMPallx(gasq_cget$at$raw(2295);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2236(line=148,offs=1)--2442(line=165,offs=2)))
                                          // T1IMPallx(gasq_cget$at$raw(2295)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5875],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[5876],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gasq_cget$at$raw(2295);$list(@(xs[5643],T2Pxtv([T2Pvar(xs[5875])])),@(x0[5644],T2Pxtv([T2Pvar(x0[5876])])))))))
                                          let jsxtnm91 = function (arg1, arg2) { // timp: gasq_cget$at$raw(2295)
                                            let jsxtnm64 = arg1
                                            let jsxtnm65 = arg2
                                            // I1CMP:start
                                            let jsxtnm90 // let
                                            { // let
                                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2383(line=162,offs=1)--2440(line=164,offs=40)))
                                              // I1VALDCL
                                              let jsxtnm82
                                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2407(line=164,offs=7)--2423(line=164,offs=23))
                                              // I0Etapq(I0Ecst(gasq_lget$at$raw(2297)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4218(line=252,offs=1)--4234(line=252,offs=17))));$list(T2JAG($list(T2Pvar(xs[5875]))),T2JAG($list(T2Pvar(x0[5876])))))
                                              // T1IMPallx(gasq_lget$at$raw(2297);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(6912(line=452,offs=1)--7056(line=459,offs=4)))
                                              // T1IMPallx(gasq_lget$at$raw(2297)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gasq_lget$at$raw(2297);$list(@(xs[5647],T2Pcst(strn)),@(x0[5648],T2Pcst(cgtz)))))))
                                              let jsxtnm80 = function (arg1, arg2) { // timp: gasq_lget$at$raw(2297)
                                                let jsxtnm66 = arg1
                                                let jsxtnm67 = arg2
                                                // I1CMP:start
                                                let jsxtnm79 // let
                                                { // let
                                                  // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(6973(line=456,offs=1)--7011(line=457,offs=30)))
                                                  // I1VALDCL
                                                  let jsxtnm76
                                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(6986(line=457,offs=5)--7001(line=457,offs=20))
                                                  // I0Etapq(I0Ecst(strn_get$at$raw(2301)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/unsfx00.sats)@(4484(line=273,offs=1)--4499(line=273,offs=16))));$list(T2JAG($list())))
                                                  // T1IMPallx(strn_get$at$raw(2301);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
                                                  // T1IMPallx(strn_get$at$raw(2301)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(2301);$list()))))
                                                  let jsxtnm74 = function (arg1, arg2) { // timp: strn_get$at$raw(2301)
                                                    let jsxtnm68 = arg1
                                                    let jsxtnm69 = arg2
                                                    // I1CMP:start
                                                    let jsxtnm73 // let
                                                    { // let
                                                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
                                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
                                                      // I1FUNDCL
                                                      // XATS000_strn_get$at$raw_2309
                                                        // FJARGdarg($list(I1BNDcons(I1TNM(70);I0Pvar(cs(3329));$list(@(cs(3329),I1Vtnm(I1TNM(70))))),I1BNDcons(I1TNM(71);I0Pvar(i0(3330));$list(@(i0(3330),I1Vtnm(I1TNM(71)))))))
                                                        // I1CMP:start
                                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                                                      let jsxtnm72 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm68, jsxtnm69))
                                                      jsxtnm73 = jsxtnm72
                                                    } // endlet
                                                    // I1CMP:return:jsxtnm73
                                                    return jsxtnm73
                                                  } // endtimp(strn_get$at$raw(2301))
                                                  let jsxtnm75 = XATSDAPP(jsxtnm74(jsxtnm66, jsxtnm67))
                                                  jsxtnm76 = jsxtnm75
                                                  XATS000_patck(true)
                                                  // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(7012(line=458,offs=1)--7041(line=458,offs=30)))
                                                  // I1VALDCL
                                                  // I1BNDcons(I1TNM(78);I0Pvar(pf(2277));$list(@(pf(2277),I1Vtnm(I1TNM(78)))))
                                                  // I1CMP:start
                                                  // I1LETnew1(I1TNM(77);...)
                                                    // I1INSdapp(I1Vcst(owed_t0_make(4));$list())
                                                  // I1CMP(ival):I1Vtnm(I1TNM(77)) // I1CMP:return
                                                  jsxtnm79 = jsxtnm76
                                                } // endlet
                                                // I1CMP:return:jsxtnm79
                                                return jsxtnm79
                                              } // endtimp(gasq_lget$at$raw(2297))
                                              let jsxtnm81 = XATSDAPP(jsxtnm80(jsxtnm64, jsxtnm65))
                                              jsxtnm82 = jsxtnm81
                                              XATS000_patck(true)
                                              let jsxtnm89 // let
                                              { // let
                                                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2302(line=155,offs=1)--2325(line=155,offs=24)))
                                                // I1VALDCL
                                                let jsxtnm86
                                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2311(line=155,offs=10)--2317(line=155,offs=16))
                                                // I0Etapq(I0Ecst(g_copy(24)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1621(line=59,offs=1)--1627(line=59,offs=7))));$list(T2JAG($list(T2Pvar(x0[5876])))))
                                                // T1IMPallx(g_copy(24);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1673(line=62,offs=1)--1713(line=64,offs=22)))
                                                // T1IMPallx(g_copy(24)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5704],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_copy(24);$list(@(a[419],T2Pvar(x0[5704])))))))
                                                let jsxtnm84 = function (arg1) { // timp: g_copy(24)
                                                  let jsxtnm83 = arg1
                                                  // I1CMP:start
                                                  // I1CMP:return:jsxtnm83
                                                  return jsxtnm83
                                                } // endtimp(g_copy(24))
                                                let jsxtnm85 = XATSDAPP(jsxtnm84(jsxtnm82))
                                                jsxtnm86 = jsxtnm85
                                                XATS000_patck(true)
                                                // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats)@(2329(line=157,offs=1)--2364(line=159,offs=25)))
                                                // I1VALDCL
                                                // I1BNDcons(I1TNM(88);I0Ptup0($list());$list())
                                                // I1CMP:start
                                                // I1LETnew1(I1TNM(87);...)
                                                  // I1INSdapp(I1Vcst(owed_vt_return0(6));$list(I1Vnone0(),I1Vtnm(I1TNM(86))))
                                                // I1CMP(ival):I1Vtnm(I1TNM(87)) // I1CMP:return
                                                jsxtnm89 = jsxtnm82
                                              } // endlet
                                              jsxtnm90 = jsxtnm89
                                            } // endlet
                                            // I1CMP:return:jsxtnm90
                                            return jsxtnm90
                                          } // endtimp(gasq_cget$at$raw(2295))
                                          let jsxtnm92 = XATSDAPP(jsxtnm91(jsxtnm41, jsxtnm63))
                                          // I1CMP:return:jsxtnm92
                                          return jsxtnm92
                                        } // endtimp(map$fopr(75))
                                        let jsxtnm94 = XATSDAPP(jsxtnm93(jsxtnm53))
                                        jsxtnm95 = jsxtnm94
                                        XATS000_patck(true)
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(5766(line=368,offs=31)--5767(line=368,offs=32))
                                        // I0Etapq(I0Ecst(sint_add$sint(925)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gint000.sats)@(2816(line=127,offs=1)--2829(line=127,offs=14))));$list(T2JAG($list())))
                                        // T1IMPallx(sint_add$sint(925);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                        // T1IMPallx(sint_add$sint(925)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(925);$list()))))
                                        let jsxtnm102 = function (arg1, arg2) { // timp: sint_add$sint(925)
                                          let jsxtnm96 = arg1
                                          let jsxtnm97 = arg2
                                          // I1CMP:start
                                          let jsxtnm101 // let
                                          { // let
                                            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                            // I1FUNDCL
                                            // XATS2JS_sint_add$sint_2778
                                              // FJARGdarg($list(I1BNDcons(I1TNM(98);I0Pvar(i1(5101));$list(@(i1(5101),I1Vtnm(I1TNM(98))))),I1BNDcons(I1TNM(99);I0Pvar(i2(5102));$list(@(i2(5102),I1Vtnm(I1TNM(99)))))))
                                              // I1CMP:start
                                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                            let jsxtnm100 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm96, jsxtnm97))
                                            jsxtnm101 = jsxtnm100
                                          } // endlet
                                          // I1CMP:return:jsxtnm101
                                          return jsxtnm101
                                        } // endtimp(sint_add$sint(925))
                                        let jsxtnm103 = XATSDAPP(jsxtnm102(jsxtnm53, XATSINT1(1)))
                                        let jsxtnm104 = XATSDAPP(auxmain_5609(jsxtnm103))
                                        let jsxtnm105 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm95, jsxtnm104])
                                        jsxtnm106 = jsxtnm105
                                      } // endlet
                                      jsxtnm107 = jsxtnm106
                                    } // end(if)
                                    // I1CMP:return:jsxtnm107
                                    return jsxtnm107
                                  }) // endfun(l1azy)
                                  // I1CMP:return:jsxtnm108
                                  return jsxtnm108
                                } // endfun(auxmain_5609)
                                let jsxtnm109 = XATSDAPP(auxmain_5609(XATSINT1(0)))
                                jsxtnm110 = jsxtnm109
                              } // endlet
                              // I1CMP:return:jsxtnm110
                              return jsxtnm110
                            } // endtimp(nint_map_lstrm(961))
                            let jsxtnm112 = XATSDAPP(jsxtnm111(jsxtnm49))
                            jsxtnm113 = jsxtnm112
                          } // endlet
                          jsxtnm114 = jsxtnm113
                        } // endlet
                        // I1CMP:return:jsxtnm114
                        return jsxtnm114
                      } // endtimp(gasq_strmize(599))
                      jsxtnm116 = jsxtnm115
                      jsxtnm117 = jsxtnm116
                      let jsxtnm118 = XATSDAPP(jsxtnm117(jsxtnm40))
                      // I1CMP:return:jsxtnm118
                      return jsxtnm118
                    } // endtimp(gseq_strmize0(1682))
                    let jsxtnm120 = XATSDAPP(jsxtnm119(jsxtnm39))
                    jsxtnm121 = jsxtnm120
                    XATS000_patck(true)
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(1993(line=79,offs=3)--2025(line=79,offs=35))
                    // I0Etapq(I0Ecst(strm_vt_segmentize0_lstrm$rllist(2335)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1796(line=71,offs=1)--1828(line=71,offs=33))));$list(T2JAG($list(T2Pvar(x0[8860])))))
                    // T1IMPallx(strm_vt_segmentize0_lstrm$rllist(2335);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2114(line=84,offs=1)--2812(line=140,offs=2)))
                    // T1IMPallx(strm_vt_segmentize0_lstrm$rllist(2335)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8861],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_segmentize0_lstrm$rllist(2335);$list(@(x0[5686],T2Pvar(x0[8861])))))))
                    let jsxtnm160 = function (arg1) { // timp: strm_vt_segmentize0_lstrm$rllist(2335)
                      let jsxtnm122 = arg1
                      // I1CMP:start
                      let jsxtnm159 // let
                      { // let
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2207(line=92,offs=1)--2232(line=92,offs=26))
                        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(xs;S2Eapps(S2Ecst(strm_vt);$list(S2Evar(x0[8861])))))))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2233(line=93,offs=1)--2258(line=93,offs=26))
                        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rs;S2Eapps(S2Ecst(list_vt);$list(S2Evar(x0[8861])))))))
                        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2262(line=95,offs=1)--2770(line=138,offs=2)))
                        // I1FUNDCL
                        function auxmain_2265(arg1)
                        { // fun
                          let jsxtnm123 = arg1
                          // I1CMP:start
                          let jsxtnm126 = XATS000_l1azy(function (tlaz) { // l1azy
                            // I1CMP:start
                            let jsxtnm124 = XATSCAPP("list_vt_nil", [0])
                            let jsxtnm125 = XATSDAPP(auxloop_2339(jsxtnm123, jsxtnm124))
                            // I1CMP:return:jsxtnm125
                            return jsxtnm125
                          }) // endfun(l1azy)
                          // I1CMP:return:jsxtnm126
                          return jsxtnm126
                        } // endfun(auxmain_2265)
                        // I1FUNDCL
                        function auxloop_2339(arg1, arg2)
                        { // fun
                          let jsxtnm127 = arg1
                          let jsxtnm128 = arg2
                          // I1CMP:start
                          let jsxtnm129 = XATS000_dl1az(jsxtnm127)
                          let jsxtnm157 // cas
                          do {
                            // { // cls
                            // I1GPTpat(I1BNDcons(I1TNM(130);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                            if (XATS000_ctgeq(jsxtnm129, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                              let jsxtnm130 = jsxtnm129
                              let jsxtnm142 // cas
                              do {
                                // { // cls
                                // I1GPTpat(I1BNDcons(I1TNM(131);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                                if (XATS000_ctgeq(jsxtnm128, XATSCTAG("list_vt_nil",0))) { // gpt
                                  let jsxtnm131 = jsxtnm128
                                  let jsxtnm132 = XATSCAPP("strmcon_vt_nil", [0])
                                  jsxtnm142 = jsxtnm132
                                  break // cls
                                } // gpt
                                // } // cls
                                // { // cls
                                // I1GPTpat(I1BNDcons(I1TNM(133);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
                                if (XATS000_ctgeq(jsxtnm128, XATSCTAG("list_vt_cons",1))) { // gpt
                                  let jsxtnm133 = jsxtnm128
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2525(line=120,offs=3)--2540(line=120,offs=18))
                                  // I0Etapq(I0Ecst(strmcon_vt_sing(2119)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1656(line=62,offs=1)--1671(line=62,offs=16))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8861]),T2Pnone0()))))))
                                  // T1IMPallx(strmcon_vt_sing(2119);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1849(line=78,offs=1)--1928(line=83,offs=21)))
                                  // T1IMPallx(strmcon_vt_sing(2119)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8540],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strmcon_vt_sing(2119);$list(@(x0[5376],T2Pvar(a[8540])))))))
                                  let jsxtnm140 = function (arg1) { // timp: strmcon_vt_sing(2119)
                                    let jsxtnm134 = arg1
                                    // I1CMP:start
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1913(line=83,offs=6)--1924(line=83,offs=17))
                                    // I0Etapq(I0Ecst(strm_vt_nil(2115)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1422(line=42,offs=1)--1433(line=42,offs=12))));$list(T2JAG($list())))
                                    // T1IMPallx(strm_vt_nil(2115);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(1708(line=66,offs=1)--1771(line=70,offs=21)))
                                    // T1IMPallx(strm_vt_nil(2115)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strm_vt_nil(2115);$list()))))
                                    let jsxtnm137 = function () { // timp: strm_vt_nil(2115)
                                      // I1CMP:start
                                      let jsxtnm136 = XATS000_l1azy(function (tlaz) { // l1azy
                                        // I1CMP:start
                                        let jsxtnm135 = XATSCAPP("strmcon_vt_nil", [0])
                                        // I1CMP:return:jsxtnm135
                                        return jsxtnm135
                                      }) // endfun(l1azy)
                                      // I1CMP:return:jsxtnm136
                                      return jsxtnm136
                                    } // endtimp(strm_vt_nil(2115))
                                    let jsxtnm138 = XATSDAPP(jsxtnm137())
                                    let jsxtnm139 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm134, jsxtnm138])
                                    // I1CMP:return:jsxtnm139
                                    return jsxtnm139
                                  } // endtimp(strmcon_vt_sing(2119))
                                  let jsxtnm141 = XATSDAPP(jsxtnm140(jsxtnm128))
                                  jsxtnm142 = jsxtnm141
                                  break // cls
                                } // gpt
                                // } // cls
                                XATS000_cfail()
                              } while (false) // end-of(do)
                              jsxtnm157 = jsxtnm142
                              break // cls
                            } // gpt
                            // } // cls
                            // { // cls
                            // I1GPTpat(I1BNDcons(I1TNM(143);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4873)),I0Pvar(xs(4874)))));$list(@(x1(4873),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(143));0)),@(xs(4874),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(143));1)))))
                            if (XATS000_ctgeq(jsxtnm129, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                              let jsxtnm143 = jsxtnm129
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2598(line=127,offs=1)--2612(line=127,offs=15))
                              // I0Etapq(I0Ecst(segment$delim1(2332)(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/SATS/VT/pre2026_vt.sats)@(1504(line=49,offs=1)--1518(line=49,offs=15))));$list(T2JAG($list(T2Pvar(x0[8861])))))
                              // T1IMPallx(segment$delim1(2332);LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2972(line=151,offs=1)--3006(line=152,offs=26)))
                              // T1IMPallx(segment$delim1(2332)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8862],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8863],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(segment$delim1(2332);$list(@(x0[5681],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))))
                              let jsxtnm144
                              jsxtnm144 = jsxtnm3
                              let jsxtnm145 = XATSDAPP(jsxtnm144(XATSP1CN("strmcon_vt_cons", jsxtnm143[0+1])))
                              let jsxtnm156 // ift
                              if (jsxtnm145) // ift
                              {
                                let jsxtnm153 // let
                                { // let
                                  // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2630(line=130,offs=1)--2653(line=131,offs=15)))
                                  // I1VALDCL
                                  let jsxtnm150
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/almanac/DATS/VT/pre2026_vt.dats)@(2639(line=131,offs=1)--2645(line=131,offs=7))
                                  // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(1591(line=56,offs=1)--1597(line=56,offs=7))));$list(T2JAG($list(T2Pvar(x0[8861])))))
                                  // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
                                  // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5703],T2Papps(T2Pcst(char_type);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[418],T2Pvar(x0[5703])))))))
                                  let jsxtnm148 = function (arg1) { // timp: g_free(23)
                                    let jsxtnm146 = arg1
                                    // I1CMP:start
                                    let jsxtnm147 = XATSTUP0([])
                                    // I1CMP:return:jsxtnm147
                                    return jsxtnm147
                                  } // endtimp(g_free(23))
                                  let jsxtnm149 = XATSDAPP(jsxtnm148(XATSP1CN("strmcon_vt_cons", jsxtnm143[0+1])))
                                  jsxtnm150 = jsxtnm149
                                  XATS000_patck(true)
                                  let jsxtnm151 = XATSDAPP(auxmain_2265(XATSP1CN("strmcon_vt_cons", jsxtnm143[1+1])))
                                  let jsxtnm152 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm128, jsxtnm151])
                                  jsxtnm153 = jsxtnm152
                                } // endlet
                                jsxtnm156 = jsxtnm153
                              } else {
                                let jsxtnm154 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm143[0+1]), jsxtnm128])
                                let jsxtnm155 = XATSDAPP(auxloop_2339(XATSP1CN("strmcon_vt_cons", jsxtnm143[1+1]), jsxtnm154))
                                jsxtnm156 = jsxtnm155
                              } // end(if)
                              jsxtnm157 = jsxtnm156
                              break // cls
                            } // gpt
                            // } // cls
                            XATS000_cfail()
                          } while (false) // end-of(do)
                          // I1CMP:return:jsxtnm157
                          return jsxtnm157
                        } // endfun(auxloop_2339)
                        let jsxtnm158 = XATSDAPP(auxmain_2265(jsxtnm122))
                        jsxtnm159 = jsxtnm158
                      } // endlet
                      // I1CMP:return:jsxtnm159
                      return jsxtnm159
                    } // endtimp(strm_vt_segmentize0_lstrm$rllist(2335))
                    let jsxtnm161 = XATSDAPP(jsxtnm160(jsxtnm121))
                    jsxtnm162 = jsxtnm161
                  } // endlet
                  // I1CMP:return:jsxtnm162
                  return jsxtnm162
                } // endtimp(gseq_segmentize0_lstrm$rllist(2334))
                let jsxtnm164 = XATSDAPP(jsxtnm163(jsxtnm4))
                let jsxtnm165 = XATSDAPP(jsxtnm38(jsxtnm164))
                jsxtnm166 = jsxtnm165
              } // endlet
              // I1CMP:return:jsxtnm166
              return jsxtnm166
            } // endtimp(gseq_segmentize0_lstrm$llist(2333))
            let jsxtnm168 = XATSDAPP(jsxtnm167(jsxtnm2))
            jsxtnm169 = jsxtnm168
          } // endlet
          // I1CMP:return:jsxtnm169
          return jsxtnm169
        } // endtimp(gseq_segmentize0$f1un_lstrm$llist(2336))
        let jsxtnm180 = function (arg1) { // lam0(T_LAM(0))
          let jsxtnm171 = arg1
          // I1CMP:start
          // LCSRCsome1(JS_doublets.dats)@(1724(line=113,offs=62)--1725(line=113,offs=63))
          // I0Etapq(I0Ecst(char_eq(888)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/char000.sats)@(3373(line=176,offs=1)--3380(line=176,offs=8))));$list(T2JAG($list())))
          // T1IMPallx(char_eq(888);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1772(line=72,offs=1)--1916(line=84,offs=2)))
          // T1IMPallx(char_eq(888)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(char_eq(888);$list()))))
          let jsxtnm178 = function (arg1, arg2) { // timp: char_eq(888)
            let jsxtnm172 = arg1
            let jsxtnm173 = arg2
            // I1CMP:start
            let jsxtnm177 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1848(line=80,offs=1)--1914(line=83,offs=39)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats)@(1856(line=81,offs=1)--1914(line=83,offs=39))
              // I1FUNDCL
              // XATS2JS_char_eq_1859
                // FJARGdarg($list(I1BNDcons(I1TNM(174);I0Pvar(c1(5029));$list(@(c1(5029),I1Vtnm(I1TNM(174))))),I1BNDcons(I1TNM(175);I0Pvar(c2(5030));$list(@(c2(5030),I1Vtnm(I1TNM(175)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_char_eq);G1Nlist($list())) // I1CMP:return
              let jsxtnm176 = XATSDAPP(XATS2JS_char_eq(jsxtnm172, jsxtnm173))
              jsxtnm177 = jsxtnm176
            } // endlet
            // I1CMP:return:jsxtnm177
            return jsxtnm177
          } // endtimp(char_eq(888))
          let jsxtnm179 = XATSDAPP(jsxtnm178(jsxtnm171, XATSCHR2('\n')))
          // I1CMP:return:jsxtnm179
          return jsxtnm179
        } // endfun(lam0)
        let jsxtnm181 = XATSDAPP(jsxtnm170(jsxtnm1, jsxtnm180))
        jsxtnm182 = jsxtnm181
        XATS000_patck(true)
        // LCSRCsome1(JS_doublets.dats)@(1518(line=103,offs=1)--1535(line=103,offs=18))
        // I0Etapq(I0Ecst(strm_vt_map0$f1un(2178)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5605(line=289,offs=1)--5622(line=289,offs=18))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
        // T1IMPallx(strm_vt_map0$f1un(2178);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4356(line=239,offs=1)--4501(line=250,offs=2)))
        // T1IMPallx(strm_vt_map0$f1un(2178)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8590],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8591],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0$f1un(2178);$list(@(x0[5453],T2Pxtv([T2Pvar(x0[8590])])),@(y0[5454],T2Pxtv([T2Pvar(y0[8591])])))))))
        let jsxtnm202 = function (arg1, arg2) { // timp: strm_vt_map0$f1un(2178)
          let jsxtnm183 = arg1
          let jsxtnm184 = arg2
          // I1CMP:start
          let jsxtnm201 // let
          { // let
            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4454(line=248,offs=1)--4493(line=249,offs=31)))
            // I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Pvar(x0[8590])),@(y0[3807],T2Pvar(y0[8591]))))):timp
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4420(line=245,offs=1)--4432(line=245,offs=13))
            // I0Etapq(I0Ecst(strm_vt_map0(2174)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(5100(line=256,offs=1)--5112(line=256,offs=13))));$list(T2JAG($list(T2Pvar(x0[8590]))),T2JAG($list(T2Pvar(y0[8591])))))
            // T1IMPallx(strm_vt_map0(2174);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4033(line=214,offs=1)--4316(line=237,offs=2)))
            // T1IMPallx(strm_vt_map0(2174)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8588],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8589],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(2174);$list(@(x0[5443],T2Pvar(x0[8588])),@(y0[5444],T2Pvar(y0[8589])))))))
            let jsxtnm199 = function (arg1) { // timp: strm_vt_map0(2174)
              let jsxtnm185 = arg1
              // I1CMP:start
              let jsxtnm198 // let
              { // let
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4111(line=222,offs=1)--4314(line=236,offs=2)))
                // I1FUNDCL
                function auxmain_4114(arg1)
                { // fun
                  let jsxtnm186 = arg1
                  // I1CMP:start
                  let jsxtnm196 = XATS000_l1azy(function (tlaz) { // l1azy
                    // I1CMP:start
                    let jsxtnm187 = XATS000_dl1az(jsxtnm186)
                    let jsxtnm195 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(188);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm187, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                        let jsxtnm188 = jsxtnm187
                        let jsxtnm189 = XATSCAPP("strmcon_vt_nil", [0])
                        jsxtnm195 = jsxtnm189
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(190);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(4516)),I0Pvar(xs(4517)))));$list(@(x1(4516),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(190));0)),@(xs(4517),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(190));1)))))
                      if (XATS000_ctgeq(jsxtnm187, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                        let jsxtnm190 = jsxtnm187
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4277(line=235,offs=2)--4286(line=235,offs=11))
                        // I0Etapq(I0Ecst(map$fopr0(1471)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(5345(line=363,offs=1)--5354(line=363,offs=10))));$list(T2JAG($list(T2Pvar(x0[8588]))),T2JAG($list(T2Pvar(y0[8589])))))
                        // T1IMPallx(map$fopr0(1471);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4454(line=248,offs=1)--4493(line=249,offs=31)))
                        // T1IMPallx(map$fopr0(1471)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8590],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[8591],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1471);$list(@(x0[3806],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))),@(y0[3807],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                        let jsxtnm191
                        jsxtnm191 = jsxtnm184
                        let jsxtnm192 = XATSDAPP(jsxtnm191(XATSP1CN("strmcon_vt_cons", jsxtnm190[0+1])))
                        let jsxtnm193 = XATSDAPP(auxmain_4114(XATSP1CN("strmcon_vt_cons", jsxtnm190[1+1])))
                        let jsxtnm194 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm192, jsxtnm193])
                        jsxtnm195 = jsxtnm194
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm195
                    return jsxtnm195
                  }) // endfun(l1azy)
                  // I1CMP:return:jsxtnm196
                  return jsxtnm196
                } // endfun(auxmain_4114)
                let jsxtnm197 = XATSDAPP(auxmain_4114(jsxtnm185))
                jsxtnm198 = jsxtnm197
              } // endlet
              // I1CMP:return:jsxtnm198
              return jsxtnm198
            } // endtimp(strm_vt_map0(2174))
            let jsxtnm200 = XATSDAPP(jsxtnm199(jsxtnm183))
            jsxtnm201 = jsxtnm200
          } // endlet
          // I1CMP:return:jsxtnm201
          return jsxtnm201
        } // endtimp(strm_vt_map0$f1un(2178))
        let jsxtnm224 = function (arg1) { // lam0(T_LAM(0))
          let jsxtnm203 = arg1
          // I1CMP:start
          // LCSRCsome1(JS_doublets.dats)@(1556(line=103,offs=39)--1571(line=103,offs=54))
          // I0Etapq(I0Ecst(strn_make_llist(1048)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(5050(line=299,offs=1)--5065(line=299,offs=16))));$list(T2JAG($list())))
          // T1IMPallx(strn_make_llist(1048);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5741(line=361,offs=1)--6020(line=385,offs=4)))
          // T1IMPallx(strn_make_llist(1048)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_make_llist(1048);$list()))))
          let jsxtnm222 = function (arg1) { // timp: strn_make_llist(1048)
            let jsxtnm204 = arg1
            // I1CMP:start
            let jsxtnm221 // let
            { // let
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5794(line=367,offs=1)--5822(line=368,offs=20))
              // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(env;S2Eapps(S2Ecst(list_vt);$list(S2Ecst(cgtz)))))))
              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5826(line=370,offs=1)--5962(line=379,offs=29)))
              // I1FUNDCL
              function fwork_5829(arg1, arg2)
              { // fun
                let jsxtnm205 = arg1
                let jsxtnm206 = arg2
                // I1CMP:start
                let jsxtnm212 // cas
                do {
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(207);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                  if (XATS000_ctgeq(jsxtnm205, XATSCTAG("list_vt_nil",0))) { // gpt
                    let jsxtnm207 = jsxtnm205
                    let jsxtnm208 = XATSTUP0([])
                    jsxtnm212 = jsxtnm208
                    break // cls
                  } // gpt
                  // } // cls
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(209);I0Pfree(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(c1(2258)),I0Pvar(cs(2259)))));$list(@(c1(2258),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(209));0)),@(cs(2259),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(209));1)))))
                  if (XATS000_ctgeq(jsxtnm205, XATSCTAG("list_vt_cons",1))) { // gpt
                    let jsxtnm209 = jsxtnm205
                    let jsxtnm210 = XATSDAPP(jsxtnm206(XATSP1CN("list_vt_cons", jsxtnm209[0+1])))
                    let jsxtnm211 = XATSDAPP(fwork_5829(XATSP1CN("list_vt_cons", jsxtnm209[1+1]), jsxtnm206))
                    jsxtnm212 = jsxtnm211
                    break // cls
                  } // gpt
                  // } // cls
                  XATS000_cfail()
                } while (false) // end-of(do)
                // I1CMP:return:jsxtnm212
                return jsxtnm212
              } // endfun(fwork_5829)
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(5979(line=384,offs=1)--5999(line=384,offs=21))
              // I0Etapq(I0Ecst(strn_fmake_env$fwork(1080)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn001.sats)@(4184(line=190,offs=1)--4204(line=190,offs=21))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))))))
              // T1IMPallx(strn_fmake_env$fwork(1080);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2764(line=149,offs=1)--2980(line=162,offs=2)))
              // T1IMPallx(strn_fmake_env$fwork(1080)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(env[7670],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Papps(T2Pcst(char_type);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strn_fmake_env$fwork(1080);$list(@(env[2886],T2Pvar(env[7670])))))))
              let jsxtnm219 = function (arg1, arg2) { // timp: strn_fmake_env$fwork(1080)
                let jsxtnm213 = arg1
                let jsxtnm214 = arg2
                // I1CMP:start
                let jsxtnm218 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2875(line=157,offs=1)--2978(line=161,offs=52)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2883(line=158,offs=1)--2978(line=161,offs=52))
                  // I1FUNDCL
                  // XATS000_strn_fmake_env$fwork_2886
                    // FJARGdarg($list(I1BNDcons(I1TNM(215);I0Pvar(env(3337));$list(@(env(3337),I1Vtnm(I1TNM(215))))),I1BNDcons(I1TNM(216);I0Pvar(fwork(3338));$list(@(fwork(3338),I1Vtnm(I1TNM(216)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_fmake_env$fwork);G1Nlist($list())) // I1CMP:return
                  let jsxtnm217 = XATSDAPP(XATS000_strn_fmake_env$fwork(jsxtnm213, jsxtnm214))
                  jsxtnm218 = jsxtnm217
                } // endlet
                // I1CMP:return:jsxtnm218
                return jsxtnm218
              } // endtimp(strn_fmake_env$fwork(1080))
              let jsxtnm220 = XATSDAPP(jsxtnm219(jsxtnm204, fwork_5829))
              jsxtnm221 = jsxtnm220
            } // endlet
            // I1CMP:return:jsxtnm221
            return jsxtnm221
          } // endtimp(strn_make_llist(1048))
          let jsxtnm223 = XATSDAPP(jsxtnm222(jsxtnm203))
          // I1CMP:return:jsxtnm223
          return jsxtnm223
        } // endfun(lam0)
        let jsxtnm225 = XATSDAPP(jsxtnm202(jsxtnm182, jsxtnm224))
        jsxtnm226 = jsxtnm225
      } // endlet
      // I1CMP:return:jsxtnm226
      return jsxtnm226
    } // endfun(dict_line$split_1468)
    let jsxtnm516 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(JS_doublets.dats)@(893(line=58,offs=1)--922(line=59,offs=19)))
      // I1VALDCL
      let jsxtnm228
      let jsxtnm227 = XATSDAPP(JS_doublets_arg1())
      jsxtnm228 = jsxtnm227
      XATS000_patck(true)
      // I1Dvaldclist(LCSRCsome1(JS_doublets.dats)@(923(line=60,offs=1)--952(line=61,offs=19)))
      // I1VALDCL
      let jsxtnm230
      let jsxtnm229 = XATSDAPP(JS_doublets_arg2())
      jsxtnm230 = jsxtnm229
      XATS000_patck(true)
      // I1Dvaldclist(LCSRCsome1(JS_doublets.dats)@(956(line=63,offs=1)--985(line=64,offs=19)))
      // I1VALDCL
      let jsxtnm232
      let jsxtnm231 = XATSDAPP(JS_doublets_dict())
      jsxtnm232 = jsxtnm231
      XATS000_patck(true)
      // I1Dvaldclist(LCSRCsome1(JS_doublets.dats)@(986(line=65,offs=1)--1018(line=66,offs=22)))
      // I1VALDCL
      let jsxtnm234
      let jsxtnm233 = XATSDAPP(dict_line$split_1468(jsxtnm232))
      jsxtnm234 = jsxtnm233
      XATS000_patck(true)
      // I1Dvaldclist(LCSRCsome1(JS_doublets.dats)@(1019(line=67,offs=1)--1066(line=69,offs=23)))
      // I1VALDCL
      let jsxtnm281
      // LCSRCsome1(JS_doublets.dats)@(1044(line=69,offs=1)--1059(line=69,offs=16))
      // I0Etapq(I0Ecst(a1sz_make_lstrm(1112)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axsz000.sats)@(2838(line=138,offs=1)--2853(line=138,offs=16))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
      // T1IMPallx(a1sz_make_lstrm(1112);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axsz000.dats)@(3292(line=170,offs=1)--3414(line=178,offs=39)))
      // T1IMPallx(a1sz_make_lstrm(1112)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[7244],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a1sz_make_lstrm(1112);$list(@(a[2999],T2Pvar(a[7244])))))))
      let jsxtnm278 = function (arg1) { // timp: a1sz_make_lstrm(1112)
        let jsxtnm235 = arg1
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axsz000.dats)@(3340(line=175,offs=1)--3356(line=175,offs=17))
        // I0Etapq(I0Ecst(a1sz_fmake_fwork(1145)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/axsz001.sats)@(3701(line=176,offs=1)--3717(line=176,offs=17))));$list(T2JAG($list(T2Pvar(a[7244])))))
        // T1IMPallx(a1sz_fmake_fwork(1145);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats)@(2982(line=167,offs=1)--3180(line=182,offs=2)))
        // T1IMPallx(a1sz_fmake_fwork(1145)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8924],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(a1sz_fmake_fwork(1145);$list(@(x0[3045],T2Pvar(x0[8924])))))))
        let jsxtnm240 = function (arg1) { // timp: a1sz_fmake_fwork(1145)
          let jsxtnm236 = arg1
          // I1CMP:start
          let jsxtnm239 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats)@(3076(line=175,offs=1)--3178(line=181,offs=47)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats)@(3084(line=176,offs=1)--3178(line=181,offs=47))
            // I1FUNDCL
            // XATS2JS_a1sz_fmake_fwork_3087
              // FJARGdarg($list(I1BNDcons(I1TNM(237);I0Pvar(fwork(5381));$list(@(fwork(5381),I1Vtnm(I1TNM(237)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a1sz_fmake_fwork);G1Nlist($list())) // I1CMP:return
            let jsxtnm238 = XATSDAPP(XATS2JS_a1sz_fmake_fwork(jsxtnm236))
            jsxtnm239 = jsxtnm238
          } // endlet
          // I1CMP:return:jsxtnm239
          return jsxtnm239
        } // endtimp(a1sz_fmake_fwork(1145))
        let jsxtnm276 = function (arg1) { // lam0(T_LAM(0))
          let jsxtnm241 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axsz000.dats)@(3378(line=178,offs=3)--3398(line=178,offs=23))
          // I0Etapq(I0Ecst(strm_vt_foritm0$f1un(2164)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(2918(line=133,offs=1)--2938(line=133,offs=21))));$list(T2JAG($list(T2Pvar(a[7244])))))
          // T1IMPallx(strm_vt_foritm0$f1un(2164);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(1810(line=67,offs=1)--1886(line=70,offs=35)))
          // T1IMPallx(strm_vt_foritm0$f1un(2164)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8577],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_foritm0$f1un(2164);$list(@(x0[5425],T2Pvar(x0[8577])))))))
          let jsxtnm274
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(1852(line=70,offs=1)--1869(line=70,offs=18))
          // I0Etapq(I0Ecst(gseq_foritm0$f1un(1726)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gseq001_vt.sats)@(9602(line=517,offs=1)--9619(line=517,offs=18))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8577]))))))),T2JAG($list(T2Pvar(x0[8577])))))
          // T1IMPallx(gseq_foritm0$f1un(1726);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(8343(line=558,offs=1)--8484(line=569,offs=2)))
          // T1IMPallx(gseq_foritm0$f1un(1726)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7948],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))),@(x0[7949],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_foritm0$f1un(1726);$list(@(xs[4323],T2Pvar(xs[7948])),@(x0[4324],T2Pvar(x0[7949])))))))
          let jsxtnm273 = function (arg1, arg2) { // timp: gseq_foritm0$f1un(1726)
            let jsxtnm242 = arg1
            let jsxtnm243 = arg2
            // I1CMP:start
            let jsxtnm272 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(8442(line=567,offs=1)--8482(line=568,offs=32)))
              // I1Dimplmnt0(DIMPLone2(foritm$work0(1429);$list(@(x0[3734],T2Pvar(x0[7949]))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(8407(line=564,offs=1)--8419(line=564,offs=13))
              // I0Etapq(I0Ecst(gseq_foritm0(1724)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gseq001_vt.sats)@(9408(line=503,offs=1)--9420(line=503,offs=13))));$list(T2JAG($list(T2Pvar(xs[7948]))),T2JAG($list(T2Pvar(x0[7949])))))
              // T1IMPallx(gseq_foritm0(1724);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(7881(line=520,offs=1)--8072(line=537,offs=2)))
              // T1IMPallx(gseq_foritm0(1724)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7944],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))),@(x0[7945],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_foritm0(1724);$list(@(xs[4319],T2Pvar(xs[7944])),@(x0[4320],T2Pvar(x0[7945])))))))
              let jsxtnm270 = function (arg1) { // timp: gseq_foritm0(1724)
                let jsxtnm246 = arg1
                // I1CMP:start
                let jsxtnm269 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(7993(line=532,offs=1)--8070(line=536,offs=33)))
                  // I1Dimplmnt0(DIMPLone2(forall$test0(1409);$list(@(x0[3714],T2Pvar(x0[7945]))))):timp
                  let jsxtnm268 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(7940(line=527,offs=1)--7973(line=529,offs=13)))
                    // I1VALDCL
                    let jsxtnm267
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(7948(line=528,offs=1)--7960(line=528,offs=13))
                    // I0Etapq(I0Ecst(gseq_forall0(1692)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gseq001_vt.sats)@(3648(line=181,offs=1)--3660(line=181,offs=13))));$list(T2JAG($list(T2Pvar(xs[7944]))),T2JAG($list(T2Pvar(x0[7945])))))
                    // T1IMPallx(gseq_forall0(1692);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(2683(line=120,offs=1)--2754(line=123,offs=40)))
                    // T1IMPallx(gseq_forall0(1692)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8581],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[8581],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_forall0(1692);$list(@(xs[4255],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8581])))),@(x0[4256],T2Pvar(x0[8581])))))))
                    let jsxtnm265
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(2735(line=123,offs=21)--2750(line=123,offs=36))
                    // I0Etapq(I0Ecst(strm_vt_forall0(2156)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm001_vt.sats)@(1506(line=47,offs=1)--1521(line=47,offs=16))));$list(T2JAG($list(T2Pvar(x0[8581])))))
                    // T1IMPallx(strm_vt_forall0(2156);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(1567(line=50,offs=1)--1725(line=61,offs=4)))
                    // T1IMPallx(strm_vt_forall0(2156)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8879],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_forall0(2156);$list(@(x0[5417],T2Pvar(x0[8879])))))))
                    let jsxtnm264 = function (arg1) { // timp: strm_vt_forall0(2156)
                      let jsxtnm251 = arg1
                      // I1CMP:start
                      let jsxtnm263 // let
                      { // let
                        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(1619(line=55,offs=1)--1670(line=58,offs=24)))
                        // I1FUNDCL
                        function test_1622(arg1)
                        { // fun
                          let jsxtnm252 = arg1
                          // I1CMP:start
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strm000.dats)@(1649(line=58,offs=3)--1661(line=58,offs=15))
                          // I0Etapq(I0Ecst(forall$test0(1409)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(2108(line=107,offs=1)--2120(line=107,offs=13))));$list(T2JAG($list(T2Pvar(x0[8879])))))
                          // T1IMPallx(forall$test0(1409);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(7993(line=532,offs=1)--8070(line=536,offs=33)))
                          // T1IMPallx(forall$test0(1409)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7944],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))),@(x0[7945],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(forall$test0(1409);$list(@(x0[3714],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                          let jsxtnm260 = function (arg1) { // timp: forall$test0(1409)
                            let jsxtnm253 = arg1
                            // I1CMP:start
                            let jsxtnm259 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(8029(line=535,offs=1)--8058(line=536,offs=21)))
                              // I1VALDCL
                              let jsxtnm258
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(8038(line=536,offs=1)--8050(line=536,offs=13))
                              // I0Etapq(I0Ecst(foritm$work0(1429)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(3042(line=183,offs=1)--3054(line=183,offs=13))));$list(T2JAG($list(T2Pvar(x0[7945])))))
                              // T1IMPallx(foritm$work0(1429);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats)@(8442(line=567,offs=1)--8482(line=568,offs=32)))
                              // T1IMPallx(foritm$work0(1429)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[7948],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))),@(x0[7949],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(foritm$work0(1429);$list(@(x0[3734],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                              let jsxtnm256 = function (arg1) { // timp: foritm$work0(1429)
                                let jsxtnm254 = arg1
                                // I1CMP:start
                                let jsxtnm255 = XATSDAPP(jsxtnm243(jsxtnm254))
                                // I1CMP:return:jsxtnm255
                                return jsxtnm255
                              } // endtimp(foritm$work0(1429))
                              let jsxtnm257 = XATSDAPP(jsxtnm256(jsxtnm253))
                              jsxtnm258 = jsxtnm257
                              XATS000_patck(true)
                              jsxtnm259 = XATSBOOL(true)
                            } // endlet
                            // I1CMP:return:jsxtnm259
                            return jsxtnm259
                          } // endtimp(forall$test0(1409))
                          let jsxtnm261 = XATSDAPP(jsxtnm260(jsxtnm252))
                          // I1CMP:return:jsxtnm261
                          return jsxtnm261
                        } // endfun(test_1622)
                        let jsxtnm262 = XATSDAPP(XATS2JS_strm_vt_forall0$f1un(jsxtnm251, test_1622))
                        jsxtnm263 = jsxtnm262
                      } // endlet
                      // I1CMP:return:jsxtnm263
                      return jsxtnm263
                    } // endtimp(strm_vt_forall0(2156))
                    jsxtnm265 = jsxtnm264
                    let jsxtnm266 = XATSDAPP(jsxtnm265(jsxtnm246))
                    jsxtnm267 = jsxtnm266
                    XATS000_patck(true)
                    jsxtnm268 = []
                  } // endlet
                  jsxtnm269 = jsxtnm268
                } // endlet
                // I1CMP:return:jsxtnm269
                return jsxtnm269
              } // endtimp(gseq_foritm0(1724))
              let jsxtnm271 = XATSDAPP(jsxtnm270(jsxtnm242))
              jsxtnm272 = jsxtnm271
            } // endlet
            // I1CMP:return:jsxtnm272
            return jsxtnm272
          } // endtimp(gseq_foritm0$f1un(1726))
          jsxtnm274 = jsxtnm273
          let jsxtnm275 = XATSDAPP(jsxtnm274(jsxtnm235, jsxtnm241))
          // I1CMP:return:jsxtnm275
          return jsxtnm275
        } // endfun(lam0)
        let jsxtnm277 = XATSDAPP(jsxtnm240(jsxtnm276))
        // I1CMP:return:jsxtnm277
        return jsxtnm277
      } // endtimp(a1sz_make_lstrm(1112))
      let jsxtnm279 = XATSDAPP(jsxtnm278(jsxtnm234))
      let jsxtnm280 = XATSCAST("UN_asrt_encd_1752", [jsxtnm279])
      jsxtnm281 = jsxtnm280
      XATS000_patck(true)
      // I1Dvaldclist(LCSRCsome1(JS_doublets.dats)@(1070(line=71,offs=1)--1117(line=72,offs=37)))
      // I1VALDCL
      let jsxtnm283
      let jsxtnm282 = XATSDAPP(doublets_solve_2247(jsxtnm228, jsxtnm230, jsxtnm281))
      jsxtnm283 = jsxtnm282
      XATS000_patck(true)
      let jsxtnm284 = XATS000_dl1az(jsxtnm283)
      let jsxtnm515 // cas
      do {
        // { // cls
        // I1GPTpat(I1BNDcons(I1TNM(285);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
        if (XATS000_ctgeq(jsxtnm284, XATSCTAG("strmcon_vt_nil",0))) { // gpt
          let jsxtnm285 = jsxtnm284
          // LCSRCsome1(JS_doublets.dats)@(1171(line=79,offs=1)--1179(line=79,offs=9))
          // I0Etapq(I0Ecst(gs_println_a5(814)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(14001(line=916,offs=1)--14014(line=916,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
          // T1IMPallx(gs_println_a5(814);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26618(line=1615,offs=1)--26783(line=1625,offs=66)))
          // T1IMPallx(gs_println_a5(814)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7043],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[7044],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x2[7045],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7046],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x4[7047],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a5(814);$list(@(x0[2543],T2Pvar(x0[7043])),@(x1[2544],T2Pvar(x1[7044])),@(x2[2545],T2Pvar(x2[7045])),@(x3[2546],T2Pvar(x3[7046])),@(x4[2547],T2Pvar(x4[7047])))))))
          let jsxtnm360 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_println_a5(814)
            let jsxtnm286 = arg1
            let jsxtnm287 = arg2
            let jsxtnm288 = arg3
            let jsxtnm289 = arg4
            let jsxtnm290 = arg5
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26720(line=1625,offs=3)--26731(line=1625,offs=14))
            // I0Etapq(I0Ecst(gs_print_a5(801)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Pvar(x0[7043]))),T2JAG($list(T2Pvar(x1[7044]))),T2JAG($list(T2Pvar(x2[7045]))),T2JAG($list(T2Pvar(x3[7046]))),T2JAG($list(T2Pvar(x4[7047])))))
            // T1IMPallx(gs_print_a5(801);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
            // T1IMPallx(gs_print_a5(801)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6965],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6966],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x2[6967],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6968],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x4[6969],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(801);$list(@(x0[2465],T2Pvar(x0[6965])),@(x1[2466],T2Pvar(x1[6966])),@(x2[2467],T2Pvar(x2[6967])),@(x3[2468],T2Pvar(x3[6968])),@(x4[2469],T2Pvar(x4[6969])))))))
            let jsxtnm351 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(801)
              let jsxtnm291 = arg1
              let jsxtnm292 = arg2
              let jsxtnm293 = arg3
              let jsxtnm294 = arg4
              let jsxtnm295 = arg5
              // I1CMP:start
              let jsxtnm350 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                // I1VALDCL
                let jsxtnm299
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
                // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
                let jsxtnm297 = function () { // timp: gs_print$beg(793)
                  // I1CMP:start
                  let jsxtnm296 = XATSTUP0([])
                  // I1CMP:return:jsxtnm296
                  return jsxtnm296
                } // endtimp(gs_print$beg(793))
                let jsxtnm298 = XATSDAPP(jsxtnm297())
                jsxtnm299 = jsxtnm298
                XATS000_patck(true)
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6965])))))
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
                      // FJARGdarg($list(I1BNDcons(I1TNM(301);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(301)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                    let jsxtnm302 = XATSDAPP(XATS2JS_strn_print(jsxtnm300))
                    jsxtnm303 = jsxtnm302
                  } // endlet
                  // I1CMP:return:jsxtnm303
                  return jsxtnm303
                } // endtimp(strn_print(1029))
                jsxtnm305 = jsxtnm304
                let jsxtnm306 = XATSDAPP(jsxtnm305(jsxtnm291))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
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
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6966])))))
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
                      // FJARGdarg($list(I1BNDcons(I1TNM(311);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(311)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                    let jsxtnm312 = XATSDAPP(XATS2JS_strn_print(jsxtnm310))
                    jsxtnm313 = jsxtnm312
                  } // endlet
                  // I1CMP:return:jsxtnm313
                  return jsxtnm313
                } // endtimp(strn_print(1029))
                jsxtnm315 = jsxtnm314
                let jsxtnm316 = XATSDAPP(jsxtnm315(jsxtnm292))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                let jsxtnm318 = function () { // timp: gs_print$sep(794)
                  // I1CMP:start
                  let jsxtnm317 = XATSTUP0([])
                  // I1CMP:return:jsxtnm317
                  return jsxtnm317
                } // endtimp(gs_print$sep(794))
                let jsxtnm319 = XATSDAPP(jsxtnm318())
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6967])))))
                // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                let jsxtnm325
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                let jsxtnm324 = function (arg1) { // timp: strn_print(1029)
                  let jsxtnm320 = arg1
                  // I1CMP:start
                  let jsxtnm323 // let
                  { // let
                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                    // I1FUNDCL
                    // XATS2JS_strn_print_2202
                      // FJARGdarg($list(I1BNDcons(I1TNM(321);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(321)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                    let jsxtnm322 = XATSDAPP(XATS2JS_strn_print(jsxtnm320))
                    jsxtnm323 = jsxtnm322
                  } // endlet
                  // I1CMP:return:jsxtnm323
                  return jsxtnm323
                } // endtimp(strn_print(1029))
                jsxtnm325 = jsxtnm324
                let jsxtnm326 = XATSDAPP(jsxtnm325(jsxtnm293))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                let jsxtnm328 = function () { // timp: gs_print$sep(794)
                  // I1CMP:start
                  let jsxtnm327 = XATSTUP0([])
                  // I1CMP:return:jsxtnm327
                  return jsxtnm327
                } // endtimp(gs_print$sep(794))
                let jsxtnm329 = XATSDAPP(jsxtnm328())
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6968])))))
                // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                let jsxtnm335
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                let jsxtnm334 = function (arg1) { // timp: strn_print(1029)
                  let jsxtnm330 = arg1
                  // I1CMP:start
                  let jsxtnm333 // let
                  { // let
                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                    // I1FUNDCL
                    // XATS2JS_strn_print_2202
                      // FJARGdarg($list(I1BNDcons(I1TNM(331);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(331)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                    let jsxtnm332 = XATSDAPP(XATS2JS_strn_print(jsxtnm330))
                    jsxtnm333 = jsxtnm332
                  } // endlet
                  // I1CMP:return:jsxtnm333
                  return jsxtnm333
                } // endtimp(strn_print(1029))
                jsxtnm335 = jsxtnm334
                let jsxtnm336 = XATSDAPP(jsxtnm335(jsxtnm294))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                let jsxtnm338 = function () { // timp: gs_print$sep(794)
                  // I1CMP:start
                  let jsxtnm337 = XATSTUP0([])
                  // I1CMP:return:jsxtnm337
                  return jsxtnm337
                } // endtimp(gs_print$sep(794))
                let jsxtnm339 = XATSDAPP(jsxtnm338())
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x4[6969])))))
                // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                let jsxtnm345
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                let jsxtnm344 = function (arg1) { // timp: strn_print(1029)
                  let jsxtnm340 = arg1
                  // I1CMP:start
                  let jsxtnm343 // let
                  { // let
                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                    // I1FUNDCL
                    // XATS2JS_strn_print_2202
                      // FJARGdarg($list(I1BNDcons(I1TNM(341);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(341)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                    let jsxtnm342 = XATSDAPP(XATS2JS_strn_print(jsxtnm340))
                    jsxtnm343 = jsxtnm342
                  } // endlet
                  // I1CMP:return:jsxtnm343
                  return jsxtnm343
                } // endtimp(strn_print(1029))
                jsxtnm345 = jsxtnm344
                let jsxtnm346 = XATSDAPP(jsxtnm345(jsxtnm295))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
                // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
                let jsxtnm348 = function () { // timp: gs_print$end(795)
                  // I1CMP:start
                  let jsxtnm347 = XATSTUP0([])
                  // I1CMP:return:jsxtnm347
                  return jsxtnm347
                } // endtimp(gs_print$end(795))
                let jsxtnm349 = XATSDAPP(jsxtnm348())
                jsxtnm350 = jsxtnm349
              } // endlet
              // I1CMP:return:jsxtnm350
              return jsxtnm350
            } // endtimp(gs_print_a5(801))
            let jsxtnm352 = XATSDAPP(jsxtnm351(jsxtnm286, jsxtnm287, jsxtnm288, jsxtnm289, jsxtnm290))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26769(line=1625,offs=52)--26776(line=1625,offs=59))
            // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
            // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
            // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
            let jsxtnm358
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
            // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
            // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
            let jsxtnm357 = function (arg1) { // timp: strn_print(1029)
              let jsxtnm353 = arg1
              // I1CMP:start
              let jsxtnm356 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                // I1FUNDCL
                // XATS2JS_strn_print_2202
                  // FJARGdarg($list(I1BNDcons(I1TNM(354);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(354)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                let jsxtnm355 = XATSDAPP(XATS2JS_strn_print(jsxtnm353))
                jsxtnm356 = jsxtnm355
              } // endlet
              // I1CMP:return:jsxtnm356
              return jsxtnm356
            } // endtimp(strn_print(1029))
            jsxtnm358 = jsxtnm357
            let jsxtnm359 = XATSDAPP(jsxtnm358(XATSSTRN("\n")))
            // I1CMP:return:jsxtnm359
            return jsxtnm359
          } // endtimp(gs_println_a5(814))
          let jsxtnm361 = XATSDAPP(jsxtnm360(XATSSTRN("["), jsxtnm228, XATSSTRN("] and ["), jsxtnm230, XATSSTRN("] are not doublets!")))
          jsxtnm515 = jsxtnm361
          break // cls
        } // gpt
        // } // cls
        // { // cls
        // I1GPTpat(I1BNDcons(I1TNM(362);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(wpth(5438)),I0Pvar(sols(5439)))));$list(@(wpth(5438),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(362));0)),@(sols(5439),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(362));1)))))
        if (XATS000_ctgeq(jsxtnm284, XATSCTAG("strmcon_vt_cons",1))) { // gpt
          let jsxtnm362 = jsxtnm284
          let jsxtnm514 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(JS_doublets.dats)@(1277(line=86,offs=1)--1296(line=86,offs=20)))
            // I1VALDCL
            let jsxtnm366
            // LCSRCsome1(JS_doublets.dats)@(1286(line=86,offs=10)--1290(line=86,offs=14))
            // I0Etapq(I0Ecst(strm_vt_free(2123)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/strm000_vt.sats)@(1995(line=91,offs=1)--2007(line=91,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))))))
            // T1IMPallx(strm_vt_free(2123);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(2378(line=121,offs=1)--2425(line=123,offs=29)))
            // T1IMPallx(strm_vt_free(2123)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))))>;I1Dtmpsub($list(@(a[8545],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_free(2123);$list(@(a[5381],T2Pvar(a[8545])))))))
            let jsxtnm364 = function (arg1) { // timp: strm_vt_free(2123)
              let jsxtnm363 = arg1
              // I1CMP:start
              XATS000_free(jsxtnm363)
              // I1CMP:return:[]
              return []
            } // endtimp(strm_vt_free(2123))
            let jsxtnm365 = XATSDAPP(jsxtnm364(XATSP1CN("strmcon_vt_cons", jsxtnm362[1+1])))
            jsxtnm366 = jsxtnm365
            XATS000_patck(true)
            // LCSRCsome1(JS_doublets.dats)@(1308(line=89,offs=1)--1316(line=89,offs=9))
            // I0Etapq(I0Ecst(gs_println_a5(814)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(14001(line=916,offs=1)--14014(line=916,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
            // T1IMPallx(gs_println_a5(814);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26618(line=1615,offs=1)--26783(line=1625,offs=66)))
            // T1IMPallx(gs_println_a5(814)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7043],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[7044],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x2[7045],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7046],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x4[7047],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a5(814);$list(@(x0[2543],T2Pvar(x0[7043])),@(x1[2544],T2Pvar(x1[7044])),@(x2[2545],T2Pvar(x2[7045])),@(x3[2546],T2Pvar(x3[7046])),@(x4[2547],T2Pvar(x4[7047])))))))
            let jsxtnm441 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_println_a5(814)
              let jsxtnm367 = arg1
              let jsxtnm368 = arg2
              let jsxtnm369 = arg3
              let jsxtnm370 = arg4
              let jsxtnm371 = arg5
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26720(line=1625,offs=3)--26731(line=1625,offs=14))
              // I0Etapq(I0Ecst(gs_print_a5(801)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Pvar(x0[7043]))),T2JAG($list(T2Pvar(x1[7044]))),T2JAG($list(T2Pvar(x2[7045]))),T2JAG($list(T2Pvar(x3[7046]))),T2JAG($list(T2Pvar(x4[7047])))))
              // T1IMPallx(gs_print_a5(801);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
              // T1IMPallx(gs_print_a5(801)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6965],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[6966],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x2[6967],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[6968],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x4[6969],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(801);$list(@(x0[2465],T2Pvar(x0[6965])),@(x1[2466],T2Pvar(x1[6966])),@(x2[2467],T2Pvar(x2[6967])),@(x3[2468],T2Pvar(x3[6968])),@(x4[2469],T2Pvar(x4[6969])))))))
              let jsxtnm432 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(801)
                let jsxtnm372 = arg1
                let jsxtnm373 = arg2
                let jsxtnm374 = arg3
                let jsxtnm375 = arg4
                let jsxtnm376 = arg5
                // I1CMP:start
                let jsxtnm431 // let
                { // let
                  // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                  // I1VALDCL
                  let jsxtnm380
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                  // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
                  // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                  // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
                  let jsxtnm378 = function () { // timp: gs_print$beg(793)
                    // I1CMP:start
                    let jsxtnm377 = XATSTUP0([])
                    // I1CMP:return:jsxtnm377
                    return jsxtnm377
                  } // endtimp(gs_print$beg(793))
                  let jsxtnm379 = XATSDAPP(jsxtnm378())
                  jsxtnm380 = jsxtnm379
                  XATS000_patck(true)
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6965])))))
                  // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                  let jsxtnm386
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                  // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                  // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                  // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                  let jsxtnm385 = function (arg1) { // timp: strn_print(1029)
                    let jsxtnm381 = arg1
                    // I1CMP:start
                    let jsxtnm384 // let
                    { // let
                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                      // I1FUNDCL
                      // XATS2JS_strn_print_2202
                        // FJARGdarg($list(I1BNDcons(I1TNM(382);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(382)))))))
                        // I1CMP:start
                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                      let jsxtnm383 = XATSDAPP(XATS2JS_strn_print(jsxtnm381))
                      jsxtnm384 = jsxtnm383
                    } // endlet
                    // I1CMP:return:jsxtnm384
                    return jsxtnm384
                  } // endtimp(strn_print(1029))
                  jsxtnm386 = jsxtnm385
                  let jsxtnm387 = XATSDAPP(jsxtnm386(jsxtnm372))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
                  // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                  // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                  // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                  let jsxtnm389 = function () { // timp: gs_print$sep(794)
                    // I1CMP:start
                    let jsxtnm388 = XATSTUP0([])
                    // I1CMP:return:jsxtnm388
                    return jsxtnm388
                  } // endtimp(gs_print$sep(794))
                  let jsxtnm390 = XATSDAPP(jsxtnm389())
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x1[6966])))))
                  // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                  let jsxtnm396
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                  // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                  // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                  // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                  let jsxtnm395 = function (arg1) { // timp: strn_print(1029)
                    let jsxtnm391 = arg1
                    // I1CMP:start
                    let jsxtnm394 // let
                    { // let
                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                      // I1FUNDCL
                      // XATS2JS_strn_print_2202
                        // FJARGdarg($list(I1BNDcons(I1TNM(392);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(392)))))))
                        // I1CMP:start
                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                      let jsxtnm393 = XATSDAPP(XATS2JS_strn_print(jsxtnm391))
                      jsxtnm394 = jsxtnm393
                    } // endlet
                    // I1CMP:return:jsxtnm394
                    return jsxtnm394
                  } // endtimp(strn_print(1029))
                  jsxtnm396 = jsxtnm395
                  let jsxtnm397 = XATSDAPP(jsxtnm396(jsxtnm373))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                  // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                  // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                  // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                  let jsxtnm399 = function () { // timp: gs_print$sep(794)
                    // I1CMP:start
                    let jsxtnm398 = XATSTUP0([])
                    // I1CMP:return:jsxtnm398
                    return jsxtnm398
                  } // endtimp(gs_print$sep(794))
                  let jsxtnm400 = XATSDAPP(jsxtnm399())
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x2[6967])))))
                  // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                  let jsxtnm406
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                  // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                  // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                  // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                  let jsxtnm405 = function (arg1) { // timp: strn_print(1029)
                    let jsxtnm401 = arg1
                    // I1CMP:start
                    let jsxtnm404 // let
                    { // let
                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                      // I1FUNDCL
                      // XATS2JS_strn_print_2202
                        // FJARGdarg($list(I1BNDcons(I1TNM(402);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(402)))))))
                        // I1CMP:start
                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                      let jsxtnm403 = XATSDAPP(XATS2JS_strn_print(jsxtnm401))
                      jsxtnm404 = jsxtnm403
                    } // endlet
                    // I1CMP:return:jsxtnm404
                    return jsxtnm404
                  } // endtimp(strn_print(1029))
                  jsxtnm406 = jsxtnm405
                  let jsxtnm407 = XATSDAPP(jsxtnm406(jsxtnm374))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                  // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                  // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                  // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                  let jsxtnm409 = function () { // timp: gs_print$sep(794)
                    // I1CMP:start
                    let jsxtnm408 = XATSTUP0([])
                    // I1CMP:return:jsxtnm408
                    return jsxtnm408
                  } // endtimp(gs_print$sep(794))
                  let jsxtnm410 = XATSDAPP(jsxtnm409())
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x3[6968])))))
                  // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                  let jsxtnm416
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                  // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                  // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                  // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                  let jsxtnm415 = function (arg1) { // timp: strn_print(1029)
                    let jsxtnm411 = arg1
                    // I1CMP:start
                    let jsxtnm414 // let
                    { // let
                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                      // I1FUNDCL
                      // XATS2JS_strn_print_2202
                        // FJARGdarg($list(I1BNDcons(I1TNM(412);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(412)))))))
                        // I1CMP:start
                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                      let jsxtnm413 = XATSDAPP(XATS2JS_strn_print(jsxtnm411))
                      jsxtnm414 = jsxtnm413
                    } // endlet
                    // I1CMP:return:jsxtnm414
                    return jsxtnm414
                  } // endtimp(strn_print(1029))
                  jsxtnm416 = jsxtnm415
                  let jsxtnm417 = XATSDAPP(jsxtnm416(jsxtnm375))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                  // I0Etapq(I0Ecst(gs_print$sep(794)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
                  // T1IMPallx(gs_print$sep(794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                  // T1IMPallx(gs_print$sep(794)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(794);$list()))))
                  let jsxtnm419 = function () { // timp: gs_print$sep(794)
                    // I1CMP:start
                    let jsxtnm418 = XATSTUP0([])
                    // I1CMP:return:jsxtnm418
                    return jsxtnm418
                  } // endtimp(gs_print$sep(794))
                  let jsxtnm420 = XATSDAPP(jsxtnm419())
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x4[6969])))))
                  // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                  let jsxtnm426
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                  // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                  // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                  // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                  let jsxtnm425 = function (arg1) { // timp: strn_print(1029)
                    let jsxtnm421 = arg1
                    // I1CMP:start
                    let jsxtnm424 // let
                    { // let
                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                      // I1FUNDCL
                      // XATS2JS_strn_print_2202
                        // FJARGdarg($list(I1BNDcons(I1TNM(422);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(422)))))))
                        // I1CMP:start
                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                      let jsxtnm423 = XATSDAPP(XATS2JS_strn_print(jsxtnm421))
                      jsxtnm424 = jsxtnm423
                    } // endlet
                    // I1CMP:return:jsxtnm424
                    return jsxtnm424
                  } // endtimp(strn_print(1029))
                  jsxtnm426 = jsxtnm425
                  let jsxtnm427 = XATSDAPP(jsxtnm426(jsxtnm376))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                  // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
                  // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                  // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
                  let jsxtnm429 = function () { // timp: gs_print$end(795)
                    // I1CMP:start
                    let jsxtnm428 = XATSTUP0([])
                    // I1CMP:return:jsxtnm428
                    return jsxtnm428
                  } // endtimp(gs_print$end(795))
                  let jsxtnm430 = XATSDAPP(jsxtnm429())
                  jsxtnm431 = jsxtnm430
                } // endlet
                // I1CMP:return:jsxtnm431
                return jsxtnm431
              } // endtimp(gs_print_a5(801))
              let jsxtnm433 = XATSDAPP(jsxtnm432(jsxtnm367, jsxtnm368, jsxtnm369, jsxtnm370, jsxtnm371))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26769(line=1625,offs=52)--26776(line=1625,offs=59))
              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
              // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
              let jsxtnm439
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
              // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
              // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
              // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
              let jsxtnm438 = function (arg1) { // timp: strn_print(1029)
                let jsxtnm434 = arg1
                // I1CMP:start
                let jsxtnm437 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                  // I1FUNDCL
                  // XATS2JS_strn_print_2202
                    // FJARGdarg($list(I1BNDcons(I1TNM(435);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(435)))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                  let jsxtnm436 = XATSDAPP(XATS2JS_strn_print(jsxtnm434))
                  jsxtnm437 = jsxtnm436
                } // endlet
                // I1CMP:return:jsxtnm437
                return jsxtnm437
              } // endtimp(strn_print(1029))
              jsxtnm439 = jsxtnm438
              let jsxtnm440 = XATSDAPP(jsxtnm439(XATSSTRN("\n")))
              // I1CMP:return:jsxtnm440
              return jsxtnm440
            } // endtimp(gs_println_a5(814))
            let jsxtnm442 = XATSDAPP(jsxtnm441(XATSSTRN("["), jsxtnm228, XATSSTRN("] and ["), jsxtnm230, XATSSTRN("] are doublets:\n")))
            // LCSRCsome1(JS_doublets.dats)@(1369(line=92,offs=1)--1386(line=92,offs=18))
            // I0Etapq(I0Ecst(list_rforitm$f1un(1223)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(4519(line=203,offs=1)--4536(line=203,offs=18))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
            // T1IMPallx(list_rforitm$f1un(1223);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6101(line=396,offs=1)--6171(line=399,offs=32)))
            // T1IMPallx(list_rforitm$f1un(1223)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7441],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_rforitm$f1un(1223);$list(@(x0[3389],T2Pvar(x0[7441])))))))
            let jsxtnm482
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(6140(line=399,offs=1)--6157(line=399,offs=18))
            // I0Etapq(I0Ecst(gseq_rforitm$f1un(401)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(7936(line=455,offs=1)--7953(line=455,offs=18))));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[7441]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[7441])))))
            // T1IMPallx(gseq_rforitm$f1un(401);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(7104(line=458,offs=1)--7245(line=467,offs=2)))
            // T1IMPallx(gseq_rforitm$f1un(401)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6072],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))),@(x0[6073],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_rforitm$f1un(401);$list(@(xs[1209],T2Pvar(xs[6072])),@(x0[1210],T2Pvar(x0[6073])))))))
            let jsxtnm481 = function (arg1, arg2) { // timp: gseq_rforitm$f1un(401)
              let jsxtnm443 = arg1
              let jsxtnm444 = arg2
              // I1CMP:start
              let jsxtnm480 // let
              { // let
                // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(7203(line=466,offs=1)--7243(line=466,offs=41)))
                // I1Dimplmnt0(DIMPLone2(rforitm$work(52);$list(@(x0[452],T2Pvar(x0[6073]))))):timp
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(7168(line=464,offs=1)--7180(line=464,offs=13))
                // I0Etapq(I0Ecst(gseq_rforitm(397)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gseq001.sats)@(7124(line=406,offs=1)--7136(line=406,offs=13))));$list(T2JAG($list(T2Pvar(xs[6072]))),T2JAG($list(T2Pvar(x0[6073])))))
                // T1IMPallx(gseq_rforitm(397);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5492(line=354,offs=1)--5557(line=357,offs=34)))
                // T1IMPallx(gseq_rforitm(397)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7435],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x0[7435],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_rforitm(397);$list(@(xs[1193],T2Papps(T2Pcst(list);$list(T2Pvar(x0[7435])))),@(x0[1194],T2Pvar(x0[7435])))))))
                let jsxtnm478
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5541(line=357,offs=18)--5553(line=357,offs=30))
                // I0Etapq(I0Ecst(list_rforitm(1219)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list001.sats)@(3960(line=177,offs=1)--3972(line=177,offs=13))));$list(T2JAG($list(T2Pvar(x0[7435])))))
                // T1IMPallx(list_rforitm(1219);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5347(line=343,offs=1)--5488(line=352,offs=2)))
                // T1IMPallx(list_rforitm(1219)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7434],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_rforitm(1219);$list(@(x0[3385],T2Pvar(x0[7434])))))))
                let jsxtnm477 = function (arg1) { // timp: list_rforitm(1219)
                  let jsxtnm447 = arg1
                  // I1CMP:start
                  let jsxtnm476 // let
                  { // let
                    // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5442(line=350,offs=1)--5486(line=351,offs=36)))
                    // I1Dimplmnt0(DIMPLone2(foritm$work0(1429);$list(@(x0[3734],T2Pvar(x0[7434]))))):timp
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5387(line=347,offs=1)--5402(line=347,offs=16))
                    // I0Etapq(I0Ecst(list_vt_foritm0(2041)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/list001_vt.sats)@(2455(line=125,offs=1)--2470(line=125,offs=16))));$list(T2JAG($list(T2Pvar(x0[7434])))))
                    // T1IMPallx(list_vt_foritm0(2041);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats)@(1590(line=52,offs=1)--1748(line=63,offs=4)))
                    // T1IMPallx(list_vt_foritm0(2041)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8875],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_foritm0(2041);$list(@(x0[5221],T2Pvar(x0[8875])))))))
                    let jsxtnm457 = function (arg1) { // timp: list_vt_foritm0(2041)
                      let jsxtnm448 = arg1
                      // I1CMP:start
                      let jsxtnm456 // let
                      { // let
                        // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats)@(1642(line=57,offs=1)--1693(line=60,offs=24)))
                        // I1FUNDCL
                        function work_1645(arg1)
                        { // fun
                          let jsxtnm449 = arg1
                          // I1CMP:start
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/list000.dats)@(1672(line=60,offs=3)--1684(line=60,offs=15))
                          // I0Etapq(I0Ecst(foritm$work0(1429)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/VT/gbas001_vt.sats)@(3042(line=183,offs=1)--3054(line=183,offs=13))));$list(T2JAG($list(T2Pvar(x0[8875])))))
                          // T1IMPallx(foritm$work0(1429);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5442(line=350,offs=1)--5486(line=351,offs=36)))
                          // T1IMPallx(foritm$work0(1429)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7434],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(foritm$work0(1429);$list(@(x0[3734],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                          let jsxtnm453
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5470(line=351,offs=20)--5482(line=351,offs=32))
                          // I0Etapq(I0Ecst(rforitm$work(52)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas001.sats)@(2379(line=127,offs=1)--2391(line=127,offs=13))));$list(T2JAG($list(T2Pvar(x0[7434])))))
                          // T1IMPallx(rforitm$work(52);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(7203(line=466,offs=1)--7243(line=466,offs=41)))
                          // T1IMPallx(rforitm$work(52)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6072],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Pnone0()))),@(x0[6073],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(rforitm$work(52);$list(@(x0[452],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))))
                          let jsxtnm452 = function (arg1) { // timp: rforitm$work(52)
                            let jsxtnm450 = arg1
                            // I1CMP:start
                            let jsxtnm451 = XATSDAPP(jsxtnm444(jsxtnm450))
                            // I1CMP:return:jsxtnm451
                            return jsxtnm451
                          } // endtimp(rforitm$work(52))
                          jsxtnm453 = jsxtnm452
                          let jsxtnm454 = XATSDAPP(jsxtnm453(jsxtnm449))
                          // I1CMP:return:jsxtnm454
                          return jsxtnm454
                        } // endfun(work_1645)
                        let jsxtnm455 = XATSDAPP(XATS2JS_list_vt_foritm0$f1un(jsxtnm448, work_1645))
                        jsxtnm456 = jsxtnm455
                      } // endlet
                      // I1CMP:return:jsxtnm456
                      return jsxtnm456
                    } // endtimp(list_vt_foritm0(2041))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5408(line=348,offs=2)--5423(line=348,offs=17))
                    // I0Etapq(I0Ecst(list_reverse_vt(1183)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(4351(line=268,offs=1)--4366(line=268,offs=16))));$list(T2JAG($list(T2Pvar(x0[7434])))))
                    // T1IMPallx(list_reverse_vt(1183);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5736(line=377,offs=1)--5823(line=382,offs=42)))
                    // T1IMPallx(list_reverse_vt(1183)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7375],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_reverse_vt(1183);$list(@(a[3334],T2Pvar(x0[7375])))))))
                    let jsxtnm473 = function (arg1) { // timp: list_reverse_vt(1183)
                      let jsxtnm458 = arg1
                      // I1CMP:start
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5782(line=382,offs=1)--5799(line=382,offs=18))
                      // I0Etapq(I0Ecst(list_rappendx0_vt(1186)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/list000.sats)@(4757(line=298,offs=1)--4774(line=298,offs=18))));$list(T2JAG($list(T2Pvar(x0[7375])))))
                      // T1IMPallx(list_rappendx0_vt(1186);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(6095(line=404,offs=1)--6360(line=426,offs=2)))
                      // T1IMPallx(list_rappendx0_vt(1186)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7377],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_rappendx0_vt(1186);$list(@(a[3342],T2Pvar(x0[7377])))))))
                      let jsxtnm470 = function (arg1, arg2) { // timp: list_rappendx0_vt(1186)
                        let jsxtnm459 = arg1
                        let jsxtnm460 = arg2
                        // I1CMP:start
                        let jsxtnm469 // let
                        { // let
                          // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(6174(line=412,offs=1)--6350(line=424,offs=34)))
                          // I1FUNDCL
                          function loop_6177(arg1, arg2)
                          { // fun
                            let jsxtnm461 = arg1
                            let jsxtnm462 = arg2
                            // I1CMP:start
                            let jsxtnm467 // cas
                            do {
                              // { // cls
                              // I1GPTpat(I1BNDcons(I1TNM(463);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                              if (XATS000_ctgeq(jsxtnm461, XATSCTAG("list_nil",0))) { // gpt
                                let jsxtnm463 = jsxtnm461
                                jsxtnm467 = jsxtnm462
                                break // cls
                              } // gpt
                              // } // cls
                              // { // cls
                              // I1GPTpat(I1BNDcons(I1TNM(464);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2560)),I0Pvar(xs(2561))));$list(@(x0(2560),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(464));0)),@(xs(2561),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(464));1)))))
                              if (XATS000_ctgeq(jsxtnm461, XATSCTAG("list_cons",1))) { // gpt
                                let jsxtnm464 = jsxtnm461
                                let jsxtnm465 = XATSCAPP("list_vt_cons", [1, XATSP1CN("list_cons", jsxtnm464[0+1]), jsxtnm462])
                                let jsxtnm466 = XATSDAPP(loop_6177(XATSP1CN("list_cons", jsxtnm464[1+1]), jsxtnm465))
                                jsxtnm467 = jsxtnm466
                                break // cls
                              } // gpt
                              // } // cls
                              XATS000_cfail()
                            } while (false) // end-of(do)
                            // I1CMP:return:jsxtnm467
                            return jsxtnm467
                          } // endfun(loop_6177)
                          let jsxtnm468 = XATSDAPP(loop_6177(jsxtnm459, jsxtnm460))
                          jsxtnm469 = jsxtnm468
                        } // endlet
                        // I1CMP:return:jsxtnm469
                        return jsxtnm469
                      } // endtimp(list_rappendx0_vt(1186))
                      let jsxtnm471 = XATSCAPP("list_vt_nil", [0])
                      let jsxtnm472 = XATSDAPP(jsxtnm470(jsxtnm458, jsxtnm471))
                      // I1CMP:return:jsxtnm472
                      return jsxtnm472
                    } // endtimp(list_reverse_vt(1183))
                    let jsxtnm474 = XATSDAPP(jsxtnm473(jsxtnm447))
                    let jsxtnm475 = XATSDAPP(jsxtnm457(jsxtnm474))
                    jsxtnm476 = jsxtnm475
                  } // endlet
                  // I1CMP:return:jsxtnm476
                  return jsxtnm476
                } // endtimp(list_rforitm(1219))
                jsxtnm478 = jsxtnm477
                let jsxtnm479 = XATSDAPP(jsxtnm478(jsxtnm443))
                jsxtnm480 = jsxtnm479
              } // endlet
              // I1CMP:return:jsxtnm480
              return jsxtnm480
            } // endtimp(gseq_rforitm$f1un(401))
            jsxtnm482 = jsxtnm481
            let jsxtnm512 = function (arg1) { // lam0(T_LAM(0))
              let jsxtnm483 = arg1
              // I1CMP:start
              // LCSRCsome1(JS_doublets.dats)@(1405(line=92,offs=37)--1412(line=92,offs=44))
              // I0Etapq(I0Ecst(gs_println_a1(810)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(13747(line=892,offs=1)--13760(line=892,offs=14))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
              // T1IMPallx(gs_println_a1(810);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
              // T1IMPallx(gs_println_a1(810)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7033],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(810);$list(@(x0[2533],T2Pvar(x0[7033])))))))
              let jsxtnm510 = function (arg1) { // timp: gs_println_a1(810)
                let jsxtnm484 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
                // I0Etapq(I0Ecst(gs_print_a1(797)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11760(line=745,offs=1)--11771(line=745,offs=12))));$list(T2JAG($list(T2Pvar(x0[7033])))))
                // T1IMPallx(gs_print_a1(797);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
                // T1IMPallx(gs_print_a1(797)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6955],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(797);$list(@(x0[2455],T2Pvar(x0[6955])))))))
                let jsxtnm501 = function (arg1) { // timp: gs_print_a1(797)
                  let jsxtnm485 = arg1
                  // I1CMP:start
                  let jsxtnm500 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
                    // I1VALDCL
                    let jsxtnm489
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
                    // I0Etapq(I0Ecst(gs_print$beg(793)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
                    // T1IMPallx(gs_print$beg(793);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                    // T1IMPallx(gs_print$beg(793)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(793);$list()))))
                    let jsxtnm487 = function () { // timp: gs_print$beg(793)
                      // I1CMP:start
                      let jsxtnm486 = XATSTUP0([])
                      // I1CMP:return:jsxtnm486
                      return jsxtnm486
                    } // endtimp(gs_print$beg(793))
                    let jsxtnm488 = XATSDAPP(jsxtnm487())
                    jsxtnm489 = jsxtnm488
                    XATS000_patck(true)
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
                    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Pvar(x0[6955])))))
                    // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                    let jsxtnm495
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                    // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                    // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                    // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                    let jsxtnm494 = function (arg1) { // timp: strn_print(1029)
                      let jsxtnm490 = arg1
                      // I1CMP:start
                      let jsxtnm493 // let
                      { // let
                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                        // I1FUNDCL
                        // XATS2JS_strn_print_2202
                          // FJARGdarg($list(I1BNDcons(I1TNM(491);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(491)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                        let jsxtnm492 = XATSDAPP(XATS2JS_strn_print(jsxtnm490))
                        jsxtnm493 = jsxtnm492
                      } // endlet
                      // I1CMP:return:jsxtnm493
                      return jsxtnm493
                    } // endtimp(strn_print(1029))
                    jsxtnm495 = jsxtnm494
                    let jsxtnm496 = XATSDAPP(jsxtnm495(jsxtnm485))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
                    // I0Etapq(I0Ecst(gs_print$end(795)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
                    // T1IMPallx(gs_print$end(795);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                    // T1IMPallx(gs_print$end(795)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(795);$list()))))
                    let jsxtnm498 = function () { // timp: gs_print$end(795)
                      // I1CMP:start
                      let jsxtnm497 = XATSTUP0([])
                      // I1CMP:return:jsxtnm497
                      return jsxtnm497
                    } // endtimp(gs_print$end(795))
                    let jsxtnm499 = XATSDAPP(jsxtnm498())
                    jsxtnm500 = jsxtnm499
                  } // endlet
                  // I1CMP:return:jsxtnm500
                  return jsxtnm500
                } // endtimp(gs_print_a1(797))
                let jsxtnm502 = XATSDAPP(jsxtnm501(jsxtnm484))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
                // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/gbas000.sats)@(2820(line=170,offs=1)--2827(line=170,offs=8))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                // T1IMPallx(g_print(39);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[434],T2Pcst(strn)))))))
                let jsxtnm508
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                // I0Etapq(I0Ecst(strn_print(1029)(LCSRCsome1(../../../../../../XATSHOME/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                // T1IMPallx(strn_print(1029);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2111(line=101,offs=1)--2251(line=112,offs=2)))
                // T1IMPallx(strn_print(1029)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1029);$list()))))
                let jsxtnm507 = function (arg1) { // timp: strn_print(1029)
                  let jsxtnm503 = arg1
                  // I1CMP:start
                  let jsxtnm506 // let
                  { // let
                    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2191(line=109,offs=1)--2249(line=111,offs=47)))
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2199(line=110,offs=1)--2249(line=111,offs=47))
                    // I1FUNDCL
                    // XATS2JS_strn_print_2202
                      // FJARGdarg($list(I1BNDcons(I1TNM(504);I0Pvar(cs(5261));$list(@(cs(5261),I1Vtnm(I1TNM(504)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                    let jsxtnm505 = XATSDAPP(XATS2JS_strn_print(jsxtnm503))
                    jsxtnm506 = jsxtnm505
                  } // endlet
                  // I1CMP:return:jsxtnm506
                  return jsxtnm506
                } // endtimp(strn_print(1029))
                jsxtnm508 = jsxtnm507
                let jsxtnm509 = XATSDAPP(jsxtnm508(XATSSTRN("\n")))
                // I1CMP:return:jsxtnm509
                return jsxtnm509
              } // endtimp(gs_println_a1(810))
              let jsxtnm511 = XATSDAPP(jsxtnm510(jsxtnm483))
              // I1CMP:return:jsxtnm511
              return jsxtnm511
            } // endfun(lam0)
            let jsxtnm513 = XATSDAPP(jsxtnm482(XATSP1CN("strmcon_vt_cons", jsxtnm362[0+1]), jsxtnm512))
            jsxtnm514 = jsxtnm513
          } // endlet
          jsxtnm515 = jsxtnm514
          break // cls
        } // gpt
        // } // cls
        XATS000_cfail()
      } while (false) // end-of(do)
      jsxtnm516 = jsxtnm515
    } // endlet
    jsxtnm517 = jsxtnm516
  } // endlet
  // I1CMP:return:jsxtnm517
  return jsxtnm517
} // endfun(impl)
// LCSRCsome1(JS_doublets.dats)@(2111(line=127,offs=1)--2111(line=127,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(JS_doublets.dats)@(2111(line=127,offs=1)--2111(line=127,offs=1));D3Cnone0()))
