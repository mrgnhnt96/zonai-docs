((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,F,I,A={
bg(d){var x=$.kU.n(0,d)
if(x==null){x=new A.ed(d,B.a([],y.C))
$.kU.i(0,d,x)}return x},
ee:function ee(d,e){this.a=d
this.b=e},
cF:function cF(d,e){this.c=d
this.a=e},
fj:function fj(d,e,f,g,h,i,j){var _=this
_.d$=d
_.e$=e
_.f$=f
_.cy=null
_.db=g
_.c=_.b=_.a=null
_.d=h
_.e=null
_.f=i
_.w=_.r=null
_.x=j
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
aM:function aM(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.z=f
_.d=$
_.c=_.b=_.a=null},
ed:function ed(d,e){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=e
_.r=!0},
hg:function hg(){},
h_:function h_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.a=h},
hl:function hl(d,e){this.a=d
this.b=e},
eF:function eF(d,e){this.c=d
this.a=e},
f6:function f6(d,e){this.c=d
this.a=e},
nX(){return new A.b7(null)},
b7:function b7(d){this.a=d},
f9:function f9(){this.d=!1
this.c=this.a=null},
i2:function i2(d){this.a=d},
i1:function i1(d){this.a=d},
nA(d){var x,w,v=y.w,u=B.G(v,v)
for(x=0;x<B.P(d.length);++x){w=B.o(d.item(x))
u.i(0,B.u(w.name),B.u(w.value))}return u}},E,G,H,K,L,D
B=c[0]
C=c[2]
F=c[10]
I=c[16]
A=a.updateHolder(c[6],A)
E=c[22]
G=c[13]
H=c[17]
K=c[18]
L=c[19]
D=c[9]
A.ee.prototype={
ad(){return"AttachTarget."+this.b}}
A.cF.prototype={
U(){var x=B.bI(y.b),w=($.I+1)%16777215
$.I=w
return new A.fj(null,!1,!1,x,w,this,C.e)}}
A.fj.prototype={
af(){var x=this.f
x.toString
y.h.a(x)
return E.ad},
a0(){var x,w,v=this.f
v.toString
y.h.a(v)
x=this.e
x.toString
x=new A.aM(B.a([],y.k),E.n,x)
x.aX("")
w=A.bg(x.x)
C.b.l(w.f,x)
w.r=!0
x.scP(v.c)
return x},
W(d){var x
y.n.a(d)
x=this.f
x.toString
y.h.a(x)
d.seW(E.n)
d.scP(x.c)},
aC(){var x,w
this.c7()
x=this.d$
x.toString
y.n.a(x)
w=this.e
w.toString
x.seh(w)},
a6(){var x,w
this.dk()
x=this.d$
x.toString
y.n.a(x)
w=A.bg(x.x)
C.b.D(w.f,x)
w.an()}}
A.aM.prototype={
seW(d){var x=this,w=x.x
if(w===d)return
w=A.bg(w)
C.b.D(w.f,x)
w.an()
x.x=d
w=A.bg(d)
C.b.l(w.f,x)
w.r=!0
A.bg(x.x).an()},
scP(d){y.f.a(d)
if(this.y===d)return
this.y=d
A.bg(this.x).an()},
seh(d){if(this.z===d)return
this.z=d
A.bg(this.x).d0(!0)},
a3(d,e){var x,w,v,u,t=this
d.a=t
try{x=d.gG()
w=e==null?null:e.gG()
if(w==null&&C.b.J(t.w,x))return
if(w!=null&&!C.b.J(t.w,w))w=null
v=t.w
C.b.D(v,x)
u=w!=null?C.b.aj(v,w)+1:0
C.b.er(v,u,x)
A.bg(t.x).an()}finally{d.a7()}},
D(d,e){C.b.D(this.w,e.gG())
e.a=null
A.bg(this.x).an()}}
A.ed.prototype={
gcS(){var x,w=this,v=w.b
if(v===$){x=B.o(B.h(b.G.document).querySelector(w.a.b))
x.toString
w.b!==$&&B.ha()
w.b=x
v=x}return v},
d0(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(d||m.r){C.b.ab(m.f,new A.hg())
m.r=!1}x=m.c
if(x===$){w=A.nA(B.h(m.gcS().attributes))
m.c!==$&&B.ha()
m.c=w
x=w}for(v=m.f,u=v.length,t=0;t<v.length;v.length===u||(0,B.ah)(v),++t){s=v[t].y
if(s!=null)x.B(0,s)}r=B.kf(y.w)
for(q=0;v=m.gcS(),q<B.P(B.h(v.attributes).length);++q)r.l(0,B.u(B.o(B.h(v.attributes).item(q)).name))
if(x.a!==0)for(u=new B.b0(x,B.j(x).h("b0<1,2>")).gv(0);u.k();){p=u.d
o=p.a
B.ef(v,o,p.b)
r.D(0,o)}if(r.a!==0)for(u=B.lw(r,r.r,r.$ti.c),o=u.$ti.c;u.k();){n=u.d
if(n==null)n=o.a(n)
v.removeAttribute(n)}},
an(){return this.d0(!1)}}
A.h_.prototype={
A(d){var x=this,w=null,v=y.w
v=B.G(v,v)
v.i(0,"cx",x.c)
v.i(0,"cy",x.d)
v.i(0,"r",x.e)
return new B.H("circle",w,w,w,v,w,x.at,w)}}
A.hl.prototype={
ad(){return"Display."+this.b}}
A.eF.prototype={
A(d){var x=y.F
return new D.bV(this.c,B.a([D.aU(B.a([],x),"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z")],x),null)}}
A.f6.prototype={
A(d){var x=y.F
return new D.bV(this.c,B.a([new A.h_("12","12","4",B.a([],x),null),D.aU(B.a([],x),"M12 4h.01"),D.aU(B.a([],x),"M20 12h.01"),D.aU(B.a([],x),"M12 20h.01"),D.aU(B.a([],x),"M4 12h.01"),D.aU(B.a([],x),"M17.657 6.343h.01"),D.aU(B.a([],x),"M17.657 17.657h.01"),D.aU(B.a([],x),"M6.343 17.657h.01"),D.aU(B.a([],x),"M6.343 6.343h.01")],x),null)}}
A.b7.prototype={
aD(){return new A.f9()}}
A.f9.prototype={
aF(){this.bs()
this.d=B.a7(B.o(B.h(b.G.document).documentElement).getAttribute("data-theme"))==="dark"},
A(d){var x,w=this,v=null,u=y.F,t=B.a([],u),s=w.d?"dark":"light",r=y.w
t.push(new A.cF(B.a_(["data-theme",s],r,r),v))
r=B.a_(["aria-label","Theme Toggle"],r,r)
s=F.iZ(w.d?E.r:v,v,v,v,v,v,v)
s=G.c5(B.a([new A.eF(20,v)],u),v,s)
x=F.iZ(w.d?v:E.r,v,v,v,v,v,v)
t.push(K.fX(B.a([s,G.c5(B.a([new A.f6(20,v)],u),v,x)],u),r,"theme-toggle",v,new A.i2(w),v))
return new I.bj(t,v)}}
var z=a.updateTypes(["b(aM,aM)"])
A.hg.prototype={
$2(d,e){var x=y.n
x.a(d)
x.a(e)
return d.z-e.z},
$S:z+0}
A.i2.prototype={
$0(){var x,w=this.a
w.L(new A.i1(w))
x=B.h(B.h(b.G.window).localStorage)
w=w.d?"dark":"light"
x.setItem("jaspr:theme",w)},
$S:0}
A.i1.prototype={
$0(){var x=this.a
x.d=!x.d},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.cn,[A.ee,A.hl])
w(A.cF,B.i)
w(A.fj,B.bn)
w(A.aM,B.cO)
w(A.ed,B.l)
w(A.hg,B.bC)
x(L.v,[A.h_,A.eF,A.f6])
w(A.b7,H.V)
w(A.f9,H.O)
x(B.aN,[A.i2,A.i1])})()
B.ac(b.typeUniverse,JSON.parse('{"aM":{"a9":[],"kj":[],"bo":[]},"cF":{"i":[]},"fj":{"U":[],"k":[],"M":[]},"h_":{"v":[],"i":[]},"eF":{"v":[],"i":[]},"f6":{"v":[],"i":[]},"b7":{"V":[],"i":[]},"f9":{"O":["b7"],"O.T":"b7"}}'))
var y={h:B.t("cF"),n:B.t("aM"),b:B.t("k"),C:B.t("q<aM>"),F:B.t("q<i>"),k:B.t("q<n>"),w:B.t("c"),f:B.t("w<c,c>?")};(function constants(){var x=a.makeConstList
E.n=new A.ee(0,"html")
E.r=new A.hl(0,"none")
E.ad=x([],y.F)})();(function staticFields(){$.kU=B.G(B.t("ee"),B.t("ed"))})()};
(a=>{a["sg73K7JRgtbtsc7wtrdwlTcyiTQ="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_17.part.js.map
