/* مملكة الإنجاز: مغامرات الأبطال — game.js
 * Sections: PIXEL DATA · STATE & TASKS · AUDIO · UI SCREENS · RENDERER (hd/bld/sky) · ISLAND & ECONOMY · COMBAT · LIFE · KINGDOM (time/parent/achievements) · PAUSE/TUTORIAL · EVENTS · BOOT
 */
/* ================= PIXEL DATA ================= */
const INK='#1d1633';
const ICONS={
 crown:{p:{y:'#f5c542',o:'#b07a10',r:'#e8464f',b:'#7fd3f7'},r:["........","y..y...y","yy.yy.yy","yyyyyyyy","ybyyryby","yyyyyyyy","oooooooo","........"]},
 pause:{p:{w:'#ffe9b0',o:'#c9921f'},r:["........",".ww..ww.",".wo..wo.",".wo..wo.",".wo..wo.",".wo..wo.",".ww..ww.","........"]},
 log:{p:{b:'#9a6a3a',l:'#e8c08a',d:'#5a3a1a'},r:["........",".bbbbbb.","bdbbbbll","bbbbbbld","bbbdbbll",".bbbbbb.","........","........"]},
 walk:{p:{h:'#3a2410',s:'#e8b48a',b:'#3f5fd6',l:'#2a2440'},r:["...hh...","...ss...","..bbbb..",".b.bb.b.","...bb...","..l..l..",".l....l.","........"]},
 horse:{p:{h:'#9a5a2e',m:'#3a2410'},r:["......mh",".....hhh","mhhhhhh.","hhhhhhh.","hhhhhh..","h.h..h.h","h.h..h.h","........"]},
 star:{p:{y:'#f5c542',o:'#e08a1f'},r:["...yy...","...yy...","yyyyyyyy",".yyooyy.","..yyyy..",".yy..yy.","yy....yy","........"]},
 gem:{p:{c:'#7fd3f7',w:'#ffffff',b:'#3a8ad6'},r:[".cccccc.","cwccccbc","cccccccc",".cccccb.","..cccb..","...cb...","........","........"]},
 coin:{p:{y:'#f5c542',o:'#c9921f'},r:["..yyyy..",".yyyyyy.","yyoyyyyy","yyoyyyyy","yyoyyyyy","yyoyyyyy",".yyyyyy.","..yyyy.."]},
 heart:{p:{r:'#e8464f',w:'#ffb3b8'},r:[".rr.rr..","rwrrrrr.","rrrrrrr.","rrrrrrr.",".rrrrr..","..rrr...","...r....","........"]},
 heartE:{p:{r:'#5d5480'},r:[".rr.rr..","rrrrrrr.","rrrrrrr.","rrrrrrr.",".rrrrr..","..rrr...","...r....","........"]},
 flame:{p:{r:'#e8464f',o:'#f08a2a',y:'#f5c542'},r:["...r....","..rr..r.","..rrr.rr",".rrorrrr",".roooorr","rroyyorr",".royyor.","..rrrr.."]},
 clock:{p:{w:'#ffffff',k:'#1d1633',o:'#f08a2a'},r:["..oooo..",".owwkwo.","owwwkwwo","owwwkkko","owwwwwwo","owwwwwwo",".owwwwo.","..oooo.."]},
 chart:{p:{g:'#6fd36a',b:'#4f7be0'},r:["......gg","......gg","...bb.gg","...bb.gg","gg.bb.gg","gg.bb.gg","gg.bb.gg","........"]},
 sun:{p:{y:'#f5c542',o:'#f08a2a'},r:["...yy...",".y.yy.y.","..yyyy..","yyyooyyy","yyyooyyy","..yyyy..",".y.yy.y.","...yy..."]},
 moon:{p:{y:'#f5e08a',s:'#ffffff'},r:["..yyy...",".yy.....","yy....s.","yy......","yy..s...","yyy...y.",".yyyyyy.","..yyyy.."]},
 bed:{p:{r:'#8a5a2a',w:'#ffffff',b:'#4f7be0'},r:["........","r.......","rww.....","rwwbbbbb","rbbbbbbb","rrrrrrrr","r......r","........"]},
 tooth:{p:{w:'#ffffff',c:'#7fd3f7'},r:[".ww.ww..","wwwwwww.","wwwwwwc.","wwwwwww.",".wwwww..",".ww.ww..",".w...w..","........"]},
 food:{p:{r:'#e8464f',g:'#3f9e3a',w:'#ffb3b8'},r:["....g...","...g....",".rrrrr..","rrrrrrr.","rwrrrrr.","rrrrrrr.",".rrrrr..","..r.r..."]},
 bag:{p:{b:'#4f7be0',y:'#f5c542'},r:["..bbbb..",".b....b.","bbbbbbbb","bbyyyybb","bbyyyybb","bbbbbbbb","bbbbbbbb",".bbbbbb."]},
 book:{p:{r:'#e8464f',w:'#ffffff'},r:["rrrrrrr.","rwwwwwr.","rwrrrwr.","rwwwwwr.","rwrrrwr.","rwwwwwr.","rrrrrrr.","........"]},
 pencil:{p:{y:'#f5c542',p:'#ff9ac2',o:'#c9921f'},r:["......pp",".....yyp","....yyy.","...yyy..","..yyy...",".yyy....","oo......","o......."]},
 broom:{p:{b:'#8a5a2a',y:'#f5c542'},r:["......b.",".....b..","....b...","...b....","..yyy...",".yyyyy..","yyyyyyy.","y.y.y.y."]},
 water:{p:{c:'#5ab4f0',w:'#ffffff'},r:["...c....","...c....","..ccc...",".ccccc..",".cwccc..",".ccccc..","..ccc...","........"]},
 boots:{p:{o:'#f08a2a',k:'#8a4a1a'},r:["........",".oo.....",".oo.....",".oo.....",".ooooo..",".oooooo.",".kkkkkk.","........"]},
 shield:{p:{g:'#8f97a6',y:'#f2b632'},r:[".gggggg.","gggyyggg","gggyyggg","gyyyyyyg","gggyyggg",".ggyygg.","..gggg..","...gg..."]},
 lantern:{p:{k:'#5a4a7a',y:'#f5c542',w:'#fff3c4'},r:["...kk...","..k..k..",".kkkkkk.",".kywwyk.",".kywwyk.",".kyyyyk.",".kkkkkk.","........"]},
 magnet:{p:{r:'#e8464f',w:'#d3d9e3'},r:[".ww..ww.",".rr..rr.",".rr..rr.",".rr..rr.",".rrrrrr.","..rrrr..","........","........"]},
 potion:{p:{r:'#e8464f',w:'#ffffff',b:'#8a5a2a'},r:["...bb...","...ww...","..wrrw..",".wrrrrw.",".wrwrrw.",".wrrrrw.","..wwww..","........"]},
 feather:{p:{w:'#ffffff',c:'#7fd3f7'},r:[".....ww.","....www.","...wwwc.","..wwwc..",".wwwc...",".wc.....","c.......","........"]},
 scroll:{p:{y:'#f6dc94',b:'#c9921f',r:'#e8464f'},r:["bbbbbbb.","yyyyyyy.","yr..r.y.","y.rr..y.","y..r.ry.","yyyyyyy.","bbbbbbb.","........"]},
 quran:{p:{g:'#2f8a4a',y:'#f5c542'},r:["gggggggg","gyyyyyyg","gy.gg.yg","gyg..gyg","gyg..gyg","gy.gg.yg","gyyyyyyg","gggggggg"]},
 pray:{p:{g:'#3f9e3a',y:'#f5c542'},r:["...y....","..ggg...",".ggggg..",".ggggg.y","ggggggyy","gg.gggyy","gg.gggyy","gggggggg"]},
 ball:{p:{w:'#ffffff',k:'#5d5480'},r:["..www...",".wkkww..","wwkkwww.","wwwwwkk.","wkwwwkk.",".wkkww..","..www...","........"]},
 check:{p:{w:'#ffffff'},r:["........",".......w","......ww","w....ww.","ww..ww..",".wwww...","..ww....","........"]},
 lock:{p:{g:'#f5c542',k:'#c9921f'},r:["..kkkk..",".k....k.",".k....k.","gggggggg","gggkkggg","gggkkggg","gggggggg","gggggggg"]},
 house:{p:{r:'#e8464f',w:'#f7f3fe',b:'#8a5a2a'},r:["...rr...","..rrrr..",".rrrrrr.","rrrrrrrr",".wwwwww.",".wwbbww.",".wwbbww.",".wwbbww."]},
 list:{p:{w:'#ffffff',g:'#6fd36a'},r:["gg.wwwww","gg......","........","gg.wwwww","gg......","........","gg.wwwww","gg......"]},
 map:{p:{g:'#6fd36a',y:'#f5c542',r:'#e8464f'},r:["gggyyggg","ggyyyggg","gyyyggrg","gyyggrrr","yyyggrgg","yyygyygg","ggyyyygg","gggyyggg"]},
 sword:{p:{w:'#dfe6f2',b:'#8a5a2a',y:'#f5c542'},r:[".......w","......ww",".....ww.","....ww..","y..ww...",".yww....","..by....",".b..y..."]},
 people:{p:{s:'#f2c08f',b:'#4f7be0',r:'#e8464f'},r:[".ss..ss.",".ss..ss.","........","bbbbrrrr","bbbbrrrr","bbbbrrrr",".bb..rr.",".bb..rr."]},
 sound:{p:{w:'#ffffff',c:'#7fd3f7'},r:["...w....","..ww..c.","wwww...c","wwww.c.c","wwww.c.c","wwww...c","..ww..c.","...w...."]},
 mute:{p:{w:'#ffffff',r:'#e8464f'},r:["...w....","..ww....","wwww.r.r","wwww..r.","wwww.r.r","wwww....","..ww....","...w...."]},
 gift:{p:{r:'#e8464f',y:'#f5c542'},r:[".yy.yy..","..yyy...","rrryrrr.","rrryrrr.","rrryrrr.","rrryrrr.","rrryrrr.","........"]},
};
const ICON_CHOICES=[['pray','صلاة'],['quran','قرآن وأذكار'],['sun','شمس'],['bed','سرير'],['tooth','أسنان'],['food','طعام'],['bag','حقيبة'],['pencil','واجب'],['book','قراءة'],['ball','رياضة'],['heart','مساعدة'],['water','وضوء وماء'],['broom','ترتيب'],['moon','نوم'],['star','نجمة']];

function drawIcon(cv,name){
  const ic=ICONS[name]; if(!ic) return; cv.width=10;cv.height=10;
  const x=cv.getContext('2d'); x.clearRect(0,0,10,10);
  x.fillStyle=INK;
  ic.r.forEach((row,j)=>{for(let i=0;i<8;i++){if(row[i]&&row[i]!=='.') x.fillRect(i,j,3,3)}});
  ic.r.forEach((row,j)=>{for(let i=0;i<8;i++){const c=row[i]; if(c&&c!=='.'){x.fillStyle=ic.p[c];x.fillRect(i+1,j+1,1,1)}}});
}

/* ---------- hero ---------- */
const BOY=["....hhhhh...","...hhhhhhh..","..hhhhhhhhh.","..hhhssssss.","..hhssseses.","...hsssssss.","...ggsssss..","..gggbbbbbb.",".ggggbbbbbs.",".ggggbbbbbs.","..gggbbbbb..","....pppppp..","....ppp.ppp.","....pp...pp.","...kkk..kkk.","...kkk..kkk."];
const GIRL=["....hhhhh...","...hhhhhhh..","..hhhhhhhhh.","..hhhsssssh.","..hhssesesh.","..hhhsssssh.","..ghhhhhhh..","..gggbbbbbb.",".ggggbbbbbs.",".ggggbbbbbs.","..gggbbbbbb.","....bbbbbbb.","....bbbbbbb.","....pp...pp.","...kkk..kkk.","...kkk..kkk."];
const RUN_B=["....pppppp..","...pp....pp.","..kkk....kkk","............"];
const RUN_G=["....bbbbbbb.","...pp....pp.","..kkk....kkk","............"];
const SK='#f2c08f';
const CHARS={
 adv:{rows:BOY,pal:{h:'#5a3418',s:SK,e:INK,b:'#3a6fd8',p:'#2a3f8a',k:'#3a2a20',g:'#d9852b'}},
 ninja:{rows:BOY,pal:{h:'#22222e',s:SK,e:INK,b:'#33334a',p:'#22222e',k:'#111118',g:'#c0392b'},x:'band'},
 robot:{rows:BOY,pal:{h:'#9aa3b5',s:'#c9d1de',e:'#1fb6c9',b:'#7b8496',p:'#5b6476',k:'#3b4252',g:'#f2b632'},x:'antenna'},
 hunter:{rows:BOY,pal:{h:'#2f6b3a',s:SK,e:INK,b:'#3f8a4a',p:'#5a4a2a',k:'#3a2a20',g:'#8a5a2a'},x:'hood'},
 sailor:{rows:BOY,pal:{h:'#2a2018',s:SK,e:INK,b:'#ffffff',p:'#1f3f8a',k:'#111118',g:'#1f6fd0'},x:'sailor'},
 wizard:{rows:BOY,pal:{h:'#3a2418',s:SK,e:INK,b:'#5b3fb0',p:'#3a2a80',k:'#2a1a40',g:'#f2b632'},x:'wizhat'},
 knight:{rows:BOY,pal:{h:'#c0c8d6',s:SK,e:INK,b:'#a8b2c4',p:'#6b7486',k:'#3b4252',g:'#7a4a2a'},x:'visor'},
 astrob:{rows:BOY,pal:{h:'#5a3418',s:SK,e:INK,b:'#e6eaf2',p:'#9aa3b5',k:'#5b6476',g:'#e8464f'},x:'astro'},
 desertb:{rows:BOY,pal:{h:'#ffffff',s:SK,e:INK,b:'#f4ecd8',p:'#c8a96a',k:'#6e4a2a',g:'#c9921f'},x:'agal'},
 iceb:{rows:BOY,pal:{h:'#bfe9ff',s:SK,e:INK,b:'#5ab4f0',p:'#2f6fb0',k:'#e6f4ff',g:'#ffffff'},x:'icecrown'},
 fireb:{rows:BOY,pal:{h:'#c0392b',s:SK,e:INK,b:'#e8463c',p:'#7a1f1a',k:'#2a1010',g:'#f5c542'},x:'flame'},
 starb:{rows:BOY,pal:{h:'#ffd36b',s:'#ffe8c2',e:INK,b:'#ffffff',p:'#7fb3f0',k:'#b79be8',g:'#7fd3f7'},x:'sparkle'},
 advg:{rows:GIRL,pal:{h:'#e2476a',s:SK,e:INK,b:'#8a5bd6',p:'#2a3f8a',k:'#3a2a20',g:'#f2b632'}},
 explorer:{rows:GIRL,pal:{h:'#3f9e3a',s:SK,e:INK,b:'#2fa6a0',p:'#1f6f6a',k:'#5a3a20',g:'#d9852b'}},
 scientist:{rows:GIRL,pal:{h:'#4f7be0',s:SK,e:INK,b:'#ffffff',p:'#3a4a6a',k:'#3a2a20',g:'#7fd3f7'},x:'goggles'},
 painter:{rows:GIRL,pal:{h:'#f2b632',s:SK,e:INK,b:'#e8464f',p:'#2a3f8a',k:'#3a2a20',g:'#8a5a2a'},x:'beret'},
 doctor:{rows:GIRL,pal:{h:'#7fd3f7',s:SK,e:INK,b:'#ffffff',p:'#5ab4f0',k:'#3a4a6a',g:'#e8464f'},x:'cross'},
 traveler:{rows:GIRL,pal:{h:'#8a5a2a',s:SK,e:INK,b:'#c88a4a',p:'#5a3a20',k:'#3a2410',g:'#3f9e3a'},x:'cloak'},
 princess:{rows:GIRL,pal:{h:'#2b3a8a',s:SK,e:INK,b:'#f2b632',p:'#c9921f',k:'#6e4a2a',g:'#e8464f'},x:'tiara'},
 astro:{rows:GIRL,pal:{h:'#f4f6fb',s:SK,e:INK,b:'#e6eaf2',p:'#9aa3b5',k:'#5b6476',g:'#e8464f'},x:'astro'},
 desertg:{rows:GIRL,pal:{h:'#2e2648',s:SK,e:INK,b:'#2b2350',p:'#2b2350',k:'#1d1633',g:'#f2b632'},x:'goldtrim'},
 iceg:{rows:GIRL,pal:{h:'#e6f4ff',s:SK,e:INK,b:'#7fd3f7',p:'#3a8ac0',k:'#ffffff',g:'#bfe9ff'},x:'icecrown'},
 fireg:{rows:GIRL,pal:{h:'#e8463c',s:SK,e:INK,b:'#f08a2a',p:'#8a1f1a',k:'#2a1010',g:'#f5c542'},x:'flame'},
 star:{rows:GIRL,pal:{h:'#ffd36b',s:'#ffe8c2',e:INK,b:'#ffffff',p:'#f29ccf',k:'#b79be8',g:'#7fd3f7'},x:'sparkle'},
};
const SKINS={green:{b:'#3fae4a',p:'#2d6b33'},sky:{b:'#7fc4f5',p:'#3a6fd8'},sport:{b:'#e8464f',p:'#f4f6fb',t:'#ffffff'},night:{b:'#2b2350',p:'#15102e',t:'#7fd3f7'},royal:{b:'#6a3fc0',p:'#3a2280',t:'#f2b632'},fire:{b:'#e8463c',p:'#8a1f1a',t:'#f5c542'},ocean:{b:'#1fa6b8',p:'#145a7a',t:'#bff3ff'},gold:{b:'#f2b632',p:'#a0701a',t:'#fff3c4'},camo:{b:'#6b7a3a',p:'#4a5a2a',t:'#3a3a20'},
 leaf:{b:'#7cc45a',p:'#3f7a2e',t:'#c89a5a'},sun:{b:'#f5c542',p:'#f08a2a'},snow:{b:'#ffffff',p:'#bcd8f7',t:'#7fb3f0'},frost:{b:'#9fe3ff',p:'#3a8ac0',t:'#ffffff'},desert:{b:'#e9c46a',p:'#c8873e',t:'#9c642a'},dune:{b:'#f4ecd8',p:'#d9a55a',t:'#c9562c'},lava:{b:'#ff7a1a',p:'#3b2c2c',t:'#f5c542'},ember:{b:'#a02a2a',p:'#3a1010',t:'#f08a2a'},obsidian:{b:'#2a1e2e',p:'#120a18',t:'#ff7a1a'},cloud:{b:'#ffffff',p:'#dccff5',t:'#f2b632'},galaxy:{b:'#3a2a80',p:'#1a1040',t:'#f29ccf'}};
const ACC={acc_none:{},acc_glasses:{t:'glasses',c:INK,d:'#bfe9ff'},acc_shades:{t:'glasses',c:INK,d:'#3a3a4a'},acc_gshades:{t:'glasses',c:'#c9921f',d:'#f5c542'},acc_goggles:{t:'goggles'},acc_headphones:{t:'phones',c:'#e8464f'},acc_earmuff:{t:'phones',c:'#ff9ac2'},
 acc_scarf:{t:'scarf',c:'#e8464f'},acc_cape:{t:'cape',c:'#d63a3a',d:'#a82424'},acc_capeb:{t:'cape',c:'#3a6fd8',d:'#24448a'},acc_capeg:{t:'cape',c:'#f2b632',d:'#c9921f'},acc_helmet:{t:'helmet',c:'#b8c2d2',d:'#d63a3a'},acc_firehelm:{t:'helmet',c:'#c0392b',d:'#f5c542'},
 acc_mask:{t:'mask',c:'#3a6fd8'},acc_flowers:{t:'flowers'},acc_cap:{t:'cap',c:'#d63a3a',d:'#a82424'},acc_sunhat:{t:'sunhat'},acc_crownleaf:{t:'crown',c:'#3f9e3a',d:'#8ee05a'},acc_crown:{t:'crown',c:'#f2b632',d:'#e8463c'},acc_wings:{t:'wings'}};
const WPN={wpn_none:{},wpn_wood:{t:'sword',c:'#c89a5a',d:'#6e4a2a'},wpn_iron:{t:'sword',c:'#d3d9e3',d:'#8a93a6'},wpn_diamond:{t:'sword',c:'#7fe8ff',d:'#f2b632'},wpn_firesword:{t:'sword',c:'#ff7a1a',d:'#f5c542'},wpn_scimitar:{t:'scim',c:'#e6eaf2',d:'#f2b632'},wpn_spear:{t:'spear',c:'#c3cad6'},wpn_icespear:{t:'spear',c:'#7fe8ff'},wpn_axe:{t:'axe',c:'#c3cad6'},wpn_hammer:{t:'hammer',c:'#8f97a6'},wpn_lavahammer:{t:'hammer',c:'#ff7a1a'},wpn_bow:{t:'bow',c:'#a0602a'},wpn_frostbow:{t:'bow',c:'#5ab4f0'},wpn_staff:{t:'staff',c:'#b06cf0'},wpn_lightning:{t:'zap',c:'#f5e08a'},wpn_scepter:{t:'scepter',c:'#f2b632',d:'#e8464f'},wpn_boomerang:{t:'boom',c:'#e8464f'},wpn_star:{t:'star',c:'#d3d9e3'}};

const LEG={b:{stand:["....ppp.ppp.","....pp...pp.","...kkk..kkk.","...kkk..kkk."],run:[["....pppppp..","...pp....pp.","..kk......pp","..k......kkk"],["....ppppp...","....pp.pp...","....pp.kkk..","...kkk......"],["....pppppp..","...pp....pp.","..pp......kk","..kkk......k"],["....ppppp...","....pp.pp...","...kkk.pp...","......kkk..."]],jump:["....pppppp..","...pp...pp..","...kk...kk..","............"],fall:["....ppp.ppp.","...pp....pp.","..kkk....kkk","............"]},
 g:{stand:["....pp...pp.","...kkk..kkk.","...kkk..kkk."],run:[["...pp....pp.","..kk.....kkk","..k........."],["....pp.pp...","....pp.kkk..","...kkk......"],["...pp....pp.","..kkk.....kk","...........k"],["....pp.pp...","...kkk.pp...","......kkk..."]],jump:["...pp...pp..","...kk...kk..","............"],fall:["...pp....pp.","..kkk....kkk","............"]}};
function drawHero(ctx,x,y,s,look,frame,flip,pose){
  const C=CHARS[look.char]||CHARS.adv,pal=Object.assign({},C.pal),girl=C.rows===GIRL;
  const it=ITEM_BY_ID[look.skin],sk=it&&SKINS[it.sk];if(sk){pal.b=sk.b;pal.p=sk.p}
  const tool=look.tool||'tool_none';if(tool==='tool_boots')pal.k='#f08a2a';if(tool==='tool_goldboots')pal.k='#f2b632';
  const rows=C.rows.slice();let yo=0;
  if(pose){const L=LEG[girl?'g':'b'],st=girl?13:12,lg=pose.p==='run'?L.run[pose.f%4]:pose.p==='jump'?L.jump:pose.p==='fall'?L.fall:L.stand;rows.splice(st,lg.length,...lg);if(pose.p==='run'&&pose.f%2)yo=-1;if(pose.p==='jump')yo=-1;
    if(pose.p==='run'){const sw=pose.f%4;rows[8]=rows[8].slice(0,10)+(sw===0?'.':'s')+rows[8].slice(11);rows[9]=rows[9].slice(0,10)+(sw===2?'.':'s')+rows[9].slice(11);if(sw===0)rows[7]=rows[7].slice(0,11)+'s';if(sw===2)rows[10]=rows[10].slice(0,10)+'s'+rows[10].slice(11)}
    if(pose.p==='fall'){rows[7]=rows[7].slice(0,11)+'s'}
    if(pose.blink)rows[4]=rows[4].replace(/e/g,'s')}
  else if(frame%2)rows.splice(12,4,...(girl?RUN_G:RUN_B));
  const ops=[],P=(i,j,w,h,c)=>ops.push([i,j,w,h,c]);
  const A=ACC[look.acc]||{},W=WPN[look.weapon]||{};
  if(A.t==='cape'){P(0,6,3,8,A.c);P(0,14,2,1,A.d)}
  if(A.t==='wings'){P(-2,5,3,3,'#ffffff');P(-3,4,2,3,'#ffffff');P(-1,8,2,1,'#dfe6f2')}
  if(C.x==='cloak'){P(0,6,3,8,'#7a4a24');P(0,14,2,1,'#5a3418')}
  rows.forEach((r,j)=>{for(let i=0;i<12;i++){const ch=r[i];if(ch!=='.')P(i,j,1,1,pal[ch])}});
  if(sk&&sk.t)P(5,10,6,1,sk.t);
  switch(C.x){
    case 'band':P(2,2,9,1,'#d63a3a');P(0,2,2,1,'#d63a3a');P(0,3,1,1,'#d63a3a');break;
    case 'antenna':P(6,-2,1,2,'#9aa3b5');P(5,-3,3,1,'#ff5a5a');break;
    case 'hood':P(2,2,1,4,'#2f6b3a');P(4,0,4,1,'#3f8a4a');break;
    case 'sailor':P(3,-1,7,2,'#ffffff');P(3,0,7,1,'#1f6fd0');P(5,7,5,1,'#1f6fd0');break;
    case 'wizhat':P(2,0,10,1,'#5b3fb0');P(3,-2,8,2,'#5b3fb0');P(4,-4,6,2,'#5b3fb0');P(5,-6,4,2,'#5b3fb0');P(6,-7,2,1,'#5b3fb0');P(6,-3,1,1,'#f2b632');P(8,-5,1,1,'#f2b632');break;
    case 'visor':P(5,1,6,1,'#8a93a6');P(2,3,1,2,'#c0c8d6');break;
    case 'astro':P(1,-1,11,1,'#e6eaf2');P(1,0,1,7,'#e6eaf2');P(11,0,1,7,'#e6eaf2');P(10,2,1,1,'#bfe9ff');P(4,7,2,1,'#e8464f');break;
    case 'agal':P(3,1,7,1,'#1d1633');P(1,4,1,3,'#ffffff');P(2,6,1,1,'#ffffff');break;
    case 'icecrown':P(3,-2,1,2,'#7fe8ff');P(6,-3,1,3,'#7fe8ff');P(9,-2,1,2,'#7fe8ff');P(3,0,7,1,'#bfe9ff');break;
    case 'flame':P(4,-2,1,2,'#f08a2a');P(6,-3,2,3,'#f5c542');P(9,-2,1,2,'#f08a2a');break;
    case 'sparkle':P(3,-1,1,1,'#ffd36b');P(6,-2,1,2,'#ffd36b');P(9,-1,1,1,'#ffd36b');break;
    case 'goggles':P(4,1,6,1,'#5ab4f0');P(5,1,1,1,'#bfe9ff');P(8,1,1,1,'#bfe9ff');break;
    case 'beret':P(4,-1,6,2,'#c0392b');P(9,-2,1,1,'#c0392b');break;
    case 'cross':P(8,8,1,3,'#e8464f');P(7,9,3,1,'#e8464f');break;
    case 'tiara':P(4,0,6,1,'#f2b632');P(6,-1,2,1,'#f2b632');P(6,-1,1,1,'#e8464f');break;
    case 'goldtrim':P(2,6,8,1,'#f2b632');P(4,12,7,1,'#f2b632');break;
  }
  switch(A.t){
    case 'glasses':P(6,4,5,1,A.c);P(7,4,1,1,A.d);P(9,4,1,1,A.d);break;
    case 'goggles':P(5,3,7,2,'#2a2a3a');P(6,3,2,2,'#9fe3ff');P(9,3,2,2,'#9fe3ff');break;
    case 'phones':P(3,-1,7,1,'#3a3a4a');P(2,0,1,2,'#3a3a4a');P(2,2,2,3,A.c);break;
    case 'scarf':P(4,6,7,2,A.c);P(3,7,2,4,A.c);break;
    case 'helmet':P(3,-1,7,1,A.c);P(2,0,9,3,A.c);P(6,-3,2,2,A.d);P(2,3,1,2,A.c);break;
    case 'mask':P(5,4,7,1,A.c);P(7,4,1,1,'#ffffff');P(9,4,1,1,'#ffffff');break;
    case 'flowers':P(3,0,7,1,'#3f9e3a');P(3,-1,1,1,'#ff9ac2');P(5,-1,1,1,'#f5c542');P(7,-1,1,1,'#ff9ac2');P(9,-1,1,1,'#7fd3f7');break;
    case 'cap':P(3,0,7,2,A.c);P(7,2,5,1,A.d);break;
    case 'sunhat':P(1,1,11,1,'#e9c46a');P(3,-1,7,2,'#f6dc94');P(3,0,7,1,'#e8464f');break;
    case 'crown':P(3,-2,7,2,A.c);P(3,-3,1,1,A.c);P(6,-3,1,1,A.c);P(9,-3,1,1,A.c);P(6,-2,1,1,A.d);break;
  }
  if(tool==='tool_shield'){P(0,7,3,5,'#8f97a6');P(1,8,1,3,'#f2b632')}
  if(tool==='tool_lantern'){P(9,11,2,3,'#f5c542');P(9,11,2,1,'#5a4a7a')}
  if(tool==='tool_potion')P(4,11,1,2,'#e8464f');
  if(tool==='tool_feather')P(9,-2,1,3,'#ffffff');
  const c=W.c,d=W.d;
  if(pose&&pose.atk&&W.t){P(10,8,2,1,pal.s);switch(W.t){
    case 'sword':case 'scim':P(12,8,8,1,c);P(13,7,6,1,mix(c,'#ffffff',.4));P(12,7,1,3,d);break;
    case 'spear':P(10,8,12,1,'#8a5a2a');P(22,7,3,3,c);P(25,8,1,1,c);break;
    case 'axe':case 'hammer':P(11,8,6,1,'#8a5a2a');P(16,5,3,6,c);break;
    case 'bow':P(13,3,1,11,c);P(12,2,1,1,c);P(12,14,1,1,c);P(12,4,1,9,'#eeeeee');break;
    default:P(12,7,2,3,'#8a5a2a');P(13,5,3,3,c);break}}
  else switch(W.t){
    case 'sword':P(11,0,1,8,c);P(10,8,3,1,d);P(11,9,1,2,'#6e4a2a');break;
    case 'scim':P(11,3,1,5,c);P(12,1,1,3,c);P(13,0,1,2,c);P(10,8,3,1,d);P(11,9,1,2,'#6e4a2a');break;
    case 'spear':P(11,-3,1,14,'#8a5a2a');P(10,-5,3,2,c);P(11,-6,1,1,c);break;
    case 'axe':P(11,1,1,10,'#8a5a2a');P(12,1,2,4,c);P(14,0,1,6,c);break;
    case 'hammer':P(11,2,1,9,'#8a5a2a');P(9,0,5,3,c);break;
    case 'bow':P(12,2,1,1,c);P(13,3,1,5,c);P(12,8,1,1,c);P(11,3,1,5,'#eeeeee');break;
    case 'staff':P(11,-1,1,14,'#8a5a2a');P(10,-3,3,2,c);P(11,-4,1,1,'#ffffff');break;
    case 'zap':P(11,-1,1,14,'#5a4a7a');P(11,-4,2,1,c);P(12,-3,1,1,c);P(10,-2,2,1,c);break;
    case 'scepter':P(11,0,1,12,c);P(10,-2,3,2,c);P(11,-2,1,1,d);break;
    case 'boom':P(11,5,1,4,c);P(11,5,4,1,c);break;
    case 'star':P(12,5,1,3,c);P(11,6,3,1,c);break;
  }
  const X=(i,w)=>flip?x+(12-i-w)*s:x+i*s;y+=yo*s;
  ctx.fillStyle=INK;ops.forEach(o=>ctx.fillRect(X(o[0],o[2])-s,y+o[1]*s-s,(o[2]+2)*s,(o[3]+2)*s));
  ops.forEach(o=>{ctx.fillStyle=o[4];ctx.fillRect(X(o[0],o[2]),y+o[1]*s,o[2]*s,o[3]*s)});
  ctx.fillStyle='rgba(255,255,255,.18)';ctx.fillRect(X(3,6),y+7*s,6*s,s);
}
function heroCanvasOld(cv,look,scale){
  scale=scale||2;cv.width=20*scale;cv.height=26*scale;
  const x=cv.getContext('2d');x.imageSmoothingEnabled=false;x.clearRect(0,0,cv.width,cv.height);
  drawHero(x,4*scale,8*scale,scale,look,0,false);
}

/* ================= GAME DATA ================= */
const WORLDS=[
 {name:'واحة البدايات',tag:'مبتدئ',cost:0,desc:'مروج خضراء وينابيع وشلالات: تعلّم الحركة وجمع العملات وبناء أول قرية وأول جسر.',sky:['#7fb0ee','#93c0f2','#acd0f5','#c9e2fa'],cloud:'#ffffff',grass:'#5fbf3f',grassL:'#8ee05a',dirt:'#a06e3e',dirtD:'#74502c',stone:'#8a8f9c',water:'#5ab4f0',waterL:'#a9dcfb',roof:'#3f5fd6',castle:'#ddd5c6',tree:'round',leaf:'#3f9e3a',leafL:'#6ccf4c',leafD:'#2b7a2e',reward:'acc_cap',enemy:'#7ad04c',node:'#7ed870'},
 {name:'قرية التعاون',tag:'متوسط',cost:450,desc:'قرى جبلية باردة: ساعد السكان واجمع الأخشاب والحجارة وابنِ المرافق العامة.',sky:['#8fb3d9','#a6c4e4','#c0d7ee','#dbe9f6'],cloud:'#f4f8ff',grass:'#e8f2ff',grassL:'#ffffff',dirt:'#7c8fb0',dirtD:'#5a6a8a',stone:'#9aa7bf',water:'#8fd0f5',waterL:'#d6f1ff',roof:'#2f5aa8',castle:'#e6edf6',tree:'pine',leaf:'#2f6f5a',leafL:'#e8f2ff',leafD:'#1f4f40',reward:'skin_ice',enemy:'#9ad8ff',node:'#7ea6e8'},
 {name:'غابة الحكماء',tag:'متقدم',cost:550,desc:'نخيل وأطلال حكماء قدماء: ابحث عن الكنوز وتعلّم الصبر والأمانة وحسن التصرف.',sky:['#f0a860','#f4bf7f','#f8d6a3','#fbe7c6'],cloud:'#fff4e2',grass:'#e9c46a',grassL:'#f6dc94',dirt:'#c8873e',dirtD:'#9c642a',stone:'#d9a55a',water:'#3fc1c9',waterL:'#9cebef',roof:'#c9562c',castle:'#efd9a8',tree:'palm',leaf:'#4f9a3a',leafL:'#7cc45a',leafD:'#3a7a2a',reward:'wpn_staff',enemy:'#d97a2a',node:'#c79bf0'},
 {name:'ساحل الفرسان',tag:'خبير',cost:600,desc:'سواحل تحت سماء نارية وجبل بركاني: ابنِ السفن والمرافئ وافتح طرقًا جديدة بالتخطيط والتعاون.',sky:['#3a1f3d','#552a40','#763442','#9c443e'],cloud:'#6e4a5a',grass:'#5a4a4a',grassL:'#7d6767',dirt:'#3b2c2c',dirtD:'#2a1e1e',stone:'#5e4c4c',water:'#ff7a1a',waterL:'#ffc24a',roof:'#b8322c',castle:'#6e5e5e',tree:'dead',leaf:'#4a3020',leafL:'#6a4a30',leafD:'#2a1a10',reward:'acc_crown',enemy:'#ff5a2a',node:'#f5c542'},
 {name:'مملكة النور',tag:'بطل',cost:700,desc:'جزر النور فوق السحاب: اجمع الموارد النادرة وطوّر المملكة الكبرى وافتح المنطقة النهائية.',sky:['#a98ee0','#bfa6ec','#d6c3f4','#ebdffa'],cloud:'#ffffff',grass:'#ffffff',grassL:'#ffffff',dirt:'#dccff5',dirtD:'#c3b2ea',stone:'#cbbcef',water:'#ffe08a',waterL:'#fff3c4',roof:'#f2b632',castle:'#fff6e0',tree:'round',leaf:'#f29ccf',leafL:'#ffc6e6',leafD:'#d877b0',reward:'char_star',enemy:'#b79be8',node:'#a9e3fb'},
];
const ITEMS=[];const add=(cat,id,name,price,o)=>ITEMS.push(Object.assign({cat,id,name,price},o||{}));
[['adv','المغامر',0],['ninja','النينجا',80],['robot','الروبوت',140],['hunter','الصياد',190],['sailor','البحّار',240],['wizard','الساحر الصغير',300],['knight','المحارب المدرّع',360],['astrob','رائد الفضاء',420],['iceb','حارس الجليد',null],['desertb','فارس الكثبان',null],['fireb','بطل البركان',null],['starb','بطل السحاب',null]].forEach(([k,n,p])=>add('char','char_'+k,n,p,{g:'m',look:{char:k}}));
[['advg','المغامرة',0],['explorer','المستكشفة',80],['scientist','العالِمة الصغيرة',140],['painter','الرسّامة',190],['doctor','الطبيبة',240],['traveler','الرحّالة',300],['princess','الأميرة الشجاعة',360],['astro','رائدة الفضاء',420],['iceg','حارسة الجليد',null],['desertg','أميرة الكثبان',null],['fireg','بطلة البركان',null],['star','بطلة السحاب',null]].forEach(([k,n,p])=>add('char','char_'+k,n,p,{g:'f',look:{char:k}}));
[['skin_base','الملابس الأصلية',0,''],['skin_green','زي الغابة',30,'green'],['skin_sky','زي السماء',40,'sky'],['skin_sport','الزي الرياضي',50,'sport'],['skin_night','زي الليل',70,'night'],['skin_royal','الزي الملكي',90,'royal'],['skin_fire','زي النار',110,'fire'],['skin_ocean','زي المحيط',130,'ocean'],['skin_gold','الزي الذهبي',160,'gold'],['skin_camo','زي المستكشف',180,'camo'],
 ['skin_leaf','زي أوراق الشجر',null,'leaf'],['skin_sun','زي الشمس',null,'sun'],['skin_snow','زي الثلج',null,'snow'],['skin_frost','زي الصقيع',null,'frost'],['skin_desert','زي الصحراء',null,'desert'],['skin_dune','زي الكثبان',null,'dune'],['skin_lava','زي الحمم',null,'lava'],['skin_ember','زي الجمر',null,'ember'],['skin_obsidian','زي الصخر البركاني',null,'obsidian'],['skin_cloud','زي الغيوم',null,'cloud'],['skin_galaxy','زي المجرّة',null,'galaxy']].forEach(([id,n,p,k])=>add('skin',id,n,p,{sk:k}));
[['acc_none','بلا إكسسوار',0],['acc_glasses','نظارة طبية',40],['acc_flowers','تاج الزهور',60,'f'],['acc_mask','قناع البطل',70],['acc_headphones','سماعات',80],['acc_shades','نظارة شمسية',90],['acc_cape','عباءة حمراء',100],['acc_capeb','عباءة زرقاء',130],['acc_helmet','خوذة المحارب',160],
 ['acc_cap','قبعة المستكشف',null],['acc_scarf','وشاح الغابة',null],['acc_crownleaf','تاج الأوراق',null],['acc_capeg','العباءة الذهبية',null],['acc_earmuff','غطاء الأذن الدافئ',null],['acc_goggles','نظارة الثلج',null],['acc_sunhat','قبعة الشمس',null],['acc_gshades','النظارة الذهبية',null],['acc_firehelm','خوذة اللهب',null],['acc_wings','جناحا الريح',null],['acc_crown','التاج الملكي',null]].forEach(([id,n,p,g])=>add('acc',id,n,p,g?{g}:{}));
[['wpn_none','بلا سلاح',0,[]],['wpn_wood','سيف الريح',40,['slayG']],['wpn_bow','قوس الشمس',90,['double']],['wpn_iron','سيف العاصفة الرعدية',120,['slayG','bonus']],['wpn_spear','رمح الإعصار',150,['slayA']],['wpn_boomerang','بومرانغ الزوبعة',170,['slayA','double']],['wpn_axe','فأس الزلزال',200,['slayG','heart']],['wpn_hammer','مطرقة الصخر',230,['heart','bonus']],['wpn_diamond','سيف الماس البلّوري',300,['slayAll']],
 ['wpn_star','نجمة المجرّة',null,['slayA']],['wpn_icespear','رمح الجليد',null,['slayAll']],['wpn_frostbow','قوس الصقيع',null,['double','slayA']],['wpn_scimitar','سيف العاصفة الرملية',null,['slayG','bonus']],['wpn_staff','عصا السحر',null,['magnet']],['wpn_firesword','سيف اللهب',null,['slayAll','bonus']],['wpn_lavahammer','مطرقة الحمم',null,['heart','slayAll']],['wpn_lightning','عصا البرق',null,['slayAll','magnet']],['wpn_scepter','صولجان السماء',null,['slayAll','double','magnet']]].forEach(([id,n,p,pk])=>add('wpn',id,n,p,{perks:pk}));
[['tool_none','بلا أداة',0,[],'heartE'],['tool_lantern','مصباح الليل',60,['light'],'lantern'],['tool_clock','ساعة الإبطاء',120,['slow'],'clock'],['tool_magnet','المغناطيس',150,['magnet'],'magnet'],['tool_boots','حذاء القفز الثلاثي',220,['triple'],'boots'],
 ['tool_shield','درع الحماية',null,['shield'],'shield'],['tool_map','خريطة الكنز',null,['bonus'],'scroll'],['tool_potion','جرعة القلب',null,['heart'],'potion'],['tool_feather','ريشة الخفة',null,['feather'],'feather'],['tool_goldboots','الحذاء الذهبي',null,['triple','feather'],'boots']].forEach(([id,n,p,pk,icn])=>add('tool',id,n,p,{perks:pk,icon:icn}));
const ITEM_BY_ID={};ITEMS.forEach(i=>ITEM_BY_ID[i.id]=i);
const PERK_TEXT={slayG:'يهزم الوحوش الأرضية',slayA:'يهزم الوحوش الطائرة',slayAll:'يهزم كل الوحوش',double:'يضاعف العملات',heart:'قلب إضافي',magnet:'يجذب العملات',bonus:'+10 جواهر لكل مرحلة',light:'رؤية أوسع في الليل',slow:'يبطئ سرعة الجري',triple:'قفزة ثلاثية',shield:'يصد أول ضربة',feather:'قفز أعلى وهبوط أخف'};
ITEMS.forEach(i=>{if(i.perks&&i.perks.length)i.pk=i.perks.map(p=>PERK_TEXT[p]).join(' · ')});
const REWARDS=['acc_cap','skin_leaf','wpn_star','tool_shield','acc_scarf','skin_sun','acc_crownleaf','acc_capeg',
 'skin_snow','acc_earmuff','wpn_icespear','tool_map','skin_frost','acc_goggles','wpn_frostbow','CHAR_ice',
 'skin_desert','acc_sunhat','wpn_scimitar','tool_potion','skin_dune','acc_gshades','wpn_staff','CHAR_desert',
 'skin_lava','acc_firehelm','wpn_firesword','tool_feather','skin_ember','wpn_lavahammer','skin_obsidian','CHAR_fire',
 'skin_cloud','acc_wings','wpn_lightning','tool_goldboots','skin_galaxy','acc_crown','wpn_scepter','CHAR_star'];
const CHAR_R={ice:['char_iceb','char_iceg'],desert:['char_desertb','char_desertg'],fire:['char_fireb','char_fireg'],star:['char_starb','char_star']};
function rewardFor(si){const r=STAGES[si]&&STAGES[si].rw;if(!r)return null;if(r&&r.startsWith('CHAR_'))return CHAR_R[r.slice(5)][S.gender==='f'?1:0];return r}
function rewardIdx(id){for(let i=0;i<STAGES.length;i++){const r=STAGES[i].rw;if(r&&(r===id||(r.startsWith('CHAR_')&&CHAR_R[r.slice(5)].includes(id))))return i}return -1}
const CAT_NAMES={char:'الشخصيات',skin:'الملابس',acc:'الإكسسوارات',wpn:'الأسلحة',tool:'الأدوات'};
const CAT_SLOT={char:'char',skin:'skin',acc:'acc',wpn:'weapon',tool:'tool'};

function tasksFor(g){const m=g!=='f';return [
 ['04:30',m?'صلاة الفجر في المسجد مع الوالد':'صلاة الفجر في وقتها','pray',20],['04:45','أذكار الصباح','quran',10],
 ['06:00','الاستيقاظ في الموعد وتقبيل رأس الوالدين','sun',10],['06:10','ترتيب السرير','bed',10],['06:15','السواك وتنظيف الأسنان','tooth',10],
 ['06:30','الفطور مع التسمية والحمد','food',10],['06:45',m?'تجهيز الحقيبة والزي المدرسي':'تجهيز الحقيبة والزي المدرسي وتسريح الشعر','bag',10],
 ...(m?[]:[['07:00','الحرص على الحجاب واللباس المحتشم عند الخروج','star',10]]),
 ['11:40',m?'صلاة الظهر جماعة':'صلاة الظهر في وقتها','pray',15],['14:00','ترتيب الملابس والحذاء بعد المدرسة','broom',10],
 ['14:50',m?'صلاة العصر جماعة':'صلاة العصر في وقتها','pray',15],['15:15','حل الواجبات المدرسية','pencil',20],['16:30','تلاوة وحفظ صفحة من القرآن الكريم','quran',20],
 m?['16:50','نشاط رياضي ٢٠ دقيقة (جري أو كرة)','ball',10]:['16:50','تعلّم مهارة منزلية مع الوالدة (طبخ أو ترتيب)','food',10],
 ['17:15',m?'صلاة المغرب في المسجد':'صلاة المغرب في وقتها','pray',15],['17:35','أذكار المساء','quran',10],
 ['18:00',m?'مساعدة الوالد في أعمال البيت والمشتريات':'مساعدة الوالدة في ترتيب البيت','heart',15],
 ['18:35',m?'صلاة العشاء في المسجد':'صلاة العشاء في وقتها','pray',15],['19:00','القراءة المفيدة ١٥ دقيقة','book',10],
 ['20:00',m?'ترتيب الغرفة':'ترتيب الغرفة وخزانة الملابس','broom',10],['20:30','الوضوء وأذكار النوم','water',10],['21:00','النوم مبكرًا في الموعد','moon',15]
]}
function genTasks(g,id){const t=tasksFor(g).map(x=>({id:'t'+(id++),time:x[0],name:x[1],icon:x[2],pts:x[3],type:'routine',status:'todo',def:true}));
  t.push({id:'t'+(id++),time:'18:15',name:g==='f'?'صلة الرحم: اتصلي بجدتك أو جدك واسألي عنهما':'صلة الرحم: اتصل بجدك أو جدتك واسأل عنهما',icon:'heart',pts:30,type:'special',status:'todo',def:true});return {t,id}}
const FRIENDS_M=[
 {name:'عبدالله',lvl:5,world:3,week:930,look:{char:'knight',skin:'skin_gold',acc:'acc_helmet',weapon:'wpn_hammer'}},
 {name:'يوسف',lvl:4,world:2,week:820,look:{char:'ninja',skin:'skin_base',acc:'acc_none',weapon:'wpn_wood'}},
 {name:'حمد',lvl:3,world:1,week:610,look:{char:'robot',skin:'skin_fire',acc:'acc_none',weapon:'wpn_bow'}},
 {name:'علي',lvl:2,world:0,week:380,look:{char:'adv',skin:'skin_green',acc:'acc_cap',weapon:'wpn_none'}},
];
const FRIENDS_F=[
 {name:'مريم',lvl:5,world:3,week:930,look:{char:'princess',skin:'skin_base',acc:'acc_crown',weapon:'wpn_staff'}},
 {name:'سارة',lvl:4,world:2,week:820,look:{char:'explorer',skin:'skin_base',acc:'acc_glasses',weapon:'wpn_bow'}},
 {name:'فاطمة',lvl:3,world:1,week:610,look:{char:'astro',skin:'skin_base',acc:'acc_none',weapon:'wpn_none'}},
 {name:'نورة',lvl:2,world:0,week:380,look:{char:'advg',skin:'skin_green',acc:'acc_cape',weapon:'wpn_wood'}},
];

/* ================= STATE ================= */
const NST=10;
const KEY='shed-heelak-v5';
function today(d){d=d||new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function daysBetween(a,b){return Math.round((new Date(b+'T12:00')-new Date(a+'T12:00'))/864e5)}
function freshState(sample,g){
  const gt=genTasks(g,0),tasks=gt.t,id=gt.id,ch=g==='f'?'advg':'adv';
  const s={v:1,gender:g||null,name:'',pin:'1234',auto:false,day:today(),points:0,xp:0,gems:0,streak:0,log:{},tasks,nextId:id,
    unlocked:[true,false,false,false,false],stages:[0,0,0,0,0],cleared:0,stars:{},owned:['char_adv','char_advg','skin_base','acc_none','wpn_none','tool_none'],
    look:{char:ch,skin:'skin_base',acc:'acc_none',weapon:'wpn_none',tool:'tool_none'},bonusDay:'',muted:false,sample:!!sample,code:'SH-'+Math.random().toString(36).slice(2,6).toUpperCase()};
  if(sample){
    s.points=165;s.xp=680;s.gems=45;s.streak=4;s.cleared=2;s.stars={0:3,1:2};
    s.owned.push('wpn_wood','skin_green');s.look={char:ch,skin:'skin_base',acc:'acc_none',weapon:'wpn_wood',tool:'tool_none'};
    let p=0; tasks.forEach((t,i)=>{if(i<6){t.status='done';p+=t.pts}else if(i===6){t.status='pending'}});
    s.log[today()]=p; const d=new Date(); for(let k=1;k<6;k++){d.setDate(d.getDate()-1);s.log[today(d)]=140+((k*37)%60)}
  }
  return s;
}
let S;
function load(){try{const r=localStorage.getItem(KEY);if(r){S=JSON.parse(r);return}}catch(e){} S=freshState(true)}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
load();

function rollover(){
  const t=today(); if(S.day===t) return;
  const act=S.tasks.filter(x=>x.type==='routine'); const done=act.filter(x=>x.status==='done').length;
  const ok=act.length&&done/act.length>=0.7;
  S.streak=(daysBetween(S.day,t)===1&&ok)?S.streak+1:0;
  S.tasks=S.tasks.filter(x=>!(x.type==='special'&&x.status==='done'));
  S.tasks.forEach(x=>{x.status='todo'}); S.day=t; save();
}
rollover();

const gx=(m,f)=>S.gender==='f'?f:m;
const heroName=()=>S.name||gx('البطل','البطلة');
const level=()=>Math.floor(S.xp/300)+1;
const todayPts=()=>S.log[S.day]||0;
const weekPts=()=>{let s=0;const d=new Date();for(let k=0;k<7;k++){s+=S.log[today(d)]||0;d.setDate(d.getDate()-1)}return s};
const maxWorld=()=>S.unlocked.lastIndexOf(true);
const sortedTasks0=()=>S.tasks.slice().sort((a,b)=>a.time.localeCompare(b.time));
function nowHM(){const d=new Date();return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')}
function nextTask(){const ts=sortedTasks().filter(t=>t.status==='todo');const n=nowHM();const late=ts.filter(t=>t.time<=n);return late[late.length-1]||ts[0]||null}
function possiblePts(){return S.tasks.reduce((a,t)=>a+t.pts,0)}

/* ================= AUDIO ================= */
let AC=null,master,musicBus,sfxBus,noiseBuf,curTrack=null,curPat=null,step=0,nextT=0;
const TRACKS={
 title:{bpm:140,root:57,sc:[0,3,5,7,10],prog:[0,8,3,10],seed:7},
 home:{bpm:116,root:60,sc:[0,2,4,7,9],prog:[0,9,5,7],seed:11},
 tasks:{bpm:100,root:62,sc:[0,2,4,7,9],prog:[0,5,7,5],seed:5},
 worlds:{bpm:124,root:59,sc:[0,2,4,7,9],prog:[0,7,9,5],seed:23},
 shop:{bpm:132,root:64,sc:[0,2,4,5,7,9,11],prog:[0,5,9,7],seed:31},
 friends:{bpm:110,root:60,sc:[0,2,4,7,9],prog:[0,4,5,7],seed:41},
 w0:{bpm:138,root:60,sc:[0,2,4,7,9],prog:[0,5,7,5],seed:2},
 w1:{bpm:122,root:62,sc:[0,2,3,7,9],prog:[0,10,8,7],seed:13},
 w2:{bpm:128,root:57,sc:[0,1,4,5,7,8,10],prog:[0,1,0,10],seed:17},
 w3:{bpm:152,root:52,sc:[0,2,3,5,7,8,10],prog:[0,8,10,7],seed:29},
 w4:{bpm:112,root:65,sc:[0,2,4,6,7,9,11],prog:[0,2,7,9],seed:37},
};
function rng(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function buildPat(tr){
  const r=rng(tr.seed),mel=[];let idx=4;
  for(let s=0;s<64;s++){
    if((s%2===1&&r()<.55)||r()<.18){mel.push(null);continue}
    idx=Math.max(0,Math.min(tr.sc.length*2-1,idx+Math.floor(r()*5)-2));
    mel.push(tr.root+12+tr.sc[idx%tr.sc.length]+12*Math.floor(idx/tr.sc.length));
  }
  for(let s=0;s<16;s++)mel[32+s]=mel[s];
  return mel;
}
const mtof=m=>440*Math.pow(2,(m-69)/12);
function tone(f,t,d,type,v,bus){const o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(bus||sfxBus);o.start(t);o.stop(t+d+.03);return o}
function noise(t,d,v,bus){const s=AC.createBufferSource(),g=AC.createGain(),f=AC.createBiquadFilter();f.type='highpass';f.frequency.value=6000;s.buffer=noiseBuf;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);s.connect(f);f.connect(g);g.connect(bus);s.start(t);s.stop(t+d+.02)}
function initAudio(){
  if(AC){AC.resume&&AC.resume();return}
  try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return}
  master=AC.createGain();master.gain.value=S.muted?0:.9;master.connect(AC.destination);
  musicBus=AC.createGain();musicBus.gain.value=.55;musicBus.connect(master);
  sfxBus=AC.createGain();sfxBus.gain.value=(S&&S.opt)?S.opt.sfx:.8;if(S&&S.opt)musicBus.gain.value=S.opt.mus;sfxBus.connect(master);
  noiseBuf=AC.createBuffer(1,AC.sampleRate*.2,AC.sampleRate);const ch=noiseBuf.getChannelData(0);for(let i=0;i<ch.length;i++)ch[i]=Math.random()*2-1;
  setInterval(sched,25);
}
function playTrack(name){if(!AC||curTrack===name)return;curTrack=name;curPat=buildPat(TRACKS[name]);step=0;nextT=AC.currentTime+.08}
function sched(){
  if(!curTrack||!AC)return;const tr=TRACKS[curTrack],dt=60/(tr.bpm*.62)/4;
  while(nextT<AC.currentTime+.12){
    const s=step%64,bar=Math.floor(s/16)%4,ch=tr.prog[bar];
    if(s%8===0)tone(mtof(tr.root-12+ch),nextT,1.6,'sine',.12,musicBus);if(s%4===2)tone(mtof(tr.root+ch+7),nextT,.9,'triangle',.035,musicBus);
    if(s%16===8)tone(mtof(tr.root-12+ch+7),nextT,1.2,'sine',.07,musicBus);
    const m=curPat[s];if(m&&(s%2===0||Math.random()<.4))tone(mtof(m),nextT,.7,'triangle',.05,musicBus);
    
    
    nextT+=dt;step++;
  }
}
const SFX={
 coin(){if(!AC)return;const t=AC.currentTime;tone(988,t,.06,'square',.07);tone(1319,t+.06,.12,'square',.07)},
 jump(){if(!AC)return;const t=AC.currentTime;const o=tone(300,t,.16,'square',.06);o.frequency.exponentialRampToValueAtTime(760,t+.14)},
 hit(){if(!AC)return;const t=AC.currentTime;const o=tone(220,t,.25,'sawtooth',.09);o.frequency.exponentialRampToValueAtTime(60,t+.24)},
 done(){if(!AC)return;const t=AC.currentTime;[523,659,784,1047].forEach((f,i)=>tone(f,t+i*.08,.16,'square',.06))},
 win(){if(!AC)return;const t=AC.currentTime;[523,523,784,659,784,1047].forEach((f,i)=>tone(f,t+i*.11,.2,'square',.07))},
 buy(){if(!AC)return;const t=AC.currentTime;[880,1175,1568].forEach((f,i)=>tone(f,t+i*.06,.12,'triangle',.1))},
 click(){if(!AC)return;tone(660,AC.currentTime,.04,'square',.04)},
};

/* ================= SCENE ================= */
const px=(c,x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(x|0,y|0,w|0,h|0)};
function cloud(c,x,y,s,col){const w=Math.round(28*s),h=Math.round(9*s);px(c,x,y+h*.4,w,h*.6,col);px(c,x+w*.15,y+h*.15,w*.4,h*.6,col);px(c,x+w*.45,y,w*.35,h*.7,col)}
function island(c,th,x,y,w,h){
  px(c,x,y,w,2,th.grassL);px(c,x,y+2,w,3,th.grass);
  for(let r=0;r<h;r+=3){const inset=Math.floor(r*w/(2.4*h));px(c,x+inset,y+5+r,w-2*inset,3,(r/3)%2?th.dirtD:th.dirt)}
  for(let i=2;i<w-2;i+=5)px(c,x+i,y+5,1,2+(i%3),th.grass);
}
function ground(c,th,x,y,w,h){
  px(c,x,y,w,h,th.dirt);
  for(let j=7;j<h;j+=8){const off=(j/8)%2?6:0;for(let i=-off;i<w;i+=12){px(c,x+i,y+j,12,1,th.dirtD);px(c,x+i,y+j,1,8,th.dirtD);if((i+j)%3===0)px(c,x+i+3,y+j+3,4,3,th.stone)}}
  px(c,x,y,w,2,th.grassL);px(c,x,y+2,w,4,th.grass);
  for(let i=1;i<w;i+=4)px(c,x+i,y+6,2,1+((i*7)%3),th.grass);
}
function roof(c,cx,base,half,col){for(let r=0;r<=half*2;r++){const wd=Math.max(1,Math.round(r/2)*2);px(c,cx-wd/2,base-half*2+r,wd,1,col)}}
function castle(c,th,x,y){
  const col=th.castle,dk='#00000033';
  px(c,x,y+24,56,22,col);for(let i=0;i<56;i+=6)px(c,x+i,y+21,4,3,col);
  [[x+2,9,32],[x+21,14,44],[x+45,9,32]].forEach(([tx,tw,th2])=>{px(c,tx,y+46-th2,tw,th2,col);px(c,tx+tw-2,y+46-th2,2,th2,dk);roof(c,tx+tw/2,y+46-th2,Math.ceil(tw/2)+1,th.roof);px(c,tx+tw/2-1,y+46-th2+8,2,4,INK)});
  px(c,x+25,y+36,6,10,INK);px(c,x+10,y+30,3,4,INK);px(c,x+42,y+30,3,4,INK);
  for(let j=y+26;j<y+46;j+=5)for(let i=x+((j/5)%2?2:5);i<x+56;i+=8)px(c,i,j,3,1,dk);
}
function tree(c,th,x,base){
  const t=th.tree;
  if(t==='pine'){px(c,x+16,base-24,6,24,'#6e4a2a');for(let k=0;k<4;k++){const w=34-k*7,yy=base-24-k*12;px(c,x+19-w/2,yy-6,w,8,th.leaf);px(c,x+19-w/2+3,yy-8,w-6,3,th.leafL)}return}
  if(t==='palm'){for(let k=0;k<40;k++)px(c,x+14+Math.round(Math.sin(k/14)*5),base-k,5,1,k%6<3?'#9c642a':'#7a4a20');const tx=x+19,ty=base-41;[[-16,4],[-10,-4],[0,-6],[10,-4],[16,4]].forEach(([dx,dy])=>{for(let k=0;k<10;k++)px(c,tx+dx*k/10-2,ty+dy*k/10+(k*k)/20,5,3,k%2?th.leaf:th.leafL)});px(c,tx-3,ty,6,5,'#6e4a2a');return}
  if(t==='dead'){px(c,x+15,base-46,6,46,th.leaf);px(c,x+5,base-38,12,3,th.leaf);px(c,x+4,base-44,3,8,th.leaf);px(c,x+20,base-30,12,3,th.leaf);px(c,x+30,base-38,3,10,th.leaf);px(c,x+16,base-46,2,46,th.leafL);return}
  px(c,x+14,base-34,10,34,'#7a4a24');px(c,x+16,base-34,2,34,'#9a6232');px(c,x+10,base-4,18,4,'#7a4a24');
  [[19,-50,17],[6,-38,12],[33,-36,12],[19,-32,10]].forEach(([dx,dy,r])=>{const cx=x+dx,cy=base+dy;for(let j=-r;j<=r;j++)for(let i=-r;i<=r;i++){if(i*i+j*j>r*r)continue;const col=(j<-r/3&&i<r/4)?th.leafL:((j>r/3&&(i+j)%4===0)?th.leafD:th.leaf);px(c,cx+i,cy+j,1,1,col)}});
}
function chest(c,x,y){px(c,x-1,y-1,22,17,INK);px(c,x,y,20,15,'#9a5a24');px(c,x,y,20,5,'#b8742e');px(c,x,y+6,20,2,'#f5c542');px(c,x+8,y+5,4,6,'#f5c542');px(c,x+9,y+7,2,2,INK)}
function coin(c,x,y,t){const ph=Math.floor(t/120)%4,w=[8,6,2,6][ph];px(c,x-w/2-1,y-1,w+2,12,INK);px(c,x-w/2,y,w,10,'#f5c542');if(w>2)px(c,x-1,y+2,1,6,'#c9921f')}

/* ---------- layered painter ---------- */
const GW=320,GH=180,GROUND=150;
function mkc(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
const _RGBC={};let _rgbx=null;function rgb(h){h=String(h);if(h.startsWith('rgb')){const m=h.match(/[\d.]+/g)||[0,0,0];return m.slice(0,3).map(Number)}if(h[0]!=='#'){if(_RGBC[h])return _RGBC[h];if(!_rgbx)_rgbx=document.createElement('canvas').getContext('2d');_rgbx.fillStyle='#000';_rgbx.fillStyle=h;const f=_rgbx.fillStyle;return _RGBC[h]=f[0]==='#'?rgb(f):rgb(f.startsWith('rgb')?f:'#000')}h=h.replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');const n=parseInt(h.slice(0,6),16);return[n>>16&255,n>>8&255,n&255]}
function mix(a,b,t){const A=rgb(a),B=rgb(b);return'rgb('+A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')+')'}
const RB=[122,126,132,126,136];
function ridge(b,x){const T=Math.PI*2/640,PI=Math.PI;
  switch(b){
    case 0:return 22+12*Math.sin(2*T*x)+7*Math.sin(5*T*x+1)+3*Math.sin(11*T*x+2);
    case 1:return 14+56*Math.pow(1-Math.abs(Math.sin(PI*3*x/640)),2.2)+20*Math.pow(1-Math.abs(Math.sin(PI*7*x/640+.6)),3);
    case 2:return 16+10*Math.sin(2*T*x)+6*Math.sin(4*T*x+1.3)+3*Math.sin(9*T*x);
    case 3:{const d=Math.abs(((x+80)%320)-160);return 12+6*Math.sin(3*T*x)+Math.max(0,66*(1-d/80))}
    default:return 20+16*Math.abs(Math.sin(PI*4*x/640))+8*Math.abs(Math.sin(PI*9*x/640+1));
  }}
function circ(c,x,y,r,col){c.fillStyle=col;c.beginPath();c.arc(x,y,r,0,7);c.fill()}
function drawMid(m,th,b){
  const r=rng(b*99+5),base=144,dark=mix(th.leafD,th.sky[3],.32),lite=mix(th.leaf,th.sky[3],.3);
  const band=b===2?mix(th.dirt,th.sky[3],.35):b===4?'#ffffff':mix(th.grass,th.leafD,.55);
  for(let x=0;x<640;x++){const y=Math.round(base-4-5*Math.sin(Math.PI*2*3*x/640)-3*Math.sin(Math.PI*2*7*x/640));m.fillStyle=mix(band,th.sky[3],.2);m.fillRect(x,y,1,180-y)}
  const objs=[];for(let x=8;x<640;x+=34+Math.floor(r()*40))objs.push([x,r(),r()]);
  objs.forEach(([x0,a,bb])=>[x0,x0-640,x0+640].forEach(x=>{
    const y=base-2;
    if(b===0){m.fillStyle=mix('#6e4a2a',th.sky[3],.35);m.fillRect(x-2,y-20,4,20);const rr=11+a*8;circ(m,x,y-26-a*6,rr,dark);circ(m,x-9,y-18,rr*.7,dark);circ(m,x+9,y-18,rr*.7,dark);circ(m,x-3,y-30-a*6,rr*.55,lite)}
    else if(b===1){const h=26+a*22;for(let k=0;k<3;k++){const w=18-k*4+a*4,yy=y-k*h/3.4;m.fillStyle=dark;m.beginPath();m.moveTo(x-w,yy);m.lineTo(x+w,yy);m.lineTo(x,yy-h/2.2);m.fill();m.fillStyle='#ffffff';m.beginPath();m.moveTo(x-w*.35,yy-h/2.2+h*.14);m.lineTo(x+w*.35,yy-h/2.2+h*.14);m.lineTo(x,yy-h/2.2);m.fill()}}
    else if(b===2){if(a<.5){const w=34+bb*40,h=18+a*30;m.fillStyle=mix(th.dirtD,th.sky[3],.3);m.beginPath();m.moveTo(x-w/2,y);m.lineTo(x-w/2+6,y-h);m.lineTo(x+w/2-6,y-h);m.lineTo(x+w/2,y);m.fill();m.fillStyle=mix(th.dirt,th.sky[3],.3);m.fillRect(x-w/2+6,y-h,w-12,3)}
      else{m.strokeStyle=mix('#7a4a20',th.sky[3],.3);m.lineWidth=3;m.beginPath();m.moveTo(x,y);m.quadraticCurveTo(x+6,y-18,x+2,y-34);m.stroke();m.strokeStyle=dark;m.lineWidth=3;[[-14,4],[-8,-6],[8,-6],[14,4]].forEach(([dx,dy])=>{m.beginPath();m.moveTo(x+2,y-34);m.quadraticCurveTo(x+2+dx*.6,y-40+dy,x+2+dx,y-30+dy+6);m.stroke()})}}
    else if(b===3){m.fillStyle=mix('#2a1e1e',th.sky[3],.2);m.beginPath();m.moveTo(x-16-a*10,y);m.lineTo(x-6,y-14-a*20);m.lineTo(x+2,y-8-a*10);m.lineTo(x+10,y-18-bb*16);m.lineTo(x+18+a*8,y);m.fill();m.fillStyle='rgba(255,122,26,.55)';m.fillRect(x-14,y-2,32,2)}
    else{const rr=10+a*12;circ(m,x,y-rr,rr,'#ffffff');circ(m,x-rr*.8,y-rr*.6,rr*.7,'#f6eefe');circ(m,x+rr*.8,y-rr*.5,rr*.75,'#ffffff');circ(m,x,y-rr*1.6,rr*.6,mix('#ffffff',th.sky[1],.2))}
  }));
}
const LAY={};
function layers(th,b,key){
  if(LAY[key])return LAY[key];
  const sky=mkc(GW,GH),c=sky.getContext('2d');
  const bandH=[0,.3,.55,.8,1],bh2=Math.ceil(GH*.3);for(let i=0;i<4;i++){const y0=Math.round(bandH[i]*GH),y1=Math.round(bandH[i+1]*GH);const g2=c.createLinearGradient(0,y0,0,y1);g2.addColorStop(0,th.sky[i]);g2.addColorStop(1,th.sky[Math.min(3,i+1)]);c.fillStyle=g2;c.fillRect(0,y0,GW,y1-y0)}
  for(let y=0;y<GH;y++)for(let x=(y%2)*2;x<GW;x+=4)if(((x*13+y*7)&15)<2)px(c,x,y,1,1,'rgba(255,255,255,.04)');
  const sx=252,sy=36,glow=c.createRadialGradient(sx,sy,4,sx,sy,56);glow.addColorStop(0,th.night?'rgba(255,250,220,.4)':'rgba(255,240,180,.75)');glow.addColorStop(1,'rgba(255,240,180,0)');c.fillStyle=glow;c.fillRect(0,0,GW,GH);
  circ(c,sx,sy,th.night?9:12,th.night?'#fff6d0':th.dusk?'#ffd27a':'#fff6c4');if(th.night)circ(c,sx+5,sy-3,8,th.sky[0]);
  if(th.night)for(let k=0;k<40;k++){c.fillStyle=k%4?'rgba(255,246,196,.8)':'#ffffff';c.fillRect((k*53+11)%GW,(k*37+3)%95,1,1)}
  const far=mkc(640,GH),f=far.getContext('2d'),fc=mix(th.dirtD,th.sky[2],.55),fr=mix(th.grassL,th.sky[2],.45);
  for(let x=0;x<640;x++){const h=ridge(b,x),y=Math.round(RB[b]-h);f.fillStyle=fc;f.fillRect(x,y,1,GH-y);f.fillStyle=fr;f.fillRect(x,y,1,2);
    if(b===1&&h>46){f.fillStyle='#ffffff';f.fillRect(x,y,1,Math.round((h-46)*.7)+2)}
    if(b===3&&h>70){f.fillStyle='#ff7a1a';f.fillRect(x,y,1,3)}}
  const fg=f.createLinearGradient(0,80,0,GH);const s3=rgb(th.sky[3]);fg.addColorStop(0,`rgba(${s3},0)`);fg.addColorStop(1,`rgba(${s3},.85)`);f.fillStyle=fg;f.fillRect(0,0,640,GH);
  const mid=mkc(640,GH);drawMid(mid.getContext('2d'),th,b);
  const near=mkc(640,GH),n=near.getContext('2d'),nc=b===4?'#e8dcf8':mix(th.leafD,'#05030c',.35),nl=b===4?'#ffffff':mix(th.leaf,'#05030c',.3),r2=rng(b*17+9),items=[];for(let x=20;x<640;x+=46+(r2()*70|0))items.push([x,r2(),r2()]);
  items.forEach(([x0,a,bb])=>[x0,x0-640,x0+640].forEach(x=>{const base=150,h=70+a*60;
    if(b===0){n.fillStyle=nc;n.fillRect(x-4,base-h,8,h);for(let k=0;k<6;k++){circ(n,x+Math.sin(k*2.1+a*9)*16,base-h+k*7,13+bb*6,nc)}circ(n,x-6,base-h-4,8,nl)}
    else if(b===1){for(let k=0;k<5;k++){const w=22-k*4+bb*4,yy=base-k*h/5.5;n.fillStyle=nc;n.beginPath();n.moveTo(x-w,yy);n.lineTo(x+w,yy);n.lineTo(x,yy-h/3.2);n.fill();n.fillStyle='#eef4ff';n.fillRect(x-w*.6,yy-2,w*1.2,2)}n.fillStyle=nc;n.fillRect(x-2,base-6,4,8)}
    else if(b===2){if(a<.6){n.strokeStyle=nc;n.lineWidth=4;n.beginPath();n.moveTo(x,base);n.quadraticCurveTo(x+12,base-h*.5,x+4,base-h);n.stroke();n.lineWidth=3;[[-24,8],[-14,-4],[14,-4],[24,8],[0,-10]].forEach(([dx,dy])=>{n.beginPath();n.moveTo(x+4,base-h);n.quadraticCurveTo(x+4+dx*.6,base-h-12+dy,x+4+dx,base-h+4+dy);n.stroke()})}else{n.fillStyle=nc;n.beginPath();n.moveTo(x-30,base);n.lineTo(x-22,base-h*.6);n.lineTo(x+20,base-h*.55);n.lineTo(x+28,base);n.fill()}}
    else if(b===3){n.strokeStyle=nc;n.lineWidth=5;n.beginPath();n.moveTo(x,base);n.lineTo(x+3,base-h);n.stroke();n.lineWidth=2;for(let k=0;k<4;k++){const yy=base-h*(.35+k*.15),d=k%2?1:-1;n.beginPath();n.moveTo(x+2,yy);n.lineTo(x+2+d*(14+bb*10),yy-10);n.stroke()}}
    else{for(let k=0;k<4;k++)circ(n,x+Math.sin(k*1.7)*12,base-k*h/4,16-k*2+bb*5,k%2?nc:nl)}
  }));
  {const g=n.createLinearGradient(0,90,0,GH);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,`rgba(${rgb(th.sky[3])},.35)`);n.globalCompositeOperation='source-atop';n.fillStyle=g;n.fillRect(0,0,640,GH);n.globalCompositeOperation='source-over'}
  const tile=mkc(32,GH-GROUND),t=tile.getContext('2d'),tg=t.createLinearGradient(0,0,0,GH-GROUND);tg.addColorStop(0,th.dirt);tg.addColorStop(1,th.dirtD);t.fillStyle=tg;t.fillRect(0,0,32,GH-GROUND);
  const rr=rng(b*7+3);for(let k=0;k<6;k++){const x=Math.floor(rr()*28),y=9+Math.floor(rr()*18);px(t,x,y,4,3,th.stone);px(t,x,y,4,1,mix(th.stone,'#ffffff',.35));px(t,x,y+3,4,1,th.dirtD)}
  px(t,0,0,32,2,th.grassL);px(t,0,2,32,4,th.grass);px(t,0,6,32,1,'rgba(0,0,0,.18)');
  for(let i=0;i<32;i++){const l=(i*7)%5===0?3:(i*3)%4===0?2:0;if(l)px(t,i,6,1,l,th.grass)}
  for(let i=1;i<32;i+=6)px(t,i,0,2,1,'rgba(255,255,255,.45)');
  return LAY[key]={sky,far,mid,near,tile};
}
function blit(c,layer,off){const o=((Math.floor(off)%640)+640)%640;c.drawImage(layer,-o,0);c.drawImage(layer,640-o,0)}
let VIGC=null;function vig(){if(VIGC)return VIGC;VIGC=mkc(GW,GH);const c=VIGC.getContext('2d'),g=c.createRadialGradient(GW/2,GH/2,GH*.45,GW/2,GH/2,GW*.62);g.addColorStop(0,'rgba(20,10,40,0)');g.addColorStop(1,'rgba(20,10,40,.38)');c.fillStyle=g;c.fillRect(0,0,GW,GH);return VIGC}
function shadow(c,x,w,y){c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(x,y===undefined?GROUND+1:y,w,2.5,0,0,7);c.fill()}
/* ================= UI ================= */
const $=s=>document.querySelector(s);
const view=$('#view');
let pickG=null,tab='home',taskFilter='all',shopCat='char',homeRaf=null;
function hydrate(root){
  (root||document).querySelectorAll('canvas[data-icon]').forEach(cv=>drawIcon(cv,cv.dataset.icon));
  (root||document).querySelectorAll('canvas[data-hero]').forEach(cv=>{try{heroCanvas(cv,JSON.parse(cv.dataset.hero),+cv.dataset.s||2)}catch(e){}});
  (root||document).querySelectorAll('canvas[data-ship]').forEach(cv=>drawShipCanvas(cv,+cv.dataset.ship));
  (root||document).querySelectorAll('canvas[data-world]').forEach(cv=>{try{worldThumb(cv,+cv.dataset.world)}catch(e){const c=cv.getContext('2d');drawScene(c,+cv.dataset.world,320,180,0,null)}});
}
const ic=(n,cls)=>`<canvas data-icon="${n}" width="10" height="10"${cls?` class="${cls}"`:''}></canvas>`;
const hero=(look,s,old)=>`<canvas data-hero='${JSON.stringify(look)}' data-s="${s||2}"${old?' data-old="1"':''}></canvas>`;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cardH=t=>`<div class="card-h"><h2>${t}</h2><div class="dots"><i></i><i></i><i></i></div></div>`;
function toast(msg,icon){const d=document.createElement('div');d.innerHTML=(icon?ic(icon):'')+`<span>${msg}</span>`;$('#toast').appendChild(d);hydrate(d);setTimeout(()=>d.remove(),2600)}
function updateTop(){$('#tPts').textContent=S.points;{const e=$('#tGold');if(e)e.textContent=S.gold||0}$('#tGems').textContent=S.gems;drawIcon($('#sndIc'),S.muted?'mute':'sound')}
function periodOf(t){return t<'12:00'?['الصباح','sun']:t<'17:00'?['بعد المدرسة','book']:t<'20:00'?['المساء','heart']:['قبل النوم','moon']}

function render(){
  if(!S.cfg)kInit();cancelAnimationFrame(homeRaf);updateTop();
  document.querySelectorAll('.nav button').forEach(b=>b.setAttribute('aria-current',b.dataset.tab===tab?'page':'false'));
  if(tab==='friends')tab='ach';({home:rHome,tasks:rTasks,worlds:rWorlds,shop:rShop,ach:rAch})[tab]();
  hydrate(view);playTrack(tab==='ach'?'friends':tab);
}

function pathHTML(){
  const mw=maxWorld();
  return `<div class="card"><div class="card-b"><div class="path">${WORLDS.map((w,i)=>`${i?'<div class="arrow">◀</div>':''}
   <div class="node ${S.unlocked[i]?'':'locked'} ${i===mw?'cur':''}"><div class="c" style="background:${w.node}">${ic(S.unlocked[i]?(S.cleared>=(i+1)*PER?'check':['map','gem','sun','flame','star'][i]):'lock')}<span class="k">${i+1}</span></div><div class="l">${w.tag}</div></div>`).join('')}</div></div></div>`;
}

function rHome(){
  const nt=nextTask(),lv=level(),xpIn=S.xp%300,tasks=sortedTasks();
  const doneN=S.tasks.filter(t=>t.status==='done').length,pct=Math.round(doneN/S.tasks.length*100);
  const upcoming=tasks.filter(t=>t.status!=='done').slice(0,4);
  view.innerHTML=`<div class="stack">
  <div class="homehero">
    <canvas id="homeCv" width="320" height="150"></canvas>
    <div class="hud">
      <div class="hearts">${ic('heart')}${ic('heart')}${ic('heart')}</div>
      <div class="chip lv"><div style="display:flex;gap:8px;align-items:center"><canvas data-rider="1" style="width:26px;height:auto"></canvas><span class="num">Lv.${lv}</span></div><div class="bar" style="width:90px"><b style="width:${xpIn/3}%"></b></div></div>
      <div class="chip">${ic('star')}<span class="num">${S.points}</span></div>
    </div>
    ${nt?`<div class="bubble"><div class="t"># مهمتك الآن · <span class="num">${nt.time}</span></div><div class="n">${esc(nt.name)}</div><div class="t" style="color:var(--gold)">+${nt.pts} نقطة عند الإنجاز</div></div>`:`<div class="bubble"><div class="n">${gx('أحسنت! أنجزت','أحسنتِ! أنجزتِ')} كل مهام اليوم</div></div>`}
  </div>
  ${guideHTML()}
  ${timeCardHTML()}
  ${pathHTML()}
  <div class="grid2">
    <div class="card">${cardH('تقدّمك')}<div class="card-b light">
      <div class="prog"><div class="avatar"><canvas data-rider="2" style="width:80px;height:auto"></canvas></div><div class="info"><h3>${esc(heroName())} · المستوى ${lv}</h3><div class="bar"><b style="width:${xpIn/3}%"></b></div><div class="num" style="font-size:11px">${xpIn} / 300 XP</div></div></div>
      <div class="tiles">
        <div class="tile">${ic('flame')}<div class="v">${S.streak}</div><div class="s">أيام متتالية</div></div>
        <div class="tile">${ic('star')}<div class="v">${todayPts()}</div><div class="s">نقاط اليوم</div></div>
        <div class="tile">${ic('chart')}<div class="v">${pct}%</div><div class="s">إنجاز اليوم</div></div>
      </div></div></div>
    <div class="card">${cardH('مهمة اليوم')}<div class="card-b">
      ${nt?`<div class="quest"><div class="check">${ic(nt.icon)}</div><p>${esc(nt.name)} قبل الساعة <span class="num">${nt.time}</span></p></div>`:''}
      <div class="term"><div class="bar-top"><div class="dots"><i></i><i></i><i></i></div></div><ul>
        ${upcoming.length?upcoming.map(t=>`<li class="${t.status}"><span class="num">${t.time}</span><span>${esc(t.name)}${t.status==='pending'?' · بانتظار الموافقة':''}</span><span class="pts">+${t.pts}</span></li>`).join(''):'<li>لا مهام متبقية اليوم، ما شاء الله</li>'}
      </ul></div>
      <div style="margin-top:14px">${nt?`<button class="btn wide" data-done="${nt.id}">▶ أنجزتها</button>`:`<button class="btn wide gold" data-goto="worlds">▶ ${gx('انطلق','انطلقي')} إلى المغامرة</button>`}</div>
    </div></div>
  </div></div>`;
  const cv=$('#homeCv'),wi=maxWorld();let last=0;view.querySelectorAll('canvas[data-rider]').forEach(c2=>riderPortrait(c2,+c2.dataset.rider||1));
  const mode=new Date().getHours()>=18||new Date().getHours()<5?'night':new Date().getHours()>=16?'dusk':'day';
  const loop=t=>{homeRaf=requestAnimationFrame(loop);if(t-last<33)return;last=t;if(!cv.isConnected){cancelAnimationFrame(homeRaf);return}sceneRender(cv,t,{b:wi,mode,vh:210,gy:.75})};
  homeRaf=requestAnimationFrame(loop);
}

function rTasks(){
  const ts=sortedTasks(),done=ts.filter(t=>t.status==='done'),got=todayPts(),poss=possiblePts();
  const show=ts.filter(t=>taskFilter==='all'||(taskFilter==='left'?t.status!=='done':t.status==='done'));
  const groups={};show.forEach(t=>{const p=periodOf(t.time)[0];(groups[p]=groups[p]||[]).push(t)});
  const need=WORLDS[maxWorld()+1];
  view.innerHTML=`<div class="stack">
   <div class="card">${cardH('مهام يومي')}<div class="card-b light"><div class="summary">
     <div><div class="big">${got}<span style="font-size:11px"> / ${poss}</span></div><div style="font-weight:800;color:var(--muted)">نقطة اليوم · ${done.length} من ${ts.length} مهمة</div></div>
     <div style="flex:1;min-width:160px"><div class="bar"><b style="width:${Math.min(100,got/poss*100)}%"></b></div>
     <div class="note">رصيدك <span class="num">${S.points}</span> نقطة إنجاز · كل <span class="num">${S.cfg.ptsPer}</span> نقطة = <span class="num">${S.cfg.minPer}</span> دقائق لعب</div></div>
   </div>
   <div class="filters" style="margin-top:12px">${[['all','الكل'],['left','المتبقية'],['done','المنجزة']].map(([k,l])=>`<button class="pill" data-filter="${k}" aria-pressed="${taskFilter===k}">${l}</button>`).join('')}</div>
   </div></div>
   ${Object.keys(groups).length?Object.entries(groups).map(([p,list])=>`<div class="period">${ic(periodOf(list[0].time)[1])}${p}</div><div class="card">${list.map(taskRow).join('')}</div>`).join(''):'<div class="card"><div class="card-b center" style="font-weight:800">لا توجد مهام هنا.</div></div>'}
   <p class="note center">تُضاف النقاط والعملات بعد موافقة ولي الأمر على كل مهمة · اليومية تتجدد كل صباح والأسبوعية كل سبت</p>
  </div>`;
}
function taskRow(t){
  const act=t.status==='done'?`<div class="check">${ic('check')}</div><span class="p">+${t.pts}</span>`:
    t.status==='pending'?`<div class="wait">بانتظار<br>ولي الأمر</div>`:`<button class="btn sm" data-done="${t.id}">أنجزتها</button><span class="p">+${t.pts}</span>`;
  return `<div class="task ${t.status}"><div class="ic">${ic(t.icon)}</div><div class="mid"><div class="nm">${esc(t.name)}</div><div class="meta"><span class="num">${t.time}</span><span class="tag ${t.type!=='routine'?'sp':''}">${typeName(t)}</span><span class="tag">${kCats()[catOf(t)].n}</span></div></div><div class="act">${act}</div></div>`;
}

function rWorlds(){
  const tot=STAGES.length;
  view.innerHTML=`<div class="stack">${pathHTML()}
  <div class="card"><div class="card-b light"><div class="stbar"><span>تقدّم الرحلة · ${tot} مرحلة مختلفة</span><b class="num">${S.cleared} / ${tot}</b></div><div class="note" style="margin:4px 0 0;font-size:12px">جزر جديدة اليوم: ${dayClears()} / 3 · ${gx('أنجز','أنجزي')} المهام لتفتح الجزر</div><div class="bar"><b style="width:${S.cleared/tot*100}%"></b></div><button class="btn sm blue" data-bestiary style="margin-top:12px">${ic('people')} موسوعة الوحوش</button></div></div>${harborHTML()}
  ${WORLDS.map((w,r)=>{
    const un=S.unlocked[r]||S.openAll,prevOk=r===0||S.unlocked[r-1],short=w.cost-S.points,days=Math.max(1,Math.ceil(short/180)),rw=ITEM_BY_ID[rewardFor(r*PER+PER-1)];
    const nodes=STAGES.slice(r*PER,(r+1)*PER).map((st,k)=>{const si=st.i,done=!!(S.stars||{})[si]||S.cleared>si,cur=un&&!(S.stars||{})[si]&&(S.openAll||S.cleared===si),sr=(S.stars||{})[si]||0,row=Math.floor(k/4),slot=row*4+(row?3-k%4:k%4);
      return `<button class="snode ${done?'done':cur?'cur':''} ${st.o.boss?'boss':''} ${!un||(si>S.cleared&&!S.openAll)?'locked':''}" data-stage="${si}" style="order:${slot}"><span class="o">${ic(stIcon(st))}<span class="k num">${si+1}</span></span><span class="nm">${st.n}</span><span class="sr">${done?'★'.repeat(sr)+'☆'.repeat(3-sr):cur?gx('العب الآن','العبي الآن'):''}</span></button>`}).join('');
    return `<div class="card world"><div class="thumb"><canvas data-world="${r}" width="320" height="180"></canvas><div class="ribbon">المملكة ${r+1} · ${w.tag}</div>
     ${un?'':`<div class="lock"><div>${ic('lock')}${prevOk&&kDone(r)?`<button class="btn gold" data-unlock="${r}" style="margin-top:8px">${gx('افتح','افتحي')} المملكة</button>`:`<div class="need">${gx('أكمل','أكملي')} جزر «${WORLDS[r-1].name}» لتفتح هذه المملكة</div>`}</div></div>`}
     </div><div class="card-b"><h3>${w.name}</h3><p>${w.desc}</p><div class="snodes">${nodes}</div>
     <div class="reward"><canvas data-hero='${JSON.stringify(lookWith(rw))}' data-s="2"></canvas><div>جائزة إنهاء المنطقة: <b>${rw.name}</b>${S.owned.includes(rw.id)?' · '+gx('حصلت','حصلتِ')+' عليها ✓':''}</div></div>
     </div></div>`}).join('')}</div>`;
}
function lookWith(it){const l=Object.assign({},S.look);if(it)l[CAT_SLOT[it.cat]]=it.cat==='char'?it.look.char:it.id;if(it&&it.cat==='char'&&S.look.char!==it.look.char){l.acc='acc_none'}return l}

function rShop(){
  const g=S.gender||'m',list=ITEMS.filter(i=>i.cat===shopCat&&(!i.g||i.g===g)),own=list.filter(i=>S.owned.includes(i.id)).length,pk=[...perks()];
  const allN=ITEMS.filter(i=>!i.g||i.g===g),allOwn=allN.filter(i=>S.owned.includes(i.id)).length;
  view.innerHTML=`<div class="stack">
   <div class="card">${cardH(gx('خزانة البطل','خزانة البطلة'))}<div class="card-b"><div class="preview"><div class="stagebox">${hero(S.look,4)}</div>
   <div style="min-width:0;display:flex;flex-direction:column;gap:6px"><div style="font-family:var(--f-display);font-size:24px">${esc(heroName())}</div>
   <div class="row" style="gap:14px;align-items:center"><div class="price" style="font-size:13px">${ic('gem')}<span>${S.gems}</span></div><div class="note" style="margin:0">المجموعة <span class="num">${allOwn}/${allN.length}</span></div></div>
   <div class="feat">${pk.length?pk.map(p=>`<span class="tag sp">${PERK_TEXT[p]}</span>`).join(''):'<span class="note" style="margin:0">جهّز سلاحًا أو أداة لتحصل على قدرات خاصة</span>'}</div></div></div></div></div>
   <div class="card"><div class="card-b"><div class="tabs">${Object.entries(CAT_NAMES).map(([k,l])=>`<button class="pill" data-cat="${k}" aria-pressed="${shopCat===k}">${l}</button>`).join('')}</div>
   <div class="stbar"><span>${CAT_NAMES[shopCat]} · المكافآت تُفتح بإنهاء المراحل</span><b class="num">${own} / ${list.length}</b></div>
   <div class="items">${list.map(it=>{
     const has=S.owned.includes(it.id),slot=CAT_SLOT[it.cat],eq=it.cat==='char'?S.look.char===it.look.char:S.look[slot]===it.id;
     const rar=it.price===null?['جائزة','rw']:it.price>=250?['أسطوري','lg']:it.price>=100?['نادر','rr']:['عادي','cm'];
     let act;if(eq)act=`<button class="btn sm" disabled style="background:var(--gold);color:var(--ink);border-color:var(--ink);box-shadow:0 4px 0 var(--ink)">مُجهَّز</button>`;
     else if(has)act=`<button class="btn sm blue" data-equip="${it.id}">جهّز</button>`;
     else if(it.price===null)act=`<span class="tag">${ic('lock')} المرحلة ${rewardIdx(it.id)+1}</span>`;
     else act=`<button class="btn sm gold" data-buy="${it.id}" ${S.gems<it.price?'disabled':''}><span class="price">${ic('gem')}${it.price}</span></button>`;
     const pic=it.cat==='tool'?`<canvas data-icon="${it.icon}" width="10" height="10" class="tico"></canvas>`:hero(lookWith(it),3,it.cat==='acc');
     return `<div class="item ${eq?'eq':''} ${!has&&it.price===null?'lockd':''}"><span class="rar ${rar[1]}">${rar[0]}</span><div class="pic">${pic}</div><div class="in">${it.name}</div>${WEL[it.id]&&it.id!=='wpn_none'?`<div class="pk" style="color:#c0392b;font-weight:800">قوة: ${EL_NAME[WEL[it.id]]}</div>`:''}<div class="pk">${it.pk||''}</div>${act}</div>`}).join('')}</div></div></div></div>`;
}
function rFriends(){
  const me={name:heroName()+gx(' (أنت)',' (أنتِ)'),lvl:level(),world:maxWorld(),week:weekPts(),look:S.look,me:true};
  const all=(S.gender==='f'?FRIENDS_F:FRIENDS_M).concat([me]).sort((a,b)=>b.world-a.world||b.week-a.week);
  view.innerHTML=`<div class="stack">
   <div class="card">${cardH('سباق المغامرة')}<div class="card-b"><div class="track"><div class="lane">${WORLDS.map((w,i)=>`<div class="col"><div class="ppl">${all.filter(p=>p.world===i).map(p=>`<canvas data-hero='${JSON.stringify(p.look)}' data-s="2" title="${esc(p.name)}"></canvas>`).join('')}</div><div class="wbase" style="background:${w.node}">${w.tag}</div></div>`).join('')}</div></div>
   <p class="note">${gx('كل بطل يقف عند أعلى منطقة وصل إليها.','كل بطلة تقف عند أعلى منطقة وصلت إليها.')}</p></div></div>
   <div class="card">${cardH('ترتيب الأسبوع')}<div class="rank">${all.map((p,i)=>`<div class="rrow ${p.me?'me':''}"><div class="pos">${i+1}</div><div class="av">${hero(p.look,2)}</div><div class="who"><b>${esc(p.name)}</b><span>المستوى ${p.lvl} · ${WORLDS[p.world].name}</span></div><div class="wk">${p.week}<br><span style="font-family:var(--f-body);font-size:11px;font-weight:800">نقطة</span></div></div>`).join('')}</div></div>
   <div class="card">${cardH('اربط حسابك بأصدقائك')}<div class="card-b">
     <div class="code"><span class="c" id="myCode">${S.code}</span><button class="btn sm blue" id="copyCode">انسخ الرمز</button></div>
     <p class="note">الأصدقاء الظاهرون هنا أمثلة توضيحية. الربط الحقيقي بين حسابات العائلات يحتاج خادمًا مشتركًا، ويمكن إضافته في الخطوة التالية.</p>
   </div></div></div>`;
}

/* ================= ACTIONS ================= */
function award(p,why){
  const before=level();S.points+=p;S.xp+=p;S.log[S.day]=(S.log[S.day]||0)+p;const gg=Math.max(1,Math.round(p/3));S.gold=(S.gold||0)+gg;
  toast(`+${p} نقطة و+${gg} عملة · ${why}`,'star');
  if(level()>before){setTimeout(()=>{SFX.win();modal(`<div class="center celebrate">المستوى ${level()}!</div><div class="center">${hero(S.look,4)}</div><p class="center" style="font-weight:800;margin:0">${gx('ارتفع مستواك يا بطل. استمر!','ارتفع مستواكِ يا بطلة. استمري!')}</p><button class="btn wide gold" data-close>رائع</button>`)},400)}
  const all=S.tasks.every(t=>t.status==='done');
  if(all&&S.bonusDay!==S.day){S.bonusDay=S.day;S.points+=20;S.xp+=20;S.gems+=25;S.log[S.day]+=20;setTimeout(()=>toast('صندوق اليوم الكامل: +20 نقطة و+25 جوهرة','gift'),700)}
}
function markDone(id){
  const t=S.tasks.find(x=>x.id===id);if(!t||t.status!=='todo')return;
  if(S.auto){t.status='done';award(t.pts,t.name);SFX.done()}else{t.status='pending';SFX.click();toast('أُرسلت لولي الأمر للموافقة','clock')}
  save();render();
}
function approve(id,ok){const t=S.tasks.find(x=>x.id===id);if(!t)return;if(ok){t.status='done';award(t.pts,t.name);SFX.done()}else t.status='todo';save();render();parentPanel()}
function unlockWorld(i){const w=WORLDS[i];if(S.points<w.cost)return;S.points-=w.cost;S.unlocked[i]=true;save();SFX.win();render();
  modal(`<div class="center celebrate">فُتحت منطقة جديدة!</div><canvas data-world="${i}" width="320" height="180" style="width:100%;height:auto;border:3px solid var(--ink);border-radius:8px"></canvas><p class="center" style="font-weight:800;margin:0">${w.name}: ${w.desc}</p><button class="btn wide gold" data-play="${i*PER}">▶ ${gx('ابدأ','ابدئي')} المرحلة الأولى</button>`)}
function buy(id){const it=ITEM_BY_ID[id];if(!it||S.gems<it.price)return;S.gems-=it.price;S.owned.push(id);equip(id,true);SFX.buy();toast(gx('اشتريت ','اشتريتِ ')+it.name,'gem')}
function equip(id,silent){const it=ITEM_BY_ID[id];const slot=CAT_SLOT[it.cat];S.look[slot]=it.cat==='char'?it.look.char:id;save();if(!silent)SFX.click();render()}

function setGender(g){
  S.gender=g;const gt=genTasks(g,S.nextId||100);S.nextId=gt.id;
  S.tasks=S.tasks.filter(t=>!t.def).concat(gt.t);
  const it=ITEMS.find(i=>i.cat==='char'&&i.look.char===S.look.char);
  if(it&&it.g!==g)S.look.char=g==='f'?'advg':'adv';
}
/* ================= MODALS ================= */
const ov=$('#overlay');
function modal(inner,title){ov.innerHTML=`<div class="card modal" dir="rtl">${cardH(title||'مملكة الإنجاز')}<div class="card-b">${inner}</div></div>`;ov.hidden=false;hydrate(ov)}
function closeModal(){ov.hidden=true;ov.innerHTML='';if(typeof G!=='undefined'&&G){G.paused=false;G.last=0}}
let pinBuf='';
function pinPad(){
  pinBuf='';
  const draw=()=>{modal(`<p class="center" style="font-weight:800;margin:0">أدخل الرمز السري لولي الأمر</p><div class="pindots">${[0,1,2,3].map(i=>`<i class="${i<pinBuf.length?'f':''}"></i>`).join('')}</div>
   <div class="pinpad" style="direction:ltr">${[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map(k=>k===''?'<span></span>':`<button class="btn ghost" data-pin="${k}">${k}</button>`).join('')}</div>
   <button class="btn ghost wide" data-close>إلغاء</button>`,'لوحة ولي الأمر')};
  pinPad.draw=draw;draw();
}
function parentPanel(){
  const pend=S.tasks.filter(t=>t.status==='pending');
  modal(`
   <div class="sec">بانتظار الموافقة (${pend.length})</div>
   <div class="plist">${pend.length?pend.map(t=>`<div class="prow">${ic(t.icon)}<span class="nm">${esc(t.name)} · +${t.pts}</span><button class="btn sm" data-approve="${t.id}">وافق</button><button class="btn sm red" data-reject="${t.id}">ليس بعد</button></div>`).join(''):'<p class="note" style="margin:0">لا توجد مهام بانتظار الموافقة.</p>'}</div>
   <label class="switch">فتح جميع المراحل والمناطق (بدون نقاط)<input type="checkbox" id="openAll" ${S.openAll?'checked':''}></label>
   <label class="switch">موافقة تلقائية على المهام (بدون مراجعة)<input type="checkbox" id="autoAp" ${S.auto?'checked':''}></label>
   <div class="sec">مكافأة سريعة</div>
   <div class="row"><button class="btn gold sm" data-bonus="10">+10 سلوك رائع</button><button class="btn gold sm" data-bonus="25">+25 إنجاز مميز</button></div>
   <div class="sec">إضافة مهمة</div>
   <div class="field">اسم المهمة<input id="nName" maxlength="40" placeholder="مثال: ري النباتات"></div>
   <div class="row"><div class="field">الوقت<input id="nTime" type="time" value="17:00"></div><div class="field">النقاط<input id="nPts" type="number" min="5" max="50" value="15"></div></div>
   <div class="row"><div class="field">الأيقونة<select id="nIcon">${ICON_CHOICES.map(([k,l])=>`<option value="${k}">${l}</option>`).join('')}</select></div><div class="field">النوع<select id="nType"><option value="routine">روتين يومي</option><option value="special">مهمة خاصة لمرة واحدة</option></select></div></div>
   <button class="btn blue wide" id="addTask">أضف المهمة</button>
   <div class="sec">كل المهام (${S.tasks.length})</div>
   <div class="plist">${sortedTasks().map(t=>`<div class="prow">${ic(t.icon)}<span class="nm"><span class="num">${t.time}</span> ${esc(t.name)} · ${t.pts}</span><button class="btn sm red" data-del="${t.id}" aria-label="حذف">حذف</button></div>`).join('')}</div>
   <div class="sec">الإعدادات</div>
   <div class="row"><div class="field">الطفل<select id="cGender"><option value="m" ${S.gender!=='f'?'selected':''}>ولد</option><option value="f" ${S.gender==='f'?'selected':''}>بنت</option></select></div><div class="field">اسم الطفل<input id="cName" maxlength="16" value="${esc(S.name)}"></div><div class="field">رمز سري جديد (4 أرقام)<input id="cPin" inputmode="numeric" maxlength="4" placeholder="••••"></div></div>
   <button class="btn wide" id="saveSet">احفظ الإعدادات</button>
   ${S.sample?'<p class="note" style="margin:0">التقدم الحالي مثال للتجربة. ابدأ من الصفر عندما يكون طفلك جاهزًا.</p>':''}
   <div id="resetBox"><button class="btn red wide" id="resetBtn">ابدأ من الصفر</button></div>
   <button class="btn ghost wide" data-close>إغلاق</button>`,'لوحة ولي الأمر');
}

/* ================= STAGES ================= */
const PER=20;
const SKY_T={dusk:['#2e2350','#6b3f72','#c46a6a','#f0a878'],night:['#070a1e','#10173a','#1a2350','#28336a']};
const TIME_NAME={day:'نهار',dusk:'غروب',night:'ليل'};
const WX_NAME={rain:'مطر',snow:'ثلج',blizzard:'عاصفة ثلجية',leaves:'أوراق متطايرة',sand:'عاصفة رملية',embers:'جمر متطاير',stars:'سماء النجوم',fireflies:'يراعات مضيئة'};
const CH_NAME={bridge:'جسر خشبي',rbridge:'جسر متهالك',castle:'قلعة',tower:'برج',cave:'كهف',treasure:'غرفة كنز',treetop:'أعالي الأشجار',floating:'منصات طائرة',movers:'منصات متحركة',ruins:'أطلال وأعمدة',pyramid:'هرم',ice:'جليد زلق',lava:'بحيرة حمم',cloudcastle:'قلعة السحاب',spikes:'أشواك',hills:'تلال',stairs:'سلالم حجرية',gap:'حفرة',boss:'معركة الحارس',flat:'سهل'};
const STAGES0=[
 ['بداية الطريق',0,'day','',['flat:10','hills','flat:8','spikes','hills']],
 ['جسر النهر',0,'day','leaves',['flat:6','bridge:14','hills','bridge:20']],
 ['أعالي الأشجار',0,'day','leaves',['treetop','floating:18','treetop']],
 ['كهف الكنز',0,'day','',['flat:4','cave','treasure','cave']],
 ['الجسر المتهالك',0,'dusk','fireflies',['rbridge:16','hills','gap','rbridge:18']],
 ['مستنقع المطر',0,'day','rain',['movers','floating:16','gap','movers']],
 ['برج البوم',0,'night','fireflies',['tower','floating:14','hills']],
 ['قلعة الغابة',0,'dusk','fireflies',['castle','boss']],
 ['سفح الجبل',1,'day','snow',['hills','stairs','ice:14','hills']],
 ['الكهف الجليدي',1,'day','',['cave','spikes','cave']],
 ['جسر الهاوية',1,'day','snow',['bridge:24','floating:16','bridge:14']],
 ['بلورات الثلج',1,'day','snow',['ice:12','treasure','ice:16','spikes']],
 ['العاصفة الثلجية',1,'day','blizzard',['movers','ice:12','gap','movers']],
 ['منحدر التزلج',1,'day','snow',['stairs','ice:30','spikes','ice:12']],
 ['أبراج الشفق',1,'night','stars',['tower','gap','tower']],
 ['قلعة الجليد',1,'dusk','snow',['castle','boss']],
 ['بوابة الرمال',2,'day','',['flat:8','ruins','flat:6']],
 ['الأهرامات',2,'day','',['pyramid','flat:6','pyramid']],
 ['جسر الواحة',2,'day','',['flat:5','bridge:18','flat:4','floating:12']],
 ['المعبد المدفون',2,'day','',['cave','treasure','cave']],
 ['عاصفة الرمال',2,'dusk','sand',['movers','ruins','gap']],
 ['ليل الصحراء',2,'night','stars',['floating:16','spikes','ruins']],
 ['أطلال المدينة',2,'day','',['ruins','tower','ruins']],
 ['قصر الكثبان',2,'dusk','sand',['castle','boss']],
 ['أرض الرماد',3,'day','embers',['hills','spikes','hills']],
 ['جسر الحمم',3,'day','embers',['bridge:18','lava','bridge:14']],
 ['النهر الناري',3,'dusk','embers',['movers','lava','movers']],
 ['مناجم الجواهر',3,'day','',['cave','treasure','cave']],
 ['الكهف المشتعل',3,'night','embers',['cave','lava','cave']],
 ['الجسور المحترقة',3,'day','embers',['rbridge:16','lava','rbridge:16']],
 ['برج البركان',3,'dusk','embers',['tower','lava','tower']],
 ['قلعة التنين',3,'night','embers',['castle','boss']],
 ['السلّم السحابي',4,'day','',['floating:18','stairs','floating:16']],
 ['رياح السماء',4,'day','',['movers','floating:14','movers']],
 ['حديقة النجوم',4,'night','stars',['floating:16','treasure','floating:12']],
 ['جسر قوس قزح',4,'day','',['bridge:22','floating:12','bridge:16']],
 ['البرق والرعد',4,'dusk','rain',['movers','spikes','gap']],
 ['أبراج الغيوم',4,'day','',['tower','cloudcastle']],
 ['القلعة الذهبية',4,'day','stars',['cloudcastle','castle','floating:10']],
 ['حارس السماء',4,'night','stars',['castle','boss']],
].map((a,i)=>({i,n:a[0],b:a[1],time:a[2],wx:a[3],ch:a[4],o:{boss:a[4].includes('boss'),storm:a[3]==='rain'}}));
const GENST=[
 {a:['وادي','غابة','بحيرة','تلال','مرج','نبع','قرية','كهف','جسر','برج','حصن','شلال'],b:['الصنوبر','الضباب','الفراشات','البلوط','الذئاب','الأيائل','الصيادين','الطواحين','القمر','السناجب','الندى','الزهور'],w:['','leaves','rain','fireflies']},
 {a:['قمة','وادي','بحيرة','كهف','قلعة','ممر','مخيم','برج','جسر','نهر','غابة','قرية'],b:['الصقيع','الثلج','الدببة البيضاء','الشفق','الجليد الأزرق','الرياح','الذئاب الرمادية','البلّور','العاصفة','الصنوبر الأبيض','النجوم','الصمت'],w:['snow','blizzard','','stars']},
 {a:['واحة','كثيب','قصر','سوق','وادي','بئر','قافلة','معبد','مدينة','برج','نخيل','قلعة'],b:['السراب','النخيل','الصقور','الذهب','القوافل','الرمال الحمراء','العقارب','النجوم','القمر','اللؤلؤ','الريح','الشمس'],w:['','sand','stars']},
 {a:['جبل','نهر','كهف','حصن','وادي','بحيرة','منجم','بوابة','برج','جسر','سهل','قلعة'],b:['الحمم','الرماد','الجمر','النار','الياقوت','الدخان','التنانين','البازلت','اللهب','الشرر','الكبريت','البراكين'],w:['embers','']},
 {a:['جزيرة','قصر','حديقة','برج','جسر','بحيرة','سهل','معبد','مدينة','قلعة','وادي','شلال'],b:['السحاب','النجوم','قوس قزح','الأحلام','النسيم','الفجر','البرق','الأجنحة','الضياء','الريش','القمر الفضي','الأساطير'],w:['','stars','fireflies']}];
function buildStages(S0){const out=[],slots=[0,3,5,8,11,14,16,19],CH=[['flat:8','hills'],['cave','treasure'],['bridge:14','hills'],['ruins','tower'],['floating:16','hills'],['movers','gap']];
  for(let b=0;b<5;b++){const orig=S0.filter(x=>x.b===b),N=GENST[b];let g=0;for(let k=0;k<20;k++){const oi=slots.indexOf(k);let st;
    if(oi>=0&&orig[oi]){st=Object.assign({},orig[oi]);st.rw=REWARDS[b*8+oi]||null}
    else{const boss=k===9;st={n:N.a[g%12]+' '+N.b[(g*5+3)%12],b,time:['day','day','dusk','day','night'][g%5],wx:N.w[g%N.w.length],ch:boss?['castle','boss']:CH[g%CH.length],rw:null};st.o={boss,storm:st.wx==='rain'};g++}
    st.d=b*8+Math.min(7,Math.floor(k*8/20));st.i=out.length;out.push(st)}}return out}
const STAGES=buildStages(STAGES0);
const ADJ=['الغابة','الطحالب','البلّوط','الشفق','الضباب','المطر','الليل','العشب','الثلج','الكهف','الصخر','البلّور','العاصفة','المنحدر','القطب','الجليد','الرمال','العقارب','الكثبان','الواحة','الإعصار','النجوم','الأطلال','الذهب','الرماد','الحمم','اللهب','الجمر','الشرر','الدخان','البركان','النار','السحاب','الرياح','القمر','قوس قزح','البرق','الغروب','القلعة','السماء'];
/* ================= MYTHICAL CREATURES ================= */
const CRDEF={horse:[34,30],wolf:[38,24],treant:[34,44],boar:[36,24],yeti:[32,40],mammoth:[46,36],scorpion:[40,24],basilisk:[50,20],golem:[32,38],salamander:[46,16],gargoyle:[30,32],
  griffin:[50,34],owl:[32,28],wyvern:[52,34],bat:[32,20],roc:[50,26],phoenix:[52,34],serpent:[68,28]};
const CRNAME={raider:'محاربو القرية المعادية',bear:'الدب الأسطوري',wolf:'الذئب العملاق',treant:'العملاق الشجري',boar:'الخنزير البري',yeti:'اليتي',mammoth:'الماموث',scorpion:'العقرب العملاق',basilisk:'الباسيليسك',golem:'العملاق الصخري',salamander:'السمندل الناري',gargoyle:'الغرغول الحجري',
  griffin:'الغريفين',owl:'البومة العملاقة',wyvern:'التنين المجنّح',bat:'الخفاش العملاق',roc:'طائر الرخ',phoenix:'العنقاء',serpent:'الأفعى السماوية'};
const ARMOR={scorpion:1,golem:1,mammoth:1,gargoyle:1};
const POOLS=[
 {g:[['wolf',{a:'#6b6f7a',b:'#b4b8c4',c:'#3a3d48',e:'#f5c542'}],['raider',{a:'#7a3a2a',b:'#c8a070',c:'#3a5a8a',e:'#ffe08a'}],['boar',{a:'#5a3a24',b:'#8a6a4a',c:'#f4ecd8',e:'#ff6a3a'}]],
  a:[['griffin',{a:'#c89a5a',b:'#f4ecd8',c:'#f2b632',e:'#1d1633'}],['owl',{a:'#7a5a3a',b:'#d9c09a',c:'#f2b632',e:'#f5c542'}],['wyvern',{a:'#3f8a4a',b:'#a8d870',c:'#2b5a30',e:'#f5c542'}]]},
 {g:[['yeti',{a:'#eef4ff',b:'#9ab0d0',c:'#5a6a8a',e:'#7fd3f7'}],['wolf',{a:'#dfe8f4',b:'#ffffff',c:'#8aa0c0',e:'#7fd3f7'}],['mammoth',{a:'#7a5a3a',b:'#a8845a',c:'#f4ecd8',e:'#1d1633'}]],
  a:[['wyvern',{a:'#7fb8e0',b:'#dff2ff',c:'#3a6a9a',e:'#ffffff'}],['owl',{a:'#eef4ff',b:'#ffffff',c:'#9ab0d0',e:'#f5c542'}],['bat',{a:'#5a6a8a',b:'#9ab0d0',c:'#3a4a6a',e:'#7fd3f7'}]]},
 {g:[['scorpion',{a:'#a0602a',b:'#d9a55a',c:'#5a2a10',e:'#ff3a3a'}],['basilisk',{a:'#6a8a3a',b:'#c8d88a',c:'#c9562c',e:'#ff3a3a'}],['wolf',{a:'#c8a06a',b:'#f0dcb0',c:'#7a5a3a',e:'#f5c542'}]],
  a:[['roc',{a:'#7a5a3a',b:'#f4ecd8',c:'#f2b632',e:'#1d1633'}],['wyvern',{a:'#d9a55a',b:'#f6dc94',c:'#9c642a',e:'#ff3a3a'}],['griffin',{a:'#e9c46a',b:'#ffffff',c:'#c9921f',e:'#1d1633'}]]},
 {g:[['golem',{a:'#3b2c2c',b:'#5e4c4c',c:'#ff7a1a',e:'#ffd36b'}],['salamander',{a:'#e8463c',b:'#f5c542',c:'#7a1f1a',e:'#fff3c4'}],['wolf',{a:'#2a1e22',b:'#5a2a2a',c:'#ff5a2a',e:'#ff3a1a'}]],
  a:[['phoenix',{a:'#e8463c',b:'#f5c542',c:'#fff3c4',e:'#1d1633'}],['wyvern',{a:'#8a1f1a',b:'#e8463c',c:'#3a0a0a',e:'#f5c542'}],['bat',{a:'#3a1414',b:'#7a2a2a',c:'#ff7a1a',e:'#ffd36b'}]]},
 {g:[['gargoyle',{a:'#8a8aa6',b:'#c3c3dc',c:'#5a5a78',e:'#f5e08a'}],['golem',{a:'#e6e0f6',b:'#ffffff',c:'#f2b632',e:'#7fd3f7'}],['basilisk',{a:'#b79be8',b:'#f1e4fb',c:'#f2b632',e:'#f5c542'}]],
  a:[['serpent',{a:'#f2b632',b:'#fff3c4',c:'#c9562c',e:'#1d1633'}],['griffin',{a:'#ffffff',b:'#f1e4fb',c:'#f2b632',e:'#3a6fd8'}],['phoenix',{a:'#7fd3f7',b:'#ffffff',c:'#f5e08a',e:'#1d1633'}]]},
];
const BOSSDEF=[{type:'bear',name:'الدب الأسطوري العملاق',pal:{a:'#4a2e1c',b:'#7a5434',c:'#8ad8ff',e:'#7ae0ff'}},{type:'yeti',name:'ملك الجليد',pal:{a:'#ffffff',b:'#7fa0c8',c:'#3a5a8a',e:'#38e0f0'}},{type:'scorpion',name:'ملك العقارب',pal:{a:'#5a2a10',b:'#c88a3a',c:'#2a1006',e:'#ff2a2a'}},{type:'wyvern',name:'التنين الأحمر',pal:{a:'#a01e1a',b:'#f08a2a',c:'#3a0806',e:'#ffe08a'}},{type:'serpent',name:'تنين الرعد',pal:{a:'#f2b632',b:'#ffffff',c:'#3a6fd8',e:'#e8464f'}}];
function hueShift(hex,dh,dl){const[r,g,b]=rgb(hex).map(v=>v/255),mx=Math.max(r,g,b),mn=Math.min(r,g,b);let h=0,s=0,l=(mx+mn)/2;if(mx!==mn){const d=mx-mn;s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;h*=60}return`hsl(${(h+dh+360)%360},${Math.round(s*100)}%,${Math.max(5,Math.min(95,Math.round(l*100+dl)))}%)`}
function species(si){const st=STAGES[si],P=POOLS[st.b],r=si%PER,G0=P.g[r%3],A0=P.a[(r+Math.floor(r/3))%3],dh=((si*37)%30)-15,dl=((si*11)%10)-5;
  const pal=p=>({a:hueShift(p.a,dh,dl),b:hueShift(p.b,dh,dl),c:hueShift(p.c,dh/2,0),e:p.e});
  const gb=G0[0],ab=A0[0];
  return{g:{type:gb,pal:pal(G0[1]),beh:gb==='boar'||gb==='mammoth'?'charge':gb==='golem'||gb==='treant'?'slow':'walk',armored:!!ARMOR[gb],hp:gb==='treant'||gb==='yeti'||gb==='mammoth'||gb==='golem'?2:1,name:CRNAME[gb],seed:si*2},
         a:{type:ab,pal:pal(A0[1]),beh:ab==='roc'||ab==='griffin'?'dive':ab==='serpent'||ab==='wyvern'?'swoop':'fly',armored:false,hp:1,name:CRNAME[ab],seed:si*2+1}}}
const BEH_NAME={walk:'يتجوّل ويحرس طريقه',charge:'يندفع نحوك بسرعة',slow:'بطيء لكنه قوي',fly:'يطير فوقك',dive:'ينقضّ من السماء',swoop:'يحلّق بسرعة'};
const CRC={};
function crSprite(type,fr,pal,sc,key,nfr){if(RIGS[type])return rigSprite(type,fr,pal,sc,key,nfr);
  sc=sc||1;nfr=nfr||4;const K=(key||type+JSON.stringify(pal))+'|'+fr+'|'+sc+'|'+nfr;if(CRC[K])return CRC[K];
  const[bw,bh]=CRDEF[type],W=Math.round(bw*sc),H=Math.round(bh*sc),cv=mkc(W,H),g=cv.getContext('2d'),p=fr/nfr*Math.PI*2,eyes=[];
  g.save();g.scale(sc,sc);g.lineCap='round';g.lineJoin='round';
  const E=(x,y,rx,ry,c,rot)=>{g.fillStyle=c;g.beginPath();g.ellipse(x,y,Math.max(.5,rx),Math.max(.5,ry),rot||0,0,7);g.fill()};
  const Po=(pts,c)=>{g.fillStyle=c;g.beginPath();pts.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill()};
  const L=(x1,y1,x2,y2,w,c)=>{g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(x1,y1);g.lineTo(x2,y2);g.stroke()};
  const Q=(pts,w,c)=>{g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length-1;i+=2)g.quadraticCurveTo(pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1]);g.stroke()};
  const leg=(x,y,len,ang,w,c)=>{const kx=x+Math.sin(ang)*len*.5,ky=y+len*.5,fx=kx+Math.sin(ang*.6)*len*.5,fy=y+len;L(x,y,kx,ky,w,c);L(kx,ky,fx,fy,w*.85,c);return[fx,fy]};
  const wing=(sx,sy,span,flap,c,c2,feath)=>{const ty=sy-span*.55*flap,tx=sx+span*.15;Po([[sx-3,sy],[tx-span*.25,ty-2],[tx+span*.55,ty+span*.05],[sx+span*.45,sy+3]],c);if(feath)for(let k=0;k<4;k++)L(tx-span*.2+k*span*.2,ty+k*.5,tx-span*.1+k*span*.22,ty+span*.25+k,1.2,c2)};
  const a=pal.a,b=pal.b,c=pal.c;
  switch(type){
    case 'horse':{const s=Math.sin(p),q=Math.cos(p),dk=mix(a,'#000000',.25);leg(11,18,11,s*.8,2.6,dk);leg(26,18,11,q*.8,2.6,dk);Q([[28,13],[33,16],[32,24]],3,c);E(18,15,10,5.5,a);E(10,14,5,5.5,a);Po([[7,12],[4,5],[8,4],[12,11]],a);E(4,6.5,4,2.6,a,-.4);E(1.5,8,2,1.8,a);Po([[6,3],[7,0],[8,4]],a);Q([[8,4],[10,8],[12,12]],2.5,c);E(19,11,4.2,1.6,'#8a2a2a');E(17,17,6,2,b);leg(14,18,11,-s*.8,2.6,a);leg(29,18,11,-q*.8,2.6,a);eyes.push([3,5]);break}
    case 'wolf':{const s=Math.sin(p);Q([[30,10],[36,4+s*2],[37,2+s*3]],3,a);leg(13,13,10,s*.6,3,a);leg(27,13,10,-s*.6,3,a);E(20,12,11,5.5,a);E(12,12,5,5.5,a);E(27,11.5,6,5.5,a);E(19,15,8,2.2,b);leg(10,14,9,-s*.6,3,c);leg(25,14,9,s*.6,3,c);
      E(7,8,4.5,4,a);Po([[4,7],[0,10],[1,11.5],[5,11]],a);Po([[6,5],[7,0],[10,5]],a);Po([[8,5],[10,1],[11,6]],c);eyes.push([5,7]);break}
    case 'treant':{const s=Math.sin(p)*2;L(13,34,11+s,42,4,a);L(20,34,22-s,42,4,a);Po([[10,12],[22,10],[24,34],[9,35]],a);L(11,17,3,10+s,3,a);L(3,10+s,1,6+s,2,a);L(22,17,30,12-s,3,a);L(30,12-s,32,8-s,2,a);
      [[16,8,10],[8,11,7],[25,9,7],[16,2,6]].forEach(([x,y,r])=>E(x,y,r,r*.8,b));[[12,4],[20,6],[9,10],[24,7]].forEach(([x,y])=>E(x,y,2.4,2,c));L(13,24,13,30,1,'#3a2410');L(18,26,19,32,1,'#3a2410');E(16,27,3,1.6,'#2a1608');eyes.push([13,20],[18,20]);break}
    case 'boar':{const s=Math.sin(p);leg(12,15,7,s*.7,3.5,a);leg(26,15,7,-s*.7,3.5,a);E(19,13,12,7,a);for(let x=10;x<28;x+=3)Po([[x,6],[x+1.5,2],[x+3,6.5]],c==='#f4ecd8'?'#3a2414':pal.c);E(7,14,5.5,5,a);E(2,16,2.4,2.2,b);L(4,17,1.5,12,1.6,'#f4ecd8');leg(10,16,7,-s*.7,3.5,b);leg(24,16,7,s*.7,3.5,b);Q([[31,11],[34,9],[33,13]],1.5,a);eyes.push([6,12]);break}
    case 'yeti':{const s=Math.sin(p)*3;L(11,30,10+s/2,39,5,a);L(20,30,21-s/2,39,5,a);E(16,21,10,12,a);E(16,8,6.5,6,a);E(15,9,4.2,3.6,b);L(6,15,3,28+s,5,a);L(26,15,29,28-s,5,a);E(3,29+s,2.6,2.2,b);E(29,29-s,2.6,2.2,b);Po([[10,4],[8,0],[12,3]],c);Po([[20,3],[23,0],[21,5]],c);L(13,12,17,12,1,c);eyes.push([13,8],[17,8]);break}
    case 'mammoth':{const s=Math.sin(p);leg(14,22,12,s*.4,5,a);leg(34,22,12,-s*.4,5,a);E(26,17,16,12,a);E(11,14,8,8,a);E(15,13,4,7,b);Q([[6,18],[2,26],[6,32+s]],3.5,a);Q([[9,20],[2,24],[1,18]],2,'#f4ecd8');leg(18,22,12,-s*.4,5,c);leg(38,22,12,s*.4,5,c);for(let x=18;x<40;x+=4)L(x,8,x-1,22,1,c);eyes.push([8,11]);break}
    case 'scorpion':{const s=Math.sin(p);for(let k=0;k<3;k++){L(12+k*5,16,9+k*5+s*(k%2?1:-1),23,1.5,c);L(13+k*5,16,16+k*5-s*(k%2?1:-1),23,1.5,c)}E(18,16,10,5,a);E(27,15,6,4,a);E(8,16,5,4,a);
      Q([[30,13],[36,8],[35,2]],4,a);Q([[35,2],[32,-1],[28,3]],3,a);Po([[28,2],[25,5],[29,5]],c);L(6,15,2,11,2.5,a);E(2,9,3.5,2.6,a);Po([[0,7],[-1,10],[3,10]],c);for(let x=10;x<30;x+=4)L(x,12,x,19,1,b);eyes.push([6,14]);break}
    case 'basilisk':{const s=Math.sin(p);leg(14,12,7,s*.8,2.5,a);leg(30,12,7,-s*.8,2.5,a);Q([[34,11],[42,10+s*2],[49,13+s*2]],3,a);E(22,11,14,4.5,a);E(5,10,5.5,4,a);Po([[1,10],[-1,12],[3,12]],a);for(let x=8;x<36;x+=4)Po([[x,7],[x+2,1+(x%8?1:0)],[x+4,7]],c);E(22,13.5,10,1.6,b);leg(11,13,7,-s*.8,2.5,b);leg(27,13,7,s*.8,2.5,b);eyes.push([4,9]);break}
    case 'golem':{const s=Math.sin(p)*2;L(11,28,10+s,37,6,a);L(21,28,22-s,37,6,a);Po([[6,12],[26,11],[25,28],[7,29]],a);Po([[10,2],[21,2],[22,11],[9,11]],b);L(4,13,2,27+s,6,a);L(28,13,30,27-s,6,a);E(2,28+s,3.5,3,b);E(30,28-s,3.5,3,b);Po([[12,15],[20,14],[19,22],[13,23]],b);eyes.push([13,6],[18,6]);break}
    case 'salamander':{const s=Math.sin(p);leg(12,9,6,s*.9,2.2,a);leg(28,9,6,-s*.9,2.2,a);Q([[32,8],[40,6+s*2],[45,10+s*2]],3,a);E(20,8,13,4,a);E(5,8,5.5,3.6,a);for(let x=10;x<30;x+=5)E(x,6,1.6,1.2,c);E(20,10,9,1.4,b);leg(9,10,6,-s*.9,2.2,b);leg(25,10,6,s*.9,2.2,b);eyes.push([4,7]);break}
    case 'gargoyle':{const s=Math.sin(p)*2;Po([[15,9],[29,2+s],[27,12],[24,20]],c);leg(10,22,8,s*.3,3,a);leg(18,22,8,-s*.3,3,a);E(14,18,8,8,a);E(9,9,5,5,a);Po([[6,6],[4,0],[9,5]],c);Po([[11,5],[13,0],[13,6]],c);E(6,11,2.5,2,b);L(7,18,3,26,2.5,a);eyes.push([7,8]);break}
    case 'griffin':{const f=Math.sin(p);wing(22,15,30,f,b,c,1);leg(16,21,8,.3,2,c);leg(30,21,8,-.2,3,a);E(26,18,11,6,a);E(16,16,6,6,b);E(9,11,4.5,4,b);Po([[5,10],[1,13],[5,13]],c);Q([[36,17],[44,14],[47,18]],2,a);E(47,18,2,2,c);wing(24,14,26,-f*.6+.2,mix(b,'#000000',.15),c,1);eyes.push([8,10]);break}
    case 'owl':{const f=Math.sin(p);wing(10,13,16,f,a,b,1);E(16,15,8,9,a);E(16,10,6.5,5.5,b);Po([[11,6],[9,1],[13,5]],a);Po([[21,6],[23,1],[19,5]],a);Po([[15,12],[17,12],[16,15]],c);L(13,24,12,27,1.5,c);L(19,24,20,27,1.5,c);wing(20,13,16,-f+.2,mix(a,'#000000',.2),b,1);E(13,10,2,2,pal.e);E(19,10,2,2,pal.e);eyes.push([13,10],[19,10]);break}
    case 'wyvern':{const f=Math.sin(p);wing(22,14,32,f,mix(a,'#000000',.2),c,0);Q([[33,17],[42,19],[50,24]],3,a);Po([[48,22],[52,21],[50,26]],c);E(25,17,10,5,a);E(25,19,7,2,b);Q([[17,15],[12,11],[8,9]],4,a);E(5,9,5,3.5,a);Po([[6,6],[9,2],[9,7]],c);Po([[1,9],[-1,11],[3,11]],a);leg(24,21,7,.2,2,a);wing(24,13,30,-f*.7+.1,a,c,0);for(let k=0;k<3;k++)L(24,13,34+k*5,13-30*.5*(-f*.7+.1)+k*3,1,c);eyes.push([4,8]);break}
    case 'bat':{const f=Math.sin(p);const wy=9-f*7;Po([[15,9],[2,wy],[4,wy+5],[8,wy+3],[10,wy+7],[15,12]],a);Po([[17,9],[30,wy],[28,wy+5],[24,wy+3],[22,wy+7],[17,12]],a);E(16,10,4,5.5,b);Po([[13,5],[13,1],[15,5]],a);Po([[19,5],[19,1],[17,5]],a);eyes.push([14,8],[18,8]);break}
    case 'roc':{const f=Math.sin(p);wing(22,12,36,f,a,b,1);Po([[34,12],[46,9],[46,17]],a);E(26,13,10,4.5,a);E(16,11,4.5,4,b);Po([[12,10],[8,13],[12,13]],c);leg(24,16,6,.2,1.5,c);wing(24,11,32,-f*.6+.2,mix(a,'#000000',.2),b,1);eyes.push([15,10]);break}
    case 'phoenix':{const f=Math.sin(p);for(let k=0;k<3;k++)Q([[30,16],[40+k*3,14+k*4+f*2],[50,12+k*6+f*3]],2.5-k*.5,k%2?c:b);wing(22,14,32,f,a,b,1);E(25,16,8,5,a);E(17,12,4.5,4,a);Po([[13,11],[9,13],[13,14]],c);for(let k=0;k<3;k++)Po([[16+k*2,9],[15+k*3,2+k],[19+k*2,9]],b);wing(24,13,28,-f*.6+.2,b,c,1);eyes.push([16,11]);break}
    case 'bear':{const s=Math.sin(p),dk=mix(a,'#000000',.3);leg(34,20,10,-s*.5,5,dk);leg(14,20,10,s*.5,5,dk);E(24,17,15,9.5,a);E(14,13.5,9,9.5,a);E(35,15,8.5,9,a);E(24,22,11,3.6,b);
      for(let k=0;k<5;k++)Po([[16+k*4.4,9-(k%2)],[18+k*4.4,1+(k%2)*2],[20+k*4.4,9]],c);E(7,14.5,6,5.4,a);E(2.6,16.6,3,2.5,b);E(9.4,9.2,2,2,a);E(5.2,9.4,1.9,1.9,a);L(12,15,17,21,1.3,c);L(27,12,30,19,1.3,c);L(33,13,37,18,1,c);
      leg(31,21,10,s*.5,5,a);leg(12,21,10,-s*.5,5,a);E(1.2,16,1,.8,'#1a1010');eyes.push([4.6,12.6]);break}
    case 'serpent':{const ph=p;for(let i=60;i>=8;i-=2){const r=1.8+(60-i)/52*4.2,y=13+Math.sin(i*.16-ph)*7;E(i,y,r,r,a);if(i%6===0)E(i,y+r*.5,r*.6,r*.4,b)}const hy=13+Math.sin(8*.16-ph)*7;E(5,hy,5.5,4.5,a);Po([[2,hy-3],[0,hy-8],[5,hy-4]],c);Po([[6,hy-3],[7,hy-9],[9,hy-3]],c);Q([[1,hy+2],[-1,hy+7],[2,hy+10]],1,c);eyes.push([4,hy-1|0]);break}
  }
  g.restore();autoVolume(g,W,H,{rm:Math.max(3,Math.min(W,H)*.16)});
  const im=g.getImageData(0,0,W,H),d=im.data,A=(x,y)=>x>=0&&y>=0&&x<W&&y<H&&d[(y*W+x)*4+3]>120,ol=toA(mix(pal.a,'#05030c',.62)),out=new Uint8ClampedArray(d.length);
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=(y*W+x)*4;if(A(x,y)){let k=1;if(!A(x,y-1))k=1.28;else if(!A(x,y-sc-1)||!A(x-1,y))k=1.12;if(!A(x,y+1))k=.58;else if(!A(x,y+sc+1)||!A(x+1,y))k=.78;if(k===1&&((x*3+y*5)%7===0))k=.9;
      out[i]=Math.min(255,d[i]*k);out[i+1]=Math.min(255,d[i+1]*k);out[i+2]=Math.min(255,d[i+2]*k);out[i+3]=255}
    else if(A(x-1,y)||A(x+1,y)||A(x,y-1)||A(x,y+1)){out[i]=ol[0];out[i+1]=ol[1];out[i+2]=ol[2];out[i+3]=215}}
  im.data.set(out);g.putImageData(im,0,0);
  eyes.forEach(([x,y])=>{const X=Math.round(x*sc),Y=Math.round(y*sc),z=Math.max(1,Math.round(sc));g.fillStyle=pal.e;g.fillRect(X,Y,z*2,z*2);g.fillStyle='#ffffff';g.fillRect(X,Y,z,z)});
  return CRC[K]={cv,W,H};
}
function monSprite(si,k,fr){const s=species(si)[k];return crSprite(s.type,fr||0,s.pal,1,'s'+si+k)}
function bossSprite(b,fr){const B=BOSSDEF[b];return crSprite(B.type,fr||0,B.pal,2,'boss'+b)}

function stIcon(st){const c=st.ch.join(' ');return st.o.boss?'sword':/treasure/.test(c)?'gift':/castle/.test(c)?'house':/bridge/.test(c)?'map':/cave/.test(c)?'lantern':/tower/.test(c)?'flame':/ruins|pyramid/.test(c)?'sun':/floating|movers/.test(c)?'feather':st.time==='night'?'moon':'star'}
function stFeatures(st){const f=[TIME_NAME[st.time]];if(st.wx)f.push(WX_NAME[st.wx]);[...new Set(st.ch.map(c=>c.split(':')[0]))].forEach(k=>{if(CH_NAME[k]&&k!=='flat')f.push(CH_NAME[k])});return f}
function themeFor(si){const st=STAGES[si],b=st.b,base=WORLDS[b];let sky=base.sky;
  if(st.time==='night')sky=b===3?['#0e0612','#1e0c20','#34142a','#4e1c2a']:SKY_T.night;else if(st.time==='dusk')sky=b===3?['#2a0e1a','#5a1e26','#9a3a2a','#d8702e']:SKY_T.dusk;
  const th=Object.assign({},base,{sky,night:st.time==='night',dusk:st.time==='dusk'});
  if(th.night)th.cloud=b===3?'#3a2430':'#2a3360';else if(th.dusk)th.cloud=b===3?'#7a3a3a':'#e8a8a0';return th}
function drawMonCanvas(cv,spr,s){cv.width=spr.W*s;cv.height=spr.H*s;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;c.drawImage(spr.cv,0,0,spr.W*s,spr.H*s)}

/* ================= WORLD BUILD ================= */
const TS=16,WH=16,GR=11,HZ=(GR+1)*TS;
const T={E:0,G:1,B:2,P:3,BR:4,SP:5,IC:6,CL:7,CR:8,CB:9,SS:10};
const SOLID=[0,1,1,0,0,0,1,0,1,0,1],ONEW=[0,0,0,1,1,0,0,1,0,1,0];
let WORLD=null;const BK=512;
function bucketize(arr){const m=new Map();arr.forEach(e=>{const k=Math.floor(e.x/BK);(m.get(k)||m.set(k,[]).get(k)).push(e)});return m}
function near(V,x0,x1){const out=[];for(let k=Math.floor(x0/BK)-1;k<=Math.floor(x1/BK)+1;k++){const a=V.entB.get(k);if(a)for(const e of a)out.push(e)}if(V.dyn)for(const e of V.dyn)out.push(e);return out}
let DSTAMP=0;function decoNear(x0,x1){const W=WORLD,out=[];DSTAMP++;for(let k=Math.floor(x0/BK);k<=Math.floor(x1/BK);k++){const a=W.decoB.get(k);if(a)for(const d of a)if(d._s!==DSTAMP){d._s=DSTAMP;out.push(d)}}return out}
function world(){return WORLD||(WORLD=buildWorld())}
function buildWorld(){
  const cols=[],colB=[],deco=[],ents=[],starts=[],ends=[],dark=[];
  let X=0,R=Math.random,b=0,st=null;
  const ens=x=>{while(cols.length<=x){cols.push(new Uint8Array(WH));colB.push(b)}};
  const set=(x,y,t)=>{ens(x);if(y>=0&&y<WH)cols[x][y]=t};
  const gcol=(x,top,t)=>{ens(x);colB[x]=b;for(let y=Math.max(0,top);y<WH;y++)cols[x][y]=t||T.G};
  const pit=x=>{ens(x);colB[x]=b};
  const ri=(a,c)=>a+Math.floor(R()*(c-a+1));
  const D=o=>{o.b=b;o.si=st.i;deco.push(o)};
  const coins=(x,y,n,dx)=>{for(let k=0;k<n;k++)ents.push({type:'coin',x:(x+k*(dx||1))*TS+4,y:y*TS+3,w:8,h:10})};
  const mon=(x,top,k)=>{k=k||'g';const sp=species(st.i)[k],[w,h]=CRDEF[sp.type];ents.push({type:'mon',k,si:st.i,x:x*TS,y:top*TS-h-(k==='a'?40:0),w,h,hp:sp.hp})};
  const plant=(x,top)=>D({k:'plant',x:x*TS+8,y:top*TS,v:ri(0,2)});
  const flatN=(n,m)=>{for(let i=0;i<n;i++)gcol(X+i,GR,m);X+=n};
  const C={
    start(){for(let i=0;i<5;i++)gcol(X+i,GR);D({k:'sign',x:(X+2)*TS+8,y:GR*TS,n:st.i+1});X+=5},
    end(){for(let i=0;i<8;i++)gcol(X+i,GR);ents.push({type:'flag',si:st.i,x:(X+4)*TS,y:(GR-4)*TS,w:16,h:64});D({k:'lamp',x:(X+2)*TS+8,y:GR*TS});X+=8},
    flat(n){n=n||8;for(let i=0;i<n;i++){gcol(X+i,GR);if(i%3===1&&R()<.7)plant(X+i,GR)}coins(X+2,GR-2,3);if(n>=8)mon(X+n-3,GR,'g');X+=n},
    hills(){const hs=[0,1,2,3,2,1,0,2,1,0];hs.slice(0,ri(6,10)).forEach(h=>{const w=ri(3,5);for(let i=0;i<w;i++)gcol(X+i,GR-h);if(h>=2)coins(X+1,GR-h-2,2);if(w>=4&&R()<.5)mon(X+1,GR-h,'g');if(R()<.5)plant(X+1,GR-h);X+=w})},
    stairs(){const m=b===2?T.SS:T.B;for(let s=0;s<5;s++)for(let i=0;i<2;i++)gcol(X+s*2+i,GR-s,m);X+=10;for(let i=0;i<4;i++)gcol(X+i,GR-5,m);coins(X,GR-7,4);D({k:'torch',x:(X+2)*TS,y:(GR-6)*TS,free:1});mon(X+2,GR-5,'a');X+=4;for(let s=4;s>=0;s--)for(let i=0;i<2;i++)gcol(X+(4-s)*2+i,GR-s,m);X+=10},
    spikes(){for(let k=0;k<3;k++){const s=ri(2,3);for(let i=0;i<3;i++)gcol(X+i,GR);X+=3;for(let i=0;i<s;i++){gcol(X+i,GR);set(X+i,GR-1,T.SP)}coins(X,GR-4,s);X+=s}flatN(3)},
    gap(){flatN(2);const w=ri(4,6);for(let i=0;i<w;i++)pit(X+i);if(w>4){set(X+2,GR-1,T.P);set(X+3,GR-1,T.P)}mon(X+1,GR-1,'a');coins(X+1,GR-4,w-2);X+=w;flatN(2)},
    bridge(n,cr){n=n||16;flatN(3);D({k:'post',x:X*TS,y:GR*TS});const x0=X;for(let i=0;i<n;i++){pit(X+i);set(X+i,GR,cr?(R()<.55?T.CB:T.BR):T.BR);if(i%6===5)D({k:'pile',x:(X+i)*TS+8,y:(GR+1)*TS})}
      D({k:'rope',x0:x0*TS,x1:(x0+n)*TS,y:(GR-1)*TS+2});coins(x0+2,GR-2,Math.floor((n-3)/2),2);mon(x0+Math.floor(n/2),GR,'g');if(n>12)mon(x0+4,GR-2,'a');X+=n;D({k:'post',x:X*TS,y:GR*TS});flatN(3)},
    rbridge(n){C.bridge(n,1)},
    floating(n){n=n||16;flatN(2);let x=1,y=GR-1;const pt=b===4?T.CL:T.P;for(let i=0;i<n;i++)pit(X+i);while(x<n-3){const w=ri(2,3);for(let i=0;i<w;i++)set(X+x+i,y,pt);coins(X+x,y-2,w);x+=w+ri(2,3);y=Math.max(GR-5,Math.min(GR-1,y+ri(-2,2)))}mon(X+Math.floor(n/2),GR-3,'a');X+=n;flatN(3)},
    movers(){flatN(2);const n=18,k=b===4?'cloud':'wood';for(let i=0;i<n;i++)pit(X+i);
      ents.push({type:'mover',x:(X+1)*TS,y:(GR-1)*TS,w:40,h:8,ax:(X+1)*TS,ay:(GR-1)*TS,dx:64,dy:0,sp:.012,ph:0,k});
      ents.push({type:'mover',x:(X+8)*TS,y:(GR-3)*TS,w:40,h:8,ax:(X+8)*TS,ay:(GR-3)*TS,dx:0,dy:40,sp:.016,ph:1.5,k});
      ents.push({type:'mover',x:(X+12)*TS,y:(GR-1)*TS,w:40,h:8,ax:(X+12)*TS,ay:(GR-1)*TS,dx:56,dy:0,sp:.014,ph:3,k});
      coins(X+3,GR-4,3);coins(X+13,GR-4,3);mon(X+9,GR-4,'a');X+=n;flatN(3)},
    treetop(){const n=24;for(let i=0;i<n;i++){gcol(X+i,GR);if(i>3&&i<n-3&&i%5===2)set(X+i,GR-1,T.SP)}
      [3,11,19].forEach((tx,k)=>{const lv=k===1?[GR-3,GR-6,GR-9]:[GR-3,GR-6];D({k:'trunk',x:(X+tx)*TS+8,y:GR*TS,h:(GR-lv[lv.length-1]+1)*TS});lv.forEach(ly=>{for(let i=-1;i<=1;i++)set(X+tx+i,ly,T.P);D({k:'canopy',x:(X+tx)*TS+8,y:ly*TS})});coins(X+tx-1,lv[lv.length-1]-2,3)});
      mon(X+7,GR,'g');mon(X+15,GR,'g');mon(X+11,GR-6,'a');X+=n},
    cave(){const n=24,m=b===2?T.SS:T.G,x0=X;for(let i=0;i<n;i++){gcol(X+i,GR-(i>4&&i<n-4&&i%7===3?1:0),m);const ct=ri(2,3);for(let y=0;y<ct;y++)set(X+i,y,m);if(R()<.4)D({k:'stal',x:(X+i)*TS+8,y:ct*TS})}
      for(let i=8;i<11;i++)set(X+i,GR-3,T.P);for(let i=15;i<18;i++)set(X+i,GR-4,T.P);coins(X+8,GR-5,3);coins(X+15,GR-6,3);
      for(let i=5;i<n-3;i+=6)D({k:'crystal',x:(X+i)*TS+8,y:GR*TS});mon(X+6,GR,'g');mon(X+18,GR,'g');
      D({k:'cavebg',x:x0*TS,y:0,w:n*TS,h:HZ,big:1});dark.push([x0*TS,(x0+n)*TS,.86]);X+=n},
    treasure(){const n=16,m=b===2?T.SS:T.B,x0=X;for(let i=0;i<n;i++){gcol(X+i,GR,m);for(let y=0;y<2;y++)set(X+i,y,m)}
      for(let r=0;r<3;r++)coins(X+3,GR-2-r*2,10);ents.push({type:'chest',x:(X+n-3)*TS,y:GR*TS-15,w:20,h:15});
      D({k:'castlebg',x:x0*TS,y:0,w:n*TS,h:GR*TS,big:1,gold:1});for(let i=2;i<n;i+=5)D({k:'torch',x:(X+i)*TS+8,y:(GR-4)*TS});dark.push([x0*TS,(x0+n)*TS,.5]);X+=n},
    castle(){const m=b===2?T.SS:T.B;D({k:'facade',x:X*TS,y:GR*TS,w:14*TS,big:1});for(let i=0;i<10;i++)gcol(X+i,GR);X+=10;
      const n=34,x0=X;for(let i=0;i<n;i++){gcol(X+i,GR,m);for(let y=0;y<3;y++)set(X+i,y,m)}
      [[5,2],[13,2],[24,3]].forEach(([p,h])=>{for(let y=1;y<=h;y++)set(X+p,GR-y,m)});
      for(let i=8;i<11;i++)set(X+i,GR-1,T.SP);for(let i=17;i<20;i++)set(X+i,GR-1,T.SP);
      for(let i=7;i<12;i++)set(X+i,GR-4,T.P);for(let i=16;i<21;i++)set(X+i,GR-4,T.P);for(let i=27;i<31;i++)set(X+i,GR-3,T.P);
      coins(X+7,GR-6,5);coins(X+16,GR-6,5);mon(X+2,GR,'g');mon(X+14,GR,'g');mon(X+21,GR,'g');mon(X+18,GR-5,'a');
      D({k:'castlebg',x:x0*TS,y:0,w:n*TS,h:GR*TS,big:1});for(let i=2;i<n;i+=5)D({k:'torch',x:(X+i)*TS+8,y:(GR-5)*TS});for(let i=4;i<n;i+=9)D({k:'banner',x:(X+i)*TS+8,y:3*TS});dark.push([x0*TS,(x0+n)*TS,.55]);X+=n},
    tower(){const n=18,m=b===2?T.SS:T.B,x0=X;for(let i=0;i<n;i++){gcol(X+i,GR);if(i>=3&&i<n-3)set(X+i,GR-1,T.SP)}
      const L=[[2,GR-2],[5,GR-4],[2,GR-6],[5,GR-8],[9,GR-9],[13,GR-7],[10,GR-5],[13,GR-3]];
      L.forEach(([lx,ly])=>{for(let i=0;i<3;i++)set(X+lx+i,ly,m);coins(X+lx,ly-2,2)});
      D({k:'towerbg',x:(x0+1)*TS,y:GR*TS,w:(n-2)*TS,big:1});D({k:'torch',x:(X+9)*TS+8,y:(GR-11)*TS});mon(X+7,GR-6,'a');mon(X+12,GR-10,'a');X+=n},
    ruins(){const n=28;let i=0;while(i<n){const h=ri(2,4);for(let k=0;k<2;k++)gcol(X+i+k,GR-h,T.SS);coins(X+i,GR-h-2,2);if(R()<.5)D({k:'arch',x:(X+i)*TS,y:(GR-h)*TS});if(R()<.35)mon(X+i,GR-h,'a');i+=2;const g=ri(2,3);for(let k=0;k<g;k++){gcol(X+i+k,GR);set(X+i+k,GR-1,T.SP)}i+=g}
      for(let k=0;k<3;k++)gcol(X+i+k,GR);mon(X+i+1,GR,'g');X+=i+3},
    pyramid(){const H=7;let i=0;for(let s=0;s<=H;s++){for(let k=0;k<2;k++)gcol(X+i+k,GR-s,T.SS);if(s===3)mon(X+i,GR-s,'g');i+=2}for(let k=0;k<3;k++)gcol(X+i+k,GR-H,T.SS);coins(X+i,GR-H-2,3);D({k:'torch',x:(X+i+1)*TS+8,y:(GR-H-1)*TS,free:1});i+=3;for(let s=H;s>=0;s--){for(let k=0;k<2;k++)gcol(X+i+k,GR-s,T.SS);i+=2}mon(X+i-6,GR-2,'a');X+=i},
    ice(n){n=n||16;for(let i=0;i<n;i++){gcol(X+i,GR);set(X+i,GR,T.IC);if(R()<.25)plant(X+i,GR)}coins(X+3,GR-2,Math.floor((n-6)/2),2);mon(X+Math.floor(n/2),GR,'g');X+=n},
    lava(){flatN(2);const n=20;let i=0;while(i<n){const g=ri(2,3);for(let k=0;k<g&&i<n;k++,i++)pit(X+i);ents.push({type:'pod',x:(X+i-1)*TS+2,y:HZ,w:12,h:12,ph:R()*6});if(i<n-1){const h=ri(0,1);for(let k=0;k<2;k++,i++)gcol(X+i,GR-h);coins(X+i-2,GR-h-2,2)}}X+=n;flatN(3)},
    cloudcastle(){flatN(2);const n=24;D({k:'facade',x:(X+4)*TS,y:(GR-1)*TS,w:16*TS,big:1,gold:1});for(let i=0;i<n;i++)pit(X+i);
      [[1,GR],[4,GR-2],[8,GR-3],[12,GR-3],[16,GR-2],[20,GR-1]].forEach(([x,y])=>{for(let k=0;k<3;k++)set(X+x+k,y,T.CL);coins(X+x,y-2,3)});mon(X+10,GR-5,'a');X+=n;flatN(3)},
    boss(){const m=b===2?T.SS:T.B,n=24,x0=X;for(let i=0;i<n;i++){gcol(X+i,GR,m);for(let y=0;y<2;y++)set(X+i,y,m)}
      for(let y=2;y<GR;y++)set(X+n-1,y,m);
      {const bd=CRDEF[BOSSDEF[b].type],bw=bd[0]*2,bh=bd[1]*2;ents.push({type:'boss',b,si:st.i,x:(X+n-4)*TS-bw,y:GR*TS-bh,w:bw,h:bh,x0:(X+1)*TS,x1:(X+n-1)*TS,hp:4+Math.floor(b/2),door:X+n-1,vx:-.7,vy:0})}
      for(let i=4;i<8;i++)set(X+i,GR-4,T.P);for(let i=n-10;i<n-6;i++)set(X+i,GR-4,T.P);
      D({k:'castlebg',x:x0*TS,y:0,w:n*TS,h:GR*TS,big:1,boss:1});for(let i=2;i<n;i+=6)D({k:'torch',x:(X+i)*TS+8,y:(GR-5)*TS});dark.push([x0*TS,(x0+n)*TS,.55]);X+=n},
  };
  STAGES.forEach(s=>{st=s;b=s.b;R=rng(s.i*977+13);starts[s.i]=X;
    if(s.i%PER===0&&b>0){for(let i=0;i<4;i++)gcol(X+i,GR);ents.push({type:'gate',r:b,col:X+2,x:(X+2)*TS,y:(GR-6)*TS,w:TS,h:6*TS});X+=4}
    C.start();const base=s.ch.filter(c=>c!=='boss');for(let r=0;r<3;r++){base.forEach(c=>{const[k,a]=c.split(':');C[k](a?+a:undefined)});if(r<2){C.flat(ri(9,14));ents.push({type:'cpost',x:(X-5)*TS,y:(GR-3)*TS,w:16,h:48})}}if(s.o.boss)C.boss();C.end();ends[s.i]=X});
  deco.forEach(d=>{if(d.k==='rope')d.x=d.x0});const decoB=new Map();deco.forEach(d=>{const x0=d.x-90,x1=(d.k==='rope'?d.x1:d.x+(d.w||70));for(let k=Math.floor(x0/BK);k<=Math.floor(x1/BK);k++){(decoB.get(k)||decoB.set(k,[]).get(k)).push(d)}});
  for(let i=0;i<20;i++)gcol(X+i,GR);
  return{cols,colB,deco,decoB,ents,entB:bucketize(ents),starts,ends,dark,W:cols.length};
}

/* ================= TILES & ART ================= */
const TSET={};
function tileset(b){
  if(TSET[b])return TSET[b];const th=WORLDS[b],R=rng(b*31+7),S={};
  const mk=f=>{const c=mkc(16,16),x=c.getContext('2d');f(x);return c};
  const dirt=x=>{const g=x.createLinearGradient(0,0,0,16);g.addColorStop(0,th.dirt);g.addColorStop(1,th.dirtD);x.fillStyle=g;x.fillRect(0,0,16,16);for(let k=0;k<3;k++){const a=Math.floor(R()*12),c=3+Math.floor(R()*10);px(x,a,c,3,2,th.stone);px(x,a,c,3,1,mix(th.stone,'#ffffff',.3))}};
  S.fill=mk(dirt);
  S.top=mk(x=>{dirt(x);if(b===4){px(x,0,0,16,6,'#ffffff');for(let i=0;i<16;i+=5)px(x,i,6,4,2,'#f4eefe');px(x,0,0,16,1,'#ffffff')}
    else{px(x,0,0,16,2,th.grassL);px(x,0,2,16,3,th.grass);for(let i=0;i<16;i++){const l=(i*7+b)%5===0?4:(i*3)%4===0?2:0;if(l)px(x,i,5,1,l,th.grass)}px(x,0,0,16,1,mix(th.grassL,'#ffffff',.35));px(x,3,0,1,-2,th.grassL)}});
  const brick=(base,big)=>mk(x=>{const face=mix(base,'#000000',.12),hi=mix(base,'#ffffff',.22),mo=mix(base,'#000000',.55),rh=big?8:4;px(x,0,0,16,16,mo);for(let r=0;r<16/rh;r++){const o=r%2?(big?8:4):0;for(let c=-16;c<16;c+=(big?16:8)){px(x,c+o,r*rh,(big?15:7),rh-1,face);px(x,c+o,r*rh,(big?15:7),1,hi);if(R()<.3)px(x,c+o+2,r*rh+1,2,1,mix(base,'#000000',.25))}}});
  S.brick=brick(b===4?'#efe6d2':th.castle===undefined?'#999':mix(th.castle,'#5a5070',.25));
  S.ss=brick('#d9a55a',1);
  S.plat=mk(x=>{px(x,0,0,16,5,'#a8743a');px(x,0,0,16,1,'#d9a96a');px(x,0,5,16,1,'#4a2a10');px(x,2,6,2,5,'#6e4a2a');px(x,12,6,2,5,'#6e4a2a');px(x,3,2,1,1,'#4a2a10');px(x,12,2,1,1,'#4a2a10')});
  S.bridge=mk(x=>{px(x,0,0,16,4,'#b07a40');px(x,0,0,16,1,'#e0b070');px(x,7,0,1,4,'#4a2a10');px(x,15,0,1,4,'#4a2a10');px(x,0,4,16,1,'#2a1608');px(x,3,1,2,1,'#8a5a2a')});
  S.crumble=mk(x=>{px(x,0,0,16,4,'#8a5a2a');px(x,0,0,16,1,'#b07a40');px(x,5,0,1,4,'#2a1608');px(x,10,1,3,1,'#2a1608');px(x,12,2,1,2,'#2a1608');px(x,0,4,16,1,'#2a1608')});
  S.spike=mk(x=>{for(let k=0;k<4;k++){const bx=k*4;x.fillStyle='#1d1633';x.beginPath();x.moveTo(bx-.5,16);x.lineTo(bx+2,5);x.lineTo(bx+4.5,16);x.fill();x.fillStyle='#d3d9e3';x.beginPath();x.moveTo(bx+.5,16);x.lineTo(bx+2,7);x.lineTo(bx+2,16);x.fill();x.fillStyle='#7b8496';x.beginPath();x.moveTo(bx+2,7);x.lineTo(bx+3.5,16);x.lineTo(bx+2,16);x.fill()}});
  S.ice=mk(x=>{px(x,0,0,16,16,'#7fc8ee');px(x,0,0,16,3,'#e6f8ff');px(x,0,3,16,1,'#bfe9ff');for(let i=0;i<5;i++)px(x,3+i,6+i,1,1,'#d6f3ff');px(x,0,15,16,1,'#4f98c8')});
  S.cloud=mk(x=>{px(x,1,1,14,6,'#ffffff');px(x,0,2,16,4,'#ffffff');px(x,2,6,12,2,'#e2d6f6');px(x,3,0,4,1,'#ffffff');px(x,9,0,5,1,'#ffffff')});
  S.crate=mk(x=>{px(x,0,0,16,16,'#7a4a24');px(x,1,1,14,14,'#b07a40');px(x,1,7,14,2,'#7a4a24');px(x,7,1,2,14,'#7a4a24')});
  return TSET[b]=S;
}
const DSPR={};
function canopySprite(b){const k='can'+b;if(DSPR[k])return DSPR[k];const cv=mkc(80,34),c=cv.getContext('2d'),th=WORLDS[b];
  for(let y=-14;y<=14;y++)for(let x=-38;x<=38;x++){const q=x*x/1444+y*y/196;if(q>1)continue;const n=(x*7+y*13)&7;px(c,40+x,16+y,1,1,y<-5&&n<5?th.leafL:(q>.75&&y>2)||n===0?th.leafD:th.leaf)}return DSPR[k]=cv}
function bigDeco(d,th){
  if(d.cv)return d.cv;const w=d.w,h=d.k==='facade'?9*TS:d.h||GR*TS,cv=mkc(w,h),c=cv.getContext('2d'),R=rng(d.x|0);
  const base=d.gold?'#efe2c0':mix(th.castle,'#3a3050',.35);
  const bricks=(x0,y0,ww,hh,col,rh)=>{const face=col,mo=mix(col,'#000000',.35),hi=mix(col,'#ffffff',.12);px(c,x0,y0,ww,hh,mo);for(let y=0;y<hh;y+=rh){const o=(y/rh)%2?8:0;for(let x=-16;x<ww;x+=16){px(c,x0+x+o,y0+y,15,rh-1,face);px(c,x0+x+o,y0+y,15,1,hi)}}};
  if(d.k==='castlebg'){const wall=d.gold?'#c9b88a':mix(base,'#000000',.48);bricks(0,0,w,h,wall,8);
    for(let x=56;x<w;x+=112){px(c,x-7,0,14,h,mix(wall,'#ffffff',.1));px(c,x-9,40,18,4,mix(wall,'#ffffff',.18));px(c,x-9,h-10,18,10,mix(wall,'#000000',.2))}
    for(let x=24;x<w-20;x+=112){const wy=56;c.fillStyle=th.sky[1];c.fillRect(x,wy+8,18,30);c.beginPath();c.arc(x+9,wy+8,9,Math.PI,0);c.fill();px(c,x+8,wy,2,38,'#1d1633');px(c,x,wy+20,18,2,'#1d1633');c.strokeStyle=mix(wall,'#ffffff',.25);c.lineWidth=2;c.strokeRect(x-1,wy+7,20,32)}
    if(d.boss)for(let x=40;x<w;x+=96){px(c,x,48,22,70,'#8a1f1a');px(c,x,48,22,4,'#f2b632');px(c,x+8,72,6,10,'#f2b632')}
    const g=c.createLinearGradient(0,h-40,0,h);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.45)');c.fillStyle=g;c.fillRect(0,h-40,w,40);
    const g2=c.createLinearGradient(0,0,0,60);g2.addColorStop(0,'rgba(0,0,0,.5)');g2.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g2;c.fillRect(0,0,w,60)}
  else if(d.k==='cavebg'){const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,mix(th.dirtD,'#000000',.7));g.addColorStop(1,mix(th.dirtD,'#000000',.45));c.fillStyle=g;c.fillRect(0,0,w,h);
    for(let k=0;k<w*h/90;k++){const x=R()*w|0,y=R()*h|0;px(c,x,y,2+(R()*4|0),1+(R()*2|0),mix(th.stone,'#000000',.55+R()*.2))}
    for(let k=0;k<w/40;k++){const x=R()*w|0,y=40+R()*(h-80)|0;px(c,x,y,2,2,['#7fd3f7','#f29ccf','#f5c542'][k%3])}}
  else if(d.k==='towerbg'){const col=mix(base,'#000000',.2);bricks(0,40,w,h-40,col,8);for(let x=0;x<w;x+=16)px(c,x,28,10,12,col);px(c,0,38,w,4,mix(col,'#ffffff',.15));
    for(let y=60;y<h-30;y+=56)for(let x=26;x<w-20;x+=72){px(c,x,y,10,18,'#f5c542');px(c,x+4,y,2,18,'#7a4a20');px(c,x-2,y-3,14,3,mix(col,'#ffffff',.2))}
    const g=c.createLinearGradient(0,0,w,0);g.addColorStop(0,'rgba(0,0,0,.35)');g.addColorStop(.3,'rgba(0,0,0,0)');g.addColorStop(.8,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.45)');c.fillStyle=g;c.fillRect(0,0,w,h)}
  else if(d.k==='facade'){const col=d.gold?'#f4ead2':mix(base,'#000000',.08),roofC=d.gold?'#f2b632':th.roof;
    bricks(0,h-100,w,100,col,8);for(let x=0;x<w;x+=14)px(c,x,h-110,9,10,col);
    [[6,30,120],[w/2-22,44,140],[w-38,30,120]].forEach(([tx,tw,th2])=>{bricks(tx,h-th2,tw,th2,mix(col,'#ffffff',.06),8);px(c,tx+tw-4,h-th2,4,th2,'rgba(0,0,0,.2)');roof(c,tx+tw/2,h-th2,Math.ceil(tw/2)+3,roofC);
      for(let y=h-th2+16;y<h-30;y+=26)px(c,tx+tw/2-3,y,6,10,'#f5c542')});
    px(c,w-70,h-46,34,46,'#140e20');c.fillStyle='#140e20';c.beginPath();c.arc(w-53,h-46,17,Math.PI,0);c.fill();for(let x=w-68;x<w-38;x+=6)px(c,x,h-58,2,58,'#4a4060');
    px(c,w/2-1,h-200,2,20,'#1d1633');px(c,w/2+1,h-200,14,8,d.gold?'#e8464f':'#f08a2a')}
  else if(d.k==='arch'){}
  return d.cv=cv;
}
function drawDeco(c,d,cx,cy,t,th){
  const sx=Math.round(d.x-cx),sy=Math.round(d.y-cy);
  switch(d.k){
    case 'castlebg':case 'cavebg':c.drawImage(bigDeco(d,th),sx,sy);break;
    case 'towerbg':{const im=bigDeco(d,th);c.drawImage(im,sx,sy-im.height);break}
    case 'facade':{const im=bigDeco(d,th);c.drawImage(im,sx,sy-im.height);break}
    case 'plant':{const im=plantSprite(d.b,d.v);c.drawImage(im,sx-30,sy-76);break}
    case 'trunk':{const w=WORLDS[d.b];px(c,sx-7,sy-d.h,14,d.h,'#5a3418');px(c,sx-5,sy-d.h,4,d.h,'#7a4a24');for(let y=sy-d.h+6;y<sy;y+=11)px(c,sx-6,y,10,1,'#3a2410');px(c,sx-11,sy-4,22,4,'#5a3418');break}
    case 'canopy':c.drawImage(canopySprite(d.b),sx-40,sy-24);break;
    case 'stal':{const col=mix(WORLDS[d.b].stone,'#000000',.3);for(let y=0;y<10;y++)px(c,sx-Math.max(0,3-y/3),sy+y,Math.max(1,2*(3-y/3)),1,col);px(c,sx-1,sy+10+(Math.floor(t/400+d.x)%3),1,1,'#9fd8ff');break}
    case 'crystal':{const cc=['#7fd3f7','#bfe9ff','#f5c542','#ff6a5a','#f29ccf'][d.b];[[-5,10],[0,16],[5,9]].forEach(([dx,h])=>{for(let y=0;y<h;y++){const w=Math.max(1,Math.round(2.5*(1-y/h))+1);px(c,sx+dx-w,sy-y,w*2,1,y%4?cc:'#ffffff')}});break}
    case 'torch':px(c,sx-2,sy,4,8,'#3a2a20');px(c,sx-3,sy-2,6,3,'#6e4a2a');{const f=Math.floor(t/90+d.x)%3;px(c,sx-2,sy-8+f,4,6-f,'#f08a2a');px(c,sx-1,sy-10+f,2,5,'#f5c542');px(c,sx,sy-6,1,2,'#fff3c4')}break;
    case 'banner':{const col=['#2f6fd0','#3fae4a','#c9562c','#8a1f1a','#f2b632'][d.b];px(c,sx-9,sy-2,18,2,'#6e4a2a');px(c,sx-7,sy,14,34,col);px(c,sx-7,sy+34,7,4,col);px(c,sx,sy+34,7,4,col);px(c,sx-3,sy+10,6,8,'#f5c542');px(c,sx-7,sy,14,2,mix(col,'#ffffff',.3))}break;
    case 'sign':px(c,sx-1,sy-22,3,22,'#5a3418');px(c,sx-13,sy-30,26,14,'#1d1633');px(c,sx-12,sy-29,24,12,'#b07a40');px(c,sx-12,sy-29,24,1,'#e0b070');c.fillStyle='#1d1633';c.font='8px "Press Start 2P",monospace';c.textAlign='center';c.fillText(String(d.n),sx+1,sy-19);c.textAlign='start';break;
    case 'lamp':px(c,sx-1,sy-30,3,30,'#3a2a20');px(c,sx-4,sy-38,9,8,'#1d1633');px(c,sx-3,sy-37,7,6,'#f5c542');break;
    case 'post':px(c,sx-3,sy-24,6,24,'#5a3418');px(c,sx-2,sy-24,2,24,'#7a4a24');px(c,sx-4,sy-26,8,3,'#3a2410');break;
    case 'pile':px(c,sx-2,sy,4,40,'#4a2a10');break;
    case 'arch':px(c,sx-4,sy-34,40,6,'#c88a4a');px(c,sx-4,sy-34,40,1,'#f0c47a');break;
  }
}
function drawRope(c,d,cx,cy){const x0=d.x0-cx,x1=d.x1-cx;for(let x=Math.max(-2,Math.floor(x0));x<Math.min(GW+2,x1);x++){const u=(x-x0)%96/96,sag=Math.sin(u*Math.PI)*5;px(c,x,d.y-cy+sag,1,1,'#c89a5a');px(c,x,d.y-cy+sag+9,1,1,'#a0703a')}}
function drawTiles(c,cols,cx,cy){
  const x0=Math.max(0,Math.floor(cx/TS)),x1=Math.min(cols.length-1,Math.floor((cx+GW)/TS)+1);
  for(let X=x0;X<=x1;X++){const col=cols[X],ts=tileset(WORLD.colB[X]);for(let Y=0;Y<=GR;Y++){const t=col[Y];if(!t)continue;const sx=X*TS-cx,sy=Y*TS-cy;
    let im;switch(t){case 1:im=(Y===0||!SOLID[col[Y-1]])?ts.top:ts.fill;break;case 2:im=ts.brick;break;case 3:im=ts.plat;break;case 4:im=ts.bridge;break;case 5:im=ts.spike;break;case 6:im=ts.ice;break;case 7:im=ts.cloud;break;case 8:im=ts.crate;break;case 9:im=ts.crumble;break;case 10:im=ts.ss;break}
    c.drawImage(im,sx,sy);
    if(SOLID[t]){if(X>0&&!SOLID[cols[X-1][Y]])px(c,sx,sy,1,16,'rgba(0,0,0,.4)');if(X<cols.length-1&&!SOLID[cols[X+1][Y]])px(c,sx+15,sy,1,16,'rgba(0,0,0,.4)');if(Y<WH-1&&!SOLID[col[Y+1]]&&Y<GR)px(c,sx,sy+15,16,1,'rgba(0,0,0,.45)')}}}
}
function drawEnt(c,e,cx,cy,t,V){
  const sx=Math.round(e.x-cx),sy=Math.round(e.y-cy);
  switch(e.type){
    case 'coin':if(!e.got)coin(c,sx+4,sy,t+e.x*7);break;
    case 'chest':chest(c,sx,sy);if(e.open){px(c,sx,sy-6,20,6,'#b8742e');px(c,sx,sy-6,20,1,'#f5c542');if(Math.floor(t/200)%2)px(c,sx+8,sy-12,3,3,'#fff3c4')}break;
    case 'mover':if(e.k==='cloud'){px(c,sx,sy+1,e.w,6,'#ffffff');px(c,sx+3,sy-2,12,4,'#ffffff');px(c,sx+20,sy-3,14,5,'#ffffff');px(c,sx+2,sy+6,e.w-4,3,'#d8c8f2')}else{px(c,sx-1,sy-1,e.w+2,10,INK);px(c,sx,sy,e.w,8,'#a8743a');px(c,sx,sy,e.w,2,'#e0b070');for(let x=8;x<e.w;x+=10)px(c,sx+x,sy,1,8,'#5a3a1a');px(c,sx+e.w/2-1,sy-30,2,30,'rgba(200,160,100,.6)')}break;
    case 'mon':{if(e.dead)return;const fr=Math.floor(t/120+(e.x0||0)/37)%4,spr=monSprite(e.si,e.k,fr);
      if(e.k==='g'){c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(sx+e.w/2,sy+e.h,e.w*.38,2.5,0,0,7);c.fill()}
      if(e.flip){c.save();c.translate(sx+spr.W,0);c.scale(-1,1);c.drawImage(spr.cv,0,sy);c.restore()}else c.drawImage(spr.cv,sx,sy);
      if(e.hit>0&&Math.floor(t/50)%2){c.globalCompositeOperation='lighter';c.globalAlpha=.6;c.drawImage(spr.cv,e.flip?sx:sx,sy);c.globalAlpha=1;c.globalCompositeOperation='source-over'}
      if(species(e.si)[e.k].type==='phoenix'){c.globalCompositeOperation='lighter';const g=c.createRadialGradient(sx+e.w/2,sy+e.h/2,2,sx+e.w/2,sy+e.h/2,36);g.addColorStop(0,'rgba(255,160,60,.35)');g.addColorStop(1,'rgba(255,160,60,0)');c.fillStyle=g;c.fillRect(sx-12,sy-12,e.w+24,e.h+24);c.globalCompositeOperation='source-over'}break}
    case 'boss':{if(e.dead)return;const spr=bossSprite(e.b,Math.floor(t/140)%4);c.fillStyle='rgba(0,0,0,.32)';c.beginPath();c.ellipse(sx+e.w/2,GR*TS-cy+1,e.w*.4,4,0,0,7);c.fill();
      if(!(e.inv>0&&Math.floor(t/60)%2)){if(e.face>0){c.save();c.translate(sx+spr.W,0);c.scale(-1,1);c.drawImage(spr.cv,0,sy);c.restore()}else c.drawImage(spr.cv,sx,sy)}
      for(let i=0;i<e.hp;i++){px(c,sx+e.w/2-e.hp*5+i*10,sy-12,8,6,INK);px(c,sx+e.w/2-e.hp*5+i*10+1,sy-11,6,4,'#e8464f')}break}
    case 'cpost':{px(c,sx+6,sy+12,4,36,'#3a2a20');px(c,sx+7,sy+12,1,36,'#6e4a2a');px(c,sx+2,sy,12,13,INK);px(c,sx+3,sy+1,10,11,e.lit?'#f5c542':'#4a4060');if(e.lit){px(c,sx+5,sy+3,6,7,'#fff3c4');c.globalCompositeOperation='lighter';const g=c.createRadialGradient(sx+8,sy+6,2,sx+8,sy+6,34);g.addColorStop(0,'rgba(255,200,90,.45)');g.addColorStop(1,'rgba(255,200,90,0)');c.fillStyle=g;c.fillRect(sx-28,sy-28,72,72);c.globalCompositeOperation='source-over'}break}
    case 'pod':{const y=HZ-Math.max(0,Math.sin(e.ph))*96-cy;if(y>HZ-cy-4)return;const g=c.createRadialGradient(sx+6,y+6,1,sx+6,y+6,13);g.addColorStop(0,'#fff3c4');g.addColorStop(.45,'#f5c542');g.addColorStop(.8,'#f08a2a');g.addColorStop(1,'rgba(232,70,79,0)');c.fillStyle=g;c.fillRect(sx-8,y-8,28,30);break}
    case 'shot':circ(c,sx+5,sy+5,6,INK);circ(c,sx+5,sy+5,5,e.c||'#f5c542');circ(c,sx+3,sy+3,2,'#ffffff');break;
    case 'flag':{const done=(S.stars||{})[e.si]||(V&&V.done&&V.done[e.si]);px(c,sx-1,sy-1,4,66,INK);px(c,sx,sy,2,64,'#d3d9e3');const fy=done?sy+2:sy+40,col=done?'#3fae4a':'#e8464f';px(c,sx+3,fy-1,20,13,INK);px(c,sx+3,fy+(Math.floor(t/200)%2),19,11,col);px(c,sx+3,fy+4,19,1,'#ffffff');break}
    case 'gate':{const lift=e.open?Math.min(80,(e.lift||0)):0;px(c,sx-10,sy-14,36,14,'#4a4060');px(c,sx-10,sy-14,36,2,'#7a7090');px(c,sx-10,sy,8,e.h,'#4a4060');px(c,sx+18,sy,8,e.h,'#4a4060');
      for(let x=0;x<16;x+=4)px(c,sx+x,sy-lift,2,e.h,'#2a2238');for(let y=6;y<e.h;y+=14)px(c,sx,sy-lift+y,16,2,'#2a2238');
      if(!e.open){px(c,sx+2,sy+36,12,14,'#f2b632');px(c,sx+4,sy+30,8,7,'#1d1633');px(c,sx+5,sy+31,6,5,'#f2b632');px(c,sx+7,sy+41,2,4,'#1d1633');c.fillStyle='#fff3c4';c.font='7px "Press Start 2P",monospace';c.textAlign='center';c.fillText(String(WORLDS[e.r].cost),sx+8,sy-4);c.textAlign='start'}break}
  }
}

/* ================= LANDSCAPE (title / home) ================= */
const LCK={};
function landLayers(b,W,H,mode){
  const key=b+'_'+W+'_'+H+'_'+mode;if(LCK[key])return LCK[key];
  const th=Object.assign({},WORLDS[b],mode==='dusk'?{sky:SKY_T.dusk,dusk:true,cloud:'#e8a8a0'}:mode==='night'?{sky:SKY_T.night,night:true,cloud:'#2a3360'}:{});
  const gy=Math.round(H*.66),sky=mkc(W,H),c=sky.getContext('2d');
  const g=c.createLinearGradient(0,0,0,gy);g.addColorStop(0,th.sky[0]);g.addColorStop(.4,th.sky[1]);g.addColorStop(.75,th.sky[2]);g.addColorStop(1,th.sky[3]);c.fillStyle=g;c.fillRect(0,0,W,H);
  for(let y=Math.round(gy*.55);y<gy;y+=2)for(let x=(y/2)%2;x<W;x+=4)if(((x*7+y*3)%11)<2)px(c,x,y,1,1,'rgba(255,255,255,.06)');
  const mx=W*.72,my=gy*.34,R=Math.max(10,H*.06);const gl=c.createRadialGradient(mx,my,R*.6,mx,my,R*5);gl.addColorStop(0,th.night?'rgba(255,248,220,.35)':'rgba(255,226,170,.6)');gl.addColorStop(1,'rgba(255,226,170,0)');c.fillStyle=gl;c.fillRect(0,0,W,H);
  circ(c,mx,my,R,th.night?'#fff6d6':th.dusk?'#ffd27a':'#fff6c4');if(th.night){circ(c,mx+R*.45,my-R*.25,R*.85,th.sky[0])}
  if(th.night||th.dusk)for(let k=0;k<70;k++){c.fillStyle=k%5?'rgba(255,246,210,.75)':'#ffffff';c.fillRect((k*53+11)%W,(k*37+3)%Math.round(gy*.7),1,1)}
  const mk=(f,alpha)=>{const cv=mkc(W*2,H),x=cv.getContext('2d');f(x);return cv};
  const ridgeL=(x,col,lit,base,fn)=>{for(let i=0;i<W*2;i++){const y=Math.round(base-fn(i));x.fillStyle=col;x.fillRect(i,y,1,H-y);x.fillStyle=lit;x.fillRect(i,y,1,1)}};
  const P2=Math.PI*2/(W*2);
  const far=mk(x=>{ridgeL(x,mix(th.sky[2],th.dirtD,.35),mix(th.sky[3],'#ffffff',.25),gy-H*.12,i=>H*.08+H*.06*Math.sin(3*P2*i)+H*.04*Math.sin(7*P2*i+1)+(b===1?H*.12*Math.pow(1-Math.abs(Math.sin(Math.PI*4*i/(W*2))),3):0))});
  const castleL=mk(x=>{const cxp=W*.5,base=gy-H*.06,col=mix(th.sky[2],'#1d1633',.55),lit=th.night||th.dusk?'#ffd27a':mix(th.sky[3],'#ffffff',.4);
    x.fillStyle=col;x.fillRect(cxp-H*.2,base-H*.1,H*.4,H*.1+40);[[-.2,.08,.2],[-.06,.12,.3],[.12,.08,.22]].forEach(([o,w,h])=>{const tx=cxp+o*H,tw=w*H,thh=h*H;x.fillRect(tx,base-thh,tw,thh+40);x.beginPath();x.moveTo(tx-2,base-thh);x.lineTo(tx+tw/2,base-thh-tw*1.1);x.lineTo(tx+tw+2,base-thh);x.fill();x.fillStyle=lit;for(let y=base-thh+6;y<base-6;y+=10)x.fillRect(tx+tw/2-1,y,2,4);x.fillStyle=col});
    for(let i=0;i<H*.4;i+=6)x.fillRect(cxp-H*.2+i,base-H*.1-4,4,4);
    ridgeL(x,mix(th.sky[2],th.leafD,.55),mix(th.sky[3],th.leaf,.4),gy-H*.03,i=>H*.03+H*.02*Math.sin(5*P2*i)+(Math.abs(i-cxp)<H*.3?H*.02:0))});
  const mid=mk(x=>{const col=mix(th.leafD,th.sky[3],.25),r=rng(b*5+W);x.fillStyle=col;x.fillRect(0,gy-H*.04,W*2,H);for(let i=0;i<W*2;i+=5+(r()*8|0)){const h=H*(.08+r()*.1),w=4+r()*6;x.beginPath();x.moveTo(i-w,gy);x.lineTo(i,gy-h);x.lineTo(i+w,gy);x.fill();if(b!==1&&b!==3){circ(x,i,gy-h*.7,w*1.1,col)}}});
  const near=mk(x=>{const col=mix(th.leafD,'#05030c',.55),r=rng(b*9+H);x.fillStyle=col;for(let i=W*.15;i<W*2;i+=W*.7+r()*W*.4){const h=H*(.2+r()*.12),tw=2+r()*2;x.fillRect(i-tw/2,gy-h,tw,h);for(let k=0;k<4;k++)circ(x,i+(r()-.5)*14,gy-h+k*6+r()*5,4+r()*5,col)}for(let i=0;i<W*2;i+=3+(r()*5|0)){const h=2+r()*6;x.fillRect(i,gy-h,2,h)}x.fillRect(0,gy-2,W*2,H)});
  const ground=mkc(W*2,10),gc2=ground.getContext('2d');px(gc2,0,0,W*2,2,th.grassL);px(gc2,0,2,W*2,4,th.grass);for(let i=0;i<W*2;i+=3)px(gc2,i,6,1,1+(i*7)%3,th.grass);px(gc2,0,6,W*2,1,'rgba(0,0,0,.3)');
  return LCK[key]={th,gy,sky,far,castleL,mid,near,ground};
}
const LBUF={};
function drawLandscape(c,b,W,H,t,o){
  o=o||{};const L=landLayers(b,W,H,o.mode||'day'),th=L.th,gy=L.gy,pan=t*(o.pan||.006);
  const bk=W+'_'+H;let buf=LBUF[bk];if(!buf){buf=LBUF[bk]=mkc(W,H)}const B=buf.getContext('2d');B.imageSmoothingEnabled=false;
  B.drawImage(L.sky,0,0);
  for(let k=0;k<4;k++){const x=((k*W*.4+pan*3)%(W+80))-40;cloud(B,x|0,8+k*H*.06,.8+k*.3,th.cloud)}
  const bl=(im,f)=>{const o2=((Math.floor(pan*f)%(W*2))+W*2)%(W*2);B.drawImage(im,-o2,0);B.drawImage(im,W*2-o2,0)};
  bl(L.far,1);
  const fog=B.createLinearGradient(0,gy-H*.25,0,gy);fog.addColorStop(0,'rgba(255,255,255,0)');fog.addColorStop(1,th.night?'rgba(80,90,150,.25)':'rgba(255,230,210,.25)');B.fillStyle=fog;B.fillRect(0,0,W,gy);
  bl(L.castleL,2);
  {const F=fogTex(),fo=(pan*3+t*.004)%640,fy=gy-H*.2;B.globalAlpha=th.night?.3:.42;for(let x=-fo;x<W;x+=640)B.drawImage(F,x,fy,640,H*.22);B.globalAlpha=1}
  bl(L.mid,4);
  {const mx=W*.72,my=gy*.34,sw=Math.sin(t/3000)*W*.03;B.globalCompositeOperation='lighter';for(let k=0;k<5;k++){const x1=mx-W*.45+k*W*.2+sw,x2=x1+W*.06+k*2;const g=B.createLinearGradient(0,my,0,gy);g.addColorStop(0,th.night?'rgba(190,200,255,.07)':th.dusk?'rgba(255,170,120,.11)':'rgba(255,245,210,.09)');g.addColorStop(1,'rgba(255,245,210,0)');B.fillStyle=g;B.beginPath();B.moveTo(mx,my);B.lineTo(x1,gy);B.lineTo(x2,gy);B.closePath();B.fill()}B.globalCompositeOperation='source-over'}
  if(o.hero){const hs=H>=230?2:1,fx=Math.round(W*((o.hx||.35)+.22));
    const fl=Math.floor(t/90)%3;px(B,fx-6*hs,gy-3*hs,12*hs,3*hs,'#3a2410');px(B,fx-4*hs,gy-(9-fl)*hs,8*hs,(7-fl)*hs,'#f08a2a');px(B,fx-2*hs,gy-(12-fl)*hs,4*hs,6*hs,'#f5c542');px(B,fx-1*hs,gy-8*hs,2*hs,3*hs,'#fff3c4');
    if(Math.floor(t/120)%2)px(B,fx+((t/40|0)%5-2)*hs,gy-(16+(t/60|0)%8)*hs,hs,hs,'#f5c542');
    const gl=B.createRadialGradient(fx,gy-6*hs,2,fx,gy-6*hs,40*hs);gl.addColorStop(0,'rgba(255,190,90,.5)');gl.addColorStop(1,'rgba(255,190,90,0)');B.globalCompositeOperation='lighter';B.fillStyle=gl;B.fillRect(fx-40*hs,gy-46*hs,80*hs,60*hs);B.globalCompositeOperation='source-over';
    const cyc=(t%14000)/14000,a=W*.08,b2=fx-20*hs;let u,pose,face;
    if(cyc<.35){u=cyc/.35;pose='run';face=1}else if(cyc<.5){u=1;pose='idle';face=1}else if(cyc<.85){u=1-(cyc-.5)/.35;pose='run';face=-1}else{u=0;pose='idle';face=1}
    const hx=Math.round(a+(b2-a)*u);
    B.fillStyle='rgba(0,0,0,.3)';B.beginPath();B.ellipse(hx,gy+1,7*hs,1.6*hs,0,0,7);B.fill();
    drawHero(B,hx-12*hs/2-0*hs,gy-16*hs,hs,o.hero,0,face<0,{p:pose,f:Math.floor(t/95),blink:pose==='idle'&&t%3200<140})}
  bl(L.near,7);
  for(let x=-(Math.floor(pan*7)%(W*2));x<W;x+=W*2)B.drawImage(L.ground,x,gy);
  {const fgc=mix(th.leafD,'#05030c',.5);for(let x=0;x<W;x+=2){const h=(((x+Math.floor(pan*7))*2654435761)>>>27)%9;if(h>5)px(B,x,gy-h+7,1,h-4,fgc)}}
  if(th.night||th.dusk||o.fireflies)for(let k=0;k<18;k++){const fx=(k*67+Math.sin(t/900+k)*30+W*4)%W,fy=gy-10-((k*29)%Math.round(H*.3))+Math.sin(t/600+k*2)*6;if((Math.floor(t/300)+k)%4){px(B,fx,fy,1,1,'#fff3a0');B.globalCompositeOperation='lighter';circ(B,fx,fy,3,'rgba(255,240,140,.12)');B.globalCompositeOperation='source-over'}}
  c.drawImage(buf,0,0);
  reflect(c,buf,gy+6,H,t,th.water,0);
  c.globalCompositeOperation='soft-light';c.fillStyle=th.night?'rgba(60,80,170,.45)':th.dusk?'rgba(255,120,90,.35)':'rgba(255,230,190,.22)';c.fillRect(0,0,W,H);
  if(th.night||th.dusk){c.globalCompositeOperation='multiply';c.fillStyle=th.night?'rgba(70,80,150,.3)':'rgba(150,110,170,.15)';c.fillRect(0,0,W,H)}c.globalCompositeOperation='source-over';
  const v=c.createRadialGradient(W/2,H*.45,H*.3,W/2,H*.5,Math.max(W,H)*.75);v.addColorStop(0,'rgba(10,6,30,0)');v.addColorStop(1,'rgba(10,6,30,.5)');c.fillStyle=v;c.fillRect(0,0,W,H);
}
function drawScene(c,wi,W,H,t,look,heroX,flip,moving){drawLandscape(c,wi,W,H,t,{mode:wi===3?'dusk':'day',hero:look,hx:.3,walk:false})}
/* ================= KINGDOM ENGINE ================= */
const gcv=$('#gcv'),gc=gcv.getContext('2d');
let VW=320,VH=180,GY=122,KBUF=null,KB=null;
let G=null,graf=null;
const CYCLE={day:300,dusk:20,night:120,dawn:16};const CYC=CYCLE.day+CYCLE.dusk+CYCLE.night+CYCLE.dawn;
function perks(){const s=new Set();[S.look.weapon,S.look.tool].forEach(id=>{const it=ITEM_BY_ID[id];if(it&&it.perks)it.perks.forEach(p=>s.add(p))});return s}
function ISL(si0){const st=STAGES[si0],si=st.d;return{half:4200+si*110,pdist:1300+si*18,lairs:4+Math.floor(si/5),portals:si<2?[1]:si%3===0?[-1,1]:si%3===1?[1]:[-1],camps:4+(si%3)+Math.floor(si/8),chests:5+Math.floor(si/6),days:3+Math.floor(si/4),boatCost:6+Math.floor(si/3),boss:st.o.boss,blood:si>=8,floaters:si>=4,breeders:si>=10,statue:si%4===2,farm:si>=2,river:si%5===1,ruins:si%6===3}}
const GREED_PAL=[{m:'#f4f0e6',e:'#ff5a3a'},{m:'#cfe8ff',e:'#38e0f0'},{m:'#f0d49a',e:'#ff7a1a'},{m:'#ffb070',e:'#fff36a'},{m:'#ffe9a0',e:'#b06cf0'}];

/* ---------- shape sprite toolkit ---------- */
function shapeAPI(g){return{
  E:(x,y,rx,ry,c,rot)=>{g.fillStyle=c;g.beginPath();g.ellipse(x,y,Math.max(.5,rx),Math.max(.5,ry),rot||0,0,7);g.fill()},
  Po:(pts,c)=>{g.fillStyle=c;g.beginPath();pts.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill()},
  L:(x1,y1,x2,y2,w,c)=>{g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(x1,y1);g.lineTo(x2,y2);g.stroke()},
  Q:(pts,w,c)=>{g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length-1;i+=2)g.quadraticCurveTo(pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1]);g.stroke()},
  seg:(x,y,len,ang,w,c)=>{const ex=x+Math.sin(ang)*len,ey=y+Math.cos(ang)*len;g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(x,y);g.lineTo(ex,ey);g.stroke();return[ex,ey]}}}
function pixelize(g,W,H,ol,soft){const im=g.getImageData(0,0,W,H),d=im.data,A=(x,y)=>x>=0&&y>=0&&x<W&&y<H&&d[(y*W+x)*4+3]>110,o=rgb(ol),out=new Uint8ClampedArray(d.length);
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=(y*W+x)*4;if(A(x,y)){let k=1;if(!A(x,y-1))k=1.25;else if(!A(x-1,y))k=1.1;if(!A(x,y+1))k=.62;else if(!A(x+1,y)||!A(x,y+2))k=.8;if(soft&&k===1&&((x*3+y*5)%7===0))k=.9;
      out[i]=Math.min(255,d[i]*k);out[i+1]=Math.min(255,d[i+1]*k);out[i+2]=Math.min(255,d[i+2]*k);out[i+3]=255}
    else{let n=0,r=0,gg=0,bb=0;for(const[dx,dy] of [[-1,0],[1,0],[0,-1],[0,1]])if(A(x+dx,y+dy)){const j=((y+dy)*W+x+dx)*4;r+=d[j];gg+=d[j+1];bb+=d[j+2];n++}if(n){out[i]=r/n*.38+o[0]*.5;out[i+1]=gg/n*.38+o[1]*.5;out[i+2]=bb/n*.38+o[2]*.5;out[i+3]=215}}}
  im.data.set(out);g.putImageData(im,0,0)}
const SPR={};
function mkSprite(key,W,H,draw,ol,post){key=key+'@'+SR;if(SPR[key])return SPR[key];const cv=mkc(W*SR,H*SR),g=cv.getContext('2d');g.lineCap='round';g.lineJoin='round';g.scale(SR,SR);draw(shapeAPI(g),g);g.setTransform(1,0,0,1,0,0);if(key.startsWith('gr|'))autoVolume(g,W*SR,H*SR,{rim:'#9a6aff',spec:80,amb:.9,dif:.6});pixelize(g,W*SR,H*SR,ol||'#0b0716',1);if(post)post(g);return SPR[key]={cv,W,H}}

/* ---------- monarch on horse (faces right) ---------- */
const GAL=[[.65,.35,-.55,-.25],[.35,.05,-.25,-.55],[-.15,-.35,.15,-.3],[-.5,-.2,.5,.15],[-.2,.15,.35,.5],[.3,.5,-.1,.25]];
function riderPal(){if(MOPT.rp)return MOPT.rp;const C=CHARS[S.look.char]||CHARS.adv,it=ITEM_BY_ID[S.look.skin],sk=it&&SKINS[it.sk];return{h:C.pal.h,s:C.pal.s,b:sk?sk.b:C.pal.b,p:sk?sk.p:C.pal.p,girl:C.rows===GIRL,cape:S.look.acc==='acc_capeb'?'#2a4a9a':S.look.acc==='acc_capeg'?'#c9921f':'#8a1f2a'}}
/* ---------- subjects ---------- */
function subjSprite(role,fr,hij,v){const key='sub|'+role+'|'+fr+'|'+hij+'|'+v;
  const P={vagrant:{c:'#6a5e50',p:'#4a4036',h:'#3a2a1e'},villager:{c:['#b88a5a','#8a9a6a','#9a7a9a'][v%3],p:'#5a4a3a',h:'#4a2a18'},archer:{c:'#3f6a3a',p:'#4a3a24',h:'#2f5a30'},builder:{c:'#8a5a2a',p:'#3a2a1a',h:'#c9921f'},farmer:{c:'#a88a4a',p:'#5a4a2a',h:'#e0c070'},knight:{c:'#7b8496',p:'#4a5060',h:'#a8b2c4'}}[role];
  return mkSprite(key,18,28,(A,g)=>{const walk=fr>0,a=walk?Math.sin(fr*Math.PI/4)*.5:0,skin=v%2?'#c99a6e':'#f0c090',hy=walk?-Math.abs(Math.sin(fr*Math.PI/4))*.9:0;
    A.seg(9,17+hy,10,a,2.4,mix(P.p,'#000000',.25));A.seg(9,17+hy,10,-a,2.6,P.p);
    if(role==='archer'){A.Po([[4,8+hy],[7,7+hy],[6,17+hy],[3,16+hy]],'#6e4a2a')}
    A.Po([[5,8+hy],[12,8+hy],[13,18+hy],[4,18+hy]],P.c);if(role==='vagrant'){A.Po([[4,14+hy],[7,18+hy],[3,19+hy]],P.c);A.E(7,12+hy,1.5,1.2,mix(P.c,'#000000',.3))}
    A.L(8,17+hy,12,17+hy,1,mix(P.c,'#000000',.4));
    A.seg(10,10+hy,6,.5-a*.6,2,mix(P.c,'#000000',.15));
    A.E(9.5,5+hy,3.2,3.4,skin);
    if(hij&&role!=='knight'){A.E(9,4.6+hy,3.9,4,['#7a3a5a','#3a5a7a','#5a4a6a'][v%3]);A.E(10.4,5.2+hy,2.2,2.6,skin);A.Po([[6,6+hy],[9,10+hy],[6,10+hy]],['#7a3a5a','#3a5a7a','#5a4a6a'][v%3])}
    else switch(role){case 'archer':A.Po([[5.5,6+hy],[9,0+hy],[13,4+hy],[12,3+hy],[7,8+hy]],P.h);break;case 'builder':A.E(9.5,2.6+hy,3.6,1.8,P.h);break;case 'farmer':A.E(9.5,2.6+hy,6,1.2,P.h);A.E(9.5,1.5+hy,3,1.8,P.h);break;case 'knight':A.E(9.5,4+hy,3.8,4.2,P.h);A.L(9,5+hy,13,5+hy,1,'#2a2a3a');break;default:A.E(9,2.8+hy,3.4,2.2,P.h)}
    switch(role){case 'archer':A.Q([[14,4+hy],[17,11+hy],[14,18+hy]],1.3,'#8a5a2a');A.L(14,4+hy,14,18+hy,.5,'#e0d8c0');break;
      case 'builder':A.L(13,15+hy,15,9+hy,1.4,'#6e4a2a');A.E(15,8.5+hy,2.2,1.4,'#8f97a6');break;
      case 'farmer':A.L(14,4+hy,13,22+hy,1.2,'#6e4a2a');A.Q([[14,4+hy],[10,2+hy],[8,5+hy]],1.4,'#c3cad6');break;
      case 'knight':A.E(13,13+hy,3,4.5,'#a8743a');A.E(13,13+hy,1.4,2.2,'#f2b632');A.L(14,8+hy,17,2+hy,1.2,'#d3d9e3');break}
    A.E(11.5,4.5+hy,.6,.6,'#1a1210');
  },'#120c14');
}
/* ---------- greed ---------- */
function greedSprite(type,fr,b){const key='gr|'+type+'|'+fr+'|'+b,P=GREED_PAL[b],big=type==='br',W=big?40:22,H=big?38:type==='f'?24:22;
  return mkSprite(key,W,H,(A,g)=>{const body='#120c18',body2='#1e1426',s=big?1.8:1,cx=W/2,fy=H-2;
    if(type==='f'){const w=fr%2?-5:3;A.Po([[cx-2,10],[cx-11,4+w],[cx-9,10+w*.5],[cx-6,9],[cx-4,14]],body2);A.Po([[cx+2,10],[cx+11,4+w],[cx+9,10+w*.5],[cx+6,9],[cx+4,14]],body2);A.E(cx,12,5,6,body);A.E(cx+1,10,3.6,4,P.m);return}
    const st=fr%2?1:-1;for(let k=-1;k<=1;k++)A.L(cx+k*3*s,fy-4*s,cx+k*3*s+st*k*1.5,fy,1.6*s,body);
    A.E(cx,fy-8*s,7*s,7*s,body);A.E(cx-2*s,fy-12*s,5*s,4*s,body2);if(big){for(let k=0;k<4;k++)A.Po([[cx-8+k*5,fy-20],[cx-6+k*5,fy-28-k%2*3],[cx-4+k*5,fy-20]],body)}
    A.E(cx+1.5*s,fy-10*s,4.2*s,4.8*s,P.m);A.E(cx+1.5*s,fy-13*s,3.6*s,1.4*s,mix(P.m,'#ffffff',.4));
    A.E(cx,fy-10*s,.9*s,1.3*s,'#0b0716');A.E(cx+3*s,fy-10*s,.9*s,1.3*s,'#0b0716');A.L(cx-.5*s,fy-7*s,cx+3.5*s,fy-7*s,.8*s,'#0b0716');
  },'#05030a');}

/* ---------- Kingdom-style landscape layers ---------- */
const KPAL=[
 {sky:['#6f8fb0','#9ab4c8','#c9d6d8','#e6e2cf'],cloud:'#f4f2ea',mtn:'#8d9ca6',f1:'#7d9888',f2:'#56755f',f3:'#33503f',tr:'#2a2a24',grass:'#5f8a3a',grassL:'#9cc060',dirt:'#4a3a2a',water:'#3e6a78',tree:'round'},
 {sky:['#7e93ad','#a9b9cb','#d3dbe2','#eef0f0'],cloud:'#ffffff',mtn:'#d2dce6',f1:'#8aa2b0',f2:'#5a7a88',f3:'#34505c',tr:'#2a3238',grass:'#e8eef4',grassL:'#ffffff',dirt:'#6a7a8a',water:'#4a6a86',tree:'pine'},
 {sky:['#8a7a9a','#c8a088','#eac59a','#f6e2b8'],cloud:'#fff4e0',mtn:'#c8a080',f1:'#b89474',f2:'#8a6a4a',f3:'#5a4030',tr:'#4a3020',grass:'#d8b878',grassL:'#f0d8a0',dirt:'#7a5a3a',water:'#4a8a8a',tree:'palm'},
 {sky:['#2a1a22','#4a2228','#7a3428','#b04a2a'],cloud:'#6a3a3a',mtn:'#3e2228',f1:'#4a2a2a',f2:'#33201e',f3:'#1e1214',tr:'#140c0c',grass:'#4a3a34',grassL:'#7a5a48',dirt:'#2a1e1a',water:'#7a3a1a',tree:'dead'},
 {sky:['#7a8ad0','#a8a8e0','#d8c8f0','#f6ecf8'],cloud:'#ffffff',mtn:'#e8e0f8',f1:'#c8b8e8',f2:'#a898d0',f3:'#7a6aa8',tr:'#5a4a7a',grass:'#ffffff',grassL:'#ffffff',dirt:'#b8a8d8',water:'#8a8ad0',tree:'blossom'}];
function kPal(b,mode){const p=Object.assign({},KPAL[b]);if(mode==='dusk'){p.sky=b===3?['#1a0a12','#3a1620','#7a2a22','#c8501e']:['#2e2350','#6b3f72','#d0726a','#f2b07a'];['mtn','f1','f2','f3'].forEach(k=>p[k]=mix(p[k],'#3a2040',.35));p.cloud='#f0a8a0'}
  if(mode==='night'){p.sky=b===3?['#0a0408','#160a10','#2a1014','#40161a']:['#060a1c','#0e1630','#182444','#22325a'];['mtn','f1','f2','f3'].forEach(k=>p[k]=mix(p[k],'#060a1a',.6));p.cloud='#2a3458';p.grass=mix(p.grass,'#0a1020',.5)}return p}
const KLC={};
/* ---------- island ---------- */
function mkP(role,x){return{role,x,tx:x,dir:1,t:Math.random()*200,hij:Math.random()<.4,v:(Math.random()*6)|0,cd:Math.random()*60,side:Math.random()<.5?-1:1,home:x,flee:0,pouch:0}}
function makeIsland(si0){const si=STAGES[si0].d,SI0=si0;
  const I=ISL(SI0),R=rng(SI0*7919+3),sites=[],people=[],props=[];
  sites.push({k:'town',x:0,lvl:0,paid:0});
  sites.push({k:'bow',x:-58,stock:0,paid:0});sites.push({k:'hammer',x:58,stock:0,paid:0});sites.push({k:'scythe',x:-104,stock:0,paid:0});sites.push({k:'shield',x:104,stock:0,paid:0});
  [1,-1].forEach(sd=>{[230,580,960].forEach((d,i)=>{if(d<I.half-300){sites.push({k:'wall',x:sd*d,side:sd,ring:i,lvl:0,hp:0,maxhp:0,paid:0,build:-1});if(i>0){sites.push({k:'chop',x:sd*d,side:sd,lvl:0,paid:0,build:-1})}}});sites.push({k:'tower',x:sd*300,side:sd,lvl:0,paid:0,build:-1})});
  if(I.farm)sites.push({k:'farm',x:-160,lvl:0,paid:0,build:-1});
  if(I.statue)sites.push({k:'statue',x:(R()<.5?-1:1)*Math.round(I.half*.55),lvl:0,paid:0,buff:['archer','wall','coin','speed'][si%4]});
  sites.push({k:'boat',x:I.half-190,lvl:0,paid:0,build:-1});
  people.push(mkP('vagrant',-150),mkP('vagrant',160));props.push({k:'camp',x:150},{k:'camp',x:-160});
  for(let k=0;k<I.camps;k++){const sd=k%2?-1:1,x=sd*Math.round(420+R()*(I.half-760));props.push({k:'camp',x});for(let j=0;j<2+(k%2);j++)people.push(mkP('vagrant',x+(j-1)*16))}
  for(let k=0;k<I.chests;k++)props.push({k:'chest',x:(k%2?-1:1)*Math.round(480+R()*(I.half-700)),open:0,coins:4+((R()*5)|0)});
  I.portals.forEach(sd=>props.push({k:'portal',x:sd*I.pdist,side:sd}));
  for(let k=0;k<(SI0<5?0:SI0<15?Math.min(2,I.lairs):I.lairs);k++){const sd=k%2?-1:1,x=sd*Math.round(I.pdist+300+R()*(I.half-I.pdist-600));props.push({k:'lair',x,big:k===0});props.push({k:'chest',x:x+sd*30,open:0,coins:8+((R()*8)|0)});
    for(let j=0;j<(k===0?1:3+(si>12?1:0));j++)props.push({k:'beast',x:x+(j-1)*40,x0:x+(j-1)*40,kk:j===2?'a':'g',big:k===0,hp:k===0?10+si:2+Math.floor(si/8),t:R()*99,dir:1,alive:1})}
  for(let k=0;k<3+Math.floor(si/6);k++){const sd=k%2?1:-1;props.push({k:'ruins',x:sd*Math.round(700+R()*(I.half-900))})}
  for(let x=-I.half;x<I.half;x+=10+R()*24)if(Math.abs(x)>210&&Math.abs(Math.abs(x)-300)>20&&!sites.some(s=>s.k==='chop'&&Math.abs(s.x-x)<26))props.push({k:'tree',x:Math.round(x),v:(R()*3)|0,s:.75+R()*.55,back:R()<.6});
  for(let k=0;k<18+si%5;k++)props.push({k:'rabbit',x:Math.round((R()-.5)*I.half*1.7),t:R()*99,alive:1,dir:1});
  if(I.ruins)props.push({k:'ruins',x:-Math.round(I.half*.45)});
  const zones=applyTerrain(SI0,I,sites,props,people,R);props._zones=zones;lifeIsland(SI0,I,sites,props,people,R);scenIsland(SI0,I,sites,props,people,R);delete props._zones;
  for(const r of props)if(r.k==='tree'&&!r.back&&(sites.some(q=>(q.k==='plot'||q.k==='town'||q.k==='boat'||q.k==='wall'||q.k==='tower')&&Math.abs(q.x-r.x)<46)||props.some(q=>['house','stall','well','statue2','shrine','camp','flag','lair','portal','chest'].includes(q.k)&&Math.abs(q.x-r.x)<40)))r.back=true;
  const goal=I.half-190;for(let x=1100;x<goal-300;x+=1100)props.push({k:'flag',x,on:0});
  if(SI0>=5)for(const sd of [1,-1]){for(let x=Math.round(I.half*(SI0<15?.62:.5));x<(sd>0?goal-300:I.half-420);x+=(SI0<15?1000+R()*700:SI0<30?700+R()*500:520+R()*420)){const bx=sd*Math.round(x);props.push({k:'beast',x:bx,x0:bx,kk:R()<.3?'a':'g',big:0,hp:1+Math.floor(si/9)+(R()<.2?1:0),t:R()*99,dir:1,alive:1})}}
  questIsland(SI0,I,sites,props,people,R);actsIsland(SI0,I,sites,props,R);
  return{I,sites,people,props,zones};
}
let PORT=false;
function sizeGame(){const g=$('#game');let w=g.clientWidth||innerWidth,h=g.clientHeight||innerHeight;PORT=h>w;
  if(PORT){VH=250;VW=Math.round(VH*16/9);GY=166}else{VH=292;VW=Math.max(380,Math.min(700,Math.round(VH*w/h)));GY=170}
  gcv.width=VW*RS;gcv.height=VH*RS;gc.setTransform(RS,0,0,RS,0,0);gc.imageSmoothingEnabled=false;KBUF=mkc(VW*RS,VH*RS);KB=KBUF.getContext('2d');KB.setTransform(RS,0,0,RS,0,0);KB.imageSmoothingEnabled=false;LCV=null;TMPC=null;document.body.classList.toggle('gport',PORT)}
addEventListener('resize',()=>{if(G)sizeGame()});addEventListener('orientationchange',()=>setTimeout(()=>{if(G)sizeGame()},350));
function startStage(si,resume){if(!timeOk()){if(G){cancelAnimationFrame(graf);G=null;document.body.classList.remove('ingame','gport');$('#game').hidden=true}timeModal(si,resume);return}
  applyQ();setTimeout(applyOpt,50);closeModal();cancelAnimationFrame(homeRaf);document.body.classList.add('ingame');const pk=perks();
  let base;const isl0=makeIsland(si);if(resume&&S.run&&S.run.si===si){base=JSON.parse(S.run.g);if(!base.props.some(p=>DECOR.has(p.k)))isl0.props.forEach(p=>{if(DECOR.has(p.k))base.props.push(p)})}else{const isl=isl0;base={si,day:1,tod:4,purse:(()=>{if(S.run){try{S.gold=(S.gold||0)+(JSON.parse(S.run.g).purse||0)}catch(e){}}S.gold=S.gold??20;const take=Math.max(0,Math.min(S.gold,pcap()-6));S.gold-=take;return 6+take+(pk.has('bonus')?2:0)})(),hx:0,face:1,sites:isl.sites,people:isl.people,props:isl.props,greed:[],coins:[],bossDead:false,stats:{lost:0}};S.run=null;save()}
  S.mounts=S.mounts||['horse'];S.mount=S.mount||'horse';G=Object.assign(base,{loyal:base.loyal??80,thieves:[],foot:false,horse:null,boat:null,alt:0,rearT:0,sail:0,wood:base.wood||0,pfx:[],proj:[],corpses:[],sched:[],combo:0,atk:null,atkQ:0,trail:[],boomOut:0,hitstop:0,zones:isl0.zones,lives:base.lives||3,maxhp:pk.has('shield')?12:10,hp:base.hp||(pk.has('shield')?12:10),cp:base.cp||0,hurtT:0,guardOn:false,I:ISL(si),pk,b:STAGES[si].b,arrows:[],fx:[],parts:mkParts(STAGES[si].wx),keys:{l:0,r:0},hold:0,t:0,last:0,inv:0,cam:base.hx,atkCD:0,slash:0,spawnQ:[],paused:false,over:false,walk:0,shield:pk.has('shield')?1:0,coinHold:0,pop:0,stam:100,idle:0,vx:0});
  markSeen(si);$('#gName').textContent=(si+1)+'. '+STAGES[si].n;$('#game').hidden=false;imgify($('#game'));sizeGame();setTimeout(()=>{if(G)sizeGame()},300);playTrack('w'+G.b);gHud();
  banner(`<div class="bt">${STAGES[si].n}</div><div class="bs">${objective()}</div>`,3800);
  G.last=0;graf=requestAnimationFrame(gLoop);
  const hw=[];['idle','graze'].forEach(m=>hw.push([0,m]));for(let f=0;f<12;f++){hw.push([f,'gallop']);hw.push([f,'walk'])}hw.forEach(([f,m],i)=>setTimeout(()=>{if(G)monarchSprite(f,m)},60+i*25));
  const pv=[...new Set(G.props.filter(r=>r.k==='peak').map(r=>r.v))],bb=G.b;pv.forEach((v,i)=>setTimeout(()=>{if(G&&G.b===bb)peakSprite(bb,v)},400+i*120));
  {const mm=S.mount||'horse',jobs=[];for(const md of ['trot','gallop'])for(let f=0;f<16;f++)jobs.push([f,md]);const step=()=>{if(!G||!jobs.length)return;const[f,md]=jobs.shift();const sv=MOPT.m,sn=MOPT.nr;MOPT.m=mm;MOPT.nr=0;monarchSprite(f,md);MOPT.m=sv;MOPT.nr=sn;setTimeout(step,40)};setTimeout(step,1200)}
}
function markSeen(si){S.seen=S.seen||[];if(!S.seen.includes(si)){S.seen.push(si);save()}}
function mkParts(wx){const n={rain:70,snow:45,blizzard:110,leaves:18,sand:50,embers:36,fireflies:22}[wx]||0;return Array.from({length:n},()=>({x:Math.random()*440,y:Math.random()*500,v:Math.random()}))}
function site(k,x){return G.sites.find(s=>s.k===k&&(x===undefined||s.x===x))}
function town(){return site('town')}
function nightF(){const t=G.tod,d=CYCLE.day,k=CYCLE.dusk,n=CYCLE.night;if(t<d)return 0;if(t<d+k)return(t-d)/k;if(t<d+k+n)return 1;return 1-(t-d-k-n)/CYCLE.dawn}
function isNight(){return G.tod>=CYCLE.day+CYCLE.dusk*.5&&G.tod<CYC-CYCLE.dawn*.5}
function costOf(s){switch(s.k){case 'plot':return s.lvl<3?PLOT_COIN[s.lvl]:0;case 'town':return[3,6,10,14][s.lvl]||0;case 'bow':return 2;case 'hammer':return 3;case 'scythe':return 3;case 'shield':return 5;case 'chop':return s.lvl?0:1;case 'wall':return[2,5,8][s.lvl]||0;case 'tower':return s.lvl?0:4;case 'farm':return s.lvl?0:4;case 'statue':return s.lvl?0:5;case 'boat':return s.lvl?0:G.I.boatCost;case 'tentspot':return s.lvl?0:2;case 'vfort':return[5,9,14][s.lvl]||0}return 0}
function payable(s){if(s.build>=0)return false;const c=costOf(s);if(!c)return false;if(s.k==='plot')return true;const T=town().lvl;
  if(s.k==='wall'){if(s.lvl>=T+1)return false;const ch=G.sites.find(q=>q.k==='chop'&&q.x===s.x);if(ch&&!ch.lvl)return false}
  if(s.k==='chop'){const w=G.sites.find(q=>q.k==='wall'&&q.x===s.x);if(w&&w.lvl)return false}
  if((s.k==='bow'||s.k==='hammer'||s.k==='scythe'||s.k==='shield')&&s.stock>=4)return false;
  if((s.k==='tower'||s.k==='farm'||s.k==='scythe')&&T<1)return false;if(s.k==='shield'&&T<3)return false;
  if(s.k==='boat')return s.lvl===0;return true}
function objective(){const I=G.I,bt=site('boat');if(I.boss&&!G.bossDead&&G.guardOn)return`${gx('اهزم','اهزمي')} ${BOSSDEF[G.b].name} عند المرسى!`;const dist=Math.max(0,Math.round((bt.x-G.hx)/10));if(bt.lvl<1)return bt.build>=0?'البنّاؤون يصلحون السفينة…':`${gx('ابنِ مملكتك وأصلح','ابني مملكتك وأصلحي')} السفينة عند المرسى (${I.boatCost} ${'عملات'}) ➜ ${dist} م`;return`السفينة جاهزة! ${gx('اركبها','اركبيها')} من طرف الرصيف ➜ ${dist} م`;if(site('boat').build>=0)return'البنّاؤون يصنعون القارب…';
  if(G.day<I.days)return`${gx('ابنِ مملكتك واصمد','ابني مملكتك واصمدي')} حتى اليوم ${I.days} · اليوم ${G.day}`;if(I.boss&&!G.bossDead)return`${gx('اهزم','اهزمي')} ${BOSSDEF[G.b].name} حين يأتي ليلًا`;return gx('ادفع العملات لبناء القارب على الشاطئ الأيمن ➜','ادفعي العملات لبناء القارب على الشاطئ الأيمن ➜')}
function imgify(root){root.querySelectorAll('canvas[data-icon]').forEach(cv=>{try{const im=new Image();im.className='pix';im.alt='';im.src=cv.toDataURL();cv.replaceWith(im)}catch(e){}})}
function drawMini(){const cv=$('#gMini');if(!cv||!G)return;const w=cv.width=180,h=cv.height=12,c=cv.getContext('2d'),I=G.I,X=x=>Math.round((x+I.half)/(I.half*2)*(w-4))+2;c.clearRect(0,0,w,h);c.fillStyle='rgba(10,7,24,.55)';c.fillRect(0,0,w,h);(G.zones||[]).forEach(z=>{c.fillStyle=z.t==='mount'?'rgba(170,180,200,.45)':z.t==='plains'?'rgba(190,220,120,.35)':z.t==='forest'?'rgba(60,120,60,.45)':'rgba(240,210,150,.3)';c.fillRect(X(z.x0),1,Math.max(1,X(z.x1)-X(z.x0)),h-2)});for(const r of G.props)if(r.k==='river'){c.fillStyle='#5ab4f0';c.fillRect(X(r.x)-1,1,2,h-2)}c.fillStyle='rgba(255,255,255,.25)';c.fillRect(2,6,w-4,1);
  for(const s of G.sites){if(s.k==='wall'&&s.lvl){c.fillStyle='#c8b090';c.fillRect(X(s.x),3,1,6)}}for(const r of G.props){if(r.k==='portal'){c.fillStyle='#b06cf0';c.fillRect(X(r.x)-1,2,3,8)}else if(r.k==='lair'){c.fillStyle=r.big?'#ff3a3a':'#e8464f';c.fillRect(X(r.x)-1,4,2,4)}else if(r.k==='camp'){c.fillStyle='#f08a2a';c.fillRect(X(r.x),5,1,3)}else if(r.k==='chest'&&!r.open){c.fillStyle='#f5c542';c.fillRect(X(r.x),5,1,2)}}
  c.fillStyle='#ffe9b0';c.fillRect(X(0)-1,3,3,6);c.fillStyle='#7fd3f7';c.fillRect(X(site('boat').x)-1,3,3,6);c.fillStyle='#ffffff';c.fillRect(X(G.hx)-1,1,3,10)}
function gHud(){drawMini();try{gSide()}catch(e){}if(G&&G._lp!==G.purse){G.pop=90;G._lp=G.purse}$('#gHearts').innerHTML=`<span class="lives">${[0,1,2].map(i=>`<i class="lf${i<G.lives?'':' off'}"></i>`).join('')}</span><span class="hpbar"><b style="width:${Math.max(0,G.hp/G.maxhp*100)}%"></b></span>${ic(isNight()?'moon':'sun')}<span class="num">${G.day}</span>`+(G.shield?ic('shield'):'');hydrate($('#gHearts'));$('#gCoins').textContent=G.purse;{const gw=$('#gWood');if(gw)gw.textContent=G.wood||0;const gl=$('#gLoy');if(gl){gl.textContent=(G.loyal??80)+'%';gl.style.color=(G.loyal??80)<40?'#ff8a8a':''}const gm=$('#gM');if(gm){const k=G.foot?'horse':'walk';if(gm.dataset.k!==k){gm.dataset.k=k;gm.innerHTML=ic(k);hydrate(gm);imgify(gm)}}}$('#gObj').textContent=objective();imgify($('#gHearts'))}
function banner(html,ms){const b=$('#gBanner');b.innerHTML=html;b.hidden=false;hydrate(b);imgify(b);clearTimeout(banner.t);banner.t=setTimeout(()=>b.hidden=true,ms||3200)}
function puff(x,y,n,col,sp){for(let k=0;k<n;k++)G.fx.push({x,y,vx:(Math.random()-.5)*(sp||1.6),vy:-Math.random()*(sp||1.4),life:22+Math.random()*12,col,s:Math.random()<.5?2:1})}
function dropCoin(x,y,vx,toHero){G.coins.push({x,y:y===undefined?GY-30:y,vx:vx===undefined?(Math.random()-.5)*1.4:vx,vy:-2.5,t:toHero?16:0,home:toHero?1:0})}
/* --- input --- */
function jump(){if(!G||G.paused||G.over)return;if(G.arch){archShoot();return}if(actInteract())return;if(interact())return;G.coinHold=1;payOnce()}
function jumpRel(){if(G)G.coinHold=0}
function payOnce(){
  if(G.purse<=0){banner(`<div class="bs">${ic('coin')} ${gx('محفظتك فارغة. اجمع العملات','محفظتك فارغة. اجمعي العملات')}</div>`,1400);return}
  const hx=G.hx,s=G.sites.filter(s=>Math.abs(s.x-hx)<24&&payable(s)).sort((a,b)=>Math.abs(a.x-hx)-Math.abs(b.x-hx))[0];
  if(s&&s.k==='plot'&&(G.wood||0)<woodOf(s)){banner(`<div class="bs">تحتاج ${woodOf(s)} خشب لهذا البناء · لديك ${G.wood||0}. ${gx('اضرب','اضربي')} الأشجار بسلاحك لتقطعها</div>`,2400);return}
  if(s){G.purse--;s.paid++;SFX.coin();flyCoin(s.x,GY-30);G._paidN=(G._paidN||0)+1;if(s.paid>=costOf(s)){s.paid=0;finishPay(s)}gHud();return}
  const v=G.people.find(p=>p.role==='vagrant'&&Math.abs(p.x-hx)<26&&!(p.flee>0));
  if(v){G.purse--;flyCoin(v.x,GY-24);dropCoin(v.x,GY-28,0);SFX.coin();gHud();return}
  G.purse--;dropCoin(hx+G.face*6,GY-26,G.face*.8);SFX.click();gHud();
}
function finishPay(s){SFX.buy();if(s.k==='plot'){G.wood-=woodOf(s);gHud()}switch(s.k){
  case 'town':s.lvl++;banner(`<div class="bt">${ic('house')} ${['','خيمة القائد','القاعة الخشبية','الحصن الحجري','القلعة الكبرى'][s.lvl]}</div><div class="bs">${['','يمكنك الآن بناء الأبراج والمزرعة وشراء المناجل','أسوار حجرية متاحة الآن','الدروع للفرسان متاحة الآن','أقوى الأسوار متاحة الآن'][s.lvl]}</div>`,2600);break;
  case 'bow':case 'hammer':case 'scythe':case 'shield':s.stock++;break;
  case 'statue':s.lvl=1;banner(`<div class="bt">بركة التمثال</div><div class="bs">${{archer:'رماة أسرع',wall:'أسوار أصلب',coin:'عملات أكثر كل صباح',speed:'جواد أسرع'}[s.buff]}</div>`,2600);break;
  default:s.build=0;
}}
/* --- loop --- */
function gLoop(ts){if(!G)return;graf=requestAnimationFrame(gLoop);const dt=G.last?Math.min(2.5,(ts-G.last)/16.67):1;G.last=ts;
  GENB.used=0;try{ptTick(ts);gfxWatch(ts);gaitPrewarm()}catch(e){console.error(e)}if(!G)return;
  try{if(!G.paused&&!G.over){if(G.hitstop>0){G.hitstop-=dt}else{G.t+=dt*16.67;update(dt)}}}catch(e){reportErr(e)}
  TXQ.length=0;pixTextHook();pixSpriteHook();try{renderK(gc,G,true)}catch(e){reportErr(e);G.lite=1;try{renderK(gc,G,true)}catch(e2){}}try{pixPost()}catch(e){console.error(e)}}
function reportErr(e){if(reportErr.n>3)return;reportErr.n=(reportErr.n||0)+1;console.error(e);const b=$('#gErr');if(b){b.hidden=false;b.textContent='خطأ: '+(e&&e.message||e)}}
function update(dt){
  const sec=dt/60,I=G.I;tutTick();try{ghostUpdate(dt);archUpdate(dt)}catch(e){}ktcUpdate(dt);gfxUpdate(dt);qUpdate(dt);
  const wasNight=isNight();G.tod+=sec;if(G.tod>=CYC){G.tod-=CYC;G.day++;onDawn()}
  if(!wasNight&&isNight())onNight();if(wasNight&&!isNight()&&G.tod<CYCLE.day)G.greed.forEach(g=>{if(!g.guard)g.flee=1});
  // monarch & horse
  const ax=(G.keys.r?1:0)-(G.keys.l?1:0);if(ax){G.hold+=dt;G.face=ax;G.idle=0}else{G.hold=0;G.idle+=dt}
  const buffSp=G.sites.some(s=>s.k==='statue'&&s.lvl&&s.buff==='speed')?1.15:1;
  G.gallop=ax&&G.hold>36&&G.stam>(G.gallop?0:25);const spd=(G.foot?(G.gallop?1.0:.4):(G.gallop?1.8:.88)*MSPD())*buffSp;
  if(G.gallop)G.stam=Math.max(0,G.stam-.22*dt);else G.stam=Math.min(100,G.stam+(G.idle>90?.45:.12)*dt);
  const prevX=G.hx;G.vx+=(ax*spd-G.vx)*Math.min(1,.1*dt);G.hx=Math.max(-I.half+60,Math.min(I.half-20,G.hx+G.vx*dt));G.walk+=Math.abs(G.vx)*dt;
  if(lifeUpdate(dt,prevX))return;
  if(Math.abs(G.vx)>1.8&&Math.random()<.35)puff(G.hx-G.face*14,GY-1,1,'rgba(255,255,255,.45)',.7);
  if(G.coinHold){G.coinHold+=dt;if(G.coinHold>22){G.coinHold=1.01;payOnce()}}
  if(G.atkCD>0)G.atkCD-=dt;if(G.slash>0)G.slash-=dt;if(G.inv>0)G.inv-=dt;if(G.shake>0)G.shake-=dt;if(G.flash>0)G.flash-=dt;
  // coins
  const mag=G.pk.has('magnet')?44:13;
  for(const c of G.coins){c.t+=dt;if(c.home){c.vx+=(Math.sign(G.hx-c.x)*.3-c.vx*.05)*dt}c.vy+=.2*dt;c.x+=c.vx*dt;c.y+=c.vy*dt;if(c.y>GY-3){c.y=GY-3;c.vy*=-.3;c.vx*=c.home?.9:.6}
    if(c.t>20&&Math.abs(c.x-G.hx)<mag&&!c.taken&&G.purse<pcap()){c.taken=1;G.purse+=G.pk.has('double')&&c.wild?2:1;SFX.coin();gHud()}}
  G.coins=G.coins.filter(c=>!c.taken&&c.t<60*90);
  for(const r of G.props){
    if(r.k==='chest'&&!r.open&&Math.abs(r.x-G.hx)<14){r.open=1;for(let k=0;k<r.coins;k++)dropCoin(r.x,GY-16,(Math.random()-.5)*2.4);SFX.buy();banner(`<div class="bs">${ic('gift')} صندوق كنز: +${r.coins}</div>`,1600)}
    if(r.k==='beast'){if(!r.alive)continue;beastUpdate(r,dt);continue}
    if(r.k==='rabbit'){if(!r.alive){if((r.respawn-=dt)<=0){r.alive=1;r.x=(Math.random()-.5)*I.half*1.6}continue}r.t+=dt;if(r.t%90<dt)r.dir=Math.random()<.5?-1:1;if(r.t%90<30)r.x+=r.dir*.6*dt;if(Math.abs(r.x-G.hx)<30&&Math.abs(G.vx)>.3)r.x+=Math.sign(r.x-G.hx)*1.2*dt}}
  for(const s of G.sites){if(s.build>=0){const b=G.people.find(p=>p.role==='builder'&&p.job===s&&Math.abs(p.x-p.goal)<4);if(b){s.build+=dt*(s.k==='boat'?.25:s.k==='chop'?1.2:.9)*((G.loyal??80)<40?.5:1);if(Math.random()<.1)puff(s.x+(Math.random()-.5)*14,GY-12,1,s.k==='chop'?'#5a8a3a':'#c89a5a',1)}
      if(s.build>=100){s.build=-1;s.lvl++;kBuilt(s);if(s.k==='tentspot'){G.people.push(mkP('vagrant',s.x+12));banner(`<div class="bs">${L2('نُصبت خيمة · جاء متجوّل يبحث عن مأوى','Tent pitched · a wanderer came seeking shelter')}</div>`,2400)}if(s.k==='wall'){const wb=G.sites.some(q=>q.k==='statue'&&q.lvl&&q.buff==='wall')?1.4:1;s.maxhp=Math.round([0,10,24,44][s.lvl]*wb);s.hp=s.maxhp}SFX.buy();puff(s.x,GY-20,14,s.k==='chop'?'#5a8a3a':'#f5c542',2);
        if(s.k==='chop')banner('<div class="bs">قُطعت الشجرة · صار بإمكانك بناء سور هنا</div>',1800);if(s.k==='boat')banner(`<div class="bt">${ic('star')} القارب جاهز!</div><div class="bs">${objective()}</div>`,3200);gHud()}}}
  const boat=site('boat');
  for(const r of G.props)if(r.k==='flag'&&!r.on&&G.hx>r.x-6){r.on=1;G.cp=r.x;G.hp=G.maxhp;SFX.buy();puff(r.x,GY-40,16,'#f5c542',2);banner(`<div class="bs">${ic('star')} راية جديدة! ${gx('ستعود','ستعودين')} إلى هنا إن خسرت حياة</div>`,2200);saveRun();gHud()}
  if(I.boss&&!G.bossDead&&!G.guardOn&&G.hx>boat.x-650){G.guardOn=true;const bd=CRDEF[BOSSDEF[G.b].type];G.greed.push({x:boat.x-60,side:1,t:0,inv:0,dead:0,type:'boss',guard:1,hp:18+G.b*6+Math.floor(STAGES[G.si].d/2),max:18+G.b*6+Math.floor(STAGES[G.si].d/2),spd:.38,w:bd[0]*2,h:bd[1]*2});banner(`<div class="bt">⚔ ${BOSSDEF[G.b].name} يحرس المرسى!</div><div class="bs">${gx('اهزمه لتعبر','اهزميه لتعبري')}</div>`,3000);G.shake=12;gHud()}
  if(I.boss&&!G.bossDead&&G.guardOn&&G.hx>boat.x-30){G.hx=boat.x-30;G.vx=Math.min(0,G.vx)}
  G.hurtT+=dt;if(G.hurtT>300&&G.hp<G.maxhp&&!G.over){G.hurtT=240;G.hp++;gHud()}
  if(G.dmg&&(G.dmg.t-=dt)<=0)G.dmg=null;

  // people
  const walls=side=>G.sites.filter(s=>s.k==='wall'&&s.side===side&&s.lvl>0&&s.hp>0).sort((a,b)=>Math.abs(b.x)-Math.abs(a.x))[0];
  const night=isNight(),aspd=G.sites.some(s=>s.k==='statue'&&s.lvl&&s.buff==='archer')?.7:1,farm=G.sites.find(s=>s.k==='farm'&&s.lvl);
  for(const p of G.people){if(p.role==='guard'){p.t+=dt;continue}p.t+=dt;if(p.cd>0)p.cd-=dt;let goal=p.x,sp=.42;
    if(p.pouch>0&&Math.abs(p.x-G.hx)<40){p.pouch--;dropCoin(p.x,GY-24,Math.sign(G.hx-p.x)*1.2,true);SFX.coin()}
    if(p.flee>0){p.flee-=dt;goal=p.x+p.fdir*200;sp=1.2}
    else switch(p.role){
      case 'vagrant':{const c=G.coins.find(c=>!c.taken&&!c.home&&c.t>15&&Math.abs(c.x-p.x)<40);if(c){goal=c.x;sp=.9;if(Math.abs(c.x-p.x)<4){c.taken=1;p.role='villager';kRecruit();SFX.buy();puff(p.x,GY-16,8,'#f5c542')}}else goal=p.home+Math.sin(p.t/220)*24;break}
      case 'villager':{const order=['bow','hammer','scythe','shield'].map(k=>site(k)).filter(s=>s.stock>0);const cnt=r=>G.people.filter(q=>q.role===r).length;
        const want=order.sort((a,b)=>({bow:cnt('archer')/2,hammer:cnt('builder'),scythe:cnt('farmer')*1.5,shield:cnt('knight')}[a.k])-({bow:cnt('archer')/2,hammer:cnt('builder'),scythe:cnt('farmer')*1.5,shield:cnt('knight')}[b.k]))[0];
        if(want){goal=want.x;if(Math.abs(p.x-want.x)<4){want.stock--;p.role={bow:'archer',hammer:'builder',scythe:'farmer',shield:'knight'}[want.k];p.side=cnt('archer')%2?-1:1;SFX.click()}}else goal=Math.sin(p.t/260+p.home)*40;sp=.6;break}
      case 'archer':{const w=walls(p.side);if(night){goal=w?w.x-p.side*16:p.side*30;sp=.9}else{const bz=G.props.find(r=>r.k==='beast'&&r.alive&&Math.abs(r.x-p.x)<120);if(bz&&p.cd<=0){p.cd=70;p.face=Math.sign(bz.x-p.x);shoot(p,bz.x)}const r=G.props.find(r=>r.k==='rabbit'&&r.alive&&Math.abs(r.x-p.x)<110);goal=r?p.x:(w?w.x+p.side*50+Math.sin(p.t/200)*40:p.side*90+Math.sin(p.t/200)*40);if(r&&p.cd<=0){p.cd=90;p.face=Math.sign(r.x-p.x);shoot(p,r.x,true)}}
        const tw=G.sites.find(s=>s.k==='tower'&&s.side===p.side&&s.lvl),range=(tw?190:140);
        const tgt=G.greed.filter(g=>!g.dead&&Math.abs(g.x-p.x)<range).sort((a,b)=>Math.abs(a.x-p.x)-Math.abs(b.x-p.x))[0];if(tgt&&p.cd<=0){p.cd=70*aspd;p.face=Math.sign(tgt.x-p.x);shoot(p,tgt.x,false,tgt)}break}
      case 'farmer':{if(farm&&!night){goal=farm.x+Math.sin(p.t/90)*26;if(Math.random()<.002*dt&&p.pouch<4){p.pouch++;puff(p.x,GY-10,3,'#f2c24a',1)}}else goal=Math.sin(p.t/300)*30;break}
      case 'knight':{if(G.raid&&!p.vid){goal=p.x;sp=0;break}if(p.vid){goal=(p.home||p.x)+Math.sin(p.t/300+p.x)*28;sp=.45;const g=G.greed.find(g=>!g.dead&&g.type!=='f'&&Math.abs(g.x-p.x)<60);if(g){goal=g.x;sp=.9;if(Math.abs(g.x-p.x)<16&&p.cd<=0){p.cd=36;hitGreed(g,1)}}break}const w=walls(p.side);goal=w?w.x+p.side*(night?8:-10):p.side*40;sp=.7;if(night){const g=G.greed.find(g=>!g.dead&&g.type!=='f'&&Math.abs(g.x-p.x)<16);if(g&&p.cd<=0){p.cd=36;hitGreed(g,1);SFX.click()}}break}
      case 'builder':{if(!p.job||p.job.build<0)p.job=G.sites.filter(s=>s.build>=0&&!G.people.some(q=>q!==p&&q.job===s)).sort((a,b)=>Math.abs(a.x-p.x)-Math.abs(b.x-p.x))[0]||null;
        if(!p.job&&!night){const d=G.sites.find(s=>s.k==='wall'&&s.lvl&&s.hp<s.maxhp);if(d){goal=d.x-d.side*8;if(Math.abs(p.x-goal)<5)d.hp=Math.min(d.maxhp,d.hp+.02*dt)}else goal=Math.sin(p.t/300)*50}
        else if(p.job){goal=p.job.x-(p.job.side||1)*7;sp=.8}if(night&&!p.job)goal=Math.sin(p.t/300)*40;break}
    }
    if(!isFinite(goal))goal=p.home||p.x;p.goal=goal;const gd=goal-p.x,ad=Math.abs(gd);if(ad>(p.moving?1:5)){p.dir=Math.sign(gd);p.vs=Math.min(sp,(p.vs||0)+.05*dt);const st=Math.min(ad,p.vs*dt);p.x+=p.dir*st;p.moving=1;p.face=p.dir}else{p.moving=0;p.vs=0}
  }
  for(const a of G.arrows){a.vy+=.06*dt;a.x+=a.vx*dt;a.y+=a.vy*dt;if(a.y>GY-1)a.dead=1;
    for(const g of G.greed){if(g.dead)continue;const gy=g.type==='f'?GY-50:g.type==='boss'?GY-g.h*.6:g.type==='br'?GY-18:GY-10,gw=g.type==='boss'?g.w*.4:g.type==='br'?16:8;if(Math.abs(a.x-g.x)<gw&&Math.abs(a.y-gy)<(g.type==='boss'?g.h*.5:g.type==='br'?20:12)){hitGreed(g,a.hero&&(G.pk.has('slayAll')||G.pk.has('slayA'))?2:1);a.dead=1;break}}
    if(!a.dead)for(const r of G.props){if(r.k!=='beast'||!r.alive)continue;if(Math.abs(a.x-r.x)<(r.big?20:10)&&Math.abs(a.y-(GY-12+(r.fy||0)))<(r.big?26:14)){hitBeast(r,1);a.dead=1;break}}
    if(a.rabbit&&!a.dead){const r=G.props.find(r=>r.k==='rabbit'&&r.alive&&Math.abs(r.x-a.x)<5&&a.y>GY-8);if(r){r.alive=0;r.respawn=1800;a.dead=1;puff(r.x,GY-4,6,'#ffffff');if(a.owner)a.owner.pouch=Math.min(4,(a.owner.pouch||0)+1);else dropCoin(r.x)}}}
  G.arrows=G.arrows.filter(a=>!a.dead);
  for(const q of G.spawnQ){q.t-=dt;if(q.t<=0){q.done=1;spawnGreed(q)}}G.spawnQ=G.spawnQ.filter(q=>!q.done);
  const gslow=G.pk.has('slow')?.85:1;
  for(const g of G.greed){if(g.dead)continue;if(g.inv>0)g.inv-=dt;g.t+=dt;if(statusTick(g,dt))continue;const dir=g.guard?Math.sign(G.hx-g.x)||-1:(g.flee||g.carry?g.side:-g.side);let sp=g.spd*gslow*(g.flee||g.carry?1.4:1);
    if(!g.flee&&!g.carry){const kn=G.people.find(p=>p.role==='knight'&&!(p.flee>0)&&Math.abs(p.x-g.x)<9&&g.type!=='f');if(kn){sp=0;g.atk=(g.atk||0)+dt;if(g.atk>60){g.atk=0;kn.hp=(kn.hp===undefined?3:kn.hp)-1;if(kn.hp<=0){kn.role='vagrant';kn.flee=200;kn.fdir=g.side;kn.home=g.side*I.half*.6}}}
      const w=G.sites.filter(s=>s.k==='wall'&&s.side===g.side&&s.lvl>0&&s.hp>0&&(s.x-g.x)*g.side<0&&Math.abs(s.x-g.x)<(g.type==='boss'?g.w*.5+4:10)).sort((a,b)=>Math.abs(b.x)-Math.abs(a.x))[0];
      if(w&&g.type!=='f'){sp=0;g.atk=(g.atk||0)+dt;if(g.atk>50){g.atk=0;w.hp-=g.type==='boss'?6:g.type==='br'?3:1;SFX.hit();puff(w.x,GY-20,6,'#8a5a2a',2);if(w.hp<=0){w.lvl=0;w.hp=0;w.maxhp=0;G.stats.lost++;G.shake=10;banner('<div class="bs">انهار سور!</div>',1400)}}}}
    g.x+=dir*sp*dt;if((g.flee||g.carry)&&Math.abs(g.x)>I.pdist+5){g.gone=1;continue}
    if(!g.flee&&!g.carry)for(const p of G.people){if(p.role==='vagrant'||p.flee>0||p.role==='knight')continue;if(Math.abs(p.x-g.x)<8&&(g.type!=='f'||p.role==='archer')){if(p.job)p.job=null;p.role='vagrant';p.pouch=0;p.home=g.side*(I.half*.6);p.flee=200;p.fdir=g.side;g.flee=1;SFX.hit();puff(p.x,GY-14,10,'#e8464f',2);break}}
    if(!g.flee&&!g.carry&&Math.abs(g.x-G.hx)<(g.type==='boss'?g.w*.4:12)&&G.inv<=0){
      const had=G.purse;damageHero(g.type==='boss'?3:g.type==='br'?2:1,g.x);if(G.over)return;if(g.type!=='boss'&&had>0&&G.purse>0){G.purse--;g.carry=1;gHud()}}}
  G.greed=G.greed.filter(g=>!g.dead&&!g.gone);
  updateCombat(dt);
  G.fx.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=(p.g??.06)*dt;p.life-=dt});G.fx=G.fx.filter(p=>p.life>0);
  G.look=(G.look||0)+((G.face*VW*.18)-(G.look||0))*.03*dt;G.cam+=(G.hx+G.look-G.cam)*.08*dt;
  if(Math.floor(G.t/500)!==Math.floor((G.t-dt*16.67)/500))gHud();else if(Math.floor(G.t/250)!==Math.floor((G.t-dt*16.67)/250))drawMini();
}
function damageHero(n,sx){if(!G||G.over||G.inv>0)return;G.inv=55;G.shake=9;SFX.hit();G.vx=Math.sign(G.hx-sx||1)*2.6;G.hurtT=0;G.flash=4;
  if(G.shield){G.shield=0;puff(G.hx,GY-24,10,'#bfe9ff',2);gHud();return}
  G.hp=Math.max(0,G.hp-n);puff(G.hx,GY-30,10,'#e8464f',2);G.dmg={n,t:40};if(G.purse>0&&Math.random()<.5){G.purse--;dropCoin(G.hx,GY-30,(Math.random()-.5)*3)}
  if(G.hp<=0)loseLife();gHud()}
function loseLife(){G.lives--;G.stats.lost++;puff(G.hx,GY-26,30,'#ffffff',3);
  if(G.lives<=0){stageFailed();return}
  G.hp=G.maxhp;G.inv=170;const cx=G.cp||0;G.hx=cx;G.cam=cx;G.vx=0;G.greed.forEach(g=>{if(Math.abs(g.x-cx)<200&&g.type!=='boss')g.flee=1});G.props.forEach(r=>{if(r.k==='beast'&&r.alive&&Math.abs(r.x-cx)<160){r.x=r.x0;if(Math.abs(r.x-cx)<120)r.x=cx+Math.sign(r.x-cx||1)*160}});
  banner(`<div class="bt">${gx('خسرت حياة!','خسرتِ حياة!')}</div><div class="bs">بقي ${G.lives===2?'حياتان':'حياة واحدة'} · ${gx('عدت','عدتِ')} إلى ${cx?'آخر راية':'بداية المرحلة'}</div>`,2600)}
function stageFailed(){G.over=true;S.gold=(S.gold||0)+Math.floor(G.purse/2);S.run=null;save();SFX.hit();const si=G.si;
  setTimeout(()=>modal(`<div class="center celebrate">انتهت الحيوات الثلاث</div><p class="center" style="margin:0;font-weight:800">${gx('لا تستسلم! أعد المرحلة من بدايتها، واضرب الوحوش بزر ⚔ قبل أن تقترب منك.','لا تستسلمي! أعيدي المرحلة من بدايتها، واضربي الوحوش بزر ⚔ قبل أن تقترب منكِ.')}</p><button class="btn gold wide" data-play="${si}">↻ ${gx('أعد المرحلة','أعيدي المرحلة')}</button><button class="btn ghost wide" data-exitgame>الخريطة</button>`,'المرحلة '+(si+1)),700)}
function beastSp(r){return r.spec||species(G.si)[r.kk]}
function shoot(p,tx,rabbit,tg){const dx=tx-p.x,v=3.4,tt=Math.abs(dx)/v;G.arrows.push({x:p.x,y:GY-15,vx:Math.sign(dx)*v,vy:-(.06*tt)/2+(tg&&tg.type==='f'?-.9:0),rabbit,owner:rabbit?p:null,c:'#e0c090'})}
function onNight(){const I=G.I,si=STAGES[G.si].d,blood=I.blood&&G.day%4===0;let n=Math.round(1.5+si*.28+(G.day-1)*(1+si*.05));if(blood)n=Math.round(n*1.8);if(G.day===1)n=si<4?0:Math.ceil(n/2);
  if(G.si<5){banner(`<div class="bt">${ic('moon')} ليلة هادئة</div><div class="bs">${gx('استرح واستعد','استريحي واستعدي')}… سكون الجزر الأولى لن يدوم</div>`,2600);return}
  const live=I.portals.filter(sd=>!G.props.some(p=>p.k==='portal'&&p.side===sd&&p.dead));if(!live.length){banner(`<div class="bt">${ic('moon')} ليلة هادئة</div><div class="bs">الجزيرة محرّرة من بوابات الظلام</div>`,2400);return}
  live.forEach(sd=>{for(let k=0;k<n;k++){const r=Math.random();G.spawnQ.push({t:40+k*55+Math.random()*30,side:sd,type:I.floaters&&r<.25?'f':'g'})}if(I.breeders&&G.day>=2)G.spawnQ.push({t:200,side:sd,type:'br'});if(blood&&I.breeders)G.spawnQ.push({t:500,side:sd,type:'br'})});
  banner(`<div class="bt">${ic('moon')} ${blood?'ليلة القمر الدامي!':'حلّ الليل'}</div><div class="bs">${gx('احمِ مملكتك من الظلال','احمي مملكتك من الظلال')}</div>`,2600);gHud()}
function spawnGreed(q){const x=q.side*G.I.pdist,base={x,side:q.side,t:0,inv:0,dead:0};
  if(q.type==='boss'){const bd=CRDEF[BOSSDEF[G.b].type];G.greed.push(Object.assign(base,{type:'boss',hp:24+G.b*8,max:24+G.b*8,spd:.32,w:bd[0]*2,h:bd[1]*2}));banner(`<div class="bt">⚔ ${BOSSDEF[G.b].name} قادم!</div>`,2600);G.shake=12;return}
  G.greed.push(Object.assign(base,{type:q.type,hp:q.type==='br'?6:1,spd:q.type==='f'?.7:q.type==='br'?.33:.55}))}
function onDawn(){lifeDawn();try{raidDawn()}catch(e){}econDawn();qDawn();try{dayCard(G.day)}catch(e){}G.props.forEach(r=>{if(r.k==='beast'&&!r.alive&&!r.big&&Math.abs(r.x0-G.hx)>300){r.alive=1;r.hp=1+Math.floor(G.si/9);r.x=r.x0}});G.greed.forEach(g=>{if(!g.guard)g.flee=1});const cb=G.sites.some(s=>s.k==='statue'&&s.lvl&&s.buff==='coin')?3:0,inc=1+cb+Math.min(3,town().lvl);
  for(let k=0;k<inc;k++)dropCoin((k-inc/2)*5,GY-30,(Math.random()-.5)*2);
  for(const s of G.sites)if(s.k==='wall'&&s.lvl)s.hp=Math.min(s.maxhp,s.hp+s.maxhp*.25);G.people.forEach(p=>{if(p.role==='knight')p.hp=3});
  banner(`<div class="bt">${ic('sun')} اليوم ${G.day}</div><div class="bs">${gx('مرّ بالرماة والمزارعين ليعطوك ما جمعوه','مرّي بالرماة والمزارعين ليعطوكِ ما جمعوه')} · ${objective()}</div>`,3600);
  if(G.shield===0&&G.pk.has('shield'))G.shield=1;saveRun();gHud()}
function saveRun(){try{const keep={loyal:G.loyal,wood:G.wood,lives:G.lives,hp:G.hp,cp:G.cp,si:G.si,day:G.day,tod:G.tod,purse:G.purse,hx:G.hx,face:G.face,sites:G.sites.map(s=>Object.assign({},s)),people:G.people.map(p=>Object.assign({},p,{job:null})),props:G.props,greed:[],coins:G.coins,bossDead:G.bossDead,stats:G.stats};S.run={si:G.si,day:G.day,g:JSON.stringify(keep)};save()}catch(e){}}
function loseCrown(){G.over=true;S.run=null;save();SFX.hit();
  setTimeout(()=>modal(`<div class="center celebrate">${gx('سُرق تاجك!','سُرق تاجكِ!')}</div><p class="center" style="margin:0;font-weight:800">${gx('أمسكت بك الظلال ومحفظتك فارغة. احرص','أمسكت بكِ الظلال ومحفظتكِ فارغة. احرصي')} على بناء الأسوار وتجنيد الرماة قبل الليل.</p><button class="btn gold wide" data-play="${G.si}">${gx('حاول من جديد','حاولي من جديد')}</button><button class="btn ghost wide" data-exitgame>الخريطة</button>`,'انتهت الجولة'),600)}
function winIsland(){G.over=true;if(G.si===STAGES.length-1)setTimeout(finalVictory,3200);const si=G.si,st=STAGES[si],first=!(S.stars||{})[si],I=G.I;
  if(first){const dc=S.dayClr&&S.dayClr.d===S.day?S.dayClr:{d:S.day,n:0};dc.n++;S.dayClr=dc}const qg=qGoals(),freed=qg[0].ok&&qg[1].ok,stars=1+(qg[0].ok?1:0)+(qg[1].ok?1:0);if(freed&&first)S.gems+=15;S.stars=S.stars||{};S.stars[si]=Math.max(S.stars[si]||0,stars);while(S.stars[S.cleared])S.cleared++;
  S.gold=(S.gold||0)+G.purse;let gems=(first?12+Math.floor(si/3):4)+(G.pk.has('bonus')?10:0),reward=null;if(first){const rw=rewardFor(si);if(rw&&!S.owned.includes(rw)){S.owned.push(rw);reward=ITEM_BY_ID[rw]}}
  S.gems+=gems;S.run=null;save();SFX.win();const nsi=si+1,nst=STAGES[nsi],nGate=nst?gateMsg(nsi):null,nOk=nst&&(S.unlocked[nst.b]||S.openAll)&&!nGate;
  setTimeout(()=>modal(`<div class="center celebrate">${gx('أبحرت إلى الجزيرة التالية!','أبحرتِ إلى الجزيرة التالية!')}</div><div class="center stars">${'★'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
    <p class="center" style="margin:0;font-weight:700">أنهيت «${st.n}» في ${G.day} أيام</p><p class="center note" style="margin:0">${qg.slice(0,3).map(g=>(g.ok?'✓ ':'· ')+g.t+' '+g.v).join(' · ')}${freed?' · الجزيرة محرّرة!':''}</p>
    ${reward?`<div class="reward gotit">${reward.cat==='tool'?ic(reward.icon,'big'):hero(lookWith(reward),3)}<div><div style="font-family:var(--f-display);font-size:20px">مكافأة جديدة!</div>${reward.name}</div></div>`:''}
    <div class="row" style="justify-content:center"><div class="tile">${ic('gem')}<div class="v">+${gems}</div><div class="s">جواهر</div></div></div>
    ${nst?(nOk?`<button class="btn gold wide" data-play="${nsi}">▶ الجزيرة التالية: ${nst.n}</button>`:nGate&&(S.unlocked[nst.b]||S.openAll)?`<p class="center" style="margin:0;font-weight:800">${ic('moon')} ${nGate}</p>`:`<p class="center" style="margin:0;font-weight:800">${ic('lock')} الجزيرة التالية في «${WORLDS[nst.b].name}» وتحتاج <span class="num">${WORLDS[nst.b].cost}</span> نقطة من المهام لفتحها.</p>`):''}
    <button class="btn ghost wide" data-exitgame>الخريطة</button>`,'وصلت بأمان'),400)}
function openGate(){}
/* --- drawing --- */
function drawPerson(c,x,y,p,t){c.save();c.translate(x,GY);c.scale(KS,KS);c.translate(-x,-GY);drawPerson0(c,x,y,p,t);c.restore()}
function drawPerson0(c,x,y,p,t){p._d=(p._d||0)+Math.min(6,Math.abs(p.x-(p._lx??p.x)));p._lx=p.x;const fr=p.moving?1+Math.floor(p._d/.58)%16:0;if(!p.moving){const br=1+Math.sin(t/480+p.x)*.014;c.translate(x,GY);c.scale(1,br);c.translate(-x,-GY)}const spr=subjSprite(p.role==='guard'?'knight':p.role,fr,p.hij?1:0,p.v||0),fl=p.moving?p.dir<0:(p.face||1)<0;
  c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(x,GY,5,1.3,0,0,7);c.fill();
  if(fl){c.save();c.translate(x+9,0);c.scale(-1,1);c.drawImage(spr.cv,0,GY-26,18,28);c.restore()}else c.drawImage(spr.cv,x-9,GY-26,18,28);
  if(p.pouch>0)coinHD(c,x,GY-36,t);return;
  if(p.pouch>0)coin(c,x,GY-34,t)}
function drawGreed(c,g,sx,t,by){const gyb=by===undefined?GY:by,fr=Math.floor(t/120+g.x)%2,fl=(g.flee||g.carry?g.side:-g.side)<0;
  if(g.type==='boss'){const s0=crSprite(CRDEF[BOSSDEF[G.b].type]?BOSSDEF[G.b].type:'golem',Math.floor(t/90)%8,BOSSDEF[G.b].pal,4,'bossHD'+G.b,8),spr={cv:s0.cv,W:s0.W/2,H:s0.H/2};{const dB=()=>{if(!fl){c.save();c.translate(sx+spr.W/2,0);c.scale(-1,1);c.drawImage(spr.cv,0,gyb-spr.H+2,spr.W,spr.H);c.restore()}else c.drawImage(spr.cv,sx-spr.W/2,gyb-spr.H+2,spr.W,spr.H)};dB();if(g.fl>0){c.globalCompositeOperation='lighter';c.globalAlpha=Math.min(1,g.fl/6);dB();c.globalAlpha=1;c.globalCompositeOperation='source-over'}}
    const w=40;px(c,sx-w/2-1,gyb-spr.H-8,w+2,5,INK);px(c,sx-w/2,gyb-spr.H-7,w*g.hp/g.max,3,'#e8464f');return}
  const spr=greedSprite(g.type,fr,G.b),yb=g.type==='f'?gyb-46+Math.sin(t/200+g.x)*4:gyb;
  if(g.type!=='f'){c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(sx,gyb,spr.W*.3,1.6,0,0,7);c.fill()}
  const dG=()=>{if(fl){c.save();c.translate(sx+spr.W/2,0);c.scale(-1,1);c.drawImage(spr.cv,0,yb-spr.H+1,spr.W,spr.H);c.restore()}else c.drawImage(spr.cv,sx-spr.W/2,yb-spr.H+1,spr.W,spr.H)};dG();if(g.fl>0){c.globalCompositeOperation='lighter';c.globalAlpha=Math.min(1,g.fl/5);dG();dG();c.globalAlpha=1;c.globalCompositeOperation='source-over'}
  if(g.carry)coinHD(c,sx,yb-spr.H-10,t);
  c.globalCompositeOperation='lighter';const ex=sx+(fl?-1:1)*(g.type==='br'?2:1),ey=yb-spr.H*(g.type==='f'?.55:.55);const gg=c.createRadialGradient(ex,ey,0,ex,ey,5);gg.addColorStop(0,GREED_PAL[G.b].e);gg.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=gg;c.fillRect(ex-5,ey-5,10,10);c.globalCompositeOperation='source-over'}
function drawSite(c,s,sx,t,near){const th=WORLDS[G.b],y=GY;
  switch(s.k){
    case 'vfort':drawVfort(c,s,sx,t);break;
    case 'tentspot':drawTentSpot(c,s,sx,t);break;
    case 'town':{const L=s.lvl;townBld(c,L,sx,t);
      px(c,sx-1,y-30,2,30,'#3a2410');px(c,sx+1,y-30+(Math.floor(t/300)%2),10,6,'#8a1f2a');px(c,sx+4,y-28,3,2,'#f2b632');
      drawCampfireK(c,sx,y,t);break}
    case 'bow':case 'hammer':case 'scythe':case 'shield':{if((s.k==='scythe'&&town().lvl<1)||(s.k==='shield'&&town().lvl<3))break;vendorBanner(c,s,sx,t);px(c,sx-9,y-14,2,14,'#5a3418');px(c,sx+7,y-14,2,14,'#5a3418');px(c,sx-10,y-15,20,2,'#7a4a24');
      for(let k=0;k<s.stock;k++){const x=sx-7+k*4;if(s.k==='bow'){px(c,x,y-13,1,9,'#a0602a');px(c,x+1,y-13,1,1,'#a0602a');px(c,x+1,y-5,1,1,'#a0602a')}else if(s.k==='hammer'){px(c,x,y-12,1,8,'#6e4a2a');px(c,x-1,y-13,3,2,'#8f97a6')}else if(s.k==='scythe'){px(c,x,y-13,1,10,'#6e4a2a');px(c,x-2,y-13,3,1,'#c3cad6')}else{px(c,x-1,y-12,3,6,'#a8743a');px(c,x,y-10,1,2,'#f2b632')}}break}
    case 'chop':{if(!s.lvl){const im=plantSprite(G.b,0);c.drawImage(im,sx-34,y-86,68,88);if(s.build>=0&&Math.floor(t/150)%2)px(c,sx-2,y-20,4,3,'#c3cad6')}else{px(c,sx-5,y-4,10,4,'#5a3418');px(c,sx-4,y-4,8,1,'#c89a5a')}break}
    case 'wall':{if(s.lvl===0){const ch=G.sites.find(q=>q.k==='chop'&&q.x===s.x);if(!ch||ch.lvl){for(let k=0;k<3;k++)px(c,sx-6+k*4,y-2-(k%2),3,2+(k%2),th.stone);if(s.build>=0){px(c,sx-1,y-14,1,14,'#6e4a2a');px(c,sx-6,y-14,12,1,'#6e4a2a')}}}
      else if(s.lvl===1){for(let k=0;k<5;k++){const x=sx-9+k*4,h=24+(k%2)*3;px(c,x,y-h,3,h,'#6e4a2a');px(c,x,y-h,1,h,'#8a6a3a');px(c,x+1,y-h-2,1,2,'#6e4a2a')}px(c,sx-10,y-14,20,2,'#3a2410')}
      else{const h=s.lvl===2?38:50,col=s.lvl===2?mix(th.castle,'#4a4a58',.4):mix(th.castle,'#1d1633',.45);px(c,sx-11,y-h,22,h,col);for(let r=0;r<h;r+=5)px(c,sx-11,y-h+r,22,1,mix(col,'#000000',.35));for(let r=0;r<h;r+=10)px(c,sx-11+(r%20?6:0),y-h+r,1,5,mix(col,'#000000',.35));for(let k=0;k<3;k++)px(c,sx-11+k*8,y-h-4,6,4,col);if(s.lvl===3){px(c,sx-11,y-h+8,22,2,'#5b6476');px(c,sx-11,y-14,22,2,'#5b6476')}px(c,sx-11,y-h,2,h,mix(col,'#ffffff',.15))}
      if(s.lvl&&s.hp<s.maxhp){px(c,sx-10,y-(s.lvl===1?34:56),20,3,INK);px(c,sx-9,y-(s.lvl===1?33:55),18*s.hp/s.maxhp,1,'#e8464f')}
      if(s.lvl&&isNight()){px(c,sx-s.side*13,y-30,2,6,'#3a2a20');px(c,sx-s.side*13,y-34+(Math.floor(t/90)%2),2,3,'#f5c542')}break}
    case 'tower':{if(s.lvl){px(c,sx-7,y-46,14,46,'#5e3e20');for(let r=0;r<46;r+=9)px(c,sx-7,y-46+r,14,1,'#3a2410');px(c,sx-10,y-48,20,4,'#8a5a2a');c.fillStyle=mix(th.roof,'#2a2030',.3);c.beginPath();c.moveTo(sx-11,y-48);c.lineTo(sx,y-60);c.lineTo(sx+11,y-48);c.fill()}else if(s.build>=0){px(c,sx-6,y-20,1,20,'#6e4a2a');px(c,sx+5,y-20,1,20,'#6e4a2a')}else px(c,sx-4,y-3,8,3,th.stone);break}
    case 'farm':{if(s.lvl){for(let k=0;k<12;k++){const x=sx-30+k*5,sw=Math.round(Math.sin(t/500+k));px(c,x,y-2,4,2,'#5a3a20');px(c,x+1+sw,y-9,1,7,'#b89a3a');px(c,x+sw,y-10,3,2,'#e0b84a')}px(c,sx+30,y-20,2,20,'#5a3a20');px(c,sx+26,y-17,10,2,'#5a3a20');px(c,sx+28,y-24,6,5,'#c89a5a');px(c,sx+27,y-25,8,2,'#e9c46a')}else px(c,sx-20,y-2,40,2,'#5a3a20');break}
    case 'statue':{px(c,sx-8,y-6,16,6,th.stone);px(c,sx-5,y-26,10,20,s.lvl?'#bfe9ff':mix(th.stone,'#000000',.2));px(c,sx-3,y-32,6,6,s.lvl?'#bfe9ff':mix(th.stone,'#000000',.2));if(s.lvl){c.globalCompositeOperation='lighter';circ(c,sx,y-20,18,'rgba(120,200,255,.2)');c.globalCompositeOperation='source-over'}break}
    case 'boat':break;case 'plot':drawPlot(c,s,sx,t);break;case 'boatOld':{px(c,sx-6,y-4,70,3,'#5e3e20');for(let k=0;k<70;k+=10)px(c,sx-6+k,y-1,2,12,'#3a2410');
      if(s.lvl||s.build>=0){const pr=s.lvl?1:s.build/100,bx=sx+28;c.globalAlpha=s.lvl?1:.55+pr*.45;px(c,bx-26,y-2,52,8,'#4a2a14');px(c,bx-30,y-6,60,5,'#6e4a2a');px(c,bx-30,y-6,60,1,'#9a6a3a');if(pr>.4)px(c,bx-1,y-50,2,44,'#2a1a10');if(pr>.75){c.fillStyle='#e8dcc0';c.beginPath();c.moveTo(bx+1,y-48);c.lineTo(bx+22,y-14);c.lineTo(bx+1,y-12);c.fill();px(c,bx+2,y-46,10,2,'#8a1f2a')}c.globalAlpha=1}else px(c,sx+10,y-3,30,3,'#3a2410');break}
  }
  if(near&&payable(s)){const n=costOf(s),per=Math.min(n,6),rowsN=Math.ceil(n/per),tt=performance.now();for(let k=0;k<n;k++){const r0=Math.floor(k/per),inRow=Math.min(per,n-r0*per),x=Math.round(sx-(inRow*7)/2+(k%per)*7+3.5),y=Math.round(GY-70-(rowsN-1-r0)*7+Math.sin(tt/500+k*.6)*.8);c.save();if(k<s.paid){circ(c,x,y,2.6,'#f5c542');c.fillStyle='#fff3b0';c.fillRect(x-1.2,y-1.6,1,1);c.fillStyle='#b07a10';c.fillRect(x-.5,y+1.4,2,.8)}else{c.strokeStyle='rgba(240,248,255,.85)';c.lineWidth=.8;c.beginPath();c.arc(x,y,2.4,0,7);c.stroke();c.strokeStyle='rgba(20,24,40,.45)';c.lineWidth=.5;c.beginPath();c.arc(x,y+.4,3.1,.2,Math.PI-.2);c.stroke()}c.restore()}}
}
var SCK=new Set(['deer','sheep','rabbit','fox','beast','npc','spirit','nhorse']),KS=.85;
function drawProp(c,r,sx,t){if(SCK.has(r.k)){c.save();c.translate(sx,GY);c.scale(KS,KS);c.translate(-sx,-GY);drawProp0(c,r,sx,t);c.restore();return}drawProp0(c,r,sx,t)}
function drawProp0(c,r,sx,t){if(r.k==='pyre'){drawPyre(c,r,sx,t);return}if(r.k==='target'){drawTarget(c,r,sx,t);return}if(r.k==='nhorse'){drawNHorse(c,r,sx,t);return}if(r.k==='npc'){drawNpc(c,r,sx,t);return}if(r.k==='rvil'){drawRvil(c,r,sx,t);return}if(r.k==='relic'){drawRelic(c,r,sx,t);return}if(r.k==='gemchest'){drawGemchest(c,r,sx,t);return}if(r.k==='portal'){drawPortalKTC(c,r,sx,t);return}if(r.hidden&&(r.k==='shrine'||r.k==='relic'||r.k==='gemchest')){drawHiddenHint(c,r,sx,t);return}if(r.k==='deer'||r.k==='sheep'){drawAnimal(c,r,sx,t);return}if(r.k==='shrine'){drawShrine(c,r,sx,t);return}if(r.k==='falls')return;if(r.k==='statue2'){drawStatue2(c,r,sx,t);return}if(r.k==='well'){drawVillageProp(c,r,sx,t);return}if(r.k==='rabbit'){drawRabbit(c,r,sx,t);return}if(r.k==='fox'){drawFox(c,r,sx,t);return}if(r.k==='spirit'){drawSpirit(c,r,sx,t);return}if(r.k==='stall'){drawBld(c,stallSprite(G.b,r.v||0),sx,t);return}if(r.k==='camp'){drawTent(c,r,sx,t);return}const th=WORLDS[G.b],y=GY;
  switch(r.k){
    case 'camp':px(c,sx-12,y-12,12,12,'#5a5046');c.fillStyle='#7a6a58';c.beginPath();c.moveTo(sx-14,y);c.lineTo(sx-6,y-14);c.lineTo(sx+2,y);c.fill();{const f=Math.floor(t/90)%3;px(c,sx+6,y-2,8,2,'#3a2410');px(c,sx+7,y-7+f,6,5-f,'#f08a2a');px(c,sx+8,y-9+f,4,4,'#f5c542')}break;
    case 'chest':chest(c,sx-10,y-15);if(r.open)px(c,sx-10,y-21,20,6,'#b8742e');break;
    case 'portal':{const g=c.createRadialGradient(sx,y-30,2,sx,y-30,40);g.addColorStop(0,'rgba(40,10,60,1)');g.addColorStop(.5,'rgba(90,30,120,.8)');g.addColorStop(1,'rgba(90,30,120,0)');c.fillStyle=g;c.fillRect(sx-40,y-72,80,80);c.fillStyle='#0a0612';c.beginPath();c.ellipse(sx,y-28,12,26,0,0,7);c.fill();for(let k=0;k<6;k++){const a=t/400+k;px(c,sx+Math.cos(a)*9,y-28+Math.sin(a)*20,2,2,'#b06cf0')}px(c,sx-18,y-6,8,6,th.stone);px(c,sx+10,y-8,9,8,th.stone);if(r.max&&r.hp<r.max){c.fillStyle='rgba(10,6,24,.8)';c.fillRect(sx-16,y-66,32,4);c.fillStyle='#b06cf0';c.fillRect(sx-15,y-65,30*r.hp/r.max,2)}if(r.fl>0){r.fl--;c.globalCompositeOperation='lighter';c.fillStyle='rgba(255,255,255,.35)';c.beginPath();c.ellipse(sx,y-28,13,27,0,0,7);c.fill();c.globalCompositeOperation='source-over'}break}
    case 'rabbit':if(r.alive){const h=(r.t%90<30)?Math.abs(Math.sin(r.t/5))*3:0;px(c,sx-2,y-4-h,5,3,'#d6d0c6');px(c,sx+(r.dir>0?2:-2),y-6-h,2,2,'#d6d0c6');px(c,sx+(r.dir>0?3:-2),y-8-h,1,2,'#d6d0c6')}break;
    case 'river':px(c,sx-r.w/2,y-1,r.w,4,th.water);px(c,sx-r.w/2+((t/80|0)%10),y,6,1,th.waterL);break;
    case 'lair':{const th2=WORLDS[G.b];px(c,sx-34,y-22,68,22,mix(th2.stone,'#000000',.35));c.fillStyle=mix(th2.stone,'#000000',.2);c.beginPath();c.moveTo(sx-40,y);c.lineTo(sx-26,y-34);c.lineTo(sx-6,y-40);c.lineTo(sx+20,y-30);c.lineTo(sx+40,y);c.fill();c.fillStyle='#0a0610';c.beginPath();c.ellipse(sx,y-8,12,12,0,Math.PI,0);c.fill();for(let k=0;k<5;k++)px(c,sx-30+k*13,y-3,3,3,'#e6e0d0');if(r.big){px(c,sx-2,y-46,4,8,'#8a1f2a')}break}
    case 'beast':{if(!r.alive)break;if(r.wind>0)sx+=Math.round(Math.sin(t/18)*1.2*RS)/RS;const sp=beastSp(r),rk=RIGS[sp.type],qm=rk==='quad'?(Math.abs(r.spd||0)<.04&&!r.wind&&!(r.pounce>0)?'stand':Math.abs(r.spd||0)>.75||r.pounce>0?'gallop':'walk'):'gallop';if(rk==='quad')RIGMODE=qm==='stand'?'walk':qm;const D=(rk==='fly'?0:rk==='quad'?rigCycle(sp.type,RIGMODE)*1.05:rk==='biped'?17:rk==='lizard'?22:26)*(r.big?2:1),fr=r.frz>0||r.stun>0?0:rk==='fly'||!rk?Math.floor(t/(r.pounce>0?28:44)+r.x0)%16:r.wind>0?4:(Math.abs(r.spd||0)>.04?Math.floor(((r.dist||0)/D)*(rk==='quad'?24:16))%(rk==='quad'?24:16):0),sc=(r.big?4:2)*RS/2,s0=crSprite(sp.type,fr,sp.pal,sc,'bh'+G.si+r.kk+(r.big?'B':'')+(r.spec?sp.type:''),rk==='quad'?24:16),_rm=(RIGMODE='gallop'),spr=r.rider&&sp.type==='horse'?cavSpr(r,sp):{cv:s0.cv,W:s0.W/RS,H:s0.H/RS},fl=(r.face??r.dir)>0,yy=y-spr.H+2+(r.fy||0);
      if(!r.fy){c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(sx,y,spr.W*.35,2,0,0,7);c.fill()}
      if(r.inv>0&&Math.floor(t/50)%2)c.globalAlpha=.6;const idle=Math.abs(r.spd||0)<.04&&!r.wind&&!(r.pounce>0),sY=r.wind>0?.9:r.pounce>0?.95:idle?1+Math.sin(t/430+r.x0)*.018:1,sX=r.wind>0?1.07:r.pounce>0?1.08:1,tilt=(r.fl>0?r.fl/7*.13*(Math.sign(r.x-G.hx)||1):0)+(r.pounce>0?(fl?-.08:.08):0);
      const dI=()=>{c.save();c.translate(sx,yy+spr.H);c.rotate(tilt);c.scale((fl?-sX:sX)*(spr.rf?-1:1),sY);c.drawImage(spr.cv,-spr.W/2,-spr.H,spr.W,spr.H);c.restore()};dI();c.globalAlpha=1;try{if(spr.rf)drawLance(c,spr,sx,yy,fl);else drawBeastRider(c,r,sx,yy,spr,fl,t)}catch(e){}
      if(r.fl>0){c.globalCompositeOperation='lighter';c.globalAlpha=Math.min(1,r.fl/5);dI();dI();c.globalAlpha=1;c.globalCompositeOperation='source-over'}
      if(r.burn>0){c.globalCompositeOperation='lighter';c.globalAlpha=.35+Math.sin(t/60)*.1;const g=c.createRadialGradient(sx,yy+spr.H*.6,0,sx,yy+spr.H*.6,spr.W*.6);g.addColorStop(0,'rgba(255,120,30,.9)');g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(sx-spr.W,yy-spr.H*.2,spr.W*2,spr.H*1.6);c.globalAlpha=1;c.globalCompositeOperation='source-over'}
      if(r.wind>0){c.fillStyle='#ff3a3a';c.font='bold 10px sans-serif';c.textAlign='center';c.lineWidth=2;c.strokeStyle='#1a0a0a';c.strokeText('!',sx,yy-4);c.fillText('!',sx,yy-4);c.globalCompositeOperation='lighter';const g=c.createRadialGradient(sx+(fl?6:-6),yy+spr.H*.35,0,sx+(fl?6:-6),yy+spr.H*.35,6);g.addColorStop(0,'rgba(255,60,40,.9)');g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(sx-14,yy,28,spr.H);c.globalCompositeOperation='source-over'}
      if(r.big){const mx=r.big?10+G.si:1;px(c,sx-15,yy-6,30,3,INK);px(c,sx-14,yy-5,28*Math.max(0,r.hp)/mx,1,'#e8464f')}break}
    case 'ruins':ruinsDraw(c,r,sx);break;
    case 'flag':{c.fillStyle='#4a3424';c.fillRect(sx-.75,y-44,1.5,44);c.fillStyle='#c9a24a';c.fillRect(sx-1.5,y-46,3,2);const w=Math.sin(t/220+r.x)*1.5;c.fillStyle=r.on?'#f2b632':'#8a8296';c.beginPath();c.moveTo(sx+.75,y-43);c.quadraticCurveTo(sx+8,y-41+w,sx+15,y-40+w*1.6);c.lineTo(sx+14,y-32+w);c.quadraticCurveTo(sx+8,y-33+w,sx+.75,y-34);c.fill();if(r.on){c.fillStyle='#e8464f';c.fillRect(sx+5,y-39+w*.6,3,3)}c.fillStyle='#5a5a5e';c.fillRect(sx-4,y-3,8,3);break}
  }}
let FOGT=null;function fogTex(){if(FOGT)return FOGT;FOGT=mkc(640,60);const c=FOGT.getContext('2d'),r=rng(77);for(let k=0;k<40;k++){const x=r()*640,y=20+r()*30,rr=18+r()*30,g=c.createRadialGradient(x,y,1,x,y,rr);g.addColorStop(0,'rgba(255,255,255,.55)');g.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=g;c.fillRect(x-rr,y-rr,rr*2,rr*2)}return FOGT}
function previewStage(cv,si){const isl=makeIsland(si),sv=[VW,VH,GY,KBUF,KB];VW=320;VH=180;GY=122;KBUF=mkc(320*RS,180*RS);KB=KBUF.getContext('2d');KB.setTransform(RS,0,0,RS,0,0);KB.imageSmoothingEnabled=false;cv.width=320*RS;cv.height=180*RS;const cx=cv.getContext('2d');cx.setTransform(RS,0,0,RS,0,0);cx.imageSmoothingEnabled=false;const Gs=G;G={I:isl.I,sites:isl.sites,b:STAGES[si].b,tod:4,si,zones:isl.zones};
  try{pixSpriteHook();renderK(cx,{preview:1,zones:isl.zones,b:STAGES[si].b,si,cam:140,t:2000,sites:isl.sites,people:isl.people,props:isl.props,greed:[],coins:[],parts:[],hx:0},false);pixCanvas(cv,320,180)}catch(e){console.error(e)}G=Gs;[VW,VH,GY,KBUF,KB]=sv}
function stFeatures(st){const I=ISL(st.i),f=['3 حيوات',`${I.lairs} أوكار وحوش`,'وحوش تهاجم','جبال وأنهار وجسور',I.portals.length>1?'بوابتان للظلال':'بوابة واحدة للظلال',TIME_NAME[st.time]];if(st.wx)f.push(WX_NAME[st.wx]);if(I.floaters)f.push('ظلال طائرة');if(I.breeders)f.push('ظلال عملاقة');if(I.blood)f.push('ليالي القمر الدامي');if(I.statue)f.push('تمثال البركة');if(I.boss)f.push('حارس أسطوري');f.push(`قارب بـ ${I.boatCost} عملات`);return f}
function stIcon(st){const I=ISL(st.i);return I.boss?'sword':I.statue?'star':I.portals.length>1?'flame':st.time==='night'?'moon':'map'}
function stageInfo(si){
  const st=STAGES[si],sr=(S.stars||{})[si]||0,rw=ITEM_BY_ID[rewardFor(si)],got=rw&&S.owned.includes(rw.id),run=S.run&&S.run.si===si?S.run:null;
  modal(`<canvas id="pv" width="320" height="180" style="width:100%;height:auto;border:3px solid var(--ink);border-radius:8px"></canvas>
   <div class="feat">${stFeatures(st).map(f=>`<span class="tag">${f}</span>`).join('')}</div>
   <div class="reward" style="background:#f2eefc">${ic('house')}<div><b>المهمة:</b> ${gx('سافر على حصانك عبر الجبال والأنهار والسهول حتى المرسى في نهاية المرحلة. الوحوش والمخلوقات ستهاجمك فاضربها بزر ⚔. لك 3 حيوات، وكل راية تمرّ بها نقطة عودة. إذا انتهت الحيوات الثلاث تعيد المرحلة.','سافري على حصانك عبر الجبال والأنهار والسهول حتى المرسى في نهاية المرحلة. الوحوش والمخلوقات ستهاجمك فاضربيها بزر ⚔. لكِ 3 حيوات، وكل راية تمرّين بها نقطة عودة. إذا انتهت الحيوات الثلاث تعيدين المرحلة.')}</div></div>
   ${st.o.boss?`<div class="mon boss"><canvas data-boss="${st.b}"></canvas><div><b>${BOSSDEF[st.b].name}</b><span>يهاجم في الليالي الأخيرة. الرماة والفرسان وسلاحك يهزمونه</span></div></div>`:''}
   ${rw?`<div class="reward" style="background:#fff6d6">${rw.cat==='tool'?ic(rw.icon,'big'):hero(lookWith(rw),2)}<div>جائزة الجزيرة: <b>${rw.name}</b>${got?' · '+gx('حصلت','حصلتِ')+' عليها ✓':''}</div></div>`:''}
   ${sr?`<div class="center stars">${'★'.repeat(sr)}${'☆'.repeat(3-sr)}</div>`:''}
   ${run?`<button class="btn gold wide" data-resume-run="${si}">▶ ${gx('تابع','تابعي')} من اليوم ${run.day}</button>`:''}
   <button class="btn ${run?'':'gold'} wide" data-play="${si}">${run?'ابدأ من جديد':'▶ '+gx('ابدأ','ابدئي')+' الجزيرة'}</button><button class="btn ghost wide" data-close>رجوع</button>`,`الجزيرة ${si+1} · ${st.n}`);
  previewStage($('#pv'),si);ov.querySelectorAll('canvas[data-boss]').forEach(cv=>drawMonCanvas(cv,bossSprite(+cv.dataset.boss,0),1));
}
function bestiary(){
  let html='';WORLDS.forEach((w,b)=>{['g','f','br'].forEach(k=>{html+=`<div class="bcell"><canvas data-greed="${b}${k}"></canvas><span>${{g:'ظِلّ صغير',f:'ظِلّ طائر',br:'ظِلّ عملاق'}[k]} · ${w.name}</span></div>`});html+=`<div class="bcell boss"><canvas data-boss="${b}"></canvas><span>${BOSSDEF[b].name}</span></div>`});
  modal(`<p class="note" style="margin:0">الظلال المقنّعة تخرج من البوابات ليلًا لتسرق العملات والتاج. لكل منطقة ظلال بلون قناع مختلف وحارس أسطوري.</p><div class="bgrid">${html}</div><button class="btn ghost wide" data-close>إغلاق</button>`,'موسوعة الوحوش');
  ov.querySelectorAll('canvas[data-boss]').forEach(cv=>drawMonCanvas(cv,bossSprite(+cv.dataset.boss,0),1));
  ov.querySelectorAll('canvas[data-greed]').forEach(cv=>{const b=+cv.dataset.greed[0],k=cv.dataset.greed.slice(1);drawMonCanvas(cv,greedSprite(k,0,b),k==='br'?1:2)});
}
function exitGame(){{const pm=document.getElementById('pmenu');if(pm)pm.hidden=true}document.body.classList.remove('ingame','gport');if(G&&!G.over)saveRun();cancelAnimationFrame(graf);G=null;$('#game').hidden=true;$('#gBanner').hidden=true;closeModal();tab='worlds';curTrack=null;render()}

/* ================= HD TERRAIN & RENDER ================= */
let RS=2,SR=2;
const BAY=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
function dth(x,y){return(BAY[((y&3)<<2)+(x&3)]+.5)/16}
function hsh(n){n=Math.imul(n|0,374761393);n=Math.imul(n^(n>>>13),1274126177);n^=n>>>16;return(n>>>0)/4294967296}
function hsh2(x,y,s){return hsh((x|0)*73856093^(y|0)*19349663^((s||0)|0)*83492791)}
function vn2(x,y,s,P){const xi=Math.floor(x),yi=Math.floor(y),u=x-xi,v=y-yi,su=u*u*(3-2*u),sv=v*v*(3-2*v);const w=i=>P?((i%P)+P)%P:i;
  const a=hsh2(w(xi),yi,s),b=hsh2(w(xi+1),yi,s),c=hsh2(w(xi),yi+1,s),d=hsh2(w(xi+1),yi+1,s);return a+(b-a)*su+(c-a)*sv+(a-b-c+d)*su*sv}
function pnoise(P,seed){const L=[],r=rng(seed);for(let i=0;i<P;i++)L.push(r());return x=>{const i=Math.floor(x),u=x-i,a=L[((i%P)+P)%P],b=L[(((i+1)%P)+P)%P],s=u*u*(3-2*u);return a+(b-a)*s}}
function toA(c){if(Array.isArray(c))return c;c=String(c);if(c[0]==='#'||!c.startsWith('rgb'))return rgb(c);const m=c.match(/[\d.]+/g);return m?m.slice(0,3).map(Number):[0,0,0]}
function rampPick(R,t,x,y){const n=R.length;let i=Math.floor(t*n+dth(x,y)-.5);return R[i<0?0:i>=n?n-1:i]}
function lerpA(a,b,t){return[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
function mkR(w,h){return mkc(Math.max(1,Math.round(w)),Math.max(1,Math.round(h)))}

/* ---- biome palettes ---- */
const HDP=[
 {leaf:['#1a2f1e','#26442a','#365e32','#4c7c3a','#6e9e48','#9cc464'],bark:['#2a1c14','#3e2c20','#5a4230','#7a5c42'],stone:['#2c3034','#43494c','#5e6568','#808784','#a6aca4'],moss:'#56783a',
  grass:['#24401c','#355a22','#4a782c','#68983a','#94bc52'],dirt:['#22160e','#33241a','#463424','#5c4630'],tall:['#3a5e24','#527a2e','#6e983a','#94b852'],wheat:['#8a6a28','#b48e3a','#d6b052','#f0d27a'],
  rock:['#3a434c','#535e66','#707c80','#97a2a2','#c2c8c4'],snow:null},
 {leaf:['#10262a','#1a3638','#264a48','#346058','#4a7a6c'],bark:['#2a2226','#3c3034','#54444a','#6e5c60'],stone:['#34404e','#4c5a6c','#6c7c90','#94a4b8','#c4d0de'],moss:'#dfe8f2',
  grass:['#8aa0bc','#acc0d6','#cfdcea','#eaf1f8','#ffffff'],dirt:['#3e4c5e','#526276','#6a7a8e','#8494a8'],tall:['#7a90aa','#9cb0c6','#c2d2e2','#e6eef6'],wheat:null,
  rock:['#3c4a5c','#58687e','#7a8ca2','#a4b4c8','#d4dee8'],snow:['#a4b6cc','#c8d6e6','#e6eef8','#ffffff']},
 {leaf:['#24401a','#365e22','#4e7e2c','#6e9e38','#9cc452'],bark:['#4a3420','#6a4a2e','#8e6a42','#b48e60'],stone:['#5a3622','#7c4e30','#a06c44','#c48e5c','#e2b47e'],moss:'#8a9a4a',
  grass:['#7a5a30','#a07c44','#c49e5c','#dcbc78','#f0d8a0'],dirt:['#5a3c22','#6e4c2c','#845c36','#9a7044'],tall:['#9a7c3a','#bc9c4c','#d8ba62','#ecd488'],wheat:['#8a6a28','#b08a36','#d0aa4c','#ecc86a'],
  rock:['#6a3e24','#8e5634','#b4764a','#d49a64','#f0c08a'],snow:null},
 {leaf:['#1a0e0e','#2a1614','#3c201c','#542c24'],bark:['#0e0808','#1a1010','#2a1c18','#3e2a24'],stone:['#100a0c','#1e1618','#2e2426','#423436','#5a4846'],moss:'#ff6a1a',
  grass:['#221a18','#30241e','#423228','#584234','#6e5440'],dirt:['#100a08','#1a110e','#241814','#30201a'],tall:['#3a2c24','#4e3a2e','#66503e','#806650'],wheat:null,
  rock:['#140e10','#241a1c','#36282a','#4c3a3a','#685250'],snow:null,lava:['#a8200c','#ff4a10','#ff8a20','#ffd040']},
 {leaf:['#5e3258','#844878','#ae6496','#d888b8','#f2b4d4','#fde6f2'],bark:['#3e2c46','#5a4264','#7a5c84','#9a7ca4'],stone:['#5e5084','#7c6ea4','#9e90c4','#c4b8e2','#ece6fc'],moss:'#f6c4e0',
  grass:['#a690cc','#c0aade','#d8c8ee','#eee4f8','#ffffff'],dirt:['#6e5e96','#8272aa','#9888be','#ae9ed2'],tall:['#b29ad6','#cab4e6','#e0d0f2','#f6eefc'],wheat:['#c8a0d0','#dcb8e2','#ecd0f0','#fae8fa'],
  rock:['#6a5c94','#8a7cb4','#ac9ed2','#d0c6ec','#f4f0ff'],snow:['#dcd4f4','#ece6fa','#f8f4ff','#ffffff']}];
const HDC={};

/* ---- sphere-union shaded blobs (no outlines) ---- */
function blobs(c,W,H,cls,shade,ctr){const im=c.getImageData(0,0,W,H),d=im.data,N=W*H,ZB=new Float32Array(N).fill(-1e9),ID=new Int32Array(N).fill(-1),Lx=.5,Ly=-.62,Lz=.6;
  for(let qi=0;qi<cls.length;qi++){const q=cls[qi],rm=q.r*(q.fr===0?1:1.08),x0=Math.max(0,Math.floor(q.x-rm-1)),x1=Math.min(W-1,Math.ceil(q.x+rm+1)),y0=Math.max(0,Math.floor(q.y-rm-1)),y1=Math.min(H-1,Math.ceil(q.y+rm+1)),qz=q.z||0;
    for(let y=y0;y<=y1;y++){const dy=y-q.y,row=y*W;for(let x=x0;x<=x1;x++){const dx=x-q.x,rr=q.fr===0?q.r:q.r*(.86+.22*hsh2(x>>1,y>>1,7)),d2=dx*dx+dy*dy,r2=rr*rr;if(d2>r2)continue;const zz=qz+Math.sqrt(r2-d2),p=row+x;if(zz>ZB[p]){ZB[p]=zz;ID[p]=qi}}}}
  for(let p=0;p<N;p++){const qi=ID[p];if(qi<0)continue;const q=cls[qi],x=p%W,y=(p/W)|0,rr=q.fr===0?q.r:q.r*(.86+.22*hsh2(x>>1,y>>1,7)),dx=x-q.x,dy=y-q.y,z=Math.sqrt(Math.max(0,rr*rr-dx*dx-dy*dy)),bn=[dx/rr,dy/rr,z/rr,q];
    const lam=Math.max(0,bn[0]*Lx+bn[1]*Ly+bn[2]*Lz),col=shade(lam,bn,x,y);if(!col){ID[p]=-1;continue}const o=p*4;d[o]=col[0];d[o+1]=col[1];d[o+2]=col[2];d[o+3]=255}
  if(ctr){for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++){const i=y*W+x,qi=ID[i];if(qi<0)continue;const l=Math.round((cls[qi].z||0)/ctr);let occ=0;for(const j of [i-1,i+1,i-W,i+W]){const qj=ID[j];if(qj>=0&&Math.round((cls[qj].z||0)/ctr)>l+.5&&ZB[j]>ZB[i]+ctr*.6){occ=1;break}}if(occ){const o=i*4;d[o]*=.45;d[o+1]*=.43;d[o+2]*=.5}}}
  c.putImageData(im,0,0)}
function trunkHD(c,cx,base,h,w,bark,r,lean){const B=bark.map(toA);for(let y=0;y<h;y++){const f=y/h,ww=w*(1-f*.45)+(f<.08?(.08-f)*w*6:0),xc=cx+(lean||0)*f*f*h*.15;
    for(let x=Math.floor(xc-ww);x<=Math.ceil(xc+ww);x++){const u=(x-xc)/ww;if(Math.abs(u)>1)continue;let t=.5+u*.42+(hsh2(x,y>>2,3)-.5)*.25;if(((x*7+(y>>3)*13)%9)===0)t-=.3;c.fillStyle=`rgb(${rampPick(B,Math.max(0,Math.min(.999,t)),x,y)})`;c.fillRect(x,base-y-1,1,1)}}}
function hdPlant(b,v,vr){const k=b+'_'+v+'_'+(vr||0)+'_'+RS;if(HDC[k])return HDC[k];const R=RS,W=60*R,H=76*R,cv=mkc(W,H),c=cv.getContext('2d'),P=HDP[b],r=rng(b*131+v*17+(vr||0)*977+5),cx=W/2;
  const kinds=[['tree','bush','flowers'],['pine','snowrock','pine'],['palm','cactus','rock'],['dead','lavarock','redcrystal'],['blossom','cloudpuff','blossom']][b];
  const kind=kinds[v]||'tree',ST=P.stone.map(toA);let LF=P.leaf.map(toA);
  if(kind==='tree'&&(b===0||b===2)){const AUT=[['#3a1410','#6a1e16','#9a2a1c','#c43e22','#e4643a'],['#3a2010','#6a3a14','#a2561a','#d07a22','#f0a840'],['#2e2a0e','#5a5214','#8a8020','#b8aa34','#dcd060'],['#2a1a1a','#4e2424','#7a3028','#a84a30','#c86a44']],h=hsh2(b*7+v,(vr||0)*13+3,77);if(h<.42){const A=AUT[Math.floor(h/.42*AUT.length)%AUT.length].map(toA);LF=LF.map((c0,i)=>A[Math.min(A.length-1,Math.round(i/(LF.length-1)*(A.length-1)))])}}
  const leafShade=(ramp,ao0,ao1)=>(lam,n,x,y)=>{let t=.12+lam*.82;const fy=(y-ao0)/(ao1-ao0);t-=Math.max(0,fy-.45)*.45;t+=(hsh2(x>>1,y>>1,11)-.5)*.2;return rampPick(ramp,Math.max(0,Math.min(.999,t)),x,y)};
  switch(kind){
    case 'tree':case 'blossom':{const th=H*(.5+r()*.08),cy=H*(.36+r()*.04),rx=W*(.3+r()*.06),ry=H*.22;trunkHD(c,cx,H,th,3.6*R,P.bark,r,(r()-.5));
      c.strokeStyle=P.bark[1];c.lineWidth=1.6*R;for(let k=0;k<3;k++){c.beginPath();c.moveTo(cx,H-th*(.55+k*.12));c.lineTo(cx+(k%2?-1:1)*rx*.6,cy+ry*.2-k*R*3);c.stroke()}
      const cls=[];for(let k=0;k<22;k++){const a=r()*Math.PI*2,rr=Math.sqrt(r());cls.push({x:cx+Math.cos(a)*rx*rr*.85,y:cy+Math.sin(a)*ry*rr*.85,r:(7+r()*7)*R,z:r()*rx*.4})}
      blobs(c,W,H,cls,leafShade(LF,cy-ry,cy+ry*1.2));
      if(kind==='blossom')for(let k=0;k<26;k++){const x=cx+(r()-.5)*rx*1.8|0,y=cy+(r()-.6)*ry*1.6|0;c.fillStyle=r()<.5?'#ffffff':'#ffe0ee';c.fillRect(x,y,R,R)}
      break}
    case 'pine':{const th=H*.95,tiers=6+((r()*2)|0),SN=P.snow&&P.snow.map(toA);trunkHD(c,cx,H,H*.3,2.6*R,P.bark,r,0);
      for(let k=0;k<tiers;k++){const f=k/(tiers-1),top=H-th+f*th*.72,hh=th*.2+f*th*.04,wb=(6+f*17)*R;
        for(let y=0;y<hh;y++){const ww=wb*(y/hh)*(.85+.15*Math.sin(y*.9+k));for(let x=Math.floor(cx-ww);x<=Math.ceil(cx+ww);x++){const u=(x-cx)/Math.max(1,ww),edge=Math.abs(u)>.86&&hsh2(x,y+k*40,5)<.5;if(edge)continue;
            let t=.4+u*.32-(y/hh)*.3+(hsh2(x>>1,(y+k*40)>>1,9)-.5)*.22;let col=rampPick(LF,Math.max(0,Math.min(.999,t)),x,y);
            if(SN&&y<hh*.35+hsh2(x,k,2)*3*R&&u>-.6)col=rampPick(SN,Math.max(0,Math.min(.999,.35+u*.5+(y<2?.3:0))),x,y);
            c.fillStyle=`rgb(${col})`;c.fillRect(x,Math.round(top+y),1,1)}}}break}
    case 'palm':{const th=H*.78,lean=(r()<.5?-1:1)*W*.12;const pts=[];for(let i=0;i<=40;i++){const f=i/40;pts.push([cx+lean*f*f,H-f*th])}
      const BK=P.bark.map(toA);pts.forEach(([x,y],i)=>{const w=(3.4-i/40*1.4)*R;for(let xx=-w;xx<=w;xx++){const u=xx/w;let t=.5+u*.4-((i%4)===0?.3:0);c.fillStyle=`rgb(${rampPick(BK,Math.max(0,Math.min(.999,t)),Math.round(x+xx),Math.round(y))})`;c.fillRect(Math.round(x+xx),Math.round(y),1,Math.ceil(th/40)+1)}});
      const [tx,ty]=pts[40];for(let k=0;k<8;k++){const a=-Math.PI*.95+k*(Math.PI*1.9/7)+(r()-.5)*.2,len=(20+r()*6)*R;for(let s=0;s<=26;s++){const f=s/26,x=tx+Math.cos(a)*len*f,y=ty+Math.sin(a)*len*f*.6+f*f*len*.55;
          for(let q=-1;q<=1;q+=2){const lx=x+q*Math.sin(a)*4*R*(1-f*.6),ly=y+4*R*(1-f*.3);c.strokeStyle=`rgb(${rampPick(LF,Math.max(0,Math.min(.999,.3+(Math.cos(a)*.3)+(q>0?.2:0))),s,k)})`;c.lineWidth=1;c.beginPath();c.moveTo(x,y);c.lineTo(lx,ly);c.stroke()}
          c.fillStyle=P.leaf[1];c.fillRect(Math.round(x),Math.round(y),R,R)}}
      for(let k=0;k<3;k++){c.fillStyle=k%2?'#5a3a1e':'#7a5228';c.beginPath();c.arc(tx+(k-1)*2.4*R,ty+3*R,2*R,0,7);c.fill()}break}
    case 'dead':{const BK=P.bark;const br=(x,y,a,len,w,dep)=>{const ex=x+Math.sin(a)*len,ey=y-Math.cos(a)*len;c.strokeStyle=BK[Math.min(3,1+dep%3)];c.lineWidth=w;c.lineCap='round';c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+Math.sin(a)*len*.5+(r()-.5)*6,y-Math.cos(a)*len*.5,ex,ey);c.stroke();
        c.strokeStyle=BK[0];c.lineWidth=Math.max(1,w*.35);c.beginPath();c.moveTo(x-w*.3,y);c.lineTo(ex-w*.3,ey);c.stroke();
        if(dep<5&&len>4*R){const n=dep<1?3:2;for(let k=0;k<n;k++)br(ex,ey,a+(k-(n-1)/2)*(.6+r()*.4),len*(.62+r()*.15),w*.65,dep+1)}else if(P.lava&&r()<.25){c.fillStyle=P.lava[2];c.fillRect(ex|0,ey|0,R,R)}};
      br(cx,H,0,H*.28,5*R,0);break}
    case 'bush':case 'cloudpuff':{const cls=[];for(let k=0;k<12;k++)cls.push({x:cx+(r()-.5)*W*.5,y:H-(6+r()*9)*R,r:(5+r()*5)*R,z:r()*8});
      const RP=kind==='cloudpuff'?['#c0b0e0','#d8ccf0','#ece6fa','#ffffff'].map(toA):LF;blobs(c,W,H,cls,leafShade(RP,H-22*R,H));
      if(kind==='bush')for(let k=0;k<6;k++){c.fillStyle=['#f29ccf','#f5e08a','#ffffff'][k%3];c.fillRect(cx+(r()-.5)*W*.45|0,H-(6+r()*12)*R|0,R,R)}break}
    case 'flowers':{const T=P.tall.map(toA);for(let k=0;k<26;k++){const x=cx+(r()-.5)*W*.6,h=(5+r()*9)*R;for(let y=0;y<h;y++){c.fillStyle=`rgb(${rampPick(T,y/h*.9,x|0,y)})`;c.fillRect(Math.round(x+Math.sin(y/h*2)*R),H-y-1,1,1)}if(k%2){c.fillStyle=['#f29ccf','#f5e08a','#ffffff','#b8a0f0'][k%4];c.fillRect(Math.round(x)-R/2,H-h-R,R*1.5,R*1.5)}}break}
    case 'rock':case 'snowrock':case 'lavarock':{const cls=[];for(let k=0;k<6;k++)cls.push({x:cx+(r()-.5)*W*.38,y:H-(4+r()*5)*R,r:(5+r()*6)*R,z:r()*5,fr:0});
      const SN=P.snow&&P.snow.map(toA),LV=P.lava&&P.lava.map(toA);
      blobs(c,W,H,cls,(lam,n,x,y)=>{let t=.1+lam*.85+(hsh2(x>>1,y>>1,4)-.5)*.18;if(((x+y*3)>>2)%11===0)t-=.25;
        if(kind==='snowrock'&&SN&&n[1]<-.25)return rampPick(SN,Math.min(.999,t+.2),x,y);
        if(kind==='lavarock'&&LV&&hsh2(x>>1,y>>2,8)>.93)return LV[2+((x+y)&1)];
        if(b===0&&n[1]<-.55&&hsh2(x,y,1)>.4)return toA(P.moss);
        return rampPick(ST,Math.max(0,Math.min(.999,t)),x,y)});break}
    case 'cactus':{const G2=['#1e4a26','#2e6a34','#428a44','#62aa5a','#8acc78'].map(toA);const col=(x0,y0,w,h)=>{for(let y=0;y<h;y++)for(let x=-w;x<=w;x++){const u=x/w,cap=y<w?Math.sqrt(1-Math.pow((w-y)/w,2)):1;if(Math.abs(u)>cap)continue;let t=.45+u*.4-(((x+w)%Math.max(2,Math.round(w/2)))===0?.25:0);c.fillStyle=`rgb(${rampPick(G2,Math.max(0,Math.min(.999,t)),x0+x,y0+y)})`;c.fillRect(x0+x,y0+y,1,1)}};
      col(cx,H-38*R,5*R,38*R);col(cx-12*R,H-28*R,3*R,14*R);for(let x=cx-12*R;x<cx;x++){c.fillStyle='#2e6a34';c.fillRect(x,H-17*R,1,4*R)}col(cx+11*R,H-32*R,3*R,12*R);for(let x=cx;x<cx+11*R;x++){c.fillStyle='#2e6a34';c.fillRect(x,H-22*R,1,4*R)}
      c.fillStyle='#f29ccf';c.fillRect(cx-R,H-40*R,3*R,2*R);break}
    case 'redcrystal':{[[-7,16,-.2],[0,26,0],[7,14,.25],[-2,10,-.5]].forEach(([dx,h,a])=>{const bx=cx+dx*R,hh=h*R,ww=3.4*R;c.save();c.translate(bx,H);c.rotate(a);
        c.fillStyle='#8a1a24';c.beginPath();c.moveTo(-ww,0);c.lineTo(-ww,-hh*.75);c.lineTo(0,-hh);c.lineTo(0,0);c.fill();c.fillStyle='#e8464f';c.beginPath();c.moveTo(0,0);c.lineTo(0,-hh);c.lineTo(ww,-hh*.75);c.lineTo(ww,0);c.fill();c.fillStyle='#ff9a8a';c.fillRect(ww*.3,-hh*.7,R,hh*.5);c.restore()});break}
  }
  return HDC[k]=cv}
function plantSprite(b,v){return hdPlant(b,v,0)}

/* ---- landscape strips ---- */
function rockField(Wd,Hd,Hh,o){const F=new Float32Array(Wd*Hd),sc=o.sc*RS,P=o.wrap?Math.max(1,Math.round(Wd/sc)):0;
  for(let i=0;i<Wd;i++){const top=Math.max(0,Math.floor(Hh[i])-1);for(let y=top;y<Hd;y++){let v=0,a=1,f=1;for(let k=0;k<o.oct;k++){const n=vn2(i/sc*f,y/(sc*o.ay)*f,o.seed+k*31,P?P*f:0);v+=(1-Math.abs(2*n-1))*a;a*=.5;f*=2}F[y*Wd+i]=v}}return F}
function rockLam(F,Wd,Hd,i,y,k,wrap){const p=y*Wd+i,l=i>0?F[p-1]:(wrap?F[p+Wd-1]:F[p]),r=i<Wd-1?F[p+1]:(wrap?F[p-Wd+1]:F[p]),u=y>0?F[p-Wd]:F[p],d=y<Hd-1?F[p+Wd]:F[p];
  let nx=-(r-l)*k,ny=-(d-u)*k,nz=1;const m=Math.hypot(nx,ny,nz);nx/=m;ny/=m;nz/=m;return[Math.max(0,nx*.62-ny*.5+nz*.6),ny]}
function mtnStrip(Wd,Hd,gyd,o){const cv=mkc(Wd,Hd),c=cv.getContext('2d'),im=c.createImageData(Wd,Hd),d=im.data,R=RS;
  const oct=[];for(let k=0;k<5;k++)oct.push(pnoise(o.P*(1<<k),o.seed+k*17));const Hh=new Float32Array(Wd);
  for(let i=0;i<Wd;i++){let v=0,a=1,s=0;for(let k=0;k<5;k++){let n=oct[k](i/Wd*o.P*(1<<k));if(o.ridge&&k<3)n=1-Math.abs(2*n-1);v+=n*a;s+=a;a*=o.rough}v/=s;Hh[i]=gyd-(o.base+o.amp*Math.pow(v,o.pow||1.5))*R}
  const hz=toA(o.haze),ramp=o.ramp.map(toA),snow=o.snow&&o.snow.map(toA),fld=o.fields&&o.fields.map(f=>f.map(toA)),RF=o.rock?rockField(Wd,Hd,Hh,{sc:o.rock,oct:o.oct||3,ay:1.3,seed:o.seed+50,wrap:1}):null;
  for(let i=0;i<Wd;i++){const top=Math.max(0,Math.floor(Hh[i])),sl=(Hh[(i+3*R)%Wd]-Hh[(i-3*R+Wd)%Wd])/R,span=Math.max(8,gyd-top);
    const fi=fld?Math.floor((i/(70*R))+vn2(i/(40*R),0,o.seed+3,Wd/(40*R))*1.5):0;
    for(let y=top;y<Hd;y++){const dep=(y-Hh[i])/R,f=Math.min(1,(y-top)/span);
      let t,ny=0;if(RF){const q=rockLam(RF,Wd,Hd,i,y,o.rk,1);ny=q[1];t=.08+q[0]*.72+Math.max(-.22,Math.min(.22,sl*o.slK))+(dep<1.2?.16:0)}else{t=.48+Math.max(-.42,Math.min(.42,sl*o.slK))+(dep<1.5?.18:0);if(o.gully)t+=(vn2(i/(R*3.5),y/(R*3.5),o.seed,Wd/(R*3.5))-.5)*o.gully}
      t-=f*(o.fadeDark||.2);t=Math.max(0,Math.min(.999,t));
      let col;const sline=gyd-(o.base+o.amp*o.snowAt)*R+(vn2(i/(R*6),0,o.seed+5,Wd/(R*6))-.5)*12*R;
      if(snow&&y<sline&&(ny<.15||y<sline-8*R))col=rampPick(snow,Math.min(.999,t+.2),i,y);
      else if(fld&&dep>2){const F=fld[((fi%fld.length)+fld.length)%fld.length];col=rampPick(F,t,i,y);if(((y-top)/R|0)%9===0&&hsh2(i>>2,y,2)>.4)col=ramp[0]}
      else col=rampPick(ramp,t,i,y);
      const hk=Math.min(1,o.hazeK*(.3+f*.9));const p=(y*Wd+i)*4;d[p]=col[0]+(hz[0]-col[0])*hk;d[p+1]=col[1]+(hz[1]-col[1])*hk;d[p+2]=col[2]+(hz[2]-col[2])*hk;d[p+3]=255}}
  c.putImageData(im,0,0);
  if(o.pines){const pc=toA(o.pines),pl=lerpA(pc,toA(o.haze),.25),r=rng(o.seed+9);for(let i=0;i<Wd;i+=Math.max(1,Math.round((2+r()*4)*R*(o.pineGap||1)))){const top=Hh[i];const band=(gyd-top);if(band<6*R)continue;const y=top+band*(.45+r()*.55),h=(2.5+r()*3.5)*R*(o.pineS||1);
      for(let yy=0;yy<h;yy++){const w=Math.max(1,Math.round(yy/h*h*.38));c.fillStyle=`rgb(${(yy/h<.5?pl:pc).map(Math.round)})`;c.fillRect(i-w,Math.round(y-h+yy),w,1);c.fillStyle=`rgb(${pc.map(v=>Math.round(v*.8))})`;c.fillRect(i,Math.round(y-h+yy),w,1)}}}
  if(o.hedges){const hc=toA(o.hedges),r=rng(o.seed+21);for(let i=0;i<Wd;i+=Math.round((3+r()*16)*R)){const top=Hh[i];if(r()<.5){const s=(1.5+r()*2.5)*R;c.fillStyle=`rgb(${hc.map(Math.round)})`;c.beginPath();c.arc(i,top-s*.4,s,0,7);c.fill();c.fillStyle=`rgba(255,240,200,.18)`;c.beginPath();c.arc(i+s*.3,top-s*.7,s*.5,0,7);c.fill()}}}
  return cv}
function pcirc(c,x,y,r){x=Math.round(x);y=Math.round(y);r=Math.max(1,Math.round(r));for(let dy=-r;dy<=r;dy++){const w=Math.floor(Math.sqrt(r*r-dy*dy)+.3);c.fillRect(x-w,y+dy,w*2+1,1)}}
function forestStrip(Wd,Hd,gyd,o){const cv=mkc(Wd,Hd),c=cv.getContext('2d'),r=rng(o.seed),R=RS,RP=o.ramp.map(toA),kind=o.kind;
  const trees=[];for(let x=-30*R;x<Wd+30*R;x+=o.gap*(.45+r()*.9)*R*(r()<o.clear?6:1))trees.push({x,h:(o.hmin+r()*(o.hmax-o.hmin))*R,s:r()});
  const one=(X,T)=>{const h=T.h,base=gyd;
    c.fillStyle=`rgb(${RP[0].map(Math.round)})`;c.fillRect(Math.round(X-R*o.tw),base-h*.6,Math.max(1,Math.round(R*o.tw*2)),h*.6);
    if(kind==='pine'){const tiers=5;for(let k=0;k<tiers;k++){const f=k/(tiers-1),top=base-h+f*h*.66,hh=h*.24,wb=h*(.12+f*.16);for(let y=0;y<hh;y+=1){const ww=wb*y/hh;const xl=Math.round(X-ww),xr=Math.round(X+ww);c.fillStyle=`rgb(${RP[1].map(Math.round)})`;c.fillRect(xl,Math.round(top+y),Math.max(1,Math.round(X)-xl),1);c.fillStyle=`rgb(${RP[2].map(Math.round)})`;c.fillRect(Math.round(X),Math.round(top+y),Math.max(1,xr-Math.round(X)),1);if(o.snow&&y<2*R){c.fillStyle=o.snow;c.fillRect(Math.round(X),Math.round(top+y),Math.max(1,(xr-Math.round(X))),1)}}}return}
    if(kind==='palm'){c.strokeStyle=`rgb(${RP[1].map(Math.round)})`;c.lineWidth=Math.max(1,R*o.tw*1.4);c.beginPath();c.moveTo(X,base);c.quadraticCurveTo(X+h*.08,base-h*.5,X+h*.12,base-h);c.stroke();for(let k=0;k<6;k++){const a=-2.9+k*.95;c.strokeStyle=`rgb(${RP[k%2?1:2].map(Math.round)})`;c.lineWidth=Math.max(1,R*1.2);c.beginPath();c.moveTo(X+h*.12,base-h);c.quadraticCurveTo(X+h*.12+Math.cos(a)*h*.22,base-h+Math.sin(a)*h*.12-h*.05,X+h*.12+Math.cos(a)*h*.34,base-h+h*.12);c.stroke()}return}
    if(kind==='dead'){c.strokeStyle=`rgb(${RP[1].map(Math.round)})`;c.lineWidth=Math.max(1,R*o.tw*1.6);c.beginPath();c.moveTo(X,base);c.lineTo(X,base-h);c.stroke();c.lineWidth=Math.max(1,R*.8);for(let k=0;k<5;k++){const y=base-h*(.4+k*.13),d=k%2?1:-1;c.beginPath();c.moveTo(X,y);c.lineTo(X+d*h*.18,y-h*.12);c.lineTo(X+d*h*.24,y-h*.2);c.stroke()}return}
    {const base=gyd,tw=Math.max(1,R*o.tw*1.15),cyc=base-h*.68,cw=h*(.24+T.s*.1);
      // trunk + branches
      for(let y=Math.round(base-h*.75);y<base;y++){const u=(y-(base-h*.75))/(h*.75),w=tw*(.7+u*.6);c.fillStyle=`rgb(${RP[0].map(Math.round)})`;c.fillRect(Math.round(X-w),y,Math.max(1,Math.round(w*2)),1)}
      c.strokeStyle=`rgb(${RP[0].map(Math.round)})`;c.lineWidth=Math.max(1,tw*.8);for(const d of [-1,1]){c.beginPath();c.moveTo(X,base-h*.45);c.quadraticCurveTo(X+d*cw*.3,base-h*.55,X+d*cw*.55,base-h*.66);c.stroke()}
      // clumps
      const K=[],nk=6+((T.s*5)|0);for(let k=0;k<nk;k++){const a=-Math.PI/2+(k/(nk-1)-.5)*2.6+(hsh2(k,T.x|0,o.seed)-.5)*.5,dd=cw*(.35+hsh2(k,3,o.seed)*.45);K.push([X+Math.cos(a)*dd,cyc+Math.sin(a)*dd*.85+cw*.15,cw*(.38+hsh2(k,5,o.seed)*.22)])}K.push([X,cyc,cw*.62]);
      const x0=Math.floor(X-cw*1.4),x1=Math.ceil(X+cw*1.4),y0=Math.floor(cyc-cw*1.4),y1=Math.ceil(cyc+cw*1.1);const im=c.getImageData(Math.max(0,x0),Math.max(0,y0),Math.max(1,Math.min(Wd,x1)-Math.max(0,x0)),Math.max(1,Math.min(Hd,y1)-Math.max(0,y0))),d=im.data,iw=im.width,P=R>2?R-1:R;
      for(let y=Math.max(0,y0);y<Math.min(Hd,y1);y++)for(let x=Math.max(0,x0);x<Math.min(Wd,x1);x++){const qx=Math.floor(x/P),qy=Math.floor(y/P),nz=hsh2(qx,qy,o.seed+7);let best=-9,bk=null;
        for(const q of K){const dx=(x-q[0])/q[2],dy=(y-q[1])/q[2],v=1-dx*dx-dy*dy;if(v>best){best=v;bk=[dx,dy]}}
        if(best+(nz-.5)*.55<.05)continue;const lit=Math.max(0,-bk[0]*.55-bk[1]*.85),dep=(y-(cyc-cw))/(cw*2.2);let t=.18+lit*.62-dep*.28+(nz-.5)*.18+(hsh2(qx>>1,qy>>1,o.seed+9)>.8?.12:0);
        const ramp=RP.length>3?RP:RP;t=Math.max(0,Math.min(.999,t));const ci=Math.min(ramp.length-1,1+Math.floor(t*(ramp.length-1))),col=ramp[ci];const p=((y-Math.max(0,y0))*iw+(x-Math.max(0,x0)))*4;d[p]=col[0];d[p+1]=col[1];d[p+2]=col[2];d[p+3]=255}
      c.putImageData(im,Math.max(0,x0),Math.max(0,y0))}};
  trees.forEach(T=>{one(T.x,T);if(T.x<50*R)one(T.x+Wd,T);if(T.x>Wd-50*R)one(T.x-Wd,T)});
  {const im=c.getImageData(0,0,Wd,Hd),d=im.data;for(let y=0;y<Hd;y++)for(let x=0;x<Wd;x++){const p=(y*Wd+x)*4;if(d[p+3]<10)continue;const h=hsh2(x>>1,y>>1,o.seed),k=h<.18?.86:h>.9?1.1:1;if(k!==1){d[p]=Math.min(255,d[p]*k);d[p+1]=Math.min(255,d[p+1]*k);d[p+2]=Math.min(255,d[p+2]*k)}}c.putImageData(im,0,0)}
  if(o.fade){const g=c.createLinearGradient(0,gyd-o.fade*R,0,gyd);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,o.fadeC);c.globalCompositeOperation='source-atop';c.fillStyle=g;c.fillRect(0,0,Wd,Hd);c.globalCompositeOperation='source-over'}
  return cv}
function skyHD(W,H,gy,P,mode,b){const R=RS,Wd=W*R,Hd=H*R,gyd=gy*R,cv=mkc(Wd,Hd),c=cv.getContext('2d'),im=c.createImageData(Wd,Hd),d=im.data,S4=P.sky.map(toA);
  const sx=W*.74*R,sy=gy*.28*R,sr=Math.max(9,gy*.075)*R,glow=mode==='night'?[220,230,255]:mode==='dusk'?[255,170,110]:[255,240,200];
  for(let y=0;y<Hd;y++){const f=Math.min(1,y/gyd)*3,i=Math.min(2,Math.floor(f)),u=f-i;const base=lerpA(S4[i],S4[i+1],u);
    for(let x=0;x<Wd;x++){const dx=x-sx,dy=(y-sy)*1.1,dd=Math.sqrt(dx*dx+dy*dy)/sr;let g=dd<1?0:Math.max(0,1-(dd-1)/7);g=g*g*(mode==='night'?.35:.6);
      const band=Math.floor(g*8+dth(x,y))/8;const col=lerpA(base,glow,band);const p=(y*Wd+x)*4;d[p]=col[0];d[p+1]=col[1];d[p+2]=col[2];d[p+3]=255}}
  c.putImageData(im,0,0);
  // sun / moon disc
  const disc=mode==='night'?['#c8d2f0','#e6ecff','#ffffff']:mode==='dusk'?['#ff9a5a','#ffc27a','#ffe0a0']:['#ffe6a8','#fff4d0','#ffffff'];
  for(let y=-sr;y<=sr;y++)for(let x=-sr;x<=sr;x++){const q=(x*x+y*y)/(sr*sr);if(q>1)continue;const t=Math.min(.999,.3+(-x-y)/sr*.3+(1-q)*.4);c.fillStyle=disc[Math.min(2,Math.floor(t*3+dth(x+999,y+999)-.5))]||disc[1];c.fillRect(Math.round(sx+x),Math.round(sy+y),1,1)}
  if(mode==='night'){for(let k=0;k<5;k++){c.fillStyle='rgba(120,130,170,.35)';c.beginPath();c.arc(sx+(k*7%5-2)*sr*.3,sy+(k*3%5-2)*sr*.3,sr*(.12+k%3*.05),0,7);c.fill()}
    const r=rng(b*7+1);for(let k=0;k<220;k++){const x=r()*Wd|0,y=r()*gyd*.8|0,s=r()<.12?R:Math.max(1,R/2|0);c.fillStyle=r()<.3?'#ffffff':'rgba(255,250,235,.6)';c.fillRect(x,y,s,s)}}
  // clouds: shaded cumulus
  const r=rng(b*17+(mode==='night'?3:mode==='dusk'?2:1)),cl=b===3?(mode==='night'?['#160c10','#22141a','#2e1c22']:['#3a2022','#55302e','#74443c']):mode==='night'?['#1e2846','#2a3658','#36466c']:mode==='dusk'?['#8a5a7a','#d08a8a','#f6c09a']:['#b8c4d0','#e2e8ee','#ffffff'];
  for(let k=0;k<7;k++){const cx=(k/7+r()*.1)*Wd,cy=gyd*(.1+r()*.35),s=(9+r()*14)*R,n=7+(r()*5|0);const pts=[];for(let j=0;j<n;j++)pts.push([cx+(j-n/2)*s*.55+(r()-.5)*s*.3,cy-Math.sin(j/(n-1)*Math.PI)*s*.5*r(),s*(.45+r()*.35)]);
    [[0,0,cl[0]],[.06,-.14,cl[1]],[.12,-.3,cl[2]]].forEach(([ox,oy,col],li)=>{c.fillStyle=col;pts.forEach(([x,y,rr])=>pcirc(c,x+ox*rr,y+oy*rr,rr*(1-li*.2)))})}
  return cv}
function groundHD_old(Wd,b){const R=RS,Hg=14*R,top=5*R,cv=mkc(Wd,Hg),c=cv.getContext('2d'),im=c.createImageData(Wd,Hg),d=im.data,P=HDP[b],G=P.grass.map(toA),D=P.dirt.map(toA);
  const set=(x,y,col)=>{if(x<0||y<0||x>=Wd||y>=Hg)return;const p=(y*Wd+x)*4;d[p]=col[0];d[p+1]=col[1];d[p+2]=col[2];d[p+3]=255};
  for(let x=0;x<Wd;x++){const gh=Math.round((2.2+vn2(x/(5*R),0,b+31,Wd/(5*R))*1.6)*R);
    for(let y=top;y<Hg;y++){const dy=y-top;let col;if(dy<gh){let t=.75-dy/gh*.55+(hsh2(x,y,2)-.5)*.25;col=rampPick(G,Math.max(0,Math.min(.999,t)),x,y)}
      else{let t=.85-(dy-gh)/(Hg-top-gh)*.75+(vn2(x/(2*R),y/(1.5*R),b+7,Wd/(2*R))-.5)*.5;if(hsh2(x>>1,y>>1,b+3)>.965)t+=.45;col=rampPick(D,Math.max(0,Math.min(.999,t)),x,y);if(dy===gh)col=lerpA(col,[0,0,0],.25)}
      set(x,y,col)}
    if(hsh2(x,0,b+9)>.3){const bh=Math.round((1+hsh2(x,1,b)*3.5)*R);for(let y=0;y<bh;y++)set(x,top-1-y,rampPick(G,Math.min(.999,.5+y/bh*.45),x,y))}
    if(hsh2(x>>1,5,b+19)>.985&&b!==3){const fc=toA(['#f29ccf','#f5e08a','#ffffff','#b8a0f0'][(x>>3)%4]);for(let yy=0;yy<R;yy++)for(let xx=0;xx<R;xx++)set(x+xx,top-3*R-yy,fc)}
    if(b===3&&hsh2(x>>1,7,9)>.99)set(x,top+R,[255,120,30])}
  c.putImageData(im,0,0);return cv}
function peakSprite(b,v){const k='pk'+b+'_'+v+'_'+RS;if(HDC[k])return HDC[k];const R=RS,Ww=640,Hw=150+(v%3)*22,Wd=Ww*R,Hd=Hw*R,cv=mkc(Wd,Hd),c=cv.getContext('2d'),im=c.createImageData(Wd,Hd),d=im.data,P=HDP[b];
  const n1=pnoise(9,b*41+v*7),n2=pnoise(23,b*13+v*3+1),n3=pnoise(61,v*5+b);const Hh=new Float32Array(Wd),mesa=b===2,volc=b===3;
  for(let i=0;i<Wd;i++){const u=i/Wd*2-1;let env=Math.max(0,1-Math.abs(u+.08*Math.sin(v))*1.08);env=mesa?Math.min(1,env*2.4)*(.62+.06*Math.sin(u*9)):volc?Math.min(.9,env*1.35):Math.pow(env,1.25);
    let rr=(1-Math.abs(2*n1(i/Wd*9)-1))*.55+n2(i/Wd*23)*.3+n3(i/Wd*61)*.15;let h=env*(mesa?.98:(.62+rr*.5));if(volc&&env>.82)h-= (env-.82)*1.4;Hh[i]=Hd-h*Hd*.98}
  const RK=P.rock.map(toA),SN=(P.snow||(b===0?['#b6c4d4','#dfe7f0','#ffffff']:null));const sn=SN&&SN.map(toA),LV=P.lava&&P.lava.map(toA),hz=toA(kPal(b,'day').sky[3]);
  const RF=rockField(Wd,Hd,Hh,{sc:mesa?9:6,oct:4,ay:mesa?.35:1.2,seed:b*19+v*7});
  for(let i=0;i<Wd;i++){const top=Math.floor(Hh[i]);if(top>=Hd)continue;const sl=(Hh[Math.min(Wd-1,i+3*R)]-Hh[Math.max(0,i-3*R)])/R;
    for(let y=Math.max(0,top);y<Hd;y++){const dep=(y-Hh[i])/R,f=(y-top)/Math.max(1,Hd-top),alt=1-y/Hd;const q=rockLam(RF,Wd,Hd,i,y,5,0);
      let t=.06+q[0]*.74+Math.max(-.2,Math.min(.2,sl*.12))+(dep<1.2?.2:0)-f*.12;
      if(mesa)t+=((y/R|0)%7<2?-.18:0)+(((y/R|0)%13)===5?.15:0);
      t=Math.max(0,Math.min(.999,t));let col=rampPick(RK,t,i,y);
      if(sn&&!mesa&&alt>(b===1?.38:b===4?.55:.62)+(vn2(i/(R*5),0,v+3,0)-.5)*.14&&(q[1]<.2||alt>.8))col=rampPick(sn,Math.min(.999,t+.18),i,y);
      if(volc&&LV){const lx=Math.abs(i-Wd/2-(Math.sin(y/(R*9))*6*R)),lv=lx<(1.4+f*1.5)*R&&alt<.85&&alt>.05&&((i/R|0)%3);if(lv)col=LV[1+((y>>1)&1)];if(alt>.86&&Math.abs(i-Wd/2)<30*R)col=LV[2]}
      const hk=Math.min(.85,f*f*.9);const p=(y*Wd+i)*4;d[p]=col[0]+(hz[0]-col[0])*hk;d[p+1]=col[1]+(hz[1]-col[1])*hk;d[p+2]=col[2]+(hz[2]-col[2])*hk;d[p+3]=255}}
  c.putImageData(im,0,0);
  if(b===0||b===1||b===4){const pc=toA(b===4?'#7a5a9a':b===1?'#1e3a3c':'#22402a'),r=rng(v*3+b);for(let i=0;i<Wd;i+=Math.round((1.5+r()*3)*R)){const top=Hh[i];if(top>Hd-6*R)continue;const y=top+(Hd-top)*(.5+r()*.5),h=(3+r()*5)*R;for(let yy=0;yy<h;yy++){const w=Math.max(1,Math.round(yy*.4));c.fillStyle=`rgb(${pc.map(q=>Math.round(q*(yy<h/2?1.2:1)))})`;c.fillRect(i-w,Math.round(y-h+yy),w*2,1)}}}
  const g=c.createLinearGradient(0,Hd*.6,0,Hd);g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(1,`rgba(${hz.join(',')},.85)`);c.globalCompositeOperation='source-atop';c.fillStyle=g;c.fillRect(0,0,Wd,Hd);c.globalCompositeOperation='source-over';
  let wf=null;if(v%2===0&&b!==3&&b!==2){let bi=Math.round(Wd*.42);for(let i=Math.round(Wd*.35);i<Wd*.5;i++)if(Hh[i]<Hh[bi])bi=i;wf={x:bi/R+12,y0:(Hh[bi]/R)+Hw*.22}}
  return HDC[k]={cv,W:Ww,H:Hw,wf}}
function hdLayers(b,W,H,gy){const key=['L',b,W,H,gy,RS].join('_');if(KLC[key])return KLC[key];const R=RS,Wd=W*2*R,Hd=(gy+3)*R,gyd=gy*R,P=kPal(b,'day'),hp=HDP[b];
  const sky={day:skyHD(W,H,gy,P,'day',b),dusk:skyHD(W,H,gy,kPal(b,'dusk'),'dusk',b),night:skyHD(W,H,gy,kPal(b,'night'),'night',b)};
  const hz2=P.sky[2],hz3=P.sky[3],M=P.mtn,lit='#fff2d0',shd='#2a3048';
  const far=mtnStrip(Wd,Hd,gyd,{seed:b*7+1,P:5,base:gy*.3,amp:gy*.42,rough:.5,ridge:1,pow:1.6,slK:.22,gully:.3,ramp:[mix(M,shd,.15),mix(M,hz2,.3),mix(M,lit,.2),mix(M,lit,.42)],snow:(b===1||b===4||b===0)?(b===0?['#c4d0dc','#e4ecf2','#ffffff']:hp.snow):null,snowAt:b===0?.78:.55,haze:hz3,hazeK:.55,fadeDark:.05,rock:14,oct:2,rk:7});
  const mtn=mtnStrip(Wd,Hd,gyd,{seed:b*7+2,P:8,base:gy*.16,amp:gy*.36,rough:.48,ridge:1,pow:1.4,slK:.26,gully:.38,ramp:[mix(M,shd,.42),mix(M,shd,.22),M,mix(M,lit,.25)],snow:(b===1||b===4)?hp.snow:null,snowAt:.7,haze:hz3,hazeK:.32,pines:(b<2||b===4)?mix(P.f1,shd,.25):null,pineS:1,fadeDark:.18,rock:9,oct:3,rk:6});
  const hcol=b===1?'#b8c8da':b===2?'#c8a070':b===3?'#3a2a26':b===4?'#c8b8e6':mix(P.f1,'#a8b860',.35);
  const hills=mtnStrip(Wd,Hd,gyd,{seed:b*7+3,P:6,base:gy*.06,amp:gy*.16,rough:.42,pow:1.1,slK:.35,gully:.12,ramp:[mix(hcol,shd,.3),mix(hcol,shd,.1),hcol,mix(hcol,lit,.25)],fields:b===0?[[mix(hcol,shd,.2),hcol,mix(hcol,lit,.2)],['#7a7a3a','#9a9446','#bcb058'],[mix(hcol,'#3a6a2a',.4),mix(hcol,'#5a8a3a',.3),mix(hcol,lit,.1)]]:b===4?[[mix(hcol,shd,.2),hcol,mix(hcol,lit,.2)],['#c49ad0','#d8b4e2','#ecd0f2']]:null,haze:hz3,hazeK:.25,hedges:b===0?'#3c5a32':b===4?'#9a7ab8':b===2?'#8a6a3a':null,fadeDark:.1});
  const fg=Math.min(gy,165);
  const fk=P.tree==='pine'?'pine':P.tree==='palm'?'palm':P.tree==='dead'?'dead':'round';
  const fr=(col,k)=>[mix(col,shd,.6),mix(col,shd,.28),col,mix(col,lit,.22)];const LFc=hp.leaf[Math.min(hp.leaf.length-1,2)];
  const f1=forestStrip(Wd,Hd,gyd,{seed:b*97+70,ramp:fr(mix(b===3?P.f1:LFc,hz3,.46)),kind:fk,hmin:fg*.16,hmax:fg*.3,gap:6,tw:.5,clear:.08,snow:b===1?'#e8eef6':null,fade:fg*.35,fadeC:`rgba(${toA(hz3).join(',')},.55)`});
  const f2=forestStrip(Wd,Hd,gyd,{seed:b*97+100,ramp:fr(mix(b===3?P.f2:LFc,hz3,.32)),kind:fk,hmin:fg*.24,hmax:fg*.42,gap:9,tw:.8,clear:.1,snow:b===1?'#ffffff':null,fade:fg*.3,fadeC:`rgba(${toA(hz3).join(',')},.35)`});
  const f3=forestStrip(Wd,Hd,gyd,{seed:b*97+125,ramp:fr(mix(b===3?P.f3:hp.leaf[1],hz3,.08)),kind:fk,hmin:fg*.35,hmax:fg*.55,gap:26,tw:1.1,clear:.25,snow:b===1?'#ffffff':null,fade:fg*.2,fadeC:`rgba(${toA(hz3).join(',')},.2)`});
  const ground=groundHD(Wd,b);
  return KLC[key]={P,sky,far,mtn,hills,f1,f2,f3,ground,nightC:toA(kPal(b,'night').sky[1]).join(',')}}
function kLayers(b,W,H,gy,mode){return hdLayers(b,W,H,gy)}
let TMPC=null;function tmpC(){if(!TMPC||TMPC.width!==VW*RS||TMPC.height!==VH*RS)TMPC=mkc(VW*RS,VH*RS);return TMPC}
function zoneMix(Z,x){const o={t:0,f:0,p:0,m:0};if(!Z||!Z.length){o.f=1;return o}for(let k=-2;k<=2;k++){const xx=x+k*120;let tp='f';for(const z of Z)if(xx>=z.x0&&xx<z.x1){tp=z.t[0];break}o[tp]+=.2}return o}
function zoneAt(Z,x){if(Z)for(const z of Z)if(x>=z.x0&&x<z.x1)return z.t;return'forest'}

/* ---- terrain generation (rivers, plains, mountains) ---- */
const DECOR=new Set(['house','river','grass','wheat','fence','hay','windmill','peak','boulder','crag']);
function terrainFor(si,I,sites,props,R){const b=STAGES[si].b,zones=[{x0:-720,x1:720,t:'town'}],out=[];
  [1,-1].forEach(sd=>{let x=720,prev='';const seq=[];while(x<I.half+400){const len=520+R()*760;let t;let g=0;do{t=['forest','plains','mount','plains','forest','mount','plains'][(R()*7)|0];g++}while(t===prev&&g<9);prev=t;seq.push([x,Math.min(I.half+400,x+len),t]);x+=len}
    seq.forEach(([a,c,t])=>zones.push(sd>0?{x0:a,x1:c,t}:{x0:-c,x1:-a,t}))});
  zones.sort((p,q)=>p.x0-q.x0);
  const busy=x=>sites.some(s=>Math.abs(s.x-x)<110)||props.some(p=>['portal','lair','camp','chest','ruins'].includes(p.k)&&Math.abs(p.x-x)<120);
  const rivers=[];const nR=3+(si%3);for(let k=0;k<nR*6&&rivers.length<nR;k++){const sd=k%2?-1:1,x=sd*Math.round(800+R()*(I.half-1050)),w=80+Math.round(R()*70);if(busy(x)||rivers.some(r=>Math.abs(r.x-x)<500)||Math.abs(x)>I.half-260)continue;rivers.push({k:'river',x,w,st:(b===1||b===3)?'wood':'stone'})}
  rivers.forEach(r=>out.push(r));
  zones.forEach((z,zi)=>{const mid=(z.x0+z.x1)/2,len=z.x1-z.x0;
    if(z.t==='plains'){for(let x=z.x0+20;x<z.x1-20;x+=14+R()*30)out.push({k:'grass',x:Math.round(x),s:.7+R()*.7,v:(R()*99)|0});
      if(HDP[b].wheat)for(let k=0;k<1+(len>800?1:0);k++){const x=Math.round(z.x0+len*(.2+R()*.6));if(!busy(x))out.push({k:'wheat',x,w:70+Math.round(R()*70)})}
      for(let k=0;k<2;k++){const x=Math.round(z.x0+len*(.15+R()*.7));if(!busy(x))out.push({k:'fence',x,w:40+Math.round(R()*50)})}
      if(b!==3)for(let k=0;k<2;k++)out.push({k:'hay',x:Math.round(z.x0+len*R()),v:(R()*3)|0});
      if((b===0||b===4||b===2)&&len>600){const x=Math.round(mid+(R()-.5)*len*.3);if(!busy(x))out.push({k:'windmill',x})}}
    if(z.t==='mount'){out.push({k:'peak',x:Math.round(mid),v:(zi*3+si)%6});for(let x=z.x0+40;x<z.x1-40;x+=50+R()*110)out.push({k:'boulder',x:Math.round(x),v:(R()*3)|0,s:.6+R()*.9,back:R()<.5});
      const nc=1+(len>800?1:0);for(let k=0;k<nc;k++){const x=Math.round(z.x0+len*(.25+k*.4+R()*.15));if(!busy(x))out.push({k:'crag',x,v:(R()*4)|0,s:.8+R()*.5})}}
    if(z.t==='forest'){for(let x=z.x0+10;x<z.x1-10;x+=12+R()*18)out.push({k:'tree',x:Math.round(x),v:R()<.75?0:1,s:.8+R()*.6,back:R()<.55,vr:(R()*6)|0})}});
  {const free0=(x,m)=>Math.abs(x)>380&&Math.abs(x)<I.half-560&&!sites.some(q=>Math.abs(q.x-x)<(m||50))&&!props.some(p=>['portal','lair','camp','chest'].includes(p.k)&&Math.abs(p.x-x)<(m||50))&&!rivers.some(r=>Math.abs(r.x-x)<r.w/2+(m||50))&&!out.some(d=>d.k==='house'&&Math.abs(d.x-x)<90);
    const free=(x,m)=>{for(const dx of [0,50,-50,110,-110,170]){if(free0(x+dx,m)){free.x=x+dx;return true}}return false};
    zones.forEach(z=>{const len=z.x1-z.x0;if(z.t==='town')return;
      if(z.t==='plains'&&R()<.8){const cx=z.x0+len*(.25+R()*.5),n=2+(R()<.5?1:0);for(let k=0;k<n;k++){const x=Math.round(cx+(k-(n-1)/2)*92);if(free(x))out.push({k:'house',kind:R()<.4?'house':'cottage',x:free.x,v:(R()*3)|0})}
        if(len>800&&R()<.5){const x=Math.round(z.x0+len*(R()<.5?.18:.82));if(free(x,80))out.push({k:'house',kind:'keep',x:free.x,v:0})}}
      if(z.t==='forest'&&R()<.4){const x=Math.round(z.x0+len*(.2+R()*.6));if(free(x))out.push({k:'house',kind:'cottage',x:free.x,v:(R()*3)|0})}
      if(z.t==='mount'&&R()<.6){const x=Math.round(z.x0+len*(.25+R()*.5));if(free(x,70))out.push({k:'house',kind:'temple',x:free.x,v:0})}});
    [[-410,'house'],[-480,'cottage'],[400,'house'],[475,'cottage']].forEach(([x,k],i)=>{if(free0(x,40)||Math.abs(x)<700)out.push({k:'house',kind:k,x,v:i%3})});
    const px=Math.round(I.half-470);out.push({k:'house',kind:'palace',x:px,v:0})}
  return{zones,decor:out,rivers}}
function applyTerrain(si,I,sites,props,people,R){const T=terrainFor(si,I,sites,props,R);
  for(let i=props.length-1;i>=0;i--){const p=props[i];if(p.k!=='tree'&&p.k!=='rabbit')continue;const z=zoneAt(T.zones,p.x);
    if(T.rivers.some(r=>Math.abs(p.x-r.x)<r.w/2+16)){props.splice(i,1);continue}
    if(p.k==='tree'){if(z==='plains'&&R()>.06)props.splice(i,1);else if(z==='mount'&&R()>.3)props.splice(i,1);else p.vr=(Math.abs(p.x)*7|0)%3}}
  T.decor.forEach(d=>{if(d.k==='tree'||d.k==='grass'||d.k==='boulder'){if(T.rivers.some(r=>Math.abs(d.x-r.x)<r.w/2+18))return}props.push(d)});
  return T.zones}

/* ---- decor drawing ---- */
function sway(t,x,k){return Math.sin(t/650+x*.07)*k+Math.sin(t/260+x*.21)*k*.35}
function drawTall(B,sx,y,h,n,ramp,t,wx,seed,s){const R=RS;for(let j=0;j<n;j++){const hx=hsh2(seed,j,3),bh=h*(.55+hx*.6)*s,bx=sx+(hsh2(seed,j,5)-.5)*14*s,sw=sway(t,wx+j*3,2.2*s);const col=ramp[Math.min(ramp.length-1,(hsh2(seed,j,7)*ramp.length)|0)];
    const seg=Math.max(3,Math.round(bh*R/2));for(let q=0;q<seg;q++){const f=q/seg;B.fillStyle=f>.7?ramp[ramp.length-1]:col;B.fillRect(Math.round((bx+sw*f*f)*R)/R,Math.round((y-bh*f)*R)/R,1/R,bh/seg+.5/R)}}}
function drawDecor(B,r,sx,t){const b=G.b,P=HDP[b],y=GY,R=RS;
  switch(r.k){
    case 'grass':drawTall(B,sx,y+1,9,14,P.tall,t,r.x,r.v,r.s);break;
    case 'wheat':{const W2=P.wheat;for(let x=-r.w/2;x<r.w/2;x+=1.2){const h=11+hsh2(r.x,x*3|0,1)*3,sw=sway(t,r.x+x,1.6),hx=sx+x;B.fillStyle=W2[1];B.fillRect(Math.round(hx*R)/R,y-h+1,1/R,h);B.fillStyle=W2[2+(hsh2(x*5|0,r.x,2)>.5?1:0)];B.fillRect(Math.round((hx+sw)*R)/R-.5/R,y-h-2,1.5/R*2,3.2)}
      B.fillStyle=W2[0];B.fillRect(sx-r.w/2,y-3,r.w,3);break}
    case 'fence':{const wd=b===1?'#6e5a50':b===4?'#9a7ab0':'#6e4a2a',wl=b===1?'#9a8274':b===4?'#c4a6d6':'#9a6c40';for(let x=-r.w/2;x<=r.w/2;x+=12){B.fillStyle=wd;B.fillRect(sx+x-1,y-12,2.5,12);B.fillStyle=wl;B.fillRect(sx+x-1,y-12,1,12);if(b===1){B.fillStyle='#ffffff';B.fillRect(sx+x-1.5,y-13,3.5,1.5)}}
      [y-9,y-5].forEach(yy=>{B.fillStyle=wd;B.fillRect(sx-r.w/2,yy,r.w,1.5);B.fillStyle=wl;B.fillRect(sx-r.w/2,yy,r.w,.5)});break}
    case 'hay':{const sp=haySprite(b,r.v);B.drawImage(sp.cv,sx-sp.W/2,y-sp.H+1,sp.W,sp.H);break}
    case 'windmill':{const sp=millSprite(b);B.drawImage(sp.cv,sx-sp.W/2,y-sp.H+1,sp.W,sp.H);const hx=sx+1,hy=y-sp.H+12,a=t/1400;B.save();B.translate(hx,hy);B.rotate(a);for(let k=0;k<4;k++){B.rotate(Math.PI/2);B.fillStyle='#4a3424';B.fillRect(-.6,0,1.2,30);B.fillStyle=b===4?'#f4e8fa':'#e8dcc0';B.fillRect(1,6,6,23);B.fillStyle='rgba(0,0,0,.18)';for(let q=8;q<29;q+=4)B.fillRect(1,q,6,.5)}B.restore();B.fillStyle='#2a1a10';B.beginPath();B.arc(hx,hy,2,0,7);B.fill();break}
    case 'boulder':{const im=hdPlant(b,b===1?1:b===3?1:2,(r.v||0)+3);const s=r.s||1;B.drawImage(im,sx-30*s,y-76*s+2,60*s,76*s);break}
    case 'crag':{const sp=cragSprite(b,r.v),s=r.s||1;B.drawImage(sp.cv,sx-sp.W*s/2,y-sp.H*s+3,sp.W*s,sp.H*s);break}
  }}
function haySprite(b,v){const k='hay'+b+v+RS;if(HDC[k])return HDC[k];const R=RS,W=22,H=16,cv=mkc(W*R,H*R),c=cv.getContext('2d');const ramp=(b===1?['#8a9ab0','#b8c6d6','#e2eaf4','#ffffff']:b===4?['#b08ac6','#ccaadc','#e4ccee','#f6eafc']:['#7a5a22','#a8822e','#ccaa48','#ead070']).map(toA);
  blobs(c,W*R,H*R,[{x:W*R/2,y:H*R*.58,r:H*R*.44,z:0,fr:0}],(lam,n,x,y)=>{let t=.12+lam*.85+(((x+y*2)>>1)%5===0?-.15:0)+(hsh2(x,y>>1,3)-.5)*.2;return rampPick(ramp,Math.max(0,Math.min(.999,t)),x,y)});return HDC[k]={cv,W,H}}
function millSprite(b){const k='mill'+b+RS;if(HDC[k])return HDC[k];const R=RS,W=34,H=58,cv=mkc(W*R,H*R),c=cv.getContext('2d');const st=(b===4?['#7a6aa0','#9a8cc0','#bcb0dc','#e0d8f4']:b===2?['#8a5a36','#b07a4a','#d09a64','#ecc08a']:['#5a5a5e','#7a7a7c','#9c9a96','#c4c0b8']).map(toA);
  for(let y=10*R;y<H*R;y++){const f=(y-10*R)/(H*R-10*R),w=(6+f*7)*R;for(let x=-w;x<=w;x++){const u=x/w;let t=.45+u*.4+(((y/R|0)%4===0)?-.2:0)+(((x/R+((y/R/4)|0)*3)|0)%6===0?-.15:0);c.fillStyle=`rgb(${rampPick(st,Math.max(0,Math.min(.999,t)),x,y)})`;c.fillRect(W*R/2+x,y,1,1)}}
  c.fillStyle=b===4?'#c06aa0':'#7a2a20';c.beginPath();c.moveTo(W*R/2-9*R,11*R);c.lineTo(W*R/2,2*R);c.lineTo(W*R/2+9*R,11*R);c.fill();c.fillStyle='rgba(0,0,0,.25)';c.beginPath();c.moveTo(W*R/2,2*R);c.lineTo(W*R/2+9*R,11*R);c.lineTo(W*R/2,11*R);c.fill();
  c.fillStyle='#2a1a10';c.fillRect(W*R/2-2.5*R,H*R-9*R,5*R,9*R);c.fillStyle='#f5c542';c.fillRect(W*R/2-1.5*R,26*R,3*R,4*R);return HDC[k]={cv,W,H}}
function cragSprite(b,v){const k='crag'+b+v+RS;if(HDC[k])return HDC[k];const R=RS,W=150,H=90+(v%2)*24,Wd=W*R,Hd=H*R,cv=mkc(Wd,Hd),c=cv.getContext('2d'),im=c.createImageData(Wd,Hd),d=im.data,P=HDP[b],RK=P.stone.map(toA);
  const n1=pnoise(7,v*11+b),n2=pnoise(19,v*5+3);const Hh=new Float32Array(Wd);for(let i=0;i<Wd;i++){const u=i/Wd*2-1,env=Math.max(0,1-Math.pow(Math.abs(u),2.2));Hh[i]=Hd-env*Hd*(.55+n1(i/Wd*7)*.35+n2(i/Wd*19)*.15)}
  const RF=rockField(Wd,Hd,Hh,{sc:4,oct:3,ay:.9,seed:b*23+v*11});
  for(let i=0;i<Wd;i++){const top=Math.floor(Hh[i]);const sl=(Hh[Math.min(Wd-1,i+2*R)]-Hh[Math.max(0,i-2*R)])/R;for(let y=Math.max(0,top);y<Hd;y++){const dep=(y-Hh[i])/R;const q=rockLam(RF,Wd,Hd,i,y,5,0);let t=.06+q[0]*.78+Math.max(-.2,Math.min(.2,sl*.2))+(dep<1.2?.22:0)-(y/Hd)*.18;t=Math.max(0,Math.min(.999,t));let col=rampPick(RK,t,i,y);
      if(dep<2.5&&sl<.8&&hsh2(i>>1,y>>1,4)>.25){if(P.snow)col=rampPick(P.snow.map(toA),.6+t*.3,i,y);else if(b===0)col=rampPick(['#2e4a22','#46682c','#62883a'].map(toA),t,i,y);else if(b===4)col=rampPick(['#d8a8d0','#ecc4e4','#fae0f4'].map(toA),t,i,y)}
      if(b===3&&hsh2(i>>1,y>>2,7)>.975)col=[255,110+((y*7)&63),20];
      const p=(y*Wd+i)*4;d[p]=col[0];d[p+1]=col[1];d[p+2]=col[2];d[p+3]=255}}
  c.putImageData(im,0,0);
  if(b===0||b===1){const pc=b===1?'#1e3a3c':'#22402a';for(let k=0;k<6;k++){const i=Math.round(Wd*(.2+k*.11)),top=Hh[i],h=(8+((k*37)%7))*R;for(let yy=0;yy<h;yy++){const w=Math.max(1,Math.round(yy*.38));c.fillStyle=yy<h*.5?mix(pc,'#ffffff',b===1?.3:.08):pc;c.fillRect(i-w,Math.round(top-h+yy+2*R),w*2,1)}}}
  return HDC[k]={cv,W,H}}
function riverBack(B,r,sx,t,P){if(r.sea)return;const w=r.w,top=GY-16,wl=toA(P.water);const g=B.createLinearGradient(0,top,0,GY+2);g.addColorStop(0,`rgba(${lerpA(wl,[255,255,255],.45).map(Math.round)},.0)`);g.addColorStop(.25,`rgba(${lerpA(wl,[255,255,255],.35).map(Math.round)},.9)`);g.addColorStop(1,`rgb(${wl.join(',')})`);
  B.fillStyle=g;B.beginPath();B.moveTo(sx-w*.16,top);B.lineTo(sx+w*.12,top);B.lineTo(sx+w/2+3,GY+2);B.lineTo(sx-w/2-3,GY+2);B.closePath();B.fill();
  for(let k=0;k<9;k++){const f=((t/2200+k/9)%1),yy=top+f*(GY-top),ww=w*(.25+f*.75);B.fillStyle=`rgba(255,255,255,${.12+f*.2})`;B.fillRect(Math.round((sx-ww/2+((k*37)%11)/11*ww*.6)*RS)/RS,Math.round(yy*RS)/RS,ww*.25,1/RS)}
  B.fillStyle='rgba(255,255,255,.18)';B.fillRect(sx-w*.16,top+5,w*.3,6)}
function riverChannel(B,r,sx,t,P){if(r.sea){drawSea(B,r,sx,t,P);return}const w=r.w,x0=sx-w/2,x1=sx+w/2,b=G.b,HP=HDP[b],wl=toA(P.water);
  const g=B.createLinearGradient(0,GY,0,GY+10+WDROP);g.addColorStop(0,`rgb(${lerpA(wl,[255,255,255],.2).map(Math.round)})`);g.addColorStop(1,`rgb(${wl.map(Math.round)})`);B.fillStyle=g;B.fillRect(x0,GY+1,w,10+WDROP);
  for(let k=0;k<10;k++){const xx=x0+((k*29+t/60)%w),yy=GY+2+(k%4)*2;B.fillStyle='rgba(255,255,255,.4)';B.fillRect(Math.round(xx*RS)/RS,yy,3+(k%3)*2,.5)}
  [[x0,-1],[x1,1]].forEach(([ex,sd])=>{for(let y=0;y<10+WDROP;y++){const ww=Math.max(1,6-y*.3);B.fillStyle=HP.dirt[Math.min(3,1+((y+2)>>2))];B.fillRect(sd<0?ex-ww:ex,GY+y,ww,1)}B.fillStyle=HP.stone[2];B.fillRect(sd<0?ex-5:ex+1,GY+6,4,3);B.fillStyle=HP.stone[3];B.fillRect(sd<0?ex-4:ex+2,GY+6,2,1)})}
function bridgeDraw(B,r,sx,front){if(r.sea)return;if(r.ferry){if(!front)drawFerry(B,r,sx,G?G.t:0);return}const w=r.w+18,x0=sx-w/2,b=G.b,stone=r.st==='stone',HP=HDP[b];
  if(!front){if(stone){const S=HP.stone;B.fillStyle=S[1];B.fillRect(x0,GY-1,w,4);B.fillStyle=S[3];B.fillRect(x0,GY-1,w,1);
      const n=Math.max(1,Math.round(r.w/46)),aw=r.w/n;for(let k=0;k<n;k++){const ax=x0+9+k*aw;B.fillStyle=S[1];B.fillRect(ax,GY+3,aw,6);B.fillStyle=`rgb(${toA(G&&kPal(b,'day').water).join(',')})`;B.beginPath();B.ellipse(ax+aw/2,GY+11,aw*.42,8,0,Math.PI,0);B.fill();B.fillStyle=S[0];B.fillRect(ax-2,GY+3,4,8)}
      B.fillStyle=S[0];B.fillRect(x0+w-11,GY+3,4,8);for(let x=x0;x<x0+w;x+=5){B.fillStyle=S[(x/5|0)%2?2:1];B.fillRect(x,GY+3,4.6,.6)}
      B.fillStyle=S[2];B.fillRect(x0,GY-6,w,2);for(let x=x0;x<x0+w;x+=4){B.fillStyle=S[(x/4|0)%3===0?1:3];B.fillRect(x,GY-4,3.6,3)}}
    else{const wd=['#2a1a10','#4a3020','#6e4a2e','#8e6a44'];B.fillStyle=wd[1];B.fillRect(x0,GY-1,w,3);for(let x=x0;x<x0+w;x+=3){B.fillStyle=wd[(x/3|0)%2?2:3];B.fillRect(x,GY-1,2.6,1.2)}
      for(let x=x0+4;x<x0+w;x+=16){B.fillStyle=wd[0];B.fillRect(x,GY+2,2,10);B.strokeStyle=wd[1];B.lineWidth=.8;B.beginPath();B.moveTo(x,GY+2);B.lineTo(x+16,GY+9);B.moveTo(x+16,GY+2);B.lineTo(x,GY+9);B.stroke()}
      for(let x=x0;x<=x0+w;x+=12){B.fillStyle=wd[1];B.fillRect(x,GY-11,1.6,10)}B.strokeStyle='#b89a6a';B.lineWidth=.7;B.beginPath();B.moveTo(x0,GY-10);for(let x=x0;x<=x0+w;x+=12)B.quadraticCurveTo(x+6,GY-7.5,x+12,GY-10);B.stroke()}}
  else{if(stone){const S=HP.stone;B.fillStyle=S[2];B.fillRect(x0-2,GY-9,4,9);B.fillRect(x0+w-2,GY-9,4,9);B.fillStyle=S[4];B.fillRect(x0-2,GY-9,4,1);B.fillRect(x0+w-2,GY-9,4,1)}
    else{for(let x=x0;x<=x0+w;x+=12){B.fillStyle='#5a3a22';B.fillRect(x+.5,GY-8,1.2,8)}B.strokeStyle='#d0b484';B.lineWidth=.6;B.beginPath();B.moveTo(x0,GY-7);for(let x=x0;x<=x0+w;x+=12)B.quadraticCurveTo(x+6,GY-4.5,x+12,GY-7);B.stroke()}}}
function coinHD(c,x,y,t){const w=Math.abs(Math.cos(t/220))*3.2+.6;c.fillStyle='#8a5a12';c.beginPath();c.ellipse(x,y+4,w+.7,4.4,0,0,7);c.fill();c.fillStyle='#f5c542';c.beginPath();c.ellipse(x,y+4,w,3.8,0,0,7);c.fill();if(w>1.4){c.fillStyle='#fff2b0';c.fillRect(x-w*.5,y+1.6,Math.max(.5,w*.4),2);c.fillStyle='#c9921f';c.fillRect(x+w*.15,y+2.5,.6,3)}}

/* ---- smooth gait helpers ---- */
function lerpCyc(A,n){const L=A.length,i=((Math.floor(n)%L)+L)%L,j=(i+1)%L,u=n-Math.floor(n);return A[i]+(A[j]-A[i])*u}
function galAt(fr){const n=fr/2,i=Math.floor(n)%6,j=(i+1)%6,u=n-Math.floor(n);return GAL[i].map((v,k)=>v+(GAL[j][k]-v)*u)}
const GBOB=[0,-1,-2,-1,0,1],WBOB=[0,-1,0,-1,0,-1],GHEAD=[0,1,2,1,0,-1];
function heroBob(mode,fr){return mode==='gallop'?lerpCyc(GBOB,fr/2):mode==='walk'?lerpCyc(WBOB,fr/2)*.8:0}

/* ---- HD world render ---- */
function renderK(c,V,anim){
  const cam=V.cam,t=V.t,nf=V.preview?0:nightF(),B=KB,W=VW,H=VH,R=RS;const toS=x=>Math.round((x-cam+W/2)*R)/R;
  const dusk=V.preview?0:(nf>0&&nf<1?Math.max(0,1-Math.abs(nf-.5)*2.2):0);
  const L=hdLayers(V.b,W,H,GY),Z=zoneMix(V.zones,cam),P=L.P;NFNOW=nf;LITS=[];
  B.drawImage(L.sky.day,0,0,W,H);if(!V.lite&&nf<.6&&!V.preview){B.globalAlpha=1-nf/.6;drawBirds(B,t,W,GY,V.b);B.globalAlpha=1}if(dusk>0){B.globalAlpha=dusk;B.drawImage(L.sky.dusk,0,0,W,H)}if(nf>0){B.globalAlpha=nf;B.drawImage(L.sky.night,0,0,W,H)}B.globalAlpha=1;
  const tinted=(draws,depth,alpha)=>{if(alpha<=.01)return;const tA=nf*(.42+depth*.38),dA=dusk*.38;
    if(tA<.01&&dA<.01){B.globalAlpha=alpha;draws.forEach(d=>B.drawImage(...d));B.globalAlpha=1;return}
    const T=tmpC(),tc=T.getContext('2d');tc.setTransform(1,0,0,1,0,0);tc.clearRect(0,0,T.width,T.height);tc.setTransform(R,0,0,R,0,0);tc.imageSmoothingEnabled=false;draws.forEach(d=>tc.drawImage(...d));
    tc.globalCompositeOperation='source-atop';if(dA>.01){tc.fillStyle=`rgba(170,70,90,${dA})`;tc.fillRect(0,0,W,H)}if(tA>.01){tc.fillStyle=`rgba(${L.nightC},${Math.min(.92,tA)})`;tc.fillRect(0,0,W,H)}tc.globalCompositeOperation='source-over';
    B.globalAlpha=alpha;B.drawImage(T,0,0,W,H);B.globalAlpha=1};
  const strip=(cv,f)=>{const Wd=cv.width/R,hh=cv.height/R;let o=((cam*f)%Wd+Wd)%Wd;o=Math.round(o*R)/R;return[[cv,-o,0,Wd,hh],[cv,Wd-o,0,Wd,hh]]};
  const tstrip=(cv,f,depth,alpha)=>{if(alpha<=.01)return;const tA=nf*(.42+depth*.38),dA=dusk*.38;B.globalAlpha=alpha;strip(tintStrip(cv,tA,dA,L.nightC),f).forEach(d=>B.drawImage(...d));B.globalAlpha=1};
  tstrip(L.far,.03,0,1);tstrip(L.mtn,.07,.12,1);tstrip(L.hills,.15,.25,1);
  for(const r of V.props)if(r.k==='peak'){const sp=peakSprite(V.b,r.v),sx=Math.round((W/2+(r.x-cam)*.3)*R)/R;if(sx+sp.W/2<0||sx-sp.W/2>W)continue;tinted([[sp.cv,sx-sp.W/2,GY-sp.H+2,sp.W,sp.H]],.3,1);
    if(sp.wf){const wx=sx-sp.W/2+sp.wf.x,y0=GY-sp.H+2+sp.wf.y0;B.fillStyle='rgba(220,236,255,.75)';B.fillRect(wx,y0,3,GY-y0-6);for(let k=0;k<6;k++){const yy=y0+((t/18+k*13)%(GY-y0-6));B.fillStyle='rgba(255,255,255,.9)';B.fillRect(wx+.5,yy,2,3)}B.fillStyle='rgba(255,255,255,.35)';B.beginPath();B.ellipse(wx+1.5,GY-6,7,2.5,0,0,7);B.fill()}}
  const fA=Math.min(1,Z.f+Z.t*.85);tstrip(L.f1,.3,.42,Math.min(1,.35+.65*Math.min(1,fA+Z.m*.5)));
  {const F=fogTex(),fo=((cam*.3+t*.004)%640+640)%640;B.globalAlpha=nf?.26:.5;for(let x=-fo;x<W;x+=640)B.drawImage(F,x,GY-58,640,52);B.globalAlpha=1}
  tstrip(L.f2,.5,.55,(.12+.88*fA)*.55);
  const tband=(f,depth,sp,sc,haze,base,so,dens)=>{const x0=Math.floor((cam*f-W*.8)/sp),x1=Math.ceil((cam*f+W*.8)/sp),draws=[],hz=`rgb(${toA(P.sky[3]).join(',')})`;for(let k=x0;k<=x1;k++){if(hsh2(k,so,V.b)>dens)continue;const wx=k*sp+hsh2(k,so+1,V.b)*sp*.7,T=treeHaze(V.b,(k*37+so*101)&2047,hz,haze),s=sc*(.82+hsh2(k,so+2,V.b)*.36),sx=Math.round((W/2+wx-cam*f)*R)/R;if(sx+T.W*s<-20||sx-T.W*s>W+20)continue;draws.push([T.cv,sx-T.cx*s,GY+base-T.H*s,T.W*s,T.H*s])}if(draws.length)tinted(draws,depth,1)};
  tband(.46,.5,34,.6,.5,-7,3,.35+.55*fA);
  {const F=fogTex(),fo=((cam*.55+t*.007)%640+640)%640;B.globalAlpha=nf?.18:.32;for(let x=-fo;x<W;x+=640)B.drawImage(F,x,GY-34,640,36);B.globalAlpha=1}
  tstrip(L.f3,.72,.7,fA*.5);tband(.7,.68,46,.8,.24,-3,7,.2+.6*fA);
  if(nf<.75&&V.b!==3){const ra=(1-nf/.75)*(dusk>.2?1.25:1),sx0=W*.74-cam*.02%W,sy0=GY*.28;B.globalCompositeOperation='lighter';
    for(let k=0;k<6;k++){const ang=.55+k*.13+Math.sin(t/9000+k)*.03,w=10+((k*37)%4)*7,len=H*1.3,x1=sx0-Math.sin(ang)*len,y1=sy0+Math.cos(ang)*len,nx=Math.cos(ang),ny=Math.sin(ang);
      const g=B.createLinearGradient(sx0,sy0,x1,y1);const col=dusk>.2?'255,170,110':'255,244,214';g.addColorStop(0,`rgba(${col},0)`);g.addColorStop(.35,`rgba(${col},${(.05+.025*Math.sin(t/2300+k*2))*ra})`);g.addColorStop(1,`rgba(${col},0)`);
      B.fillStyle=g;B.beginPath();B.moveTo(sx0-nx*w*.2,sy0-ny*w*.2);B.lineTo(sx0+nx*w*.2,sy0+ny*w*.2);B.lineTo(x1+nx*w,y1+ny*w);B.lineTo(x1-nx*w,y1-ny*w);B.closePath();B.fill()}
    B.globalCompositeOperation='source-over'}
  {const g=B.createLinearGradient(0,GY-26,0,GY);g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(1,`rgba(${toA(P.sky[3]).join(',')},${nf?.12:.3})`);B.fillStyle=g;B.fillRect(0,GY-26,W,26)}
  const vis=(x,m)=>{const s=toS(x);m=m||90;return s>-m&&s<W+m};
  const rivers=V.props.filter(r=>r.k==='river'&&vis(r.x,r.w));if(!V.preview&&!V.noPay&&G&&G.sites&&site('boat')){const sx0=seaX(),so={k:'river',sea:1,x:sx0+2000,w:4000};if(vis(so.x,so.w))rivers.push(so)}
  for(const r of rivers)riverBack(B,r,toS(r.x),t,P);
  for(const r of V.props)if((r.k==='crag'||r.k==='windmill')&&vis(r.x,120))drawDecor(B,r,toS(r.x),t);else if(r.k==='falls'&&vis(r.x,130))drawFalls(B,r,toS(r.x),t);
  for(const r of V.props)if(r.k==='tree'&&r.back&&vis(r.x,90)){if(isTreeKind(r)){drawTreeK(B,r,toS(r.x),.9,0);continue}const im=hdPlant(V.b,r.v,r.vr||0);B.globalAlpha=.88;B.drawImage(im,toS(r.x)-30*r.s,GY-76*r.s+2,60*r.s,76*r.s);B.globalAlpha=1}
  for(const r of V.props)if(r.k==='house'&&vis(r.x,120)){drawBld(B,bldSprite(V.b,r.kind,r.v),toS(r.x),t);if(!V.preview&&G&&G.props)try{drawHouseFlag(B,r,toS(r.x),t)}catch(e){}}
  for(const r of V.props)if(r.k==='boulder'&&r.back&&vis(r.x))drawDecor(B,r,toS(r.x),t);
  B.fillStyle=`rgba(${toA(P.sky[3]).join(',')},${nf?.04:.1})`;B.fillRect(0,0,W,GY);
  for(const r of V.props)if((r.k==='wheat'||r.k==='fence'||r.k==='hay')&&vis(r.x,r.w||40))drawDecor(B,r,toS(r.x),t);
  for(const r of V.props)if(!DECOR.has(r.k)&&r.k!=='tree'&&vis(r.x))drawProp(B,r,toS(r.x),t);
  for(const r of V.props)if(r.k==='tree'&&!r.back&&vis(r.x))drawTreeProp(B,r,toS(r.x),t);
  for(const r of V.props)if(r.k==='boulder'&&!r.back&&vis(r.x))drawDecor(B,r,toS(r.x),t);
  for(const s of V.sites)if(vis(s.x))drawSite(B,s,toS(s.x),t,!V.preview&&!V.noPay&&Math.abs(s.x-V.hx)<30);
  {const o0=((Math.floor(cam*R)/R%(W*2))+W*2)%(W*2);B.save();if(rivers.length){B.beginPath();let x=0;rivers.map(r=>[toS(r.x)-r.w/2,toS(r.x)+r.w/2]).sort((p,q)=>p[0]-q[0]).forEach(([a,b2])=>{if(a>x)B.rect(x,GY-8,a-x,22+WDROP);x=Math.max(x,b2)});if(x<W)B.rect(x,GY-8,W-x,22+WDROP);B.rect(0,0,W,GY-8);B.clip()}
    B.drawImage(L.ground,-o0,GY-5,W*2,14+WDROP);B.drawImage(L.ground,W*2-o0,GY-5,W*2,14+WDROP);B.restore();
    for(const r of rivers){riverChannel(B,r,toS(r.x),t,P);bridgeDraw(B,r,toS(r.x),false)}
    if(nf>0){B.globalAlpha=nf*.55;B.fillStyle='#0a1020';B.fillRect(0,GY-1,W,10+WDROP);B.globalAlpha=1}}
  if(!V.preview)cloudShadows(B,cam,t,W,nf);drawShore(B,toS,cam,W,t,V.b,rivers);for(const r of V.props)if(r.k==='falls'&&vis(r.x,130))drawFallsFoam(B,r,toS(r.x),t);drawFlutter(B,toS,cam,W,t,nf,Z,V.b);
  for(const p of V.people)if(vis(p.x))drawPerson(B,toS(p.x),GY,p,t);if(!V.preview&&V.thieves)drawThieves(B,toS,t);
  if(!V.preview){for(const g of V.greed)if(vis(g.x))drawGreed(B,g,toS(g.x),t);
    const hx=toS(V.hx),sp=Math.abs(V.vx||0),mode=sp>1.7?'gallop':sp>.2?'walk':(V.idle>90?'graze':'idle'),fr=mode==='idle'||mode==='graze'?0:Math.floor(V.walk/(mode==='gallop'?2.6:3.2))%12;
    if(!(V.inv>0&&Math.floor(t/80)%2)){drawHeroAll(B,V,hx,fr,mode,t,toS);
      if(V.hp<V.maxhp||V.dmg){const w=24,f=Math.max(0,V.hp/V.maxhp);B.fillStyle='rgba(10,6,24,.7)';B.fillRect(hx-w/2-1,GY+5,w+2,4);B.fillStyle=f>.5?'#6fd84a':f>.25?'#f2b632':'#e8464f';B.fillRect(hx-w/2,GY+6,w*f,2);for(let k=1;k<V.maxhp;k++){B.fillStyle='rgba(10,6,24,.6)';B.fillRect(hx-w/2+k*w/V.maxhp,GY+6,.5,2)}}
      if(V.dmg){B.globalAlpha=Math.min(1,V.dmg.t/20);B.fillStyle='#ff5a5a';B.font='bold 9px sans-serif';B.textAlign='center';B.fillText('-'+V.dmg.n,hx+10,GY-58-(40-V.dmg.t)*.4);B.globalAlpha=1}
      if(V.stam<99){B.fillStyle='rgba(0,0,0,.45)';B.fillRect(hx-10,GY+3,20,1.5);B.fillStyle=V.stam>25?'#9cc060':'#e8464f';B.fillRect(hx-10,GY+3,20*V.stam/100,1.5)}}}
  for(const r of V.props)if(r.k==='grass'&&vis(r.x))drawDecor(B,r,toS(r.x),t);
  for(const r of rivers)bridgeDraw(B,r,toS(r.x),true);
  if(!V.preview)drawCombatFX(B,toS,t);
  if(!V.preview){const hx=toS(V.hx);for(const c2 of V.coins)coinHD(B,toS(c2.x),c2.y-5,t+c2.x*9);
    for(const a of V.arrows){const sx=toS(a.x);B.fillStyle=a.c;B.fillRect(sx-3,a.y,6,.8);B.fillStyle='#d3d9e3';B.fillRect(sx+(a.vx>0?2:-4),a.y-.6,2,2)}
    drawFx(B,V,toS);
    if(V.coinHold||V.pop>0){if(V.pop>0)V.pop-=1;const n=Math.min(V.purse,16),rowN=Math.min(n,8);for(let k=0;k<n;k++)coinHD(B,hx-(rowN*4)/2+(k%8)*4+2,GY-42-Math.floor(k/8)*5,t+k*40);if(!n){B.fillStyle='rgba(10,6,24,.5)';B.fillRect(hx-6,GY-52,12,8)}}}
  {const T2=HDP[V.b].tall,k0=Math.floor((cam*1.3-W)/34),k1=Math.ceil((cam*1.3+W)/34),fz=.25+Z.p*.75;for(let k=k0;k<=k1;k++){if(hsh2(k,1,V.b)>fz*.7)continue;const x=k*34+hsh2(k,2,0)*20,s=Math.round((W/2+x-cam*1.3)*R)/R;B.globalAlpha=nf?.6:.92;drawTall(B,s,GY+9+WDROP,8+hsh2(k,3,0)*7,10,[mix(T2[0],'#0a1410',.25),mix(T2[1],'#0a1410',.2),T2[1],T2[2]],t,x,k,1.1);B.globalAlpha=1}}
  motes(B,t,W,H,nf,dusk);
  const wx=STAGES[V.si].wx;V.parts.forEach(p=>{if(anim){if(wx==='rain'){p.y+=6;p.x-=1.8}else if(wx==='snow'){p.y+=.6+p.v;p.x-=.5}else if(wx==='blizzard'){p.y+=1.3;p.x-=3.2-p.v}else if(wx==='leaves'){p.y+=.5;p.x-=1.2+Math.sin(t/300+p.v*9)*.4}else if(wx==='sand'){p.y+=.2;p.x-=4.5}else if(wx==='embers'){p.y-=.8;p.x-=.3}else if(wx==='fireflies'){p.x+=Math.sin(t/700+p.v*9)*.4;p.y+=Math.cos(t/900+p.v*7)*.3}if(p.y>H)p.y=0;if(p.y<0)p.y=H;if(p.x<0)p.x=W;if(p.x>W)p.x=0}
    if(wx==='rain'){B.fillStyle='rgba(169,212,255,.45)';B.fillRect(p.x,p.y,.5,5)}else if(wx==='snow'||wx==='blizzard'){B.fillStyle='#ffffff';const s=p.v>.5?1.5:1;B.fillRect(p.x,p.y,s,s)}else if(wx==='leaves'){B.fillStyle=p.v>.5?'#d89a4a':'#c0703a';B.save();B.translate(p.x,p.y);B.rotate(t/400+p.v*6);B.fillRect(-1.2,-.5,2.4,1);B.restore()}else if(wx==='sand'){B.fillStyle='rgba(246,220,148,.6)';B.fillRect(p.x,p.y,3,.5)}else if(wx==='embers'){B.fillStyle=p.v>.5?'#f5c542':'#f08a2a';B.fillRect(p.x,p.y,1,1)}else if(wx==='fireflies'&&nf>.3&&(Math.floor(t/250)+p.v*10|0)%3){B.fillStyle='#fff3a0';B.fillRect(p.x,p.y*.7,1,1)}});
  const dark=nf*.8;
  if(dark>.02&&V.lite){B.fillStyle=`rgba(6,4,22,${dark*.8})`;B.fillRect(0,0,W,H)}
  if(dark>.02&&!V.lite){const Lc=lightCanvas(),l=Lc.getContext('2d');l.setTransform(1,0,0,1,0,0);l.globalCompositeOperation='source-over';l.clearRect(0,0,Lc.width,Lc.height);l.setTransform(R,0,0,R,0,0);l.fillStyle=`rgba(6,4,22,${dark})`;l.fillRect(0,0,W,H);l.globalCompositeOperation='destination-out';
    const hole=(x,y,r,a)=>{if(x<-r||x>W+r)return;const g=l.createRadialGradient(x,y,2,x,y,r);g.addColorStop(0,`rgba(0,0,0,${a})`);g.addColorStop(1,'rgba(0,0,0,0)');l.fillStyle=g;l.fillRect(x-r,y-r,r*2,r*2)};
    const tl=town().lvl;hole(toS(0),GY-10,70+tl*14,1);if(!V.preview)hole(toS(V.hx),GY-28,V.pk.has('light')?84:56,.9);
    for(const r of V.props)if(r.k==='camp')hole(toS(r.x)+10,GY-8,40,.9);else if(r.k==='portal')hole(toS(r.x),GY-30,40,.6);
    for(const s of V.sites)if(s.k==='wall'&&s.lvl)hole(toS(s.x)-s.side*13,GY-32,36,.9);for(const c2 of (V.coins||[]))hole(toS(c2.x),c2.y,10,.6);for(const[x,y,r,a] of LITS)hole(x,y,r,.8*a);
    B.drawImage(Lc,0,0,W,H);B.globalCompositeOperation='lighter';const warm=(x,y,r,a)=>{const g=B.createRadialGradient(x,y,1,x,y,r);g.addColorStop(0,`rgba(255,160,70,${a})`);g.addColorStop(1,'rgba(255,160,70,0)');B.fillStyle=g;B.fillRect(x-r,y-r,r*2,r*2)};
    warm(toS(0),GY-8,46+tl*6,.35*nf);for(const[x,y,r,a] of LITS)warm(x,y,r*.55,.3*nf*a);for(const r of V.props)if(r.k==='camp')warm(toS(r.x)+10,GY-6,24,.3*nf);for(const s of V.sites)if(s.k==='wall'&&s.lvl)warm(toS(s.x)-s.side*13,GY-32,16,.35*nf);B.globalCompositeOperation='source-over'}
  const shx=V.shake>0&&!V.lite&&(S.opt?S.opt.shake:1)?Math.round((Math.random()-.5)*4*R)/R:0,shy=V.shake>0&&!V.lite&&(S.opt?S.opt.shake:1)?Math.round((Math.random()-.5)*3*R)/R:0;
  c.fillStyle='#000';c.fillRect(0,0,W,H);c.drawImage(KBUF,shx,shy,W,H);const wcol=P.water;if(!V.lite){reflect(c,KBUF,GY+8+WDROP,H,t,wcol);waterLight(c,GY+8+WDROP,H,t,W,nf,dusk);drawLily(c,cam,W,H,t,V.b,GY)}else{c.fillStyle=wcol;c.fillRect(0,GY+8+WDROP,W,H)}
  if(V.b===3){c.globalCompositeOperation='lighter';const g=c.createLinearGradient(0,GY+8+WDROP,0,H);g.addColorStop(0,'rgba(255,110,30,.25)');g.addColorStop(1,'rgba(255,60,20,0)');c.fillStyle=g;c.fillRect(0,GY+8+WDROP,W,H);c.globalCompositeOperation='source-over'}
  if(G&&G.skyFlash>0&&!V.preview){c.globalCompositeOperation='lighter';c.fillStyle=`rgba(190,215,255,${G.skyFlash*.32})`;c.fillRect(0,0,W,H);G.skyFlash=Math.max(0,G.skyFlash-.09)}
  c.globalCompositeOperation='saturation';c.fillStyle=`rgba(128,128,128,${nf>.5?.2:.24})`;c.fillRect(0,0,W,H);c.globalCompositeOperation='soft-light';c.fillStyle=nf>.5?'rgba(60,80,170,.45)':dusk>.3?'rgba(255,120,90,.34)':'rgba(70,110,140,.28)';c.fillRect(0,0,W,H);c.globalCompositeOperation='overlay';c.fillStyle=nf>.5?'rgba(20,30,70,.18)':'rgba(255,214,160,.08)';c.fillRect(0,0,W,H);c.globalCompositeOperation='source-over';
  if(V.flash>0){c.fillStyle='rgba(255,255,255,'+(V.flash/16)+')';c.fillRect(0,0,W,H)}
  if(!V.lite)bloom(c,nf,dusk);
  const v=c.createRadialGradient(W/2,H*.45,Math.min(W,H)*.35,W/2,H*.5,Math.max(W,H)*.65);v.addColorStop(0,'rgba(10,6,30,0)');v.addColorStop(1,'rgba(10,6,30,.4)');c.fillStyle=v;c.fillRect(0,0,W,H);
}
function reflect(c,src,hy,H,t,water){const R=RS,Wd=src.width,hyd=Math.round(hy*R),Hd=Math.round(H*R);c.save();c.setTransform(1,0,0,1,0,0);c.imageSmoothingEnabled=false;
  // Kingdom-style: the mirror is cut into thin horizontal bands that slide sideways by whole pixels
  let y=hyd,band=0;while(y<Hd){const bh=R*(1+Math.floor(hsh2(band,3,7)*3)),d=(y-hyd)/R,amp=.6+d*.06,ph=band*1.73+hsh2(band,5,9)*6;
    const off=Math.round(Math.sin(t*.0011+ph)*amp+Math.sin(t*.00047+ph*1.9)*amp*.6)*R,sy=Math.round(hyd-(y-hyd)*1.06-bh-2*R);if(sy<0)break;c.drawImage(src,0,sy,Wd,bh,off,y,Wd,bh);y+=bh;band++}
  c.restore();
  const g=c.createLinearGradient(0,hy,0,H);g.addColorStop(0,`rgba(${toA(water).join(',')},.42)`);g.addColorStop(1,'rgba(8,10,30,.78)');c.fillStyle=g;c.fillRect(0,hy,VW,H-hy);
  for(let k=0;k<90;k++){const per=1600+hsh2(k,1,3)*2600,ph=(t+hsh2(k,2,3)*per)/per,cyc=Math.floor(ph),u=ph-cyc;if(u>.55)continue;const y=Math.round(hy+3+hsh2(k,cyc,4)*(H-hy-5)),x=Math.round(hsh2(k,cyc,5)*VW+(t*.004)%VW)%VW,len=2+Math.floor(hsh2(k,cyc,6)*5),a=Math.sin(u/.55*Math.PI)*(.22+hsh2(k,0,7)*.4)*(1-(y-hy)/(H-hy)*.35);c.fillStyle=`rgba(235,245,255,${a})`;c.fillRect(x,y,len,1)}
  c.fillStyle='rgba(255,255,255,.3)';c.fillRect(0,hy,VW,.5)}
let LCV=null;function lightCanvas(){if(!LCV||LCV.width!==VW*RS||LCV.height!==VH*RS)LCV=mkc(VW*RS,VH*RS);return LCV}
function ruinsSprite(b,v){const k='ru'+b+v+RS;if(HDC[k])return HDC[k];const R=RS,W=80,H=56,cv=mkc(W*R,H*R),c=cv.getContext('2d'),S=HDP[b].stone.map(toA),r=rng(v*13+b);
  const block=(x,y,w,h)=>{for(let yy=0;yy<h*R;yy++)for(let xx=0;xx<w*R;xx++){let t=.5+(xx/(w*R)-.5)*.5+(yy<R?.25:0)-(yy>h*R-R?.2:0)+(hsh2((x*R+xx)>>1,(y*R+yy)>>1,b)-.5)*.25;if(xx<1||yy===h*R-1)t-=.3;c.fillStyle=`rgb(${rampPick(S,Math.max(0,Math.min(.999,t)),x*R+xx,y*R+yy)})`;c.fillRect(x*R+xx,y*R+yy,1,1)}};
  const col=(x,h)=>{for(let y=H-h;y<H;y+=5)block(x,y,8,5);block(x-1,H-h-2,10,3)};
  col(6,30+((r()*14)|0));col(30,18+((r()*8)|0));col(54,44);for(let x=40;x<70;x+=6)block(x,H-46,6,4);block(62,H-50,8,4);for(let k=0;k<5;k++)block(16+k*9|0,H-4,(5+r()*4)|0,4);
  if(b===0||b===4){c.fillStyle=b===0?'#4a6e30':'#e8a8d0';for(let k=0;k<40;k++){const x=r()*W*R|0,y=(H*.3+r()*H*.7)*R|0;c.fillRect(x,y,R,R)}}
  return HDC[k]={cv,W,H}}
function ruinsDraw(c,r,sx){const sp=ruinsSprite(G.b,Math.abs(r.x|0)%3);c.drawImage(sp.cv,sx-sp.W/2,GY-sp.H+1,sp.W,sp.H)}

/* ================= REALISTIC HORSE & RIDER ================= */
function rampOf(col){return[mix(col,'#000000',.62),mix(col,'#000000',.42),mix(col,'#000000',.22),col,mix(col,'#ffffff',.18),mix(col,'#ffffff',.36)].map(toA)}
const COAT_R=['#1e1008','#331c10','#4a2a18','#633922','#7e4b2e','#9c623e','#bd7f54'].map(toA);
const COAT_D=COAT_R.map(v=>v.map(q=>q*.68));
function shadeR(lam,n,x,y){const q=n[3];let t=.06+lam*.86-Math.max(0,n[1])*.16+(hsh2(x>>1,y>>1,3)-.5)*.07;return rampPick(q.ramp,Math.max(0,Math.min(.999,t)),x,y)}
function monarchSprite(fr,mode){const rp0=riderPal(),kb='mon3|'+JSON.stringify(rp0)+'|'+mode+'|'+MOPT.m+(MOPT.nr?'N':'')+'@'+Math.min(5,RS+2),k0='mon3|'+JSON.stringify(rp0)+'|'+fr+'|'+mode+'|'+MOPT.m+(MOPT.nr?'N':'')+'@'+Math.min(5,RS+2);if(SPR[k0])return SPR[k0];{const nw=performance.now();if(nw-(GENB.t0||0)>14){GENB.t0=nw;GENB.used=0}}if(GENB.used>4){const pre='mon3|'+JSON.stringify(rp0)+'|',suf='|'+mode+'|'+MOPT.m+(MOPT.nr?'N':'')+'@'+Math.min(5,RS+2);for(let d=1;d<24;d++){const q=SPR[pre+((fr-d+24)%24)+suf];if(q)return q}if(GENB.last[kb])return GENB.last[kb]}const t0=performance.now(),o=monarchSprite0(fr,mode);GENB.used+=performance.now()-t0;GENB.last[kb]=o;return o}
function monarchSprite0(fr,mode){
  const rp=riderPal(),key='mon3|'+JSON.stringify(rp)+'|'+fr+'|'+mode+'|'+MOPT.m+(MOPT.nr?'N':'')+'@'+Math.min(5,RS+2);if(SPR[key])return SPR[key];
  const MO=MOUNTS[MOPT.m]||MOUNTS.horse,CR=MO.coat,CD=CR.map(v=>v.map(q=>q*.68)),NR=MOPT.nr;const S=Math.min(5,RS+2),W=60,H=68,cv=mkc(W*S,H*S),c=cv.getContext('2d');c.lineCap='round';c.lineJoin='round';
  const trot=mode==='trot',gal=mode==='gallop',walk=mode==='walk'||trot,graze=mode==='graze';
  const NF=24,phi=(fr%NF)/NF,ph2=phi*Math.PI*2,GT=gal?{S:44,duty:.36,off:[.6,.48,.1,0],lift:4.2}:trot?{S:30,duty:.46,off:[0,.5,.5,0],lift:3.6}:mode==='walk'?{S:19,duty:.62,off:[.25,.75,0,.5],lift:3}:null;
  const L=[0,1,2,3];
  const b=3+(gal?-1.7*Math.sin(ph2+.6)-.4:trot?-1.3*Math.abs(Math.sin(ph2))+.3:mode==='walk'?-.6*Math.sin(2*ph2):0),pitch=gal?2*Math.sin(ph2-.4):trot?.45*Math.sin(2*ph2):mode==='walk'?.25*Math.sin(2*ph2+.8):0;
  const hy=b+(gal?1.8*Math.sin(ph2+1.4):trot?.6*Math.sin(2*ph2):mode==='walk'?1.3*Math.sin(2*ph2+1):0);
  const rb=gal?b*.55+.4*Math.sin(ph2+2.2):trot?b*.8+.7*Math.abs(Math.sin(ph2+.3)):b;
  const add=(A,x,y,r,z,ramp)=>A.push({x:x*S,y:y*S,r:r*S,z:z*S,ramp,fr:0});
  const chain=(A,pts,r0,r1,z,ramp)=>{let tot=0;for(let i=1;i<pts.length;i++)tot+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);let acc=0;
    for(let i=1;i<pts.length;i++){const a=pts[i-1],q=pts[i],len=Math.hypot(q[0]-a[0],q[1]-a[1]),n=Math.max(1,Math.ceil(len/.6));for(let k=0;k<=n;k++){const u=k/n,f=tot?(acc+len*u)/tot:0;add(A,a[0]+(q[0]-a[0])*u,a[1]+(q[1]-a[1])*u,r0+(r1-r0)*f,z,ramp)}acc+=len}};
  const sg=(p,len,a)=>[p[0]+Math.sin(a)*len,p[1]+Math.cos(a)*len];
  const GND=65;
  const tgt=(li,ax,frn)=>{if(!GT)return[ax+(frn?.6:-.4),GND,0];const u=((phi+GT.off[li])%1+1)%1;if(u<GT.duty){const s2=u/GT.duty;return[ax+GT.S*(.5-s2),GND,0]}const s2=(u-GT.duty)/(1-GT.duty),e=s2*s2*(3-2*s2),fl=Math.sin(Math.PI*s2);return[ax+GT.S*(-.5+e),GND-GT.lift*(frn?1.3:1)*fl-(frn?(gal?1.8:2.4)*fl*fl:0),fl]};
  const front=(A,x,y,li,z,R)=>{const yy=y-pitch,[tx,ty,fl]=tgt(li,x+.8,1),T=[tx,ty],F=[tx-1+1.6*fl,ty-2.8+1.4*fl],J=[x,yy];const[K,F2]=rigIK(J,F,10,9.4,1);
    chain(A,[[x+.5,yy-4],J,K],3.1,1.6,z,R);add(A,K[0],K[1],1.6,z,R);chain(A,[K,F2],1.25,1.1,z,R);add(A,F2[0],F2[1],1.45,z,R);const ra=1.6*fl,vx0=T[0]-F[0],vy0=T[1]-F[1],T2=[F2[0]+vx0*Math.cos(ra)-vy0*Math.sin(ra),F2[1]+vx0*Math.sin(ra)+vy0*Math.cos(ra)];chain(A,[F2,T2],1.45,1.35,z,R);return T2};
  const hind=(A,x,y,li,z,R)=>{const yy=y+pitch,[tx,ty,fl]=tgt(li,x-1.2,0),T=[tx,ty],F=[tx-1.1-1.6*fl,ty-2.8+.7*fl],J=[x+.6,yy+.5];const[K,F2]=rigIK(J,F,10.6,11.2,0);
    chain(A,[[x-1.5,yy-5],J],4.7,3.6,z,R);chain(A,[J,K],3.4,1.6,z,R);add(A,K[0],K[1],1.65,z,R);chain(A,[K,F2],1.25,1.1,z,R);add(A,F2[0],F2[1],1.45,z,R);const ra=-.7*fl,vx0=T[0]-F[0],vy0=T[1]-F[1],T2=[F2[0]+vx0*Math.cos(ra)-vy0*Math.sin(ra),F2[1]+vx0*Math.sin(ra)+vy0*Math.cos(ra)];chain(A,[F2,T2],1.45,1.35,z,R);return T2};
  const hoof=(p,dark)=>{c.fillStyle=dark?'#0e0806':'#1a110c';c.beginPath();c.ellipse((p[0]+.4)*S,(p[1]+.9)*S,1.9*S,1.15*S,0,0,7);c.fill();c.fillStyle=dark?'#2a1a10':'#3e2a1c';c.fillRect((p[0]-1.2)*S,(p[1]+.2)*S,2.6*S,.5*S)};
  // far legs
  const far=[];const hf1=front(far,38.5,40+b,L[1],0,CD),hf2=hind(far,17.5,38+b,L[3],0,CD);blobs(c,W*S,H*S,far,shadeR);hoof(hf1,1);hoof(hf2,1);mountWing(c,S,b,phi*12,gal,walk,1,MO);
  // tail
  const MN=MO.mane;const tl=gal?1:walk?.5:.15,tw=Math.sin(ph2)*(gal?2:1);
  for(let k=0;k<11;k++){const u=k/10;c.strokeStyle=MN[k%4];c.lineWidth=(1.6-u*.6)*S;c.beginPath();c.moveTo(10*S,(27.5+b)*S);c.quadraticCurveTo((5-tl*3+u*2)*S,(31+b-tl*2)*S,(4-tl*7+u*3+tw)*S,(50-tl*13+u*4+(k%3))*S);c.stroke()}
  // body / near legs / neck / head
  const A=[];
  add(A,28,34+b,7.3,0,CR);add(A,21,33.6+b,7.5,0,CR);add(A,35,33.6+b,7.2,0,CR);add(A,28,38.2+b,5.6,.5,CR);
  add(A,41.6,33.4+b,6.4,1,CR);add(A,39,29.8+b,5.5,1.6,CR);add(A,14.2,32.4+b,7.8,1,CR);add(A,12.6,29+b,5.8,1.2,CR);add(A,9.6,33.2+b,4.6,1,CR);
  let head;
  if(graze){chain(A,[[40,31+b],[45,40],[49,52]],6.2,3.4,2,CR);add(A,50,55,3.6,3,CR);chain(A,[[50.5,56],[52.5,60.5],[54,63.5]],3,2.1,3,CR);head={ex:51,ey:54.5,nx:54,ny:63.5,bx:53,by:62,ear:[48.5,51]}}
  else{const nx=gal?2.2:0;chain(A,[[40,31.5+b],[43.5+nx*.5,23.5+hy],[47+nx,17+hy]],6.3,3.6,2,CR);add(A,48.6+nx,14.6+hy,3.7,3,CR);add(A,50.4+nx,18.4+hy,3,2.6,CR);chain(A,[[49.6+nx,15.6+hy],[53+nx,19.2+hy],[55.6+nx,22.4+hy]],3.15,2.15,3,CR);
    head={ex:50+nx,ey:14.3+hy,nx:55.6+nx,ny:22.6+hy,bx:54.4+nx,by:21.6+hy,ear:[47.3+nx,10.8+hy]}}
  const hn1=front(A,40.5,40.5+b,L[0],4,CR),hn2=hind(A,16.5,38.5+b,L[2],4,CR);
  blobs(c,W*S,H*S,A,shadeR);hoof(hn1);hoof(hn2);
  // socks + blaze
  c.fillStyle='rgba(236,226,210,.9)';[hn1].forEach(p=>c.fillRect((p[0]-1.4)*S,(p[1]-3.2)*S,2.8*S,2.6*S));
  if(!graze){c.strokeStyle='rgba(236,226,210,.85)';c.lineWidth=.8*S;c.beginPath();c.moveTo((head.ex+1)*S,(head.ey-1.6)*S);c.quadraticCurveTo((head.ex+3.8)*S,(head.ey+3)*S,(head.nx-.5)*S,(head.ny-1.2)*S);c.stroke()}
  // ears, eye, nostril
  c.fillStyle='rgb('+CR[3].join(',')+')';const[ex0,ey0]=head.ear;c.beginPath();c.moveTo(ex0*S,(ey0+1.6)*S);c.lineTo((ex0+.6)*S,(ey0-2.4)*S);c.lineTo((ex0+1.7)*S,(ey0+1.3)*S);c.fill();c.fillStyle='rgb('+CR[1].join(',')+')';c.beginPath();c.moveTo((ex0-1)*S,(ey0+1.8)*S);c.lineTo((ex0-.7)*S,(ey0-1.8)*S);c.lineTo((ex0+.4)*S,(ey0+1.6)*S);c.fill();
  c.fillStyle='#0a0604';c.fillRect((head.ex-.2)*S,(head.ey-.4)*S,1.3*S,1.1*S);c.fillStyle='#ffffff';c.fillRect((head.ex+.3)*S,(head.ey-.4)*S,.5*S,.5*S);
  c.fillStyle='#120a06';c.beginPath();c.ellipse((head.nx-.4)*S,(head.ny-.6)*S,.7*S,.5*S,0,0,7);c.fill();
  mountHead(c,S,head,MO,graze);
  // mane
  if(!graze)for(let k=0;k<14;k++){const u=k/13,bx0=47.2-u*7.8+(gal?2*(1-u):0),by0=12.6+hy*(1-u)+u*(16.5+b-hy)+u*1;const sw=(gal?-3.2:-1.4)-Math.sin(ph2+k)*.5;
    c.strokeStyle=MN[k%4];c.lineWidth=(1.5-u*.3)*S;c.beginPath();c.moveTo(bx0*S,by0*S);c.quadraticCurveTo((bx0-1.4+sw*.4)*S,(by0+2)*S,(bx0-1.6+sw)*S,(by0+4.2+u*1.5)*S);c.stroke()}
  if(!graze){c.strokeStyle=MN[1];c.lineWidth=1.2*S;c.beginPath();c.moveTo((head.ex-1.6)*S,(head.ey-2.6)*S);c.quadraticCurveTo((head.ex-.2)*S,(head.ey-1.4)*S,(head.ex+.6)*S,(head.ey-1.8)*S);c.stroke()}
  // bridle
  c.strokeStyle='#2a160c';c.lineWidth=.7*S;if(!graze){c.beginPath();c.moveTo((head.ex-1.8)*S,(head.ey-2)*S);c.lineTo((head.ex+.9)*S,(head.ey+5.2)*S);c.lineTo((head.bx)*S,(head.by)*S);c.stroke();c.beginPath();c.moveTo((head.ex+2.6)*S,(head.ey+3.8)*S);c.lineTo((head.ex+4.6)*S,(head.ey+6.4)*S);c.stroke()}
  c.fillStyle='#d8b450';c.beginPath();c.arc(head.bx*S,head.by*S,.75*S,0,7);c.fill();
  // saddle blanket + saddle
  const cape=rp.cape;c.fillStyle=mix(cape,'#000000',.15);c.beginPath();c.moveTo(21*S,(25.5+b)*S);c.lineTo(34*S,(25.5+b)*S);c.lineTo(33.4*S,(32.4+b)*S);c.lineTo(21.6*S,(32.4+b)*S);c.closePath();c.fill();
  c.fillStyle='#e0b84a';c.fillRect(21.6*S,(31.6+b)*S,11.8*S,.7*S);c.fillRect(21.2*S,(25.6+b)*S,.6*S,6.6*S);
  c.fillStyle='#4a2414';c.beginPath();c.moveTo(21.2*S,(22.8+b)*S);c.quadraticCurveTo(22.6*S,(26.6+b)*S,27*S,(26.4+b)*S);c.quadraticCurveTo(31.6*S,(26.4+b)*S,33*S,(23.6+b)*S);c.lineTo(33.4*S,(26.8+b)*S);c.quadraticCurveTo(27*S,(28.6+b)*S,20.8*S,(26.4+b)*S);c.closePath();c.fill();
  c.fillStyle='#6e3a20';c.fillRect(23*S,(26+b)*S,8*S,.6*S);c.strokeStyle='#3a1c0e';c.lineWidth=1*S;c.beginPath();c.moveTo(28.6*S,(28+b)*S);c.lineTo(28.4*S,(41.2+b)*S);c.stroke();
  mountWing(c,S,b,phi*12,gal,walk,0,MO);if(!NR){if(rp.npc!=='farmer'){
  // cape (behind rider)
  const cl=gal?7:walk?3.6:2,cf=Math.sin(ph2)*(gal?1.6:.9)+Math.sin(ph2*2+1)*(gal?.6:.4);
  const cg=c.createLinearGradient(28*S,10*S,(18-cl)*S,26*S);cg.addColorStop(0,mix(cape,'#ffffff',.12));cg.addColorStop(1,mix(cape,'#000000',.4));c.fillStyle=cg;
  c.beginPath();c.moveTo(29.4*S,(10.6+rb)*S);c.lineTo(27*S,(10.2+rb)*S);c.quadraticCurveTo((22-cl*.5)*S,(14+rb+cf)*S,(16.5-cl)*S,(21.5+rb-cl*.35+cf)*S);c.lineTo((19.5-cl*.6)*S,(25.5+rb-cl*.2)*S);c.quadraticCurveTo(24*S,(24+rb)*S,27.4*S,(22.6+rb)*S);c.closePath();c.fill();
  c.strokeStyle=mix(cape,'#000000',.5);c.lineWidth=.6*S;for(let k=0;k<3;k++){c.beginPath();c.moveTo((26.5-k*.4)*S,(12+rb+k)*S);c.quadraticCurveTo((22-k-cl*.4)*S,(17+rb+k+cf)*S,(19.5-k-cl*.7)*S,(23.5+rb-cl*.25+k*.6)*S);c.stroke()}}
  // rider
  const CL=rampOf(rp.b),PN=rampOf(rp.p),SK=rampOf(rp.s),HR=rampOf(rp.h),BT=rampOf('#3a2416');const Rr=[];
  chain(Rr,[[28.2,12.6+rb],[30.6,17.4+rb],[34.8,20+rb]],1.55,1.25,1,CL.map(v=>v.map(q=>q*.75)));
  chain(Rr,[[27.2,23+rb],[28.4,16+rb],[29.2,11.8+rb]],3.4,3.9,2,CL);add(Rr,28.2,20.6+rb,3.4,2.4,CL);
  chain(Rr,[[27.5,23.6+rb],[31.6,27.4+rb]],2.6,2.1,3,PN);chain(Rr,[[31.6,27.4+rb],[31.1,34.2+rb]],1.75,1.45,3,PN);chain(Rr,[[30.8,34.4+rb],[33,36.1+rb]],1.75,1.5,3.2,BT);
  add(Rr,29.8,9.4+rb,1.6,3,SK);add(Rr,30.4,6+rb,3.2,4,SK);
  if(rp.girl){add(Rr,30,5.9+rb,3.95,3.7,HR);chain(Rr,[[29,8+rb],[28.4,12.2+rb]],3,3.1,3.5,HR);add(Rr,31.3,6.5+rb,2.45,5.2,SK)}else{add(Rr,29.4,4.6+rb,3.3,3.5,HR);add(Rr,28.6,6.4+rb,2.4,3.4,HR)}
  chain(Rr,[[29.8,11.8+rb],[32.8,16.4+rb]],1.75,1.5,5,CL);chain(Rr,[[32.8,16.4+rb],[36.3,14.6+rb]],1.5,1.3,5,CL);add(Rr,36.9,14.5+rb,1.35,6,SK);
  blobs(c,W*S,H*S,Rr,shadeR);
  c.fillStyle='#ffffff';c.fillRect(31.7*S,(5.1+rb)*S,1.3*S,.9*S);c.fillStyle='#1a0e08';c.fillRect(32.3*S,(5.15+rb)*S,.7*S,.85*S);c.fillStyle='rgba(255,255,255,.9)';c.fillRect(32.5*S,(5.2+rb)*S,.25*S,.25*S);c.fillStyle='rgb('+HR[1].join(',')+')';c.fillRect(31.5*S,(4.25+rb)*S,1.8*S,.42*S);c.fillStyle='rgba(150,80,60,.5)';c.fillRect(33.3*S,(6.1+rb)*S,.5*S,.7*S);c.fillStyle='rgba(120,40,36,.7)';c.fillRect(32.2*S,(7.55+rb)*S,1.1*S,.32*S);c.fillStyle='rgba(230,120,110,.35)';c.fillRect(31*S,(6.4+rb)*S,1.1*S,.7*S);
  c.fillStyle='#e0b84a';c.fillRect(25*S,(20.4+rb)*S,5.6*S,.8*S);c.fillStyle='#b8bec8';c.fillRect(31.6*S,(36.4+rb)*S,2.6*S,.6*S);
  c.strokeStyle='#2a160c';c.lineWidth=.55*S;c.beginPath();c.moveTo(35*S,(20+rb)*S);c.quadraticCurveTo(45*S,(24+b)*S,head.bx*S,head.by*S);c.stroke();
  if(rp.npc){npcHat(c,S,rb,rp)}else if(!rp.nc){
  const cy=1.6+rb,cx0=28;c.fillStyle='#f2b632';c.beginPath();c.moveTo(cx0*S,(cy+1.6)*S);c.lineTo(cx0*S,(cy-1)*S);c.lineTo((cx0+1.2)*S,(cy+.4)*S);c.lineTo((cx0+2.3)*S,(cy-1.6)*S);c.lineTo((cx0+3.4)*S,(cy+.4)*S);c.lineTo((cx0+4.6)*S,(cy-1)*S);c.lineTo((cx0+4.6)*S,(cy+1.6)*S);c.closePath();c.fill();
  c.fillStyle='#b07a10';c.fillRect(cx0*S,(cy+1)*S,4.6*S,.6*S);c.fillStyle='#e8464f';c.fillRect((cx0+1.9)*S,(cy+.2)*S,.9*S,.9*S);c.fillStyle='#fff6c8';c.fillRect((cx0+.3)*S,(cy-.2)*S,.5*S,.5*S);}
  }
  spritePolish(cv,1);
  return SPR[key]={cv,W,H,hand:[36.9,14.5+rb]}}
function crownPixels(){}

/* ================= ELEMENTAL WEAPONS ================= */
const WEL={wpn_none:'steel',wpn_wood:'wind',wpn_iron:'storm',wpn_diamond:'crystal',wpn_firesword:'fire',wpn_scimitar:'sand',wpn_spear:'wind',wpn_icespear:'ice',wpn_axe:'earth',wpn_hammer:'earth',wpn_lavahammer:'lava',wpn_bow:'holy',wpn_frostbow:'ice',wpn_staff:'arcane',wpn_lightning:'lightning',wpn_scepter:'holy',wpn_boomerang:'wind',wpn_star:'cosmic'};
const ELC={fire:['#fff6b0','#ffc23a','#ff7a1a','#e8361a','#7a1a0a'],lava:['#ffe08a','#ff9a20','#ff4a10','#a8200c','#3a1410'],lightning:['#ffffff','#e8f8ff','#9fe0ff','#6aa8ff','#4a5aff'],storm:['#ffffff','#fff6c8','#bfe9ff','#7fb8ff','#5a6aff'],
  ice:['#ffffff','#e2f8ff','#9fe8ff','#5ab4f0','#2a6aa8'],wind:['#ffffff','#effff6','#b8f4dc','#6ad8b0','#3a9a7a'],sand:['#fff6d8','#f6dc96','#e0b464','#b0823e','#6e4a22'],earth:['#f4e0b0','#d0aa74','#a07a4e','#6e4e30','#3e2a1a'],
  holy:['#ffffff','#fffbe0','#ffe89a','#f6c44a','#c88a1a'],crystal:['#ffffff','#f0fbff','#c8b8ff','#8ad8ff','#ff9ad8'],arcane:['#ffffff','#f2dcff','#c890ff','#9a4ae8','#5a1aa8'],cosmic:['#ffffff','#fff6d0','#d8c8ff','#8a7aff','#3a2a9a'],steel:['#ffffff','#f4f6fa','#d8dde6','#a8b0c0','#6a7286']};
const EL_NAME={fire:'نار',lava:'حمم',lightning:'برق',storm:'عاصفة رعدية',ice:'جليد',wind:'إعصار',sand:'عاصفة رملية',earth:'زلزال',holy:'نور مقدّس',crystal:'بلّور',arcane:'سحر',cosmic:'نجوم المجرّة',steel:'فولاذ'};
function heroW(){const id=S.look.weapon,W2=WPN[id]||{},t=W2.t||'royal',el=WEL[id]||'steel';
  const base={royal:{dur:18,rng:30,len:14},sword:{dur:18,rng:32,len:16},scim:{dur:17,rng:32,len:15},spear:{dur:21,rng:44,len:26},axe:{dur:23,rng:32,len:15},hammer:{dur:27,rng:32,len:14},
    bow:{dur:20,rng:0,len:0,ranged:1},staff:{dur:20,rng:0,len:18,ranged:1},zap:{dur:19,rng:0,len:18,ranged:1},scepter:{dur:21,rng:0,len:17,ranged:1},boom:{dur:16,rng:0,len:8,ranged:1},star:{dur:12,rng:0,len:5,ranged:1}}[t]||{dur:18,rng:30,len:14};
  return Object.assign({t,el,c:W2.c||'#d8dde6',d:W2.d||'#e0b84a',col:ELC[el]},base)}
const eio=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2,eo=p=>1-Math.pow(1-p,3);
function weaponPose(W2,t){const A=G.atk,idle=W2.t==='spear'?-.32:W2.t==='bow'?0:W2.ranged?-1.25:-1.05;let ang=idle+Math.sin(t/650)*.05,ext=0,pull=0;
  if(!A)return{ang,ext,pull};const p=A.p,c=A.c;
  if(W2.ranged){if(W2.t==='bow'){pull=p<.5?eo(p/.5)*5:Math.max(0,5-(p-.5)*40);ang=-.08}else if(W2.t==='boom'||W2.t==='star'){ang=p<.4?lerp(idle,-2.3,eo(p/.4)):p<.6?lerp(-2.3,.6,eio((p-.4)/.2)):lerp(.6,idle,eo((p-.6)/.4))}
    else{ang=p<.45?lerp(idle,-1.9,eo(p/.45)):p<.6?lerp(-1.9,-.15,eio((p-.45)/.15)):lerp(-.15,idle,eo((p-.6)/.4))}return{ang,ext,pull}}
  if(W2.t==='spear'||c===2&&W2.t!=='hammer'&&W2.t!=='axe'){ang=c===2?-.05:-.2;ext=p<.35?-5*eo(p/.35):p<.55?lerp(-5,12,eio((p-.35)/.2)):lerp(12,0,eo((p-.55)/.45));if(c===2&&W2.t!=='spear'){ang=p<.3?lerp(idle,-3.4,eo(p/.3)):p<.7?lerp(-3.4,3.4,eio((p-.3)/.4)):lerp(3.4-Math.PI*2,idle,eo((p-.7)/.3))}return{ang,ext,pull}}
  const a0=c===1?1.15:-2.55,a1=c===1?-2.35:1.0;
  if(p<.3)ang=lerp(idle,a0,eo(p/.3));else if(p<.55)ang=lerp(a0,a1,eio((p-.3)/.25));else ang=lerp(a1,idle,eo((p-.55)/.45));return{ang,ext,pull}}
function lerp(a,b,u){return a+(b-a)*u}
function strikeP(W2){return W2.ranged?(W2.t==='bow'?.5:.5):(W2.t==='spear'||G.atk.c===2&&W2.t!=='hammer'&&W2.t!=='axe'?.45:.44)}
function drawWeapon(B,W2,x,y,ang,face,ext,pull,t,hide){if(hide)return;const col=W2.col,R=RS;B.save();B.translate(x,y);B.scale(face,1);B.rotate(ang);B.translate(ext,0);
  const glow=(gx,r,a)=>{B.globalCompositeOperation='lighter';const g=B.createRadialGradient(gx,0,0,gx,0,r);g.addColorStop(0,`rgba(${toA(col[2]).join(',')},${a})`);g.addColorStop(1,'rgba(0,0,0,0)');B.fillStyle=g;B.fillRect(gx-r,-r,r*2,r*2);B.globalCompositeOperation='source-over'};
  const fl=.8+Math.sin(t/60)*.2;
  switch(W2.t){
    case 'royal':case 'sword':case 'scim':{const L=W2.len;B.fillStyle='#3a2414';B.fillRect(-3.5,-.65,4.2,1.3);B.fillStyle='#d8b450';B.beginPath();B.arc(-3.8,0,1,0,7);B.fill();B.fillStyle=W2.d;B.fillRect(.4,-2.4,1.3,4.8);
      glow(L*.6,L*.55,.45*fl);B.fillStyle=W2.t==='royal'?'#c8ced8':W2.c;B.beginPath();if(W2.t==='scim'){B.moveTo(1.7,-1.1);B.quadraticCurveTo(L*.6,-2.4,L+1.7,-3.2);B.quadraticCurveTo(L*.7,.6,1.7,1.1)}else{B.moveTo(1.7,-1.05);B.lineTo(L,-.9);B.lineTo(L+2.2,0);B.lineTo(L,.9);B.lineTo(1.7,1.05)}B.closePath();B.fill();
      B.fillStyle='rgba(255,255,255,.75)';B.fillRect(2,-.35,L-1,.5);B.fillStyle=col[1];B.globalAlpha=.6;B.fillRect(2,.35,L-2,.35);B.globalAlpha=1;break}
    case 'spear':{B.fillStyle='#5a3a22';B.fillRect(-10,-.6,29,1.2);B.fillStyle='#8a6440';B.fillRect(-10,-.6,29,.4);glow(22,9,.5*fl);B.fillStyle=W2.c;B.beginPath();B.moveTo(18,-1.8);B.lineTo(26,0);B.lineTo(18,1.8);B.lineTo(19.4,0);B.closePath();B.fill();B.fillStyle='rgba(255,255,255,.7)';B.fillRect(19.5,-.3,5,.5);B.fillStyle='#d8b450';B.fillRect(17,-1,1.4,2);break}
    case 'axe':{B.fillStyle='#5a3a22';B.fillRect(-4,-.7,18,1.4);glow(13,8,.5*fl);B.fillStyle=W2.c;B.beginPath();B.moveTo(10,-1.2);B.quadraticCurveTo(13,-6.5,17.5,-5.5);B.quadraticCurveTo(15.5,0,17.5,5.5);B.quadraticCurveTo(13,6.5,10,1.2);B.closePath();B.fill();B.fillStyle='rgba(255,255,255,.65)';B.fillRect(16,-4,.6,8);break}
    case 'hammer':{B.fillStyle='#5a3a22';B.fillRect(-4,-.7,16,1.4);glow(13,9,.55*fl);B.fillStyle=W2.c;B.fillRect(10,-4,6,8);B.fillStyle='rgba(0,0,0,.3)';B.fillRect(10,2.2,6,1.8);B.fillStyle='rgba(255,255,255,.45)';B.fillRect(10,-4,6,1.2);B.fillStyle='#d8b450';B.fillRect(9.4,-4.4,1,8.8);B.fillRect(15.6,-4.4,1,8.8);break}
    case 'bow':{glow(2,9,.4*fl);B.strokeStyle=W2.c;B.lineWidth=1.3;B.beginPath();B.moveTo(-1,-10);B.quadraticCurveTo(5,0,-1,10);B.stroke();B.strokeStyle='#e8e0c8';B.lineWidth=.4;B.beginPath();B.moveTo(-1,-10);B.lineTo(-1-pull,0);B.lineTo(-1,10);B.stroke();
      if(G.atk&&G.atk.p<.5){B.fillStyle='#d8c090';B.fillRect(-1-pull,-.3,12,.6);B.fillStyle=col[2];B.beginPath();B.moveTo(11-pull,-1.4);B.lineTo(14-pull,0);B.lineTo(11-pull,1.4);B.fill();glow(12-pull,5,.7)}break}
    case 'staff':case 'zap':case 'scepter':{B.fillStyle=W2.t==='scepter'?'#d8a42a':'#4a2e1e';B.fillRect(-6,-.7,22,1.4);B.fillStyle=W2.t==='scepter'?'#fff2b0':'#7a5234';B.fillRect(-6,-.7,22,.4);
      const ox=W2.len+1;glow(ox,10,.75*fl);if(W2.t==='zap'){B.strokeStyle=col[2];B.lineWidth=1;B.beginPath();B.moveTo(ox-3,-3);B.lineTo(ox,0);B.lineTo(ox-3,3);B.stroke()}
      if(W2.t==='scepter'){B.fillStyle='#d8a42a';B.beginPath();B.moveTo(ox-3,-4);B.quadraticCurveTo(ox-1,-1,ox-3,0);B.quadraticCurveTo(ox-1,1,ox-3,4);B.lineTo(ox-1.5,0);B.fill()}
      B.fillStyle=col[3];B.beginPath();B.arc(ox,0,2.3,0,7);B.fill();B.fillStyle=col[1];B.beginPath();B.arc(ox-.7,-.7,1.1,0,7);B.fill();break}
    case 'boom':{glow(3,7,.4*fl);B.strokeStyle=W2.c;B.lineWidth=2;B.beginPath();B.moveTo(-1,-5);B.quadraticCurveTo(4,0,-1,5);B.stroke();break}
    case 'star':{glow(3,6,.5*fl);starPath(B,4,0,3.6,1.3,4,t/200);B.fillStyle=W2.c;B.fill();break}
  }
  B.restore()}
function starPath(B,x,y,r1,r0,n,rot){B.beginPath();for(let i=0;i<n*2;i++){const a=rot+i*Math.PI/n,r=i%2?r0:r1;const px2=x+Math.cos(a)*r,py=y+Math.sin(a)*r;i?B.lineTo(px2,py):B.moveTo(px2,py)}B.closePath()}

/* ================= FX ================= */
function P(o){if(!G.pfx)G.pfx=[];if(G.pfx.length>700)G.pfx.shift();o.max=o.life;G.pfx.push(o);return o}
function rnd(a,b){return a+Math.random()*(b-a)}
function burst(x,y,el,dir,n,sp){const C=ELC[el]||ELC.steel;n=n||10;sp=sp||2.4;
  for(let k=0;k<n;k++){const a=rnd(-Math.PI,Math.PI),v=rnd(.4,1)*sp;P({t:'spark',x,y,vx:Math.cos(a)*v+dir*sp*.5,vy:Math.sin(a)*v-.5,g:.06,drag:.92,life:rnd(10,20),col:C[(k%3)+1],s:1})}
  switch(el){
    case 'fire':case 'lava':for(let k=0;k<12;k++)P({t:'flame',x:x+rnd(-4,4),y:y+rnd(-4,4),vx:rnd(-.6,.6)+dir*.6,vy:rnd(-1.6,-.4),g:-.02,drag:.95,life:rnd(16,30),col:el,s:rnd(2.5,4.5)});if(el==='lava')for(let k=0;k<5;k++)P({t:'rock',x,y,vx:rnd(-1.5,1.5)+dir,vy:rnd(-3,-1.4),g:.16,drag:.99,life:50,col:k%2?'#3a1a10':'#ff5a1a',s:rnd(1.2,2.2)});break;
    case 'ice':for(let k=0;k<9;k++)P({t:'shard',x,y,vx:rnd(-2,2)+dir,vy:rnd(-2.6,-.4),g:.12,drag:.97,life:rnd(22,36),col:ELC.ice[k%3+1],s:rnd(1.4,2.6),rot:rnd(0,6),vr:rnd(-.3,.3)});break;
    case 'lightning':case 'storm':for(let k=0;k<3;k++)P({t:'bolt',pts:jag(x,y,x+rnd(-14,14),y+rnd(-14,10),4),life:8,col:el});break;
    case 'wind':case 'sand':for(let k=0;k<8;k++)P({t:'streak',x:x+rnd(-6,6),y:y+rnd(-8,8),vx:dir*rnd(2,4),vy:rnd(-.4,.4),drag:.93,life:rnd(12,22),col:(ELC[el])[k%3],s:rnd(4,9)});break;
    case 'earth':for(let k=0;k<8;k++)P({t:'rock',x,y,vx:rnd(-1.8,1.8)+dir,vy:rnd(-3.4,-1.2),g:.17,drag:.99,life:55,col:ELC.earth[k%3+2],s:rnd(1.2,2.4)});break;
    case 'holy':for(let k=0;k<6;k++)P({t:'star',x:x+rnd(-8,8),y:y+rnd(-10,6),vx:rnd(-.4,.4),vy:rnd(-.8,-.2),drag:.96,life:rnd(18,30),col:'holy',s:rnd(1.5,3)});break;
    case 'crystal':for(let k=0;k<8;k++)P({t:'shard',x,y,vx:rnd(-2.2,2.2)+dir,vy:rnd(-2.6,-.2),g:.1,drag:.97,life:rnd(20,32),col:ELC.crystal[k%4+1],s:rnd(1.4,2.4),rot:rnd(0,6),vr:.3});break;
    case 'arcane':for(let k=0;k<8;k++){const a=k/8*6.28;P({t:'glow',x:x+Math.cos(a)*3,y:y+Math.sin(a)*3,vx:Math.cos(a)*1.4,vy:Math.sin(a)*1.4,drag:.9,life:rnd(14,24),col:ELC.arcane[2],s:rnd(2,3.4)})}break;
    case 'cosmic':for(let k=0;k<7;k++)P({t:'star',x,y,vx:rnd(-1.6,1.6),vy:rnd(-1.8,.4),drag:.95,life:rnd(18,30),col:'cosmic',s:rnd(1.4,2.8)});break;
  }
  P({t:'ring',x,y,life:12,col:(ELC[el]||ELC.steel)[1],s:16});P({t:'glow',x,y,life:10,col:(ELC[el]||ELC.steel)[2],s:18})}
function jag(x0,y0,x1,y1,seg){const pts=[[x0,y0]];for(let i=1;i<seg;i++){const u=i/seg;pts.push([x0+(x1-x0)*u+rnd(-4,4),y0+(y1-y0)*u+rnd(-4,4)])}pts.push([x1,y1]);return pts}
function hitNum(x,y,n,crit,col){P({t:'num',x:x+rnd(-3,3),y,vx:rnd(-.2,.2),vy:-.9,drag:.95,life:36,txt:String(n),col:col||(crit?'#ffe14a':'#ffffff'),s:crit?11:8})}

/* ================= TARGETS & HITS ================= */
function beastY(r){return GY-(r.big?26:12)+(r.fy||0)}
function targets(wt){const T=[];for(const r of G.props){if(r.k==='portal'&&!r.dead&&r.max&&Math.abs(r.x-G.hx)<80)T.push({k:'p',o:r,x:r.x,y:GY-28,hw:12,hh:28});else if(r.k==='beast'&&r.alive&&!r.ally)T.push({k:'b',o:r,x:r.x,y:beastY(r),hw:r.big?22:11,hh:r.big?26:14});else if((r.k==='deer'||r.k==='sheep'||r.k==='fox')&&r.alive)T.push({k:'a',o:r,x:r.x,y:GY-8,hw:r.k==='deer'?9:7,hh:9});else if(wt&&r.k==='tree'&&!r.back&&!r.dead&&!(r.fall>0)&&Math.abs(r.x-G.hx)<70)T.push({k:'t',o:r,x:r.x,y:GY-20,hw:6,hh:30})}for(const h of (G.thieves||[]))if(!h.dead)T.push({k:'h',o:h,x:h.x,y:GY-12,hw:7,hh:13});
  for(const g of G.greed){if(g.dead)continue;const y=g.type==='f'?GY-50:g.type==='boss'?GY-g.h*.55:g.type==='br'?GY-18:GY-10;T.push({k:'g',o:g,x:g.x,y,hw:g.type==='boss'?g.w*.4:g.type==='br'?16:9,hh:g.type==='boss'?g.h*.5:g.type==='br'?20:12})}return T}
function hitT(T,d,el,dir,o){return T.k==='b'?hitBeast(T.o,d,el,dir,o):T.k==='a'?hitAnimal(T.o,d,el,dir):T.k==='t'?hitTree(T.o,d,el,dir):T.k==='h'?hitThief(T.o,d,el,dir):T.k==='p'?hitPortal(T.o,d,el,dir):hitGreed(T.o,d,el,dir,o)}
function applyEl(o,el,big){if(el==='fire'||el==='lava'){o.burn=Math.max(o.burn||0,170)}else if(el==='ice'){o.frz=Math.max(o.frz||0,big?36:95)}else if(el==='sand'){o.slow=150}else if(el==='earth'){o.stun=Math.max(o.stun||0,big?12:40)}}
function statusTick(o,dt){if(o.kbv){o.x+=o.kbv*dt;o.kbv*=Math.pow(.84,dt);if(Math.abs(o.kbv)<.05)o.kbv=0}if(o.fl>0)o.fl-=dt;
  if(o.burn>0){o.burn-=dt;o.bt=(o.bt||0)+dt;if(Math.random()<.35*dt)P({t:'flame',x:o.x+rnd(-5,5),y:(o.k?beastY(o):o.type==='f'?GY-50:GY-10)+rnd(-4,4),vx:rnd(-.2,.2),vy:rnd(-1.2,-.5),g:-.01,drag:.96,life:rnd(12,20),col:'fire',s:rnd(1.6,3)});
    if(o.bt>48){o.bt=0;if(o.k)hitBeast(o,1,null,0,{dot:1});else hitGreed(o,1,null,0,{dot:1})}}
  if(o.slow>0)o.slow-=dt;if(o.frz>0){o.frz-=dt;return true}if(o.stun>0){o.stun-=dt;return true}return false}
function hitBeast(r,d,el,dir,o){o=o||{};if(!r.alive)return false;if(r.inv>0&&!o.dot)return false;dir=dir||Math.sign(r.x-G.hx)||1;r.hp-=d;
  if(!o.dot){r.inv=o.multi?4:9;r.fl=7;r.kbv=dir*(el==='wind'||el==='sand'?5.6:el==='earth'||el==='lava'?3.8:2.6)*(r.big?.25:1);r.stun=Math.max(r.stun||0,r.big?5:16);r.wind=0;r.pounce=0;applyEl(r,el,r.big);burst(r.x,beastY(r),el||'steel',dir,o.small?5:10)}
  hitNum(r.x,beastY(r)-12,d,o.crit,o.dot?'#ff9a3a':null);SFX.hit();
  if(r.hp<=0){r.alive=0;const sp=beastSp(r);const s0=crSprite(sp.type,0,sp.pal,(r.big?4:2)*RS/2,'bh'+G.si+r.kk+(r.big?'B':'')+(r.spec?sp.type:''),16);puff(r.x,GY-3,10,'#9a8a74',1.2);(G.corpses=G.corpses||[]).push({cv:s0.cv,W:s0.W/RS,H:s0.H/RS,x:r.x,y:GY-s0.H/2+2+(r.fy||0),fl:r.dir>0,t:0,col:sp.pal.a});
    for(let k=0;k<14;k++)P({t:'glow',x:r.x+rnd(-8,8),y:beastY(r)+rnd(-8,8),vx:rnd(-.5,.5),vy:rnd(-1.2,-.3),drag:.96,life:rnd(20,36),col:sp.pal.a,s:rnd(1.5,3)});
    const n=r.big?10:3;for(let k=0;k<n;k++)dropCoin(r.x,GY-20,(Math.random()-.5)*3);if(el==='holy')heal(1);
    if(r.big){S.gems+=5;save();banner(`<div class="bt">${gx('هزمت','هزمتِ')} ${sp.name} العملاق!</div><div class="bs">+5 ${ic('gem')}</div>`,2400)}SFX.coin()}return true}
function hitGreed(g,d,el,dir,o){o=o||{};if(g.dead)return false;if(g.inv>0&&!o.dot)return false;dir=dir||Math.sign(g.x-G.hx)||1;const boss=g.type==='boss';g.hp-=d;
  if(!o.dot){g.inv=boss?14:5;g.fl=7;g.kbv=dir*(boss?.5:3.6);applyEl(g,el,boss);burst(g.x,g.type==='f'?GY-50:boss?GY-g.h*.5:GY-12,el||'steel',dir,o.small?5:10);if(boss)G.shake=6}
  hitNum(g.x,(g.type==='f'?GY-60:boss?GY-g.h-4:GY-24),d,o.crit,o.dot?'#ff9a3a':null);
  if(g.hp<=0){g.dead=1;puff(g.x,GY-12,boss?50:14,GREED_PAL[G.b].m,3);for(let k=0;k<10;k++)P({t:'smoke',x:g.x+rnd(-6,6),y:GY-12+rnd(-8,4),vx:rnd(-.4,.4),vy:rnd(-.8,-.2),drag:.97,life:rnd(24,40),col:'#140c1c',s:rnd(3,6)});
    if(g.carry)for(let k=0;k<g.carry;k++)dropCoin(g.x);if(el==='holy')heal(1);
    if(boss){G.bossDead=true;G.flash=14;for(let k=0;k<8;k++)dropCoin(g.x+(k-4)*6);banner(`<div class="bt">${gx('هزمت','هزمتِ')} ${BOSSDEF[G.b].name}!</div><div class="bs">${objective()}</div>`,3500);gHud()}SFX.coin()}return true}
function heal(n){G.hp=Math.min(G.maxhp,G.hp+n);P({t:'num',x:G.hx,y:GY-74,vx:0,vy:-.8,drag:.95,life:34,txt:'+'+n,col:'#7af06a',s:9});for(let k=0;k<6;k++)P({t:'star',x:G.hx+rnd(-8,8),y:GY-40+rnd(-10,10),vx:0,vy:-.6,drag:.97,life:26,col:'holy',s:2});gHud()}

/* ================= HERO ATTACK ================= */
function attack(){if(!G||G.paused||G.over)return;if(G.atk){if(G.atk.p>.5)G.atkQ=1;return}if(G.atkCD>0)return;
  const W2=heroW();G.combo=(G.t-(G.lastAtkEnd||-1e9)<520)?((G.combo||0)+1)%3:0;G.atk={p:0,dur:W2.dur*(G.combo===2?1.2:1),c:G.combo,fired:false};
  if(AC){const t0=AC.currentTime;const o=tone(W2.ranged?520:180,t0,.09,'triangle',.05);o.frequency.exponentialRampToValueAtTime(W2.ranged?900:90,t0+.09)}}
function slayBonus(T){const p=G.pk;return(p.has('slayAll')||(T.k==='b'&&T.o.kk==='a'&&p.has('slayA'))||(T.k==='b'&&T.o.kk!=='a'&&p.has('slayG'))||(T.k==='g'&&p.has('slayG')))?1:0}
function doStrike(W2){const f=G.face,el=W2.el,combo=G.atk.c,hx=G.hx,hy=G.handY||GY-52;
  if(W2.ranged){fireShot(W2,combo);if(combo===2)special(el,W2);return}
  let hits=0;const rng=W2.rng+(combo===2?6:0);
  for(const T of targets(1)){const dx=(T.x-hx)*f;const spin=combo===2&&el==='steel';if((spin?Math.abs(T.x-hx)<44+T.hw:dx>-10-T.hw*.3&&dx<rng+T.hw)&&T.y>GY-78){const crit=Math.random()<.15;const d=1+slayBonus(T)+(combo===2?1:0)+(crit?1:0);if(hitT(T,d,el,f,{crit})){hits++;if(el==='lightning'||el==='storm'){chain(T,el==='lightning'?3:1);if(!G._sb)G._sb=T}}}}
  if(el==='lightning'||el==='storm'){const T=G._sb||aimAt(hx,GY-20,120);G._sb=null;skyBolt(T?T.x:hx+f*42,T?T.y:GY-4,el,{big:combo===2});if(T)hitT(T,1,el,f,{multi:1,small:1})}
  for(const r of G.props)if(r.k==='rabbit'&&r.alive&&Math.abs(r.x-hx-f*14)<18){r.alive=0;r.respawn=1800;dropCoin(r.x);puff(r.x,GY-4,6,'#ffffff')}
  if(hits){G.hitstop=hits>1?5:3.5;G.shake=Math.max(G.shake||0,3)}
  if(combo===2)special(el,W2)}
function chain(T0,n){let from=T0,used=new Set([T0.o]);for(let i=0;i<n;i++){const nx=targets().filter(T=>!used.has(T.o)&&Math.abs(T.x-from.x)<95).sort((a,b)=>Math.abs(a.x-from.x)-Math.abs(b.x-from.x))[0];if(!nx)break;used.add(nx.o);
    P({t:'bolt',pts:jag(from.x,from.y,nx.x,nx.y,6),life:10,col:'lightning'});hitT(nx,1,'lightning',Math.sign(nx.x-from.x)||1,{multi:1,small:1});from=nx}}
function aimAt(x,y,range){const f=G.face;return targets().filter(T=>{const dx=(T.x-x)*f;return dx>4&&dx<range&&T.k!=='a'}).sort((a,b)=>Math.abs(a.x-x)-Math.abs(b.x-x))[0]}
function fireShot(W2,combo){const f=G.face,x=G.handX||G.hx+f*7,y=G.handY||GY-52,el=W2.el;const T=aimAt(G.hx,y,230);
  const shoot=(o)=>{(G.proj=G.proj||[]).push(Object.assign({x,y,vx:0,vy:0,g:0,life:90,dmg:1,el,pierce:0,hit:new Set(),t:0},o))};
  switch(W2.t){
    case 'bow':{const sp=6.4;const mk=(dy)=>{let vy=-.3;if(T){const tt=Math.abs(T.x-x)/sp;vy=(T.y-y)/tt-.5*.035*tt}shoot({kind:'arrow',vx:f*sp,vy:vy+dy,g:.035,dmg:1})};mk(0);if(combo===2){mk(-.45);mk(.35)}break}
    case 'staff':{const n=combo===2?3:1;for(let k=0;k<n;k++)shoot({kind:'orb',vx:f*(3.2+k*.4),vy:(k-1)*.8,homing:1,dmg:1,life:110});break}
    case 'zap':{const tg=T;P({t:'bolt',pts:jag(x,y,x,-10,6),life:8,col:'lightning'});if(tg){skyBolt(tg.x,tg.y,'lightning',{big:combo===2});hitT(tg,2,'lightning',f,{});chain(tg,2)}else skyBolt(x+f*80,GY-4,'lightning');break}
    case 'scepter':{const len=200;P({t:'beam',x,y,x1:x+f*len,life:14,col:'holy',s:5});for(const T2 of targets()){const dx=(T2.x-x)*f;if(dx>0&&dx<len&&Math.abs(T2.y-y)<T2.hh+22)hitT(T2,1,'holy',f,{multi:1,small:1})}break}
    case 'boom':shoot({kind:'boom',vx:f*5,ax:-f*.11,pierce:9,life:140,dmg:1,spin:1});if(combo===2)shoot({kind:'boom',vx:f*4,vy:-.6,ax:-f*.09,pierce:9,life:140,dmg:1,spin:1});G.boomOut=(G.boomOut||0)+1;break;
    case 'star':{const sp=6.5;let vy=0;if(T){vy=(T.y-y)/(Math.abs(T.x-x)/sp)}shoot({kind:'shuriken',vx:f*sp,vy,pierce:2,life:70,dmg:1});break}
  }}
function special(el,W2){const f=G.face,hx=G.hx;G.shake=Math.max(G.shake||0,6);
  const sched=(t,fn)=>(G.sched=G.sched||[]).push({t,fn});
  const area=(x,r,d,e,yMin)=>{for(const T of targets())if(Math.abs(T.x-x)<r+T.hw*.5&&T.y>(yMin||GY-70))hitT(T,d,e,f,{multi:1})};
  switch(el){
    case 'fire':case 'lava':for(let k=0;k<5;k++)sched(k*5,()=>{const x=hx+f*(26+k*22);for(let j=0;j<16;j++)P({t:'flame',x:x+rnd(-5,5),y:GY-2-rnd(0,6),vx:rnd(-.3,.3),vy:rnd(-3.4,-1.6),g:-.03,drag:.96,life:rnd(18,32),col:el,s:rnd(3,5.5)});P({t:'glow',x,y:GY-14,life:18,col:ELC.fire[2],s:26});area(x,13,2,el);if(el==='lava')for(let j=0;j<3;j++)P({t:'rock',x,y:GY-4,vx:rnd(-1,1),vy:rnd(-3.5,-2),g:.17,drag:.99,life:50,col:'#ff5a1a',s:2})});break;
    case 'lightning':case 'storm':{const n=el==='lightning'?3:2;const tg=targets().filter(T=>{const dx=(T.x-hx)*f;return dx>-10&&dx<230}).sort((a,b)=>Math.abs(a.x-hx)-Math.abs(b.x-hx)).slice(0,n);
      (tg.length?tg:[{x:hx+f*80,y:GY-4,none:1}]).forEach((T,i)=>sched(i*7,()=>{skyBolt(T.x,T.y||GY-4,el,{big:1});if(!T.none)hitT(T,el==='lightning'?3:2,el,f,{multi:1})}));break}
    case 'ice':for(let k=0;k<4;k++)sched(k*5,()=>{const x=hx+f*(24+k*18);P({t:'spike',x,y:GY,life:44,col:'ice',s:10+k*2});for(let j=0;j<6;j++)P({t:'shard',x,y:GY-6,vx:rnd(-1.4,1.4),vy:rnd(-2.6,-1),g:.12,drag:.98,life:26,col:ELC.ice[j%3+1],s:1.8,rot:rnd(0,6),vr:.3});area(x,11,2,'ice')});break;
    case 'wind':case 'sand':(G.proj=G.proj||[]).push({kind:'wave',x:hx+f*16,y:GY-24,vx:f*5,vy:0,g:0,life:52,dmg:2,el,pierce:20,hit:new Set(),t:0});break;
    case 'earth':{P({t:'ring',x:hx+f*30,y:GY-2,life:22,col:ELC.earth[1],s:70,flat:1});for(let k=0;k<22;k++)P({t:'rock',x:hx+f*rnd(6,90),y:GY-2,vx:rnd(-1,1),vy:rnd(-3.8,-1.5),g:.18,drag:.99,life:60,col:ELC.earth[k%3+2],s:rnd(1.4,3)});G.shake=12;for(const T of targets()){const dx=(T.x-hx)*f;if(dx>-24&&dx<95&&T.y>GY-40)hitT(T,2,'earth',f,{multi:1})}break}
    case 'holy':{const x=hx+f*52;P({t:'pillar',x,y:GY,life:30,col:'holy',s:30});G.flash=4;area(x,20,3,'holy',GY-90);heal(2);break}
    case 'crystal':for(let k=0;k<5;k++)(G.proj=G.proj||[]).push({kind:'crys',x:G.handX||hx,y:G.handY||GY-50,vx:f*5*Math.cos(-.45+k*.18),vy:5*Math.sin(-.45+k*.18)+.8,g:.05,life:60,dmg:1,el:'crystal',pierce:0,hit:new Set(),t:0,rot:0});break;
    case 'arcane':for(let k=0;k<3;k++)(G.proj=G.proj||[]).push({kind:'orb',x:G.handX||hx,y:(G.handY||GY-50)-k*6,vx:f*(2.4+k*.4),vy:-1+k,g:0,life:120,dmg:1,el:'arcane',homing:1,pierce:0,hit:new Set(),t:0});break;
    case 'cosmic':for(let k=0;k<5;k++)sched(k*6,()=>(G.proj=G.proj||[]).push({kind:'fallstar',x:hx+f*(28+k*22)-f*30,y:GY-150,vx:f*1.4,vy:5,g:.05,life:60,dmg:2,el:'cosmic',pierce:3,hit:new Set(),t:0}));break;
    case 'steel':{P({t:'ring',x:hx,y:GY-30,life:14,col:'#ffffff',s:46});break}
  }}

/* ================= COMBAT UPDATE ================= */
function updateCombat(dt){const W2=heroW();
  if(G.atk){const A=G.atk,sp=strikeP(W2);const prev=A.p;A.p+=dt/A.dur;
    if(!W2.ranged&&A.p>.24&&A.p<.7){G.trail=G.trail||[];const pose=weaponPose(W2,G.t);G.trail.push([pose.ang,pose.ext]);if(G.trail.length>9)G.trail.shift()}
    if(!A.fired&&A.p>=sp){A.fired=true;doStrike(W2)}
    if(A.p>=1){G.atk=null;G.lastAtkEnd=G.t;G.atkCD=3;G.trail=[];if(G.atkQ){G.atkQ=0;attack()}}}
  else if(G.trail&&G.trail.length)G.trail.shift();
  if(G.sched){for(const s of G.sched){s.t-=dt;if(s.t<=0&&!s.done){s.done=1;s.fn()}}G.sched=G.sched.filter(s=>!s.done)}
  // weapon aura
  if(G.handX!==undefined&&Math.random()<.5*dt){const pose=weaponPose(W2,G.t),L=W2.len||10,u=rnd(.3,1),x=G.handX+G.face*Math.cos(pose.ang)*L*u,y=G.handY+Math.sin(pose.ang)*L*u,el=W2.el;
    if(el==='fire'||el==='lava')P({t:'flame',x,y,vx:rnd(-.2,.2),vy:rnd(-.9,-.3),g:-.01,drag:.96,life:rnd(10,18),col:el,s:rnd(1.2,2.2)});
    else if((el==='lightning'||el==='storm')&&Math.random()<.18)P({t:'bolt',pts:jag(x,y,x+rnd(-6,6),y+rnd(-6,6),3),life:5,col:el});
    else if(el==='ice'||el==='crystal'||el==='holy'||el==='cosmic')Math.random()<.4&&P({t:'star',x,y,vx:0,vy:rnd(-.3,.1),drag:.96,life:rnd(12,20),col:el==='ice'?'ice':el,s:rnd(.8,1.5)});
    else if(el==='arcane')P({t:'glow',x,y,vx:rnd(-.3,.3),vy:rnd(-.5,0),drag:.96,life:rnd(12,20),col:ELC.arcane[2],s:1.6});
    else if(el==='wind'||el==='sand')Math.random()<.3&&P({t:'streak',x,y,vx:-G.face*rnd(.6,1.4)-G.vx*.5,vy:0,drag:.95,life:14,col:ELC[el][2],s:3});
    else if(el==='earth')Math.random()<.15&&P({t:'rock',x,y,vx:rnd(-.2,.2),vy:0,g:.12,drag:.99,life:30,col:ELC.earth[3],s:.8})}
  // projectiles
  if(G.proj){for(const p of G.proj){p.t+=dt;p.life-=dt;if(p.ax){p.vx+=p.ax*dt}p.vy+=(p.g||0)*dt;
      if(p.homing){const T=targets().filter(T=>!p.hit.has(T.o)).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y))[0];if(T&&Math.hypot(T.x-p.x,T.y-p.y)<180){const a=Math.atan2(T.y-p.y,T.x-p.x),sp=Math.hypot(p.vx,p.vy)||3;p.vx+=(Math.cos(a)*sp-p.vx)*.08*dt;p.vy+=(Math.sin(a)*sp-p.vy)*.08*dt}}
      p.x+=p.vx*dt;p.y+=p.vy*dt;
      if(p.kind==='boom'&&p.t>20&&Math.abs(p.x-G.hx)<10){p.life=0;G.boomOut=Math.max(0,(G.boomOut||1)-1)}
      // trails
      const C=ELC[p.el]||ELC.steel;if(Math.random()<.8*dt){if(p.el==='fire'||p.el==='lava')P({t:'flame',x:p.x,y:p.y,vx:-p.vx*.1,vy:-.3,g:-.01,drag:.95,life:12,col:p.el,s:2});else P({t:'glow',x:p.x,y:p.y,vx:-p.vx*.05,vy:0,drag:.9,life:10,col:C[2],s:p.kind==='wave'?6:2})}
      if(p.kind==='wave'&&Math.random()<.6)P({t:'streak',x:p.x+rnd(-4,4),y:p.y+rnd(-14,14),vx:p.vx*.6,vy:0,drag:.92,life:12,col:C[1],s:8});
      if(p.y>GY-2&&p.kind!=='wave'){p.life=0;burst(p.x,GY-3,p.el,Math.sign(p.vx),5,1.6);if(p.kind==='fallstar'){P({t:'ring',x:p.x,y:GY-2,life:14,col:'#fff6c8',s:20,flat:1});for(const T of targets())if(Math.abs(T.x-p.x)<16&&T.y>GY-40&&!p.hit.has(T.o))hitT(T,p.dmg,p.el,Math.sign(p.vx)||1,{multi:1})}}
      if(p.life<=0)continue;
      for(const T of targets()){if(p.hit.has(T.o))continue;const rad=p.kind==='wave'?10:3;if(Math.abs(T.x-p.x)<T.hw+rad&&Math.abs(T.y-p.y)<T.hh+(p.kind==='wave'?14:4)){p.hit.add(T.o);const crit=Math.random()<.12;hitT(T,p.dmg+slayBonus(T)+(crit?1:0),p.el,Math.sign(p.vx)||G.face,{crit,multi:p.pierce>3});if(p.el==='lightning'||p.el==='storm')chain(T,1);if(p.pierce--<=0){p.life=0;break}}}}
    G.proj=G.proj.filter(p=>p.life>0)}
  if(G.pfx){for(const q of G.pfx){q.life-=dt;q.x+=(q.vx||0)*dt;q.y+=(q.vy||0)*dt;q.vy=(q.vy||0)+(q.g||0)*dt;if(q.drag){const k=Math.pow(q.drag,dt);q.vx*=k;q.vy*=k}if(q.t==='rock'&&q.y>GY-1){q.y=GY-1;q.vy*=-.35;q.vx*=.6}}G.pfx=G.pfx.filter(q=>q.life>0)}
  if(G.corpses){for(const c of G.corpses){c.t+=dt;if(Math.random()<.5*dt&&c.t<30)P({t:'glow',x:c.x+rnd(-c.W*.3,c.W*.3),y:c.y+rnd(0,c.H),vx:0,vy:rnd(-1,-.3),drag:.97,life:rnd(14,24),col:c.col,s:rnd(1.2,2.4)})}G.corpses=G.corpses.filter(c=>c.t<44)}}

/* ================= COMBAT RENDER ================= */
function drawHeroWeapon(B,V,hx,oy,ms,t){const W2=heroW(),pose=weaponPose(W2,t),f=V.face,hxw=hx+f*(ms.hand[0]-30),hyw=oy+ms.hand[1];G.handX=V.hx+f*(ms.hand[0]-30);G.handY=hyw;
  if(V.trail&&V.trail.length>1){const C=W2.col,L0=(W2.len||14)+2,T=[];for(let k=1;k<V.trail.length;k++){const[a0,e0]=V.trail[k-1],[a1,e1]=V.trail[k];for(let q=0;q<4;q++){const u=q/4;T.push([a0+(a1-a0)*u,e0+(e1-e0)*u])}}T.push(V.trail[V.trail.length-1]);
    const n=T.length;if(n>2){const P=(an,r)=>[hxw+f*Math.cos(an)*r,hyw+Math.sin(an)*r];B.globalCompositeOperation='lighter';
      for(const[lay,al,wk] of [[0,.32,1],[1,.55,.55],[2,.8,.22]]){B.beginPath();for(let k=0;k<n;k++){const u=k/(n-1),[an,ex]=T[k],r=L0+ex,p=P(an,r);k?B.lineTo(p[0],p[1]):B.moveTo(p[0],p[1])}
        for(let k=n-1;k>=0;k--){const u=k/(n-1),[an,ex]=T[k],r=L0+ex,th=Math.sin(u*Math.PI)*(L0*.55)*wk*(.35+u*.65),p=P(an,r-th);B.lineTo(p[0],p[1])}B.closePath();
        B.fillStyle=`rgba(${toA(C[lay+1]).join(',')},${al})`;B.fill()}
      B.strokeStyle='rgba(255,255,255,.9)';B.lineWidth=.7;B.beginPath();for(let k=Math.floor(n*.35);k<n;k++){const[an,ex]=T[k],p=P(an,L0+ex);k>Math.floor(n*.35)?B.lineTo(p[0],p[1]):B.moveTo(p[0],p[1])}B.stroke();B.globalCompositeOperation='source-over'}}
  drawWeapon(B,W2,hxw,hyw,pose.ang,f,pose.ext,pose.pull,t,W2.t==='boom'&&(V.boomOut||0)>0);
  B.fillStyle='rgb('+rampOf(riderPal().s)[3].join(',')+')';B.fillRect(hxw-1,hyw-1,2,2)}
function fxColor(q){const C=q.col==='fire'?ELC.fire:q.col==='lava'?ELC.lava:null;if(C){const u=1-q.life/q.max;return C[Math.min(4,Math.floor(u*4.2))]}return q.col}
function drawCombatFX(B,toS,t){const ox=(x)=>toS(x);try{drawFlyCoins(B,toS);try{drawCrownK(B,toS,t)}catch(e){}try{drawFireflies(B,toS,t)}catch(e){}drawGhost(B,toS,t);drawArch(B,toS,t)}catch(e){}
  if(G.corpses)for(const c of G.corpses){const a=1-c.t/44,u=Math.min(1,c.t/14),sx=ox(c.x);B.globalAlpha=Math.max(0,a*.92);B.save();B.translate(sx,c.y+c.H);B.rotate((c.fl?-1:1)*u*.16);B.scale(c.fl?-(1+u*.06):(1+u*.06),1-u*.42);B.drawImage(c.cv,-c.W/2,-c.H,c.W,c.H);B.restore();const yy=c.y;
    if(c.t<8){B.globalCompositeOperation='lighter';B.globalAlpha=(8-c.t)/8;if(c.fl){B.save();B.translate(sx+c.W/2,0);B.scale(-1,1);B.drawImage(c.cv,0,yy,c.W,c.H);B.restore()}else B.drawImage(c.cv,sx-c.W/2,yy,c.W,c.H);B.globalCompositeOperation='source-over'}B.globalAlpha=1}
  // frozen overlay
  const frozen=[];for(const r of G.props)if(r.k==='beast'&&r.alive&&r.frz>0)frozen.push([r.x,beastY(r),r.big?20:10,r.big?24:12]);for(const g of G.greed)if(!g.dead&&g.frz>0)frozen.push([g.x,g.type==='f'?GY-50:GY-12,10,12]);
  for(const[x,y,w,h]of frozen){const sx=ox(x),C=ELC.ice,base=Math.min(GY,y+h);B.globalCompositeOperation='lighter';const g=B.createRadialGradient(sx,y,1,sx,y,w*1.6);g.addColorStop(0,'rgba(160,230,255,.35)');g.addColorStop(1,'rgba(160,230,255,0)');B.fillStyle=g;B.fillRect(sx-w*1.6,y-w*1.6,w*3.2,w*3.2);B.globalCompositeOperation='source-over';
    const n=Math.round(w*.7)+3;for(let k=0;k<n;k++){const u=(k+.5)/n,cx=sx-w+u*w*2,hh=h*(.5+Math.sin(u*Math.PI)*.9)*(.7+((k*37)%5)/10),ww=1.4+((k*13)%3)*.5,lean=(u-.5)*.5;
      B.fillStyle=k%2?C[2]:C[3];B.beginPath();B.moveTo(cx-ww,base);B.lineTo(cx+lean*hh,base-hh);B.lineTo(cx+ww,base);B.fill();B.fillStyle='rgba(255,255,255,.75)';B.beginPath();B.moveTo(cx-ww*.3,base);B.lineTo(cx+lean*hh,base-hh);B.lineTo(cx,base);B.fill()}
    for(let k=0;k<3;k++){const a=(G.t/300+k*2.1),px2=sx+Math.cos(a)*w,py=y+Math.sin(a*1.3)*h*.6;B.fillStyle='#ffffff';B.fillRect(px2-.5,py-.5,1,1)}}
  // projectiles
  if(G.proj)for(const p of G.proj){const sx=ox(p.x),C=ELC[p.el]||ELC.steel;B.globalCompositeOperation='lighter';
    const gl=(r,a)=>{const g=B.createRadialGradient(sx,p.y,0,sx,p.y,r);g.addColorStop(0,`rgba(${toA(C[1]).join(',')},${a})`);g.addColorStop(1,'rgba(0,0,0,0)');B.fillStyle=g;B.fillRect(sx-r,p.y-r,r*2,r*2)};
    switch(p.kind){
      case 'arrow':{gl(6,.6);B.globalCompositeOperation='source-over';const a=Math.atan2(p.vy,p.vx);B.save();B.translate(sx,p.y);B.rotate(a);B.fillStyle='#d8c090';B.fillRect(-7,-.3,9,.6);B.fillStyle=C[2];B.beginPath();B.moveTo(2,-1.3);B.lineTo(5,0);B.lineTo(2,1.3);B.fill();B.fillStyle=C[3];B.fillRect(-8,-1,2,2);B.restore();break}
      case 'orb':case 'crys':gl(7,.8);B.fillStyle=C[1];B.beginPath();B.arc(sx,p.y,1.8,0,7);B.fill();B.fillStyle='#ffffff';B.beginPath();B.arc(sx,p.y,.8,0,7);B.fill();break;
      case 'wave':{gl(18,.45);B.strokeStyle=`rgba(${toA(C[1]).join(',')},.9)`;B.lineWidth=2.4;B.beginPath();const d=Math.sign(p.vx);B.arc(sx-d*8,p.y,16,d>0?-1.1:Math.PI-1.1,d>0?1.1:Math.PI+1.1);B.stroke();B.strokeStyle='rgba(255,255,255,.9)';B.lineWidth=.8;B.stroke();break}
      case 'boom':case 'shuriken':{gl(7,.5);B.globalCompositeOperation='source-over';B.save();B.translate(sx,p.y);B.rotate(p.t*.5);if(p.kind==='boom'){B.strokeStyle=(WPN.wpn_boomerang||{}).c||'#e8464f';B.lineWidth=2;B.beginPath();B.moveTo(-5,-4);B.quadraticCurveTo(2,0,-5,4);B.stroke()}else{starPath(B,0,0,4,1.4,4,0);B.fillStyle='#d3d9e3';B.fill()}B.restore();break}
      case 'fallstar':{gl(12,.8);B.globalCompositeOperation='lighter';B.strokeStyle='rgba(255,246,200,.6)';B.lineWidth=2;B.beginPath();B.moveTo(sx,p.y);B.lineTo(sx-p.vx*5,p.y-p.vy*5);B.stroke();starPath(B,sx,p.y,4,1.6,5,p.t*.2);B.fillStyle='#fff6c8';B.fill();break}
    }B.globalCompositeOperation='source-over'}
  if(!G.pfx)return;
  for(const add of [false,true]){B.globalCompositeOperation=add?'lighter':'source-over';
    for(const q of G.pfx){const isAdd=q.t!=='rock'&&q.t!=='shard'&&q.t!=='smoke'&&q.t!=='num'&&q.t!=='scorch';if(isAdd!==add)continue;const u=q.life/q.max,sx=ox(q.x);B.globalAlpha=Math.max(0,Math.min(1,u*1.4));
      switch(q.t){
        case 'glow':{const r=q.s*(q.ring?1:(.6+u*.4)),g=B.createRadialGradient(sx,q.y,0,sx,q.y,r);g.addColorStop(0,q.col);g.addColorStop(1,'rgba(0,0,0,0)');B.fillStyle=g;B.fillRect(sx-r,q.y-r,r*2,r*2);break}
        case 'flame':{const r=q.s*(.3+u*.7);B.fillStyle=fxColor(q);B.beginPath();B.arc(sx,q.y,r,0,7);B.fill();break}
        case 'spark':B.strokeStyle=q.col;B.lineWidth=.7;B.beginPath();B.moveTo(sx,q.y);B.lineTo(sx-q.vx*2,q.y-q.vy*2);B.stroke();break;
        case 'streak':B.fillStyle=q.col;B.fillRect(sx-q.s/2,q.y,q.s,.5);break;
        case 'ring':B.strokeStyle=q.col;B.lineWidth=1.4*u+.3;B.beginPath();if(q.flat)B.ellipse(sx,q.y,q.s*(1-u)+2,(q.s*(1-u)+2)*.18,0,0,7);else B.arc(sx,q.y,q.s*(1-u)+2,0,7);B.stroke();break;
        case 'star':starPath(B,sx,q.y,q.s,q.s*.35,4,q.life*.1);B.fillStyle=q.col==='holy'?'#fff2b0':q.col==='ice'?'#e2f8ff':q.col==='cosmic'?'#fff6d0':(ELC[q.col]||ELC.steel)[1];B.fill();break;
        case 'skybolt':drawSkyBolt(B,q,sx,u);break;
        case 'scorch':{B.globalAlpha=Math.min(1,u*2)*.55;B.fillStyle='#120c10';B.beginPath();B.ellipse(sx,q.y,q.s,1.6,0,0,7);B.fill();B.globalAlpha=Math.min(1,u*2)*.5;B.fillStyle='#ff9a40';if(q.max-q.life<60){B.globalAlpha=(1-(q.max-q.life)/60)*.6;B.beginPath();B.ellipse(sx,q.y,q.s*.5,.8,0,0,7);B.fill()}break}
        case 'bolt':{const C=ELC[q.col]||ELC.lightning,o0=q.pts[0];const draw=(w,c)=>{B.strokeStyle=c;B.lineWidth=w;B.beginPath();q.pts.forEach(([x,y],i)=>{const X=ox(x);i?B.lineTo(X,y):B.moveTo(X,y)});B.stroke()};draw((q.w||1)*3.2,`rgba(${toA(C[3]).join(',')},.55)`);draw((q.w||1)*1.1,'#ffffff');break}
        case 'beam':{const x1=ox(q.x1);const g=B.createLinearGradient(0,q.y-q.s,0,q.y+q.s);g.addColorStop(0,'rgba(255,230,140,0)');g.addColorStop(.5,'rgba(255,250,220,.95)');g.addColorStop(1,'rgba(255,230,140,0)');B.fillStyle=g;B.fillRect(Math.min(sx,x1),q.y-q.s*u,Math.abs(x1-sx),q.s*2*u);break}
        case 'pillar':{const w=q.s*(.4+u*.6),g=B.createLinearGradient(sx-w,0,sx+w,0);g.addColorStop(0,'rgba(255,230,140,0)');g.addColorStop(.5,'rgba(255,252,230,.95)');g.addColorStop(1,'rgba(255,230,140,0)');B.fillStyle=g;B.fillRect(sx-w,0,w*2,q.y);break}
        case 'spike':{const h=q.s*Math.min(1,(q.max-q.life)/6),C=ELC.ice;B.globalCompositeOperation='source-over';for(let k=-1;k<=1;k++){const hh=h*(k?0.65:1);B.fillStyle=k<0?C[3]:k>0?C[2]:C[1];B.beginPath();B.moveTo(sx+k*3.4-2.2,q.y);B.lineTo(sx+k*3.4+(k*.8),q.y-hh);B.lineTo(sx+k*3.4+2.2,q.y);B.fill()}B.fillStyle='rgba(255,255,255,.8)';B.fillRect(sx-.3,q.y-h,.6,h*.8);B.globalCompositeOperation='lighter';break}
        case 'shard':B.save();B.translate(sx,q.y);B.rotate(q.rot+=q.vr||0);B.fillStyle=q.col;B.fillRect(-q.s/2,-q.s/4,q.s,q.s/2);B.restore();break;
        case 'rock':B.fillStyle=q.col;B.fillRect(sx-q.s/2,q.y-q.s/2,q.s,q.s);B.fillStyle='rgba(255,255,255,.25)';B.fillRect(sx-q.s/2,q.y-q.s/2,q.s,q.s*.3);break;
        case 'smoke':{const r=q.s*(1.6-u*.6);B.fillStyle=q.col;B.globalAlpha=u*.55;B.beginPath();B.arc(sx,q.y,r,0,7);B.fill();break}
        case 'num':B.font=`bold ${q.s}px sans-serif`;B.textAlign='center';B.lineWidth=2;B.strokeStyle='rgba(20,10,30,.9)';B.strokeText(q.txt,sx,q.y);B.fillStyle=q.col;B.fillText(q.txt,sx,q.y);break;
      }}}
  B.globalAlpha=1;B.globalCompositeOperation='source-over'}

/* ================= BEAST AI (wind-up & pounce) ================= */
function beastUpdate(r,dt){const d=G.hx-r.x,ad=Math.abs(d);r.t+=dt;if(r.inv>0)r.inv-=dt;if(r.vid&&qVilBeast(r))return;
  if(statusTick(r,dt)){r.fy+=((r.kk==='a'?-30:0)-r.fy)*.1*dt;return}
  const fly=r.kk==='a',aggro=r.big?300:240,chase=ad<aggro&&!(G.inv>0&&ad<36);let v=0;
  if(r.wind>0){r.wind-=dt;r.dir=Math.sign(d)||r.dir;if(r.wind<=0){r.pounce=fly?26:20;r.pdir=r.dir}}
  else if(r.pounce>0){r.pounce-=dt;v=(fly?2.6:3.1)*(r.slow>0?.5:1);r.dir=r.pdir}
  else if(r.back>0){r.back-=dt;v=1.15}
  else if(chase){r.dir=Math.sign(d)||1;v=(r.big?.85:fly?1.2:1.05)*(r.slow>0?.5:1);if(ad<(r.big?95:72)&&ad>12&&(r.pcd||0)<=0){r.wind=r.big?34:24;r.pcd=r.big?150:105}}
  else{if(Math.abs(r.x-r.x0)>130)r.dir=Math.sign(r.x0-r.x);else if(r.t%240<dt)r.dir=Math.random()<.5?-1:1;v=.35}
  if(r.pcd>0)r.pcd-=dt;r.sv=(r.sv||0)+(r.dir*v-(r.sv||0))*Math.min(1,(r.pounce>0?.45:.09)*dt);r.x+=r.sv*dt;r.dist=(r.dist||0)+Math.abs(r.sv*dt);r.spd=r.sv;if(Math.abs(r.sv)>.06)r.face=Math.sign(r.sv);
  const ty=fly?(-34-Math.sin(r.t/40)*8+(r.pounce>0?30:r.wind>0?-8:0)):(r.pounce>0?-Math.sin((20-r.pounce)/20*Math.PI)*10:0);r.fy=(r.fy||0)+(ty-(r.fy||0))*Math.min(1,(fly?.12:.6)*dt);
  const reach=r.big?30:16;if(ad<reach&&G.inv<=0&&(!fly||r.pounce>0||Math.abs(r.fy+20)<14)){damageHero((r.big||r.spec)?3:fly?1:2,r.x);r.back=40;r.dir=-Math.sign(d)||1;r.pounce=0;r.wind=0;burst(G.hx,GY-26,'steel',Math.sign(d)||1,6,1.6)}
  for(const p of G.people){if(p.role==='vagrant'||p.flee>0)continue;if(Math.abs(p.x-r.x)<10&&!(p.role==='knight'||p.role==='guard')){p.role='vagrant';p.pouch=0;p.flee=160;p.fdir=-Math.sign(r.x-p.x)||1;p.home=r.x0;SFX.hit();break}}}

/* ================= HD BUILDINGS ================= */
const BPAL=[
 {wall:['#6a5c4e','#8c7c68','#ae9e84','#cfc1a4','#e9ddc0'],beam:'#3a2616',roof:['#4e3416','#715024','#987034','#bc924a','#dcb46a'],roofK:'thatch',roof2:['#4e1a14','#76281c','#a03a26','#c45a36','#de8452'],stone:['#34363a','#4e5256','#6c7074','#92969a','#bcbebc'],cone:['#1a2844','#263c62','#365484','#5474a4','#86a0c4'],dome:['#1a2844','#263c62','#365484','#5474a4','#86a0c4'],banner:'#a8242e',gold:'#e0b048',wallK:'timber'},
 {wall:['#36241a','#523622','#704c2e','#906840','#b08858'],beam:'#2a1a10',roof:['#9fb2c8','#c3d2e2','#e2ebf6','#f6f9fd','#ffffff'],roofK:'snow',roof2:['#9fb2c8','#c3d2e2','#e2ebf6','#f6f9fd','#ffffff'],stone:['#46566a','#607288','#8092a8','#a6b6ca','#d0dae6'],cone:['#24365a','#344c7a','#4a6a9c','#6a8cbc','#9cb6d6'],dome:['#24365a','#344c7a','#4a6a9c','#6a8cbc','#9cb6d6'],banner:'#2a5aa8',gold:'#d8e8ff',wallK:'logs'},
 {wall:['#86562e','#a4703e','#c49052','#deb074','#f2d4a0'],beam:'#5a3a1e',roof:['#86562e','#a4703e','#c49052','#deb074','#f2d4a0'],roofK:'flat',roof2:['#86562e','#a4703e','#c49052','#deb074','#f2d4a0'],stone:['#8a6440','#a8805a','#c49c74','#dcbc94','#f0dab8'],cone:['#16504e','#1e6e66','#2a8e82','#4aae9c','#7ed0bc'],dome:['#8a5a10','#b07a1a','#d4a02e','#ecc456','#fae29a'],banner:'#1e7a4a',gold:'#f0c040',wallK:'mud'},
 {wall:['#120e10','#201a1c','#30282a','#463a3a','#5e4e4c'],beam:'#0a0606',roof:['#141018','#221c26','#322a36','#463c4a','#5c5262'],roofK:'slate',roof2:['#141018','#221c26','#322a36','#463c4a','#5c5262'],stone:['#120e10','#201a1c','#30282a','#463a3a','#5e4e4c'],cone:['#141018','#221c26','#322a36','#463c4a','#5c5262'],dome:['#3a0e0a','#601810','#8a2816','#b04420','#d8702e'],banner:'#c81e1e',gold:'#ff8a20',wallK:'stone',lava:1},
 {wall:['#a898c8','#c0b2dc','#d8ccec','#ece6f8','#ffffff'],beam:'#8a6aa8',roof:['#7a3264','#a44a86','#c86aa4','#e490c0','#f8c0dc'],roofK:'tile',roof2:['#7a3264','#a44a86','#c86aa4','#e490c0','#f8c0dc'],stone:['#9a8cc0','#b4a8d4','#cec4e6','#e6e0f4','#fbf9ff'],cone:['#7a3264','#a44a86','#c86aa4','#e490c0','#f8c0dc'],dome:['#8a6a10','#b08a1e','#d4b034','#ecd060','#fbeca4'],banner:'#c86aa4',gold:'#f2c84a',wallK:'plaster'}];
const MARBLE=['#9a9690','#b8b4ac','#d4d0c6','#ebe7dc','#fbf8f0'];
function bSet(P,b,kind,v){P.b=b;P.kind=kind;P.v=v;P.shut=b===0?['#2e1c10','#4a2e1a','#6a4426','#8a5c34']:b===1?['#1e2e40','#2c445c','#3e5e7c','#5a7e9e']:b===4?['#5a3a7a','#7a5a9a','#9a7aba','#bca0d8']:null;P.sill=BPAL[b].stone;P.flowers=b===0||b===4;
  if(kind==='cottage'||kind==='house'){const r=rng(b*7+v*13+kind.length);P.yard=[[-P.W/2-5-r()*3,r()<.5?'barrel':'crate'],[P.W/2+3+r()*3,r()<.5?'crate':'barrel']];if(r()<.5)P.yard.push([-P.W/2-12,'barrel'])}}
function bPainter(W,H){const R=RS,Wd=W*R,Hd=H*R,cv=mkc(Wd,Hd),c=cv.getContext('2d'),im=c.createImageData(Wd,Hd),d=im.data;
  const put=(x,y,col)=>{if(x<0||y<0||x>=Wd||y>=Hd)return;const p=(y*Wd+x)*4;d[p]=col[0];d[p+1]=col[1];d[p+2]=col[2];d[p+3]=255};
  const P={cv,c,R,W,H,win:[],smoke:[],flags:[],lan:[],torch:[],yard:[],
    dark(x0,y0,x1,y1,f0,f1){for(let py=Math.max(0,Math.floor(y0*R));py<Math.min(Hd,Math.ceil(y1*R));py++){const f=f0+(f1-f0)*((py/R-y0)/Math.max(.01,y1-y0));for(let px=Math.max(0,Math.floor(x0*R));px<Math.min(Wd,Math.ceil(x1*R));px++){const p=(py*Wd+px)*4;if(!d[p+3])continue;d[p]*=f;d[p+1]*=f;d[p+2]*=f}}},
    ivy(x0,y0,x1,y1,seed,cols){const C=cols.map(toA);for(let py=Math.max(0,Math.floor(y0*R));py<Math.min(Hd,Math.ceil(y1*R));py++)for(let px=Math.max(0,Math.floor(x0*R));px<Math.min(Wd,Math.ceil(x1*R));px++){const p=(py*Wd+px)*4;if(!d[p+3])continue;const fy=(py/R-y0)/(y1-y0),n=vn2(px/(3*R),py/(3*R),seed,0);if(n*1.3+fy*.55-.95>hsh2(px>>1,py>>1,seed)*.3){const col=C[Math.min(C.length-1,Math.floor((n+hsh2(px,py,seed+1)*.3)*C.length*.8))];d[p]=col[0];d[p+1]=col[1];d[p+2]=col[2]}}},
    area(x0,y0,x1,y1,test,shade,ramp){const RP=ramp.map(toA);for(let py=Math.max(0,Math.floor(y0*R));py<Math.min(Hd,Math.ceil(y1*R));py++)for(let px=Math.max(0,Math.floor(x0*R));px<Math.min(Wd,Math.ceil(x1*R));px++){const wx=(px+.5)/R,wy=(py+.5)/R;if(test&&!test(wx,wy))continue;const t=shade(wx,wy,px,py);if(t==null)continue;put(px,py,Array.isArray(t)?t:rampPick(RP,Math.max(0,Math.min(.999,t)),px,py))}},
    done(){c.putImageData(im,0,0);return cv}};
  return P}
function matShade(kind,x0,y0,w,h,seed,o){o=o||{};const beam=o.beam?toA(o.beam):null;
  return(wx,wy,px,py)=>{const n=hsh2(px>>1,py>>1,seed)-.5,lx=(wx-x0)/w,ly=(wy-y0)/h;let t=.48+(lx-.5)*.22+n*.12;if(lx>.94)t+=.18;if(lx<.04)t-=.18;if(ly>.92)t-=.12;
    switch(kind){
      case 'plaster':t+=.08;if(hsh2(px>>2,py>>2,seed+1)>.93)t-=.15;break;
      case 'timber':{const u=(wx-x0),v=(wy-y0);if(u%11<1.5||v<1.5||Math.abs(v-h*.5)<.8||u>w-1.5||Math.abs((u%11)-(v%11))<.9&&v>h*.5)return lerpA(beam,[0,0,0],.15+((u|0)%3)*.05);t+=.1;break}
      case 'logs':{const v=((wy-y0)%3.2)/3.2;t=.18+Math.sin(v*Math.PI)*.62+n*.16+(lx-.5)*.15;if(v<.12)t=.04;if(lx<.04||lx>.96){const cv2=Math.hypot(((wx-x0)%3.2)-1.6,v*3.2-1.6);t=.5+(cv2<1.2?.2:-.1)}break}
      case 'mud':case 'brick':{const rh=kind==='mud'?3:2.4,bw=kind==='mud'?6.5:5,row=Math.floor((wy-y0)/rh),off=(row%2)*bw/2,u=(wx-x0+off)%bw,v=(wy-y0)%rh;if(v<.45||u<.45)t-=.26;else t+=(hsh2(Math.floor((wx-x0+off)/bw),row,seed+7)-.5)*.22+(v<.9?.1:0);if(kind==='mud')t+=.06;break}
      case 'stone':{const rh=3.6,row=Math.floor((wy-y0)/rh),jit=hsh2(row,3,seed)*7,bw=5.5+hsh2(row,5,seed)*3,u=(wx-x0+jit)%bw,v=(wy-y0)%rh;if(v<.5||u<.5)t-=.3;else t+=(hsh2(Math.floor((wx-x0+jit)/bw),row,seed+9)-.5)*.24+(v<1?.14:0)-(v>rh-.8?.1:0);break}
      case 'plank':{const u=(wx-x0)%3.2;if(u<.45)t-=.3;else t+=(hsh2(px>>1,py>>3,seed+4)-.5)*.2;break}
      case 'marble':t=.62+(lx-.5)*.2+n*.06;if(hsh2(px>>2,(py+px)>>3,seed+6)>.965)t-=.22;break}
    return t}}
function roofShade(kind,x0,y0,w,h,seed){return(wx,wy,px,py)=>{const n=hsh2(px>>1,py>>1,seed)-.5,lx=(wx-x0)/w,ly=(wy-y0)/h;let t=.45+(lx-.5)*.3+n*.1;if(ly>.9)t-=.25;
  switch(kind){case 'thatch':t+=(hsh2(px>>1,py>>3,seed+2)-.5)*.5;if(((wy-y0)%4)<.6)t-=.2;break;
    case 'tile':{const rh=2.6,row=Math.floor((wy-y0)/rh),u=((wx-x0+(row%2)*1.6)%3.2)/3.2,v=((wy-y0)%rh)/rh;t=.25+(1-Math.abs(u-.5)*2)*.35+(1-v)*.25+(lx-.5)*.25;if(v>.85)t-=.25;break}
    case 'slate':{const rh=2.2,row=Math.floor((wy-y0)/rh),u=(wx-x0+(row%2)*2)%4,v=(wy-y0)%rh;t+=(v<.5?-.25:0)+(u<.4?-.2:0)+(hsh2(Math.floor((wx-x0+(row%2)*2)/4),row,seed)-.5)*.2;break}
    case 'snow':t=.55+(lx-.5)*.35+n*.08-ly*.15;break;
    case 'plank':{const u=(wy-y0)%2.4;if(u<.4)t-=.3;break}}
  return t}}
function bGable(P,xl,xr,yb,yt,kind,ramp,seed,snow){const xm=(xl+xr)/2,hw=(xr-xl)/2;P.area(xl,yt,xr,yb,(x,y)=>Math.abs(x-xm)<=(y-yt)/(yb-yt)*hw,roofShade(kind,xl,yt,xr-xl,yb-yt,seed),ramp);
  P.area(xl,yb-1.2,xr,yb,null,()=>.12,ramp);
  if(snow){const SN=['#9fb2c8','#c3d2e2','#e2ebf6','#ffffff'];P.area(xl-1,yt-1.5,xr+1,yb+1,(x,y)=>{const e=(y-yt)/(yb-yt)*hw-Math.abs(x-xm);return e>=-1.2&&e<2.6+hsh2(x*2|0,3,seed)*1.5||y>yb-.4&&y<yb+1&&x>xl&&x<xr},(x,y)=>.45+(x-xm)/hw*.3,SN);
    for(let x=xl+2;x<xr-1;x+=2.2+hsh2(x|0,1,seed)*2){const L=1+hsh2(x|0,2,seed)*3.5;P.area(x,yb+.6,x+.8,yb+.6+L,null,()=>.7,SN)}}}
function bDome(P,cx,yb,rx,ry,ramp,seed){P.area(cx-rx,yb-ry,cx+rx,yb,(x,y)=>((x-cx)/rx)**2+((y-yb)/ry)**2<=1,(x,y)=>{const nx=(x-cx)/rx,ny=(y-yb)/ry,nz=Math.sqrt(Math.max(0,1-nx*nx-ny*ny));let t=.08+Math.max(0,nx*.6-ny*.5+nz*.6)*.85;const g=((Math.asin(Math.max(-1,Math.min(1,nx)))/Math.PI+.5)*8)%1;if(Math.abs(g-.5)<.08)t-=.15;return t},ramp)}
function bCone(P,cx,yb,yt,hw,ramp,seed){P.area(cx-hw-1,yt,cx+hw+1,yb,(x,y)=>Math.abs(x-cx)<=(y-yt)/(yb-yt)*(hw+1),(x,y)=>{const f=(y-yt)/(yb-yt),u=(x-cx)/Math.max(.5,f*(hw+1));let t=.3+u*.4+(((y-yt)%2.4)<.5?-.15:0)+(hsh2(x*2|0,y*2|0,seed)-.5)*.1;if(f>.92)t-=.2;return t},ramp)}
function bCyl(P,x,y,w,h,kind,ramp,seed){const sh=matShade(kind,x,y,w,h,seed);P.area(x,y,x+w,y+h,null,(wx,wy,px,py)=>{const u=(wx-x)/w*2-1;return sh(wx,wy,px,py)+(-Math.abs(u)*.25+u*.18)-.05},ramp)}
function bCren(P,x,y,w,ramp,seed,hm){hm=hm||2.6;for(let k=x;k<x+w-1;k+=4.2){const kw=Math.min(2.6,x+w-k);P.area(k,y-hm,k+kw,y,null,matShade('stone',k,y-hm,kw,hm,seed),ramp)}}
function bWin(P,x,y,w,h,arch,frame,lava){const fr=toA(frame),gl=lava?[[255,120,30],[255,170,60],[255,214,120]]:[[22,30,44],[36,52,72],[70,100,130]];
  P.area(x-.8,y-.8-(arch?w/2:0),x+w+.8,y+h+.8,(X,Y)=>!arch||Y>=y||Math.hypot(X-x-w/2,Y-y)<=w/2+.8,()=>fr,[frame]);
  P.area(x,y-(arch?w/2:0),x+w,y+h,(X,Y)=>!arch||Y>=y||Math.hypot(X-x-w/2,Y-y)<=w/2,(X,Y)=>{const u=(X-x)/w;if(Math.abs(u-.5)<.07||Math.abs(Y-y-h*.45)<.35)return fr;return gl[Y<y+h*.3&&u>.55?2:u>.5?1:0]},[frame]);
  if(!lava){P.area(x-1.3,y+h+.8,x+w+1.3,y+h+1.9,null,(X)=>.72+(X-x)/w*.15,P.sill||['#555','#888','#aaa','#ccc']);P.dark(x-1.3,y+h+1.9,x+w+1.3,y+h+3.2,.6,1)}
  if(!arch&&!lava&&P.shut){for(const sx2 of [x-2.6,x+w+.8])P.area(sx2,y-.4,sx2+1.8,y+h+.6,null,(X,Y,px,py)=>.35+((py>>1)%3?0:-.2)+(X-sx2)*.12,P.shut)}
  if(P.flowers&&!arch&&!lava&&h<9){P.area(x-.6,y+h+1.9,x+w+.6,y+h+3.4,null,()=>.4,['#3a2414','#5a3a20','#7a5230']);for(let k=0;k<w*2;k++){const fx=x-.4+k*.55,fc=[[232,90,110],[250,210,90],[255,255,255],[190,140,240]][(k+(x|0))%4];P.area(fx,y+h+.7,fx+.6,y+h+1.9,null,(X,Y,px,py)=>((px+py)%3?fc:[70,120,50]),['#000'])}}
  P.win.push([x+w/2,y+h*.4,Math.max(w,h),lava?1:0])}
function bDoor(P,x,y,w,h,arch,wood){P.lan.push([x+w+2.4,y+(arch?-1:2)]);P.area(x-1.5,y+h-1,x+w+1.5,y+h,null,()=>.55,P.sill||['#555','#888','#aaa','#ccc']);P.area(x-.8,y-(arch?w/2:0)-.8,x+w+.8,y+h,(X,Y)=>!arch||Y>=y||Math.hypot(X-x-w/2,Y-y)<=w/2+.8,()=>[30,20,14],['#000']);
  P.area(x,y-(arch?w/2:0),x+w,y+h,(X,Y)=>!arch||Y>=y||Math.hypot(X-x-w/2,Y-y)<=w/2,matShade('plank',x,y,w,h,5),wood||['#2a1a10','#4a2e1a','#6a4426','#8a5c34'])}
function bFlag(P,x,y,col){P.area(x-.4,y,x+.5,y+14,null,()=>[40,28,20],['#000']);P.area(x-.9,y-1,x+1,y+.6,null,()=>toA(BPAL[P.b||0].gold),['#000']);P.flags.push([x+.5,y+.6,col])}
function bldSprite(b,kind,v){const key='bld'+b+kind+(v||0)+RS;if(HDC[key])return HDC[key];v=v||0;const B=BPAL[b],sd=b*31+v*7+kind.length;let P;
  const wallR=B.wall,wk=B.wallK,lava=!!B.lava,trim=b===4?'#7a5a9a':b===2?'#6a4220':'#2a1a10';
  if(kind==='cottage'){P=bPainter(50,46);bSet(P,b,kind,v);const yb=46;
    if(b===2){P.area(6,18,44,yb,null,matShade('mud',6,18,38,28,sd),wallR);bCren(P,6,18,38,wallR,sd,2.4);if(v%2)bDome(P,25,18,9,8,B.dome,sd);bDoor(P,21,34,8,12,1);bWin(P,10,27,5,6,1,trim);bWin(P,35,27,5,6,1,trim);
      P.area(18,30,32,31.4,null,(x)=>((x|0)%3?[200,70,50]:[240,220,190]),['#000'])}
    else{P.area(8,22,42,yb,null,matShade(wk==='timber'?'timber':wk,8,22,34,24,sd,{beam:B.beam}),wallR);
      bGable(P,3,47,24,b===3?0:4,b===0&&v%2?'tile':b===1?'plank':B.roofK==='slate'?'slate':B.roofK,b===0&&v%2?B.roof2:b===1?['#2a1a10','#4a2e1a','#6a4426','#8a5c34']:B.roof,sd,b===1);
      P.area(33,5,37.5,18,null,matShade('stone',33,5,4.5,13,sd),B.stone);P.smoke.push([35.2,4]);
      bDoor(P,22,34,7,12,b===4);bWin(P,12,29,6,6,b===4,trim,lava);bWin(P,32,29,6,6,b===4,trim,lava);if(b===4)bWin(P,22.5,13,5,5,1,trim)}}
  else if(kind==='house'){P=bPainter(66,64);bSet(P,b,kind,v);const yb=64;
    if(b===2){P.area(4,30,62,yb,null,matShade('mud',4,30,58,34,sd),wallR);bCren(P,4,30,58,wallR,sd,2.2);P.area(14,14,52,30,null,matShade('mud',14,14,38,16,sd+1),wallR);bDome(P,33,14,11,10,B.dome,sd);
      P.area(32.6,0,33.4,4.5,null,()=>toA(B.gold),['#000']);bDoor(P,28,48,10,16,1);for(const x of [9,19,44,54])bWin(P,x,40,5,7,1,trim);bWin(P,21,19,4,6,1,trim);bWin(P,41,19,4,6,1,trim);
      P.area(24,36,42,37.4,null,(x)=>((x|0)%3?[30,110,80]:[240,220,190]),['#000'])}
    else{if(b===0)P.area(7,50,59,yb,null,matShade('stone',7,50,52,14,sd),B.stone);P.area(7,26,59,b===0?50:yb,null,matShade(wk==='timber'?'timber':wk,7,26,52,24,sd,{beam:B.beam}),wallR);
      bGable(P,2,64,28,b===3?0:3,b===1?'plank':B.roofK==='slate'?'slate':b===0?'tile':B.roofK,b===1?['#2a1a10','#4a2e1a','#6a4426','#8a5c34']:b===0?B.roof2:B.roof,sd,b===1);
      P.area(46,4,51,20,null,matShade('stone',46,4,5,16,sd),B.stone);P.smoke.push([48.5,3]);
      bDoor(P,29,50,8,14,b===4);bWin(P,12,33,6,7,b===4,trim,lava);bWin(P,48,33,6,7,b===4,trim,lava);bWin(P,30,33,6,7,b===4,trim,lava);bWin(P,12,53,6,6,0,trim,lava);bWin(P,48,53,6,6,0,trim,lava);bWin(P,30,14,5,5,1,trim,lava)}}
  else if(kind==='keep'){P=bPainter(96,108);bSet(P,b,kind,v);const yb=108,S=B.stone,sk=b===4?'marble':'stone';
    P.area(26,34,70,yb,null,matShade(sk,26,34,44,74,sd),b===4?MARBLE:S);bCren(P,26,34,44,b===4?MARBLE:S,sd,3);
    for(const tx of [14,70]){bCyl(P,tx,24,12,yb-24,sk,b===4?MARBLE:S,sd+tx);if(b===2){bDome(P,tx+6,24,6.5,7,B.dome,sd)}else if(b===3){bCren(P,tx,24,12,S,sd,3)}else{bCone(P,tx+6,24,4,8.5,B.cone,sd);bFlag(P,tx+6,-10,B.banner)}
      bWin(P,tx+4.5,40,3,7,1,trim,lava);bWin(P,tx+4.5,62,3,7,1,trim,lava)}
    if(b===2){bDome(P,48,34,16,14,B.dome,sd);P.area(47.6,13,48.4,20,null,()=>toA(B.gold),['#000'])}else if(b===3){for(let k=0;k<3;k++)bCone(P,36+k*12,34,10,4,B.cone,sd)}else bFlag(P,48,20,B.banner);
    bDoor(P,40,86,16,22,1,['#1a100a','#2e1c10','#44281a','#5a3622']);for(let y=82;y<108;y+=3.2)P.area(40,y,56,y+.6,(X,Y)=>Y>86-8+Math.hypot(0,0),()=>[24,24,28],['#000']);
    for(const x of [33,46,59])bWin(P,x,46,4,8,1,trim,lava);for(const x of [33,59])bWin(P,x,66,4,8,1,trim,lava);
    P.area(42,38,54,48,null,(X,Y)=>lerpA(toA(B.banner),[0,0,0],(Y>46?.3:0)+((X*2|0)%4===0?.2:0)),['#000'])}
  else if(kind==='palace'){P=bPainter(184,140);bSet(P,b,kind,v);const yb=140,S=B.stone,sk=b===4||b===1?'marble':'stone',SR2=b===4?MARBLE:S;
    // main hall
    P.area(52,46,132,96,null,matShade(b===2?'mud':sk,52,46,80,50,sd),b===2?B.wall:SR2);
    if(b===2){bCren(P,52,46,80,B.wall,sd,3);bDome(P,92,46,24,24,B.dome,sd);P.area(91.5,14,92.5,22,null,()=>toA(B.gold),['#000']);P.area(89,12,95,14,(X,Y)=>Math.hypot(X-92,Y-12)<3&&Math.hypot(X-93.2,Y-11.4)>2.4,()=>toA(B.gold),['#000']);
      for(const mx of [16,160]){bCyl(P,mx,8,8,yb-8,'mud',B.wall,sd+mx);for(const ry of [30,60])P.area(mx-2,ry,mx+10,ry+2.5,null,matShade('mud',mx-2,ry,12,2.5,sd),B.stone);bDome(P,mx+4,8,5,6,B.cone,sd);P.area(mx+3.6,-1,mx+4.4,3,null,()=>toA(B.gold),['#000']);bWin(P,mx+2.5,40,3,6,1,trim);bWin(P,mx+2.5,72,3,6,1,trim)}}
    else if(b===3){bCren(P,52,46,80,S,sd,3);for(let k=0;k<5;k++)bCone(P,62+k*15,46,18-((k%2)*8),5,B.cone,sd)}
    else{bGable(P,48,136,48,22,b===0?'slate':b===1?'snow':'tile',b===0?B.cone:b===1?B.roof:B.roof2,sd,b===1);bFlag(P,92,8,B.banner)}
    for(const x of [60,74,104,118])bWin(P,x,62,6,10,1,trim,lava);bWin(P,88,58,8,12,1,trim,lava);
    // towers
    if(b!==2)for(const tx of [20,146]){bCyl(P,tx,30,18,yb-30,sk,SR2,sd+tx);if(b===3){bCone(P,tx+9,30,0,10,B.cone,sd)}else{bCone(P,tx+9,30,6,11.5,B.cone,sd);bFlag(P,tx+9,-8,B.banner)}
      for(const y of [44,70,96])bWin(P,tx+7,y,4,7,1,trim,lava)}
    // curtain wall & gate
    P.area(10,98,174,yb,null,matShade(b===2?'mud':sk,10,98,164,42,sd+3),b===2?B.wall:SR2);bCren(P,10,98,164,b===2?B.wall:SR2,sd,3);
    bDoor(P,80,114,24,26,1,['#1a100a','#2e1c10','#44281a','#5a3622']);
    for(const x of [30,52,130,152])P.area(x,104,x+9,124,null,(X,Y)=>lerpA(toA(B.banner),[0,0,0],(Y>121?.35:0)+((X*2|0)%4===0?.18:0)),['#000']);
    for(const x of [30,52,130,152])P.area(x+3,104,x+6,110,(X,Y)=>Math.hypot(X-x-4.5,Y-107)<1.6,()=>toA(B.gold),['#000'])}
  else if(kind==='temple'){P=bPainter(116,76);bSet(P,b,kind,v);const yb=76,M=b===3?['#3a3436','#544c4c','#6e6464','#8c8280','#aaa09c']:MARBLE;
    for(let k=0;k<3;k++)P.area(4+k*3,yb-4-k*3,112-k*3,yb-k*3,null,matShade('marble',4+k*3,yb-4-k*3,108-k*6,4,sd+k),M);
    P.area(16,22,100,27,null,matShade('marble',16,22,84,5,sd),M);P.area(14,19,102,22,null,()=>.85,M);
    for(let k=0;k<6;k++){const x=20+k*14.4;bCyl(P,x,27,6.4,yb-9-27,'marble',M,sd+k);for(let f=1;f<6;f++)P.area(x+f*1.07,28,x+f*1.07+.35,yb-10,null,()=>.2,M);P.area(x-1.2,27,x+7.6,29,null,()=>.75,M);P.area(x-1.2,yb-11,x+7.6,yb-9,null,()=>.6,M)}
    P.area(12,3,104,19,(X,Y)=>Math.abs(X-58)<=(Y-3)/16*46,(X,Y)=>{const e=(Y-3)/16*46-Math.abs(X-58);return e<1.6?.88:Y>16?.3:.55+(hsh2(X*2|0,Y*2|0,sd)-.5)*.1},M);
    P.area(48,9,68,16,(X,Y)=>Math.abs(X-58)<=(Y-3)/16*46-3,()=>toA(b===3?'#ff6a1a':b===2?'#c8902a':'#c9a24a'),['#000']);
    for(const bx of [8,104]){P.area(bx,yb-22,bx+4,yb-12,null,matShade('marble',bx,yb-22,4,10,sd),M);P.win.push([bx+2,yb-24,8,1])}
    P.fire=[[10,yb-24],[106,yb-24]]}
  if(kind==='cottage'){P.dark(6,b===2?18:24,44,b===2?21:28,.55,1);if(b===0||b===4)P.ivy(8,30,16,46,sd,b===0?['#1e3a1c','#2e5426','#46742e','#68983a']:['#8a4a7a','#b06a9a','#d890c0'])}
  if(kind==='house'){P.dark(5,b===2?30:28,61,b===2?33:32,.55,1);if(b===0)P.ivy(48,40,59,64,sd,['#1e3a1c','#2e5426','#46742e','#68983a'])}
  if(kind==='keep'){for(let x=26;x<70;x+=3.2)P.dark(x,34,x+1.6,36.4,.45,.75);P.torch.push([36,84],[60,84]);if(b===0)P.ivy(26,70,40,108,sd,['#1e3a1c','#2e5426','#46742e','#68983a'])}
  if(kind==='palace'){for(let x=10;x<174;x+=3.2)P.dark(x,98,x+1.6,100.6,.45,.75);P.torch.push([74,112],[110,112],[40,100],[144,100]);if(b===0)P.ivy(10,116,30,140,sd,['#1e3a1c','#2e5426','#46742e','#68983a'])}
  if(kind==='temple')P.ivy(12,50,30,70,sd,['#2e4a26','#46682c','#62883a']);
  P.dark(0,P.H-4,P.W,P.H,1,.62);
  P.done();if(kind==='palace'&&b===2){const pl=hdPlant(2,0,1);P.c.drawImage(pl,0,(140-80)*RS,48*RS,80*RS);P.c.drawImage(pl,136*RS,(140-80)*RS,48*RS,80*RS)}
  return HDC[key]={cv:P.cv,W:P.W,H:P.H,win:P.win,smoke:P.smoke,fire:P.fire,flags:P.flags,lan:P.lan,torch:P.torch,yard:P.yard,b}}
let NFNOW=0,LITS=[];
function yardSprite(k,b){const key='yd'+k+b+RS;if(HDC[key])return HDC[key];const W=k==='barrel'?8:10,H=k==='barrel'?10:8,P=bPainter(W,H);bSet(P,b,'yard',0);const wood=['#3a2414','#5a3a20','#7a5230','#9a6c40','#b88a56'];
  if(k==='barrel'){P.area(0,0,W,H,(X,Y)=>Math.abs(X-W/2)<=W/2-(Math.abs(Y-H/2)/(H/2))**2*1.2,(X,Y,px,py)=>{const u=(X-W/2)/(W/2);let t=.5+u*.35-u*u*.3+((px>>1)%3?0:-.15);if(Math.abs(Y-2)<.6||Math.abs(Y-H+2)<.6)return[70,72,80];return t},wood)}
  else{P.area(0,0,W,H,null,(X,Y,px,py)=>{let t=.55+(X/W-.5)*.3+((py>>1)%4?0:-.2);if(X<1||X>W-1||Y<1||Y>H-1||Math.abs((X-1)-(Y-1)*(W-2)/(H-2))<.7)t-=.3;return t},wood)}
  P.dark(0,H-1.5,W,H,1,.6);P.done();return HDC[key]={cv:P.cv,W,H}}
function drawBld(c,sp,sx,t,yb){yb=yb===undefined?GY:yb;const x0=sx-sp.W/2,y0=yb-sp.H+1;
  c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(sx,yb,sp.W*.52,2.4,0,0,7);c.fill();
  for(const[dx,k] of (sp.yard||[])){const y2=yardSprite(k,sp.b||0);c.drawImage(y2.cv,sx+dx-y2.W/2,yb-y2.H+1,y2.W,y2.H)}
  c.drawImage(sp.cv,x0,y0,sp.W,sp.H);
  for(const[x,y,col] of (sp.flags||[])){const X=x0+x,Y=y0+y,C=toA(col),N=10;const WF=WINDF(t),wv=u=>(Math.sin(t/(190-WF*60)-u*4.2+x)*1.1+Math.sin(t/(83-WF*20)-u*7+x*1.7)*.45)*u*(.6+WF*1.2);c.fillStyle=`rgb(${C.join(',')})`;c.beginPath();c.moveTo(X,Y);for(let k=1;k<=N;k++){const u=k/N;c.lineTo(X+u*11,Y+wv(u))}for(let k=N;k>=0;k--){const u=k/N;c.lineTo(X+u*11,Y+6.4-u*1.4+wv(u))}c.closePath();c.fill();
    c.fillStyle='rgba(0,0,0,.28)';c.beginPath();for(let k=0;k<=N;k++){const u=k/N;c.lineTo(X+u*11,Y+4.4-u*1+wv(u))}for(let k=N;k>=0;k--){const u=k/N;c.lineTo(X+u*11,Y+6.4-u*1.4+wv(u))}c.fill();c.fillStyle='rgba(255,255,255,.22)';c.beginPath();for(let k=0;k<=N;k++){const u=k/N;c.lineTo(X+u*11,Y+wv(u))}for(let k=N;k>=0;k--){const u=k/N;c.lineTo(X+u*11,Y+1.2+wv(u))}c.fill()}
  for(const[x,y] of (sp.lan||[])){const X=x0+x,Y=y0+y,on=NFNOW>.12;c.fillStyle='#1a1410';c.fillRect(X-1.3,Y-.6,2.6,.6);c.fillRect(X-.3,Y-1.6,.6,1);c.fillStyle=on?'#ffd27a':'#5a4a3a';c.fillRect(X-1,Y,2,2.6);c.fillStyle='#1a1410';c.fillRect(X-1.3,Y+2.6,2.6,.5);if(on){c.globalCompositeOperation='lighter';const g=c.createRadialGradient(X,Y+1.3,0,X,Y+1.3,9);g.addColorStop(0,`rgba(255,190,90,${.5*Math.min(1,NFNOW*1.5)})`);g.addColorStop(1,'rgba(255,190,90,0)');c.fillStyle=g;c.fillRect(X-9,Y-8,18,18);c.globalCompositeOperation='source-over';LITS.push([X,Y+1,16,1])}}
  for(const[x,y] of (sp.torch||[])){const X=x0+x,Y=y0+y,f=Math.sin(t/60+x)*.7;c.fillStyle='#2a1a10';c.fillRect(X-.5,Y,1,4);c.globalCompositeOperation='lighter';const g=c.createRadialGradient(X,Y-1,0,X,Y-1,10);g.addColorStop(0,'rgba(255,170,60,.45)');g.addColorStop(1,'rgba(255,120,30,0)');c.fillStyle=g;c.fillRect(X-10,Y-11,20,20);c.globalCompositeOperation='source-over';
    c.fillStyle='#ff7a1a';c.beginPath();c.moveTo(X-1.6,Y+.4);c.quadraticCurveTo(X+f,Y-5.5,X+1.6,Y+.4);c.fill();c.fillStyle='#ffe08a';c.beginPath();c.moveTo(X-.8,Y+.4);c.quadraticCurveTo(X+f*.5,Y-2.6,X+.8,Y+.4);c.fill();if(NFNOW>.1)LITS.push([X,Y-1,22,1])}
  for(const[x,y] of sp.smoke){for(let k=0;k<5;k++){const a=((t/1700+k/5+x*.01)%1),sx2=x0+x+a*9+Math.sin(a*5+k)*1.5,sy=y0+y-a*28,r=1.2+a*4.5;c.fillStyle=`rgba(${NFNOW>.5?'90,96,120':'200,200,205'},${(1-a)*.32})`;c.beginPath();c.arc(sx2,sy,r,0,7);c.fill()}}
  if(sp.fire)for(const[x,y] of sp.fire){const f=Math.sin(t/70+x)*.8;c.globalCompositeOperation='lighter';const g=c.createRadialGradient(x0+x,y0+y,0,x0+x,y0+y,9);g.addColorStop(0,'rgba(255,170,60,.55)');g.addColorStop(1,'rgba(255,120,30,0)');c.fillStyle=g;c.fillRect(x0+x-9,y0+y-9,18,18);c.globalCompositeOperation='source-over';
    c.fillStyle='#ff7a1a';c.beginPath();c.moveTo(x0+x-2.4,y0+y+2);c.quadraticCurveTo(x0+x+f,y0+y-6,x0+x+2.4,y0+y+2);c.fill();c.fillStyle='#ffd060';c.beginPath();c.moveTo(x0+x-1.2,y0+y+2);c.quadraticCurveTo(x0+x+f*.6,y0+y-3,x0+x+1.2,y0+y+2);c.fill();LITS.push([x0+x,y0+y,30,1])}
  for(const[x,y,s,lv] of sp.win){const on=lv||NFNOW>.15;if(!on)continue;const a=lv?1:Math.min(1,(NFNOW-.15)*2);c.globalCompositeOperation='lighter';c.fillStyle=`rgba(255,180,80,${.55*a})`;c.fillRect(x0+x-s*.35,y0+y-s*.45,s*.7,s*.9);c.globalCompositeOperation='source-over';if(NFNOW>.15)LITS.push([x0+x,y0+y,s*3+6,a])}}
function townBld(c,L,sx,t){const b=G.b;if(L>=1&&!(S.opt&&S.opt.oldcastle)){try{drawBld(c,ktcCastle(b,Math.min(4,L)),sx,t);return}catch(e){console.error(e)}}if(L>=4){drawBld(c,bldSprite(b,'palace',0),sx,t);return}
  if(L>=3)drawBld(c,bldSprite(b,'keep',0),sx+4,t);if(L>=2)drawBld(c,bldSprite(b,'house',1),sx+(L>=3?72:34),t);if(L>=1)drawBld(c,bldSprite(b,'cottage',0),sx-(L>=3?64:30),t)}

/* ================= LIVE HOME / TITLE SCENE ================= */
const SCN={};
function sceneRender(cv,t,o){const cw=cv.clientWidth||cv.width/2,ch=cv.clientHeight||cv.height/2,VH2=o.vh||200,VW2=Math.max(220,Math.min(900,Math.round(VH2*cw/Math.max(1,ch)))),GY2=Math.round(VH2*(o.gy||.7)),b=o.b||0;
  const key=b+'_'+VW2+'_'+VH2+'_'+(o.title?1:0);let Sc=SCN[key];
  if(!Sc){const si=Math.max(0,STAGES.findIndex(s=>s.b===b));const isl=makeIsland(si);const sites=isl.sites.filter(s=>s.k==='town'||s.k==='bow'||s.k==='hammer');sites.forEach(s=>{if(s.k==='town')s.lvl=o.title?4:3;if(s.k!=='town')s.stock=2});
    const props=isl.props.filter(r=>r.k==='tree'&&Math.abs(r.x)>150&&Math.abs(r.x)<900||r.k==='camp'&&Math.abs(r.x)<400||DECOR.has(r.k)&&r.k!=='river'&&r.k!=='peak'&&Math.abs(r.x)<900);
    props.push({k:'house',kind:'cottage',x:-210,v:1},{k:'house',kind:'house',x:205,v:0},{k:'house',kind:'cottage',x:300,v:0},{k:'house',kind:'temple',x:-380,v:0},{k:'peak',x:-120,v:2},{k:'grass',x:-150,s:1,v:3},{k:'grass',x:150,s:1.1,v:5},{k:'river',x:-290,w:60,st:(b===1||b===3)?'wood':'stone'});
    const people=[];[['villager',-110],['archer',-60],['builder',90],['villager',140],['archer',250],['farmer',-170]].forEach(([r,x],i)=>{const p=mkP(r,x);p.home=x;p.hij=i%2===0;people.push(p)});
    Sc=SCN[key]={KBUF:mkc(VW2*RS,VH2*RS),G:{I:isl.I,si,b,sites,props,people,zones:[{x0:-3000,x1:3000,t:'town'}],greed:[],coins:[],arrows:[],fx:[],parts:[],pk:new Set(),proj:[],pfx:[],corpses:[],atk:null,hx:0,vx:0,walk:0,face:1,idle:0,inv:0,stam:100,hp:10,maxhp:10,cam:0,tod:4,t:0,day:1,stats:{lost:0},noPay:1}}}
  if(cv.width!==VW2*RS||cv.height!==VH2*RS){cv.width=VW2*RS;cv.height=VH2*RS}
  const sv=[VW,VH,GY,KBUF,KB,G];VW=VW2;VH=VH2;GY=GY2;KBUF=Sc.KBUF;KB=KBUF.getContext('2d');try{pixSpriteHook()}catch(e){}KB.setTransform(RS,0,0,RS,0,0);KB.imageSmoothingEnabled=false;G=Sc.G;LCV=null;TMPC=null;
  try{const g=G,cyc=(t%16000)/16000;let x,vx,face;if(cyc<.3){x=-150+cyc/.3*300;vx=1.1;face=1}else if(cyc<.5){x=150;vx=0;face=1}else if(cyc<.8){x=150-(cyc-.5)/.3*300;vx=-1.1;face=-1}else{x=-150;vx=0;face=-1}
    g.walk+=Math.abs(x-g.hx);g.hx=x;g.vx=vx;g.face=face;g.idle=vx?0:(g.idle||0)+2;g.t=t;g.cam=o.cam!==undefined?o.cam:x*.35+(o.title?-30:20);
    g.tod=o.mode==='night'?CYCLE.day+CYCLE.dusk+30:o.mode==='dusk'?CYCLE.day+CYCLE.dusk*.55:20;
    g.people.forEach((p,i)=>{const nx=p.home+Math.sin(t/2600+i*1.7)*26;p.moving=Math.abs(nx-p.x)>.05;p.dir=Math.sign(nx-p.x)||p.dir;p.x=nx;p.t=t/16});
    const c=cv.getContext('2d');c.setTransform(RS,0,0,RS,0,0);c.imageSmoothingEnabled=false;renderK(c,g,true);pixCanvas(cv,VW2,VH2)}catch(e){console.error(e)}
  [VW,VH,GY,KBUF,KB,G]=sv;LCV=null;TMPC=null}
function pixCanvas(cv,lw,lh){try{if(!PIX())return;const t=mkc(lw,lh),x=t.getContext('2d');x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.drawImage(cv,0,0,lw,lh);const c=cv.getContext('2d');c.save();c.setTransform(1,0,0,1,0,0);c.imageSmoothingEnabled=false;c.filter='contrast(1.12) saturate(1.14)';c.clearRect(0,0,cv.width,cv.height);c.drawImage(t,0,0,cv.width,cv.height);c.restore()}catch(e){}}
function riderPortrait(cv,s){const ms=monarchSprite(0,'idle'),W=ms.W,H=ms.H;s=(s||2)*RS;cv.width=W*s;cv.height=H*s;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;c.setTransform(s,0,0,s,0,0);try{c.drawImage(pxArt(ms.cv,0,0,ms.cv.width,ms.cv.height,Math.round(W*.62),Math.round(H*.62)),0,0,W,H)}catch(e){c.drawImage(ms.cv,0,0,W,H)}
  const Gs=G;if(!G)G={atk:null};try{const W2=heroW(),ang=W2.t==='spear'?-.32:W2.t==='bow'?0:W2.ranged?-1.25:-1.05;if(ms.hand)drawWeapon(c,W2,ms.hand[0],ms.hand[1],ang,1,0,0,2000)}catch(e){}G=Gs}

/* ================= VOLUMETRIC SPRITE SHADING ================= */
function autoVolume(g,W,H,o){o=o||{};const im=g.getImageData(0,0,W,H),d=im.data,N=W*H,M=new Uint8Array(N),RG=new Int32Array(N);
  for(let i=0;i<N;i++){if(d[i*4+3]>110){M[i]=1;RG[i]=((d[i*4]>>5)<<6)|((d[i*4+1]>>5)<<3)|(d[i*4+2]>>5)}else RG[i]=-1}
  const dt=(same)=>{const D=new Float32Array(N);for(let i=0;i<N;i++)D[i]=M[i]?1e4:0;
    for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=y*W+x;if(!M[i])continue;let v=D[i];const chk=(j,c)=>{if(j<0||!M[j]||!same(i,j)){v=Math.min(v,c*.5)}else v=Math.min(v,D[j]+c)};
      if(x>0)chk(i-1,1);else v=Math.min(v,.5);if(y>0)chk(i-W,1);else v=Math.min(v,.5);if(x>0&&y>0)chk(i-W-1,1.4);if(x<W-1&&y>0)chk(i-W+1,1.4);D[i]=v}
    for(let y=H-1;y>=0;y--)for(let x=W-1;x>=0;x--){const i=y*W+x;if(!M[i])continue;let v=D[i];const chk=(j,c)=>{if(j>=N||!M[j]||!same(i,j)){v=Math.min(v,c*.5)}else v=Math.min(v,D[j]+c)};
      if(x<W-1)chk(i+1,1);else v=Math.min(v,.5);if(y<H-1)chk(i+W,1);else v=Math.min(v,.5);if(x<W-1&&y<H-1)chk(i+W+1,1.4);if(x>0&&y<H-1)chk(i+W-1,1.4);D[i]=v}return D};
  const Dg=dt(()=>true),Dr=dt((i,j)=>RG[i]===RG[j]),Rm=o.rm||Math.max(3,Math.min(W,H)*.14),Rr=Rm*.6;
  const Hh=new Float32Array(N);for(let i=0;i<N;i++)if(M[i]){const a=Math.min(1,Dg[i]/Rm),b=Math.min(1,Dr[i]/Rr);Hh[i]=Math.sqrt(1-(1-a)*(1-a))*.6+Math.sqrt(1-(1-b)*(1-b))*.4}
  const Lx=.55,Ly=-.62,Lz=.56,k=o.k||2.2,rim=o.rim?toA(o.rim):null;
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=y*W+x;if(!M[i])continue;const hl=x>0&&M[i-1]?Hh[i-1]:0,hr=x<W-1&&M[i+1]?Hh[i+1]:0,hu=y>0&&M[i-W]?Hh[i-W]:0,hd=y<H-1&&M[i+W]?Hh[i+W]:0;
    let nx=-(hr-hl)*k,ny=-(hd-hu)*k,nz=1;const m=Math.hypot(nx,ny,nz);nx/=m;ny/=m;nz/=m;const lam=Math.max(0,nx*Lx+ny*Ly+nz*Lz);
    let br=(o.amb||.52)+lam*(o.dif||.72);br+=(hsh2(x>>1,y>>1,5)-.5)*.05;const sp=Math.pow(lam,8)*(o.spec||40);const p=i*4;
    let r=d[p]*br+sp,gg=d[p+1]*br+sp,bb=d[p+2]*br+sp;if(rim&&Dg[i]<2.2&&nx<-.2){const f=(-nx)*.7;r+=rim[0]*f;gg+=rim[1]*f;bb+=rim[2]*f}
    const q=o.q||10;r=Math.round(r/q+dth(x,y)-.5)*q;gg=Math.round(gg/q+dth(x,y)-.5)*q;bb=Math.round(bb/q+dth(x,y)-.5)*q;d[p]=Math.max(0,Math.min(255,r));d[p+1]=Math.max(0,Math.min(255,gg));d[p+2]=Math.max(0,Math.min(255,bb))}
  g.putImageData(im,0,0)}

/* ================= DETAILED VILLAGERS ================= */
function subjSprite(role,fr,hij,v){const key='sub2|'+role+'|'+fr+'|'+hij+'|'+v;if(SPR[key])return SPR[key];
  const P={thief:{c:'#2c2834',p:'#1c1a22',h:'#16141c'},vagrant:{c:'#6a5e50',p:'#4a4036',h:'#3a2a1e'},villager:{c:['#b88a5a','#7e9a6a','#9a7a9a'][v%3],p:'#5a4a3a',h:'#4a2a18'},archer:{c:'#3f6a3a',p:'#4a3a24',h:'#2f5a30'},builder:{c:'#8a5a2a',p:'#3a2a1a',h:'#c9921f'},farmer:{c:'#a88a4a',p:'#5a4a2a',h:'#e0c070'},knight:{c:'#7b8496',p:'#4a5060',h:'#a8b2c4'}}[role];
  const S=SR,W=18,H=28,cv=mkc(W*S,H*S),c=cv.getContext('2d');c.lineCap='round';c.lineJoin='round';
  const walk=fr>0,HG=humanGait(fr,0,9.2,26.6),ph=HG.ph,a=HG.arm,hy=HG.bob,skin=v%2?'#c08e64':'#eebb8c';
  const CL=rampOf(P.c),PN=rampOf(P.p),SK=rampOf(skin),HD=rampOf(P.h),BT=rampOf('#2e1e14'),SC=rampOf(role==='thief'?'#1e1a24':['#7a3a5a','#3a5a7a','#5a4a6a','#2e5a4a'][v%4]);
  const A=[],add=(x,y,r,z,R)=>A.push({x:x*S,y:y*S,r:r*S,z:z*S,ramp:R,fr:0});
  const chain=(pts,r0,r1,z,R)=>{for(let i=1;i<pts.length;i++){const p=pts[i-1],q=pts[i],n=Math.max(2,Math.ceil(Math.hypot(q[0]-p[0],q[1]-p[1])/.5));for(let k=0;k<=n;k++){const u=k/n;add(p[0]+(q[0]-p[0])*u,p[1]+(q[1]-p[1])*u,r0+(r1-r0)*((i-1+u)/(pts.length-1)),z,R)}}};
  const leg=(sw,z,R)=>{const L=sw>=0?HG.R:HG.L,hip=[9,17.2+hy],[knee,ft]=humanLegIK(hip,[L[0],L[1]],4.8,4.8),toe=L[2]>.3?.5:0;chain([hip,knee],1.35,1.15,z,R);chain([knee,ft],1.15,1,z,R);add(ft[0]+.8,ft[1]+.2-toe,1.05,z+.2,BT);add(ft[0]+1.6,ft[1]+.3-toe*1.4,.8,z+.2,BT)};
  leg(-1,0,PN.map(q=>q.map(v2=>v2*.78)));
  if(role==='archer')chain([[6.2,9+hy],[5.4,17+hy]],1.3,1.1,.5,rampOf('#6e4a2a'));
  const armB=[[8,10.2+hy],[7.6-a*2.6,14.2+hy],[8.2-a*4,17.4+hy]];chain(armB,1.05,.9,.6,CL.map(q=>q.map(v2=>v2*.8)));
  chain([[9,17.6+hy],[9.2,13.6+hy],[9.4,10+hy]],2.6,2.4,2,CL);add(9.4,15.8+hy,2.7,2.2,CL);if(role==='vagrant')add(8.6,19+hy,2.4,2,CL);
  leg(1,3,PN);
  add(9.6,8.6+hy,1.05,3,SK);add(10,5.4+hy,2.75,3.4,SK);
  if(hij&&role!=='knight'){add(9.7,5+hy,3.25,3.2,SC);chain([[8.4,7.6+hy],[8.6,10.4+hy]],2.2,2.4,3.1,SC);add(10.9,5.6+hy,1.85,4.2,SK)}
  else switch(role){case 'archer':add(9.4,3.2+hy,2.6,3.6,HD);chain([[7,3.6+hy],[10,1.2+hy],[13,2.4+hy]],1.2,.6,3.8,HD);break;
    case 'builder':add(9.6,3.2+hy,2.9,3.7,HD);chain([[6.8,4.2+hy],[12.8,4.2+hy]],.8,.8,3.8,HD);break;case 'farmer':chain([[4.8,3.6+hy],[14.6,3.6+hy]],.7,.7,3.8,HD);add(9.8,2.7+hy,2.2,3.9,HD);break;
    case 'knight':add(10,5+hy,3.1,3.6,HD);chain([[7.2,3.4+hy],[12.6,3.4+hy]],.9,.9,3.8,HD);break;default:add(9.4,3.6+hy,2.5,3.5,HD);add(8,5,1.6,3.4,HD)}
  const armF=[[10.2,10.4+hy],[10.6+a*2.6,14.2+hy],[10.8+a*4,17.2+hy]];
  if(role==='archer'||role==='builder'||role==='farmer'||role==='knight'){armF[1]=[11.6,13.6+hy];armF[2]=[13.4,14.8+hy]}
  chain(armF,1.05,.9,4.4,CL);add(armF[2][0]+.3,armF[2][1]+.2,.95,4.6,SK);
  blobs(c,W*S,H*S,A,shadeR);
  const hx=armF[2][0]*S,hy2=armF[2][1]*S;c.lineWidth=.9*S;
  switch(role){case 'archer':c.strokeStyle='#8a5a2a';c.beginPath();c.moveTo(14*S,(3.5+hy)*S);c.quadraticCurveTo(17.4*S,(11+hy)*S,14*S,(18.5+hy)*S);c.stroke();c.strokeStyle='rgba(235,228,205,.9)';c.lineWidth=.3*S;c.beginPath();c.moveTo(14*S,(3.5+hy)*S);c.lineTo(14*S,(18.5+hy)*S);c.stroke();break;
    case 'builder':c.strokeStyle='#6e4a2a';c.beginPath();c.moveTo(hx,hy2);c.lineTo(hx+1.6*S,hy2-5*S);c.stroke();c.fillStyle='#9aa2b0';c.fillRect(hx+.4*S,hy2-6.4*S,2.8*S,1.6*S);c.fillStyle='#c8ced8';c.fillRect(hx+.4*S,hy2-6.4*S,2.8*S,.5*S);break;
    case 'farmer':c.strokeStyle='#6e4a2a';c.beginPath();c.moveTo(hx+.6*S,1*S);c.lineTo(hx-.2*S,26*S);c.stroke();c.strokeStyle='#c8ced8';c.lineWidth=.8*S;c.beginPath();c.moveTo(hx+.6*S,1*S);c.quadraticCurveTo(hx-3*S,0,hx-5*S,2.4*S);c.stroke();break;
    case 'knight':{c.fillStyle='#8a5a2a';c.beginPath();c.ellipse(hx+.6*S,hy2-.4*S,2.2*S,3.6*S,0,0,7);c.fill();c.fillStyle='#e0b84a';c.beginPath();c.ellipse(hx+.6*S,hy2-.4*S,1*S,1.8*S,0,0,7);c.fill();c.strokeStyle='#d3d9e3';c.lineWidth=.8*S;c.beginPath();c.moveTo(hx+1*S,hy2-3*S);c.lineTo(hx+3.6*S,hy2-10*S);c.stroke();break}}
  c.fillStyle='#120a08';c.fillRect(11.6*S,(4.9+hy)*S,.7*S,.8*S);
  return SPR[key]={cv,W,H}}
function heroCanvas(cv,look,scale){if(cv.dataset.old){heroCanvasOld(cv,look,scale);return}const sv=S.look;S.look=Object.assign({},sv,look);try{riderPortrait(cv,2)}catch(e){heroCanvasOld(cv,look,scale)}finally{S.look=sv}}

/* ================= SKY LIGHTNING ================= */
function thunder(big){if(!AC||S.muted)return;try{const t0=AC.currentTime;if(noiseBuf){const src=AC.createBufferSource();src.buffer=noiseBuf;src.loop=true;const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.setValueAtTime(1800,t0);lp.frequency.exponentialRampToValueAtTime(90,t0+1.3);const g=AC.createGain();g.gain.setValueAtTime(big?.55:.38,t0);g.gain.exponentialRampToValueAtTime(.001,t0+(big?1.6:1.1));src.connect(lp);lp.connect(g);g.connect(sfxBus);src.start(t0);src.stop(t0+1.7)}
  const o=tone(2400,t0,.06,'square',.05);o.frequency.exponentialRampToValueAtTime(300,t0+.06)}catch(e){}}
function boltPath(x0,y0,x1,y1,seed,rough){const r=rng(seed),pts=[[x0,y0]],n=Math.max(6,Math.round(Math.abs(y1-y0)/9));let x=x0;for(let i=1;i<n;i++){const u=i/n;x+=((x1-x0)/n)+(r()-.5)*rough;pts.push([x+(x1-x)*u*u*.6,y0+(y1-y0)*u])}pts.push([x1,y1]);return pts}
function skyBolt(x,y,el,o){o=o||{};const big=!!o.big;P({t:'skybolt',x,y:y||GY-6,life:big?20:16,col:el||'lightning',seed:(Math.random()*1e6)|0,w:big?1.6:1.15,dx:(Math.random()-.5)*40});
  P({t:'glow',x,y:GY-4,life:22,col:'#d8f0ff',s:big?46:34});P({t:'ring',x,y:GY-1,life:18,col:'#d8f0ff',s:big?60:42,flat:1});
  for(let k=0;k<(big?26:16);k++){const a=-Math.PI*Math.random(),sp=1.4+Math.random()*3.2;P({t:'spark',x,y:GY-3,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,g:.12,drag:.97,life:14+Math.random()*16,col:Math.random()<.5?'#ffffff':'#9fe0ff'})}
  P({t:'scorch',x,y:GY,life:220,s:big?14:10});G.skyFlash=Math.max(G.skyFlash||0,big?1:.75);G.flash=Math.max(G.flash||0,big?5:3);G.shake=Math.max(G.shake||0,big?9:6);thunder(big)}
function drawSkyBolt(B,q,sx,u){const C=ELC[q.col]||ELC.lightning,ph=Math.floor((q.max-q.life)/3),vis=(q.max-q.life)<3||((q.max-q.life)%4)!==1;if(!vis)return;
  const top=-12,x0=sx+q.dx,main=boltPath(x0,top,sx,q.y,q.seed+ph*7,9),Wd=q.w*(.5+u*.7);
  const stroke=(pts,w,col,X)=>{B.strokeStyle=col;B.lineWidth=w;B.lineJoin='round';B.beginPath();pts.forEach(([x,y],i)=>i?B.lineTo(x,y):B.moveTo(x,y));B.stroke()};
  const br=[];const r=rng(q.seed+ph*13);for(let k=0;k<4;k++){const i=2+Math.floor(r()*(main.length-4)),[bx,by]=main[i],len=12+r()*26,dir=r()<.5?-1:1;br.push(boltPath(bx,by,bx+dir*len*(.6+r()*.6),by+len*(.5+r()*.6),q.seed+k*31+ph,6))}
  const g=B.createLinearGradient(0,0,0,q.y);g.addColorStop(0,`rgba(${toA(C[3]).join(',')},.05)`);g.addColorStop(1,`rgba(${toA(C[2]).join(',')},${.35*u})`);B.fillStyle=g;B.fillRect(sx-22,0,44,q.y);
  stroke(main,7*Wd,`rgba(${toA(C[3]).join(',')},${.28*u})`);br.forEach(b=>stroke(b,3*Wd,`rgba(${toA(C[3]).join(',')},${.25*u})`));
  stroke(main,3.2*Wd,`rgba(${toA(C[2]).join(',')},${.8*u})`);br.forEach(b=>stroke(b,1.3*Wd,`rgba(${toA(C[2]).join(',')},${.7*u})`));
  stroke(main,1.2*Wd,'#ffffff');br.forEach(b=>stroke(b,.55*Wd,'rgba(255,255,255,.9)'));
  const gg=B.createRadialGradient(sx,q.y,0,sx,q.y,26);gg.addColorStop(0,`rgba(255,255,255,${.9*u})`);gg.addColorStop(.4,`rgba(${toA(C[2]).join(',')},${.5*u})`);gg.addColorStop(1,'rgba(0,0,0,0)');B.fillStyle=gg;B.fillRect(sx-26,q.y-26,52,52)}

/* ================= LIVING SCENERY ================= */
function drawBirds(B,t,W,GYv,b){const n=7,base=((t*.018)%(W+260))-130,y0=GYv*.2+Math.sin(t/4000)*6;B.strokeStyle=b===3?'rgba(40,20,20,.7)':'rgba(30,34,44,.65)';B.lineWidth=.7;
  for(let i=0;i<n;i++){const off=Math.abs(i-3),x=base-off*7+i*1.5,y=y0+off*3.2+Math.sin(t/900+i)*1.2,f=Math.sin(t/110+i*1.7)*1.6;B.beginPath();B.moveTo(x-2.6,y-f);B.quadraticCurveTo(x-1.2,y-.6,x,y+.4);B.quadraticCurveTo(x+1.2,y-.6,x+2.6,y-f);B.stroke()}}
function drawShore(B,toS,cam,W,t,b,rivers){if(b===1||b===3)return;const k0=Math.floor((cam-W)/37),k1=Math.ceil((cam+W)/37),stem=b===4?['#7a5a9a','#9a7aba']:b===2?['#6a7a2a','#8a9a3a']:['#2e4a22','#46682c'];
  for(let k=k0;k<=k1;k++){if(hsh2(k,11,b)<.55)continue;const wx=k*37+hsh2(k,12,b)*20;if(rivers.some(r=>Math.abs(r.x-wx)<r.w/2+10))continue;const sx=toS(wx);if(sx<-10||sx>W+10)continue;
    for(let j=0;j<6;j++){const h=5+hsh2(k,j,3)*8,x=sx+(j-3)*1.3+hsh2(k,j,4),sw=Math.sin(t/700+wx*.1+j)*.8;B.strokeStyle=stem[j%2];B.lineWidth=.5;B.beginPath();B.moveTo(x,GY+8.5+WDROP);B.quadraticCurveTo(x+sw*.4,GY+8.5+WDROP-h*.5,x+sw,GY+8.5+WDROP-h);B.stroke();
      if(j%2===0&&b!==4){B.fillStyle=b===2?'#8a6a3a':'#5a3a20';B.fillRect(x+sw-.5,GY+8.5+WDROP-h-1,1,2.4)}}}}
function drawLily(c,cam,W,H,t,b,gy){if(b!==0&&b!==4)return;const k0=Math.floor((cam-W)/53),k1=Math.ceil((cam+W)/53);for(let k=k0;k<=k1;k++){if(hsh2(k,21,b)<.6)continue;const wx=k*53+hsh2(k,22,b)*30,sx=Math.round((W/2+wx-cam)*RS)/RS,y=gy+12+WDROP+hsh2(k,23,b)*(H-gy-18-WDROP),rr=2.4+hsh2(k,24,b)*2;if(sx<-8||sx>W+8)continue;
  c.fillStyle=b===4?'#9a7ac0':'#3e6a2e';c.beginPath();c.ellipse(sx,y,rr*1.6,rr*.55,0,.25,Math.PI*2-.05);c.lineTo(sx,y);c.fill();c.fillStyle=b===4?'#c0a0e0':'#5a8a3a';c.beginPath();c.ellipse(sx-.3,y-.2,rr*1.2,rr*.35,0,.3,Math.PI*2-.1);c.fill();
  if(hsh2(k,25,b)>.6){c.fillStyle=b===4?'#ffffff':'#f0a0c0';c.beginPath();c.arc(sx+rr*.4,y-.7,.9,0,7);c.fill();c.fillStyle='#ffe08a';c.fillRect(sx+rr*.4-.25,y-.95,.5,.5)}}}
function drawFlutter(B,toS,cam,W,t,nf,Z,b){if(nf>.4||b===3)return;const n=Math.round(2+Z.p*5);for(let i=0;i<n;i++){const wx=Math.floor(cam/400)*400+((i*137)%400)-200+Math.sin(t/2100+i)*40,sx=toS(wx),y=GY-8-Math.abs(Math.sin(t/900+i*2))*12,f=Math.abs(Math.sin(t/60+i));const col=['#f5e08a','#f29ccf','#ffffff','#9fd0ff'][i%4];B.fillStyle=col;B.fillRect(sx-1.2*f,y,1.2*f,1);B.fillRect(sx,y,1.2*f,1)}
  if(nf>.5)return}
/* ================= MOUNTS ================= */
const MOUNTS={
 horse:{n:'الحصان البنّي',coat:['#1e1008','#331c10','#4a2a18','#633922','#7e4b2e','#9c623e','#bd7f54'],mane:['#0e0806','#1c110a','#2c1c12','#3e2a1c'],sp:1,cost:0,d:'سريع ومخلص'},
 white:{n:'الفرس الأبيض',coat:['#5e5a54','#827e76','#a6a298','#c6c1b6','#dedad0','#efece4','#fdfcf8'],mane:['#a8a49c','#c8c4bc','#e4e0d8','#ffffff'],sp:1.1,cost:15,d:'أسرع قليلًا'},
 black:{n:'الأدهم الناري',coat:['#050303','#0c0808','#151010','#1e1818','#2a2222','#383030','#4a3e3e'],mane:['#ff4a10','#ff8a20','#ffc040','#ffe08a'],sp:1.25,cost:35,fire:1,d:'أسرع جواد، يترك نارًا تحرق الوحوش'},
 unicorn:{n:'وحيد القرن',coat:['#6a5e6a','#8e8290','#b2a6b4','#d0c6d4','#e6defa','#f4effc','#ffffff'],mane:['#e890c0','#b8a0f0','#90d0f0','#fff0a0'],horn:1,sp:1.1,cost:60,heal:1,d:'يشفي الفارس ببطء'},
 pegasus:{n:'الحصان المجنّح',coat:['#4e5c72','#6e7e96','#92a2b8','#b6c4d6','#d4dfec','#eaf0f7','#ffffff'],mane:['#8cb4e4','#b4d0f2','#d8e8fa','#ffffff'],wings:1,wingC:['#ffffff','#eef3fa','#d2dcec','#a8b8d0'],sp:1.15,cost:90,fly:1,d:'يطير فوق الوحوش والأنهار'},
 griffin:{n:'الغريفين',coat:['#3a2410','#5a3a18','#7a5222','#9a6c30','#b88a44','#d4a85e','#ecc880'],mane:['#f4f0e6','#e6e0d0','#d0c8b4','#ffffff'],wings:1,wingC:['#f0e2bc','#d0b47c','#a8844a','#7a5a2e'],beak:1,sp:1.2,cost:130,fly:1,claw:1,d:'يطير ويضرب بقوة أكبر'}};
for(const k in MOUNTS){MOUNTS[k].coat=MOUNTS[k].coat.map(toA)}
const MLIST=['white','black','unicorn','pegasus','griffin'];
const MOPT={m:'horse',nr:0,rp:null};
function curMount(){return MOUNTS[(typeof S!=='undefined'&&S.mount)||'horse']||MOUNTS.horse}
function mountWing(c,S,b,fr,gal,walk,far,MO){if(!MO.wings)return;const flap=gal?Math.sin(fr*Math.PI/6):walk?Math.sin(fr*Math.PI/6)*.35:-.55;
  const bx=29,by=25.5+b,ang=-2.15+flap*.8+(far?-.2:0),len=27,WC=MO.wingC.map(toA),dk=far?.68:1,col=(i)=>`rgb(${WC[Math.min(3,i)].map(v=>Math.round(v*dk)).join(',')})`;
  for(let k=8;k>=0;k--){const u=k/8,ax=bx+Math.cos(ang)*len*u*.92,ay=by+Math.sin(ang)*len*u*.92,fl=7+(1-Math.abs(u-.6))*9,fa=ang-Math.PI/2+.35+u*.25;
    c.fillStyle=col(k<3?2:k<6?1:0);c.beginPath();c.ellipse((ax+Math.cos(fa)*fl*.5)*S,(ay+Math.sin(fa)*fl*.5)*S,fl*.5*S,1.55*S,fa,0,7);c.fill();
    c.fillStyle=col(3);c.beginPath();c.ellipse((ax+Math.cos(fa)*fl*.62)*S,(ay+Math.sin(fa)*fl*.62+.6)*S,fl*.34*S,.45*S,fa,0,7);c.fill()}
  c.strokeStyle=col(1);c.lineWidth=2.4*S;c.lineCap='round';c.beginPath();c.moveTo(bx*S,by*S);c.quadraticCurveTo((bx+Math.cos(ang)*len*.5-1)*S,(by+Math.sin(ang)*len*.5)*S,(bx+Math.cos(ang)*len*.95)*S,(by+Math.sin(ang)*len*.95)*S);c.stroke();
  c.strokeStyle=col(0);c.lineWidth=.8*S;c.beginPath();c.moveTo(bx*S,(by-.6)*S);c.lineTo((bx+Math.cos(ang)*len*.9)*S,(by+Math.sin(ang)*len*.9-.6)*S);c.stroke()}
function mountHead(c,S,head,MO,graze){if(MO.horn&&!graze){const x=head.ex+.6,y=head.ey-2.4;c.fillStyle='#f6e6b8';c.beginPath();c.moveTo(x*S,y*S);c.lineTo((x+5.4)*S,(y-6.6)*S);c.lineTo((x+1.9)*S,(y+.4)*S);c.closePath();c.fill();c.strokeStyle='#d0a84a';c.lineWidth=.45*S;for(let k=1;k<4;k++){const u=k/4;c.beginPath();c.moveTo((x+u*4.6-.5)*S,(y-u*5.6+.6)*S);c.lineTo((x+u*4.6+.9)*S,(y-u*5.6+.2)*S);c.stroke()}
    c.globalCompositeOperation='lighter';const g=c.createRadialGradient((x+4)*S,(y-5)*S,0,(x+4)*S,(y-5)*S,4*S);g.addColorStop(0,'rgba(255,240,200,.55)');g.addColorStop(1,'rgba(255,240,200,0)');c.fillStyle=g;c.fillRect((x)*S,(y-9)*S,8*S,8*S);c.globalCompositeOperation='source-over'}
  if(MO.beak){const hx=head.ex+1.4,hy=head.ey+1.6;c.fillStyle='#f4f0e6';c.beginPath();c.ellipse(hx*S,hy*S,4.6*S,4*S,.5,0,7);c.fill();c.fillStyle='#e0d8c4';c.beginPath();c.ellipse((hx-1.6)*S,(hy+2.4)*S,3.4*S,2.4*S,.3,0,7);c.fill();
    const bx=hx+3.4,by=hy+.6;c.fillStyle='#e8b830';c.beginPath();c.moveTo((bx-1)*S,(by-1.8)*S);c.quadraticCurveTo((bx+4.6)*S,(by-1.4)*S,(bx+4.2)*S,(by+2.6)*S);c.lineTo((bx+2.6)*S,(by+1.4)*S);c.lineTo((bx-.6)*S,(by+1.8)*S);c.closePath();c.fill();c.fillStyle='#a87a10';c.fillRect((bx)*S,(by+.5)*S,3*S,.45*S);
    c.fillStyle='#120a04';c.beginPath();c.arc((hx+.6)*S,(hy-.8)*S,.85*S,0,7);c.fill();c.fillStyle='#ffd040';c.beginPath();c.arc((hx+.5)*S,(hy-.9)*S,.4*S,0,7);c.fill()}}

/* ================= HERO ON FOOT ================= */

/* human gait: 16-frame cycle, planted stance foot, swing with knee lift, forward-bending knee via 2-bone IK */
function humanLegIK(H,F,l1,l2){const dx=F[0]-H[0],dy=F[1]-H[1];let d=Math.hypot(dx,dy);const m=l1+l2-.01;if(d>m){F=[H[0]+dx/d*m,H[1]+dy/d*m];d=m}const a=Math.atan2(F[1]-H[1],F[0]-H[0]),c1=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))));const ka=a-c1;return[[H[0]+Math.cos(ka)*l1,H[1]+Math.sin(ka)*l1],F]}
function humanGait(fr,run,hipX,gy){const walk=fr>0,u0=walk?((fr-1)%16)/16:0,ph=u0*Math.PI*2,st=run?8.4:6.6,lift=run?3.2:1.7,duty=run?.38:.6;
  const legAt=off=>{if(!walk)return[hipX+(off?-.8:.8),gy,0];const u=(u0+off)%1;if(u<duty){const s=u/duty;return[hipX+st*(.5-s),gy,0]}const s=(u-duty)/(1-duty),e=s*s*(3-2*s);return[hipX+st*(-.5+e),gy-lift*Math.sin(Math.PI*s),Math.sin(Math.PI*s)]};
  const bob=walk?(run?-Math.abs(Math.sin(ph))*1.1+.35:Math.cos(2*ph)*.35):0;
  return{L:legAt(0),R:legAt(.5),bob,ph,arm:walk?Math.sin(ph)*(run?.9:.55):0}}
function footSprite(fr,run){const rp=riderPal(),key='foot|'+JSON.stringify(rp)+'|'+fr+'|'+(run?1:0)+'@'+Math.min(5,RS+2);if(SPR[key])return SPR[key];
  const S=Math.min(5,RS+2),K=1.3,W=24,H=38,cv=mkc(W*S,H*S),c=cv.getContext('2d');c.lineCap='round';c.lineJoin='round';
  const walk=fr>0,HG=humanGait(fr,run,9.5,26.6),ph=HG.ph,a=HG.arm,hy=HG.bob,lean=run?.35:0;
  const CL=rampOf(rp.b),PN=rampOf(rp.p),SK=rampOf(rp.s),HR=rampOf(rp.h),BT=rampOf('#2e1e14'),CP=rampOf(rp.cape);
  const A=[],add=(x,y,r,z,R)=>A.push({x:(x*K+1)*S,y:(y*K+1.2)*S,r:r*K*S,z:z*S,ramp:R,fr:0});
  const chain=(pts,r0,r1,z,R)=>{for(let i=1;i<pts.length;i++){const p=pts[i-1],q=pts[i],n=Math.max(2,Math.ceil(Math.hypot(q[0]-p[0],q[1]-p[1])/.45));for(let k=0;k<=n;k++){const u=k/n;add(p[0]+(q[0]-p[0])*u,p[1]+(q[1]-p[1])*u,r0+(r1-r0)*((i-1+u)/(pts.length-1)),z,R)}}};
  const leg=(sw,z,R)=>{const L=sw>=0?HG.R:HG.L,hip=[9.3+lean*.3,17.2+hy],[knee,ft]=humanLegIK(hip,[L[0],L[1]],4.9,4.8),toe=L[2]>.3?.5:0;chain([hip,knee],1.4,1.2,z,R);chain([knee,ft],1.2,1.02,z,R);add(ft[0]+.9,ft[1]+.15-toe,1.1,z+.2,BT);add(ft[0]+1.8,ft[1]+.3-toe*1.4,.82,z+.2,BT)};
  // cape behind
  const cf=walk?Math.sin(ph)*.8:0,cl=run?3.5:walk?1.6:.6;chain([[8.4+lean,10+hy],[6.6-cl*.5+lean*.4,15+hy+cf],[5.2-cl,21+hy-cl*.3]],2.2,2.9,-.5,CP.map(q=>q.map(v=>v*.82)));
  leg(-1,0,PN.map(q=>q.map(v=>v*.78)));
  chain([[8.2+lean*.6,10.2+hy],[7.8-a*2.6,14.2+hy],[8.4-a*4+(run?1.2:0),17.2+hy-(run?1.4:0)]],1.1,.95,.6,CL.map(q=>q.map(v=>v*.78)));
  chain([[9.3,17.6+hy],[9.4+lean*.5,13.6+hy],[9.6+lean,10+hy]],2.6,2.4,2,CL);add(9.4+lean*.6,15.6+hy,2.55,2.2,CL);
  chain([[8.9,16.8+hy],[10,16.8+hy]],.9,.9,2.6,rampOf('#5a3a1e'));
  leg(1,3,PN);
  add(9.6+lean,8.6+hy,1.05,3,SK);add(10+lean,5.4+hy,2.85,3.4,SK);
  if(rp.girl){add(9.7+lean,5+hy,3.35,3.2,HR);chain([[8.4+lean,7.4+hy],[8.2+lean,10.6+hy]],2.2,2.5,3.1,HR);add(11.1+lean,5.7+hy,1.9,4.2,SK)}else{add(9.3+lean,3.8+hy,2.6,3.5,HR);add(7.9+lean,5.4+hy,1.7,3.4,HR)}
  const hand=[12.6+lean+(walk?Math.sin(a)*1.2:0),14+hy];chain([[10.4+lean,10.4+hy],[11.8+lean,12.6+hy],hand],1.1,.95,4.4,CL);add(hand[0]+.2,hand[1]+.1,1,4.6,SK);
  blobs(c,W*S,H*S,A,shadeR);
  const X=v=>(v*K+1)*S,Y=v=>(v*K+1.2)*S;
  // face details
  c.fillStyle='#ffffff';c.fillRect(X(11.3+lean),Y(4.8+hy),1.1*S,.8*S);c.fillStyle='#1a0e08';c.fillRect(X(11.7+lean),Y(4.85+hy),.65*S,.75*S);
  c.fillStyle=`rgb(${HR[1].join(',')})`;c.fillRect(X(11+lean),Y(4.05+hy),1.6*S,.4*S);c.fillStyle='rgba(120,50,40,.55)';c.fillRect(X(11.6+lean),Y(7+hy),1*S,.35*S);c.fillStyle='rgba(220,110,100,.35)';c.fillRect(X(10.6+lean),Y(6.2+hy),1*S,.6*S);
  // crown
  const cx0=X(8.2+lean),cy0=Y(1.8+hy),u=S*K;c.fillStyle='#f2b632';c.beginPath();c.moveTo(cx0,cy0+1.4*u);c.lineTo(cx0,cy0-.9*u);c.lineTo(cx0+1.1*u,cy0+.3*u);c.lineTo(cx0+2.1*u,cy0-1.4*u);c.lineTo(cx0+3.1*u,cy0+.3*u);c.lineTo(cx0+4.2*u,cy0-.9*u);c.lineTo(cx0+4.2*u,cy0+1.4*u);c.closePath();c.fill();c.fillStyle='#e8464f';c.fillRect(cx0+1.8*u,cy0+.1*u,.7*u,.7*u);
  return SPR[key]={cv,W,H,hand:[(hand[0]*K+1),(hand[1]*K+1.2)]}}

/* ================= DRAW HERO (mounted / on foot / boat) ================= */
function drawScaled(B,ms,x,gy,HS,flip){B.save();B.translate(x,gy);B.scale(HS,HS);B.translate(-x,-gy);const oy=gy-ms.H+1;B.imageSmoothingEnabled=true;B.imageSmoothingQuality='high';
  if(flip){B.save();B.translate(x+ms.W/2,0);B.scale(-1,1);B.drawImage(ms.cv,0,oy,ms.W,ms.H);B.restore()}else B.drawImage(ms.cv,x-ms.W/2,oy,ms.W,ms.H);B.imageSmoothingEnabled=false;B.restore()}
function drawHeroAll(B,V,hx,fr,mode,t,toS){const HS=.47;
  if(V.sail)return;
  if(V.foot&&V.horse&&!(V.boat&&V.horse.onb)){const h=V.horse,hsx=toS(h.x);MOPT.m=S.mount||'horse';MOPT.nr=1;const g3=h.run?horseGait(3,0,h.walk,HS):{mode:(h.t%700)<260?'graze':'idle',fr:0},hs=monarchSprite(g3.fr,g3.mode);MOPT.nr=0;
    B.fillStyle='rgba(0,0,0,.28)';B.beginPath();B.ellipse(hsx,GY,12,2,0,0,7);B.fill();drawScaled(B,hs,hsx,GY,HS,h.face<0)}
  if(V.foot||V.boat){const bob=V.boat?Math.sin(t/260)*.8:0,gy=V.boat?GY-3.5+bob:GY,sp=Math.abs(V.vx||0),moving=sp>.15&&!V.boat,run=sp>.7,ffr=moving?1+Math.floor(V.walk/(run?1.11:.55))%16:0;
    if(V.boat&&V.horse&&V.horse.onb){MOPT.m=S.mount||'horse';MOPT.nr=1;const hs=monarchSprite(0,'idle');MOPT.nr=0;drawScaled(B,hs,hx-V.face*16,gy,HS*.82,V.face<0)}
    const fs=footSprite(ffr,run);B.fillStyle='rgba(0,0,0,.28)';if(!V.boat){B.beginPath();B.ellipse(hx,GY,6,1.4,0,0,7);B.fill()}
    const FS=.62;B.save();B.translate(hx,gy);B.scale(FS,FS);B.translate(-hx,-gy);const oy=gy-fs.H+1,fl=V.face<0;B.imageSmoothingEnabled=true;B.imageSmoothingQuality='high';
    if(fl){B.save();B.translate(hx+fs.W/2,0);B.scale(-1,1);B.drawImage(fs.cv,0,oy,fs.W,fs.H);B.restore()}else B.drawImage(fs.cv,hx-fs.W/2,oy,fs.W,fs.H);B.imageSmoothingEnabled=false;
    drawHeroWeapon(B,V,hx,oy,{hand:[30+fs.hand[0]-fs.W/2,fs.hand[1]]},t);B.restore();drawTorch(B,V,hx,t);if(G&&G.handY!==undefined){G.handY=gy+(G.handY-gy)*FS;G.handX=V.hx+(G.handX-V.hx)*FS}return}
  MOPT.m=S.mount||'horse';MOPT.nr=0;const g2=horseGait(Math.abs(V.vx||0),V.idle||0,V.walk||0,HS,V),ms=monarchSprite(g2.mode==='idle'?Math.floor(t/(140-WINDF(t)*50))%24:g2.fr,g2.mode),alt=V.alt||0;
  B.fillStyle=`rgba(0,0,0,${.3-Math.min(.2,alt/120)})`;B.beginPath();B.ellipse(hx,GY,10-alt/6,1.8-alt/40,0,0,7);B.fill();
  B.save();B.translate(0,-alt);if(V.rearT>0){const u=1-V.rearT/(V.rearMax||30),ang=-Math.sin(u*Math.PI)*.4*V.face,px=hx-V.face*12*HS;B.translate(px,GY);B.rotate(ang);B.translate(-px,-GY)}
  B.translate(hx,GY);B.scale(HS,HS);B.translate(-hx,-GY);const oy=GY-ms.H+1,fl=V.face<0;B.imageSmoothingEnabled=true;B.imageSmoothingQuality='high';
  if(fl){B.save();B.translate(hx+30,0);B.scale(-1,1);B.drawImage(ms.cv,0,oy,ms.W,ms.H);B.restore()}else B.drawImage(ms.cv,hx-30,oy,ms.W,ms.H);B.imageSmoothingEnabled=false;
  drawHeroWeapon(B,V,hx,oy,ms,t);B.restore();if(G&&G.handY!==undefined){G.handY=GY-alt+(G.handY-GY)*HS;G.handX=V.hx+(G.handX-V.hx)*HS}drawTorch(B,V,hx,t);
  const MO=curMount();if(MO.fire&&Math.abs(V.vx||0)>1&&Math.random()<.6&&G.pfx!==undefined)P({t:'flame',x:V.hx-V.face*10+rnd(-3,3),y:GY-2-alt,vx:-V.face*rnd(.2,.8),vy:rnd(-1.4,-.4),g:-.02,drag:.95,life:rnd(14,24),col:'fire',s:rnd(1.5,3)});
  if(MO.horn&&Math.random()<.08&&G.pfx!==undefined)P({t:'star',x:V.hx+V.face*16+rnd(-4,4),y:GY-48-alt+rnd(-4,4),vx:0,vy:-.3,life:22,col:'holy',s:1.4})}

/* ================= TREES ================= */
function drawTreeProp(B,r,sx,t){const s=r.s||1;if(r.dead){const st=hdPlant(G?G.b:0,2,9);B.fillStyle='#4a3020';B.fillRect(sx-3.2*s,GY-4*s,6.4*s,4*s);B.fillStyle='#8a6440';B.fillRect(sx-3.2*s,GY-4.6*s,6.4*s,1.2*s);B.fillStyle='#5a3a24';B.fillRect(sx-1*s,GY-4.4*s,2*s,.5*s);return}
  const im=hdPlant(G?G.b:0,r.v,r.vr||0);let ang=0;if(r.shk>0){r.shk-=1;ang=Math.sin(r.shk*1.3)*.035*(r.shk/10)}if(r.fall>0){ang=Math.min(1.5,Math.pow(r.fall/36,2)*1.5)*(r.fdir||1);r.fall+=1;if(r.fall>40){r.dead=1;puff(r.x+(r.fdir||1)*30*s,GY-6,16,'#8a6a3a',2.4)}}
  if(isTreeKind(r)){drawTreeK(B,r,sx,null,ang);return}B.save();B.translate(sx,GY);B.rotate(ang);B.drawImage(im,-30*s,-76*s+2,60*s,76*s);B.restore()}
function hitTree(r,d,el,dir){if(r.dead||r.fall>0)return false;r.hp=(r.hp===undefined?3:r.hp)-1;r.shk=12;SFX.hit&&SFX.hit();for(let k=0;k<7;k++)P({t:'shard',x:r.x+rnd(-10,10),y:GY-40*(r.s||1)+rnd(-10,10),vx:rnd(-1,1),vy:rnd(-1,.5),g:.05,drag:.98,life:rnd(26,40),col:HDP[G.b].leaf[2+(k%3)]||'#5a8a3a',s:rnd(1,2),rot:rnd(0,6),vr:.1});
  P({t:'rock',x:r.x,y:GY-10,vx:dir*rnd(.4,1.4),vy:rnd(-2,-1),g:.15,drag:.99,life:30,col:'#c89a5a',s:1.4});
  if(r.hp<=0){r.fall=1;r.fdir=dir||1;const w=2+((r.s||1)>1.1?1:0);G.wood=(G.wood||0)+w;banner(`<div class="bs">+${w} خشب · لديك ${G.wood}</div>`,1500);gHud()}return true}

/* ================= ANIMALS ================= */
function animalSprite(kind,fr,b){const key='an|'+kind+'|'+fr+'|'+b+'@'+RS;if(SPR[key])return SPR[key];const S=Math.max(2,RS),W=kind==='deer'?30:22,H=kind==='deer'?30:18,cv=mkc(W*S,H*S),c=cv.getContext('2d');
  const run=fr>0,ph=fr*Math.PI/4,a=run?Math.sin(ph)*.7:0;const A=[],add=(x,y,r,z,R)=>A.push({x:x*S,y:y*S,r:r*S,z:z*S,ramp:R,fr:0});
  const chain=(pts,r0,r1,z,R)=>{for(let i=1;i<pts.length;i++){const p=pts[i-1],q=pts[i],n=Math.max(2,Math.ceil(Math.hypot(q[0]-p[0],q[1]-p[1])/.5));for(let k=0;k<=n;k++){const u=k/n;add(p[0]+(q[0]-p[0])*u,p[1]+(q[1]-p[1])*u,r0+(r1-r0)*((i-1+u)/(pts.length-1)),z,R)}}};
  if(kind==='deer'){const C=rampOf(b===1?'#8a7a6a':b===2?'#b08850':'#9a6638'),D=C.map(q=>q.map(v=>v*.75)),LL=(x,sw,z,R)=>{chain([[x,17],[x+Math.sin(sw)*3,22.5],[x+Math.sin(sw)*4.2,28]],1.05,.75,z,R)};
    LL(9,-a,0,D);LL(19,a,0,D);add(14,15,5,1,C);add(9.5,14.4,4.2,1.2,C);add(19,14.6,4.6,1.2,C);chain([[20.5,13],[22.6,8.6],[24,5.6]],2.3,1.6,2,C);add(25.4,5.2,2.2,2.4,C);chain([[25.6,5.6],[28,7]],1.5,1,2.6,C);
    add(7.4,12.8,1.4,1.6,rampOf('#f4efe6'));LL(11,a,3,C);LL(21,-a,3,C);blobs(c,W*S,H*S,A,shadeR);
    c.fillStyle='#f4efe6';c.beginPath();c.ellipse(14*S,18.2*S,4*S,1.4*S,0,0,7);c.fill();c.fillStyle='#ffffff';for(let k=0;k<5;k++){c.fillRect((12+k*1.6)*S,(12.4+(k%2))*S,.6*S,.6*S)}
    c.strokeStyle='#4a3020';c.lineWidth=.6*S;[[24.6,3.6,-1],[25.8,3.4,1]].forEach(([x,y,d])=>{c.beginPath();c.moveTo(x*S,y*S);c.lineTo((x+d*.6)*S,(y-3)*S);c.lineTo((x+d*1.8)*S,(y-4.4)*S);c.moveTo((x+d*.4)*S,(y-1.8)*S);c.lineTo((x-d*.8)*S,(y-3)*S);c.stroke()});
    c.fillStyle='#120a06';c.fillRect(26*S,4.6*S,.8*S,.8*S);c.fillRect(27.8*S,6.6*S,.7*S,.5*S)}
  else{const Wl=rampOf(b===1?'#e8ecf4':b===4?'#f4e4f4':'#ece6d6'),Dk=rampOf('#2a221e'),LL=(x,sw,z)=>chain([[x,12],[x+Math.sin(sw)*2,17.4]],.85,.7,z,Dk);
    LL(6,-a,0);LL(14,a,0);for(let k=0;k<9;k++)add(5+((k*5)%10)*1.1,7+((k*3)%4)*.9,3.1,1+k*.05,Wl);chain([[15.6,8],[18.4,8.6]],2,1.5,2,Dk);add(19.2,9.2,1.7,2.3,Dk);LL(8,a,3);LL(16,-a,3);blobs(c,W*S,H*S,A,shadeR);
    c.fillStyle='#ffffff';c.fillRect(19.4*S,8.5*S,.5*S,.5*S);c.fillStyle='#1a1410';c.fillRect(19.6*S,8.6*S,.3*S,.3*S)}
  return SPR[key]={cv,W,H}}
function animalRig(c,r,sx,t,type,mode,Dc,ws,pal){r._d=(r._d||0)+Math.min(8,Math.abs(r.x-(r._lx??r.x)));r._lx=r.x;RIGMODE=mode;Dc=mode==='stand'?1:rigCycle(type,mode)*ws*1.05;const fr=mode==='stand'?0:Math.floor(((r._d/Dc)%1)*24),sp=rigSprite(type,fr,pal,RS,'an_'+type+(pal.ant?'A':'')+G.b,24);RIGMODE='gallop';
  const W=sp.W/RS*ws,H=sp.H/RS*ws,fl=r.dir<0,y=GY-H+1+(r.hop||0)*.4;c.fillStyle='rgba(0,0,0,.25)';c.beginPath();c.ellipse(sx,GY,W*.28,1.3,0,0,7);c.fill();if(r.inv>0&&Math.floor(t/50)%2)c.globalAlpha=.55;
  c.save();c.translate(sx,0);c.scale(fl?1:-1,1);c.drawImage(sp.cv,-W/2,y,W,H);c.restore();c.globalAlpha=1}
var APAL={deer:[{a:'#8a5a32',b:'#ecdcc4',c:'#4a2e1a',e:'#140c0a'},{a:'#7a6a5a',b:'#eceae4',c:'#3a3028',e:'#140c0a'},{a:'#b07a3a',b:'#f4e4c0',c:'#5a3a1a',e:'#140c0a'},{a:'#5a3a2a',b:'#c8b8a0',c:'#2a1a12',e:'#140c0a'},{a:'#a88ac0',b:'#f4ecf8',c:'#5a4a6a',e:'#140c0a'}],sheep:{a:'#e8e2d4',b:'#f6f2ea',c:'#2a2420',e:'#140c0a'},fox:[{a:'#d0662a',b:'#f4ece0',c:'#2a1a14',e:'#140c0a'},{a:'#e8ecf2',b:'#ffffff',c:'#6a7488',e:'#140c0a'}]};
function drawAnimal(c,r,sx,t){if(!r.alive)return;try{const mv=r.mv&&Math.abs(r.x-(r._lx??r.x))>.02;if(r.k==='deer'){const run=(r.flee>0)||Math.abs(r.x-(r._lx??r.x))>1.2,p=Object.assign({},APAL.deer[G.b]||APAL.deer[0]);if(Math.abs(r.x0|0)%3===0)p.ant=1;animalRig(c,r,sx,t,'deer',mv?(run?'gallop':'walk'):'stand',run?30:13,.9,p);return}
  if(r.k==='sheep'){animalRig(c,r,sx,t,'sheep',mv?(Math.abs(r.x-(r._lx??r.x))>.8?'trot':'walk'):'stand',9,.72,APAL.sheep);return}}catch(e){}r._d=(r._d||0)+Math.min(8,Math.abs(r.x-(r._lx??r.x)));r._lx=r.x;const fr=r.mv?1+Math.floor(r._d/(r.k==='deer'?3.2:2.2))%8:0,sp=animalSprite(r.k,fr,G.b),fl=r.dir<0,y=GY-sp.H+1+(r.hop||0);
  c.fillStyle='rgba(0,0,0,.25)';c.beginPath();c.ellipse(sx,GY,sp.W*.3,1.4,0,0,7);c.fill();if(r.inv>0&&Math.floor(t/50)%2)c.globalAlpha=.55;
  if(fl){c.save();c.translate(sx+sp.W/2,0);c.scale(-1,1);c.drawImage(sp.cv,0,y,sp.W,sp.H);c.restore()}else c.drawImage(sp.cv,sx-sp.W/2,y,sp.W,sp.H);c.globalAlpha=1}
function hitAnimal(r,d,el,dir){if(!r.alive||r.inv>0)return false;r.hp-=d;r.inv=12;r.flee=200;r.dir=dir||1;puff(r.x,GY-10,8,'#ffffff',1.6);
  if(r.hp<=0){r.alive=0;r.respawn=2;const n=r.k==='deer'?3:2;for(let k=0;k<n;k++)dropCoin(r.x,GY-14,(Math.random()-.5)*2.4);SFX.coin();banner(`<div class="bs">${r.k==='deer'?'اصطدت غزالًا':r.k==='fox'?'اصطدت ثعلبًا':'اصطدت خروفًا'} · +${n} ${ic('coin')}</div>`,1300)}return true}

/* ================= VILLAGE PROPS ================= */
function wellSprite(b){const key='well'+b+RS;if(HDC[key])return HDC[key];const P=bPainter(26,34);bSet(P,b,'well',0);const S2=BPAL[b].stone;
  bCyl(P,4,20,18,14,'stone',S2,b*3+1);P.area(3,19,23,21,null,()=>.85,S2);P.area(5,21,21,22.4,null,()=>[20,24,34],['#000']);
  for(const x of [4.5,20.5])P.area(x,5,x+1.4,20,null,matShade('plank',x,5,1.4,15,b),['#2e1c10','#4a2e1a','#6a4426','#8a5c34']);
  bGable(P,1,25,8,0,b===1?'snow':b===2?'tile':'thatch',b===1?BPAL[1].roof:b===2?BPAL[0].roof2:BPAL[0].roof,b*5,b===1);
  P.area(6,8.6,20,9.6,null,()=>.5,['#2e1c10','#4a2e1a','#6a4426','#8a5c34']);P.area(12.6,9.6,13.2,15,null,()=>[200,180,140],['#000']);P.area(11,15,15,18.4,null,matShade('plank',11,15,4,3.4,b),['#3a2414','#5a3a20','#7a5230','#9a6c40']);
  P.dark(0,30,26,34,1,.6);P.done();return HDC[key]={cv:P.cv,W:26,H:34}}
function statueSprite(b){const key='stat'+b+RS;if(HDC[key])return HDC[key];const W=46,H=64,cv=mkc(W*RS,H*RS),c=cv.getContext('2d');const sv=MOPT.m;MOPT.m='horse';MOPT.nr=0;const ms=monarchSprite(0,'idle');MOPT.m=sv;
  const tmp=mkc(ms.cv.width,ms.cv.height),tc=tmp.getContext('2d');tc.drawImage(ms.cv,0,0);const im=tc.getImageData(0,0,tmp.width,tmp.height),d=im.data,BR=(b===1||b===4?['#6a7480','#8e98a4','#b4bec8','#dce2ea','#ffffff']:['#3a2a18','#5e4424','#86622e','#b08a44','#d8b468']).map(toA);
  for(let i=0;i<d.length;i+=4){if(!d[i+3])continue;const l=(d[i]*.3+d[i+1]*.59+d[i+2]*.11)/255,col=rampPick(BR,Math.min(.999,l*1.5+.1),(i>>2)%tmp.width,((i>>2)/tmp.width)|0);d[i]=col[0];d[i+1]=col[1];d[i+2]=col[2]}tc.putImageData(im,0,0);
  const P=bPainter(W,H);bSet(P,b,'stat',0);P.area(9,46,37,64,null,matShade('marble',9,46,28,18,b),MARBLE);P.area(7,44,39,47,null,()=>.85,MARBLE);P.area(7,61,39,64,null,()=>.5,MARBLE);P.area(16,52,30,57,null,()=>toA('#c9a24a'),['#000']);P.done();
  c.drawImage(P.cv,0,0);c.imageSmoothingEnabled=true;c.drawImage(tmp,5*RS,(44-41)*RS,36*RS,41*RS);return HDC[key]={cv,W,H}}
function tentSprite(b,v){const key='tent'+b+v+RS;if(HDC[key])return HDC[key];const P=bPainter(34,26);bSet(P,b,'tent',v);
  const cl=[['#7a4a3a','#9a6448','#bc8458','#dca878','#f0cc9a'],['#5a5e6a','#7a808c','#9ea4ae','#c4cad2','#e6eaf0'],['#8a5a2a','#b07838','#d49c4c','#ecc070','#fae0a0'],['#3a1a1a','#5a2424','#7a3030','#9a4040','#ba5a50'],['#7a5a9a','#9a7aba','#bc9cd6','#dcc0ee','#f4e4fc']][b];
  P.area(1,4,33,26,(X,Y)=>Math.abs(X-17)<=(Y-4)/22*16,(X,Y,px,py)=>{const u=(X-17)/((Y-4)/22*16+.01);let t=.48+u*.3+(((X*1.2)|0)%5===0?-.12:0);if(v%2&&((Y|0)%6<1))t-=.15;return t},cl);
  P.area(13,13,21,26,(X,Y)=>Math.abs(X-17)<=(Y-13)/13*4,()=>[26,16,12],['#000']);P.area(16.4,1,17.6,5,null,()=>[60,40,24],['#000']);
  P.area(16,0,18,1.6,null,()=>toA(BPAL[b].banner),['#000']);P.dark(0,23,34,26,1,.7);P.done();return HDC[key]={cv:P.cv,W:34,H:26}}
function drawVillageProp(c,r,sx,t){if(r.k==='well'){const sp=wellSprite(G.b);drawBld(c,Object.assign({},sp,{win:[],smoke:[],flags:[],lan:[],torch:[],yard:[]}),sx,t)}
  else if(r.k==='statue2'){const sp=statueSprite(G.b);c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(sx,GY,16,2.2,0,0,7);c.fill();c.drawImage(sp.cv,sx-sp.W/2,GY-sp.H+1,sp.W,sp.H)}}
function drawTent(c,r,sx,t){const sp=tentSprite(G.b,Math.abs(r.x|0)%2);c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(sx-4,GY,18,2,0,0,7);c.fill();c.drawImage(sp.cv,sx-sp.W/2-6,GY-sp.H+1,sp.W,sp.H);
  const f=Math.sin(t/70+r.x)*.8,fx=sx+16;c.fillStyle='#3a2410';c.fillRect(fx-4,GY-2,8,2);c.globalCompositeOperation='lighter';const g=c.createRadialGradient(fx,GY-4,0,fx,GY-4,12);g.addColorStop(0,'rgba(255,170,60,.5)');g.addColorStop(1,'rgba(255,120,30,0)');c.fillStyle=g;c.fillRect(fx-12,GY-16,24,24);c.globalCompositeOperation='source-over';
  c.fillStyle='#ff7a1a';c.beginPath();c.moveTo(fx-3,GY-1);c.quadraticCurveTo(fx+f,GY-9,fx+3,GY-1);c.fill();c.fillStyle='#ffe08a';c.beginPath();c.moveTo(fx-1.4,GY-1);c.quadraticCurveTo(fx+f*.5,GY-5,fx+1.4,GY-1);c.fill();if(NFNOW>.1)LITS.push([fx,GY-4,34,1])}
function shrineSprite(b,m){const key='shr'+b+m+RS;if(HDC[key])return HDC[key];const W=56,H=74,cv=mkc(W*RS,H*RS),c=cv.getContext('2d');const sv=MOPT.m;MOPT.m=m;MOPT.nr=1;const ms=monarchSprite(0,'idle');MOPT.m=sv;MOPT.nr=0;
  const tmp=mkc(ms.cv.width,ms.cv.height),tc=tmp.getContext('2d');tc.drawImage(ms.cv,0,0);const im=tc.getImageData(0,0,tmp.width,tmp.height),d=im.data;for(let i=0;i<d.length;i+=4){if(!d[i+3])continue;const l=(d[i]*.3+d[i+1]*.59+d[i+2]*.11)/255;d[i]=180+l*75;d[i+1]=200+l*55;d[i+2]=230+l*25}tc.putImageData(im,0,0);
  const P=bPainter(W,H);bSet(P,b,'shrine',0);for(let k=0;k<3;k++)P.area(4+k*3,H-4-k*3,W-4-k*3,H-k*3,null,matShade('marble',4+k*3,H-4-k*3,W-8-k*6,4,b+k),MARBLE);P.area(14,H-26,42,H-9,null,matShade('marble',14,H-26,28,17,b),MARBLE);P.area(12,H-28,44,H-25,null,()=>.85,MARBLE);
  P.area(23,H-20,33,H-14,null,()=>toA('#7ad8ff'),['#000']);P.done();c.drawImage(P.cv,0,0);c.imageSmoothingEnabled=true;c.drawImage(tmp,-2*RS,(H-28-62)*RS,60*RS,68*RS);return HDC[key]={cv,W,H}}
function drawShrine(c,r,sx,t){const sp=shrineSprite(G.b,r.m),own=(S.mounts||[]).includes(r.m);c.globalCompositeOperation='lighter';const g=c.createRadialGradient(sx,GY-40,2,sx,GY-40,40);g.addColorStop(0,`rgba(140,210,255,${.28+Math.sin(t/500)*.08})`);g.addColorStop(1,'rgba(140,210,255,0)');c.fillStyle=g;c.fillRect(sx-40,GY-80,80,80);c.globalCompositeOperation='source-over';
  c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(sx,GY,26,2.4,0,0,7);c.fill();c.drawImage(sp.cv,sx-sp.W/2,GY-sp.H+1,sp.W,sp.H);if(Math.random()<.15)P({t:'star',x:r.x+rnd(-18,18),y:GY-30-rnd(0,30),vx:0,vy:-.3,life:26,col:'ice',s:1.3});
  if(G&&Math.abs(G.hx-r.x)<40){const M=MOUNTS[r.m],txt=own?(S.mount===r.m?'✓ '+M.n:'اركب '+M.n):M.n+' · '+M.cost+' 💎';c.font='bold 6px sans-serif';c.textAlign='center';const w=c.measureText(txt).width+8;c.fillStyle='rgba(10,6,24,.8)';c.fillRect(sx-w/2,GY-sp.H-10,w,9);c.fillStyle='#f6e6b8';c.fillText(txt,sx,GY-sp.H-3.4)}}

/* ================= FERRY / SEA / SHIP ================= */
function boatSprite(b){const key='boat'+b+RS;if(HDC[key])return HDC[key];const P=bPainter(40,12);bSet(P,b,'boat',0);const wood=['#2e1c10','#4a2e1a','#6a4426','#8a5c34','#a87444'];
  P.area(0,0,40,12,(X,Y)=>{const u=(X-20)/20;return Y>2+u*u*3&&Y<12-Math.abs(u)**3*8},(X,Y,px,py)=>{let t=.5-(Y/12)*.3+(((py/RS)|0)%3===0?-.18:0);return t},wood);P.area(2,2,38,3.6,(X,Y)=>Y>2+((X-20)/20)**2*3,()=>.85,wood);P.dark(0,8,40,12,1,.55);P.done();return HDC[key]={cv:P.cv,W:40,H:12}}
function shipSprite(b,lv){lv=lv||S.ship||1;const SH=SHIPS[lv]||SHIPS[1],key='ship'+b+'_'+lv+RS;if(HDC[key])return HDC[key];const W=150,H=124,P=bPainter(W,H);bSet(P,b,'ship',0);const wood=['#2a180c','#46281a','#663c24','#865430','#a46e40'],sail=b===3?['#3a1a1a','#5a2424','#7a3434','#9a4a44','#b4605a']:['#9a9078','#bcb298','#d8d0b8','#ece6d2','#fbf8ee'];
  P.area(6,88,144,H,(X,Y)=>{const u=(X-75)/69;return Y>88+u*u*8&&Y<H-Math.pow(Math.abs(u),2.4)*26},(X,Y,px,py)=>.5-((Y-88)/36)*.3+((((py/RS)|0)%4)===0?-.18:0)+(X>120?.1:0),wood);
  P.area(4,84,146,90,(X,Y)=>Y>84+((X-75)/71)**2*8,()=>.8,wood);for(let x=24;x<130;x+=14)bWin(P,x,96,4,4,0,'#2a1a10',NFNOW>.3);
  P.area(118,70,146,88,null,matShade('plank',118,70,28,18,3),wood);P.area(116,68,148,71,null,()=>.85,wood);
  if(SH.can)for(let x=30;x<126;x+=16)P.area(x,103,x+4,106.5,null,()=>[14,10,8],['#000']);if(SH.gold2)P.area(8,86,142,87.4,(X,Y)=>Y>84+((X-75)/71)**2*8,()=>toA('#e0b048'),['#000']);
  for(const[mx,mh] of (SH.m===1?[[78,70]]:SH.m===3?[[40,80],[78,94],[112,72]]:[[56,84],[96,74]])){P.area(mx-1.2,88-mh,mx+1.2,88,null,(X)=>.4+(X-mx+1.2)*.15,wood);
    P.area(mx-26,88-mh+6,mx+26,88-mh/2,(X,Y)=>Math.abs(X-mx)<26-Math.abs(Y-(88-mh*.72))*.08,(X,Y,px,py)=>{const u=(X-mx)/26;return .55+Math.sin((Y-(88-mh))/(mh*.42)*Math.PI)*.18*(1-Math.abs(u))-u*.15+((px>>3)%5===0?-.08:0)},sail);
    P.area(mx-22,88-mh/2+2,mx+22,88-10,(X,Y)=>Math.abs(X-mx)<22-Math.abs(Y-(88-mh*.28))*.1,(X,Y)=>.6-(X-mx)/22*.15,sail);P.flags.push([mx+.5,88-mh-6,BPAL[b].banner]);P.area(mx-.4,88-mh-6,mx+.5,88-mh,null,()=>[40,28,20],['#000'])}
  P.area(140,74,150,76,null,()=>.6,wood);P.done();return HDC[key]={cv:P.cv,W,H,win:P.win,smoke:[],flags:P.flags,lan:[[122,66]],torch:[],yard:[]}}
function seaX(){const bt=site('boat');return bt?bt.x-20:G.I.half-210}
function drawSea(B,r,sx0,t,P2){const x0=sx0-r.w/2,W=VW,wl=toA(P2.water),g=B.createLinearGradient(0,GY-2,0,GY+12);g.addColorStop(0,`rgb(${lerpA(wl,[255,255,255],.25).map(Math.round)})`);g.addColorStop(1,`rgb(${wl.map(Math.round)})`);B.fillStyle=g;B.fillRect(x0,GY,W-x0+40,12+WDROP);
  for(let k=0;k<26;k++){const xx=x0+((k*41+t/30)%Math.max(40,W-x0+40)),yy=GY+1+(k%5)*2;B.fillStyle=`rgba(255,255,255,${.25+(k%3)*.1})`;B.fillRect(Math.round(xx*RS)/RS,yy,4+(k%4)*2,.5)}
  const HP=HDP[G.b];for(let y=0;y<10+WDROP;y++){const ww=Math.max(1,7-y*.35);B.fillStyle=HP.dirt[Math.min(3,1+((y+2)>>2))];B.fillRect(x0-ww,GY+y,ww,1)}
  // pier
  const px0=x0-14,px1=x0+86,wd=['#2a180c','#46281a','#663c24','#865430'];B.fillStyle=wd[1];B.fillRect(px0,GY-1,px1-px0,3);for(let x=px0;x<px1;x+=3){B.fillStyle=wd[(x/3|0)%2?2:3];B.fillRect(x,GY-1,2.6,1)}for(let x=px0+6;x<px1;x+=14){B.fillStyle=wd[0];B.fillRect(x,GY+2,2,11+WDROP)}
  for(let x=px0;x<=px1;x+=14){B.fillStyle=wd[1];B.fillRect(x,GY-7,1.4,6)}B.strokeStyle='#b89a6a';B.lineWidth=.6;B.beginPath();B.moveTo(px0,GY-6);B.lineTo(px1,GY-6);B.stroke();
  drawShipAtDock(B,x0,t)}
function drawFerry(B,r,sx,t){const xL=sx-r.w/2,xR=sx+r.w/2,wd=['#2a180c','#46281a','#663c24','#865430'];
  for(const[a,b2] of [[xL-22,xL+10],[xR-10,xR+22]]){B.fillStyle=wd[1];B.fillRect(a,GY-1,b2-a,3);for(let x=a;x<b2;x+=3){B.fillStyle=wd[(x/3|0)%2?2:3];B.fillRect(x,GY-1,2.6,1)}for(let x=a+4;x<b2;x+=10){B.fillStyle=wd[0];B.fillRect(x,GY+2,1.8,9+WDROP)}B.fillStyle=wd[0];B.fillRect(a+2,GY-9,1.6,8);B.fillRect(b2-3.6,GY-9,1.6,8)}
  const bx=sx+(r.bx-r.x),bob=Math.sin(t/300+r.x)*.8,rk=Math.sin(t/520+r.x)*.025,sp=boatSprite(G.b),oy=sp.oy||0;B.save();B.translate(bx,GY+bob);B.rotate(rk);B.drawImage(sp.cv,-sp.W/2,-1-oy,sp.W,sp.H);B.restore();B.fillStyle='rgba(255,255,255,.35)';B.fillRect(bx-sp.W*.42,GY+1.2+bob,sp.W*.84,.5);
  if(G.boat===r){const ang=Math.sin(t/180)*.6;B.save();B.translate(bx+G.face*4,GY-4+bob);B.rotate(ang*G.face);B.fillStyle='#8a5c34';B.fillRect(-.6,0,1.2,14);B.fillStyle='#5a3a20';B.fillRect(-1.6,11,3.2,4);B.restore()}
  if(G&&!G.boat&&G.foot&&Math.abs(G.hx-(r.bx<r.x?r.x-r.w/2:r.x+r.w/2))<30){B.font='bold 6px sans-serif';B.textAlign='center';const txt='اضغط زر العملة لركوب القارب',w=B.measureText(txt).width+8,X=sx+(r.bx-r.x);B.fillStyle='rgba(10,6,24,.8)';B.fillRect(X-w/2,GY-28,w,9);B.fillStyle='#f6e6b8';B.fillText(txt,X,GY-21.4)}}

/* ================= PLOTS (build & upgrade) ================= */
const PLOT_KIND=['cottage','house','keep'],PLOT_COIN=[3,5,8],PLOT_WOOD=[2,4,6];
function woodOf(s){return PLOT_WOOD[s.lvl]||0}
function drawPlot(c,s,sx,t){const b=G.b;if(s.lvl>0){const sp=bldSprite(b,PLOT_KIND[s.lvl-1],s.v||0);drawBld(c,sp,sx,t);allegFlag(c,sx+sp.W*.18,GY-sp.H*.72,'me',t,13)}
  if(s.build>=0){const tgt=bldSprite(b,PLOT_KIND[s.lvl],s.v||0),pr=s.build/100,h=tgt.H*pr;c.save();c.beginPath();c.rect(sx-tgt.W/2-2,GY-h,tgt.W+4,h+2);c.clip();c.globalAlpha=.92;c.drawImage(tgt.cv,sx-tgt.W/2,GY-tgt.H+1,tgt.W,tgt.H);c.restore();c.globalAlpha=1;
    c.strokeStyle='#8a6440';c.lineWidth=1;for(let x=sx-tgt.W/2;x<=sx+tgt.W/2;x+=12){c.beginPath();c.moveTo(x,GY);c.lineTo(x,GY-Math.max(10,h+6));c.stroke()}for(let y=GY-8;y>GY-h-4;y-=10){c.beginPath();c.moveTo(sx-tgt.W/2,y);c.lineTo(sx+tgt.W/2,y);c.stroke()}
    if(Math.random()<.2)puff(s.x+rnd(-tgt.W/2,tgt.W/2),GY-h,1,'#c8a070',1)}
  else if(s.lvl===0){c.fillStyle='#6e4a2a';for(const dx of [-16,16]){c.fillRect(sx+dx-.8,GY-6,1.6,6)}c.fillRect(sx-16,GY-5,32,1);c.fillStyle='#5a3a20';c.fillRect(sx-.8,GY-14,1.6,14);c.fillStyle='#a87444';c.fillRect(sx-7,GY-16,14,7);c.fillStyle='#6e4a2a';c.fillRect(sx-7,GY-16,14,1);
    c.fillStyle='#3a2414';c.fillRect(sx-4.6,GY-14.2,4,1.2);c.fillRect(sx-4,GY-13.8,1.2,3.4);c.fillStyle='#8a93a6';c.fillRect(sx-5.4,GY-15,2.8,1.8)}
  if(Math.abs(G.hx-s.x)<30&&s.build<0&&s.lvl<3){const need=woodOf(s),have=G.wood||0,txt=`${PLOT_COIN[s.lvl]} عملات + ${need} خشب`;c.font='bold 6px sans-serif';c.textAlign='center';const w=c.measureText(txt).width+8;c.fillStyle='rgba(10,6,24,.8)';c.fillRect(sx-w/2,GY-96,w,9);c.fillStyle=have>=need?'#bff0a0':'#ffb0a0';c.fillText(txt,sx,GY-89.4)}}

/* ================= INTERACTION ================= */
function interact(){const hx=G.hx;if(qInteract())return true;
  const sh=G.props.find(r=>r.k==='shrine'&&!r.hidden&&Math.abs(r.x-hx)<30);if(sh){const M=MOUNTS[sh.m];S.mounts=S.mounts||['horse'];
    if(S.mounts.includes(sh.m)){if(S.mount!==sh.m){S.mount=sh.m;save();G.rearT=G.rearMax=30;SFX.buy();banner(`<div class="bt">${gx('تركب','تركبين')} الآن ${M.n}</div><div class="bs">${M.d}</div>`,2400)}else banner(`<div class="bs">${gx('أنت تركب','أنتِ تركبين')} ${M.n}</div>`,1400)}
    else if(S.gems>=M.cost){S.gems-=M.cost;S.mounts.push(sh.m);S.mount=sh.m;save();updateTop&&updateTop();G.rearT=G.rearMax=34;G.flash=6;SFX.win();for(let k=0;k<30;k++)P({t:'star',x:sh.x+rnd(-20,20),y:GY-rnd(10,60),vx:rnd(-1,1),vy:rnd(-1.5,-.2),life:30,col:'holy',s:1.6});banner(`<div class="bt">${gx('حصلت','حصلتِ')} على ${M.n}!</div><div class="bs">${M.d}</div>`,3000)}
    else banner(`<div class="bt">${M.n}</div><div class="bs">تحتاج ${M.cost} جوهرة · لديك ${S.gems}. ${gx('أنجز','أنجزي')} المهام واهزم الوحوش العملاقة لتجمع الجواهر</div>`,2800);G.foot&&G.horse&&(G.horse.call=1);return true}
  for(const r of G.props){if(r.k!=='river'||!r.ferry)continue;const xL=r.x-r.w/2,xR=r.x+r.w/2,nearL=Math.abs(hx-xL)<30,nearR=Math.abs(hx-xR)<30;if(!nearL&&!nearR&&G.boat!==r)continue;
    if(G.boat===r)return true;
    if(!G.foot){banner(`<div class="bs">${gx('انزل','انزلي')} عن الحصان أولًا (زر الحصان) لتركب القارب</div>`,2200);return true}
    const side=nearL?-1:1,bank=side<0?xL+FM:xR-FM;if(Math.abs(r.bx-bank)>4){r.call=bank;banner('<div class="bs">القارب قادم إليك…</div>',1400);return true}
    if(!r.fixed){if(G.purse<2){banner(`<div class="bs">القارب مكسور · إصلاحه بعملتين ${ic('coin')}</div>`,2000);return true}G.purse-=2;r.fixed=1;gHud();SFX.buy()}
    G.boat=r;G.hx=r.bx;if(G.horse&&Math.abs(G.horse.x-hx)<120)G.horse.onb=1;SFX.click();banner(`<div class="bs">${gx('جدّف','جدّفي')} بالأسهم إلى الضفة الأخرى</div>`,2000);return true}
  return false}
function toggleMount(){if(!G||G.over||G.boat||G.sail)return;if(!G.foot){G.foot=true;G.horse={x:G.hx-G.face*6,face:G.face,t:0,walk:0,run:0};G.vx=0;SFX.click();banner(`<div class="bs">${gx('نزلت','نزلتِ')} عن الحصان · ${gx('اقطع','اقطعي')} الأشجار واركب القوارب</div>`,1800)}
  else{const h=G.horse;if(!h||Math.abs(h.x-G.hx)<26){G.foot=false;G.horse=null;G.rearT=G.rearMax=26;SFX.buy()}else{h.call=1;banner('<div class="bs">الحصان قادم إليك…</div>',1200)}}}
function MSPD(){return curMount().sp||1}

/* ================= PER-FRAME LIFE UPDATE ================= */
function lifeUpdate(dt,prevX){thiefUpdate(dt);scenUpdate(dt);const I=G.I,MO=curMount(),ax=(G.keys.r?1:0)-(G.keys.l?1:0);
  if(G.rearT>0)G.rearT-=dt;
  // flight
  const fly=!G.foot&&!G.boat&&MO.fly&&Math.abs(G.vx)>1.6;G.alt=(G.alt||0)+((fly?28:0)-(G.alt||0))*Math.min(1,.05*dt);if(G.alt<.2)G.alt=0;
  if(MO.wings&&G.alt>4&&Math.random()<.2)P({t:'glow',x:G.hx-G.face*6,y:GY-30-G.alt,life:10,col:'rgba(220,235,255,.5)',s:4});
  if(MO.heal&&!G.foot){G.healT=(G.healT||0)+dt;if(G.healT>420){G.healT=0;if(G.hp<G.maxhp){G.hp++;gHud();P({t:'star',x:G.hx,y:GY-50,vx:0,vy:-.4,life:24,col:'holy',s:2})}}}
  if(MO.fire&&!G.foot&&Math.abs(G.vx)>1.6){for(const r of G.props)if(r.k==='beast'&&r.alive&&r.kk!=='a'&&Math.abs(r.x-(G.hx-G.face*12))<12&&!(r.burn>0)){r.burn=120}}
  // boat
  if(G.boat){const r=G.boat,xL=r.x-r.w/2+FM,xR=r.x+r.w/2-FM;r.bx=Math.max(xL,Math.min(xR,r.bx+ax*.95*dt));G.hx=r.bx;G.vx=ax*.6;G.walk+=Math.abs(ax)*dt;
    if((r.bx<=xL&&ax<0)||(r.bx>=xR&&ax>0)){G.disT=(G.disT||0)+dt;if(G.disT>14){G.disT=0;G.boat=null;G.hx=ax<0?r.x-r.w/2-14:r.x+r.w/2+14;if(G.horse&&G.horse.onb){G.horse.onb=0;G.horse.x=G.hx-ax*10;G.horse.face=ax}SFX.click()}}else G.disT=0}
  // ferry call / clamp
  for(const r of G.props){if(r.k!=='river'||!r.ferry)continue;if(r.bx===undefined||r.bx<r.x-r.w/2+FM-1)r.bx=r.x-r.w/2+FM;if(r.bx>r.x+r.w/2-FM+1)r.bx=r.x+r.w/2-FM;if(r.call!==undefined&&G.boat!==r){r.bx+=Math.sign(r.call-r.bx)*Math.min(1.3*dt,Math.abs(r.call-r.bx));if(Math.abs(r.call-r.bx)<.5)r.call=undefined}
    const xL=r.x-r.w/2,xR=r.x+r.w/2;
    if(G.boat!==r&&!(G.alt>10)){if(G.hx>xL-6&&G.hx<xR+6){if(prevX<=r.x){G.hx=Math.min(G.hx,xL-6);G.vx=Math.min(0,G.vx)}else{G.hx=Math.max(G.hx,xR+6);G.vx=Math.max(0,G.vx)}if(!G.foot&&!(G.blockT>0)){G.blockT=200;banner(`<div class="bs">نهر عميق! ${gx('انزل','انزلي')} عن الحصان واركب القارب${MO.fly?'':' أو اركب مطية مجنّحة'}</div>`,2600)}}}
    if(G.horse&&!G.horse.onb&&G.horse.x>xL-4&&G.horse.x<xR+4)G.horse.x=G.horse.x<r.x?xL-4:xR+4;
    for(const b of G.props){if(b.k!=='beast'||!b.alive||b.kk==='a')continue;if(b.x>xL&&b.x<xR){b.x=b.x0<r.x?xL-2:xR+2;b.dir*=-1}}
    for(const g of G.greed){if(g.dead||g.type==='f')continue;if(g.x>xL&&g.x<xR){g.x=g.x<r.x?xL-1:xR+1}}}
  if(G.blockT>0)G.blockT-=dt;
  // horse follow
  if(G.foot&&G.horse&&!G.horse.onb){const h=G.horse;h.t+=dt;if(h.call){const d=G.hx-h.x;h.face=Math.sign(d)||h.face;h.run=1;const st=Math.min(Math.abs(d),3*dt);h.x+=Math.sign(d)*st;h.walk+=st;if(Math.abs(d)<14){h.call=0;h.run=0;G.foot=false;G.horse=null;G.rearT=G.rearMax=26;SFX.buy()}}else h.run=0}
  // sea / ship
  const sx=seaX();if(!G.sail){if(G.hx>sx+78)G.hx=sx+78;if(G.horse&&G.horse.x>sx+70)G.horse.x=sx+70;
    if(G.hx>sx-10&&site('boat').lvl<1&&!(G.boatHint>0)){G.boatHint=500;banner(`<div class="bt">السفينة محطّمة</div><div class="bs">${gx('ادفع','ادفعي')} ${G.I.boatCost} ${ic('coin')} عند الرصيف (زر العملة) ليصلحها البنّاؤون، ثم ${gx('أبحر','أبحري')}</div>`,3400)}
    if(G.hx>sx+66&&(!I.boss||G.bossDead)&&site('boat').lvl>=1){G.sail=1;G.vx=0;banner(`<div class="bt">${gx('أبحرت!','أبحرتِ!')}</div><div class="bs">إلى الجزيرة التالية…</div>`,2400);SFX.win()}}
  else{G.sail+=dt;G.hx=sx+78;if(G.sail>170){G.sail=0;winIsland();return true}}
  // trees fall handled in draw; animals
  for(const r of G.props){if((r.k!=='deer'&&r.k!=='sheep')||!r.alive)continue;r.t+=dt;if(r.inv>0)r.inv-=dt;const d=r.x-G.hx,ad=Math.abs(d);let v=0;
    if(ad<(r.k==='deer'?80:46)||r.flee>0){r.flee=Math.max(0,(r.flee||60)-dt);r.dir=Math.sign(d)||1;v=r.k==='deer'?1.55:.8}else{if(Math.abs(r.x-r.x0)>70)r.dir=Math.sign(r.x0-r.x);else if(r.t%220<dt)r.dir=Math.random()<.5?-1:1;v=(r.t%300)<150?.3:0}
    r.sv=(r.sv||0)+(r.dir*v-(r.sv||0))*Math.min(1,.05*dt);r.mv=Math.abs(r.sv)>.03;r.x+=r.sv*dt;r.hop=0}
  // guards fight beasts & greed
  for(const p of G.people){if(p.role!=='guard')continue;if(p.cd>0)p.cd-=dt;let tg=null,best=110;for(const r of G.props)if(r.k==='beast'&&r.alive&&!r.ally&&!(r.vid&&!(qVil(r.vid)||{}).war)&&Math.abs(r.x-p.x)<best&&Math.abs(r.x-p.home)<240){best=Math.abs(r.x-p.x);tg=r}
    for(const g of G.greed)if(!g.dead&&g.type!=='f'&&Math.abs(g.x-p.x)<best){best=Math.abs(g.x-p.x);tg=g}for(const h of (G.thieves||[]))if(!h.dead&&Math.abs(h.x-p.x)<best){best=Math.abs(h.x-p.x);tg=h;h._th=1}
    let goal=tg?tg.x:p.home+Math.sin(p.t/260)*30,sp=tg?1.05:.45;if(tg&&Math.abs(tg.x-p.x)<15){goal=p.x;p.face=Math.sign(tg.x-p.x)||1;if(p.cd<=0){p.cd=42;if(tg.k==='beast')hitBeast(tg,1,'steel',p.face,{small:1});else if(tg._th)hitThief(tg,1,'steel',p.face);else hitGreed(tg,1,'steel',p.face,{small:1});P({t:'spark',x:p.x+p.face*8,y:GY-14,vx:p.face*1.5,vy:-1,g:.1,drag:.95,life:10,col:'#ffffff'})}
      p.hurt=(p.hurt||0)+dt;if(p.hurt>70){p.hurt=0;p.hp=(p.hp||4)-1;puff(p.x,GY-14,5,'#e8464f',1.4);if(p.hp<=0){p.role='vagrant';p.flee=180;p.fdir=-p.face;p.home=p.x-p.face*200;banner('<div class="bs">سقط حارس! جنّد غيره</div>',1400)}}}
    {const gd=goal-p.x,ad=Math.abs(gd);if(ad>(p.moving?1:tg?2:6)){p.dir=Math.sign(gd);p.vs=Math.min(sp,(p.vs||0)+.06*dt);p.x+=p.dir*Math.min(ad,p.vs*dt);p.moving=1;if(!(tg&&Math.abs(tg.x-p.x)<15))p.face=p.dir}else{p.moving=0;p.vs=0}}p.goal=goal}
  // plots self-build & completion
  if(G.boatHint>0)G.boatHint-=dt;
  for(const s of G.sites){if((s.k==='boat'||s.k==='vfort'||s.k==='tentspot'||(s.k==='wall'&&s.vid))&&s.build>=0&&!G.people.some(q=>q.role==='builder'&&q.job===s)){s.build+=dt*(s.k==='boat'?.18:.3);continue}if(s.k!=='plot')continue;if(s.build>=0&&!G.people.some(q=>q.role==='builder'&&q.job===s))s.build+=dt*.32;
    if(s._l===undefined)s._l=s.lvl;if(s.lvl>s._l){s._l=s.lvl;const q=mkP('villager',s.x+12);q.home=s.x;G.people.push(q);if(s.lvl>=2){const g2=mkP('guard',s.x-14);g2.home=s.x;g2.hp=4;G.people.push(g2)}
      banner(`<div class="bt">${ic('house')} ${['','بُني كوخ','صار بيتًا كبيرًا','صار حصنًا'][s.lvl]}!</div><div class="bs">${s.lvl>=2?'انضمّ حارس وقروي جديد':'انضمّ قروي جديد'} · ضريبة ${s.lvl} ${ic('coin')} كل صباح</div>`,2600);gHud()}}
  return false}
function lifeDawn(){for(const s of G.sites)if(s.k==='plot'&&s.lvl>0)for(let k=0;k<s.lvl;k++)dropCoin(s.x+(k-s.lvl/2)*5,GY-30,(Math.random()-.5)*2);
  for(const r of G.props)if((r.k==='deer'||r.k==='sheep'||r.k==='fox')&&!r.alive){r.respawn=(r.respawn||1)-1;if(r.respawn<=0){r.alive=1;r.hp=r.k==='deer'?2:1;r.x=r.x0}}}

/* ================= ISLAND GENERATION EXTRAS ================= */
function lifeIsland(si,I,sites,props,people,R){const b=STAGES[si].b;
  // convert houses into buildable plots
  for(let i=props.length-1;i>=0;i--){const p=props[i];if(p.k!=='house'||(p.kind!=='cottage'&&p.kind!=='house'))continue;if(Math.abs(p.x)<700||R()<.55){props.splice(i,1);sites.push({k:'plot',x:p.x,lvl:Math.abs(p.x)<700?0:(R()<.5?0:1),paid:0,build:-1,v:p.v||0})}}
  // ferries: every other river becomes wide with a boat
  const rivers=props.filter(r=>r.k==='river').sort((a,b2)=>a.x-b2.x);rivers.forEach((r,i)=>{if(i%2===1||rivers.length===1&&si%2){const nw=260;if(!sites.some(s=>Math.abs(s.x-r.x)<nw/2+40)){r.ferry=1;r.w=nw;r.bx=r.x-nw/2+12}}});
  for(let i=props.length-1;i>=0;i--){const p=props[i];if(['tree','grass','boulder','rabbit','house','camp','chest','ruins','wheat','fence','hay','windmill','crag'].includes(p.k)&&rivers.some(r=>r.ferry&&Math.abs(p.x-r.x)<r.w/2+(p.w?p.w/2:0)+20))props.splice(i,1)}
  for(const p of props)if(p.k==='beast'){const fr=rivers.find(r=>r.ferry&&Math.abs(p.x-r.x)<r.w/2+10);if(fr){p.x=p.x0=fr.x+fr.w/2+30}}
  // village clusters: wells, statues, sheep, guards
  const xs=sites.filter(s=>s.k==='plot').map(s=>s.x).concat(props.filter(p=>p.k==='house').map(p=>p.x)).sort((a,b2)=>a-b2);const cl=[];xs.forEach(x=>{const c2=cl[cl.length-1];if(c2&&x-c2[c2.length-1]<160)c2.push(x);else cl.push([x])});
  const busyAt=(x,m)=>sites.some(s=>Math.abs(s.x-x)<m)||props.some(p=>['house','river','portal','lair','camp','chest','ruins','shrine','well','statue2'].includes(p.k)&&Math.abs(p.x-x)<(p.k==='river'?p.w/2+m:m));
  cl.forEach((c2,ci)=>{const cx=(c2[0]+c2[c2.length-1])/2;for(const dx of [46,-46,92,-92,0]){const x=Math.round(cx+dx);if(!busyAt(x,22)){props.push({k:'well',x});break}}
    if(c2.length>1||R()<.5)for(const dx of [-70,70,120,-120]){const x=Math.round(cx+dx);if(!busyAt(x,26)){props.push({k:'statue2',x});break}}
    if(b!==3&&ci%2===0)for(let k=0;k<2;k++){const x=Math.round(cx+(R()-.5)*160);props.push({k:'sheep',x,x0:x,hp:1,alive:1,t:R()*99,dir:1})}
    for(let k=0;k<2;k++){const g=mkP('guard',cx+(k?24:-24));g.home=cx;g.hp=4;people.push(g)}
    {const nh=1+(R()<.5?1:0);for(let k=0;k<nh;k++){const x=Math.round(cx+(k?-1:1)*(60+R()*50));props.push({k:'nhorse',x,x0:x,coat:NCOATS[Math.floor(R()*NCOATS.length)],rider:k===0&&R()<.55?(R()<.5?'farmer':'villager'):null,dir:R()<.5?-1:1,t:R()*500,hij:R()<.4?1:0,v:(R()*3)|0})}}});
  for(const z of (props._zones||[]))if(z.t==='forest'&&b!==3)for(let k=0;k<2;k++){const x=Math.round(z.x0+(z.x1-z.x0)*(.2+R()*.6));props.push({k:'deer',x,x0:x,hp:2,alive:1,t:R()*99,dir:1})}
  for(let k=0;k<2;k++){const g=mkP('guard',k?60:-60);g.home=k?120:-120;g.hp=4;people.push(g)}
  // mount shrine
  const m=MLIST[si%MLIST.length];for(let k=0;k<30;k++){const x=(si%2?-1:1)*Math.round(760+k*47+R()*40);if(Math.abs(x)<I.half-600&&!busyAt(x,40)){props.push({k:'shrine',x,m});break}}}

/* ================= ISLAND MAP ================= */
function drawArchipelago(cv){const R2=2,W=560,H=330;cv.width=W*R2;cv.height=H*R2;const c=cv.getContext('2d');c.setTransform(R2,0,0,R2,0,0);
  const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1a3a5c');g.addColorStop(1,'#0c1f36');c.fillStyle=g;c.fillRect(0,0,W,H);
  for(let k=0;k<200;k++){const x=(k*97)%W,y=(k*53)%H;c.strokeStyle='rgba(160,200,240,.1)';c.lineWidth=.8;c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+4,y-2,x+8,y);c.stroke()}
  const NS=STAGES.length,ROW=H/5,pos=i=>{const b=STAGES[i].b,k=i-b*PER,rtl=b%2===1,t=k/(PER-1),x=rtl?W-26-t*(W-70):44+t*(W-70);return[x,ROW*b+ROW*.58+Math.sin(k*1.3+b)*ROW*.16]};
  c.setLineDash([2,3]);c.strokeStyle='rgba(255,240,200,.4)';c.lineWidth=1;c.beginPath();for(let i=0;i<NS;i++){const[x,y]=pos(i);i?c.lineTo(x,y):c.moveTo(x,y)}c.stroke();c.setLineDash([]);
  const BC=[['#4a8a3a','#7ab84e'],['#c8d6e6','#ffffff'],['#d8b06a','#f0d48a'],['#4a2a24','#c8502a'],['#b8a0e0','#f4c8e8']];
  WORLDS.forEach((w,b)=>{c.font='bold 9px sans-serif';c.textAlign=b%2?'right':'left';c.fillStyle='rgba(246,230,184,.9)';c.fillText(w.name+(S.unlocked[b]||S.openAll?'':' 🔒'),b%2?W-8:8,ROW*b+12)});
  for(let i=0;i<NS;i++){const[x,y]=pos(i),st=STAGES[i],b=st.b,open=S.openAll||(S.unlocked[b]&&i<=S.cleared),cur=G&&G.si===i,r=rng(i*7+3),rr=6+r()*1.6,done=(S.stars||{})[i];
    const blob=(q0,col)=>{c.fillStyle=col;c.beginPath();for(let k=0;k<=10;k++){const a=k/10*Math.PI*2,q=rr+q0+r()*1.2;k?c.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q*.7):c.moveTo(x+Math.cos(a)*q,y+Math.sin(a)*q*.7)}c.fill()};
    blob(2.2,'rgba(255,240,200,.22)');blob(.8,'#e8d29a');c.fillStyle=open?BC[b][0]:'#525262';c.beginPath();c.ellipse(x,y-.5,rr*.78,rr*.5,0,0,7);c.fill();
    if(st.o.boss){c.fillStyle=open?'#d8d0c0':'#7a7a86';c.fillRect(x-2,y-7,4,5);c.fillRect(x-3,y-8,1.5,2);c.fillRect(x+1.5,y-8,1.5,2)}else{c.fillStyle=open?BC[b][1]:'#727282';c.beginPath();c.moveTo(x-2.5,y-.5);c.lineTo(x,y-4.5);c.lineTo(x+2.5,y-.5);c.fill()}
    if(cur){c.strokeStyle='#f2b632';c.lineWidth=1.8;c.beginPath();c.ellipse(x,y,rr+4,(rr+4)*.75,0,0,7);c.stroke();c.fillStyle='#8a5c34';c.fillRect(x+rr+2,y+2,7,2.4);c.fillStyle='#f4efe0';c.beginPath();c.moveTo(x+rr+5,y+1.6);c.lineTo(x+rr+5,y-4.4);c.lineTo(x+rr+9,y+1);c.fill()}
    c.font='bold 6px sans-serif';c.textAlign='center';c.fillStyle=done?'#f2d27a':open?'#ffffff':'#8a8a98';c.fillText(String(i+1),x,y+rr+5.5)}
  c.font='bold 9px sans-serif';c.textAlign='center';c.fillStyle='#f6e6b8';c.fillText('N',W-14,H-26);c.strokeStyle='#f6e6b8';c.beginPath();c.moveTo(W-14,H-22);c.lineTo(W-14,H-8);c.moveTo(W-20,H-15);c.lineTo(W-8,H-15);c.stroke()}
function drawIslandStrip(cv){const R2=2,W=560,H=74;cv.width=W*R2;cv.height=H*R2;const c=cv.getContext('2d');c.setTransform(R2,0,0,R2,0,0);const I=G.I,X=x=>8+(x+I.half)/(I.half*2)*(W-16),gy=44;
  c.fillStyle='#16233a';c.fillRect(0,0,W,H);c.fillStyle='#24486e';c.fillRect(0,gy+4,W,H);
  (G.zones||[]).forEach(z=>{c.fillStyle=z.t==='mount'?'#8a94a6':z.t==='plains'?'#a8c46a':z.t==='forest'?'#3e7a3a':'#d8c08a';c.fillRect(X(z.x0),gy-6,Math.max(1,X(z.x1)-X(z.x0)),10);if(z.t==='mount'){c.fillStyle='#c8d0dc';const m=X((z.x0+z.x1)/2);c.beginPath();c.moveTo(m-14,gy-6);c.lineTo(m,gy-24);c.lineTo(m+14,gy-6);c.fill()}});
  const sx=seaX();c.fillStyle='#24486e';c.fillRect(X(sx),gy-6,W-X(sx),12);
  const ico=(x,col,h,lbl)=>{c.fillStyle=col;c.fillRect(x-1.5,gy-6-h,3,h);if(lbl){c.font='bold 7px sans-serif';c.textAlign='center';c.fillStyle='#f6e6b8';c.fillText(lbl,x,gy-8-h)}};
  for(const r of G.props){if(r.k==='river'){c.fillStyle='#5ab4f0';c.fillRect(X(r.x-r.w/2),gy-6,Math.max(2,X(r.x+r.w/2)-X(r.x-r.w/2)),12);if(r.ferry){c.fillStyle='#8a5c34';c.fillRect(X(r.bx)-2,gy-8,4,2)}}
    else if(r.k==='portal')ico(X(r.x),r.dead?'#5a5466':'#b06cf0',10);else if(r.k==='npc')ico(X(r.x),r.role==='elder'?'#e8c070':'#f2c24a',6,r.role==='info'&&r.step<=r.req.length?'؟':'');else if(r.k==='rvil')ico(X(r.x),r.state==='allied'?'#5ac85a':'#e8464f',13,'⚑');else if((r.k==='relic'&&!r.got||r.k==='gemchest'&&!r.open)&&!r.hidden)ico(X(r.x),r.k==='relic'?'#ffd060':'#7fd3f7',12,'✦');else if(r.k==='lair')ico(X(r.x),'#e8464f',r.big?12:7);else if(r.k==='shrine'&&!r.hidden)ico(X(r.x),'#7ad8ff',12,'⛩');else if(r.k==='flag')ico(X(r.x),r.on?'#f2b632':'#8a8296',9);else if(r.k==='house'&&r.kind==='palace')ico(X(r.x),'#f2d27a',14,'🏰');else if(r.k==='house')ico(X(r.x),'#c89a5a',6)}
  for(const s of G.sites){if(s.k==='plot')ico(X(s.x),s.lvl?'#e8c070':'#6e5a40',4+s.lvl*3);if(s.k==='town')ico(X(s.x),'#ffe9b0',10+s.lvl*2,'👑')}
  c.fillStyle='#ffffff';c.beginPath();c.moveTo(X(G.hx),gy+12);c.lineTo(X(G.hx)-4,gy+19);c.lineTo(X(G.hx)+4,gy+19);c.fill();c.font='bold 7px sans-serif';c.textAlign='center';c.fillText(gx('أنت','أنتِ'),X(G.hx),gy+27);
  c.fillStyle='#f4efe0';c.fillText('⛵',X(sx)+14,gy+2)}
function openMap(){if(!G)return;G.paused=true;S.mounts=S.mounts||['horse'];const own=S.mounts.map(m=>`<button class="btn ${S.mount===m?'gold':'ghost'}" data-mount="${m}" style="font-size:13px;padding:6px 10px">${MOUNTS[m].n}</button>`).join('');
  modal(`<canvas id="mapA" style="width:100%;height:auto;border:3px solid var(--ink);border-radius:8px;display:block"></canvas>
   <div style="font-weight:800;margin:6px 0 2px">${G.si+1}. ${STAGES[G.si].n}</div><div class="feat" style="margin:2px 0 6px">${(S.lore||[]).length?`<details style="margin:4px 0"><summary style="font-weight:800;cursor:pointer">${ic('scroll')} صفحات الحكاية (${S.lore.length}/8)</summary>${S.lore.map(l=>`<p class="note" style="margin:4px 0">${l}</p>`).join('')}</details>`:''}${qGoals().map(g=>`<span class="tag" style="${g.ok?'color:#2a8a3a':''}">${g.ok?'✓ ':''}${g.t}: ${g.v}</span>`).join('')}</div><canvas id="mapB" style="width:100%;height:auto;border:3px solid var(--ink);border-radius:8px;display:block"></canvas>
   <div class="feat" style="margin-top:6px"><span class="tag">👑 المملكة</span><span class="tag">🟫 أرض للبناء</span><span class="tag" style="color:#2a7ab4">▮ نهر/قارب</span><span class="tag" style="color:#b06cf0">▮ بوابة</span><span class="tag" style="color:#c0392b">▮ وكر</span><span class="tag">⛩ مطية أسطورية</span><span class="tag">${G.wood||0} خشب</span></div>
   <div style="font-weight:800;margin-top:8px">مطاياك:</div><div class="row" style="flex-wrap:wrap;gap:6px">${own}</div>
   <div style="font-weight:800;margin-top:8px">الطاقم: ${crewList().length} · الولاء ${G.loyal??80}% · الأجر كل صباح ${Math.ceil(crewList().length/4)} ${ic('coin')}</div><button class="btn ghost" data-gift style="font-size:13px;padding:6px 10px">هدية للطاقم · 3 ${ic('gem')}</button>
   <button class="btn gold wide" data-mapclose style="margin-top:8px">▶ ${gx('تابع','تابعي')} اللعب</button>`,'خريطة الجزر');
  try{drawArchipelago($('#mapA'));drawIslandStrip($('#mapB'))}catch(e){console.error(e)}}

function dayClears(){return S.dayClr&&S.dayClr.d===S.day?S.dayClr.n:0}
function needXP(si){return Math.round(si*38)}
function gateMsg(si){if(S.openAll||(S.stars||{})[si])return null;if(dayClears()>=3)return gx('أنهيت 3 جزر جديدة اليوم · عُد غدًا لتكمل رحلتك','أنهيتِ 3 جزر جديدة اليوم · عودي غدًا لتكملي رحلتك');{const req=SHIPREQ[STAGES[si].b];if((S.ship||1)<req)return `تحتاج «${SHIPS[req].n}» للإبحار إلى «${WORLDS[STAGES[si].b].name}» · ${gx('طوّر','طوّري')} سفينتك من الميناء في صفحة المغامرة`}const n=needXP(si);if((S.xp||0)<n)return `تحتاج ${n-(S.xp||0)} نقطة أخرى من المهام لفتح هذه الجزيرة`;return null}
function migrateStages(){if((S.sv||1)>=2)return;const slots=[0,3,5,8,11,14,16,19],ns={};for(const k in (S.stars||{})){const o=+k,b=Math.floor(o/8),j=o%8;ns[b*20+slots[j]]=S.stars[k]}S.stars=ns;let c=0;while(S.stars[c])c++;S.cleared=c;S.run=null;S.sv=2;save()}
/* ================= ECONOMY: treasury, crew, thieves, ships ================= */
const SHIPS=[null,{n:'قارب الصيد',cap:30,m:1},{n:'السفينة الشراعية',cap:50,gold:250,gems:15,m:2},{n:'السفينة الحربية',cap:80,gold:600,gems:40,m:2,can:1},{n:'السفينة الملكية',cap:120,gold:1100,gems:90,m:3,can:1,gold2:1}];
const SHIPREQ=[1,2,2,3,4];
function pcap(){return (SHIPS[S.ship||1]||SHIPS[1]).cap}
function crewList(){return G.people.filter(p=>['villager','archer','builder','farmer','knight','guard'].includes(p.role))}
function econDawn(){const crew=crewList(),wage=Math.ceil(crew.length/4);if(!wage)return;
  if(G.purse>=wage){G.purse-=wage;G.loyal=Math.min(100,(G.loyal??80)+8);banner(`<div class="bs">${gx('دفعت','دفعتِ')} أجور الطاقم (${wage} ${ic('coin')}) · الولاء ${G.loyal}%</div>`,2600)}
  else{G.loyal=Math.max(0,(G.loyal??80)-25);const q=crew[(Math.random()*crew.length)|0];if(q&&G.loyal<60){q.role='vagrant';q.flee=200;q.fdir=Math.random()<.5?-1:1;q.home=q.x+q.fdir*300;q.job=null}
    banner(`<div class="bt">لم تكفِ العملات لأجور الطاقم</div><div class="bs">الولاء ${G.loyal}%${G.loyal<60?' · غادر أحد أفراد الطاقم':''} · اجمع العملات أو ${gx('قدّم','قدّمي')} هدية من الخريطة</div>`,3200)}gHud()}
function spawnThief(){const side=Math.random()<.5?-1:1,x=G.hx+side*(VW*.65+40);G.thieves.push({x,side,hp:2,carry:0,t:0,flee:0,inv:0,dir:-side,v:(Math.random()*4)|0});banner(`<div class="bs">لص مقنّع يقترب! ${gx('احمِ','احمي')} عملاتك</div>`,2200)}
function thiefUpdate(dt){if(!G.thieves)G.thieves=[];if(G.sail||G.over||G.si<5)return;G.thT=(G.thT??(1500+Math.random()*1500))-dt;
  if(G.thT<=0){G.thT=(1900+Math.random()*2600)*(1-Math.min(.5,STAGES[G.si].d/80));if(G.thieves.length<3&&Math.abs(G.hx)>120)spawnThief()}
  for(const h of G.thieves){h.t+=dt;if(h.inv>0)h.inv-=dt;const d=G.hx-h.x,ad=Math.abs(d);let v;
    if(h.flee||h.carry){h.dir=-Math.sign(d)||h.dir;v=1.75;if(ad>620)h.gone=1}
    else{const c=G.coins.find(c=>!c.taken&&!c.home&&c.t>20&&Math.abs(c.x-h.x)<70);if(c){h.dir=Math.sign(c.x-h.x)||1;v=1.3;if(Math.abs(c.x-h.x)<6){c.taken=1;h.carry++;if(h.carry>=3)h.flee=1}}else{h.dir=Math.sign(d)||1;v=1.25}
      if(ad<11&&G.inv<=0&&!(G.alt>10)&&!G.boat&&G.purse>0){const n=Math.min(G.purse,2+Math.floor(STAGES[G.si].d/8));G.purse-=n;h.carry+=n;h.flee=1;G.inv=40;SFX.hit();for(let k=0;k<n;k++)puff(G.hx,GY-26,3,'#f5c542',1.6);banner(`<div class="bt">${gx('سرق اللص','سرق اللص')} ${n} ${ic('coin')}!</div><div class="bs">${gx('الحق','الحقي')} به ${gx('واضربه','واضربيه')} لتستعيدها</div>`,2400);gHud()}}
    h.x+=h.dir*v*dt;h.moving=1;
    for(const r of G.props){if(r.k!=='river'||!r.ferry)continue;const xL=r.x-r.w/2,xR=r.x+r.w/2;if(h.x>xL&&h.x<xR){h.x=h.x<r.x?xL-1:xR+1;if(h.carry)h.gone=1}}}
  G.thieves=G.thieves.filter(h=>!h.gone&&!h.dead)}
function hitThief(h,d,el,dir){if(h.dead||h.inv>0)return false;h.hp-=d;h.inv=14;h.x+=(dir||1)*8;puff(h.x,GY-14,8,'#ffffff',1.6);SFX.hit();
  if(h.hp<=0){h.dead=1;const n=h.carry+1;for(let k=0;k<n;k++)dropCoin(h.x,GY-20,(Math.random()-.5)*2.6);puff(h.x,GY-12,18,'#3a3448',2.4);banner(`<div class="bs">${gx('أمسكت','أمسكتِ')} باللص! ${gx('استعدت','استعدتِ')} ${n} ${ic('coin')}</div>`,2000)}else h.flee=1;return true}
function drawThieves(B,toS,t){for(const h of (G.thieves||[])){const sx=toS(h.x);if(sx<-30||sx>VW+30)continue;const fr=(h._d=(h._d||0)+Math.min(6,Math.abs(h.x-(h._lx??h.x))),h._lx=h.x,1+Math.floor(h._d/2.3)%8),spr=subjSprite('thief',fr,1,0),fl=h.dir<0;
  B.fillStyle='rgba(0,0,0,.28)';B.beginPath();B.ellipse(sx,GY,5,1.3,0,0,7);B.fill();if(h.inv>0&&Math.floor(t/50)%2)B.globalAlpha=.5;
  B.save();B.translate(sx,GY);B.scale(fl?-KS:KS,KS);B.drawImage(spr.cv,-9,-26,18,28);B.restore();B.globalAlpha=1;
  if(h.carry){B.fillStyle='#8a6a3a';B.beginPath();B.arc(sx-h.dir*4,GY-20,3.4,0,7);B.fill();B.fillStyle='#6a4a24';B.fillRect(sx-h.dir*4-1,GY-24,2,1.6);B.fillStyle='#f5c542';B.fillRect(sx-h.dir*4-.5,GY-21,1,1)}
  B.fillStyle='#e8464f';B.fillRect(sx-1,GY-34+Math.sin(t/150)*1,2,3)}}
function harborHTML(){const lv=S.ship||1,cur=SHIPS[lv],nx=SHIPS[lv+1];
  return `<div class="card">${cardH('الخزينة والميناء')}<div class="card-b light"><div class="row" style="align-items:center;gap:12px"><canvas data-ship="${lv}" style="width:120px;height:auto;border:3px solid var(--ink);border-radius:8px;background:#9cc0dc"></canvas>
   <div style="flex:1;min-width:0"><div style="font-weight:900;font-size:17px">${cur.n}</div><div class="note" style="margin:2px 0">${gx('تحمل','تحملين')} حتى <b>${cur.cap}</b> ${ic('coin')} إلى كل جزيرة</div>
   <div style="font-weight:800">${ic('coin')} في الخزينة: <span class="num">${S.gold||0}</span></div></div></div>
   <p class="note" style="margin:8px 0">العملات تأتي من إنجاز المهام. ${gx('تدخل','تدخلين')} بها الجزر ${gx('لتبني','لتبني')} وتجنّد وتدفع أجور الطاقم، وما يبقى يعود إلى الخزينة. احذر اللصوص!</p>
   ${nx?`<button class="btn ${((S.gold||0)>=nx.gold&&S.gems>=nx.gems)?'gold':'ghost'} wide" data-shipup>${gx('طوّر','طوّري')} إلى ${nx.n} · ${nx.gold} ${ic('coin')} + ${nx.gems} ${ic('gem')}</button><p class="note" style="margin:6px 0 0">${nx.n}: ${gx('تحمل','تحملين')} ${nx.cap} عملة${SHIPREQ.indexOf(lv+1)>=0?' · تفتح الإبحار إلى «'+WORLDS[SHIPREQ.indexOf(lv+1)].name+'»':''}</p>`:'<p class="note" style="margin:0">⭐ أقوى سفينة في البحار!</p>'}
   </div></div>`}
var WTH={},WTQ=[];function wtPaint(cv,src){cv.width=src.width;cv.height=src.height;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;c.drawImage(src,0,0)}
function worldThumb(cv,w){const k=w+'_'+RS;if(WTH[k]){wtPaint(cv,WTH[k]);return}drawScene(cv.getContext('2d'),w,320,180,0,null);WTQ.push([cv,w,k]);if(WTQ.length===1)setTimeout(wtRun,60)}
function wtRun(){const it=WTQ[0];if(!it)return;const[cv,w,k]=it;try{if(!WTH[k]){const src=mkc(320*RS,180*RS);previewStage(src,Math.min(STAGES.length-1,w*PER+PER-1));WTH[k]=src}if(cv.isConnected)wtPaint(cv,WTH[k])}catch(e){}WTQ.shift();for(const q of WTQ)if(WTH[q[2]]&&q[0].isConnected)wtPaint(q[0],WTH[q[2]]);if(WTQ.length)setTimeout(wtRun,30)}
function drawShipCanvas(cv,lv){try{const sp=shipSprite(0,lv),W=Math.round(sp.W+40),H=Math.round(sp.H*1.22),R=3;cv.width=W*R;cv.height=H*R;const c=cv.getContext('2d');c.imageSmoothingEnabled=false;c.setTransform(R,0,0,R,0,0);
  const wy=Math.round(sp.H*.92);let g=c.createLinearGradient(0,0,0,wy);g.addColorStop(0,'#7a8eb0');g.addColorStop(.7,'#c8c4cc');g.addColorStop(1,'#e8d2b8');c.fillStyle=g;c.fillRect(0,0,W,wy);
  c.fillStyle='rgba(255,240,210,.9)';c.beginPath();c.arc(W*.78,wy*.42,6,0,7);c.fill();
  for(let k=0;k<3;k++){c.fillStyle=k%2?'#b8b4c4':'#a6a2b6';const x=(k*61+10)%W,y=wy*.2+k*7;c.fillRect(x,y,26,4);c.fillRect(x+5,y-3,14,3)}
  c.fillStyle='#4a5068';for(let x=0;x<W;x++){const h=6+Math.abs(Math.sin(x*.07))*8+Math.sin(x*.23)*2;c.fillRect(x,wy-h,1,h)}
  const pa=pxArt(sp.cv,0,0,sp.cv.width,sp.cv.height,Math.round(sp.W),Math.round(sp.H)),sx=20,sy=wy-Math.round(sp.H*.86);
  c.fillStyle='#3e5a74';c.fillRect(0,wy,W,H-wy);
  c.save();c.globalAlpha=.38;for(let y=0;y<H-wy;y+=2){const off=Math.round(Math.sin(y*.6)*1.2);c.drawImage(pa,0,Math.max(0,pa.height-1-(y+Math.round(sp.H*.14))),pa.width,2,sx+off,wy+y,pa.width,2)}c.restore();
  c.fillStyle='rgba(60,90,120,.35)';c.fillRect(0,wy,W,H-wy);for(let k=0;k<26;k++){c.fillStyle='rgba(235,245,255,.5)';c.fillRect((k*37)%W,wy+3+(k*13)%(H-wy-4),2+(k%3),1)}
  c.drawImage(pa,sx,sy);c.fillStyle='rgba(235,245,255,.6)';c.fillRect(sx+4,wy,pa.width-8,1);return}catch(e){}
  try{const sp=shipSprite(0,lv);cv.width=sp.cv.width;cv.height=sp.cv.height;const c=cv.getContext('2d');c.fillStyle='#9cc0dc';c.fillRect(0,0,cv.width,cv.height);c.fillStyle='#3e6a8a';c.fillRect(0,cv.height*.82,cv.width,cv.height);c.drawImage(sp.cv,0,0)}catch(e){}}

/* ================= SCENERY+: waterfalls, statues, stalls, creatures ================= */
function drawFalls(B,r,sx,t){const sp=cragSprite(G.b,r.v||0),s=1.25,W=sp.W*s,H=sp.H*s,x0=sx-W/2,top=GY-H+3;B.drawImage(sp.cv,x0,top,W,H);
  if(G.b===3){const fx=sx+(r.wx||0),y0=top+H*.28;const g=B.createLinearGradient(fx-5,0,fx+5,0);g.addColorStop(0,'rgba(255,90,20,.0)');g.addColorStop(.5,'rgba(255,150,40,.95)');g.addColorStop(1,'rgba(255,90,20,0)');B.fillStyle=g;B.fillRect(fx-6,y0,12,GY-y0);for(let k=0;k<8;k++){const yy=y0+((t/9+k*17)%(GY-y0));B.fillStyle='rgba(255,230,140,.9)';B.fillRect(fx-1.5+Math.sin(k)*2,yy,2,4)}return}
  drawFallsW(B,r,sx,t,top,H);return;
  const fx=sx+(r.wx||0),y0=top+H*.26,w=r.big?14:10;const g=B.createLinearGradient(fx-w/2,0,fx+w/2,0);g.addColorStop(0,'rgba(170,215,240,.15)');g.addColorStop(.3,'rgba(220,240,255,.85)');g.addColorStop(.7,'rgba(200,230,250,.85)');g.addColorStop(1,'rgba(170,215,240,.15)');
  B.fillStyle=g;B.beginPath();B.moveTo(fx-w*.35,y0);B.lineTo(fx+w*.35,y0);B.lineTo(fx+w*.6,GY);B.lineTo(fx-w*.6,GY);B.closePath();B.fill();
  for(let k=0;k<14;k++){const L=GY-y0,yy=y0+((t/5+k*L/14)%L),xx=fx+((k*7)%5-2)*w*.12;B.fillStyle=`rgba(255,255,255,${.5+(k%3)*.15})`;B.fillRect(Math.round(xx*RS)/RS,yy,.6,5+(k%3)*2)}
  B.fillStyle='rgba(255,255,255,.75)';B.fillRect(fx-w*.4,y0-.6,w*.8,1.2)}
function drawFallsFoam(B,r,sx,t){if(G.b===3)return;drawFallsFoamW(B,r,sx,t);return;const sp=cragSprite(G.b,r.v||0),fx=sx+(r.wx||0),w=r.big?14:10;B.fillStyle='rgba(120,180,210,.85)';B.beginPath();B.ellipse(fx,GY+1.5,w*1.9,2.6,0,0,7);B.fill();
  for(let k=0;k<7;k++){const a=t/300+k*.9,rr=2+((k*3)%3);B.fillStyle='rgba(255,255,255,.7)';B.beginPath();B.arc(fx+Math.cos(a)*w*.9,GY-1-Math.abs(Math.sin(a*1.3))*3,rr,0,7);B.fill()}
  const g=B.createRadialGradient(fx,GY-6,1,fx,GY-6,26);g.addColorStop(0,'rgba(255,255,255,.35)');g.addColorStop(1,'rgba(255,255,255,0)');B.fillStyle=g;B.fillRect(fx-26,GY-32,52,40)}
function tintSprite(src,ramp){const tmp=mkc(src.width,src.height),tc=tmp.getContext('2d');tc.drawImage(src,0,0);const im=tc.getImageData(0,0,tmp.width,tmp.height),d=im.data,BR=ramp.map(toA);
  for(let i=0;i<d.length;i+=4){if(!d[i+3])continue;const l=(d[i]*.3+d[i+1]*.59+d[i+2]*.11)/255,col=rampPick(BR,Math.min(.999,l*1.4+.12),(i>>2)%tmp.width,((i>>2)/tmp.width)|0);d[i]=col[0];d[i+1]=col[1];d[i+2]=col[2]}tc.putImageData(im,0,0);return tmp}
const STONE_R=['#5a5650','#7a766e','#9e9a90','#c4c0b4','#e6e2d6'],BRONZE_R=['#3a2a18','#5e4424','#86622e','#b08a44','#d8b468'];
function statueSprite2(b,v){if(v===0)return statueSprite(b);const key='st2_'+b+'_'+v+RS;if(HDC[key])return HDC[key];const W=46,H=64,cv=mkc(W*RS,H*RS),c=cv.getContext('2d');
  const P=bPainter(W,H);bSet(P,b,'stat',0);
  if(v===3){P.area(15,52,31,64,null,matShade('marble',15,52,16,12,b),MARBLE);P.area(18,8,28,52,(X,Y)=>Math.abs(X-23)<=5-(52-Y)/44*2.2,matShade('marble',18,8,10,44,b+2),MARBLE);P.area(20,2,26,9,(X,Y)=>Math.abs(X-23)<=(Y-2)/7*3,()=>toA('#e0b048'),['#000']);for(let y=16;y<48;y+=6)P.area(21,y,25,y+1.2,null,()=>.35,MARBLE);P.done();c.drawImage(P.cv,0,0);return HDC[key]={cv,W,H}}
  if(v===2){P.area(4,52,42,64,(X,Y)=>Y>54-Math.sin((X-4)/38*Math.PI)*2,matShade('marble',4,52,38,12,b),MARBLE);P.area(6,54,40,57,null,()=>[110,170,210],['#000']);P.area(19,30,27,54,null,matShade('marble',19,30,8,24,b+1),MARBLE);P.area(13,28,33,32,(X,Y)=>Y>28+((X-23)/10)**2*2,matShade('marble',13,28,20,4,b+3),MARBLE);P.done();c.drawImage(P.cv,0,0);return HDC[key]={cv,W,H,fountain:1}}
  P.area(10,46,36,64,null,matShade('marble',10,46,26,18,b),MARBLE);P.area(8,44,38,47,null,()=>.85,MARBLE);P.area(8,61,38,64,null,()=>.5,MARBLE);if(v===4){P.area(17,26,29,44,null,matShade('marble',17,26,12,18,b+5),MARBLE)}P.done();c.drawImage(P.cv,0,0);
  const type=v===1?'griffin':'owl',spr=crSprite(type,0,{a:'#b08a44',b:'#d8b468',c:'#86622e',e:'#ffd040'},3,'stat'+type,4),tt=tintSprite(spr.cv,v===1?BRONZE_R:STONE_R);c.imageSmoothingEnabled=true;
  const sw=v===1?40:20,sh=sw*spr.H/spr.W;c.drawImage(tt,(23-sw/2)*RS,((v===1?44:26)-sh+1)*RS,sw*RS,sh*RS);return HDC[key]={cv,W,H}}
function drawStatue2(c,r,sx,t){const sp=statueSprite2(G.b,r.v||0);c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(sx,GY,16,2.2,0,0,7);c.fill();c.drawImage(sp.cv,sx-sp.W/2,GY-sp.H+1,sp.W,sp.H);
  if(sp.fountain){for(let k=0;k<10;k++){const u=((t/700+k/10)%1),side=k%2?1:-1,x=sx+side*u*14,y=GY-sp.H+29-Math.sin(u*Math.PI)*10+u*u*14;c.fillStyle=`rgba(200,235,255,${.85-u*.5})`;c.fillRect(x-.6,y,1.2,1.4)}c.fillStyle='rgba(220,245,255,.8)';c.fillRect(sx-.7,GY-sp.H+22,1.4,7)}}
function stallSprite(b,v){const key='stall'+b+v+RS;if(HDC[key])return HDC[key];const P=bPainter(36,30);bSet(P,b,'stall',v);const wood=['#2e1c10','#4a2e1a','#6a4426','#8a5c34','#a87444'];
  const aw=[['#a8242e','#f4efe0'],['#2a5aa8','#f4efe0'],['#1e7a4a','#f2d27a'],['#5a1a1a','#d8702e'],['#c86aa4','#ffffff']][b];
  for(const x of [3,31])P.area(x,8,x+2,30,null,matShade('plank',x,8,2,22,b),wood);P.area(1,16,35,20,null,matShade('plank',1,16,34,4,b+1),wood);P.area(2,20,34,30,null,matShade('plank',2,20,32,10,b+2),wood);
  P.area(0,4,36,10,(X,Y)=>Y<10-Math.abs(Math.sin(X*.55))*1.2,(X)=>toA(aw[((X/4)|0)%2]),['#000']);P.dark(0,9,36,11,.7,1);
  const goods=[[230,90,60],[250,200,60],[120,180,70],[200,120,220],[240,240,230]];for(let k=0;k<7;k++){const gx2=5+k*4,col=goods[(k+v)%goods.length];P.area(gx2,13,gx2+3,16,(X,Y)=>Math.hypot(X-gx2-1.5,Y-14.5)<1.6,()=>col,['#000'])}
  P.dark(0,27,36,30,1,.6);P.done();return HDC[key]={cv:P.cv,W:36,H:30,win:[],smoke:[],flags:[],lan:[[34,10]],torch:[],yard:[[-22,'crate']],b}}
/* creatures */
CRDEF.bear=[46,32];
function drawSpirit(c,r,sx,t){if(!r.alive)return;const sp=animalSprite('deer',r.mv?1+Math.floor(r.t/4)%8:0,9);const tt=r._tt||(r._tt=tintSprite(sp.cv,['#5a8ac0','#8ab8e8','#bfe0ff','#e8f6ff','#ffffff']));
  c.globalCompositeOperation='lighter';const g=c.createRadialGradient(sx,GY-14,2,sx,GY-14,30);g.addColorStop(0,`rgba(150,220,255,${.35+Math.sin(t/300)*.1})`);g.addColorStop(1,'rgba(150,220,255,0)');c.fillStyle=g;c.fillRect(sx-30,GY-44,60,60);c.globalCompositeOperation='source-over';
  const fl=r.dir<0,y=GY-sp.H+1+(r.hop||0);c.globalAlpha=.92;if(fl){c.save();c.translate(sx+sp.W/2,0);c.scale(-1,1);c.drawImage(tt,0,y,sp.W,sp.H);c.restore()}else c.drawImage(tt,sx-sp.W/2,y,sp.W,sp.H);c.globalAlpha=1;
  if(Math.random()<.25)P({t:'star',x:r.x+rnd(-10,10),y:GY-rnd(4,30),vx:0,vy:-.3,life:24,col:'ice',s:1.2})}
function rabbitSprite(fr,b){const key='rab'+fr+b;if(SPR[key])return SPR[key];const S=3,W=12,H=10,cv=mkc(W*S,H*S),c=cv.getContext('2d');const col=b===1?'#f4f6fa':b===2?'#c8a070':'#9a8a7a',C=rampOf(col),A=[],add=(x,y,r,z,R)=>A.push({x:x*S,y:y*S,r:r*S,z:z*S,ramp:R,fr:0});
  const up=fr===1?-1.4:0;add(5,7+up,2.6,1,C);add(7.6,5.2+up,1.7,2,C);add(3,7.6+up,1.4,1.2,rampOf('#ffffff'));add(8.8,4.6+up,.9,2.4,C);add(6.4,2+up,.75,1.5,C);add(7,1.4+up,.7,1.6,C);add(7.4,2.8+up,.7,1.6,C);blobs(c,W*S,H*S,A,shadeR);
  c.fillStyle='#1a0e08';c.fillRect(8.2*S,4.6*S+up*S,.6*S,.6*S);return SPR[key]={cv,W,H}}
function drawRabbit(c,r,sx,t){if(!r.alive)return;const h=(r.t%90<30)?Math.abs(Math.sin(r.t/5))*3:0,sp=rabbitSprite(h>1?1:0,G.b),fl=r.dir<0;c.fillStyle='rgba(0,0,0,.22)';c.beginPath();c.ellipse(sx,GY,3.4,.9,0,0,7);c.fill();
  if(fl){c.save();c.translate(sx+sp.W/2,0);c.scale(-1,1);c.drawImage(sp.cv,0,GY-sp.H-h+1,sp.W,sp.H);c.restore()}else c.drawImage(sp.cv,sx-sp.W/2,GY-sp.H-h+1,sp.W,sp.H)}
function foxSprite(fr,b){const key='fox'+fr+b+'@'+RS;if(SPR[key])return SPR[key];const S=Math.max(2,RS),W=26,H=16,cv=mkc(W*S,H*S),c=cv.getContext('2d');const C=rampOf(b===1?'#e8ecf2':'#d06a2a'),D=rampOf('#2a1a12'),Wt=rampOf('#f4efe6'),A=[],add=(x,y,r,z,R)=>A.push({x:x*S,y:y*S,r:r*S,z:z*S,ramp:R,fr:0});
  const run=fr>0,a=run?Math.sin(fr*Math.PI/4)*.8:0,leg=(x,sw,z,R)=>{for(let k=0;k<6;k++){const u=k/5;add(x+Math.sin(sw)*u*3,10+u*5,.8,z,R)}};leg(8,-a,0,D);leg(16,a,0,D);
  for(let k=0;k<8;k++)add(8+k*1.3,9-Math.sin(k/7*Math.PI)*.6,2.6,1,C);add(19,7,2.4,2,C);add(21.6,8,1.2,2.2,C);add(17.8,4.6,.9,2.4,C);add(19.6,4.2,.9,2.4,C);for(let k=0;k<6;k++)add(6-k*1.2,7.5+k*.3,1.6+k*.15,.5,k>3?Wt:C);add(20,9,1.2,2.6,Wt);leg(10,a,3,D);leg(18,-a,3,D);
  blobs(c,W*S,H*S,A,shadeR);c.fillStyle='#120a06';c.fillRect(20.2*S,6.6*S,.6*S,.6*S);c.fillRect(22.4*S,7.6*S,.6*S,.5*S);return SPR[key]={cv,W,H}}
function drawFox(c,r,sx,t){if(!r.alive)return;try{const sp=Math.abs(r.x-(r._lx??r.x)),mv=r.mv&&sp>.02;animalRig(c,r,sx,t,'fox',mv?(sp>1.1?'gallop':'trot'):'stand',sp>1.1?20:12,.72,APAL.fox[G.b===1?1:0]);return}catch(e){}r._d=(r._d||0)+Math.min(8,Math.abs(r.x-(r._lx??r.x)));r._lx=r.x;const fr=r.mv?1+Math.floor(r._d/2.6)%8:0,sp=foxSprite(fr,G.b),fl=r.dir<0;c.fillStyle='rgba(0,0,0,.22)';c.beginPath();c.ellipse(sx,GY,7,1.2,0,0,7);c.fill();if(r.inv>0&&Math.floor(t/50)%2)c.globalAlpha=.55;
  if(fl){c.save();c.translate(sx+sp.W/2,0);c.scale(-1,1);c.drawImage(sp.cv,0,GY-sp.H+1,sp.W,sp.H);c.restore()}else c.drawImage(sp.cv,sx-sp.W/2,GY-sp.H+1,sp.W,sp.H);c.globalAlpha=1}
function scenUpdate(dt){for(const r of G.props){if(r.k==='spirit'&&r.alive){r.t=(r.t||0)+dt;const d=r.x-G.hx;if(Math.abs(d)<26){r.alive=0;S.gems+=2;save();updateTop&&updateTop();G.hp=G.maxhp;gHud();G.flash=5;for(let k=0;k<26;k++)P({t:'star',x:r.x+rnd(-14,14),y:GY-rnd(6,40),vx:rnd(-1,1),vy:rnd(-1.6,-.3),life:34,col:'ice',s:1.6});banner(`<div class="bt">روح الغابة ${gx('باركتك','باركتكِ')}!</div><div class="bs">+2 ${ic('gem')} وصحة كاملة</div>`,2600)}
      else{if(Math.abs(d)<90){r.dir=Math.sign(d)||1;r.mv=1;r.x+=r.dir*.7*dt}else{r.mv=(r.t%400)<120;if(r.mv)r.x+=r.dir*.3*dt;if(Math.abs(r.x-r.x0)>60)r.dir=Math.sign(r.x0-r.x)}r.hop=0}}
    if(r.k==='fox'&&r.alive){r.t+=dt;if(r.inv>0)r.inv-=dt;const d=r.x-G.hx,ad=Math.abs(d);let v=0;if(ad<90||r.flee>0){r.flee=Math.max(0,(r.flee||40)-dt);r.dir=Math.sign(d)||1;v=2.4}else{if(Math.abs(r.x-r.x0)>80)r.dir=Math.sign(r.x0-r.x);else if(r.t%200<dt)r.dir=Math.random()<.5?-1:1;v=(r.t%260)<140?.5:0}r.mv=v>0;r.x+=r.dir*v*dt}}}
function scenIsland(si,I,sites,props,people,R){const b=STAGES[si].b,zones=props._zones||[];const busy=(x,m)=>sites.some(s=>Math.abs(s.x-x)<m)||props.some(p=>['house','river','portal','lair','camp','chest','ruins','shrine','well','statue2','falls','stall','crag'].includes(p.k)&&Math.abs(p.x-x)<(p.k==='river'?p.w/2+m:m));
  zones.forEach((z,zi)=>{const len=z.x1-z.x0;if(z.t==='town')return;
    if((z.t==='mount'||z.t==='forest'&&R()<.35)){for(let k=0;k<8;k++){const x=Math.round(z.x0+len*(.2+R()*.6));if(!busy(x,95)&&Math.abs(x)<I.half-500){props.push({k:'falls',x,v:(R()*4)|0,wx:Math.round((R()-.5)*30),big:R()<.4});break}}}
    if(z.t==='forest'&&b!==3){for(let k=0;k<(R()<.5?2:1);k++){const x=Math.round(z.x0+len*(.15+R()*.7));props.push({k:'fox',x,x0:x,hp:1,alive:1,t:R()*99,dir:1})}
      if(R()<.45){const x=Math.round(z.x0+len*(.3+R()*.4));if(!busy(x,40))props.push({k:'spirit',x,x0:x,alive:1,t:0,dir:1})}}
    if(si>=5&&(z.t==='forest'||z.t==='mount')&&R()<.55&&Math.abs(z.x0+len*.5)>I.half*.45){const x=Math.round(z.x0+len*(.2+R()*.6));props.push({k:'beast',x,x0:x,kk:'g',big:0,hp:5+Math.floor(STAGES[si].d/6),t:R()*99,dir:1,alive:1,spec:{type:'bear',name:'الدب الأسطوري',pal:[{a:'#5a3a24',b:'#7a5434',c:'#8ad8ff',e:'#7ae0ff'},{a:'#e8ecf2',b:'#c8d0dc',c:'#7ad8ff',e:'#38e0f0'},{a:'#8a5a2e',b:'#b07a40',c:'#ffd040',e:'#ffb02e'},{a:'#2a1a1a',b:'#4a2a24',c:'#ff6a1a',e:'#ff8a20'},{a:'#9a8ac8',b:'#c4b4e8',c:'#ffc8f0',e:'#ff9ae8'}][b]}})}
    if(z.t!=='mount'&&R()<.6){for(let k=0;k<6;k++){const x=Math.round(z.x0+len*(.1+R()*.8));if(!busy(x,30)){props.push({k:'statue2',x,v:1+((R()*4)|0)});break}}}
});
  // village styles
  const clusters=[];sites.filter(s=>s.k==='plot').concat(props.filter(p=>p.k==='house')).map(o=>o.x).sort((a,b2)=>a-b2).forEach(x=>{const c2=clusters[clusters.length-1];if(c2&&x-c2[c2.length-1]<160)c2.push(x);else clusters.push([x])});
  clusters.forEach((c2,ci)=>{const cx=(c2[0]+c2[c2.length-1])/2,style=b===2?(ci%2?'market':'nomad'):['farm','market','nomad'][ci%3];
    const put=(k,o,m)=>{for(const dx of [130,-130,170,-170,210,-210]){const x=Math.round(cx+dx);if(!busy(x,m||34)){props.push(Object.assign({k,x},o||{}));return x}}};
    if(style==='market'){put('stall',{v:ci%3});put('stall',{v:(ci+1)%3})}
    else if(style==='nomad'){put('camp',{});put('camp',{})}
    else if(HDP[b].wheat){const x=put('wheat',{w:80},50);if(x!==undefined)props.push({k:'fence',x:x+48,w:30})}});
  for(const p of props)if(p.k==='statue2'&&p.v===undefined)p.v=0}

/* ================= CREATURE RIGS (realistic redesign) ================= */
CRDEF.raider=[22,30];CRDEF.deer=[34,32];CRDEF.sheep=[30,24];CRDEF.fox=[34,22];var RIGMODE='gallop',RIGFLY=0;var RIGST={wolf:12,boar:9,bear:12,mammoth:12,horse:12,deer:13,sheep:7,fox:10},RIGGM={walk:[.9,.62],trot:[1.2,.46],gallop:[1.6,.36]};function rigCycle(type,mode){const g=RIGGM[mode];return g?(RIGST[type]||12)*g[0]/g[1]:1e9}
const RIGS={deer:'quad',sheep:'quad',fox:'quad',wolf:'quad',boar:'quad',bear:'quad',mammoth:'quad',horse:'quad',basilisk:'lizard',salamander:'lizard',yeti:'biped',golem:'biped',gargoyle:'biped',raider:'biped',griffin:'fly',wyvern:'fly',roc:'fly',phoenix:'fly',bat:'fly',owl:'fly'};
function rigIK(J,F,L1,L2,fw){let dx=F[0]-J[0],dy=F[1]-J[1],d=Math.hypot(dx,dy)||.01;const dm=Math.max(Math.abs(L1-L2)+.2,Math.min(L1+L2-.05,d));const a=Math.acos(Math.max(-1,Math.min(1,(L1*L1+dm*dm-L2*L2)/(2*L1*dm)))),th=Math.atan2(dy,dx)+(fw?-a:a);const K=[J[0]+Math.cos(th)*L1,J[1]+Math.sin(th)*L1];return[K,[J[0]+dx*dm/d,J[1]+dy*dm/d]]}
var GENB={used:0,last:{}};function rigSprite(type,fr,pal,sc,key,nfr){const KB0='rig|'+(key||type+JSON.stringify(pal))+'|'+sc+'|'+(nfr||4)+'|'+RIGMODE,K0=KB0+'|'+fr;if(CRC[K0])return CRC[K0];if(GENB.used>6&&GENB.last[KB0])return GENB.last[KB0];const t0=performance.now(),o=rigSprite0(type,fr,pal,sc,key,nfr);GENB.used+=performance.now()-t0;GENB.last[KB0]=o;CRC[K0]=o;return o}
function rigSprite0(type,fr,pal,sc,key,nfr){nfr=nfr||4;const K='rig0|'+(key||type+JSON.stringify(pal))+'|'+fr+'|'+sc+'|'+nfr+'|'+RIGMODE;if(CRC[K])return CRC[K];
  const[bw,bh]=CRDEF[type]||[34,30],SSf=RS>=3?1.6:1.4,S=sc*SSf,W=Math.round(bw*S),H=Math.round(bh*S),Wf=Math.round(bw*sc),Hf=Math.round(bh*sc),cv=mkc(W,H),c=cv.getContext('2d');c.lineCap='round';c.lineJoin='round';
  const ph=(fr%nfr)/nfr,p2=ph*Math.PI*2,A=[],RA=rampOf(pal.a),RB=rampOf(pal.b),RC=rampOf(pal.c),RD=RA.map(v=>v.map(q=>q*.7));
  const add=(x,y,r,z,R)=>A.push({x:x*S,y:y*S,r:r*S,z:z*S,ramp:R,fr:0});
  const chain=(pts,r0,r1,z,R)=>{for(let i=1;i<pts.length;i++){const a=pts[i-1],q=pts[i],n=Math.max(2,Math.ceil(Math.hypot(q[0]-a[0],q[1]-a[1])/.5));for(let k=0;k<=n;k++){const u=k/n;add(a[0]+(q[0]-a[0])*u,a[1]+(q[1]-a[1])*u,r0+(r1-r0)*((i-1+u)/(pts.length-1)),z,R)}}};
  const GND=bh-1.4,eyes=[],post=[];
  const gaitT=(li,ax,stride,lift,duty,off,front)=>{if(RIGMODE==='stand')return[ax,GND,0];const u=((ph+off[li])%1+1)%1;if(u<duty){const s=u/duty;return[ax+stride*(.5-s),GND,0]}const s=(u-duty)/(1-duty),e=s*s*(3-2*s),fl=Math.sin(Math.PI*s);return[ax+stride*(-.5+e),GND-lift*fl*(front?1.2:1)-(RIGFLY||0),fl]};
  const qleg=(J,li,L1,L2,w0,w1,front,R,z,st,lift,duty,off,paw)=>{const T=gaitT(li,J[0]+(front?.5:-.5),st,lift,duty,off,front);const F=[T[0]-(front?.4:.6)+(front?.8:-1)*T[2],T[1]-1.6+T[2]*.5];const[Kn,F2]=rigIK(J,F,L1,L2,front?1:0);
    chain([J,Kn],w0,w1,z,R);add(Kn[0],Kn[1],w1*1.05,z,R);chain([Kn,F2],w1*.95,w1*.8,z,R);const ra=(front?1.5:-.6)*T[2],vx0=T[0]-F[0],vy0=T[1]-F[1],T2=[F2[0]+vx0*Math.cos(ra)-vy0*Math.sin(ra),F2[1]+vx0*Math.sin(ra)+vy0*Math.cos(ra)];chain([F2,T2],w1*.8,w1*.75,z,R);if(paw)post.push(['paw',T2,w1,z]);else post.push(['hoof',T2,w1,z])};
  const shadeTo=(R2)=>R2;
  switch(RIGS[type]){
    case 'quad':{const cfg={wolf:{bl:15,by:11,bg:5,leg:[7,6.4],w:[2.2,1.1],st:12,lift:3,neck:[[27.5,9],[30.5,6.5]],head:'canine',tail:'bushy'},boar:{bl:16,by:11.5,bg:7,leg:[5.2,4.6],w:[3,1.5],st:9,lift:2.2,neck:[[27,11],[28.4,12]],head:'boar',tail:'thin'},
        bear:{bl:18,by:13,bg:9,leg:[8,6.4],w:[4.2,2.4],st:12,lift:2.6,neck:[[34,12],[38,12]],head:'bear',tail:'short'},mammoth:{bl:20,by:14,bg:11,leg:[10,9],w:[5,3.6],st:12,lift:2.4,neck:[[33,10],[35.4,11]],head:'mammoth',tail:'thin'},
        deer:{bl:16,by:12,bg:3.9,nk:.62,leg:[8.8,8.4],w:[1.45,.68],st:13,lift:3.8,neck:[[23.5,8],[26.4,3.6]],head:'deer',tail:'short'},sheep:{bl:12,by:11.4,bg:5.8,leg:[5.2,4.9],w:[1.3,.85],st:7,lift:1.6,neck:[[21,11],[23.6,10.6]],head:'sheep',tail:'short'},fox:{bl:14,by:13,bg:3.2,tk:.55,leg:[3.8,3.6],w:[1.1,.65],st:10,lift:2.2,neck:[[22.4,12.2],[25,11.2]],head:'fox',tail:'bushy'},
        horse:{bl:14,by:11,bg:6,leg:[8,7.6],w:[2.6,1.2],st:12,lift:3.2,neck:[[24.5,8],[27.6,3.4]],head:'horse',tail:'long'}}[type];
      const RM=RIGMODE,GM=RM==='walk'?{off:[.25,.75,0,.5],duty:.62,st:.9,lf:.8,bob:.45}:RM==='trot'?{off:[0,.5,.5,0],duty:.46,st:1.2,lf:1,bob:.8}:RM==='stand'?{off:[0,0,0,0],duty:1,st:0,lf:0,bob:0}:{off:[.62,.5,.12,0],duty:.36,st:1.6,lf:1.35,bob:1.2};cfg.st*=GM.st;cfg.lift*=GM.lf;{let nst=0;for(let li=0;li<4;li++){if((((ph+GM.off[li])%1)+1)%1<GM.duty)nst++}RIGFLY=RM==='gallop'?(nst===0?2.4:nst===1?.9:0):RM==='trot'?(nst===0?.8:0):0}
      const cx=bw*.46,by=cfg.by-RIGFLY-(RM==='walk'?Math.abs(Math.sin(p2*2))*GM.bob:RM==='gallop'?(Math.sin(p2+.6)*.5+.5)*GM.bob*1.3:Math.abs(Math.sin(p2))*GM.bob),fx=cx+cfg.bl*.36,hx=cx-cfg.bl*.36,off=GM.off,duty=GM.duty;
      const ly=by+cfg.bg*.45;qleg([fx-1,ly],1,cfg.leg[0],cfg.leg[1],cfg.w[0],cfg.w[1],1,RD,0,cfg.st,cfg.lift,duty,off,type!=='horse');qleg([hx+1,ly],3,cfg.leg[0]+.6,cfg.leg[1]+.4,cfg.w[0]*1.2,cfg.w[1],0,RD,0,cfg.st,cfg.lift,duty,off,type!=='horse');
      // tail
      const tw=Math.sin(p2*1)*1.2;if(cfg.tail==='bushy'){{const k=cfg.tk||1;chain([[hx-cfg.bl*.15,by-1],[hx-6,by+1+tw],[hx-11,by+2.4+tw*1.5]],2.2*k,2.8*k,1,RA);add(hx-11.5,by+2.6+tw*1.5,1.6*k+.3,1.3,RB)}}else if(cfg.tail==='thin'){chain([[hx-cfg.bl*.15,by-1],[hx-4,by+3+tw],[hx-5,by+6+tw]],.7,.5,1,RA);add(hx-5,by+6.6+tw,1,1.2,RC)}else if(cfg.tail==='long'){chain([[hx-cfg.bl*.15,by-1],[hx-5,by+3+tw],[hx-7,by+9+tw]],1.6,1.2,1,RC)}else add(hx-cfg.bl*.18,by-1,1.8,1,RA);
      // body
      for(let k=0;k<=8;k++){const u=k/8,x=hx-cfg.bl*.12+u*cfg.bl*.95,r=cfg.bg*(.82+Math.sin(u*Math.PI)*.2)*(type==='bear'||type==='mammoth'?(.85+u*.3):1);add(x,by+Math.sin(u*Math.PI)*.4-(type==='boar'?u*1.2:0)-(type==='bear'?Math.sin(u*Math.PI*1.2)*1.2:0),r,1+u,RA)}
      add(cx,by+cfg.bg*.55,cfg.bg*.6,1.5,RB);
      // neck & head
      const nk=cfg.neck,hb=Math.sin(p2+1)*.6;chain([[fx,by-1],nk[0],[nk[1][0],nk[1][1]+hb]],cfg.bg*.7*(cfg.nk||1),cfg.bg*.55*(cfg.nk||1),2.4,RA);const[hx2,hy2]=[nk[1][0],nk[1][1]+hb];
      switch(cfg.head){
        case 'canine':add(hx2,hy2,3.3,3,RA);chain([[hx2+1.4,hy2+.6],[hx2+6.2,hy2+1.8]],1.9,1.05,3.2,RA);add(hx2+1.5,hy2+2.2,1.9,3.1,RB);post.push(['ear',[hx2-1.2,hy2-2.4],1.6],['ear',[hx2+.6,hy2-2.8],1.6],['nose',[hx2+6.6,hy2+1.6]]);eyes.push([hx2+1.6,hy2-.6]);break;
        case 'boar':add(hx2,hy2,4.4,3,RA);chain([[hx2+2,hy2+1],[hx2+6,hy2+2.6]],2.8,2.1,3.2,RA);add(hx2+6.8,hy2+2.8,1.8,3.4,rampOf('#c08a7a'));post.push(['tusk',[hx2+5.4,hy2+4]],['ear',[hx2-1.6,hy2-3.6],2],['bristle',[cx,by-cfg.bg*.8],cfg.bl]);eyes.push([hx2+2,hy2-.6]);break;
        case 'bear':add(hx2,hy2,4.6,3,RA);chain([[hx2+2.4,hy2+1],[hx2+6.2,hy2+2.2]],2.6,1.8,3.2,RB);add(hx2-2.4,hy2-3.4,1.6,3.1,RA);add(hx2+1.8,hy2-3.8,1.6,3.1,RA);post.push(['nose',[hx2+6.6,hy2+1.8]],['crystal',[cx-cfg.bl*.3,by-cfg.bg*.85],cfg.bl*.75]);eyes.push([hx2+2.4,hy2-.6]);break;
        case 'mammoth':add(hx2,hy2,6,3,RA);add(hx2-1.6,hy2-3.6,4.4,3.1,RA);chain([[hx2+4,hy2+2],[hx2+6.4,hy2+7],[hx2+6,hy2+12+Math.sin(p2)*.8],[hx2+7.6,hy2+15]],2.2,1,3.6,RA);post.push(['bigtusk',[hx2+3,hy2+5]],['fur',[cx,by],cfg.bl]);add(hx2-4,hy2+1,3.4,2.8,RD);eyes.push([hx2+2.2,hy2-.6]);break;
        case 'deer':add(hx2,hy2,2.3,3,RA);chain([[hx2+.8,hy2+.5],[hx2+4.4,hy2+2.4]],1.6,.95,3.2,RA);add(hx2+.6,hy2+1.6,1.3,3.1,RB);post.push(['ear',[hx2-1.1,hy2-2.2],1.1],['nose',[hx2+4.6,hy2+2.2]]);if(pal.ant)post.push(['antler',[hx2-.4,hy2-2]]);eyes.push([hx2+.9,hy2-.5]);add(hx-cfg.bl*.2,by-1.2,1.6,1.1,RB);break;
        case 'sheep':add(hx2,hy2,2.4,6,RC);chain([[hx2+.6,hy2+.6],[hx2+3,hy2+1.6]],1.6,1.1,6.2,RC);post.push(['ear',[hx2-1.6,hy2-1],1],['wool',[cx,by],cfg.bl]);eyes.push([hx2+.9,hy2-.4]);break;
        case 'fox':add(hx2,hy2,2.6,3,RA);chain([[hx2+1,hy2+.6],[hx2+5.4,hy2+1.8]],1.5,.7,3.2,RA);add(hx2+1.2,hy2+1.7,1.4,3.1,RB);post.push(['ear',[hx2-1,hy2-2.2],1.3],['ear',[hx2+.6,hy2-2.5],1.3],['nose',[hx2+5.7,hy2+1.6]]);eyes.push([hx2+1.4,hy2-.6]);break;
        case 'horse':add(hx2,hy2,2.8,3,RA);chain([[hx2+1,hy2+.6],[hx2+5,hy2+3.4]],2.1,1.3,3.2,RA);post.push(['ear',[hx2-.6,hy2-2.6],1.3],['mane',[[fx-2,by-4],[hx2-1,hy2]]]);eyes.push([hx2+1,hy2-.4]);break}
      qleg([fx,ly+.4],0,cfg.leg[0],cfg.leg[1],cfg.w[0],cfg.w[1],1,RA,5,cfg.st,cfg.lift,duty,off,type!=='horse');qleg([hx,ly+.4],2,cfg.leg[0]+.6,cfg.leg[1]+.4,cfg.w[0]*1.25,cfg.w[1],0,RA,5,cfg.st,cfg.lift,duty,off,type!=='horse');
      break}
    case 'lizard':{const L=type==='basilisk'?44:40,cx=bw*.5,by=bh-5.5,off=[0,.5,.5,0],duty=.55;const wv=k=>Math.sin(p2+k*.5)*1.1;
      for(const[li,x,R,z] of [[1,cx+8,RD,0],[3,cx-8,RD,0]]){const J=[x,by+1],T=gaitT(li,x+(li===1?2:-2),7,1.6,duty,off,li===1);chain([J,[J[0]+(T[0]-J[0])*.5,J[1]-1.2],T],1.6,1,z,R);post.push(['claw',T,1])}
      const pts=[];for(let k=0;k<=12;k++){const u=k/12;pts.push([cx-6-u*(L*.5),by+1.2+u*2.2+wv(k)*u])}chain(pts,2.6,.5,1,RA);
      for(let k=0;k<=8;k++){const u=k/8;add(cx-7+u*18,by-.6+Math.sin(u*Math.PI)*-.8+wv(k)*.3,type==='basilisk'?3.4:2.9,1+u,RA)}add(cx+1,by+1.3,2.6,1.5,RB);
      chain([[cx+10,by-.6],[cx+14,by-1.4]],2.6,2.4,2,RA);add(cx+16,by-1.6,2.6,3,RA);chain([[cx+16.5,by-1],[cx+21,by-.4]],1.9,1.2,3,RA);eyes.push([cx+16.8,by-2.8]);
      if(type==='basilisk')post.push(['crest',[cx-6,by-3.4],22]);else post.push(['spots',[cx,by],14]);
      for(const[li,x] of [[0,cx+9],[2,cx-7]]){const J=[x,by+1.4],T=gaitT(li,x+(li===0?2:-2),7,1.6,duty,off,li===0);chain([J,[J[0]+(T[0]-J[0])*.5,J[1]-1.2],T],1.7,1.1,5,RA);post.push(['claw',T,1])}
      break}
    case 'biped':{if(type==='golem'){golemDraw(c,S,ph,p2,GND,bw,pal,eyes);break}const cx=bw*.5,step=Math.sin(p2),stp=Math.cos(p2),hb=-Math.abs(Math.sin(p2))*.7;const cfg={yeti:{hip:19.5,leg:[8.4,8],w:3.4,tor:[10,4.2],chest:7.2,lean:3,arm:[6.6,6.2],aw:3.1,fist:2.9,af:1.6,hx:4.4,hy:4.2,head:'yeti'},golem:{hip:20,leg:[7.8,7.6],w:4.2,tor:[9.6,5],chest:7.8,lean:2.2,arm:[7,6.8],aw:4,fist:3.8,af:1.2,hx:3,hy:5.2,head:'golem'},gargoyle:{hip:20,leg:[5.6,5.6],w:2.4,tor:[8,3.4],chest:4.8,lean:2.6,arm:[6,5.8],aw:1.8,fist:1.6,af:1,hx:2.6,hy:1.6,head:'garg'},raider:{hip:17.5,leg:[6,5.6],w:1.7,tor:[7,2.5],chest:3.3,lean:.7,arm:[4.8,4.6],aw:1.25,fist:1.1,af:.4,hx:1,hy:.6,head:'raider'}}[type];
      const hip=[cx,cfg.hip+hb],GT2=(s)=>{const u=((ph+s)%1+1)%1;if(u<.55){const k=u/.55;return[cx+4*(.5-k),GND,0]}const k=(u-.55)/.45,e=k*k*(3-2*k);return[cx+4*(-.5+e),GND-2.4*Math.sin(Math.PI*k),Math.sin(Math.PI*k)]};
      const legB=(s,R,z)=>{const T=GT2(s),[Kn,F]=rigIK([hip[0]-.6,hip[1]],[T[0],T[1]-1.4],cfg.leg[0],cfg.leg[1],1);chain([[hip[0]-.6,hip[1]],Kn],cfg.w,cfg.w*.8,z,R);chain([Kn,F],cfg.w*.8,cfg.w*.65,z,R);chain([F,[F[0]+2,F[1]+1.2]],cfg.w*.6,cfg.w*.55,z+.1,type==='raider'?rampOf('#2e1e14'):R);if(type==='yeti')post.push(['claw',[F[0]+2.6,F[1]+1.4],1])};
      legB(.5,RD,0);
      const sh=[cx+cfg.lean,hip[1]-cfg.tor[0]],armB=(sw,R,z)=>{const s0=[sh[0]+.6,sh[1]+cfg.chest*.35],e=[s0[0]+Math.sin(sw)*2.6+cfg.af,s0[1]+cfg.arm[0]*.88],h=[e[0]+Math.sin(sw)*2.2+cfg.af*1.2,e[1]+cfg.arm[1]*.84];add(s0[0],s0[1],cfg.aw*1.35,z,R);chain([s0,e,h],cfg.aw*1.1,cfg.aw*.85,z,R);add(h[0],h[1]+.4,cfg.fist,z+.1,R);return h};
      if(type==='gargoyle'){post.push(['bwing',[sh[0]-1,sh[1]+1],Math.sin(p2*2)])}
      armB(-step*.5,RD,.5);
      chain([hip,[cx+cfg.lean*.45,hip[1]-cfg.tor[0]*.55],sh],cfg.tor[1]*.95,cfg.chest,2,RA);add(cx+cfg.lean*.5,hip[1]-cfg.tor[0]*.45,cfg.tor[1]*1.08,2.2,type==='yeti'?RB:RA);if(type==='golem'){add(sh[0]-2.6,sh[1]+1,3.2,2.3,RD);add(sh[0]+3,sh[1]+.4,3,2.4,RA)}if(type==='yeti'){add(sh[0]-1,sh[1]-1.4,cfg.chest*.8,2.3,RA)}
      if(type==='raider'){chain([[sh[0]-1.6,sh[1]+.4],[sh[0]-3.8,sh[1]+5+Math.sin(p2)*.4],[sh[0]-4.6,hip[1]+2]],1.6,2.2,1.6,RC.map(v=>v.map(q=>q*.6)))}
      legB(0,RA,4);
      const hd=[sh[0]+cfg.hx,sh[1]-cfg.chest*.9-1.6+cfg.hy];
      switch(cfg.head){case 'yeti':add(hd[0],hd[1],3.6,4,RA);add(hd[0]+1.9,hd[1]+.9,2.3,4.3,RC);add(hd[0]+1.4,hd[1]-1.4,1.6,4.5,RA);post.push(['horn',[hd[0]-1.6,hd[1]-2.6]],['horn',[hd[0]+.8,hd[1]-3]],['yface',[hd[0]+1.9,hd[1]+.9]]);eyes.push([hd[0]+2.3,hd[1]-.5]);break;
        case 'golem':add(hd[0],hd[1]+.6,3.4,4,RA);post.push(['cracks',[cx,hip[1]-6],10]);eyes.push([hd[0]+1.4,hd[1]]);break;
        case 'garg':add(hd[0],hd[1],2.8,4,RA);chain([[hd[0]+1,hd[1]+.4],[hd[0]+3.6,hd[1]+1.2]],1.5,.9,4.2,RA);post.push(['horn',[hd[0]-1,hd[1]-2]],['horn',[hd[0]+1,hd[1]-2.3]]);eyes.push([hd[0]+1.2,hd[1]-.6]);break;
        case 'raider':add(hd[0],hd[1]+.3,2.4,4,rampOf('#c89068'));post.push(['helm',[hd[0],hd[1]-.6]],['beard',[hd[0]+.8,hd[1]+1.8]]);eyes.push([hd[0]+1.3,hd[1]]);break}
      const hand=armB(step*.5,RA,6);if(type==='yeti'){post.unshift(['shag',A.filter(q=>q.ramp===RA||q.ramp===RD).map(q=>[q.x/S,q.y/S,q.r/S,q.ramp===RD?1:0])]);post.push(['claw',[hand[0]+1.6,hand[1]+2.2],1],['tufts',[[hd[0]-2.8,hd[1]-3.4],[sh[0]-3.6,sh[1]-6.6],[sh[0]-7.4,sh[1]+1.4],[hip[0]-5.6,hip[1]-1.6],[hip[0]-4.6,hip[1]+2.4]]],['tufts',[[sh[0]+1,sh[1]+4],[sh[0]+5,sh[1]+6.4]]])}if(type==='raider')post.push(['weapon',hand,stp],['shield',[sh[0]-1.4,sh[1]+4.6]]);
      break}
    case 'fly':{const f=Math.sin(p2),cfg={griffin:{body:[21,4.5],head:'eagle',wing:'feather',span:19,tail:'lion'},wyvern:{body:[19,3.8],head:'dragon',wing:'membrane',span:21,tail:'spade'},roc:{body:[20,4.6],head:'eagle',wing:'feather',span:23,tail:'fan'},phoenix:{body:[14,5],head:'bird',wing:'fire',span:18,tail:'fire'},bat:{body:[8,4],head:'bat',wing:'membrane',span:13,tail:'none'},owl:{body:[9,7],head:'owl',wing:'feather',span:11,tail:'fan'}}[type];
      const cx=bw*.5,cy=bh*.62+f*1.1,bl=cfg.body[0];
      const wingD=(far)=>{const flap=f*(far?.9:1),base=[cx+1,cy-2],ang=-Math.PI/2-.2+flap*1.05+(far?-.15:0),len=Math.min(cfg.span,bh*.56),col=far?RD:(cfg.wing==='membrane'?RB:RA);
        if(cfg.wing==='membrane'){const tip=[base[0]+Math.cos(ang)*len*.55-2,base[1]+Math.sin(ang)*len*.55],tip2=[tip[0]-len*.35,tip[1]+len*.25];post.push(['memb',base,tip,tip2,far?.62:1,cfg.wing])}
        else{post.push(['fwing',base,ang,len,far?.65:1,cfg.wing])}};
      wingD(1);
      if(cfg.tail==='lion'){chain([[cx-bl*.45,cy],[cx-bl*.75,cy+2+f],[cx-bl*.95,cy+.6]],.9,.6,1,RA);add(cx-bl*.97,cy+.4,1.4,1.2,RC)}else if(cfg.tail==='spade'){const pts=[];for(let k=0;k<=8;k++){const u=k/8;pts.push([cx-bl*.4-u*bl*.7,cy+u*2+Math.sin(p2+u*3)*1.5])}chain(pts,1.8,.6,1,RA);post.push(['spade',pts[8]])}else if(cfg.tail==='fan'||cfg.tail==='fire')post.push(['ftail',[cx-bl*.45,cy],cfg.tail]);
      for(let k=0;k<=6;k++){const u=k/6;add(cx-bl*.4+u*bl*.75,cy+Math.sin(u*Math.PI)*.3,cfg.body[1]*(.75+Math.sin(u*Math.PI)*.3),1+u,RA)}add(cx,cy+cfg.body[1]*.45,cfg.body[1]*.6,1.6,RB);
      if(type==='griffin'){chain([[cx+bl*.18,cy+2],[cx+bl*.22,cy+6]],1.4,1,2.2,RA);chain([[cx-bl*.25,cy+2],[cx-bl*.3,cy+6.4]],1.6,1.1,2.2,RA)}else if(cfg.head!=='bat'&&cfg.head!=='owl')post.push(['talon',[cx+bl*.05,cy+cfg.body[1]*.9]]);
      const hx=cx+bl*.46,hy=cy-cfg.body[1]*.75;if(cfg.head==='eagle')chain([[cx+bl*.3,cy-.6],[hx-.6,hy+.6]],cfg.body[1]*.8,2.4,2.6,type==='griffin'?rampOf('#f4f0e6'):RB);
      switch(cfg.head){case 'eagle':add(hx,hy,3.2,3,type==='griffin'?rampOf('#f4f0e6'):RB);post.push(['beak',[hx+2.6,hy+.4],1.2]);eyes.push([hx+1,hy-.8]);break;
        case 'dragon':chain([[cx+bl*.35,cy-1],[hx+1,hy-1.6]],2.4,1.9,2.6,RA);add(hx+2,hy-2,2.6,3,RA);chain([[hx+3,hy-1.4],[hx+6.4,hy-.2]],1.6,1,3.1,RA);post.push(['horn',[hx+1,hy-4]],['horn',[hx+2.6,hy-4.4]]);eyes.push([hx+2.6,hy-2.8]);break;
        case 'bird':add(hx,hy,2.6,3,RB);post.push(['beak',[hx+2.2,hy+.2],1],['crest2',[hx-1,hy-2.4]]);eyes.push([hx+.8,hy-.6]);break;
        case 'bat':add(hx-1,hy+1,2.6,3,RA);post.push(['ear',[hx-2.4,hy-1.6],1.2],['ear',[hx-.2,hy-1.8],1.2]);eyes.push([hx-.2,hy+.6]);break;
        case 'owl':add(cx+1,cy-4.6,4.2,3,RA);add(cx+1.4,cy-4.2,3,3.4,RB);post.push(['owlface',[cx+1.4,cy-4.4]],['ear',[cx-1.6,cy-8],1.1],['ear',[cx+3.6,cy-8.2],1.1]);break}
      wingD(0);break}}
  blobs(c,W,H,A,shadeR,S*1.5);
  // post details
  const X=v=>v*S,Y=v=>v*S,fill=(col)=>c.fillStyle=col;
  for(const q of post){switch(q[0]){
    case 'hoof':fill('#16100c');c.beginPath();c.ellipse(X(q[1][0]+.3),Y(q[1][1]+.6),q[2]*1.25*S,.8*S,0,0,7);c.fill();break;
    case 'paw':fill(`rgb(${RD[1].join(',')})`);c.beginPath();c.ellipse(X(q[1][0]+.6),Y(q[1][1]+.6),q[2]*1.3*S,.75*S,0,0,7);c.fill();fill('rgba(240,235,220,.85)');for(let k=0;k<3;k++)c.fillRect(X(q[1][0]+.6+k*.6),Y(q[1][1]+.8),.3*S,.35*S);break;
    case 'shag':{const L=q[1];for(let i=0;i<L.length;i+=3){const[x,y,r,dk]=L[i];if(r<1.6)continue;const h=hsh2(i,7,3),h2=hsh2(i,9,4),R2=dk?RD:RA;for(let k=0;k<1;k++){const bx=x+(h-.5)*r*1.2,by=y+r*(.7+h2*.2),len=.7+h2*1.1;c.strokeStyle=`rgb(${R2[h<.5?2:3].join(',')})`;c.lineWidth=.6*S;c.beginPath();c.moveTo(X(bx),Y(by));c.quadraticCurveTo(X(bx+.3),Y(by+len*.6),X(bx-.2+(h2-.5)),Y(by+len));c.stroke()}}break}
    case 'tufts':{const pts=q[1];for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i],n=6;for(let k=0;k<n;k++){const u=(k+.5)/n,x=a[0]+(b[0]-a[0])*u,y=a[1]+(b[1]-a[1])*u,dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1,nx=dy/L,ny=-dx/L,hgt=1.2+hsh2(i*9+k,3,1)*1.4;fill(`rgb(${RA[k%2?3:2].join(',')})`);c.beginPath();c.moveTo(X(x-dx/L*.9),Y(y-dy/L*.9));c.lineTo(X(x-nx*hgt+dx/L*.6),Y(y-ny*hgt+dy/L*.6));c.lineTo(X(x+dx/L*.9),Y(y+dy/L*.9));c.fill()}}break}
    case 'antler':{const[x0,y0]=q[1],K2=1.7,x=x0,y=y0;c.save();c.translate(X(x0),Y(y0));c.scale(K2,K2);c.translate(-X(x0),-Y(y0));c.strokeStyle='#e0d0a8';c.lineWidth=.5*S;c.beginPath();c.moveTo(X(x),Y(y));c.lineTo(X(x-1.6),Y(y-4.6));c.moveTo(X(x-.6),Y(y-1.8));c.lineTo(X(x-2.6),Y(y-2.6));c.moveTo(X(x-1.2),Y(y-3.4));c.lineTo(X(x+.4),Y(y-5.2));c.moveTo(X(x+.8),Y(y-.2));c.lineTo(X(x+1.6),Y(y-4.2));c.moveTo(X(x+1.2),Y(y-2.2));c.lineTo(X(x+3),Y(y-3));c.stroke();c.restore();break}
    case 'wool':{const[x,y]=q[1],L=q[2];for(let k=0;k<14;k++){const xx=x-L*.5+((k*37)%14)/14*L*.85,yy=y-4.2+((k*11)%9)*.85;fill(`rgb(${RA[(k%3)+2].join(',')})`);c.beginPath();c.arc(X(xx),Y(yy),1.05*S,0,7);c.fill()}break}
    case 'yface':{const[x,y]=q[1];fill('rgba(20,12,16,.6)');c.fillRect(X(x-1.1),Y(y-2),2.6*S,.45*S);fill('#2a1218');c.fillRect(X(x-.6),Y(y+.9),2.6*S,.6*S);fill('#f4ecd8');c.fillRect(X(x-.3),Y(y+.9),.45*S,.9*S);c.fillRect(X(x+1.3),Y(y+.9),.45*S,.9*S);fill('#1a0c10');c.fillRect(X(x+1.4),Y(y-.4),.5*S,.4*S);break}
    case 'claw':fill('#e8e0c8');for(let k=0;k<3;k++)c.fillRect(X(q[1][0]+k*.7),Y(q[1][1]+.4),.35*S,.5*S);break;
    case 'ear':fill(`rgb(${RA[2].join(',')})`);c.beginPath();c.moveTo(X(q[1][0]-q[2]*.7),Y(q[1][1]+q[2]));c.lineTo(X(q[1][0]),Y(q[1][1]-q[2]*1.2));c.lineTo(X(q[1][0]+q[2]*.7),Y(q[1][1]+q[2]));c.fill();fill(`rgb(${RA[0].join(',')})`);c.beginPath();c.moveTo(X(q[1][0]-q[2]*.3),Y(q[1][1]+q[2]*.8));c.lineTo(X(q[1][0]),Y(q[1][1]-q[2]*.5));c.lineTo(X(q[1][0]+q[2]*.3),Y(q[1][1]+q[2]*.8));c.fill();break;
    case 'nose':fill('#120c0a');c.beginPath();c.ellipse(X(q[1][0]),Y(q[1][1]),.85*S,.65*S,0,0,7);c.fill();break;
    case 'tusk':case 'bigtusk':{const big=q[0]==='bigtusk';c.strokeStyle='#f4ecd8';c.lineWidth=(big?1.6:.8)*S;c.beginPath();c.moveTo(X(q[1][0]),Y(q[1][1]));c.quadraticCurveTo(X(q[1][0]+(big?5:2)),Y(q[1][1]+(big?5:.6)),X(q[1][0]+(big?7:2.6)),Y(q[1][1]-(big?1:2)));c.stroke();break}
    case 'bristle':c.strokeStyle=`rgb(${RD[0].join(',')})`;c.lineWidth=.6*S;for(let k=0;k<12;k++){const x=q[1][0]-q[2]*.45+k*q[2]/12;c.beginPath();c.moveTo(X(x),Y(q[1][1]+1.2));c.lineTo(X(x-.6),Y(q[1][1]-1.4-((k*3)%2)));c.stroke()}break;
    case 'crystal':for(let k=0;k<5;k++){const x=q[1][0]+k*q[2]/5,h=2.6+((k*7)%3)*1.4;fill(`rgb(${RC[2].join(',')})`);c.beginPath();c.moveTo(X(x-1.2),Y(q[1][1]+1.6));c.lineTo(X(x+.3),Y(q[1][1]-h));c.lineTo(X(x+1.4),Y(q[1][1]+1.6));c.fill();fill(`rgb(${RC[4].join(',')})`);c.beginPath();c.moveTo(X(x+.3),Y(q[1][1]-h));c.lineTo(X(x+1.4),Y(q[1][1]+1.6));c.lineTo(X(x+.5),Y(q[1][1]+1.6));c.fill()}
      c.globalCompositeOperation='lighter';{const g=c.createRadialGradient(X(q[1][0]+q[2]*.4),Y(q[1][1]-1),0,X(q[1][0]+q[2]*.4),Y(q[1][1]-1),q[2]*.7*S);g.addColorStop(0,`rgba(${toA(pal.e).join(',')},.35)`);g.addColorStop(1,'rgba(0,0,0,0)');fill(g);c.fillRect(0,0,W,H)}c.globalCompositeOperation='source-over';break;
    case 'fur':c.strokeStyle=`rgba(${RA[4].join(',')},.6)`;c.lineWidth=.5*S;for(let k=0;k<18;k++){const x=q[1][0]-q[2]*.5+((k*37)%19)/19*q[2],y=q[1][1]-3+((k*13)%7);c.beginPath();c.moveTo(X(x),Y(y));c.lineTo(X(x-.4),Y(y+2.2));c.stroke()}break;
    case 'mane':c.strokeStyle=`rgb(${RC[1].join(',')})`;c.lineWidth=1*S;c.beginPath();c.moveTo(X(q[1][0][0]),Y(q[1][0][1]));c.lineTo(X(q[1][1][0]),Y(q[1][1][1]));c.stroke();break;
    case 'crest':for(let k=0;k<9;k++){const x=q[1][0]+k*q[2]/9;fill(`rgb(${RC[2+(k%2)].join(',')})`);c.beginPath();c.moveTo(X(x-1),Y(q[1][1]+1.4));c.lineTo(X(x+.4),Y(q[1][1]-1.6-((k*5)%3)));c.lineTo(X(x+1.4),Y(q[1][1]+1.4));c.fill()}break;
    case 'spots':for(let k=0;k<8;k++){fill(`rgb(${RC[2].join(',')})`);c.beginPath();c.arc(X(q[1][0]-q[2]*.5+k*q[2]/8),Y(q[1][1]-1.6+((k*3)%3)*.6),.8*S,0,7);c.fill()}break;
    case 'horn':c.fillStyle='#e8dcc0';c.beginPath();c.moveTo(X(q[1][0]-.7),Y(q[1][1]+1.4));c.quadraticCurveTo(X(q[1][0]-1.4),Y(q[1][1]-1.4),X(q[1][0]+.4),Y(q[1][1]-2.6));c.lineTo(X(q[1][0]+.7),Y(q[1][1]+1.2));c.fill();break;
    case 'cracks':c.globalCompositeOperation='lighter';c.strokeStyle=pal.e;c.lineWidth=.6*S;for(let k=0;k<6;k++){const x=q[1][0]-4+k*1.6,y=q[1][1]-4+((k*7)%8);c.beginPath();c.moveTo(X(x),Y(y));c.lineTo(X(x+1.2),Y(y+2));c.lineTo(X(x+.4),Y(y+3.4));c.stroke()}c.globalCompositeOperation='source-over';break;
    case 'helm':fill('#8a93a6');c.beginPath();c.ellipse(X(q[1][0]),Y(q[1][1]),2.7*S,2*S,0,Math.PI,0);c.fill();fill('#c3cad6');c.fillRect(X(q[1][0]-2.7),Y(q[1][1]-.2),5.4*S,.6*S);fill('#6a7286');c.fillRect(X(q[1][0]+.2),Y(q[1][1]-2),.6*S,3.4*S);break;
    case 'beard':fill('#5a3a24');c.beginPath();c.ellipse(X(q[1][0]),Y(q[1][1]),1.4*S,1.2*S,0,0,7);c.fill();break;
    case 'weapon':{const[x,y]=q[1];c.save();c.translate(X(x),Y(y));c.rotate(-.9+q[2]*.25);fill('#5a3a22');c.fillRect(-.35*S,-8*S,.7*S,10*S);fill('#c3cad6');c.beginPath();c.moveTo(0,-8*S);c.quadraticCurveTo(2.8*S,-7.4*S,2.4*S,-4.6*S);c.lineTo(0,-5.2*S);c.fill();c.restore();break}
    case 'shield':{const[x,y]=q[1];fill(`rgb(${RC[1].join(',')})`);c.beginPath();c.ellipse(X(x),Y(y),2.2*S,3*S,0,0,7);c.fill();fill(`rgb(${RC[3].join(',')})`);c.beginPath();c.ellipse(X(x+.4),Y(y-.4),1.4*S,2.2*S,0,0,7);c.fill();fill('#d8b450');c.beginPath();c.arc(X(x+.2),Y(y),.6*S,0,7);c.fill();break}
    case 'bwing':{const[x,y]=q[1],fl=q[2];fill(`rgb(${RD[1].join(',')})`);c.beginPath();c.moveTo(X(x),Y(y));c.lineTo(X(x-6),Y(y-6-fl*2));c.lineTo(X(x-9),Y(y-2-fl));c.lineTo(X(x-7),Y(y+1));c.lineTo(X(x-4.5),Y(y));c.closePath();c.fill();break}
    case 'memb':{const[b,t1,t2,dk]=[q[1],q[2],q[3],q[4]],col=RB.map(v=>v.map(z=>Math.round(z*dk)));fill(`rgba(${col[2].join(',')},.95)`);c.beginPath();c.moveTo(X(b[0]),Y(b[1]));c.lineTo(X(t1[0]),Y(t1[1]));c.quadraticCurveTo(X((t1[0]+t2[0])/2+1),Y((t1[1]+t2[1])/2+2),X(t2[0]),Y(t2[1]));c.quadraticCurveTo(X(b[0]-3),Y(b[1]+3),X(b[0]-4),Y(b[1]+1));c.closePath();c.fill();
      c.strokeStyle=`rgb(${RA.map(v=>v.map(z=>Math.round(z*dk)))[1].join(',')})`;c.lineWidth=.9*S;c.beginPath();c.moveTo(X(b[0]),Y(b[1]));c.lineTo(X(t1[0]),Y(t1[1]));c.lineTo(X(t2[0]),Y(t2[1]));c.moveTo(X(t1[0]),Y(t1[1]));c.lineTo(X(b[0]-3),Y(b[1]+2.4));c.stroke();break}
    case 'fwing':{const[b,ang,len,dk,kind]=[q[1],q[2],q[3],q[4],q[5]];const cols=(kind==='fire'?['#fff2a0','#ffc040','#ff7a1a','#c8361a']:[RA[4],RA[3],RB[2],RA[1]]).map(v=>toA(v).map(z=>Math.round(z*dk)));
      for(let k=9;k>=0;k--){const u=k/9,ax=b[0]+Math.cos(ang)*len*u*.85,ay=b[1]+Math.sin(ang)*len*u*.85,fl=4+(1-Math.abs(u-.65))*7,fa=ang-Math.PI/2+.4+u*.3;fill(`rgb(${cols[k<3?2:k<7?1:0].join(',')})`);c.beginPath();c.ellipse(X(ax+Math.cos(fa)*fl*.5),Y(ay+Math.sin(fa)*fl*.5),fl*.5*S,1.1*S,fa,0,7);c.fill()}
      c.strokeStyle=`rgb(${cols[3].join(',')})`;c.lineWidth=1.6*S;c.beginPath();c.moveTo(X(b[0]),Y(b[1]));c.lineTo(X(b[0]+Math.cos(ang)*len*.88),Y(b[1]+Math.sin(ang)*len*.88));c.stroke();if(kind==='fire'){c.globalCompositeOperation='lighter';const g=c.createRadialGradient(X(b[0]),Y(b[1]-len*.4),0,X(b[0]),Y(b[1]-len*.4),len*S);g.addColorStop(0,'rgba(255,170,60,.35)');g.addColorStop(1,'rgba(0,0,0,0)');fill(g);c.fillRect(0,0,W,H);c.globalCompositeOperation='source-over'}break}
    case 'ftail':{const[b,k2]=[q[1],q[2]],cols=k2==='fire'?['#fff2a0','#ffc040','#ff7a1a']:[`rgb(${RA[3].join(',')})`,`rgb(${RB[2].join(',')})`,`rgb(${RA[1].join(',')})`];for(let k=0;k<5;k++){const a=Math.PI+(k-2)*.22+Math.sin(p2+k)*.08,L2=(k2==='fire'?12:7)+(k%2)*2;fill(cols[k%3]);c.beginPath();c.ellipse(X(b[0]+Math.cos(a)*L2*.5),Y(b[1]+Math.sin(a)*L2*.5+1),L2*.5*S,1*S,a,0,7);c.fill()}break}
    case 'spade':fill(`rgb(${RC[2].join(',')})`);c.beginPath();c.moveTo(X(q[1][0]+1),Y(q[1][1]));c.lineTo(X(q[1][0]-2),Y(q[1][1]-2));c.lineTo(X(q[1][0]-3.4),Y(q[1][1]+.6));c.lineTo(X(q[1][0]-2),Y(q[1][1]+2.6));c.closePath();c.fill();break;
    case 'talon':fill('#e8c040');c.fillRect(X(q[1][0]-1),Y(q[1][1]),.5*S,1.6*S);c.fillRect(X(q[1][0]+.4),Y(q[1][1]),.5*S,1.6*S);break;
    case 'beak':fill('#e8b830');c.beginPath();c.moveTo(X(q[1][0]-1),Y(q[1][1]-q[2]));c.quadraticCurveTo(X(q[1][0]+2.6*q[2]),Y(q[1][1]-q[2]*.6),X(q[1][0]+2*q[2]),Y(q[1][1]+q[2]*1.4));c.lineTo(X(q[1][0]-.6),Y(q[1][1]+q[2]*.8));c.closePath();c.fill();break;
    case 'crest2':fill('#ffc040');for(let k=0;k<3;k++){c.beginPath();c.ellipse(X(q[1][0]-k*.8),Y(q[1][1]-k*.4),2*S,.6*S,-.6-k*.3,0,7);c.fill()}break;
    case 'owlface':fill('#f4ecd8');c.beginPath();c.arc(X(q[1][0]-1.1),Y(q[1][1]),1.5*S,0,7);c.arc(X(q[1][0]+1.5),Y(q[1][1]),1.5*S,0,7);c.fill();fill(pal.e);c.beginPath();c.arc(X(q[1][0]-1.1),Y(q[1][1]),.8*S,0,7);c.arc(X(q[1][0]+1.5),Y(q[1][1]),.8*S,0,7);c.fill();fill('#1a1008');c.beginPath();c.arc(X(q[1][0]-1),Y(q[1][1]),.4*S,0,7);c.arc(X(q[1][0]+1.6),Y(q[1][1]),.4*S,0,7);c.fill();fill('#e8b830');c.beginPath();c.moveTo(X(q[1][0]+.1),Y(q[1][1]+.6));c.lineTo(X(q[1][0]+.5),Y(q[1][1]+2));c.lineTo(X(q[1][0]+.9),Y(q[1][1]+.6));c.fill();break}}
  for(const[x,y] of eyes){const z=Math.max(1,S*.55);fill(pal.e);c.fillRect(Math.round(X(x)),Math.round(Y(y)),Math.ceil(z*1.6),Math.ceil(z*1.4));fill('#ffffff');c.fillRect(Math.round(X(x)),Math.round(Y(y)),Math.ceil(z*.6),Math.ceil(z*.6));
    c.globalCompositeOperation='lighter';const g=c.createRadialGradient(X(x+.5),Y(y+.5),0,X(x+.5),Y(y+.5),2.4*S);g.addColorStop(0,`rgba(${toA(pal.e).join(',')},.5)`);g.addColorStop(1,'rgba(0,0,0,0)');fill(g);c.fillRect(X(x-3),Y(y-3),6*S,6*S);c.globalCompositeOperation='source-over'}
  spritePolish(cv);
  // flip to face left (convention of the old sprites)
  const out=mkc(Wf,Hf),oc=out.getContext('2d');oc.imageSmoothingEnabled=true;oc.imageSmoothingQuality='high';oc.translate(Wf,0);oc.scale(-1,1);oc.drawImage(cv,0,0,Wf,Hf);
  return CRC[K]={cv:out,W:Wf,H:Hf}}

function horseGait(sp,idle,walk,HS,st){const pm=(st?st._gm:horseGait.m)||'idle',up={idle:0,graze:0,walk:1,trot:2,gallop:3}[pm];let lv=sp>(up>=3?1.35:1.55)?3:sp>(up>=2?.6:.8)?2:sp>(up>=1?.05:.12)?1:0;const mode=lv===3?'gallop':lv===2?'trot':lv===1?'walk':(idle>90?'graze':'idle');if(st)st._gm=mode;else horseGait.m=mode;const GD={gallop:44/.36,trot:30/.46,walk:19/.62}[mode];if(!GD)return{mode,fr:0};if(st){const dw=Math.abs(walk-(st._glw??walk));st._glw=walk;st._gph=((st._gph||0)+Math.min(.5,dw/(GD*HS)))%1;return{mode,fr:Math.floor(st._gph*24)%24}}return{mode,fr:Math.floor((((walk/(GD*HS))%1)+1)%1*24)}}
const RAIDER_PAL=[{a:'#7a3a2a',b:'#c8a070',c:'#3a5a8a',e:'#ffe08a'},{a:'#4a5a7a',b:'#d0d8e4',c:'#8a2a2a',e:'#bfe9ff'},{a:'#9a6a3a',b:'#e8c890',c:'#1e6a4a',e:'#ffd040'},{a:'#3a2424',b:'#6a4a40',c:'#c8361a',e:'#ff8a20'},{a:'#6a5a9a',b:'#e0d4f4',c:'#c86aa4',e:'#ffffff'}];
/* ================= REALISTIC SHIPS & BOATS ================= */
function shipSprite(b,lv){lv=lv||S.ship||1;const SH=SHIPS[lv]||SHIPS[1],key='ship2_'+b+'_'+lv+RS;if(HDC[key])return HDC[key];
  const W=170,H=150,P=bPainter(W,H);bSet(P,b,'ship',lv);const R=RS;
  const wood=lv>=4?['#2a160c','#4a2614','#6e3a1e','#92522a','#b4703a']:['#22140a','#3e2414','#5e3820','#7e5030','#a06a40'],dark=['#120a06','#22140a','#34200f','#462c16'],hullPaint=lv>=3?['#14181e','#22282e','#323a42','#46505a']:null,red=['#3a0e0a','#5a1a12','#7a261a','#9a3624'],sailC=b===3?['#3a1a1a','#5a2424','#7a3434','#9a4a44','#b4605a']:lv>=4?['#b8b0a0','#d4cebe','#e8e4d8','#f6f3ea','#ffffff']:['#8e846c','#ada288','#c8bea4','#ddd5bf','#eee8d6'];
  const BOW=158,STERN=10,sheer=x=>{const u=(x-84)/76;return 92-7*(1-u*u)+(x<34?(34-x)*.42:0)+(x>140?-(x-140)*.2:0)},keel=x=>{const u=(x-84)/74;return 134-Math.pow(Math.abs(u),2.3)*30-(x>140?(x-140)*.6:0)};
  // hull
  P.area(STERN,60,BOW+8,H,(X,Y)=>{if(X>BOW){const k=(X-BOW)/8;return Y>sheer(X)+k*4&&Y<sheer(X)+18-k*16}return Y>sheer(X)&&Y<keel(X)},(X,Y,px,py)=>{const top=sheer(X),d=Y-top,st=Math.floor(d/3.1),fy=(Y-top)/Math.max(1,keel(X)-top);
    if(d>5.4&&d<8.2)return rampPick(dark.map(toA),.4+(X/W)*.3,px,py);
    if(fy>.78)return rampPick(red.map(toA),.75-fy*.5+(hsh2(px>>1,py>>1,3)-.5)*.1,px,py);
    let t=.62-fy*.5+((d%3.1)<.45?-.3:0)+(((X+st*7)%17)<.5?-.18:0)+(hsh2(px>>1,py>>2,st)-.5)*.14;if(hullPaint&&d>8.2&&d<16)return rampPick(hullPaint.map(toA),Math.max(0,Math.min(.999,t+.1)),px,py);return Math.max(0,Math.min(.999,t))},wood);
  P.area(STERN,60,BOW+8,H,(X,Y)=>Y>sheer(X)-1.6&&Y<sheer(X)+.4,()=>.85,wood);
  if(lv>=2){P.area(4,58,38,sheer(36)+.5,(X,Y)=>Y>66-(X<8?(8-X)*1.2:0)&&Y<sheer(X),matShade('plank',4,58,34,30,lv),wood);P.area(3,62,40,64.6,null,()=>.85,wood);for(let x=8;x<34;x+=8)bWin(P,x,70,4.4,5,1,'#2a1a10',0);P.lan.push([6,60])}
  else P.lan.push([16,78]);
  if(lv>=3){P.area(132,72,158,sheer(150)+.4,(X,Y)=>Y>76&&Y<sheer(X),matShade('plank',132,72,26,16,lv+3),wood);P.area(130,74,160,76.4,null,()=>.85,wood)}
  if(SH.can){for(let x=48;x<130;x+=15){const y=sheer(x)+10;P.area(x,y,x+5,y+4,null,()=>[16,10,8],['#000']);P.area(x-.6,y-1,x+5.6,y,null,()=>toA('#7a261a'),['#000'])}}
  if(SH.gold2){P.area(STERN,60,BOW,H,(X,Y)=>Math.abs(Y-sheer(X)-4)<.55,()=>toA('#e0b048'),['#000']);P.area(158,80,168,92,(X,Y)=>Math.hypot(X-163,Y-86)<4.2,(X,Y)=>[230,190-((Y-82)*6|0),80],['#000'])}
  P.dark(STERN,60,BOW,H,1,1);
  // masts
  const masts=SH.m===1?[[86,64]]:SH.m===3?[[48,78],[90,92],[128,70]]:[[62,86],[110,74]],sailCol=sailC.map(toA);
  for(const[mx,mh] of masts){const top=sheer(mx)-mh;P.area(mx-1.8,top,mx+1.8,sheer(mx)+2,(X,Y)=>Math.abs(X-mx)<1.8-(Y-top)/mh*-.2-(1-(Y-top)/mh)*.7,(X)=>.32+(X-mx+1.8)*.12,wood);
    if(mh>80)P.area(mx-4,top+mh*.28,mx+4,top+mh*.28+2.4,null,()=>.6,wood);
    const sails=mh>80?[[.06,.3],[.33,.62],[.66,.9]]:[[.08,.45],[.48,.9]];sails.forEach(([a,z],k)=>{const y0=top+mh*a,y1=top+mh*z,hw=(9+k*5)*(mh/80);
      P.area(mx-hw-2,y0-1.4,mx+hw+2,y0+.6,null,()=>.5,wood);
      P.area(mx-hw-1,y0,mx+hw+1,y1,(X,Y)=>{const v=(Y-y0)/(y1-y0);return Math.abs(X-mx)<hw*(1-.12*v)+Math.sin(v*Math.PI)*1.6},(X,Y,px,py)=>{const v=(Y-y0)/(y1-y0),u=(X-mx)/hw;let t=.5+Math.sin(v*Math.PI)*.24-u*.2-(v>.92?.15:0)+(((X-mx+hw)%4.2)<.35?-.1:0)+(Math.abs(v-.33)<.02?-.12:0);return rampPick(sailCol,Math.max(0,Math.min(.999,t)),px,py)},sailC);
      if(SH.gold2&&k===1){P.area(mx-4,y0+(y1-y0)*.3,mx+4,y0+(y1-y0)*.62,(X,Y)=>{const cx=mx,cy=y0+(y1-y0)*.46;return Math.abs(X-cx)<3.6&&Y>cy-2.4&&Y<cy+2.4&&(Y>cy||((X-cx+3.6)%2.4)<1.2)},()=>toA('#e0b048'),['#000'])}});
    P.flags.push([mx+.5,top-6,BPAL[b].banner]);P.area(mx-.4,top-6,mx+.5,top,null,()=>[40,28,20],['#000'])}
  // bowsprit + jib
  P.area(150,70,170,74,(X,Y)=>Math.abs(Y-(84-(X-150)*.6))<1,()=>.4,wood);const fm=masts[masts.length-1];
  P.area(fm[0]+3,sheer(fm[0])-fm[1]*.8,168,sheer(fm[0])-4,(X,Y)=>{const x0=fm[0]+3,y0=sheer(fm[0])-fm[1]*.8,x1=168,y1=73;const yy=y0+(X-x0)/(x1-x0)*(y1-y0);return Y>yy&&Y<sheer(fm[0])-4-(X-x0)*.05&&X<x0+(Y-y0)*.9},(X,Y,px,py)=>rampPick(sailCol,.62-(X-fm[0])/80*.2,px,py),sailC);
  P.done();
  // rigging lines
  const c=P.c;c.setTransform(R,0,0,R,0,0);c.strokeStyle='rgba(30,20,12,.75)';c.lineWidth=.35;
  for(const[mx,mh] of masts){const top=sheer(mx)-mh;c.beginPath();c.moveTo(mx,top);c.lineTo(STERN+6,sheer(STERN+6));c.moveTo(mx,top);c.lineTo(166,74);for(let k=-1;k<=1;k+=2){c.moveTo(mx,top+4);c.lineTo(mx+k*9,sheer(mx+k*9))}c.stroke();
    c.strokeStyle='rgba(30,20,12,.45)';for(let y=top+10;y<sheer(mx)-2;y+=3.2){const f=(y-top)/(sheer(mx)-top);c.beginPath();c.moveTo(mx-9*f,y);c.lineTo(mx+9*f,y);c.stroke()}c.strokeStyle='rgba(30,20,12,.75)'}
  c.setTransform(1,0,0,1,0,0);
  return HDC[key]={cv:P.cv,W,H,win:P.win,smoke:[],flags:P.flags,lan:P.lan,torch:[],yard:[],b,sheer:sheer(84)}}
function boatSprite(b){const key='boat2'+b+RS;if(HDC[key])return HDC[key];const W=46,H=16,P=bPainter(W,H);bSet(P,b,'boat',0);const wood=['#2a180c','#46281a','#663c24','#865430','#a87444'],inner=['#4a2e1a','#6a4426','#8a5c34','#ac784a'];
  const top=x=>{const u=(x-23)/21;return 3+u*u*3.2},bot=x=>{const u=(x-23)/22;return 15-Math.pow(Math.abs(u),2.2)*10};
  P.area(1,2,45,16,(X,Y)=>Y>top(X)+1.6&&Y<top(X)+4.2,(X,Y,px,py)=>.45+((px>>1)%5===0?-.15:0)+(Y-top(X))*.05,inner);
  P.area(1,2,45,16,(X,Y)=>Y>top(X)+3.2&&Y<bot(X),(X,Y,px,py)=>{const d=Y-top(X),fy=d/Math.max(1,bot(X)-top(X));return .62-fy*.42+((d%2.2)<.35?-.28:0)+(hsh2(px>>1,py>>1,2)-.5)*.1},wood);
  P.area(1,2,45,16,(X,Y)=>Y>top(X)+3.6&&Y<top(X)+4.6,()=>toA(b===4?'#c86aa4':b===2?'#1e7a4a':b===1?'#2a5aa8':'#a8242e'),['#000']);
  P.area(1,2,45,16,(X,Y)=>Y>top(X)+2.6&&Y<top(X)+3.4,()=>.9,wood);for(const x of [14,30])P.area(x,top(x)+1.4,x+3.2,top(x)+2.8,null,()=>.75,wood);
  P.done();return HDC[key]={cv:P.cv,W,H}}
function drawShipAtDock(B,x0,t){const bt=site('boat'),sp=shipSprite(G.b,S.ship||1),off=G.sail?Math.pow(G.sail,1.6)*.04:0,bob=Math.sin(t/700)*1.2,rk=Math.sin(t/1100)*.012,shx=x0+150+off,yb=GY+22+bob;
  if(bt&&bt.lvl<1){const pr=bt.build>=0?bt.build/100:0,cut=sp.H*(0.46+pr*.54);B.save();B.beginPath();B.rect(shx-sp.W,GY-sp.H*1.4,sp.W*2,sp.H*1.4+6.5);B.clip();B.translate(shx,yb+15);B.rotate(-.06*(1-pr));B.beginPath();B.rect(-sp.W/2,-cut,sp.W,cut);B.clip();B.globalAlpha=bt.build>=0?1:.9;B.drawImage(sp.cv,-sp.W/2,-sp.H+1,sp.W,sp.H);B.globalAlpha=1;B.restore();
    if(bt.build<0){}else{B.strokeStyle='#8a6440';B.lineWidth=.9;for(let x=shx-60;x<=shx+60;x+=15){B.beginPath();B.moveTo(x,GY+4);B.lineTo(x,yb-cut-6);B.stroke()}for(let y=GY;y>yb-cut-4;y-=11){B.beginPath();B.moveTo(shx-62,y);B.lineTo(shx+62,y);B.stroke()}if(Math.random()<.3)puff(seaX()+150+(Math.random()-.5)*100,yb-cut,2,'#c8a070',1)}}
  else{B.save();B.beginPath();B.rect(shx-sp.W,GY-sp.H*1.4,sp.W*2,sp.H*1.4+6.5);B.clip();B.translate(shx,yb+15);B.rotate(rk);drawBld(B,sp,0,t,0);B.restore();if(G.sail){for(let k=0;k<6;k++){B.fillStyle=`rgba(255,255,255,${.5-k*.07})`;B.fillRect(shx-sp.W/2-k*8,GY+6+(k%2),6,.8)}B.fillStyle='rgba(255,255,255,.6)';B.beginPath();B.ellipse(shx+sp.W/2-6,GY+7,6,1.6,0,0,7);B.fill()}}
  const wl=toA(kPal(G.b,'day').water);const g=B.createLinearGradient(0,GY+6,0,GY+12);g.addColorStop(0,`rgba(${lerpA(wl,[255,255,255],.2).map(Math.round).join(',')},.55)`);g.addColorStop(1,`rgba(${wl.join(',')},.92)`);B.fillStyle=g;B.fillRect(shx-sp.W/2-4,GY+6,sp.W+8,7+WDROP);
  for(let k=0;k<10;k++){const xx=shx-sp.W/2+((k*19+t/40)%sp.W);B.fillStyle='rgba(255,255,255,.45)';B.fillRect(xx,GY+6.2+(k%2)*.6,4,.5)}
  if(G.sail){const fs=footSprite(0,0);B.save();B.translate(shx-30,GY-27+bob);B.scale(.7,.7);B.drawImage(fs.cv,-fs.W/2,-fs.H,fs.W,fs.H);B.restore()}}

/* ================= مملكة الإنجاز: categories, play-time economy, parent panel, achievements ================= */
/* NOTE: functions here may run before this block is evaluated (hoisting), so they only use inline data. */
function kCats(){return {ibada:{n:'العبادات والقيم',ic:'pray'},family:{n:'الأسرة والمجتمع',ic:'heart'},study:{n:'الدراسة والتعلّم',ic:'book'},health:{n:'الصحة والعادات',ic:'tooth'},behavior:{n:'السلوك والمسؤولية',ic:'star'}}}
function catOf(t){return t.cat||({pray:'ibada',quran:'ibada',sun:'family',heart:'family',bed:'family',broom:'family',pencil:'study',book:'study',tooth:'health',food:'health',bag:'health',ball:'health',water:'health',moon:'health',star:'behavior',clock:'behavior'})[t.icon]||'behavior'}
function ptsScale(p){return p<=10?5:p<=15?10:15}
function typeName(t){return t.type==='special'?'مهمة لمرة واحدة':t.type==='weekly'?'مهمة أسبوعية':'روتين يومي'}
function weekKey(d){const x=new Date(d||new Date());x.setHours(0,0,0,0);x.setDate(x.getDate()-((x.getDay()+1)%7));return today(x)}
function genTasks(g,id){
  const base=tasksFor(g).map(x=>{const t={id:'t'+(id++),time:x[0],name:x[1],icon:x[2],pts:ptsScale(x[3]),type:'routine',status:'todo',def:true,nv:1};t.cat=catOf(t);t.need=t.pts>=15;return t});
  base.forEach(t=>{if(t.name.startsWith('تلاوة وحفظ صفحة'))t.age='o';if(t.name.startsWith('القراءة المفيدة'))t.age='o'});
  const f=g==='f',X=[
   ['16:35',f?'قراءة نصف صفحة من القرآن مع والدتك':'قراءة نصف صفحة من القرآن مع والدك','quran',10,'ibada','routine','y'],
   ['19:05','قراءة قصة قصيرة ١٠ دقائق','book',5,'study','routine','y'],
   ['07:10','شرب الماء بانتظام خلال اليوم','water',5,'health','routine'],
   ['15:45','التدرّب على اللغة العربية ١٠ دقائق','pencil',10,'study','routine'],
   ['16:10','مراجعة درس اليوم أو تعلّم معلومة جديدة','book',10,'study','routine'],
   ['17:00',f?'مساعدة أخيكِ أو أختكِ بلطف':'مساعدة أخيك أو أختك بلطف','heart',5,'family','routine'],
   ['19:30','الصدق والوفاء بالوعد طوال اليوم','star',10,'behavior','routine',0,1],
   ['19:40','المحافظة على البيئة والممتلكات العامة','star',5,'behavior','routine'],
   ['19:50','تنظيم الوقت: إنهاء الأعمال قبل وقت اللعب','clock',5,'behavior','routine'],
   ['20:15','تعلّم قيمة إسلامية وتطبيقها في موقف حقيقي','pray',10,'ibada','routine',0,1],
   ['10:00','حفظ آية أو سورة قصيرة جديدة','quran',15,'ibada','weekly',0,1],
   ['18:15',f?'صلة الرحم: اتصلي بجدتك أو جدك واسألي عنهما':'صلة الرحم: اتصل بجدك أو جدتك واسأل عنهما','heart',15,'family','weekly',0,1]];
  X.forEach(x=>base.push({id:'t'+(id++),time:x[0],name:x[1],icon:x[2],pts:x[3],cat:x[4],type:x[5],age:x[6]||undefined,need:!!x[7]||x[3]>=15,status:'todo',def:true,nv:1}));
  return {t:base,id}}
function load(){try{const r=localStorage.getItem(KEY);if(r){S=JSON.parse(r);try{const p=JSON.parse(localStorage.getItem(KEY+'-parent')||'null');if(p){if(p.cfg)S.cfg=p.cfg;if(p.pin)S.pin=p.pin}}catch(e){}return}}catch(e){} S=freshState(true)}
function save(){try{const kid=Object.assign({},S);delete kid.cfg;kid.pin=undefined;localStorage.setItem(KEY,JSON.stringify(kid));localStorage.setItem(KEY+'-parent',JSON.stringify({cfg:S.cfg,pin:S.pin}))}catch(e){}}
function ptRoll(){if(!S)return;if(!S.pt||S.pt.day!==S.day)S.pt={day:S.day,bought:0,left:0,used:0}}
function rollover(){
  const t=today();if(S.day===t){ptRoll();return}
  const act=visTasks().filter(x=>x.type==='routine'),done=act.filter(x=>x.status==='done').length,ok=act.length&&done/act.length>=0.7;
  S.streak=(daysBetween(S.day,t)===1&&ok)?S.streak+1:0;
  S.tasks=S.tasks.filter(x=>!(x.type==='special'&&x.status==='done'));const wk=weekKey();
  S.tasks.forEach(x=>{if(x.type==='weekly'&&x.wk===wk&&x.status!=='todo')return;x.status='todo'});S.day=t;ptRoll();save()}
function visTasks(){const off=(S.cfg&&S.cfg.off)||[],age=(S.cfg&&S.cfg.age)||'o';return S.tasks.filter(t=>!off.includes(catOf(t))&&(!t.age||t.age===age))}
function sortedTasks(){return visTasks().slice().sort((a,b)=>a.time.localeCompare(b.time))}
function possiblePts(){return visTasks().reduce((a,t)=>a+t.pts,0)}
function kInit(){
  S.cfg=Object.assign({dailyMax:30,ptsPer:20,minPer:10,off:[],age:'o',noLimit:false},S.cfg||{});if(!S.cfg.m10){if(S.cfg.minPer===5)S.cfg.minPer=10;S.cfg.m10=1}S.auto=false;(S.tasks||[]).forEach(t=>t.need=true);if(!S.cfg.m10b){if(S.cfg.minPer<10)S.cfg.minPer=10;if(S.cfg.dailyMax<30)S.cfg.dailyMax=30;S.cfg.m10b=1}
  S.playLog=S.playLog||{};S.cnt=Object.assign({ibada:0,family:0,study:0,health:0,behavior:0,built:0,plots:0,recruit:0},S.cnt||{});S.achGot=S.achGot||{};
  if(!S.kv){
    S.tasks=S.tasks.filter(t=>!(t.def&&t.type==='special'));
    S.tasks.forEach(t=>{t.cat=catOf(t);if(t.def&&!t.nv)t.pts=ptsScale(t.pts);if(t.need===undefined)t.need=t.pts>=15||t.type!=='routine'});
    const ex=genTasks(S.gender||'m',S.nextId||500);S.nextId=ex.id;const have=new Set(S.tasks.map(t=>t.name));
    ex.t.forEach(t=>{if(!have.has(t.name))S.tasks.push(t)});
    S.tasks.forEach(t=>{if(t.name.startsWith('تلاوة وحفظ صفحة')||t.name.startsWith('القراءة المفيدة'))t.age='o'});
    ptRoll();if(S.sample){S.pt.bought=10;S.pt.left=600;S.cnt.ibada=9;S.cnt.family=6;S.cnt.study=4;S.cnt.health=11;S.cnt.behavior=3;S.cnt.built=7;S.cnt.plots=2;S.cnt.recruit=8}
    S.kv=1}
  ptRoll();save()}
function timeOk(){if(!S.cfg)kInit();ptRoll();return S.cfg.noLimit||S.pt.left>0}
function canBuy(){const c=S.cfg;return S.points>=c.ptsPer&&S.pt.bought+c.minPer<=c.dailyMax}
function buyTime(n){ptRoll();let k=0;while(k<n&&canBuy()){S.points-=S.cfg.ptsPer;S.pt.bought+=S.cfg.minPer;S.pt.left+=S.cfg.minPer*60;k++}
  if(k){save();SFX.buy();toast(`+${k*S.cfg.minPer} دقائق لعب`,'clock');updateTop()}return k}
function fmtT(s){s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
function timeCardHTML(){if(!S.cfg)kInit();ptRoll();const c=S.cfg,L=S.pt.left,canB=canBuy(),capLeft=c.dailyMax-S.pt.bought;
  return `<div class="card tcard">${cardH('وقت اللعب')}<div class="card-b light"><div class="tcrow">
   <div class="tcbig"><canvas data-icon="clock" width="10" height="10"></canvas><div><div class="num v">${c.noLimit?'∞':fmtT(L)}</div><div class="s">${gx('الوقت المتبقي لك اليوم','الوقت المتبقي لكِ اليوم')}</div></div></div>
   <div class="tcbig"><canvas data-icon="star" width="10" height="10"></canvas><div><div class="num v">${S.points}</div><div class="s">نقاط الإنجاز</div></div></div></div>
   <div class="bar"><b style="width:${Math.min(100,S.pt.bought/c.dailyMax*100)}%"></b></div>
   <p class="note" style="margin:6px 0 10px">كل <b class="num">${c.ptsPer}</b> نقطة = <b class="num">${c.minPer}</b> دقائق · ${gx('فتحت','فتحتِ')} اليوم <b class="num">${S.pt.bought}</b> من <b class="num">${c.dailyMax}</b> دقيقة</p>
   <div class="row" style="flex-wrap:wrap">
    <button class="btn ${canB?'gold':'ghost'}" data-buytime="1">${ic('clock')} +${c.minPer} دقائق · ${c.ptsPer} نقطة</button>
    ${(L>0||c.noLimit)?`<button class="btn blue" data-play="${Math.min(S.cleared,STAGES.length-1)}">▶ ${gx('العب','العبي')} الآن</button>`:''}
    <button class="btn ghost" data-summary>${ic('chart')} ملخص اليوم</button></div>
   ${!canB&&!c.noLimit?`<p class="note" style="margin:8px 0 0">${capLeft<c.minPer?'وصلت إلى الحد اليومي لوقت اللعب. نلتقي غدًا بإذن الله':gx('أنجز مهامك لتجمع النقاط وتفتح وقتًا للّعب','أنجزي مهامك لتجمعي النقاط وتفتحي وقتًا للّعب')}</p>`:''}
  </div></div>`}
function timeModal(si,resume){ptRoll();const c=S.cfg;
  modal(`<div class="center celebrate" style="font-size:26px">${S.pt.left>0?'وقت اللعب':gx('تحتاج','تحتاجين')+' وقت لعب'}</div>
   <p class="center" style="margin:0;font-weight:800">${gx('استبدل','استبدلي')} نقاط الإنجاز بدقائق اللعب. كل <span class="num">${c.ptsPer}</span> نقطة = <span class="num">${c.minPer}</span> دقائق.</p>
   <div class="tcrow" style="justify-content:center"><div class="tcbig">${ic('star')}<div><div class="num v">${S.points}</div><div class="s">نقاطك</div></div></div><div class="tcbig">${ic('clock')}<div><div class="num v">${fmtT(S.pt.left)}</div><div class="s">المتبقي</div></div></div></div>
   <p class="note center" style="margin:0">الحد اليومي ${c.dailyMax} دقيقة · ${gx('فتحت','فتحتِ')} ${S.pt.bought} دقيقة اليوم</p>
   ${canBuy()?`<button class="btn gold wide" data-buytime="1" data-after="${si}" ${resume?'data-res="1"':''}>${ic('clock')} ${gx('افتح','افتحي')} ${c.minPer} دقائق مقابل ${c.ptsPer} نقطة</button>`:`<p class="center" style="font-weight:800;margin:0">${S.pt.bought+c.minPer>c.dailyMax?'وصلت إلى الحد اليومي لوقت اللعب. تقدّمك محفوظ، ونكمل غدًا بإذن الله.':gx('نقاطك لا تكفي الآن. أنجز مهمة من مهامك ثم عد إلى المغامرة.','نقاطكِ لا تكفي الآن. أنجزي مهمة من مهامكِ ثم عودي إلى المغامرة.')}</p><button class="btn blue wide" data-goto="tasks" data-close>${ic('list')} اذهب إلى المهام</button>`}
   ${S.pt.left>0||S.cfg.noLimit?`<button class="btn blue wide" data-play="${si}" ${resume?`data-resume-run="${si}"`:''}>▶ ${gx('العب','العبي')} الآن</button>`:''}
   <button class="btn ghost wide" data-close>إغلاق</button>`,'وقت اللعب')}
function ptTick(ts){if(!G)return;if(!S.cfg)kInit();if(G.over||G.paused||document.hidden||S.cfg.noLimit){G._pt=ts;return}
  const d=G._pt?Math.min(500,Math.max(0,ts-G._pt)):0;G._pt=ts;ptRoll();S.pt.left-=d/1000;S.pt.used+=d/1000;S.playLog[S.day]=(S.playLog[S.day]||0)+d/1000;
  const L=S.pt.left;if(L<=300&&L>60&&!G.w5){G.w5=1;banner(`<div class="bt">${ic('clock')} بقيت ٥ دقائق من وقت اللعب</div><div class="bs">${gx('أكمل بناءك واستعد لحفظ مغامرتك','أكملي بناءكِ واستعدي لحفظ مغامرتكِ')}</div>`,3600)}
  if(L<=60&&L>0&&!G.w1){G.w1=1;G.w5=1;banner(`<div class="bt">${ic('clock')} بقيت دقيقة واحدة</div><div class="bs">سيُحفظ تقدّمك تلقائيًا عند انتهاء الوقت</div>`,3600)}
  G._ps=(G._ps||0)+d;if(G._ps>4000){G._ps=0;save()}
  const el=document.getElementById('gTime');if(el){const tx=fmtT(L);if(el.textContent!==tx){el.textContent=tx;el.parentElement.classList.toggle('low',L<=60)}}
  if(L<=0){S.pt.left=0;timeUp()}}
function timeUp(){if(!G||G.over)return;saveRun();G.over=true;save();try{SFX.win()}catch(e){}
  banner(`<div class="bt">انتهى وقت اللعب لليوم</div><div class="bs">حُفظ تقدّمك كاملًا</div>`,2000);
  setTimeout(()=>{exitGame();tab='home';render();summaryModal(true)},1400)}
function summaryModal(up){ptRoll();const C=kCats(),done=visTasks().filter(t=>t.status==='done'),by={};done.forEach(t=>{const c=catOf(t);by[c]=(by[c]||0)+1});
  const mins=Math.round((S.playLog[S.day]||0)/60);
  modal(`${up?`<div class="center celebrate" style="font-size:26px">انتهى وقت اللعب لليوم</div><p class="center" style="margin:0;font-weight:800">${gx('أحسنت! حُفظت مملكتك وكل ما بنيته.','أحسنتِ! حُفظت مملكتكِ وكل ما بنيتِه.')} ${gx('أنجز','أنجزي')} مهامك غدًا لتكمل المغامرة.</p>`:''}
   <div class="tiles">
    <div class="tile">${ic('check')}<div class="v">${done.length}</div><div class="s">مهام منجزة</div></div>
    <div class="tile">${ic('star')}<div class="v">${todayPts()}</div><div class="s">نقاط اليوم</div></div>
    <div class="tile">${ic('clock')}<div class="v">${mins}</div><div class="s">دقائق لعب</div></div>
    <div class="tile">${ic('map')}<div class="v">${dayClears()}</div><div class="s">جزر جديدة</div></div>
    <div class="tile">${ic('coin')}<div class="v">${S.gold||0}</div><div class="s">عملات المملكة</div></div>
    <div class="tile">${ic('flame')}<div class="v">${S.streak}</div><div class="s">أيام متتالية</div></div></div>
   <div class="sec">إنجازات اليوم حسب الفئة</div>
   <div class="plist">${Object.entries(C).filter(([k])=>!(S.cfg.off||[]).includes(k)).map(([k,c])=>`<div class="prow">${ic(c.ic)}<span class="nm">${c.n}</span><b class="num">${by[k]||0}</b></div>`).join('')}</div>
   <button class="btn gold wide" data-close>${up?'إلى اللقاء غدًا':'رائع'}</button>`,'ملخص اليوم')}
/* ---------- achievements ---------- */
function achList(){const c=S.cnt||{};return [
  {id:'amana',n:'بطل الأمانة',d:'مهام الصدق والمسؤولية',ic:'shield',v:c.behavior||0,g:10},
  {id:'family',n:'صديق الأسرة',d:'مهام الأسرة وصلة الرحم',ic:'heart',v:c.family||0,g:15},
  {id:'reader',n:'قارئ المعرفة',d:'مهام الدراسة والقراءة',ic:'book',v:c.study||0,g:15},
  {id:'nur',n:'نور العبادة',d:'مهام العبادات والقيم',ic:'pray',v:c.ibada||0,g:20},
  {id:'healthy',n:'بطل العادات الصحية',d:'مهام الصحة والنظافة',ic:'tooth',v:c.health||0,g:20},
  {id:'nature',n:'حارس الطبيعة',d:'مزارع وحدائق بنيتها في المملكة',ic:'sun',v:c.plots||0,g:4},
  {id:'builder',n:'باني المملكة',d:'مبانٍ وأسوار أكملت بناءها',ic:'house',v:c.built||0,g:12},
  {id:'explorer',n:'مستكشف العوالم',d:'جزر أكملتها',ic:'map',v:S.cleared||0,g:5},
  {id:'coop',n:'فارس التعاون',d:'سكان انضموا إلى مملكتك',ic:'people',v:c.recruit||0,g:12}]}
function achTier(a){return a.v>=a.g*8?3:a.v>=a.g*3?2:a.v>=a.g?1:0}
function achCheck(){if(!S.achGot)return;const TN=['','البرونزية','الفضية','الذهبية'],GEM=[0,10,25,60];
  for(const a of achList()){const t=achTier(a),had=S.achGot[a.id]||0;if(t>had){S.achGot[a.id]=t;let g=0;for(let k=had+1;k<=t;k++)g+=GEM[k];S.gems+=g;save();
    setTimeout(()=>toast(`شارة «${a.n}» ${TN[t]}! +${g} جوهرة`,'gift'),900)}}}
function kBuilt(s){if(!S.cnt)return;S.cnt.built++;if(s.k==='plot')S.cnt.plots++;achCheck()}
function kRecruit(){if(G)G._recN=(G._recN||0)+1;if(!S.cnt)return;S.cnt.recruit++;achCheck()}
function rAch(){const L=achList(),TN=['لم تبدأ','برونزية','فضية','ذهبية'];
  const wk=k=>{let s=0,m=0;const d=new Date();d.setDate(d.getDate()-7*k);for(let i=0;i<7;i++){s+=S.log[today(d)]||0;m+=(S.playLog||{})[today(d)]||0;d.setDate(d.getDate()-1)}return [s,Math.round(m/60)]};
  const [w0,m0]=wk(0),[w1,m1]=wk(1),mx=Math.max(1,w0,w1);
  view.innerHTML=`<div class="stack">
   ${timeCardHTML()}
   <div class="card">${cardH('إنجازاتي')}<div class="card-b light"><div class="achs">${L.map(a=>{const t=achTier(a),nx=[a.g,a.g*3,a.g*8][Math.min(2,t)],p=t>=3?100:Math.min(100,a.v/nx*100);
     return `<div class="ach t${t}"><div class="medal">${ic(a.ic)}</div><div class="ai"><b>${a.n}</b><span>${a.d}</span><div class="bar"><b style="width:${p}%"></b></div><span><b class="num">${a.v}</b> من <b class="num">${t>=3?a.v:nx}</b> · ${TN[t]}</span></div></div>`}).join('')}</div>
     <p class="note" style="margin:8px 0 0">كل شارة لها ثلاث درجات: برونزية وفضية وذهبية، وكل درجة تمنحك جواهر لشراء الزينة من المتجر.</p></div></div>
   <div class="card">${cardH('تقدّمي الشخصي')}<div class="card-b light">
     <p class="note" style="margin:0 0 8px">${gx('قارن نفسك بنفسك: هذا الأسبوع مقابل الأسبوع الماضي','قارني نفسكِ بنفسكِ: هذا الأسبوع مقابل الأسبوع الماضي')}</p>
     <div class="cmp"><span>هذا الأسبوع</span><div class="bar"><b style="width:${w0/mx*100}%"></b></div><b class="num">${w0}</b></div>
     <div class="cmp"><span>الأسبوع الماضي</span><div class="bar"><b style="width:${w1/mx*100}%;background:#9a8fc0"></b></div><b class="num">${w1}</b></div>
     <p class="note" style="margin:8px 0 0">${w0>=w1?gx('ممتاز! أنت تتقدّم.','ممتاز! أنتِ تتقدّمين.'):gx('يمكنك أن تتفوّق على نفسك هذا الأسبوع!','يمكنكِ أن تتفوّقي على نفسكِ هذا الأسبوع!')} · دقائق اللعب: ${m0} (الماضي ${m1})</p></div></div>
  </div>`}
/* ---------- world unlock by completing the previous kingdom ---------- */
function kDone(r){return r===0||!!(S.stars||{})[r*PER-1]||S.cleared>=r*PER}
function unlockWorld(i){if(!kDone(i)&&!S.openAll)return;S.unlocked[i]=true;save();SFX.win();render();
  modal(`<div class="center celebrate">فُتحت مملكة جديدة!</div><canvas data-world="${i}" width="320" height="180" style="width:100%;height:auto;border:3px solid var(--ink);border-radius:8px"></canvas><p class="center" style="font-weight:800;margin:0">${WORLDS[i].name}: ${WORLDS[i].desc}</p><button class="btn wide gold" data-play="${i*PER}">▶ ${gx('ابدأ','ابدئي')} المرحلة الأولى</button>`)}
/* ---------- tasks: approval rules ---------- */
function markDone(id){const t=S.tasks.find(x=>x.id===id);if(!t||t.status!=='todo')return;if(t.type==='weekly')t.wk=weekKey();
  t.status='pending';SFX.click();toast(L2('أُرسلت لولي الأمر — تحصل على النقاط والعملات بعد موافقته','Sent to your parent — you get points and coins after approval'),'clock');save();render()}
function approve(id,ok){const t=S.tasks.find(x=>x.id===id);if(!t)return;if(ok){if(t.status!=='pending'){parentPanel();return}t.status='done';award(t.pts,t.name,catOf(t));SFX.done()}else t.status='todo';save();render();parentPanel()}
function award(p,why,cat){
  const before=level();S.points+=p;S.xp+=p;S.log[S.day]=(S.log[S.day]||0)+p;const gg=Math.max(1,Math.round(p/3));S.gold=(S.gold||0)+gg;
  if(cat&&S.cnt)S.cnt[cat]=(S.cnt[cat]||0)+1;
  toast(`+${p} نقطة إنجاز · ${why}`,'star');
  if(level()>before){setTimeout(()=>{SFX.win();modal(`<div class="center celebrate">المستوى ${level()}!</div><div class="center">${hero(S.look,4)}</div><p class="center" style="font-weight:800;margin:0">${gx('ارتفع مستواك يا بطل. استمر!','ارتفع مستواكِ يا بطلة. استمري!')}</p><button class="btn wide gold" data-close>رائع</button>`)},400)}
  const rt=visTasks().filter(t=>t.type==='routine');
  if(rt.length&&rt.every(t=>t.status==='done')&&S.bonusDay!==S.day){S.bonusDay=S.day;S.gems+=25;setTimeout(()=>toast('صندوق اليوم الكامل: +25 جوهرة','gift'),700)}
  achCheck()}
/* ---------- parent panel ---------- */
function parentPanel(){if(!S.cfg)kInit();ptRoll();const C=kCats(),c=S.cfg,pend=S.tasks.filter(t=>t.status==='pending');
  const days=[];{const d=new Date();for(let k=0;k<7;k++){days.push(today(d));d.setDate(d.getDate()-1)}}
  const all=S.tasks.slice().sort((a,b)=>a.time.localeCompare(b.time));
  modal(`
   <div class="sec">بانتظار الموافقة (${pend.length})</div>
   <div class="plist">${pend.length?pend.map(t=>`<div class="prow">${ic(t.icon)}<span class="nm">${esc(t.name)} · +${t.pts}</span><button class="btn sm" data-approve="${t.id}">وافق</button><button class="btn sm red" data-reject="${t.id}">ليس بعد</button></div>`).join(''):'<p class="note" style="margin:0">لا توجد مهام بانتظار الموافقة.</p>'}</div>
   ${pend.length>1?`<button class="btn gold wide" data-approveall>✓ ${L2('وافق على الكل','Approve all')} (${pend.length})</button>`:''}
   <div class="sec">وقت اللعب</div>
   <div class="row"><div class="field">الحد اليومي (دقيقة)<input id="cMax" type="number" min="5" max="180" step="5" value="${c.dailyMax}"></div><div class="field">النقاط المطلوبة<input id="cPer" type="number" min="5" max="100" value="${c.ptsPer}"></div><div class="field">مقابل (دقائق)<input id="cMin" type="number" min="1" max="30" value="${c.minPer}"></div></div>
   <label class="switch">بدون حد لوقت اللعب (للتجربة فقط)<input type="checkbox" id="cNoLim" ${c.noLimit?'checked':''}></label>
   <button class="btn blue wide" id="saveTime">احفظ إعدادات الوقت</button>
   <p class="note" style="margin:0">اليوم: فُتح ${S.pt.bought} دقيقة · لُعب ${Math.round(S.pt.used/60)} دقيقة · المتبقي ${fmtT(S.pt.left)}</p>
   <div class="sec">سجل آخر ٧ أيام</div>
   <div class="plist">${days.map(d=>`<div class="prow"><span class="nm num">${d}</span><span>${ic('star')} ${S.log[d]||0}</span><span>${ic('clock')} ${Math.round(((S.playLog||{})[d]||0)/60)} د</span></div>`).join('')}</div>
   <div class="sec">التقدّم في الممالك</div>
   <div class="plist">${WORLDS.map((w,i)=>{const n=STAGES.slice(i*PER,(i+1)*PER).filter(st=>(S.stars||{})[st.i]).length;return `<div class="prow"><span class="nm">${w.name}</span><span class="num">${n} / ${PER}</span>${S.unlocked[i]?'':ic('lock')}</div>`}).join('')}</div>
   <div class="sec">فئات المهام وعمر الطفل</div>
   <div class="plist">${Object.entries(C).map(([k,v])=>`<label class="switch">${ic(v.ic)} ${v.n}<input type="checkbox" data-catset="${k}" ${(c.off||[]).includes(k)?'':'checked'}></label>`).join('')}</div>
   <div class="field">الفئة العمرية<select id="cAge"><option value="y" ${c.age==='y'?'selected':''}>من ٧ إلى ٩ سنوات</option><option value="o" ${c.age!=='y'?'selected':''}>من ١٠ إلى ١٢ سنة</option></select></div>
   <div class="sec">نقاط الإنجاز (الرصيد ${S.points})</div>
   <div class="row"><div class="field">تصحيح الرصيد (+ أو −)<input id="adjPts" type="number" value="0"></div><button class="btn sm" id="adjGo" style="align-self:flex-end">تطبيق</button><button class="btn sm red" id="ptsZero" style="align-self:flex-end">تصفير</button></div>
   <div class="row"><button class="btn gold sm" data-bonus="5">+5 سلوك رائع</button><button class="btn gold sm" data-bonus="15">+15 إنجاز مميز</button></div>
   <label class="switch">فتح جميع المراحل والممالك (للتجربة)<input type="checkbox" id="openAll" ${S.openAll?'checked':''}></label>
   
   <div class="sec">إضافة مهمة</div>
   <div class="field">اسم المهمة<input id="nName" maxlength="50" placeholder="مثال: ري النباتات"></div>
   <div class="row"><div class="field">الوقت<input id="nTime" type="time" value="17:00"></div><div class="field">النقاط<select id="nPts"><option value="5">5 بسيطة</option><option value="10" selected>10 متوسطة</option><option value="15">15 كبيرة</option></select></div><div class="field">الفئة<select id="nCat">${Object.entries(C).map(([k,v])=>`<option value="${k}">${v.n}</option>`).join('')}</select></div></div>
   <div class="row"><div class="field">الأيقونة<select id="nIcon">${ICON_CHOICES.map(([k,l])=>`<option value="${k}">${l}</option>`).join('')}</select></div><div class="field">النوع<select id="nType"><option value="routine">يومية</option><option value="weekly">أسبوعية</option><option value="special">لمرة واحدة</option></select></div></div>
   <input type="checkbox" id="nNeed" checked hidden>
   <button class="btn blue wide" id="addTask">أضف المهمة</button>
   <div class="sec">كل المهام (${S.tasks.length}) · عدّل الاسم أو النقاط مباشرة</div>
   <div class="plist">${all.map(t=>`<div class="prow erow">${ic(t.icon)}<input class="ename" data-ename="${t.id}" value="${esc(t.name)}" maxlength="50"><input class="epts num" data-epts="${t.id}" type="number" min="1" max="50" value="${t.pts}"><span class="tag">${typeName(t)}${t.age?(t.age==='y'?' · ٧-٩':' · ١٠-١٢'):''}</span><button class="btn sm red" data-del="${t.id}" aria-label="حذف">حذف</button></div>`).join('')}</div>
   <div class="sec">الإعدادات</div>
   <div class="row"><div class="field">الطفل<select id="cGender"><option value="m" ${S.gender!=='f'?'selected':''}>ولد</option><option value="f" ${S.gender==='f'?'selected':''}>بنت</option></select></div><div class="field">اسم الطفل<input id="cName" maxlength="16" value="${esc(S.name)}"></div><div class="field">رمز سري جديد (4 أرقام)<input id="cPin" inputmode="numeric" maxlength="4" placeholder="••••"></div></div>
   <button class="btn wide" id="saveSet">احفظ الإعدادات</button>
   <p class="note" style="margin:0">تُحفظ البيانات على هذا الجهاز فقط (التخزين المحلي للمتصفح)، ولا تُرسل إلى أي خادم. لا تزامن بين الأجهزة، والحماية من التلاعب محدودة.</p>
   ${S.sample?'<p class="note" style="margin:0">التقدم الحالي مثال للتجربة. ابدأ من الصفر عندما يكون طفلك جاهزًا.</p>':''}
   <div id="resetBox"><button class="btn red wide" id="resetBtn">ابدأ من الصفر</button></div>
   <button class="btn ghost wide" data-close>إغلاق</button>`,'لوحة ولي الأمر')}
function kClick(b,d){
  if(d.buytime!==undefined){if(!buyTime(+d.buytime||1)){toast(S.pt.bought+S.cfg.minPer>S.cfg.dailyMax?'وصلت إلى الحد اليومي':'نقاطك لا تكفي','lock');return true}
    if(d.after!==undefined){const si=+d.after;closeModal();startStage(si,!!d.res);return true}render();return true}
  if(d.summary!==undefined){summaryModal(false);return true}
  if(d.timeshop!==undefined){timeModal(Math.min(S.cleared,STAGES.length-1));return true}
  if(b.id==='saveTime'){const mx=Math.max(5,Math.min(180,+$('#cMax').value||30)),pp=Math.max(5,Math.min(100,+$('#cPer').value||20)),mm=Math.max(1,Math.min(30,+$('#cMin').value||5));
    S.cfg.dailyMax=mx;S.cfg.ptsPer=pp;S.cfg.minPer=mm;S.cfg.noLimit=$('#cNoLim').checked;save();render();toast('حُفظت إعدادات الوقت','check');parentPanel();return true}
  if(b.id==='adjGo'){const v=Math.round(+$('#adjPts').value||0);if(v){S.points=Math.max(0,S.points+v);save();render();toast('عُدّل الرصيد','check')}parentPanel();return true}
  if(b.id==='ptsZero'){S.points=0;save();render();toast('صُفّر رصيد النقاط','check');parentPanel();return true}
  if(b.id==='addTask'){const n=$('#nName').value.trim();if(!n){toast('اكتب اسم المهمة أولًا');return true}
    const p=+$('#nPts').value||10;S.tasks.push({id:'t'+(S.nextId++),time:$('#nTime').value||'17:00',name:n,icon:$('#nIcon').value,pts:p,cat:$('#nCat').value,type:$('#nType').value,need:$('#nNeed').checked,status:'todo'});save();render();parentPanel();toast('أُضيفت المهمة','check');return true}
  return false}
function kChange(e){const el=e.target,d=el.dataset;
  if(d.catset){const off=new Set(S.cfg.off||[]);if(el.checked)off.delete(d.catset);else off.add(d.catset);S.cfg.off=[...off];save();render();return}
  if(el.id==='cAge'){S.cfg.age=el.value;save();render();return}
  if(d.ename){const t=S.tasks.find(x=>x.id===d.ename),v=el.value.trim();if(t&&v){t.name=v;save();render()}return}
  if(d.epts){const t=S.tasks.find(x=>x.id===d.epts);if(t){t.pts=Math.max(1,Math.min(50,Math.round(+el.value||t.pts)));el.value=t.pts;save();render()}return}
  if(d.eneed){const t=S.tasks.find(x=>x.id===d.eneed);if(t){t.need=el.checked;save()}return}}
function updateTop(){$('#tPts').textContent=S.points;{const e=$('#tGold');if(e)e.textContent=S.gold||0}$('#tGems').textContent=S.gems;drawIcon($('#sndIc'),S.muted?'mute':'sound');
  const tv=$('#tTimeV');if(tv&&S.cfg){ptRoll();tv.textContent=S.cfg.noLimit?'∞':fmtT(S.pt.left)}}

/* ================= PAUSE MENU · TUTORIAL · FLYING COINS · FINAL VICTORY ================= */
function pauseMenuOld(){if(!G||G.over)return;G.paused=true;const si=G.si;
  modal(`<div class="center celebrate" style="font-size:28px">استراحة</div>
   <p class="center note" style="margin:0">اللعبة متوقفة، ووقت اللعب لا ينقص الآن.</p>
   <button class="btn gold wide" data-presume>▶ ${gx('تابع','تابعي')} اللعب</button>
   <div class="row"><button class="btn blue" style="flex:1" data-psound>${ic(S.muted?'mute':'sound')} ${S.muted?'تشغيل الصوت':'كتم الصوت'}</button><button class="btn blue" style="flex:1" data-ptut>${ic('scroll')} الدرس التعليمي</button></div>
   <button class="btn blue wide" data-pgq>${ic('star')} جودة الرسومات: ${GQN[S.gq||'auto']}${(S.gq||'auto')==='auto'?' ('+GQN[GFX.q]+')':''}</button>
   <div id="pRestart"><button class="btn ghost wide" data-prestart>↻ ${gx('أعد','أعيدي')} هذه الجزيرة من البداية</button></div>
   <button class="btn ghost wide" data-pexit>${ic('house')} حفظ والعودة إلى القائمة</button>
   <p class="note center" style="margin:0">لوحة المفاتيح: الأسهم للحركة · المسافة لدفع العملة · J للهجوم · F للنزول عن الخيل · M للخريطة · P للاستراحة</p>`,'الجزيرة '+(si+1))}
function pClick(b,d){
  if(d.presume!==undefined){closeModal();return true}
  if(d.pgq!==undefined){const o=['auto','max','ultra','high','smooth'],q=o[(o.indexOf(S.gq||'auto')+1)%5];S.gq=q;if(q==='auto')S.gqAuto=null;save();applyQ();sizeGame();GFX.fps=[];pauseMenu();return true}
  if(d.psound!==undefined){initAudio();S.muted=!S.muted;if(master)master.gain.value=S.muted?0:.9;save();updateTop();pauseMenu();return true}
  if(d.ptut!==undefined){S.tut=0;save();closeModal();tutShow();return true}
  if(d.prestart!==undefined){$('#pRestart').innerHTML=`<p class="center" style="margin:0;font-weight:800">ستبدأ الجزيرة من جديد وتعود عملاتها إلى الخزينة. متأكد؟</p><div class="row"><button class="btn red" style="flex:1" data-prestartyes>نعم، ${gx('أعد','أعيدي')} البدء</button><button class="btn ghost" style="flex:1" data-presume>تراجع</button></div>`;hydrate($('#pRestart'));return true}
  if(d.prestartyes!==undefined){const si=G.si;S.gold=(S.gold||0)+(G.purse||0);S.run=null;G.over=true;save();cancelAnimationFrame(graf);G=null;closeModal();startStage(si);return true}
  if(d.pexit!==undefined){closeModal();if(G&&!G.over){saveRun();G.over=true}exitGame();tab='home';render();return true}
  if(d.tutskip!==undefined){S.tut=99;save();tutHide();return true}
  return false}
/* ---- tutorial: shown on the player's first islands until each step is done ---- */
function tutSteps(){return [
  {t:'١. الحركة',m:gx('حرّك جوادك يمينًا ويسارًا بالأزرار (أو الأسهم) لتستكشف أرضك.','حرّكي جوادكِ يمينًا ويسارًا بالأزرار (أو الأسهم) لتستكشفي أرضكِ.'),ok:()=>Math.abs(G.hx)>70},
  {t:'٢. العملات',m:gx('العملات هي ثروة المملكة. اجمع العملات اللامعة، وافتح صناديق الكنز.','العملات هي ثروة المملكة. اجمعي العملات اللامعة، وافتحي صناديق الكنز.'),ok:()=>G.t>6000||G.purse!==(G._tp0??G.purse)},
  {t:'٣. البناء',m:gx('قف عند علامة البناء المضيئة واضغط زر العملة الذهبي لتدفع. ستطير العملات إلى المبنى.','قفي عند علامة البناء المضيئة واضغطي زر العملة الذهبي لتدفعي. ستطير العملات إلى المبنى.'),ok:()=>(G._paidN||0)>=2},
  {t:'٤. السكان',m:gx('أعطِ المتجوّلين حول النار عملة ليصبحوا قرويين، ثم اشترِ لهم القوس (رامٍ) أو المطرقة (بنّاء).','أعطي المتجوّلين حول النار عملة ليصبحوا قرويين، ثم اشتري لهم القوس (رامٍ) أو المطرقة (بنّاء).'),ok:()=>(G._recN||0)>=1},
  {t:'٥. الليل',m:gx('ابنِ الأسوار قبل الغروب! الوحوش تخرج من البوابات ليلًا لتسرق العملات، وإن أخذت التاج خسرت الجزيرة.','ابني الأسوار قبل الغروب! الوحوش تخرج من البوابات ليلًا لتسرق العملات، وإن أخذت التاج خسرتِ الجزيرة.'),ok:()=>G.day>=2},
  {t:'٦. الإبحار',m:gx('أصلح السفينة عند المرسى بالعملات، ثم اركبها لتبحر إلى الجزيرة التالية. تقدّمك محفوظ دائمًا.','أصلحي السفينة عند المرسى بالعملات، ثم اركبيها لتبحري إلى الجزيرة التالية. تقدّمكِ محفوظ دائمًا.'),ok:()=>site('boat')&&(site('boat').lvl>=1||site('boat').build>=0)}]}
function tutShow(){const el=$('#gTut');if(!el||!G)return;const st=tutSteps(),i=S.tut||0;if(i>=st.length){tutHide();return}
  if(G._tp0===undefined)G._tp0=G.purse;el.innerHTML=`<div class="tt">${ic('scroll')}<b>${st[i].t}</b><span class="num">${i+1}/${st.length}</span></div><div class="tm">${st[i].m}</div><button class="tsk" data-tutskip>تخطّي الدرس</button>`;el.hidden=true}
function tutHide(){const el=$('#gTut');if(el)el.hidden=true}
function tutTick(){if(!G||G.over||(S.tut||0)>=99)return;const st=tutSteps(),i=S.tut||0;if(i>=st.length){tutHide();return}
  if((G._tutT=(G._tutT||0)+1)%20)return;
  try{if(st[i].ok()){S.tut=i+1;save();SFX.coin();if(S.tut>=st.length){tutHide();banner(`<div class="bt">${gx('أتقنت','أتقنتِ')} أساسيات المملكة!</div><div class="bs">${gx('ابنِ ودافع واستكشف','ابني ودافعي واستكشفي')}</div>`,2600)}else tutShow()}}catch(e){}}
/* ---- coins visibly fly from the purse to what they pay for ---- */
function flyCoin(x1,y1){if(!G)return;(G.fly=G.fly||[]).push({x0:G.hx,y0:GY-54,x1,y1,t:0})}
function drawFlyCoins(B,toS){if(!G||!G.fly||!G.fly.length)return;for(const f of G.fly){f.t+=.05;const u=Math.min(1,f.t),x=f.x0+(f.x1-f.x0)*u,y=f.y0+(f.y1-f.y0)*u-Math.sin(u*Math.PI)*22,sx=toS(x);
    B.fillStyle='#3a2410';B.fillRect(sx-2.5,y-2.5,5,5);B.fillStyle='#f5c542';B.fillRect(sx-2,y-2,4,4);B.fillStyle='#fff3b0';B.fillRect(sx-1.5,y-1.5,1.5,1.5);B.fillStyle='#c9921f';B.fillRect(sx+.5,y-1,1,3)
    if(u>=1){puff(f.x1,f.y1,5,'#f5c542',1.3)}}G.fly=G.fly.filter(f=>f.t<1)}
/* ---- final victory after the last island ---- */
function finalVictory(){SFX.win();modal(`<div class="center celebrate">${gx('انتصرت أيها البطل!','انتصرتِ أيتها البطلة!')}</div><div class="center">${hero(S.look,4)}</div>
  <p class="center" style="font-weight:800;margin:0">${gx('حرّرت','حرّرتِ')} الممالك الخمس وأكملت الجزر كلها، وأضاءت «مملكة النور» بإنجازاتك اليومية.</p>
  <div class="tiles"><div class="tile">${ic('map')}<div class="v">${S.cleared}</div><div class="s">جزيرة</div></div><div class="tile">${ic('star')}<div class="v">${S.xp}</div><div class="s">نقطة إنجاز</div></div><div class="tile">${ic('house')}<div class="v">${(S.cnt||{}).built||0}</div><div class="s">مبنى</div></div></div>
  <button class="btn gold wide" data-close>الحمد لله</button>`,'النصر')}

/* ================= GFX v26: adaptive resolution, tint cache, bloom, cloud shadows, dust, water light ================= */
function WINDF(t){return .55+.3*Math.sin(t/4100)+.18*Math.sin(t/1270+1.3)+.08*Math.sin(t/377)}
var GQN={auto:'تلقائية',max:'قصوى',ultra:'فائقة',high:'عالية',smooth:'سلسة'};
function gqLevel(){const q=(S&&S.gq)||'auto';if(q!=='auto')return q;if(S&&S.gqAuto)return S.gqAuto;
  const dpr=window.devicePixelRatio||1,px=Math.max(innerWidth,innerHeight)*dpr,cores=navigator.hardwareConcurrency||4;const fine=matchMedia&&matchMedia('(pointer:fine)').matches;return (fine&&dpr>=2&&cores>=8&&px>=2400)?'max':(dpr>=2&&px>=1500&&cores>=4)?'ultra':(px>=1400&&cores>=4)?'ultra':'high'}
function applyQ(){const q=gqLevel();{const g=document.getElementById('game'),hh=((g&&g.clientHeight)||innerHeight)*(window.devicePixelRatio||1),need=Math.round(hh/250*1.05),cap=q==='max'?4:q==='ultra'?3:2;RS=Math.max(2,Math.min(cap,need||2))}SR=Math.min(4,RS);GFX.q=q;GFX.bloom=q!=='smooth'&&(!S.opt||!!S.opt.fx);GFX.extra=q!=='smooth'&&(!S.opt||!!S.opt.fx)}
var GFX={bloom:true,extra:true,q:'high',fps:[],tint:new Map()};
/* fps watchdog: auto-quality steps down if the device can't keep up */
function gfxWatch(ts){if(!G||G.paused||G.over||document.hidden){GFX._lt=0;return}if(GFX._lt){const d=ts-GFX._lt;if(d>0&&d<250)GFX.fps.push(d)}GFX._lt=ts;
  if(GFX.fps.length<150)return;const a=GFX.fps.slice(30).sort((x,y)=>x-y),med=a[a.length>>1],p10=a[Math.floor(a.length*.1)],fps=1000/med;if(med>31&&med<35.5&&p10>29.5){GFX.fps=[];return}GFX.fps=[];GFX.last=Math.round(fps);
  if(((S.gq||'auto')==='auto')&&fps<47){const nx=GFX.q==='max'?'ultra':GFX.q==='ultra'?'high':GFX.q==='high'?'smooth':null;if(nx){S.gqAuto=nx;save();applyQ();sizeGame();HDC_trim();toast('ضُبطت جودة الرسومات على «'+GQN[nx]+'» لحركة أنعم','check')}}}
function HDC_trim(){GFX.tint.clear()}
/* pre-tinted parallax strips (cached per tint level) instead of re-tinting every frame */
function tintStrip(cv,tA,dA,nightC){const qa=Math.round(Math.min(.92,tA)*24),qd=Math.round(dA*24);if(!qa&&!qd)return cv;
  let m=GFX.tint.get(cv);if(!m){m=new Map();GFX.tint.set(cv,m)}const k=qa+'_'+qd;let o=m.get(k);if(o)return o;
  o=mkc(cv.width,cv.height);const c=o.getContext('2d');c.drawImage(cv,0,0);c.globalCompositeOperation='source-atop';if(qd){c.fillStyle=`rgba(170,70,90,${qd/24})`;c.fillRect(0,0,o.width,o.height)}if(qa){c.fillStyle=`rgba(${nightC},${qa/24})`;c.fillRect(0,0,o.width,o.height)}
  if(m.size>=3)m.delete(m.keys().next().value);m.set(k,o);return o}
/* soft bloom: downsample, square the brights, add back */
var BLM=null;function bloom(c,nf,dusk){if(!GFX.bloom)return;const cw=c.canvas.width,ch=c.canvas.height,sw=Math.max(32,cw>>3),sh=Math.max(16,ch>>3);
  if(!BLM||BLM.width!==sw||BLM.height!==sh)BLM=mkc(sw,sh);const b=BLM.getContext('2d');b.globalCompositeOperation='source-over';b.imageSmoothingEnabled=true;b.drawImage(c.canvas,0,0,sw,sh);
  b.globalCompositeOperation='multiply';b.drawImage(BLM,0,0);b.drawImage(BLM,0,0);b.globalCompositeOperation='source-over';
  c.save();c.setTransform(1,0,0,1,0,0);c.imageSmoothingEnabled=true;c.globalCompositeOperation='lighter';c.globalAlpha=(nf>.5?.3:dusk>.3?.32:.22)*(PIX()?.55:1);c.drawImage(BLM,0,0,cw,ch);c.globalAlpha=1;c.globalCompositeOperation='source-over';c.imageSmoothingEnabled=false;c.restore()}
/* drifting cloud shadows over the land (daytime) */
var CSH=null;function cloudShadows(B,cam,t,W,nf){if(!GFX.extra||nf>.55)return;if(!CSH){CSH=mkc(256,64);const c=CSH.getContext('2d'),g=c.createRadialGradient(128,32,4,128,32,120);g.addColorStop(0,'rgba(20,26,40,.9)');g.addColorStop(1,'rgba(20,26,40,0)');c.setTransform(1,0,0,.25,0,24);c.fillStyle=g;c.fillRect(0,-100,256,256)}
  const a=(1-nf/.55)*.16;B.save();B.globalAlpha=a;B.globalCompositeOperation='multiply';for(let k=-1;k<4;k++){const per=W*1.6,x=((k*per*.55-cam*.9+t*.006)%(per*2.2)+per*2.2)%(per*2.2)-per*.6;B.drawImage(CSH,x,GY-70,W*.9,90)}B.restore()}
/* daylight motes floating in the light shafts */
function motes(B,t,W,H,nf,dusk){if(!GFX.extra||nf>.7)return;const a=(1-nf/.7);B.globalCompositeOperation='lighter';for(let k=0;k<26;k++){const x=((k*131.7+t*.006*(1+k%3))%(W+40))-20,y=GY-20-((k*53.3+t*.004*(1+k%2))%(GY*.8)),tw=.5+.5*Math.sin(t/600+k*1.7);B.fillStyle=dusk>.3?`rgba(255,190,120,${.35*a*tw})`:`rgba(255,250,220,${.32*a*tw})`;B.fillRect(x,y,k%4?1:1.5,k%4?1:1.5)}B.globalCompositeOperation='source-over'}
/* sun / moon glitter column + sparkles on water */
function waterLight(c,hy,H,t,W,nf,dusk){if(!GFX.extra)return;const night=nf>.55,sx=W*.74,col=night?'200,215,255':dusk>.3?'255,170,90':'255,246,214',a0=night?.5:dusk>.3?.6:.42;c.save();c.globalCompositeOperation='lighter';
  for(let y=hy+1;y<H;y+=1.2){const d=(y-hy)/(H-hy),w=(4+d*26)*(.6+.4*Math.sin(y*1.7+t/240)),xo=Math.sin(y*.9+t/380)*d*6;if(Math.sin(y*3.1+t/170)<-.2)continue;c.fillStyle=`rgba(${col},${a0*(1-d*.75)})`;c.fillRect(sx-w/2+xo,y,w,.6)}
  for(let k=0;k<34;k++){const x=(hsh2(k,7,1)*W+t*.004*(k%3?1:-1)+W)%W,y=hy+2+hsh2(k,9,2)*(H-hy-3),ph=Math.sin(t/300+k*2.3);if(ph<.6)continue;c.fillStyle=`rgba(${col},${(ph-.6)*1.6})`;c.fillRect(x-1,y,2.5,.5);c.fillRect(x,y-.5,.5,1.5)}
  c.restore()}
/* hoof dust, snow powder and splashes */
function gfxUpdate(dt){if(!G||!GFX.extra)return;const sp=Math.abs(G.vx||0);
  if(!G.foot&&!G.sail&&!(G.alt>2)&&sp>1.25){G._dust=(G._dust||0)+dt*sp*.35;while(G._dust>1){G._dust--;const snow=G.b===1,col=snow?'#f4f8ff':G.b===2?'#e2c48a':G.b===3?'#6a5a52':'#b8a27e';
    G.fx.push({x:G.hx-G.face*(6+Math.random()*8),y:GY-1-Math.random()*2,vx:-G.face*(.2+Math.random()*.5),vy:-.15-Math.random()*.35,g:-.002,life:34+Math.random()*20,col,s:2,d:1,r:1.2+Math.random()*1.5})}}
  else if(G.foot&&sp>.9&&Math.random()<.08*dt)G.fx.push({x:G.hx-G.face*3,y:GY-1,vx:-G.face*.2,vy:-.12,g:-.002,life:22,col:'#b8a27e',s:1,d:1,r:.8})}
function drawFx(B,V,toS){for(const p of V.fx){const sx=toS(p.x);if(p.d){const u=1-p.life/54,r=p.r*(1+u*2.4);B.globalAlpha=Math.max(0,Math.min(.55,p.life/40))*.7;B.fillStyle=p.col;B.beginPath();B.arc(sx,p.y,r,0,7);B.fill()}else{B.globalAlpha=Math.min(1,p.life/14);B.fillStyle=p.col;B.fillRect(sx,p.y,p.s*.75,p.s*.75)}}B.globalAlpha=1}

/* ================= QUESTS: rival villages, informants, hidden legends, freeing the island (KTC goal) ================= */
var GPAL=[{a:'#5a3a24',b:'#7a5434',c:'#8ad8ff',e:'#7ae0ff'},{a:'#e8ecf2',b:'#c8d0dc',c:'#7ad8ff',e:'#38e0f0'},{a:'#8a5a2e',b:'#b07a40',c:'#ffd040',e:'#ffb02e'},{a:'#2a1a1a',b:'#4a2a24',c:'#ff6a1a',e:'#ff8a20'},{a:'#9a8ac8',b:'#c4b4e8',c:'#ffc8f0',e:'#ff9ae8'}];
var LEGW=['wpn_firesword','wpn_frostbow','wpn_lightning','wpn_lavahammer','wpn_icespear','wpn_star','wpn_scepter','wpn_diamond'];
function questIsland(si,I,sites,props,people,R){const b=STAGES[si].d>=0?STAGES[si].b:0,d=STAGES[si].d;
  const busy=(x,m)=>sites.some(s=>Math.abs(s.x-x)<m)||props.some(p=>['house','river','portal','lair','camp','chest','ruins','shrine','well','statue2','falls','stall','crag','rvil','npc','relic','gemchest'].includes(p.k)&&Math.abs(p.x-x)<(p.k==='river'?p.w/2+m:m));
  const free=(x0,m)=>{for(const mm of [m,m*.7,m*.45])for(let k=0;k<110;k++){const x=Math.round(x0+(k%2?1:-1)*Math.ceil(k/2)*37);if(Math.abs(x)>260&&Math.abs(x)<I.half-560&&Math.sign(x)===Math.sign(x0||1)&&!busy(x,mm))return x}return null};
  const GU=[['bear','الدب الأسطوري'],['griffin','الغريفين'],['wyvern','التنين المجنّح'],['mammoth','الماموث العتيق'],['golem','العملاق الصخري'],['basilisk','الباسيليسك'],['roc','طائر الرخ'],['yeti','اليتي الأبيض'],['wolf','الذئب الفضي']];
  const VN=['قرية النخيل','قرية الصخرة','قرية الينابيع','قرية الصقور','قرية الوادي','قرية الحدّادين','قرية الرمّان','قرية الفنار','قرية البرج','قرية اللؤلؤ'];
  const nv=si<1?1:1+(d>=6?1:0)+(d>=22?1:0);const vils=[];
  for(let k=0;k<nv;k++){const sd=(k+si)%2?-1:1,x=free(sd*Math.round(I.half*(.4+R()*.28)),150);if(x===null)continue;const id='v'+k,gu=GU[(si*3+k*5)%GU.length];
    const vil={k:'rvil',x,id,name:VN[(si*2+k)%VN.length],state:'hostile',gu:gu[1],gt:gu[0],price:7+Math.floor(d/3),gems:d>=18?2+Math.floor(d/8):0,sec:0,side:sd,war:0,fort:0};props.push(vil);vils.push(vil);
    [-72,72].forEach((dx,j)=>props.push({k:'house',kind:j?'house':'cottage',x:x+dx,v:(si+k+j)%3,vid:id}));props.push({k:'camp',x:x+sd*128,vid:id});
    const nr=2+(d>=12?1:0)+(d>=30?1:0);for(let j=0;j<nr;j++){const bx=Math.round(x+(j-(nr-1)/2)*30);props.push({k:'beast',x:bx,x0:bx,kk:'g',big:0,vid:id,hp:3+Math.floor(d/8),t:R()*99,dir:1,alive:1,spec:{type:'raider',name:'حرّاس '+vil.name,pal:RAIDER_PAL[b]}})}
    const fly=['griffin','wyvern','roc'].includes(gu[0]);props.push({k:'beast',x:x+sd*44,x0:x+sd*44,kk:fly?'a':'g',big:1,vid:id,guard:1,hp:12+d,t:R()*99,dir:1,alive:1,spec:{type:gu[0],name:gu[1]+' حارس '+vil.name,pal:GPAL[b]}});
    props.push({k:'npc',role:'elder',x:x-sd*175,vid:id,name:'شيخ '+vil.name,step:0,v:k});if(si>=5){const cav=1+(d>=20?1:0);for(let j=0;j<cav;j++){const bx=Math.round(x-sd*(40+j*36));props.push({k:'beast',x:bx,x0:bx,kk:'g',big:0,vid:id,rider:'knight',v:j,hp:5+Math.floor(d/6),t:R()*99,dir:1,alive:1,spec:{type:'horse',name:'فرسان '+vil.name,pal:HPAL[(si+j)%HPAL.length]}})}}}
  // hidden legends
  const sh=props.find(p=>p.k==='shrine');if(sh)sh.hidden=1;
  const fsd=si%2?1:-1,rx=free(fsd*Math.round(I.half*(.62+R()*.18)),60);if(rx!==null){props.push({k:'relic',x:rx,w:LEGW[si%LEGW.length],hidden:1,got:0});if(si>=5)props.push({k:'beast',x:rx+fsd*40,x0:rx+fsd*40,kk:'g',big:1,hp:10+d,t:R()*99,dir:1,alive:1})}
  const gx0=free(-fsd*Math.round(I.half*(.5+R()*.25)),50);if(gx0!==null){props.push({k:'gemchest',x:gx0,gems:6+Math.floor(d/3),hidden:1,open:0});for(let j=0;j<(si<5?0:2);j++){const bx=gx0+(j?36:-36);props.push({k:'beast',x:bx,x0:bx,kk:j?'a':'g',big:0,hp:2+Math.floor(d/8),t:R()*99,dir:1,alive:1})}}
  // one mysterious informant per island: a long, riddle-like search
  const ORD=['mount','weapon','gems','village'];let tp=ORD[si%4];const has={mount:!!sh,weapon:rx!==null,gems:gx0!==null,village:vils.length>0};if(!has[tp])tp=ORD.find(k=>has[k]);
  const NP=[['الرحّالة الغامض','vagrant'],['الحكيم الأعمى','vagrant'],['حارس المنارة القديم','farmer'],['الصياد الصامت','farmer'],['ناسخ الكتب','villager']];
  const marks=props.filter(p=>['falls','ruins','statue2','well'].includes(p.k)&&Math.abs(p.x)>300&&Math.abs(p.x)<I.half*.7);
  if(tp){const sd=si%2?-1:1,home=props.find(p=>p.k==='ruins'&&Math.abs(p.x)>500&&Math.abs(p.x)<I.half*.55),x=free(home?home.x+40:sd*Math.round(I.half*(.28+R()*.14)),40);
    if(x!==null){const n=NP[si%NP.length],P=['pay','dawn','wood','visit'];const req=[];let k0=Math.floor(R()*4);while(req.length<3){const r=P[(k0++)%4];if(r==='visit'&&!marks.length)continue;req.push(r)}if(si<1)req.splice(0,3,'pay','visit','dawn');
      const mk=marks.length?marks[Math.floor(R()*marks.length)]:null;
      props.push({k:'npc',role:'info',topic:tp,x,name:n[0],look:n[1],step:0,req,pay:2+Math.floor(d/10),wood:2+Math.floor(d/14),vx:mk?mk.x:0,vk:mk?mk.k:'',vn:mk?({falls:'الشلال',ruins:'الأطلال القديمة',statue2:'التمثال الكبير',well:'البئر القديمة'})[mk.k]:'',v:0})}}
  // portals become destroyable
  for(const p of props)if(p.k==='portal'){p.hp=p.max=24+Math.floor(d*1.5)}
}
/* ---------- helpers ---------- */

function qRiddle(n,st){const R=n.req[st-1],tp=n.topic;
  const open={mount:['«في هذه الجزيرة روح جواد لم يُسرج منذ مئة عام…»','«الريح تعرف اسمه، لكنها لا تقوله إلا لمن صبر.»','«اقتربت. حين يهدأ الليل يُسمع صهيله بعيدًا…»'],
    weapon:['«سيفٌ كان لملكٍ قديم، دُفن حيث لا يمشي أحد…»','«حدّه لا يصدأ، ومقبضه ينتظر كفًّا أمينة.»','«بقي سرّ واحد… والسرّ لا يُعطى إلا بالوفاء.»'],
    gems:['«تحت هذه الأرض صندوقٌ يلمع كالنجوم…»','«أخفاه تاجرٌ هارب من الظلام، ولم يعد.»','«أكاد أتذكّر المكان… أعنّي قليلًا بعد.»'],
    village:['«لأهل القرية المجاورة سرٌّ لا يعرفه الغرباء…»','«شيخهم يحب أمرًا واحدًا أكثر من الذهب.»','«سأخبرك… لكن ليس قبل أن أثق بك.»']}[tp]||['«همم…»','«ليس بعد.»','«قريبًا.»'];
  const vis={falls:'حيث يسقط الماء ولا يبتلّ الحجر',ruins:'حيث تنام حجارة الأوّلين',statue2:'حيث يقف فارسٌ لا يتحرّك',well:'حيث يحفظ الماءُ الأسرار في العتمة'}[n.vk]||'المكان الذي حدّثتك عنه';
  return open[st-1]+' '+(R==='visit'?`«${gx('اذهب','اذهبي')} ${vis}، ثم ${gx('عد','عودي')} إليّ.»`:'')}
function loreAdd(){const L=['قبل أن تولد الممالك، كان للجزر تاجٌ من نور يحرسها.','سُرق التاج في ليلةٍ بلا قمر، وانشقّت الأرض عن بوابات الظلام.','قسّم الحكماء نور التاج إلى شظايا، وأخفوها في الجزر.','كل بوابة تُغلق تعيد شظيةً من النور إلى السماء.','الخيول المجنّحة كانت حرّاس التاج، ونامت حين ضاع.','الأسلحة الأسطورية صُنعت من حجر سقط مع التاج.','يقال إن آخر الملوك أوصى: «لا يحمل التاج إلا من وفى بوعده».','في مملكة النور برجٌ ينتظر عودة التاج.'];
  S.lore=S.lore||[];const i=S.lore.length;if(i<L.length){S.lore.push(L[i]);save();setTimeout(()=>banner(`<div class="bt">${ic('scroll')} صفحة من الحكاية (${i+1}/${L.length})</div><div class="bs">${L[i]}</div>`,5200),4600)}}
function qSense(){for(const p of G.props){if(!p.hidden||!(p.k==='shrine'||p.k==='relic'||p.k==='gemchest'))continue;const dd=Math.abs(G.hx-p.x);if(dd<22){p.hidden=0;p.rev=1;SFX.win();G.flash=4;banner(`<div class="bt">${gx('عثرت','عثرتِ')} على ${p.k==='shrine'?'مزار مطية أسطورية':p.k==='relic'?'سلاح أسطوري مدفون':'كنز جواهر مخفي'}!</div><div class="bs">${gx('اضغط','اضغطي')} زر العملة بجانبه</div>`,3400)}}}
function drawHiddenHint(c,r,sx,t){if(!G||Math.abs(G.hx-r.x)>95)return;const a=Math.max(0,Math.sin(t/260+r.x))*.8*(1-Math.abs(G.hx-r.x)/95);c.save();c.globalCompositeOperation='lighter';c.fillStyle=`rgba(255,240,190,${a})`;const y=GY-6-Math.abs(Math.sin(t/500))*4;c.fillRect(sx-.5,y-2,1,4);c.fillRect(sx-2,y-.5,4,1);c.restore()}
function qVil(id){return G.props.find(p=>p.k==='rvil'&&p.id===id)}
function qDir(x){const dm=Math.round(Math.abs(x-G.hx)/10);return `${x>G.hx?gx('اتجه شرقًا (يمين)','اتجهي شرقًا (يمين)'):gx('اتجه غربًا (يسار)','اتجهي غربًا (يسار)')} نحو ${dm} م`}
function qTarget(n){if(n.topic==='mount')return G.props.find(p=>p.k==='shrine');if(n.topic==='weapon')return G.props.find(p=>p.k==='relic');if(n.topic==='gems')return G.props.find(p=>p.k==='gemchest');if(n.topic==='village')return G.props.find(p=>p.k==='rvil'&&!p.sec&&p.state!=='allied')||G.props.find(p=>p.k==='rvil');return null}
function qTopicName(n){return {mount:'مطية أسطورية',weapon:'سلاح أسطوري',gems:'كنز الجواهر',village:'سرّ قرية منافسة'}[n.topic]}
function qReqText(n,r){const o=G.props.find(p=>p.k==='npc'&&p.role==='info'&&p!==n);
  return {pay:`«لا شيء بلا ثمن يا ${gx('بُني','بُنيتي')}. أعطني ${n.pay} عملات أشتري بها طعامًا لأهلي.»`,
   dawn:`«ذاكرتي ضعيفة الليلة… ${gx('عد','عودي')} إليّ بعد طلوع الفجر، فلعلّي أتذكّر.»`,
   wood:`«بيتي بارد. ${gx('اقطع','اقطعي')} لي ${n.wood} من الحطب ثم ${gx('عد','عودي')}.»`,
   visit:`«${gx('اذهب','اذهبي')} إلى ${n.vn} و${gx('انظر','انظري')} ما حولها، ثم ${gx('أخبرني','أخبريني')} بما رأيت.» (${qDir(n.vx)})`,
   ask:`«لست ${gx('وحدك','وحدكِ')} من يبحث. ${gx('اسأل','اسألي')} ${o?o.name:'الحكيم'} أولًا عن الطريق، ثم ${gx('تعال','تعالي')}.»`}[r]}
function qReqOk(n,r){if(r==='pay')return G.purse>=n.pay;if(r==='dawn')return G.day>(n.d0||G.day);if(r==='wood')return (G.wood||0)>=n.wood;if(r==='visit')return !!n.seen;if(r==='ask'){const o=G.props.find(p=>p.k==='npc'&&p.role==='info'&&p!==n);return !o||o.step>=1}return true}
function qPayReq(n,r){if(r==='pay'){G.purse-=n.pay;for(let k=0;k<n.pay;k++)flyCoin(n.x,GY-24);SFX.coin()}if(r==='wood'){G.wood-=n.wood}gHud()}
function qReveal(n){const T=qTarget(n);loreAdd();if(!T)return;if(n.topic==='village'){T.sec=1}else{T.hidden=0;T.rev=1}SFX.win();G.flash=4;
  banner(`<div class="bt">${ic('map')} ${gx('اكتشفت','اكتشفتِ')} ${qTopicName(n)}!</div><div class="bs">${n.topic==='village'?'سيقبل '+T.name+' هديتك بنصف الثمن، ويهدأ حارسه':qDir(T.x)+' · ظهرت العلامة على الخريطة'}</div>`,4200)}
/* ---------- dialogue ---------- */
function qTalk(n){G.paused=true;let body='',btn='';
  if(n.role==='elder'){const v=qVil(n.vid);if(!v)return;const price=v.sec?Math.ceil(v.price/2):v.price,gems=v.sec?Math.ceil(v.gems/2):v.gems;
    if(v.state==='allied'){const f=G.sites.find(s=>s.k==='vfort'&&s.vid===v.id);
      body=`<p>«أهلًا ${gx('بحامي','بحامية')} ${v.name}! نحن معك في السراء والضراء.»</p><p class="note">القرية ${gx('حليفتك','حليفتكِ')}: تعطيك عملات كل صباح، وحرّاسها يدافعون عنها، و${v.gu} يحميها معك.</p>${f?`<p class="note">الحصن: المستوى ${f.lvl} من 3 · ${gx('ادفع','ادفعي')} العملات عنده لتطويره، وابنِ الأسوار حوله.</p>`:''}`;
      btn=f?'':`<button class="btn gold wide" data-qfort="${v.id}">${ic('house')} ${gx('ابنِ','ابني')} حصنًا وأسوارًا لهذه القرية</button>`}
    else if(v.war){body=`<p>«${gx('اخترت','اخترتِ')} القتال! لن نستسلم حتى يسقط ${v.gu} وكل حرّاسنا.»</p><p class="note">ما زال يقاتل: ${G.props.filter(p=>p.k==='beast'&&p.vid===v.id&&p.alive).length} · أو ${gx('ادفع','ادفعي')} الهدية لتنتهي الحرب.</p>`;
      btn=`<button class="btn gold wide" data-qtrib="${v.id}">${ic('coin')} ${gx('قدّم','قدّمي')} الهدية للصلح: ${price} عملة${gems?` و${gems} جوهرة`:''}</button>`}
    else{body=`<p>«${gx('من أنت أيها الغريب؟','من أنتِ أيتها الغريبة؟')} نحن أهل ${v.name}، لا نخضع لأحد. ${v.gu} يحرس قريتنا، ورجالنا لا يرحمون من يقترب بسيفه.»</p>
      ${v.sec?`<p>«سمعت أنك ${gx('ساعدت','ساعدتِ')} أهل الجزيرة… لعلّنا نثق بك.»</p>`:`<p class="note">يقول الناس إن أهل الجزر يعرفون أسرار هذه القرية… ${gx('اسألهم','اسأليهم')}.</p>`}
      <p class="note">${gx('اكسب','اكسبي')} ولاءهم بهدية، أو ${gx('واجه','واجهي')} حرّاسهم و${v.gu}.</p>`;
      btn=`<button class="btn gold wide" data-qtrib="${v.id}">${ic('coin')} ${gx('قدّم','قدّمي')} هدية الولاء: ${price} عملة${gems?` و${gems} جوهرة`:''}</button><button class="btn red wide" data-qwar="${v.id}">${ic('sword')} سأواجه حرّاسكم</button>`}}
  else{const st=n.step;if(st===0){body=`<p>«السلام عليكم ${gx('أيها الفارس','أيتها الفارسة')}. أنا ${n.name}، أعرف هذه الجزيرة شبرًا شبرًا.»</p><p>«سمعت في الأسواق حديثًا عن ${qTopicName(n)}… لكن الطرق خطرة، والكلام له ثمن.»</p>`;btn=`<button class="btn gold wide" data-qask="${n.v}">${ic('scroll')} اسأله عن ${qTopicName(n)}</button>`}
    else if(st<=n.req.length){const r=n.req[st-1],ok=qReqOk(n,r);body=`<p>${qRiddle(n,st)}</p><p>${qReqText(n,r)}</p>${ok?'':`<p class="note">${r==='pay'?`في محفظتك ${G.purse} عملة`:r==='wood'?`لديك ${G.wood||0} من الحطب · ${gx('اضرب','اضربي')} الأشجار لتقطعها`:r==='dawn'?'انتظر حتى يطلع الفجر':r==='visit'?`لم ${gx('تصل','تصلي')} إلى ${n.vn} بعد`:'لم يُسأل بعد'}</p>`}`;
      btn=ok?`<button class="btn gold wide" data-qdo="${n.v}">${r==='pay'?ic('coin')+' أعطه '+n.pay+' عملات':r==='wood'?'أعطه الحطب':r==='visit'?gx('أخبره بما رأيت','أخبريه بما رأيتِ'):r==='dawn'?gx('ذكّره بوعده','ذكّريه بوعده'):gx('أخبره أنك سألت','أخبريه أنكِ سألتِ')}</button>`:''}
    else{const T=qTarget(n);body=`<p>«${gx('وفيت','وفيتِ')} بما طلبت، فاسمع: ${T?(n.topic==='village'?`أهل ${T.name} يحبّون الكرماء، قدّم لهم هدية وسيقبلون نصفها`:qDir(T.x)):'لا شيء بقي هنا.'}.»</p><p class="note">${gx('اذهب','اذهبي')} في أمان الله.</p>`}}
  modal(`<div class="qd">${body}</div>${btn}<button class="btn ghost wide" data-qclose>وداعًا</button>`,n.name)}
function qClick(b,d){if(!G)return false;
  if(d.qclose!==undefined){closeModal();return true}
  const N=v=>G.props.find(p=>p.k==='npc'&&p.role==='info'&&p.v===+v);
  if(d.qask!==undefined){const n=N(d.qask);n.step=1;if(n.req[0]==='dawn')n.d0=G.day;SFX.click();qTalk(n);return true}
  if(d.qdo!==undefined){const n=N(d.qdo),r=n.req[n.step-1];if(!qReqOk(n,r)){qTalk(n);return true}qPayReq(n,r);n.step++;if(n.step<=n.req.length){const r2=n.req[n.step-1];if(r2==='visit')n.seen=0;if(r2==='dawn')n.d0=G.day}if(n.step>n.req.length){closeModal();qReveal(n);return true}SFX.buy();qTalk(n);return true}
  if(d.qtrib!==undefined){const v=qVil(d.qtrib),price=v.sec?Math.ceil(v.price/2):v.price,gems=v.sec?Math.ceil(v.gems/2):v.gems;if(G.purse<price||S.gems<gems){toast(`تحتاج ${price} عملة${gems?' و'+gems+' جوهرة':''}`,'lock');return true}
    G.purse-=price;S.gems-=gems;for(let k=0;k<Math.min(price,12);k++)setTimeout(()=>flyCoin(v.x,GY-30),k*60);qAlly(v,'gift');closeModal();return true}
  if(d.qwar!==undefined){const v=qVil(d.qwar);v.war=1;closeModal();banner(`<div class="bt">${ic('sword')} الحرب على ${v.name}!</div><div class="bs">${gx('اهزم','اهزمي')} ${v.gu} وكل الحرّاس ليخضعوا لك</div>`,3000);return true}
  if(d.qfort!==undefined){const v=qVil(d.qfort);if(!G.sites.some(s=>s.k==='vfort'&&s.vid===v.id)){G.sites.push({k:'vfort',x:v.x,vid:v.id,lvl:0,paid:0,build:-1});[1,-1].forEach(sd=>G.sites.push({k:'wall',x:Math.round(v.x+sd*112),side:Math.sign(v.x)||1,ring:9,lvl:0,hp:0,maxhp:0,paid:0,build:-1,vid:v.id}))}closeModal();banner(`<div class="bt">${ic('house')} أرض الحصن جاهزة</div><div class="bs">${gx('ادفع','ادفعي')} العملات عند علامة البناء في وسط القرية وعند الأسوار</div>`,3000);return true}
  return false}
function qAlly(v,how){v.state='allied';v.war=0;S.gems+=how==='gift'?0:4;SFX.win();G.flash=5;
  for(const p of G.props)if(p.k==='beast'&&p.vid===v.id&&p.alive){if(p.guard){p.ally=1;p.x0=v.x+v.side*44}else{p.alive=0;const k=mkP('knight',p.x);k.home=v.x;k.hp=4;k.vid=v.id;G.people.push(k)}}
  S.cnt&&(S.cnt.recruit+=2);achCheck&&achCheck();
  banner(`<div class="bt">${v.name} ${how==='gift'?gx('تبايعك!','تبايعكِ!'):gx('خضعت لك!','خضعت لكِ!')}</div><div class="bs">حرّاسها و${v.gu} معك الآن · ${gx('ابنِ','ابني')} لها حصنًا من عند شيخها</div>`,3600);gHud()}
/* ---------- interaction hook (coin button) ---------- */
function qInteract(){const hx=G.hx;
  const n=G.props.find(p=>p.k==='npc'&&Math.abs(p.x-hx)<22);if(n){qTalk(n);return true}
  const rl=G.props.find(p=>p.k==='relic'&&!p.hidden&&!p.got&&Math.abs(p.x-hx)<24);if(rl){rl.got=1;const it=ITEM_BY_ID[rl.w];if(it&&!S.owned.includes(rl.w)){S.owned.push(rl.w);equip(rl.w,true);banner(`<div class="bt">${ic('sword')} ${gx('حصلت','حصلتِ')} على ${it.name}!</div><div class="bs">السلاح الأسطوري بين يديك الآن</div>`,3600)}else{S.gems+=15;banner(`<div class="bt">سلاح أسطوري قديم</div><div class="bs">${gx('تملكه','تملكينه')} بالفعل · +15 ${ic('gem')}</div>`,3000)}SFX.win();G.flash=8;save();return true}
  const gc=G.props.find(p=>p.k==='gemchest'&&!p.hidden&&!p.open&&Math.abs(p.x-hx)<22);if(gc){gc.open=1;S.gems+=gc.gems;save();updateTop();SFX.win();for(let k=0;k<26;k++)P({t:'star',x:gc.x+rnd(-12,12),y:GY-14-rnd(0,30),vx:rnd(-1,1),vy:rnd(-1.6,-.3),life:34,col:'ice',s:1.6});banner(`<div class="bt">${ic('gem')} كنز الجواهر!</div><div class="bs">+${gc.gems} جوهرة</div>`,3000);return true}
  return false}
/* ---------- update ---------- */
function qUpdate(dt){if(!G||!G.props)return;qSense();try{nhorseUpdate(dt)}catch(e){}{const rx=seaX()-40,lx=-G.I.half+70;for(const p of G.props){if(!(p.k==='deer'||p.k==='sheep'||p.k==='fox'||p.k==='rabbit'||(p.k==='beast'&&p.kk!=='a')))continue;if(p.x>rx){p.x=rx;p.dir=-1;if(p.x0>rx)p.x0=rx-60}else if(p.x<lx){p.x=lx;p.dir=1;if(p.x0<lx)p.x0=lx+60}}}
  for(const n of G.props){if(n.k!=='npc')continue;if(n.role==='info'&&n.step>=1&&n.step<=n.req.length&&n.req[n.step-1]==='visit'&&Math.abs(G.hx-n.vx)<60&&!n.seen){n.seen=1;banner(`<div class="bs">${ic('scroll')} ${gx('رأيت','رأيتِ')} ${n.vn}… ${gx('عد','عودي')} إلى ${n.name}</div>`,2600)}
    n.t=(n.t||0)+dt}
  for(const v of G.props){if(v.k!=='rvil'||v.state==='allied')continue;if(v.war){const left=G.props.filter(p=>p.k==='beast'&&p.vid===v.id&&p.alive).length;if(!left)qAlly(v,'war')}}
  // allied guardians defend against night creatures
  for(const r of G.props){if(r.k!=='beast'||!r.ally||!r.alive)continue;r.cd=(r.cd||0)-dt;const g=G.greed.filter(g=>!g.dead&&Math.abs(g.x-r.x0)<200).sort((a,b)=>Math.abs(a.x-r.x)-Math.abs(b.x-r.x))[0];
    if(g){r.dir=Math.sign(g.x-r.x)||1;r.face=r.dir;const st=Math.min(1.4*dt,Math.abs(g.x-r.x));r.x+=r.dir*st;r.dist=(r.dist||0)+st;r.spd=st;if(Math.abs(g.x-r.x)<20&&r.cd<=0){r.cd=40;hitGreed(g,3,'steel',r.dir,{small:1})}}else if(Math.abs(r.x-r.x0)>6){r.dir=Math.sign(r.x0-r.x);r.face=r.dir;r.x+=r.dir*.5*dt;r.dist=(r.dist||0)+.5*dt;r.spd=.5}else r.spd=0}
  // portals: once destroyed, no spawns from that side
  if(!G._qintro&&G.t>1800){G._qintro=1;banner(`<div class="bt">أهداف الجزيرة</div><div class="bs">${qGoals().map(g=>g.t+' '+g.v).join(' · ')}</div>`,5200)}}
function qDawn(){if(!G)return;let tot=0;for(const v of G.props){if(v.k!=='rvil'||v.state!=='allied')continue;const f=G.sites.find(s=>s.k==='vfort'&&s.vid===v.id),n=1+(f?f.lvl:0);tot+=n}if(tot){G.purse+=tot;gHud();setTimeout(()=>banner(`<div class="bs">${ic('coin')} أرسلت القرى الحليفة ${tot} عملات</div>`,2200),2800)}}
function qVilBeast(r){const v=qVil(r.vid);if(!v)return false;if(r.ally)return true;
  // territorial: defenders stay home unless the village is at war or the hero enters it
  const inside=Math.abs(G.hx-v.x)<(v.war?260:150)&&(v.war||G.si>=5);if(!inside||(v.sec&&!v.war)){if(Math.abs(r.x-r.x0)>30)r.dir=Math.sign(r.x0-r.x);else if((r.t|0)%300<2)r.dir=Math.random()<.5?-1:1;const w=((r.t|0)%300)<150?.32:0;r.sv=(r.sv||0)+(r.dir*w-(r.sv||0))*.08;r.x+=r.sv;r.dist=(r.dist||0)+Math.abs(r.sv);r.spd=r.sv;if(Math.abs(r.sv)>.06)r.face=Math.sign(r.sv);r.t+=1;return true}return false}
function qGoals(){const V=G.props.filter(p=>p.k==='rvil'),Pt=G.props.filter(p=>p.k==='portal'),H=G.props.filter(p=>(p.k==='relic'||p.k==='gemchest'||p.k==='shrine'));
  return [{t:'ولاء القرى',v:`${V.filter(v=>v.state==='allied').length}/${V.length}`,ok:V.every(v=>v.state==='allied')},{t:'بوابات الظلام',v:`${Pt.filter(p=>p.dead).length}/${Pt.length}`,ok:Pt.every(p=>p.dead)},{t:'الأسرار',v:`${H.filter(p=>!p.hidden).length}/${H.length}`,ok:H.every(p=>!p.hidden)},{t:'السفينة',v:site('boat')&&site('boat').lvl?'جاهزة':'محطّمة',ok:site('boat')&&site('boat').lvl>=1}]}
function qFreed(){const g=qGoals();return g[0].ok&&g[1].ok}
/* ---------- portals as targets ---------- */
function hitPortal(p,d,el,dir){if(p.dead)return false;p.hp-=d;p.fl=6;burst(p.x,GY-28,el||'steel',dir,8);hitNum(p.x,GY-60,d);SFX.hit();G.shake=Math.max(G.shake||0,2);
  if(p.hp<=0){p.dead=1;G.shake=14;G.flash=10;S.gems+=10;save();for(let k=0;k<40;k++)P({t:'glow',x:p.x+rnd(-12,12),y:GY-30+rnd(-26,26),vx:rnd(-1.6,1.6),vy:rnd(-2,0),drag:.95,life:rnd(24,44),col:'#b06cf0',s:rnd(2,4)});
    banner(`<div class="bt">${gx('دمّرت','دمّرتِ')} بوابة الظلام!</div><div class="bs">لن تخرج الوحوش من هذه الجهة بعد اليوم · +10 ${ic('gem')}${qFreed()?' · '+gx('حرّرت','حرّرتِ')+' الجزيرة!':''}</div>`,4000)}return true}
/* ---------- drawing ---------- */
function drawNpc(c,r,sx,t){const look=r.role==='elder'?'farmer':(r.look||'vagrant'),bob=Math.sin((r.t||0)/40)*.4,spr=subjSprite(look,0,0,(r.v||0)+2),face=G.hx<r.x?-1:1;
  c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(sx,GY,6,1.4,0,0,7);c.fill();if(face<0){c.save();c.translate(sx+9,0);c.scale(-1,1);c.drawImage(spr.cv,0,GY-27+bob,18,28);c.restore()}else c.drawImage(spr.cv,sx-9,GY-27+bob,18,28);
  // staff for elders/hermits
  c.fillStyle='#5a3a1e';c.fillRect(sx+face*7,GY-30,1.2,30);if(r.role==='elder'){c.fillStyle='#e8e0d0';c.fillRect(sx-3,GY-20,6,3)}
  const v=r.role==='elder'?qVil(r.vid):null,has=r.role==='info'?r.step<=r.req.length:v&&v.state!=='allied',mark=r.role==='info'?(r.step===0?'؟':r.step<=r.req.length?'…':'✓'):(v&&v.state==='allied'?'✓':'!');
  const y=GY-38+Math.sin(t/300+r.x)*1.5;c.fillStyle=has?'rgba(242,194,74,.95)':'rgba(140,200,120,.9)';c.beginPath();c.arc(sx,y,4.2,0,7);c.fill();c.fillStyle='#1d1633';c.font='bold 6px sans-serif';c.textAlign='center';c.fillText(mark,sx,y+2.2);
  if(Math.abs(G.hx-r.x)<40){const txt=r.name;c.font='bold 5.5px sans-serif';const w=c.measureText(txt).width+8;c.fillStyle='rgba(10,6,24,.8)';c.fillRect(sx-w/2,y-14,w,8);c.fillStyle='#f6e6b8';c.fillText(txt,sx,y-8)}}
function drawRvil(c,r,sx,t){const al=r.state==='allied',col=KCOL[vilKind(r.id)].f;
  for(const dx of [-120,120]){const x=sx+dx;c.fillStyle='#4a2a14';c.fillRect(x,GY-36,1.6,36);const wv=(Math.sin(t/220+dx)+Math.sin(t/90+dx*2)*.35)*1.4*(.5+WINDF(t));c.fillStyle=col;c.beginPath();c.moveTo(x+1.6,GY-36);c.lineTo(x+13,GY-33+wv);c.lineTo(x+1.6,GY-28);c.fill();c.fillStyle='#f2c24a';c.fillRect(x+4,GY-33,2,2)}
  if(Math.abs(G.hx-r.x)<200){const txt=r.name+(al?' · حليفة':r.war?' · حرب':' · معادية');c.font='bold 6px sans-serif';c.textAlign='center';const w=c.measureText(txt).width+10;c.fillStyle='rgba(10,6,24,.75)';c.fillRect(sx-w/2,GY-96,w,10);c.fillStyle=al?'#a8f0a0':'#ffb0a0';c.fillText(txt,sx,GY-88.5)}}
function drawRelic(c,r,sx,t){if(r.hidden||r.got)return;c.globalCompositeOperation='lighter';const g=c.createLinearGradient(sx,GY-140,sx,GY);g.addColorStop(0,'rgba(255,200,90,0)');g.addColorStop(1,`rgba(255,200,90,${.35+Math.sin(t/300)*.1})`);c.fillStyle=g;c.fillRect(sx-6,GY-140,12,140);c.globalCompositeOperation='source-over';
  c.fillStyle='#5a5a66';c.fillRect(sx-9,GY-6,18,6);c.fillStyle='#7a7a88';c.fillRect(sx-7,GY-9,14,3);c.fillStyle='#d8dce8';c.fillRect(sx-1,GY-34,2,26);c.fillStyle='#f2c24a';c.fillRect(sx-5,GY-12,10,2);c.fillRect(sx-1,GY-10,2,4);if(Math.random()<.2)P({t:'star',x:r.x+rnd(-6,6),y:GY-20-rnd(0,20),vx:0,vy:-.4,life:20,col:'holy',s:1.2});if(NFNOW>.1)LITS.push([sx,GY-20,30,1])}
function drawGemchest(c,r,sx,t){if(r.hidden)return;if(!r.open){c.globalCompositeOperation='lighter';const g=c.createRadialGradient(sx,GY-10,1,sx,GY-10,30);g.addColorStop(0,`rgba(120,220,255,${.4+Math.sin(t/260)*.15})`);g.addColorStop(1,'rgba(120,220,255,0)');c.fillStyle=g;c.fillRect(sx-30,GY-40,60,60);c.globalCompositeOperation='source-over'}
  chest(c,sx-10,GY-15);c.fillStyle='#7fd3f7';c.fillRect(sx-3,GY-11,6,4);if(r.open){c.fillStyle='#3a8ad6';c.fillRect(sx-10,GY-21,20,6)}if(NFNOW>.1&&!r.open)LITS.push([sx,GY-10,26,1])}
function drawPortal2(c,r,sx,t,orig){if(r.dead){c.fillStyle='#3a3448';c.fillRect(sx-18,GY-6,8,6);c.fillRect(sx+10,GY-8,9,8);c.fillStyle='#2a2436';c.fillRect(sx-6,GY-4,12,4);return}orig();
  if(r.hp<r.max){c.fillStyle='rgba(10,6,24,.8)';c.fillRect(sx-16,GY-66,32,4);c.fillStyle='#b06cf0';c.fillRect(sx-15,GY-65,30*r.hp/r.max,2)}if(r.fl>0){r.fl--;c.globalCompositeOperation='lighter';c.fillStyle='rgba(255,255,255,.35)';c.beginPath();c.ellipse(sx,GY-28,13,27,0,0,7);c.fill();c.globalCompositeOperation='source-over'}}
function drawVfort(c,s,sx,t){const L=s.lvl;if(L===0){for(let k=0;k<4;k++)c.fillRect&&(c.fillStyle='#6e5a40',c.fillRect(sx-14+k*8,GY-3,5,3));if(s.build>=0){c.fillStyle='#8a6440';c.fillRect(sx-16,GY-24,1.4,24);c.fillRect(sx+15,GY-24,1.4,24);c.fillRect(sx-16,GY-24,32,1.4)}return}
  townBld(c,Math.min(4,L+1),sx,t)}

/* ================= SPRITE POLISH: crisp outline, sky rim-light, ground occlusion, fur/scale texture ================= */
function spritePolish(cv,soft){const W=cv.width,H=cv.height;if(W*H>260000||W<4)return;const c=cv.getContext('2d'),im=c.getImageData(0,0,W,H),d=im.data,o=new Uint8ClampedArray(d);const A=(x,y)=>(x<0||y<0||x>=W||y>=H)?0:o[(y*W+x)*4+3];
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=(y*W+x)*4,a=o[i+3];
    if(a<60){let best=-1,bl=1e9;for(const[dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const xx=x+dx,yy=y+dy;if(xx<0||yy<0||xx>=W||yy>=H)continue;const j=(yy*W+xx)*4;if(o[j+3]>150){const l=o[j]+o[j+1]+o[j+2];if(l<bl){bl=l;best=j}}}
      if(best>=0){d[i]=o[best]*.28;d[i+1]=o[best+1]*.26;d[i+2]=o[best+2]*.32;d[i+3]=soft?200:235}continue}
    let k=1;const up1=A(x,y-1)<60,up2=A(x,y-2)<60,dn=A(x,y+1)<60,dn2=A(x,y+2)<60,fr=A(x+1,y)<60;
    if(up1)k*=1.24;else if(up2)k*=1.1;if(fr&&!up1)k*=1.07;if(dn)k*=.7;else if(dn2)k*=.84;
    const h=((x*374761393+y*668265263)>>>0)%13;k*=.965+h*.0055;
    d[i]=Math.min(255,o[i]*k);d[i+1]=Math.min(255,o[i+1]*k);d[i+2]=Math.min(255,o[i+2]*k*(up1?1.04:1))}
  c.putImageData(im,0,0)}

/* ================= GREED PORTALS (Kingdom-style: ruined stone arch + living vortex) ================= */
function portalArch(b){const key='parch'+b+RS;if(HDC[key])return HDC[key];const R=RS,W=56,H=78,cv=mkc(W*R,H*R),c=cv.getContext('2d');c.scale(R,R);
  const st=toA(mix(HDP[b].stone?HDP[b].stone[1]:'#6a6a74','#2a2436',.35)),rnd=rng(77+b),cx=W/2,base=H-1,iw=13,top=20;
  const blk=(pts,tone)=>{const[r,g,bb]=st.map(v=>Math.max(0,Math.min(255,v*tone)));c.fillStyle=`rgb(${r|0},${g|0},${bb|0})`;c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill();
    c.strokeStyle='rgba(12,8,18,.85)';c.lineWidth=.7;c.stroke();c.fillStyle='rgba(255,255,255,.12)';c.beginPath();c.moveTo(pts[0][0],pts[0][1]);c.lineTo(pts[1][0],pts[1][1]);c.lineTo(pts[1][0],pts[1][1]+1.2);c.lineTo(pts[0][0],pts[0][1]+1.2);c.fill()};
  // pillars of stacked, slightly crooked stones
  for(const sd of [-1,1]){let y=base;const x0=cx+sd*(iw+1);while(y>top+18){const h=6+rnd()*4,w=8+rnd()*3,j=(rnd()-.5)*1.6,xa=sd<0?x0-w+j:x0+j,xb=sd<0?x0+j:x0+w+j;blk([[xa,y-h],[xb,y-h-(rnd()-.5)],[xb+(rnd()-.5),y],[xa,y]],.8+rnd()*.35);y-=h}}
  // pointed arch of wedge stones
  const N=9;for(let k=0;k<N;k++){const a0=Math.PI+k/N*Math.PI,a1=Math.PI+(k+1)/N*Math.PI,ri=iw+1,ro=iw+9.5+(k%2)*1.2,cy=top+18,P=(a,r)=>[cx+Math.cos(a)*r,cy+Math.sin(a)*r*1.25-(Math.abs(Math.cos(a))<.3?2.2:0)];
    blk([P(a0,ri),P(a0,ro),P(a1,ro),P(a1,ri)],k===4?1.2:.85+rnd()*.3)}
  // keystone horn + broken top
  blk([[cx-3,top-3],[cx+3,top-3],[cx+2,top+5],[cx-2,top+5]],1.25);
  // rubble & moss
  for(let k=0;k<7;k++){const x=cx+(rnd()-.5)*W*.9,s=2+rnd()*3;blk([[x-s,base],[x-s*.6,base-s],[x+s*.7,base-s*.8],[x+s,base]],.7+rnd()*.3)}
  for(let k=0;k<14;k++){const a=Math.PI+rnd()*Math.PI,r=iw+5+rnd()*5;const x=cx+Math.cos(a)*r,y=top+18+Math.sin(a)*r*1.25;c.fillStyle=rnd()<.5?'rgba(70,110,60,.85)':'rgba(96,140,72,.8)';c.fillRect(x,y,1.6+rnd()*1.6,1)}
  c.setTransform(1,0,0,1,0,0);spritePolish(cv,1);return HDC[key]={cv,W,H,cx,iw,top}}
function vortexTex(){if(HDC.vtx)return HDC.vtx;const N=96,cv=mkc(N,N),c=cv.getContext('2d'),m=N/2;
  const g=c.createRadialGradient(m,m,0,m,m,m);g.addColorStop(0,'#020005');g.addColorStop(.35,'#12051e');g.addColorStop(.75,'#3a0c4a');g.addColorStop(1,'#7a1a6a');c.fillStyle=g;c.fillRect(0,0,N,N);
  c.lineCap='round';for(let arm=0;arm<5;arm++){for(let i=0;i<60;i++){const u=i/60,a=arm/5*Math.PI*2+u*4.2,r=u*m*.98,x=m+Math.cos(a)*r,y=m+Math.sin(a)*r;c.strokeStyle=`rgba(${190+u*60|0},${40+u*60|0},${160+u*60|0},${.08+u*.35})`;c.lineWidth=1+u*5;c.beginPath();c.arc(x,y,c.lineWidth*.5,0,7);c.stroke()}}
  return HDC.vtx=cv}
function drawPortalKTC(c,r,sx,t){const b=G.b,A=portalArch(b),x0=sx-A.W/2,y0=GY-A.H+2,cyO=y0+A.top+18,night=NFNOW>.3;
  if(r.dead){c.drawImage(A.cv,0,A.H*RS*.62,A.cv.width,A.H*RS*.38,x0,GY-A.H*.38+2,A.W,A.H*.38);return}
  const pulse=.5+.5*Math.sin(t/420),hurt=r.max?1-r.hp/r.max:0,act=(night?1:.55)+(r.fl>0?.6:0);
  // ground glow + creeping mist
  c.save();c.globalCompositeOperation='lighter';let g=c.createRadialGradient(sx,GY-4,2,sx,GY-4,46);g.addColorStop(0,`rgba(200,60,200,${.32*act})`);g.addColorStop(1,'rgba(200,60,200,0)');c.fillStyle=g;c.fillRect(sx-46,GY-50,92,56);c.restore();
  // vortex inside the opening
  c.save();c.beginPath();c.moveTo(sx-A.iw,GY-1);c.lineTo(sx-A.iw,cyO);c.quadraticCurveTo(sx-A.iw,cyO-A.iw*1.45,sx,cyO-A.iw*1.62);c.quadraticCurveTo(sx+A.iw,cyO-A.iw*1.45,sx+A.iw,cyO);c.lineTo(sx+A.iw,GY-1);c.closePath();c.clip();
  const V=vortexTex(),vh=(GY-(cyO-A.iw*1.62)),vs=vh*1.25,vy=GY-vh*.55;
  c.fillStyle='#05020a';c.fillRect(sx-A.iw,cyO-A.iw*1.7,A.iw*2,vh+4);
  c.translate(sx,vy);c.scale(.62,1);c.save();c.rotate(t/900);c.drawImage(V,-vs/2,-vs/2,vs,vs);c.restore();c.globalCompositeOperation='lighter';c.globalAlpha=.45+.25*pulse;c.rotate(-t/600);c.drawImage(V,-vs*.38,-vs*.38,vs*.76,vs*.76);c.globalAlpha=1;
  const cg=c.createRadialGradient(0,0,0,0,0,vs*.22);cg.addColorStop(0,`rgba(255,120,220,${.25+.2*pulse})`);cg.addColorStop(1,'rgba(255,120,220,0)');c.fillStyle=cg;c.fillRect(-vs/2,-vs/2,vs,vs);
  c.restore();
  // rim light on the opening and floating wisps drawn inward
  c.save();c.globalCompositeOperation='lighter';c.strokeStyle=`rgba(255,110,230,${.35+.25*pulse})`;c.lineWidth=1.2;c.beginPath();c.moveTo(sx-A.iw+.6,GY-1);c.lineTo(sx-A.iw+.6,cyO);c.quadraticCurveTo(sx-A.iw+.6,cyO-A.iw*1.45,sx,cyO-A.iw*1.6);c.quadraticCurveTo(sx+A.iw-.6,cyO-A.iw*1.45,sx+A.iw-.6,cyO);c.lineTo(sx+A.iw-.6,GY-1);c.stroke();
  for(let k=0;k<10;k++){const u=((t/1400+k/10)%1),a=k*2.4+t/700,rr=(1-u)*30+4,x=sx+Math.cos(a)*rr*.8,y=vy+Math.sin(a)*rr*.9;c.fillStyle=`rgba(255,150,240,${u*.7})`;c.fillRect(x,y,1.4,1.4)}c.restore();
  // the stone arch on top
  c.drawImage(A.cv,x0,y0,A.W,A.H);
  // glowing runes on the pillars (dim as the portal weakens)
  c.save();c.globalCompositeOperation='lighter';for(let k=0;k<4;k++){const sd=k%2?1:-1,yy=GY-12-k*9,on=.4+.6*Math.max(0,Math.sin(t/300+k*1.7));c.fillStyle=`rgba(255,90,200,${on*(1-hurt*.8)*act})`;c.fillRect(sx+sd*(A.iw+5)-1,yy,2,3);c.fillRect(sx+sd*(A.iw+5)-2,yy+1,4,1)}c.restore();
  // cracks as it takes damage
  if(hurt>.15){c.strokeStyle='rgba(10,4,16,.9)';c.lineWidth=.8;const n=Math.ceil(hurt*6);for(let k=0;k<n;k++){const sd=k%2?1:-1,x=sx+sd*(A.iw+3+(k*3)%5),y=GY-14-(k*11)%40;c.beginPath();c.moveTo(x,y);c.lineTo(x+sd*2,y+4);c.lineTo(x,y+7);c.lineTo(x+sd*3,y+11);c.stroke()}}
  if(r.fl>0){r.fl--;c.save();c.globalCompositeOperation='lighter';c.globalAlpha=r.fl/8;c.drawImage(A.cv,x0,y0,A.W,A.H);c.restore()}
  if(r.max&&r.hp<r.max){c.fillStyle='rgba(10,6,24,.8)';c.fillRect(sx-16,y0-6,32,4);c.fillStyle='#d050c0';c.fillRect(sx-15,y0-5,30*r.hp/r.max,2)}
  if(Math.random()<.25*act)P({t:'glow',x:r.x+rnd(-10,10),y:GY-rnd(4,40),vx:rnd(-.2,.2),vy:rnd(-.5,-.1),drag:.97,life:rnd(20,36),col:'#c050c8',s:rnd(1,2.2)});
  if(NFNOW>.1)LITS.push([sx,GY-26,44,.9])}

/* ================= GOLEM: assembled from faceted boulders bound by glowing magic ================= */
function golemDraw(c,S,ph,p2,GND,bw,pal,eyes){const RA=rampOf(pal.a),RC=rampOf(pal.c),E=toA(pal.e),cx=bw*.5,step=Math.sin(p2),hb=-Math.abs(Math.sin(p2))*.8,X=v=>v*S;
  const col=(t,dk)=>{const r=RA[Math.max(0,Math.min(RA.length-1,Math.round(t*(RA.length-1))))];return `rgb(${r.map(v=>Math.round(v*dk)).join(',')})`};
  const poly=(pts,f)=>{c.fillStyle=f;c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(X(x),X(y)):c.moveTo(X(x),X(y)));c.closePath();c.fill()};
  const rock=(a,b,w,seed,dk)=>{const dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1,ux=dx/L,uy=dy/L,nx=-uy,ny=ux,m=[(a[0]+b[0])/2,(a[1]+b[1])/2],j=k=>(hsh2(seed,k,5)-.5)*1.4;
    const loc=[[-L/2-.8+j(1),-w*.6],[-L*.15,-w-.3+j(2)*.5],[L*.32,-w*.85+j(3)*.5],[L/2+.7+j(4),-w*.35],[L/2+.4,w*.6+j(5)*.4],[L*.05,w+j(6)*.4],[-L/2+.2,w*.7]];
    const P=loc.map(([u,v])=>[m[0]+ux*u+nx*v,m[1]+uy*u+ny*v]);poly(P,col(.45,dk));
    const top=P.map(p=>[m[0]+(p[0]-m[0])*.62,m[1]+(p[1]-m[1])*.62-w*.28]);poly(top.slice(0,4).concat([[m[0],m[1]-w*.1]]),col(.78,dk));
    poly([P[4],P[5],P[6],[m[0]+nx*w*.3,m[1]+ny*w*.3]],col(.18,dk));
    c.strokeStyle=`rgba(14,10,20,${.85*dk})`;c.lineWidth=.55*S;c.beginPath();P.forEach(([x,y],i)=>i?c.lineTo(X(x),X(y)):c.moveTo(X(x),X(y)));c.closePath();c.stroke();
    c.strokeStyle=col(.1,dk);c.lineWidth=.35*S;c.beginPath();c.moveTo(X(m[0]+ux*(-L*.1)),X(m[1]+uy*(-L*.1)-.2));c.lineTo(X(m[0]+ux*L*.12+nx*w*.4),X(m[1]+uy*L*.12+ny*w*.4));c.stroke();return P};
  const glowLine=(pts,a)=>{c.save();c.globalCompositeOperation='lighter';c.strokeStyle=`rgba(${E.join(',')},${a})`;c.lineWidth=.6*S;c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(X(x),X(y)):c.moveTo(X(x),X(y)));c.stroke();c.lineWidth=1.6*S;c.strokeStyle=`rgba(${E.join(',')},${a*.25})`;c.stroke();c.restore()};
  const orb=(x,y,r,a)=>{c.save();c.globalCompositeOperation='lighter';const g=c.createRadialGradient(X(x),X(y),0,X(x),X(y),X(r));g.addColorStop(0,`rgba(${E.join(',')},${a})`);g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(X(x-r),X(y-r),X(r*2),X(r*2));c.restore()};
  const hip=[cx,19.6+hb],GT=s=>{const u=((ph+s)%1+1)%1;if(u<.55){const k=u/.55;return[cx+4.4*(.5-k),GND,0]}const k=(u-.55)/.45,e=k*k*(3-2*k);return[cx+4.4*(-.5+e),GND-2.6*Math.sin(Math.PI*k),Math.sin(Math.PI*k)]};
  const leg=(s,dk,sd)=>{const T=GT(s),[K,F]=rigIK([hip[0]-.4,hip[1]],[T[0],T[1]-1.8],7.4,7.2,1);rock([hip[0]-.4,hip[1]],K,3.6,11+sd,dk);rock(K,F,3.2,21+sd,dk);rock([F[0]-1.6,F[1]+.6],[F[0]+3.2,F[1]+1.2],1.6,31+sd,dk);orb(K[0],K[1],1.6,.5*dk)};
  const sh=[cx+2.4,hip[1]-10.2],arm=(sw,dk,sd)=>{const s0=[sh[0]+.4,sh[1]+2.4],e=[s0[0]+Math.sin(sw)*2.8+1.2,s0[1]+6.4],h=[e[0]+Math.sin(sw)*2.4+1.6,e[1]+6];rock(s0,e,2.8,41+sd,dk);rock(e,h,3.4,51+sd,dk);rock([h[0]-1.4,h[1]-.6],[h[0]+1.8,h[1]+2.4],2.6,61+sd,dk);orb(e[0],e[1],1.5,.55*dk);
    const bob=Math.sin(p2*2+sd)*.6;c.fillStyle=col(.6,dk);c.fillRect(X(e[0]-2.6),X(e[1]-1.2+bob),X(1.2),X(1));return h};
  leg(.5,.68,1);arm(-step*.5,.72,2);
  // torso: a great split boulder with a glowing core
  const tc=[cx+1.4,hip[1]-6.2];rock([tc[0]-1,tc[1]+5.6],[tc[0]+.6,tc[1]-6.4],7.6,71,1);rock([hip[0]-3.2,hip[1]+.6],[hip[0]+3,hip[1]],3,72,.9);
  orb(tc[0]+1,tc[1]-1,4.2,.55);glowLine([[tc[0]-2,tc[1]-5],[tc[0]+.4,tc[1]-2],[tc[0]-.6,tc[1]+1],[tc[0]+1.6,tc[1]+4]],1);glowLine([[tc[0]-3.6,tc[1]+2],[tc[0]-1.4,tc[1]+3.2]],.8);glowLine([[tc[0]+3.4,tc[1]-3.4],[tc[0]+2,tc[1]-.6]],.6);
  rock([sh[0]-4.6,sh[1]+.6],[sh[0]-.6,sh[1]-1.4],3,81,.92);rock([sh[0]+.4,sh[1]-1.6],[sh[0]+4.8,sh[1]+.8],3.2,82,1);
  // head: small wedge stone sunk between the shoulders
  const hd=[sh[0]+3.2,sh[1]-2.4];rock([hd[0]-2.4,hd[1]+1],[hd[0]+2.6,hd[1]-.6],2.6,91,1);c.fillStyle='#0c0810';c.fillRect(X(hd[0]-.2),X(hd[1]-.6),X(2.6),X(.9));eyes.push([hd[0]+.4,hd[1]-.6],[hd[0]+1.9,hd[1]-.7]);
  leg(0,1,3);arm(step*.5,1,4);
  for(let k=0;k<3;k++){const a=p2+k*2.1;c.fillStyle=col(.7,1);c.fillRect(X(tc[0]-6+Math.cos(a)*1.2+k*6),X(tc[1]-7.5+Math.sin(a)*1.2),X(1),X(1))}}


function gSide(){const el=document.getElementById('gSide');if(!el||!G||!document.body.classList.contains('gport'))return;const g=qGoals(),k=Math.floor(G.t/7000)%TIPS.length;
  const icn={'ولاء القرى':'people','بوابات الظلام':'flame','الأسرار':'map','السفينة':'star'};
  const html=`<div class="gsg">${g.map(x=>`<span class="${x.ok?'ok':''}">${ic(icn[x.t]||'star')}<b>${x.t}</b><i class="num">${x.v}</i></span>`).join('')}</div><div class="gst">${ic(TIPS[k][0])}<span>${TIPS[k][1]}</span></div>`;
  if(el._h!==html){el._h=html;el.innerHTML=html;hydrate(el);imgify(el)}}
var TIPS=[['coin','ادفع العملات عند علامات البناء لتبني وتطوّر مملكتك'],['scroll','ابحث عن الشخصية الغامضة… فهي تعرف أسرار الجزيرة'],['people','أعطِ المتجوّلين عملة ليصبحوا من أهل مملكتك'],['moon','ابنِ الأسوار قبل الليل، فالظلام لا يرحم'],['map','افتح الخريطة لترى القرى والبوابات والأسرار'],['gem','الكنوز المخفية تلمع حين تقترب منها'],['flame','دمّر بوابات الظلام لتحرّر الجزيرة'],['heart','اكسب ولاء القرى بالهدية… أو بالشجاعة']];

/* ================= LANGUAGE: Arabic / English ================= */
var I18N_EN={"سقطت عملات من كيسك — العملات تحمي تاجك!":"Coins fell from your purse — coins protect your crown!","تُضاف النقاط والعملات بعد موافقة ولي الأمر على كل مهمة · اليومية تتجدد كل صباح والأسبوعية كل سبت": "Points and coins are added only after the parent approves each task · daily tasks reset every morning and weekly ones every Saturday", "وافق على الكل": "Approve all", "خالد الحمري": "Khaled Alhamri", "جميع الحقوق محفوظة ©": "All rights reserved ©", "جارٍ تحميل اللعبة…": "Loading the game…", "مملكة الإنجاز": "Kingdom of Achievement", "مغامرات الأبطال": "Heroes' Adventures", "أنجز مهامك اليومية… تُبنى مملكتك": "Finish your daily tasks… and your kingdom grows", "البطل": "The Hero", "البطلة": "The Heroine", "ابنِ القلاع": "Build castles", "اكتشف الأسرار": "Discover secrets", "احمِ القرى": "Protect villages", "ابدأ اللعب": "Start Playing", "مهام يومية": "Daily tasks", "١٠٠ جزيرة": "100 islands", "٥ ممالك": "5 kingdoms", "اختر بطلك": "Choose Your Hero", "هل أنت ولد أم بنت؟ ستظهر لك المهام والشخصيات المناسبة": "Are you a boy or a girl? You'll get the right tasks and characters.", "ولد": "Boy", "بنت": "Girl", "ما اسمك؟": "What's your name?", "اكتب اسمك": "Type your name", "هيّا نبدأ": "Let's go", "نقاط الإنجاز": "Achievement points", "وقت اللعب المتبقي": "Play time left", "العملات": "Coins", "الجواهر": "Gems", "الصوت": "Sound", "لوحة ولي الأمر": "Parent panel", "الرئيسية": "Home", "المهام": "Tasks", "المغامرة": "Adventure", "المتجر": "Shop", "إنجازاتي": "My Badges", "استراحة": "Pause", "الخريطة": "Map", "العودة إلى القائمة الرئيسية": "Back to main menu", "القائمة": "Menu", "يسار": "Left", "يمين": "Right", "انزل أو اركب": "Dismount or ride", "هجوم": "Attack", "ادفع عملة": "Pay a coin", "أدر جهازك بالعرض": "Turn your device sideways", "مملكة الإنجاز مصمَّمة للعب بالعرض حتى ترى العالم كاملًا والأزرار كبيرة": "Kingdom of Achievement is made for landscape, so you can see the whole world with big buttons", "على الآيفون: أوقف «قفل الاتجاه» من مركز التحكم ثم أدر الجهاز. ولملء الشاشة: زر المشاركة": "On iPhone: turn off \"Orientation Lock\" in Control Center, then rotate. For full screen: Share button", "إضافة إلى الشاشة الرئيسية»": "Add to Home Screen\"", "متابعة بالطول": "Continue in portrait", "صلاة": "Prayer", "قرآن وأذكار": "Quran & dhikr", "شمس": "Sun", "سرير": "Bed", "أسنان": "Teeth", "طعام": "Food", "حقيبة": "Bag", "واجب": "Homework", "قراءة": "Reading", "رياضة": "Sports", "مساعدة": "Helping", "وضوء وماء": "Wudu & water", "ترتيب": "Tidying", "نوم": "Sleep", "نجمة": "Star", "واحة البدايات": "Oasis of Beginnings", "مبتدئ": "Beginner", "مروج خضراء وينابيع وشلالات: تعلّم الحركة وجمع العملات وبناء أول قرية وأول جسر": "Green meadows, springs and waterfalls: learn to move, collect coins, build your first village and first bridge.", "قرية التعاون": "Village of Cooperation", "متوسط": "Intermediate", "قرى جبلية باردة: ساعد السكان واجمع الأخشاب والحجارة وابنِ المرافق العامة": "Cold mountain villages: help the villagers, gather wood and stone, and build public places.", "غابة الحكماء": "Forest of the Wise", "متقدم": "Advanced", "نخيل وأطلال حكماء قدماء: ابحث عن الكنوز وتعلّم الصبر والأمانة وحسن التصرف": "Palms and ruins of ancient sages: seek treasure and learn patience, honesty and good judgment.", "ساحل الفرسان": "Knights' Coast", "خبير": "Expert", "سواحل تحت سماء نارية وجبل بركاني: ابنِ السفن والمرافئ وافتح طرقًا جديدة بالتخطيط والتعاون": "Shores under a fiery sky and a volcano: build ships and harbors and open new routes by planning and teamwork.", "مملكة النور": "Kingdom of Light", "بطل": "Champion", "جزر النور فوق السحاب: اجمع الموارد النادرة وطوّر المملكة الكبرى وافتح المنطقة النهائية": "Islands of light above the clouds: gather rare resources, grow the great kingdom and open the final realm.", "المغامر": "The Adventurer", "النينجا": "The Ninja", "الروبوت": "The Robot", "الصياد": "The Hunter", "البحّار": "The Sailor", "الساحر الصغير": "The Little Wizard", "المحارب المدرّع": "The Armored Warrior", "رائد الفضاء": "The Astronaut", "حارس الجليد": "Ice Guardian", "فارس الكثبان": "Dune Knight", "بطل البركان": "Volcano Hero", "بطل السحاب": "Cloud Hero", "المستكشفة": "The Explorer", "العالِمة الصغيرة": "The Little Scientist", "الرسّامة": "The Painter", "الطبيبة": "The Doctor", "الرحّالة": "The Traveler", "الأميرة الشجاعة": "The Brave Princess", "رائدة الفضاء": "The Astronaut", "حارسة الجليد": "Ice Guardian", "أميرة الكثبان": "Dune Princess", "بطلة البركان": "Volcano Heroine", "بطلة السحاب": "Cloud Heroine", "الملابس الأصلية": "Original outfit", "زي الغابة": "Forest outfit", "زي السماء": "Sky outfit", "الزي الرياضي": "Sports outfit", "زي الليل": "Night outfit", "الزي الملكي": "Royal outfit", "زي النار": "Fire outfit", "زي المحيط": "Ocean outfit", "الزي الذهبي": "Golden outfit", "زي المستكشف": "Explorer outfit", "زي أوراق الشجر": "Leaf outfit", "زي الشمس": "Sun outfit", "زي الثلج": "Snow outfit", "زي الصقيع": "Frost outfit", "زي الصحراء": "Desert outfit", "زي الكثبان": "Dune outfit", "زي الحمم": "Lava outfit", "زي الجمر": "Ember outfit", "زي الصخر البركاني": "Volcanic rock outfit", "زي الغيوم": "Cloud outfit", "زي المجرّة": "Galaxy outfit", "بلا إكسسوار": "No accessory", "نظارة طبية": "Glasses", "تاج الزهور": "Flower crown", "قناع البطل": "Hero mask", "سماعات": "Headphones", "نظارة شمسية": "Sunglasses", "عباءة حمراء": "Red cloak", "عباءة زرقاء": "Blue cloak", "خوذة المحارب": "Warrior helmet", "قبعة المستكشف": "Explorer hat", "وشاح الغابة": "Forest scarf", "تاج الأوراق": "Leaf crown", "العباءة الذهبية": "Golden cloak", "غطاء الأذن الدافئ": "Warm earmuffs", "نظارة الثلج": "Snow goggles", "قبعة الشمس": "Sun hat", "النظارة الذهبية": "Golden glasses", "خوذة اللهب": "Flame helmet", "جناحا الريح": "Wind wings", "التاج الملكي": "Royal crown", "بلا سلاح": "No weapon", "سيف الريح": "Wind Sword", "قوس الشمس": "Sun Bow", "سيف العاصفة الرعدية": "Thunderstorm Sword", "رمح الإعصار": "Hurricane Spear", "بومرانغ الزوبعة": "Whirlwind Boomerang", "فأس الزلزال": "Earthquake Axe", "مطرقة الصخر": "Rock Hammer", "سيف الماس البلّوري": "Crystal Diamond Sword", "نجمة المجرّة": "Galaxy Star", "رمح الجليد": "Ice Spear", "قوس الصقيع": "Frost Bow", "سيف العاصفة الرملية": "Sandstorm Sword", "عصا السحر": "Magic Staff", "سيف اللهب": "Flame Sword", "مطرقة الحمم": "Lava Hammer", "عصا البرق": "Lightning Staff", "صولجان السماء": "Sky Scepter", "بلا أداة": "No tool", "مصباح الليل": "Night lantern", "ساعة الإبطاء": "Slow-down clock", "المغناطيس": "Magnet", "حذاء القفز الثلاثي": "Triple-jump boots", "درع الحماية": "Protection shield", "خريطة الكنز": "Treasure map", "جرعة القلب": "Heart potion", "ريشة الخفة": "Feather of lightness", "الحذاء الذهبي": "Golden boots", "يهزم الوحوش الأرضية": "Defeats ground monsters", "يهزم الوحوش الطائرة": "Defeats flying monsters", "يهزم كل الوحوش": "Defeats all monsters", "يضاعف العملات": "Doubles coins", "قلب إضافي": "Extra heart", "يجذب العملات": "Attracts coins", "جواهر لكل مرحلة": "Gems every stage", "رؤية أوسع في الليل": "Wider night vision", "يبطئ سرعة الجري": "Slows running speed", "قفزة ثلاثية": "Triple jump", "يصد أول ضربة": "Blocks the first hit", "قفز أعلى وهبوط أخف": "Higher jump, softer landing", "الشخصيات": "Characters", "الملابس": "Outfits", "الإكسسوارات": "Accessories", "الأسلحة": "Weapons", "الأدوات": "Tools", "صلاة الفجر في المسجد مع الوالد": "Fajr prayer at the mosque with Dad", "صلاة الفجر في وقتها": "Fajr prayer on time", "أذكار الصباح": "Morning remembrances", "الاستيقاظ في الموعد وتقبيل رأس الوالدين": "Wake up on time and kiss your parents' heads", "ترتيب السرير": "Make your bed", "السواك وتنظيف الأسنان": "Miswak and brush your teeth", "الفطور مع التسمية والحمد": "Breakfast with Bismillah and Alhamdulillah", "تجهيز الحقيبة والزي المدرسي": "Prepare your bag and school uniform", "تجهيز الحقيبة والزي المدرسي وتسريح الشعر": "Prepare your bag and uniform and comb your hair", "الحرص على الحجاب واللباس المحتشم عند الخروج": "Wear hijab and modest clothes when going out", "صلاة الظهر جماعة": "Dhuhr prayer in congregation", "صلاة الظهر في وقتها": "Dhuhr prayer on time", "ترتيب الملابس والحذاء بعد المدرسة": "Tidy clothes and shoes after school", "صلاة العصر جماعة": "Asr prayer in congregation", "صلاة العصر في وقتها": "Asr prayer on time", "حل الواجبات المدرسية": "Do your homework", "تلاوة وحفظ صفحة من القرآن الكريم": "Recite and memorize a page of the Holy Quran", "نشاط رياضي ٢٠ دقيقة": "20 minutes of exercise", "جري أو كرة": "running or ball", "تعلّم مهارة منزلية مع الوالدة": "Learn a home skill with Mom", "طبخ أو ترتيب": "cooking or tidying", "صلاة المغرب في المسجد": "Maghrib prayer at the mosque", "صلاة المغرب في وقتها": "Maghrib prayer on time", "أذكار المساء": "Evening remembrances", "مساعدة الوالد في أعمال البيت والمشتريات": "Help Dad with chores and shopping", "مساعدة الوالدة في ترتيب البيت": "Help Mom tidy the house", "صلاة العشاء في المسجد": "Isha prayer at the mosque", "صلاة العشاء في وقتها": "Isha prayer on time", "القراءة المفيدة ١٥ دقيقة": "15 minutes of useful reading", "ترتيب الغرفة": "Tidy your room", "ترتيب الغرفة وخزانة الملابس": "Tidy your room and wardrobe", "الوضوء وأذكار النوم": "Wudu and bedtime remembrances", "النوم مبكرًا في الموعد": "Sleep early on time", "صلة الرحم: اتصلي بجدتك أو جدك واسألي عنهما": "Family ties: call your grandma or grandpa and ask about them", "صلة الرحم: اتصل بجدك أو جدتك واسأل عنهما": "Family ties: call your grandpa or grandma and ask about them", "عبدالله": "Abdullah", "يوسف": "Yusuf", "حمد": "Hamad", "علي": "Ali", "مريم": "Maryam", "سارة": "Sara", "فاطمة": "Fatima", "نورة": "Noura", "الصباح": "Morning", "بعد المدرسة": "After school", "المساء": "Evening", "قبل النوم": "Before bed", "مهمتك الآن": "Your task now", "نقطة عند الإنجاز": "points when done", "أحسنت! أنجزت": "Well done! You finished", "أحسنتِ! أنجزتِ": "Well done! You finished", "كل مهام اليوم": "all of today's tasks", "تقدّمك": "Your progress", "المستوى": "Level", "أيام متتالية": "Days in a row", "نقاط اليوم": "Today's points", "إنجاز اليوم": "Today's progress", "مهمة اليوم": "Today's task", "قبل الساعة": "before", "بانتظار الموافقة": "Waiting for approval", "لا مهام متبقية اليوم، ما شاء الله": "No tasks left today, masha'Allah", "أنجزتها": "I did it", "انطلق": "Go", "انطلقي": "Go", "إلى المغامرة": "to the adventure", "مهام يومي": "My Daily Tasks", "نقطة اليوم": "points today", "من": "of", "مهمة": "tasks", "رصيدك": "Your balance", "نقطة إنجاز · كل": "achievement points · every", "نقطة": "points", "دقائق لعب": "minutes of play", "الكل": "All", "المتبقية": "Remaining", "المنجزة": "Done", "لا توجد مهام هنا": "No tasks here", "تضاف النقاط بعد موافقة ولي الأمر للمهام التي تحتاج تحققًا · اليومية تتجدد كل صباح والأسبوعية كل سبت": "Points are added after parent approval for tasks that need checking · daily tasks reset every morning and weekly ones every Saturday", "بانتظار": "Waiting for", "ولي الأمر": "parent", "تقدّم الرحلة": "Journey progress", "مرحلة مختلفة": "different stages", "جزر جديدة اليوم": "New islands today", "أنجز": "Finish", "أنجزي": "Finish", "المهام لتفتح الجزر": "tasks to unlock islands", "موسوعة الوحوش": "Monster guide", "العب الآن": "Play now", "العبي الآن": "Play now", "المملكة": "Kingdom", "افتح": "Open", "افتحي": "Open", "أكمل": "Complete", "أكملي": "Complete", "جزر «": "the islands of «", "لتفتح هذه المملكة": "to open this kingdom", "جائزة إنهاء المنطقة": "Realm completion reward", "حصلت": "You got", "حصلتِ": "You got", "عليها": "it", "خزانة البطل": "Hero's Vault", "خزانة البطلة": "Heroine's Vault", "المجموعة": "Collection", "جهّز سلاحًا أو أداة لتحصل على قدرات خاصة": "Equip a weapon or tool for special powers", "المكافآت تُفتح بإنهاء المراحل": "Rewards unlock by finishing stages", "جائزة": "Reward", "أسطوري": "Legendary", "نادر": "Rare", "عادي": "Common", "مُجهَّز": "Equipped", "جهّز": "Equip", "المرحلة": "Stage", "قوة": "Power", "أنت": "you", "أنتِ": "you", "سباق المغامرة": "Adventure race", "كل بطل يقف عند أعلى منطقة وصل إليها": "Each hero stands at the highest realm reached", "كل بطلة تقف عند أعلى منطقة وصلت إليها": "Each heroine stands at the highest realm reached", "ترتيب الأسبوع": "Weekly ranking", "اربط حسابك بأصدقائك": "Link with your friends", "انسخ الرمز": "Copy code", "الأصدقاء الظاهرون هنا أمثلة توضيحية. الربط الحقيقي بين حسابات العائلات يحتاج خادمًا مشتركًا، ويمكن إضافته في الخطوة التالية": "The friends shown here are examples. Real linking between families needs a shared server and can be added later.", "نقطة و": "points and", "عملة": "coin", "ارتفع مستواك يا بطل. استمر!": "You leveled up, hero. Keep going!", "ارتفع مستواكِ يا بطلة. استمري!": "You leveled up, heroine. Keep going!", "رائع": "Great", "صندوق اليوم الكامل": "Full-day chest", "جوهرة": "gem", "أُرسلت لولي الأمر للموافقة": "Sent to your parent for approval", "فُتحت منطقة جديدة!": "A new realm is open!", "ابدأ": "Start", "ابدئي": "Start", "المرحلة الأولى": "the first stage", "اشتريت": "You bought", "اشتريتِ": "You bought", "أدخل الرمز السري لولي الأمر": "Enter the parent secret code", "الرمز الافتراضي": "Default code", "غيّره من اللوحة": "change it in the panel", "إلغاء": "Cancel", "وافق": "Approve", "ليس بعد": "Not yet", "لا توجد مهام بانتظار الموافقة": "No tasks are waiting for approval", "فتح جميع المراحل والمناطق": "Open all stages and realms", "بدون نقاط": "without points", "موافقة تلقائية على المهام": "Auto-approve tasks", "بدون مراجعة": "without review", "مكافأة سريعة": "Quick reward", "سلوك رائع": "Great behavior", "إنجاز مميز": "Special achievement", "إضافة مهمة": "Add a task", "اسم المهمة": "Task name", "مثال: ري النباتات": "Example: water the plants", "الوقت": "Time", "النقاط": "Points", "الأيقونة": "Icon", "النوع": "Type", "روتين يومي": "Daily routine", "مهمة خاصة لمرة واحدة": "One-time special task", "أضف المهمة": "Add task", "كل المهام": "All tasks", "حذف": "Delete", "الإعدادات": "Settings", "الطفل": "Child", "اسم الطفل": "Child's name", "رمز سري جديد": "New secret code", "أرقام": "digits", "احفظ الإعدادات": "Save settings", "التقدم الحالي مثال للتجربة. ابدأ من الصفر عندما يكون طفلك جاهزًا": "The current progress is a demo. Start from zero when your child is ready.", "ابدأ من الصفر": "Start from zero", "إغلاق": "Close", "نهار": "Day", "غروب": "Sunset", "ليل": "Night", "مطر": "Rain", "ثلج": "Snow", "عاصفة ثلجية": "Blizzard", "أوراق متطايرة": "Flying leaves", "عاصفة رملية": "Sandstorm", "جمر متطاير": "Flying embers", "سماء النجوم": "Starry sky", "يراعات مضيئة": "Glowing fireflies", "جسر خشبي": "Wooden bridge", "جسر متهالك": "Broken bridge", "قلعة": "Castle", "برج": "Tower", "كهف": "Cave", "غرفة كنز": "Treasure room", "أعالي الأشجار": "Treetops", "منصات طائرة": "Floating platforms", "منصات متحركة": "Moving platforms", "أطلال وأعمدة": "Ruins and columns", "هرم": "Pyramid", "جليد زلق": "Slippery ice", "بحيرة حمم": "Lava lake", "قلعة السحاب": "Cloud castle", "أشواك": "Spikes", "تلال": "Hills", "سلالم حجرية": "Stone stairs", "حفرة": "Pit", "معركة الحارس": "Guardian battle", "سهل": "Plain", "بداية الطريق": "The Road Begins", "جسر النهر": "River Bridge", "كهف الكنز": "Treasure Cave", "الجسر المتهالك": "The Broken Bridge", "مستنقع المطر": "Rain Swamp", "برج البوم": "Owl Tower", "قلعة الغابة": "Forest Castle", "سفح الجبل": "Mountain Foot", "الكهف الجليدي": "The Ice Cave", "جسر الهاوية": "Abyss Bridge", "بلورات الثلج": "Snow Crystals", "العاصفة الثلجية": "The Blizzard", "منحدر التزلج": "Ski Slope", "أبراج الشفق": "Aurora Towers", "قلعة الجليد": "Ice Castle", "بوابة الرمال": "Sand Gate", "الأهرامات": "The Pyramids", "جسر الواحة": "Oasis Bridge", "المعبد المدفون": "The Buried Temple", "عاصفة الرمال": "Sandstorm", "ليل الصحراء": "Desert Night", "أطلال المدينة": "City Ruins", "قصر الكثبان": "Dune Palace", "أرض الرماد": "Land of Ash", "جسر الحمم": "Lava Bridge", "النهر الناري": "The Fiery River", "مناجم الجواهر": "Gem Mines", "الكهف المشتعل": "The Burning Cave", "الجسور المحترقة": "The Burnt Bridges", "برج البركان": "Volcano Tower", "قلعة التنين": "Dragon Castle", "السلّم السحابي": "The Cloud Stair", "رياح السماء": "Sky Winds", "حديقة النجوم": "Star Garden", "جسر قوس قزح": "Rainbow Bridge", "البرق والرعد": "Lightning and Thunder", "أبراج الغيوم": "Cloud Towers", "القلعة الذهبية": "The Golden Castle", "حارس السماء": "Sky Guardian", "وادي": "Valley", "غابة": "Forest", "بحيرة": "Lake", "مرج": "Meadow", "نبع": "Spring", "قرية": "Village", "جسر": "Bridge", "حصن": "Fort", "شلال": "Falls", "الصنوبر": "Pine", "الضباب": "Misty", "الفراشات": "Butterfly", "البلوط": "Oak", "الذئاب": "Wolf", "الأيائل": "Elk", "الصيادين": "Hunters'", "الطواحين": "Windmill", "القمر": "Moon", "السناجب": "Squirrel", "الندى": "Dew", "الزهور": "Flower", "قمة": "Peak", "ممر": "Pass", "مخيم": "Camp", "نهر": "River", "الصقيع": "Frost", "الثلج": "Snow", "الدببة البيضاء": "White Bear", "الشفق": "Aurora", "الجليد الأزرق": "Blue Ice", "الرياح": "Wind", "الذئاب الرمادية": "Grey Wolf", "البلّور": "Crystal", "العاصفة": "Storm", "الصنوبر الأبيض": "White Pine", "النجوم": "Star", "الصمت": "Silent", "واحة": "Oasis", "كثيب": "Dune", "قصر": "Palace", "سوق": "Market", "بئر": "Well", "قافلة": "Caravan", "معبد": "Temple", "مدينة": "City", "نخيل": "Palm", "السراب": "Mirage", "النخيل": "Palm", "الصقور": "Falcon", "الذهب": "Gold", "القوافل": "Caravan", "الرمال الحمراء": "Red Sand", "العقارب": "Scorpion", "اللؤلؤ": "Pearl", "الريح": "Wind", "الشمس": "Sun", "جبل": "Mountain", "منجم": "Mine", "بوابة": "Gate", "الحمم": "Lava", "الرماد": "Ash", "الجمر": "Ember", "النار": "Fire", "الياقوت": "Ruby", "الدخان": "Smoke", "التنانين": "Dragon", "البازلت": "Basalt", "اللهب": "Flame", "الشرر": "Spark", "الكبريت": "Sulfur", "البراكين": "Volcano", "جزيرة": "Island", "حديقة": "Garden", "السحاب": "Cloud", "قوس قزح": "Rainbow", "الأحلام": "Dream", "النسيم": "Breeze", "الفجر": "Dawn", "البرق": "Lightning", "الأجنحة": "Wing", "الضياء": "Radiant", "الريش": "Feather", "القمر الفضي": "Silver Moon", "الأساطير": "Legend", "الغابة": "Forest", "الطحالب": "Moss", "البلّوط": "Oak", "المطر": "Rain", "الليل": "Night", "العشب": "Grass", "الكهف": "Cave", "الصخر": "Rock", "المنحدر": "Slope", "القطب": "Polar", "الجليد": "Ice", "الرمال": "Sand", "الكثبان": "Dunes", "الواحة": "Oasis", "الإعصار": "Hurricane", "الأطلال": "Ruins", "البركان": "Volcano", "الغروب": "Sunset", "القلعة": "Castle", "السماء": "Sky", "محاربو القرية المعادية": "Rival village warriors", "الدب الأسطوري": "Legendary bear", "الذئب العملاق": "Giant wolf", "العملاق الشجري": "Tree giant", "الخنزير البري": "Wild boar", "اليتي": "Yeti", "الماموث": "Mammoth", "العقرب العملاق": "Giant scorpion", "الباسيليسك": "Basilisk", "العملاق الصخري": "Stone golem", "السمندل الناري": "Fire salamander", "الغرغول الحجري": "Stone gargoyle", "الغريفين": "Griffin", "البومة العملاقة": "Giant owl", "التنين المجنّح": "Winged dragon", "الخفاش العملاق": "Giant bat", "طائر الرخ": "Roc bird", "العنقاء": "Phoenix", "الأفعى السماوية": "Sky serpent", "الدب الأسطوري العملاق": "Giant legendary bear", "ملك الجليد": "Ice King", "ملك العقارب": "Scorpion King", "التنين الأحمر": "Red Dragon", "تنين الرعد": "Thunder Dragon", "يتجوّل ويحرس طريقه": "Wanders and guards its path", "يندفع نحوك بسرعة": "Charges at you fast", "بطيء لكنه قوي": "Slow but strong", "يطير فوقك": "Flies above you", "ينقضّ من السماء": "Swoops from the sky", "يحلّق بسرعة": "Flies fast", "اهزم": "Defeat", "اهزمي": "Defeat", "عند المرسى!": "at the dock!", "البنّاؤون يصلحون السفينة…": "The builders are repairing the ship…", "ابنِ مملكتك وأصلح": "Build your kingdom and repair", "ابني مملكتك وأصلحي": "Build your kingdom and repair", "السفينة عند المرسى": "the ship at the dock", "عملات": "coins", "م": "m", "السفينة جاهزة!": "The ship is ready!", "اركبها": "Board it", "اركبيها": "Board it", "من طرف الرصيف": "from the end of the pier", "البنّاؤون يصنعون القارب…": "The builders are making the boat…", "ابنِ مملكتك واصمد": "Build your kingdom and hold out", "ابني مملكتك واصمدي": "Build your kingdom and hold out", "حتى اليوم": "until day", "اليوم": "day", "حين يأتي ليلًا": "when it comes at night", "ادفع العملات لبناء القارب على الشاطئ الأيمن": "Pay coins to build the boat on the right shore", "ادفعي العملات لبناء القارب على الشاطئ الأيمن": "Pay coins to build the boat on the right shore", "محفظتك فارغة. اجمع العملات": "Your purse is empty. Collect coins", "محفظتك فارغة. اجمعي العملات": "Your purse is empty. Collect coins", "تحتاج": "You need", "خشب لهذا البناء · لديك": "wood for this building · you have", "اضرب": "Hit", "اضربي": "Hit", "الأشجار بسلاحك لتقطعها": "trees with your weapon to chop them", "خيمة القائد": "Leader's tent", "القاعة الخشبية": "Wooden hall", "الحصن الحجري": "Stone fort", "القلعة الكبرى": "Great castle", "يمكنك الآن بناء الأبراج والمزرعة وشراء المناجل": "You can now build towers and the farm and buy scythes", "أسوار حجرية متاحة الآن": "Stone walls available now", "الدروع للفرسان متاحة الآن": "Shields for knights available now", "أقوى الأسوار متاحة الآن": "The strongest walls are available now", "بركة التمثال": "Statue blessing", "رماة أسرع": "Faster archers", "أسوار أصلب": "Stronger walls", "عملات أكثر كل صباح": "More coins every morning", "جواد أسرع": "Faster horse", "خطأ": "Error", "صندوق كنز": "Treasure chest", "قُطعت الشجرة · صار بإمكانك بناء سور هنا": "Tree chopped · you can build a wall here now", "القارب جاهز!": "The boat is ready!", "راية جديدة!": "New flag!", "ستعود": "You'll return", "ستعودين": "You'll return", "إلى هنا إن خسرت حياة": "here if you lose a life", "يحرس المرسى!": "guards the dock!", "اهزمه لتعبر": "Defeat it to cross", "اهزميه لتعبري": "Defeat it to cross", "انهار سور!": "A wall collapsed!", "خسرت حياة!": "You lost a life!", "خسرتِ حياة!": "You lost a life!", "بقي": "left:", "حياتان": "two lives", "حياة واحدة": "one life", "عدت": "You returned", "عدتِ": "You returned", "إلى": "to", "آخر راية": "the last flag", "بداية المرحلة": "the stage start", "انتهت الحيوات الثلاث": "All three lives are gone", "لا تستسلم! أعد المرحلة من بدايتها، واضرب الوحوش بزر": "Don't give up! Restart the stage and hit monsters with the button", "قبل أن تقترب منك": "before they get close", "لا تستسلمي! أعيدي المرحلة من بدايتها، واضربي الوحوش بزر": "Don't give up! Restart the stage and hit monsters with the button", "قبل أن تقترب منكِ": "before they get close", "أعد المرحلة": "Retry stage", "أعيدي المرحلة": "Retry stage", "ليلة هادئة": "A quiet night", "استرح واستعد": "Rest and get ready", "استريحي واستعدي": "Rest and get ready", "سكون الجزر الأولى لن يدوم": "the calm of the first islands won't last", "الجزيرة محرّرة من بوابات الظلام": "The island is free of dark gates", "ليلة القمر الدامي!": "Blood Moon night!", "حلّ الليل": "Night has fallen", "احمِ مملكتك من الظلال": "Protect your kingdom from the shadows", "احمي مملكتك من الظلال": "Protect your kingdom from the shadows", "قادم!": "is coming!", "مرّ بالرماة والمزارعين ليعطوك ما جمعوه": "Pass by the archers and farmers to collect what they gathered", "مرّي بالرماة والمزارعين ليعطوكِ ما جمعوه": "Pass by the archers and farmers to collect what they gathered", "سُرق تاجك!": "Your crown was stolen!", "سُرق تاجكِ!": "Your crown was stolen!", "أمسكت بك الظلال ومحفظتك فارغة. احرص": "The shadows caught you with an empty purse. Make sure", "أمسكت بكِ الظلال ومحفظتكِ فارغة. احرصي": "The shadows caught you with an empty purse. Make sure", "على بناء الأسوار وتجنيد الرماة قبل الليل": "to build walls and recruit archers before night", "حاول من جديد": "Try again", "حاولي من جديد": "Try again", "انتهت الجولة": "Round over", "أبحرت إلى الجزيرة التالية!": "You sailed to the next island!", "أبحرتِ إلى الجزيرة التالية!": "You sailed to the next island!", "أنهيت «": "You finished «", "في": "in", "أيام": "days", "الجزيرة محرّرة!": "The island is free!", "مكافأة جديدة!": "New reward!", "جواهر": "gems", "الجزيرة التالية": "Next island", "الجزيرة التالية في «": "The next island is in «", "وتحتاج": "and needs", "نقطة من المهام لفتحها": "task points to unlock", "وصلت بأمان": "Arrived safely", "حيوات": "lives", "أوكار وحوش": "monster lairs", "وحوش تهاجم": "monsters attack", "جبال وأنهار وجسور": "mountains, rivers and bridges", "بوابتان للظلال": "two shadow gates", "بوابة واحدة للظلال": "one shadow gate", "ظلال طائرة": "flying shadows", "ظلال عملاقة": "giant shadows", "ليالي القمر الدامي": "blood moon nights", "تمثال البركة": "blessing statue", "حارس أسطوري": "legendary guardian", "قارب بـ": "boat for", "المهمة": "Mission", "سافر على حصانك عبر الجبال والأنهار والسهول حتى المرسى في نهاية المرحلة. الوحوش والمخلوقات ستهاجمك فاضربها بزر": "Ride your horse across mountains, rivers and plains to the dock at the end of the stage. Monsters will attack, so hit them with the button", "لك": "You have", "حيوات، وكل راية تمرّ بها نقطة عودة. إذا انتهت الحيوات الثلاث تعيد المرحلة": "lives, and every flag you pass is a checkpoint. If all three lives are lost, you restart the stage", "سافري على حصانك عبر الجبال والأنهار والسهول حتى المرسى في نهاية المرحلة. الوحوش والمخلوقات ستهاجمك فاضربيها بزر": "Ride your horse across mountains, rivers and plains to the dock at the end of the stage. Monsters will attack, so hit them with the button", "لكِ": "You have", "حيوات، وكل راية تمرّين بها نقطة عودة. إذا انتهت الحيوات الثلاث تعيدين المرحلة": "lives, and every flag you pass is a checkpoint. If all three lives are lost, you restart the stage", "يهاجم في الليالي الأخيرة. الرماة والفرسان وسلاحك يهزمونه": "attacks on the last nights. Archers, knights and your weapon can defeat it", "جائزة الجزيرة": "Island reward", "تابع": "Continue", "تابعي": "Continue", "من اليوم": "from day", "ابدأ من جديد": "Start over", "الجزيرة": "Island", "رجوع": "Back", "ظِلّ صغير": "Small shadow", "ظِلّ طائر": "Flying shadow", "ظِلّ عملاق": "Giant shadow", "الظلال المقنّعة تخرج من البوابات ليلًا لتسرق العملات والتاج. لكل منطقة ظلال بلون قناع مختلف وحارس أسطوري": "Masked shadows come out of the gates at night to steal coins and the crown. Each realm has shadows with a different mask and a legendary guardian", "نار": "Fire", "حمم": "Lava", "برق": "Lightning", "عاصفة رعدية": "Thunderstorm", "جليد": "Ice", "إعصار": "Hurricane", "زلزال": "Earthquake", "نور مقدّس": "Holy light", "بلّور": "Crystal", "سحر": "Magic", "نجوم المجرّة": "Galaxy stars", "فولاذ": "Steel", "هزمت": "You defeated", "هزمتِ": "You defeated", "العملاق!": "giant!", "الحصان البنّي": "Brown Horse", "سريع ومخلص": "Fast and loyal", "الفرس الأبيض": "White Mare", "أسرع قليلًا": "A bit faster", "الأدهم الناري": "Fiery Black Steed", "أسرع جواد، يترك نارًا تحرق الوحوش": "Fastest steed, leaves fire that burns monsters", "وحيد القرن": "Unicorn", "يشفي الفارس ببطء": "Slowly heals the rider", "الحصان المجنّح": "Winged Horse", "يطير فوق الوحوش والأنهار": "Flies over monsters and rivers", "يطير ويضرب بقوة أكبر": "Flies and strikes harder", "خشب · لديك": "wood · you have", "اصطدت غزالًا": "You hunted a deer", "اصطدت ثعلبًا": "You hunted a fox", "اصطدت خروفًا": "You hunted a sheep", "اركب": "Ride", "اضغط زر العملة لركوب القارب": "Press the coin button to board the boat", "خشب": "wood", "تركب": "You now ride", "تركبين": "You now ride", "الآن": "now", "أنت تركب": "You are riding", "أنتِ تركبين": "You are riding", "على": "on", "جوهرة · لديك": "gems · you have", "المهام واهزم الوحوش العملاقة لتجمع الجواهر": "tasks and defeat giant monsters to collect gems", "انزل": "Get off", "انزلي": "Get off", "عن الحصان أولًا": "the horse first", "زر الحصان": "horse button", "لتركب القارب": "to board the boat", "القارب قادم إليك…": "The boat is coming to you…", "القارب مكسور · إصلاحه بعملتين": "The boat is broken · repair it for two coins", "جدّف": "Row", "جدّفي": "Row", "بالأسهم إلى الضفة الأخرى": "with the arrows to the other bank", "نزلت": "You got off", "نزلتِ": "You got off", "عن الحصان": "the horse", "اقطع": "Chop", "اقطعي": "Chop", "الأشجار واركب القوارب": "trees and ride boats", "الحصان قادم إليك…": "The horse is coming to you…", "نهر عميق!": "Deep river!", "عن الحصان واركب القارب": "the horse and take the boat", "أو اركب مطية مجنّحة": "or ride a winged mount", "السفينة محطّمة": "The ship is wrecked", "ادفع": "Pay", "ادفعي": "Pay", "عند الرصيف": "at the pier", "زر العملة": "coin button", "ليصلحها البنّاؤون، ثم": "so the builders repair it, then", "أبحر": "set sail", "أبحري": "set sail", "أبحرت!": "You sailed!", "أبحرتِ!": "You sailed!", "إلى الجزيرة التالية…": "to the next island…", "سقط حارس! جنّد غيره": "A guard fell! Recruit another", "بُني كوخ": "A hut was built", "صار بيتًا كبيرًا": "It became a big house", "صار حصنًا": "It became a fort", "انضمّ حارس وقروي جديد": "A guard and a new villager joined", "انضمّ قروي جديد": "A new villager joined", "ضريبة": "tax", "كل صباح": "every morning", "؟": "?", "صفحات الحكاية": "Story pages", "أرض للبناء": "Building land", "قارب": "Boat", "وكر": "Lair", "مطية أسطورية": "Legendary mount", "مطاياك": "Your mounts", "الطاقم": "Crew", "الولاء": "Loyalty", "الأجر كل صباح": "Wage every morning", "هدية للطاقم": "Gift for the crew", "اللعب": "playing", "خريطة الجزر": "Island Map", "أنهيت": "You finished", "جزر جديدة اليوم · عُد غدًا لتكمل رحلتك": "new islands today · come back tomorrow to continue", "أنهيتِ": "You finished", "جزر جديدة اليوم · عودي غدًا لتكملي رحلتك": "new islands today · come back tomorrow to continue", "تحتاج «": "You need «", "للإبحار إلى «": "to sail to «", "طوّر": "Upgrade", "طوّري": "Upgrade", "سفينتك من الميناء في صفحة المغامرة": "your ship from the harbor on the Adventure page", "نقطة أخرى من المهام لفتح هذه الجزيرة": "more task points to unlock this island", "قارب الصيد": "Fishing boat", "السفينة الشراعية": "Sailing ship", "السفينة الحربية": "Warship", "السفينة الملكية": "Royal ship", "دفعت": "You paid", "دفعتِ": "You paid", "أجور الطاقم": "the crew wages", "لم تكفِ العملات لأجور الطاقم": "Not enough coins for the crew wages", "غادر أحد أفراد الطاقم": "A crew member left", "اجمع العملات أو": "Collect coins or", "قدّم": "give", "قدّمي": "give", "هدية من الخريطة": "a gift from the map", "لص مقنّع يقترب!": "A masked thief is coming!", "احمِ": "Protect", "احمي": "Protect", "عملاتك": "your coins", "سرق اللص": "The thief stole", "الحق": "Chase", "الحقي": "Chase", "به": "him", "واضربه": "and hit him", "واضربيه": "and hit him", "لتستعيدها": "to get them back", "أمسكت": "You caught", "أمسكتِ": "You caught", "باللص!": "the thief!", "استعدت": "You got back", "استعدتِ": "You got back", "الخزينة والميناء": "Treasury & Harbor", "تحمل": "You carry", "تحملين": "You carry", "حتى": "up to", "إلى كل جزيرة": "to each island", "في الخزينة": "In the treasury", "العملات تأتي من إنجاز المهام": "Coins come from completing tasks", "تدخل": "You enter", "تدخلين": "You enter", "بها الجزر": "the islands with them", "لتبني": "to build", "وتجنّد وتدفع أجور الطاقم، وما يبقى يعود إلى الخزينة. احذر اللصوص!": "recruit and pay the crew; what's left returns to the treasury. Beware of thieves!", "تفتح الإبحار إلى «": "Unlocks sailing to «", "أقوى سفينة في البحار!": "The strongest ship on the seas!", "روح الغابة": "Forest spirit", "باركتك": "blessed you", "باركتكِ": "blessed you", "وصحة كاملة": "and full health", "العبادات والقيم": "Worship & values", "الأسرة والمجتمع": "Family & community", "الدراسة والتعلّم": "Study & learning", "الصحة والعادات": "Health & habits", "السلوك والمسؤولية": "Behavior & responsibility", "مهمة لمرة واحدة": "One-time task", "مهمة أسبوعية": "Weekly task", "تلاوة وحفظ صفحة": "Recite and memorize a page", "القراءة المفيدة": "Useful reading", "قراءة نصف صفحة من القرآن مع والدتك": "Read half a page of Quran with your mom", "قراءة نصف صفحة من القرآن مع والدك": "Read half a page of Quran with your dad", "قراءة قصة قصيرة ١٠ دقائق": "Read a short story for 10 minutes", "شرب الماء بانتظام خلال اليوم": "Drink water regularly during the day", "التدرّب على اللغة العربية ١٠ دقائق": "Practice Arabic for 10 minutes", "مراجعة درس اليوم أو تعلّم معلومة جديدة": "Review today's lesson or learn something new", "مساعدة أخيكِ أو أختكِ بلطف": "Gently help your brother or sister", "مساعدة أخيك أو أختك بلطف": "Gently help your brother or sister", "الصدق والوفاء بالوعد طوال اليوم": "Honesty and keeping promises all day", "المحافظة على البيئة والممتلكات العامة": "Care for nature and public property", "تنظيم الوقت: إنهاء الأعمال قبل وقت اللعب": "Time management: finish your work before play time", "تعلّم قيمة إسلامية وتطبيقها في موقف حقيقي": "Learn an Islamic value and apply it in real life", "حفظ آية أو سورة قصيرة جديدة": "Memorize a new verse or short surah", "وقت اللعب": "Play Time", "الوقت المتبقي لك اليوم": "Your time left today", "الوقت المتبقي لكِ اليوم": "Your time left today", "كل": "Every", "دقائق": "minutes", "فتحت": "You opened", "فتحتِ": "You opened", "دقيقة": "minutes", "العب": "Play", "العبي": "Play", "ملخص اليوم": "Today's summary", "وصلت إلى الحد اليومي لوقت اللعب. نلتقي غدًا بإذن الله": "You reached today's play-time limit. See you tomorrow, in sha' Allah", "أنجز مهامك لتجمع النقاط وتفتح وقتًا للّعب": "Finish your tasks to collect points and unlock play time", "أنجزي مهامك لتجمعي النقاط وتفتحي وقتًا للّعب": "Finish your tasks to collect points and unlock play time", "تحتاجين": "You need", "وقت لعب": "play time", "استبدل": "Exchange", "استبدلي": "Exchange", "نقاط الإنجاز بدقائق اللعب. كل": "achievement points for play minutes. Every", "نقاطك": "Your points", "المتبقي": "Left", "الحد اليومي": "Daily limit", "دقيقة اليوم": "minutes today", "دقائق مقابل": "minutes for", "وصلت إلى الحد اليومي لوقت اللعب. تقدّمك محفوظ، ونكمل غدًا بإذن الله": "You reached today's play-time limit. Your progress is saved; we'll continue tomorrow, in sha' Allah", "نقاطك لا تكفي الآن. أنجز مهمة من مهامك ثم عد إلى المغامرة": "Not enough points now. Finish one of your tasks, then come back to the adventure", "نقاطكِ لا تكفي الآن. أنجزي مهمة من مهامكِ ثم عودي إلى المغامرة": "Not enough points now. Finish one of your tasks, then come back to the adventure", "اذهب إلى المهام": "Go to tasks", "بقيت ٥ دقائق من وقت اللعب": "5 minutes of play time left", "أكمل بناءك واستعد لحفظ مغامرتك": "Finish building and get ready to save your adventure", "أكملي بناءكِ واستعدي لحفظ مغامرتكِ": "Finish building and get ready to save your adventure", "بقيت دقيقة واحدة": "One minute left", "سيُحفظ تقدّمك تلقائيًا عند انتهاء الوقت": "Your progress will be saved automatically when time runs out", "انتهى وقت اللعب لليوم": "Play time is over for today", "حُفظ تقدّمك كاملًا": "All your progress is saved", "أحسنت! حُفظت مملكتك وكل ما بنيته": "Well done! Your kingdom and everything you built are saved", "أحسنتِ! حُفظت مملكتكِ وكل ما بنيتِه": "Well done! Your kingdom and everything you built are saved", "مهامك غدًا لتكمل المغامرة": "your tasks tomorrow to continue the adventure", "مهام منجزة": "Tasks done", "جزر جديدة": "New islands", "عملات المملكة": "Kingdom coins", "إنجازات اليوم حسب الفئة": "Today's achievements by category", "إلى اللقاء غدًا": "See you tomorrow", "بطل الأمانة": "Champion of Honesty", "مهام الصدق والمسؤولية": "Honesty & responsibility tasks", "صديق الأسرة": "Friend of the Family", "مهام الأسرة وصلة الرحم": "Family & kinship tasks", "قارئ المعرفة": "Knowledge Reader", "مهام الدراسة والقراءة": "Study & reading tasks", "نور العبادة": "Light of Worship", "مهام العبادات والقيم": "Worship & values tasks", "بطل العادات الصحية": "Healthy Habits Hero", "مهام الصحة والنظافة": "Health & hygiene tasks", "حارس الطبيعة": "Nature Guardian", "مزارع وحدائق بنيتها في المملكة": "Farms and gardens you built in the kingdom", "باني المملكة": "Kingdom Builder", "مبانٍ وأسوار أكملت بناءها": "Buildings and walls you completed", "مستكشف العوالم": "World Explorer", "جزر أكملتها": "Islands you completed", "فارس التعاون": "Knight of Cooperation", "سكان انضموا إلى مملكتك": "People who joined your kingdom", "البرونزية": "bronze", "الفضية": "silver", "الذهبية": "gold", "شارة «": "Badge «", "لم تبدأ": "Not started", "برونزية": "Bronze", "فضية": "Silver", "ذهبية": "Gold", "كل شارة لها ثلاث درجات: برونزية وفضية وذهبية، وكل درجة تمنحك جواهر لشراء الزينة من المتجر": "Each badge has three tiers: bronze, silver and gold, and each tier gives gems to buy items in the shop", "تقدّمي الشخصي": "My Personal Progress", "قارن نفسك بنفسك: هذا الأسبوع مقابل الأسبوع الماضي": "Compare yourself with yourself: this week vs. last week", "قارني نفسكِ بنفسكِ: هذا الأسبوع مقابل الأسبوع الماضي": "Compare yourself with yourself: this week vs. last week", "هذا الأسبوع": "This week", "الأسبوع الماضي": "Last week", "ممتاز! أنت تتقدّم": "Excellent! You're improving", "ممتاز! أنتِ تتقدّمين": "Excellent! You're improving", "يمكنك أن تتفوّق على نفسك هذا الأسبوع!": "You can beat your own score this week!", "يمكنكِ أن تتفوّقي على نفسكِ هذا الأسبوع!": "You can beat your own score this week!", "دقائق اللعب": "Play minutes", "الماضي": "last", "فُتحت مملكة جديدة!": "A new kingdom is open!", "نقطة إنجاز": "achievement points", "النقاط المطلوبة": "Points needed", "مقابل": "for", "بدون حد لوقت اللعب": "No play-time limit", "للتجربة فقط": "testing only", "احفظ إعدادات الوقت": "Save time settings", "اليوم: فُتح": "Today: opened", "دقيقة · لُعب": "min · played", "دقيقة · المتبقي": "min · left", "سجل آخر ٧ أيام": "Last 7 days", "د": "min", "التقدّم في الممالك": "Progress in the kingdoms", "فئات المهام وعمر الطفل": "Task categories & child's age", "الفئة العمرية": "Age group", "من ٧ إلى ٩ سنوات": "7 to 9 years", "من ١٠ إلى ١٢ سنة": "10 to 12 years", "الرصيد": "Balance", "تصحيح الرصيد": "Correct the balance", "أو": "or", "تطبيق": "Apply", "تصفير": "Reset", "فتح جميع المراحل والممالك": "Open all stages and kingdoms", "للتجربة": "for testing", "موافقة تلقائية على المهام التي لا تحتاج تحققًا": "Auto-approve tasks that don't need checking", "بسيطة": "simple", "متوسطة": "medium", "كبيرة": "big", "الفئة": "Category", "يومية": "Daily", "أسبوعية": "Weekly", "لمرة واحدة": "One-time", "تحتاج موافقة ولي الأمر": "Needs parent approval", "عدّل الاسم أو النقاط مباشرة": "edit the name or points directly", "تحتاج موافقة": "Needs approval", "تحقق": "Check", "٧-٩": "7-9", "١٠-١٢": "10-12", "تُحفظ البيانات على هذا الجهاز فقط": "Data is saved on this device only", "التخزين المحلي للمتصفح": "browser local storage", "، ولا تُرسل إلى أي خادم. لا تزامن بين الأجهزة، والحماية من التلاعب محدودة": ", and is never sent to any server. No sync between devices, and tamper protection is limited", "وصلت إلى الحد اليومي": "You reached the daily limit", "نقاطك لا تكفي": "Not enough points", "حُفظت إعدادات الوقت": "Time settings saved", "عُدّل الرصيد": "Balance adjusted", "صُفّر رصيد النقاط": "Points balance reset", "اكتب اسم المهمة أولًا": "Type the task name first", "أُضيفت المهمة": "Task added", "اللعبة متوقفة، ووقت اللعب لا ينقص الآن": "The game is paused, and play time isn't counting now", "تشغيل الصوت": "Sound on", "كتم الصوت": "Mute sound", "الدرس التعليمي": "Tutorial", "جودة الرسومات": "Graphics quality", "أعد": "Restart", "أعيدي": "Restart", "هذه الجزيرة من البداية": "this island from the beginning", "حفظ والعودة إلى القائمة": "Save and return to the menu", "لوحة المفاتيح: الأسهم للحركة · المسافة لدفع العملة": "Keyboard: arrows to move · Space to pay a coin", "للهجوم": "to attack", "للنزول عن الخيل": "to dismount", "للخريطة": "for the map", "للاستراحة": "to pause", "ستبدأ الجزيرة من جديد وتعود عملاتها إلى الخزينة. متأكد؟": "The island will restart and its coins return to the treasury. Are you sure?", "نعم،": "Yes,", "البدء": "restart", "تراجع": "Go back", "١. الحركة": "1. Movement", "حرّك جوادك يمينًا ويسارًا بالأزرار": "Move your horse left and right with the buttons", "أو الأسهم": "or the arrows", "لتستكشف أرضك": "to explore your land", "حرّكي جوادكِ يمينًا ويسارًا بالأزرار": "Move your horse left and right with the buttons", "لتستكشفي أرضكِ": "to explore your land", "٢. العملات": "2. Coins", "العملات هي ثروة المملكة. اجمع العملات اللامعة، وافتح صناديق الكنز": "Coins are the kingdom's wealth. Collect shiny coins and open treasure chests", "العملات هي ثروة المملكة. اجمعي العملات اللامعة، وافتحي صناديق الكنز": "Coins are the kingdom's wealth. Collect shiny coins and open treasure chests", "٣. البناء": "3. Building", "قف عند علامة البناء المضيئة واضغط زر العملة الذهبي لتدفع. ستطير العملات إلى المبنى": "Stand at a glowing build sign and press the gold coin button to pay. Coins will fly to the building", "قفي عند علامة البناء المضيئة واضغطي زر العملة الذهبي لتدفعي. ستطير العملات إلى المبنى": "Stand at a glowing build sign and press the gold coin button to pay. Coins will fly to the building", "٤. السكان": "4. People", "أعطِ المتجوّلين حول النار عملة ليصبحوا قرويين، ثم اشترِ لهم القوس": "Give wanderers by the fire a coin to become villagers, then buy them a bow", "رامٍ": "archer", "أو المطرقة": "or a hammer", "بنّاء": "builder", "أعطي المتجوّلين حول النار عملة ليصبحوا قرويين، ثم اشتري لهم القوس": "Give wanderers by the fire a coin to become villagers, then buy them a bow", "٥. الليل": "5. Night", "ابنِ الأسوار قبل الغروب! الوحوش تخرج من البوابات ليلًا لتسرق العملات، وإن أخذت التاج خسرت الجزيرة": "Build walls before sunset! Monsters come out of gates at night to steal coins, and if they take your crown you lose the island", "ابني الأسوار قبل الغروب! الوحوش تخرج من البوابات ليلًا لتسرق العملات، وإن أخذت التاج خسرتِ الجزيرة": "Build walls before sunset! Monsters come out of gates at night to steal coins, and if they take your crown you lose the island", "٦. الإبحار": "6. Sailing", "أصلح السفينة عند المرسى بالعملات، ثم اركبها لتبحر إلى الجزيرة التالية. تقدّمك محفوظ دائمًا": "Repair the ship at the dock with coins, then board it to sail to the next island. Your progress is always saved", "أصلحي السفينة عند المرسى بالعملات، ثم اركبيها لتبحري إلى الجزيرة التالية. تقدّمكِ محفوظ دائمًا": "Repair the ship at the dock with coins, then board it to sail to the next island. Your progress is always saved", "تخطّي الدرس": "Skip tutorial", "أتقنت": "You mastered", "أتقنتِ": "You mastered", "أساسيات المملكة!": "the kingdom basics!", "ابنِ ودافع واستكشف": "Build, defend and explore", "ابني ودافعي واستكشفي": "Build, defend and explore", "انتصرت أيها البطل!": "Victory, hero!", "انتصرتِ أيتها البطلة!": "Victory, heroine!", "حرّرت": "You freed", "حرّرتِ": "You freed", "الممالك الخمس وأكملت الجزر كلها، وأضاءت «مملكة النور» بإنجازاتك اليومية": "the five kingdoms and completed every island, and the \"Kingdom of Light\" shines with your daily achievements", "مبنى": "buildings", "الحمد لله": "Alhamdulillah", "النصر": "Victory", "تلقائية": "Auto", "قصوى": "Maximum", "فائقة": "Ultra", "عالية": "High", "سلسة": "Smooth", "ضُبطت جودة الرسومات على «": "Graphics quality set to «", "لحركة أنعم": "for smoother motion", "الماموث العتيق": "Ancient mammoth", "اليتي الأبيض": "White yeti", "الذئب الفضي": "Silver wolf", "قرية النخيل": "Palm Village", "قرية الصخرة": "Rock Village", "قرية الينابيع": "Springs Village", "قرية الصقور": "Falcon Village", "قرية الوادي": "Valley Village", "قرية الحدّادين": "Blacksmiths' Village", "قرية الرمّان": "Pomegranate Village", "قرية الفنار": "Lighthouse Village", "قرية البرج": "Tower Village", "قرية اللؤلؤ": "Pearl Village", "حرّاس": "Guards of", "حارس": "guardian of", "شيخ": "Elder of", "الرحّالة الغامض": "The Mysterious Traveler", "الحكيم الأعمى": "The Blind Sage", "حارس المنارة القديم": "The Old Lighthouse Keeper", "الصياد الصامت": "The Silent Hunter", "ناسخ الكتب": "The Book Copier", "الشلال": "the waterfall", "الأطلال القديمة": "the old ruins", "التمثال الكبير": "the great statue", "البئر القديمة": "the old well", "في هذه الجزيرة روح جواد لم يُسرج منذ مئة عام…»": "On this island lives the spirit of a steed not saddled for a hundred years…\"", "الريح تعرف اسمه، لكنها لا تقوله إلا لمن صبر.»": "The wind knows its name, but tells it only to the patient.\"", "اقتربت. حين يهدأ الليل يُسمع صهيله بعيدًا…»": "You're close. When the night is quiet, its neigh is heard far away…\"", "سيفٌ كان لملكٍ قديم، دُفن حيث لا يمشي أحد…»": "A sword of an ancient king, buried where no one walks…\"", "حدّه لا يصدأ، ومقبضه ينتظر كفًّا أمينة.»": "Its edge never rusts, and its hilt waits for an honest hand.\"", "بقي سرّ واحد… والسرّ لا يُعطى إلا بالوفاء.»": "One secret remains… and secrets are given only for loyalty.\"", "تحت هذه الأرض صندوقٌ يلمع كالنجوم…»": "Under this land lies a chest that shines like stars…\"", "أخفاه تاجرٌ هارب من الظلام، ولم يعد.»": "A merchant fleeing the darkness hid it, and never came back.\"", "أكاد أتذكّر المكان… أعنّي قليلًا بعد.»": "I almost remember the place… help me a little more.\"", "لأهل القرية المجاورة سرٌّ لا يعرفه الغرباء…»": "The people of the nearby village have a secret strangers don't know…\"", "شيخهم يحب أمرًا واحدًا أكثر من الذهب.»": "Their elder loves one thing more than gold.\"", "سأخبرك… لكن ليس قبل أن أثق بك.»": "I will tell you… but not before I trust you.\"", "همم…»": "Hmm…\"", "ليس بعد.»": "Not yet.\"", "قريبًا.»": "Soon.\"", "حيث يسقط الماء ولا يبتلّ الحجر": "where water falls but the stone stays dry", "حيث تنام حجارة الأوّلين": "where the stones of the ancients sleep", "حيث يقف فارسٌ لا يتحرّك": "where a knight stands without moving", "حيث يحفظ الماءُ الأسرار في العتمة": "where water keeps secrets in the dark", "المكان الذي حدّثتك عنه": "the place I told you about", "اذهب": "Go", "اذهبي": "Go", "، ثم": ", then", "عد": "come back", "عودي": "come back", "إليّ.»": "to me.\"", "قبل أن تولد الممالك، كان للجزر تاجٌ من نور يحرسها": "Before the kingdoms were born, the islands had a crown of light guarding them", "سُرق التاج في ليلةٍ بلا قمر، وانشقّت الأرض عن بوابات الظلام": "The crown was stolen on a moonless night, and the earth split open with dark gates", "قسّم الحكماء نور التاج إلى شظايا، وأخفوها في الجزر": "The sages split the crown's light into shards and hid them across the islands", "كل بوابة تُغلق تعيد شظيةً من النور إلى السماء": "Every gate that closes returns a shard of light to the sky", "الخيول المجنّحة كانت حرّاس التاج، ونامت حين ضاع": "The winged horses were the crown's guardians, and they slept when it was lost", "الأسلحة الأسطورية صُنعت من حجر سقط مع التاج": "The legendary weapons were forged from a stone that fell with the crown", "يقال إن آخر الملوك أوصى: «لا يحمل التاج إلا من وفى بوعده»": "It is said the last king advised: \"Only one who keeps their promise may carry the crown\"", "في مملكة النور برجٌ ينتظر عودة التاج": "In the Kingdom of Light, a tower awaits the crown's return", "صفحة من الحكاية": "A page of the story", "عثرت": "You found", "عثرتِ": "You found", "مزار مطية أسطورية": "a legendary mount shrine", "سلاح أسطوري مدفون": "a buried legendary weapon", "كنز جواهر مخفي": "a hidden gem treasure", "اضغط": "Press", "اضغطي": "Press", "زر العملة بجانبه": "the coin button next to it", "اتجه شرقًا": "Head east (right)", "اتجهي شرقًا": "Head east (right)", "اتجه غربًا": "Head west (left)", "اتجهي غربًا": "Head west (left)", "نحو": "about", "سلاح أسطوري": "a legendary weapon", "كنز الجواهر": "the gem treasure", "سرّ قرية منافسة": "a rival village's secret", "لا شيء بلا ثمن يا": "Nothing is free,", "بُني": "my son", "بُنيتي": "my daughter", "أعطني": "Give me", "عملات أشتري بها طعامًا لأهلي.»": "coins so I can buy food for my family.\"", "ذاكرتي ضعيفة الليلة…": "My memory is weak tonight…", "إليّ بعد طلوع الفجر، فلعلّي أتذكّر.»": "to me after dawn, maybe I'll remember.\"", "بيتي بارد": "My house is cold", "لي": "me", "من الحطب ثم": "firewood, then", "و": "and", "انظر": "look", "انظري": "look", "ما حولها، ثم": "around it, then", "أخبرني": "tell me", "أخبريني": "tell me", "بما رأيت.»": "what you saw.\"", "لست": "You're not", "وحدك": "alone", "وحدكِ": "alone", "من يبحث": "in searching", "اسأل": "Ask", "اسألي": "Ask", "الحكيم": "the sage", "أولًا عن الطريق، ثم": "about the road first, then", "تعال": "come", "تعالي": "come", "اكتشفت": "You discovered", "اكتشفتِ": "You discovered", "سيقبل": "will accept", "هديتك بنصف الثمن، ويهدأ حارسه": "your gift at half price, and its guardian calms down", "ظهرت العلامة على الخريطة": "the mark appeared on the map", "أهلًا": "Welcome,", "بحامي": "protector of", "بحامية": "protector of", "نحن معك في السراء والضراء.»": "We stand with you in good times and bad.\"", "القرية": "The village", "حليفتك": "is your ally", "حليفتكِ": "is your ally", "تعطيك عملات كل صباح، وحرّاسها يدافعون عنها، و": "gives you coins every morning, its guards defend it, and", "يحميها معك": "protects it with you", "الحصن: المستوى": "The fort: level", "العملات عنده لتطويره، وابنِ الأسوار حوله": "coins there to upgrade it, and build walls around it", "ابنِ": "Build", "ابني": "Build", "حصنًا وأسوارًا لهذه القرية": "a fort and walls for this village", "اخترت": "You chose", "اخترتِ": "You chose", "القتال! لن نستسلم حتى يسقط": "to fight! We won't give up until", "وكل حرّاسنا.»": "and all our guards fall.\"", "ما زال يقاتل": "Still fighting", "الهدية لتنتهي الحرب": "the gift to end the war", "الهدية للصلح": "the peace gift", "من أنت أيها الغريب؟": "Who are you, stranger?", "من أنتِ أيتها الغريبة؟": "Who are you, stranger?", "نحن أهل": "We are the people of", "، لا نخضع لأحد": ", we bow to no one", "يحرس قريتنا، ورجالنا لا يرحمون من يقترب بسيفه.»": "guards our village, and our men show no mercy to anyone who comes with a sword.\"", "سمعت أنك": "I heard that you", "ساعدت": "helped", "ساعدتِ": "helped", "أهل الجزيرة… لعلّنا نثق بك.»": "the people of the island… perhaps we can trust you.\"", "يقول الناس إن أهل الجزر يعرفون أسرار هذه القرية…": "People say the islanders know this village's secrets…", "اسألهم": "ask them", "اسأليهم": "ask them", "اكسب": "Win", "اكسبي": "Win", "ولاءهم بهدية، أو": "their loyalty with a gift, or", "واجه": "face", "واجهي": "face", "حرّاسهم و": "their guards and", "هدية الولاء": "Loyalty gift", "سأواجه حرّاسكم": "I will face your guards", "السلام عليكم": "Peace be upon you", "أيها الفارس": "knight", "أيتها الفارسة": "knight", "أنا": "I am", "، أعرف هذه الجزيرة شبرًا شبرًا.»": ", I know every inch of this island.\"", "سمعت في الأسواق حديثًا عن": "I heard talk in the markets about", "لكن الطرق خطرة، والكلام له ثمن.»": "but the roads are dangerous, and words have a price.\"", "اسأله عن": "Ask him about", "في محفظتك": "In your purse", "لديك": "you have", "من الحطب": "firewood", "الأشجار لتقطعها": "trees to chop them", "انتظر حتى يطلع الفجر": "Wait until dawn", "لم": "You haven't", "تصل": "reached", "تصلي": "reached", "بعد": "yet", "لم يُسأل بعد": "Not asked yet", "أعطه": "Give him", "أعطه الحطب": "Give him the firewood", "أخبره بما رأيت": "Tell him what you saw", "أخبريه بما رأيتِ": "Tell him what you saw", "ذكّره بوعده": "Remind him of his promise", "ذكّريه بوعده": "Remind him of his promise", "أخبره أنك سألت": "Tell him you asked", "أخبريه أنكِ سألتِ": "Tell him you asked", "وفيت": "You kept", "وفيتِ": "You kept", "بما طلبت، فاسمع": "your word, so listen", "أهل": "The people of", "يحبّون الكرماء، قدّم لهم هدية وسيقبلون نصفها": "love the generous; give them a gift and they'll accept half", "لا شيء بقي هنا": "Nothing is left here", "في أمان الله": "Go in God's care", "وداعًا": "Goodbye", "الحرب على": "War on", "وكل الحرّاس ليخضعوا لك": "and all the guards so they submit to you", "أرض الحصن جاهزة": "The fort land is ready", "العملات عند علامة البناء في وسط القرية وعند الأسوار": "coins at the build sign in the village center and at the walls", "تبايعك!": "pledges loyalty to you!", "تبايعكِ!": "pledges loyalty to you!", "خضعت لك!": "submits to you!", "خضعت لكِ!": "submits to you!", "حرّاسها و": "its guards and", "معك الآن": "are with you now", "لها حصنًا من عند شيخها": "a fort for it, from its elder", "السلاح الأسطوري بين يديك الآن": "The legendary weapon is in your hands now", "سلاح أسطوري قديم": "An ancient legendary weapon", "تملكه": "You already own it", "تملكينه": "You already own it", "بالفعل": "already", "كنز الجواهر!": "Gem treasure!", "رأيت": "You saw", "رأيتِ": "You saw", "أهداف الجزيرة": "Island goals", "أرسلت القرى الحليفة": "Allied villages sent", "ولاء القرى": "Village loyalty", "بوابات الظلام": "Dark gates", "الأسرار": "Secrets", "السفينة": "Ship", "جاهزة": "ready", "محطّمة": "wrecked", "دمّرت": "You destroyed", "دمّرتِ": "You destroyed", "بوابة الظلام!": "a dark gate!", "لن تخرج الوحوش من هذه الجهة بعد اليوم": "No monsters will come from this side anymore", "الجزيرة!": "the island!", "حليفة": "ally", "حرب": "war", "معادية": "hostile", "ادفع العملات عند علامات البناء لتبني وتطوّر مملكتك": "Pay coins at build signs to build and upgrade your kingdom", "ابحث عن الشخصية الغامضة… فهي تعرف أسرار الجزيرة": "Find the mysterious character… they know the island's secrets", "أعطِ المتجوّلين عملة ليصبحوا من أهل مملكتك": "Give wanderers a coin so they join your kingdom", "ابنِ الأسوار قبل الليل، فالظلام لا يرحم": "Build walls before night, the darkness has no mercy", "افتح الخريطة لترى القرى والبوابات والأسرار": "Open the map to see villages, gates and secrets", "الكنوز المخفية تلمع حين تقترب منها": "Hidden treasures sparkle when you get close", "دمّر بوابات الظلام لتحرّر الجزيرة": "Destroy the dark gates to free the island", "اكسب ولاء القرى بالهدية… أو بالشجاعة": "Win the villages' loyalty with a gift… or with courage", "عملة و": "coins and", "اكتبي اسمك": "Type your name", "هيّا نبدأ يا بطلة": "Let's go, heroine", "هيّا نبدأ يا بطل": "Let's go, hero", "أكمل المملكة السابقة لتفتح هذه المملكة": "Complete the previous kingdom to open this one", "أكمل المرحلة السابقة أولًا": "Complete the previous stage first", "الرمز غير صحيح، حاول مجددًا": "Wrong code, try again", "مكافأة من ولي الأمر": "Reward from parent", "الرمز يجب أن يكون": "The code must be", "حُفظت الإعدادات": "Settings saved", "سيُحذف كل التقدم والمشتريات. متأكد؟": "All progress and purchases will be deleted. Are you sure?", "نعم، ابدأ من الصفر": "Yes, start from zero", "بدأت رحلة جديدة": "A new journey has started", "نُسخ الرمز": "Code copied", "حدّد الرمز وانسخه": "Select the code and copy it", "فُتحت جميع المراحل": "All stages unlocked", "عادت المراحل للفتح التدريجي": "Stages back to gradual unlocking", "برّ الوالدين طريق الأبطال": "Honoring parents is the heroes' path", "الصلاة نور، والنور يهزم الظلام": "Prayer is light, and light defeats darkness", "الصدق والأمانة أقوى من كل سلاح": "Honesty and trust are stronger than any weapon", "العلم كنزٌ لا يُسرق": "Knowledge is a treasure no one can steal", "بالتعاون تُبنى القرى وتُحمى الحصون": "With cooperation, villages are built and forts protected", "من جدّ وجد، ومن زرع حصد": "Whoever strives succeeds, and whoever plants harvests", "الكنوز الحقيقية في الأخلاق": "True treasures are in good manners"};
var LANG=(function(){try{return localStorage.getItem('mk-lang')||'ar'}catch(e){return 'ar'}})();
var I18RX=null,I18C=new Map(),I18NAME=null;
function i18Prep(){if(I18RX)return;const ks=Object.keys(I18N_EN).sort((a,b)=>b.length-a.length),esc=k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),L=/[\u0621-\u064A]/;
  try{I18RX=new RegExp(ks.map(k=>(L.test(k[0])?'(?<![\u0621-\u064A])':'')+esc(k)+(L.test(k[k.length-1])?'(?![\u0621-\u064A])':'')).join('|'),'g')}catch(e){I18RX=new RegExp(ks.map(esc).join('|'),'g')}
  try{const A=new Set(),B=new Set();for(const g of GENST){g.a.forEach(x=>A.add(x));g.b.forEach(x=>B.add(x))}I18NAME={A,B}}catch(e){I18NAME=null}}
function tr(s){if(LANG!=='en'||!s||!/[\u0600-\u06FF]/.test(s))return s;const c=I18C.get(s);if(c!==undefined)return c;i18Prep();let o=s;
  const m=I18NAME&&s.trim().match(/^(\d+\.\s*)?([\u0600-\u06FF]+) ([\u0600-\u06FF ]+)$/);if(m&&I18NAME.A.has(m[2])&&I18NAME.B.has(m[3])){o=(m[1]||'')+(I18N_EN[m[3]]||m[3])+' '+(I18N_EN[m[2]]||m[2])}
  else o=s.replace(/\s+/g,' ').replace(I18RX,k=>I18N_EN[k]);
  o=o.replace(/[\u0660-\u0669]/g,d=>String(d.charCodeAt(0)-0x660)).replace(/،/g,',').replace(/؟/g,'?').replace(/[«»]/g,'"').replace(/ـ/g,'');
  if(I18C.size>6000)I18C.clear();I18C.set(s,o);return o}
function i18Node(n){if(n.nodeType===3){const v=n.nodeValue;if(v&&/[\u0600-\u06FF]/.test(v)){const t=tr(v);if(t!==v)n.nodeValue=t}return}
  if(n.nodeType!==1)return;if(n.tagName==='SCRIPT'||n.tagName==='STYLE')return;
  if(n.getAttribute){if(n.getAttribute('dir')==='rtl')n.setAttribute('dir','ltr');for(const a of ['placeholder','aria-label','title']){const v=n.getAttribute(a);if(v&&/[\u0600-\u06FF]/.test(v))n.setAttribute(a,tr(v))}if(n.tagName==='INPUT'&&n.type!=='text'&&n.value&&/[\u0600-\u06FF]/.test(n.value))n.value=tr(n.value)}
  for(const ch of n.childNodes)i18Node(ch)}
function i18Init(){document.querySelectorAll('[data-setlang]').forEach(b=>{b.textContent=LANG==='en'?(b.classList.contains('langmini')?'ع':'العربية'):(b.classList.contains('langmini')?'EN':'English')});if(LANG!=='en')return;document.documentElement.lang='en';document.documentElement.dir='ltr';document.title=tr(document.title);document.body.classList.add('lang-en');i18Node(document.body);
  new MutationObserver(ms=>{for(const m of ms){if(m.type==='characterData')i18Node(m.target);else{m.addedNodes.forEach(i18Node);if(m.type==='attributes')i18Node(m.target)}}}).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['dir','placeholder','aria-label','title']});
  const P=CanvasRenderingContext2D.prototype;for(const f of ['fillText','strokeText','measureText']){const o=P[f];P[f]=function(t,...a){return o.call(this,typeof t==='string'?tr(t):t,...a)}}}
function setLang(l){try{localStorage.setItem('mk-lang',l)}catch(e){}LANG=l;location.reload()}

/* ================= KINGDOM-STYLE DETAILS: stone embankment, night torch, day card, vendor banners ================= */
/* KTC-style embankment: courses of big rounded stones under a grass lip, on a true 1px grid */
var EMBR={0:['#1a120c','#38281a','#523c28','#6c5236','#866a46','#a2845a'],1:['#161a22','#2e3644','#46505e','#606a78','#7c8694','#9ea6b2'],2:['#3a2c1c','#644e32','#8c7652','#b09a72','#ccb892','#e6d8b4'],3:['#0e0a0c','#221a1c','#36292a','#4a3a36','#5e4a42','#765e4c'],4:['#2a2434','#484058','#686080','#8a82a0','#aca6c0','#cecade']};
var WDROP=7;
function groundHD(Wd,b){const R=RS,LH=14+WDROP,Hg=LH*R,cv=mkc(Wd,Hg),c=cv.getContext('2d'),im=c.createImageData(Wd,Hg),d=im.data,P=HDP[b],GR=P.grass.map(toA),SC=(EMBR[b]||EMBR[0]).map(toA),Wl=Math.ceil(Wd/R),n=SC.length;
  const put=(lx,ly,col)=>{for(let yy=0;yy<R;yy++)for(let xx=0;xx<R;xx++){const x=lx*R+xx,y=ly*R+yy;if(x<0||y<0||x>=Wd||y>=Hg)continue;const p=(y*Wd+x)*4;d[p]=col[0];d[p+1]=col[1];d[p+2]=col[2];d[p+3]=255}};
  const T=5,LIP=2,top=T+LIP;
  // courses of stones (wrap seamlessly: last stone of each row ends exactly at Wl)
  const rows=[];let y=top;const rh=[8,7,LH-top-15];for(let r=0;r<3&&y<LH;r++){const h=Math.max(2,Math.min(rh[r],LH-y));const stn=[];let x=-Math.floor(hsh2(r,1,b)*8);let k=0;while(x<Wl){let w=9+Math.floor(hsh2(k,r+3,b)*11);if(Wl-(x+w)<6)w=Wl-x;stn.push({x0:x,x1:x+w,tone:hsh2(k,r+9,b),moss:hsh2(k,r+15,b)});x+=w;k++}rows.push({y0:y,y1:y+h,stn});y+=h}
  const grid=[];for(let lx=0;lx<Wl;lx++){grid[lx]=[]}
  for(const row of rows)for(const s of row.stn){for(let lx=Math.max(0,s.x0);lx<Math.min(Wl,s.x1);lx++)for(let ly=row.y0;ly<row.y1;ly++){
    const so=s.so??(s.so=Math.floor(s.moss*7)%2),y0s=row.y0+so,ex=Math.min(lx-s.x0,s.x1-1-lx),ey=Math.min(ly-y0s,row.y1-1-ly),fy=(ly-y0s)/(row.y1-y0s);
    let col;if(ly<y0s||ex===0||ly===row.y1-1||(ex===1&&ey===0)||(ex===1&&ly===row.y1-2)){col=ly<y0s?lerpA(SC[0],SC[1],.3):SC[0]}
    else{let t=.52+(s.tone-.5)*.55;if(ly===y0s)t=Math.min(1,t+.38);else if(ly===y0s+1)t+=.14;if(ex===1&&lx-s.x0===1)t+=.1;if(ex===1&&s.x1-1-lx===1)t-=.15;t-=fy*.25;t+=(hsh2(lx,ly,b+13)-.5)*.14;if(hsh2(lx>>1,ly>>1,b+31)>.88)t-=.16;
      col=SC[Math.max(1,Math.min(n-1,Math.round(t*(n-1))))];if(s.moss>.6&&ly-row.y0<=1+((lx*7)%3)&&hsh2(lx,ly,b+41)>.3)col=lerpA(col,GR[1]||GR[0],.55)}
    if(ly>=LH-2)col=lerpA(col,[4,6,12],ly===LH-1?.6:.35);grid[lx][ly]=col}}
  for(let lx=0;lx<Wl;lx++){
    for(let ly=T;ly<top;ly++)put(lx,ly,rampPick(GR,Math.min(.999,.85-(ly-T)*.3+(hsh2(lx,ly,2)-.5)*.2),lx,ly));
    for(let ly=top;ly<LH;ly++)put(lx,ly,grid[lx][ly]||SC[0]);
    if(hsh2(lx,0,b+9)>.3){const bh=1+Math.floor(hsh2(lx,1,b)*3.4);for(let yy=0;yy<bh;yy++)put(lx,T-1-yy,rampPick(GR,Math.min(.999,.45+yy/bh*.5),lx,yy))}
    if(b!==3&&hsh2(lx>>1,8,b+23)>.88){const dl=1+Math.floor(hsh2(lx,4,b)*4);for(let yy=0;yy<dl;yy++)put(lx,top+yy,rampPick(GR,.25+yy*.05,lx,yy))}
    if(hsh2(lx,5,b+19)>.985&&b!==3)put(lx,T-3,toA(['#f29ccf','#f5e08a','#ffffff','#b8a0f0'][lx%4]));
    if(b===3&&hsh2(lx,7,9)>.96)put(lx,top+2+Math.floor(hsh2(lx,8,9)*10),[255,110,30])}
  c.putImageData(im,0,0);return cv}
function drawTorch(B,V,hx,t){if(NFNOW<.3||V.sail||V.boat)return;const alt=V.alt||0,f=V.face||1,x=hx-f*2.5,y=GY-alt-(V.foot?16:27),fl=Math.sin(t/60)*.6+Math.sin(t/23)*.3;
  B.fillStyle='#3a2414';B.fillRect(x-.5,y,1,7);B.fillStyle='#5a3a1e';B.fillRect(x-.8,y-.4,1.6,1.4);
  B.save();B.globalCompositeOperation='lighter';const g=B.createRadialGradient(x,y-2,0,x,y-2,16);g.addColorStop(0,`rgba(255,170,70,${.35*NFNOW})`);g.addColorStop(1,'rgba(255,120,40,0)');B.fillStyle=g;B.fillRect(x-16,y-18,32,32);B.restore();
  B.fillStyle='#ff7a1a';B.beginPath();B.moveTo(x-1.6,y);B.quadraticCurveTo(x+fl,y-5.5,x+1.6,y);B.fill();B.fillStyle='#ffe08a';B.beginPath();B.moveTo(x-.8,y);B.quadraticCurveTo(x+fl*.5,y-3,x+.8,y);B.fill();
  if(Math.random()<.25)P({t:'glow',x:V.hx-f*2.5+rnd(-1,1),y:y-4,vx:rnd(-.2,.2),vy:rnd(-.7,-.3),drag:.96,life:rnd(10,20),col:'#ffb040',s:rnd(.8,1.4)});LITS.push([x,y-2,58,.85])}
function dayCard(n){const el=document.getElementById('gDay');if(!el)return;const RN=['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV'];
  el.innerHTML=LANG==='en'?`<b>DAY ${RN[n]||n}</b>`:`<b>اليوم ${['','الأول','الثاني','الثالث','الرابع','الخامس','السادس','السابع','الثامن','التاسع','العاشر'][n]||n}</b>`;el.classList.remove('show');void el.offsetWidth;el.classList.add('show')}
function vendorBanner(c,s,sx,t){const k=s.k,col={bow:'#2f5a7a',hammer:'#7a4a24',scythe:'#5a7a2a',shield:'#6a2a3a'}[k],y=GY,x=sx+12,w=(Math.sin(t/300+sx)*.6+Math.sin(t/110+sx*1.3)*.25)*(.5+WINDF(t));
  c.fillStyle='#3a2414';c.fillRect(x-.6,y-40,1.2,40);c.fillRect(x-5,y-40,10,1.2);c.fillStyle='#c9a24a';c.fillRect(x-1,y-42,2,2);
  c.fillStyle=col;c.beginPath();c.moveTo(x-4.4,y-39);c.lineTo(x+4.4,y-39);c.lineTo(x+4.4+w*.3,y-24);c.lineTo(x+w*.3,y-21);c.lineTo(x-4.4+w*.3,y-24);c.closePath();c.fill();
  c.fillStyle='rgba(0,0,0,.25)';c.fillRect(x+2.6,y-39,1.8,15);c.fillStyle='#f0e2bc';const ix=x+w*.15,iy=y-33;
  if(k==='bow'){c.fillRect(ix-.4,iy-4,.8,8);c.fillRect(ix+.4,iy-4,1,1);c.fillRect(ix+.4,iy+3,1,1);c.fillRect(ix+1.2,iy-3,.6,6)}
  else if(k==='hammer'){c.fillRect(ix-.4,iy-2,.8,6);c.fillRect(ix-2.4,iy-3.4,4.8,2)}
  else if(k==='scythe'){c.fillRect(ix-.4,iy-3,.8,7);c.fillRect(ix-2.8,iy-3.4,3,1);c.fillRect(ix-2.8,iy-2.4,1,1)}
  else{c.beginPath();c.moveTo(ix-2.4,iy-3);c.lineTo(ix+2.4,iy-3);c.lineTo(ix+2,iy+1);c.lineTo(ix,iy+3);c.lineTo(ix-2,iy+1);c.closePath();c.fill()}}

/* ================= GALLEY SHIPS + ALLEGIANCE BANNERS ================= */
var KCOL={me:{f:'#24407e',s:'#e8c24a',e:'#f2d27a'},hostile:{f:'#8a1f24',s:'#1a1012',e:'#e8b04a'},war:{f:'#3a0c10',s:'#d03a2a',e:'#ff6a3a'},ally:{f:'#24407e',s:'#4aa85a',e:'#f2d27a'}};
function shipSprite(b,lv){lv=lv||S.ship||1;const key='gal3_'+b+'_'+lv+RS;if(HDC[key])return HDC[key];
  const R=RS,W=170,H=150,cv=mkc(W*R,H*R),c=cv.getContext('2d');c.scale(R,R);c.lineJoin='round';c.lineCap='round';
  const K=KCOL.me,WL=119,big=lv>=3,len=lv===1?.78:1,cx=86,hw=72*len,xL=cx-hw,xR=cx+hw;
  const deck=x=>{const u=(x-cx)/hw;return 100-4*(1-u*u)+(u<-.8?(-.8-u)*-0:0)},keel=x=>{const u=(x-cx)/hw;return 128-Math.pow(Math.abs(u),2.4)*14};
  // ---- oars (far side, behind hull)
  const nO=lv===1?6:big?13:10;c.strokeStyle='#3a2414';c.lineWidth=1.1;for(let i=0;i<nO;i++){const x=xL+22+i*(hw*2-46)/(nO-1);c.beginPath();c.moveTo(x+2,deck(x)+3);c.lineTo(x-9,WL+8);c.stroke()}
  // ---- hull planks
  c.beginPath();c.moveTo(xL+6,deck(xL+6)-2);for(let x=xL+6;x<=xR-8;x+=2)c.lineTo(x,deck(x));c.lineTo(xR+4,WL+1);c.lineTo(xR+12,WL+4);c.lineTo(xR-6,keel(xR-6));for(let x=xR-8;x>=xL+8;x-=2)c.lineTo(x,keel(x));c.closePath();
  const hg=c.createLinearGradient(0,92,0,130);hg.addColorStop(0,'#9a3a22');hg.addColorStop(.35,'#7a2a18');hg.addColorStop(.7,'#4e1a10');hg.addColorStop(1,'#2a0e08');c.fillStyle=hg;c.fill();
  c.save();c.clip();c.strokeStyle='rgba(20,6,2,.55)';c.lineWidth=.55;for(let y=96;y<132;y+=3.2){c.beginPath();for(let x=xL;x<=xR+12;x+=3)c.lineTo(x,y+(deck(x)-96)*.7);c.stroke()}
  c.strokeStyle='rgba(255,210,160,.14)';for(let y=97.4;y<120;y+=3.2){c.beginPath();for(let x=xL;x<=xR;x+=3)c.lineTo(x,y+(deck(x)-96)*.7);c.stroke()}
  // pale wale stripe + oar ports
  c.fillStyle='#e8dcc0';c.beginPath();for(let x=xL+8;x<=xR;x+=2)c.lineTo(x,deck(x)+4.4);for(let x=xR;x>=xL+8;x-=2)c.lineTo(x,deck(x)+7.2);c.fill();
  c.fillStyle='#1a0a06';for(let i=0;i<nO;i++){const x=xL+22+i*(hw*2-46)/(nO-1);c.beginPath();c.arc(x,deck(x)+5.8,1,0,7);c.fill()}
  // waterline shading
  c.fillStyle='rgba(10,20,30,.35)';c.fillRect(xL,WL-1,hw*2+20,20);c.restore();
  // rail
  c.strokeStyle='#e0b048';c.lineWidth=1.3;c.beginPath();for(let x=xL+6;x<=xR-6;x+=2)c.lineTo(x,deck(x)-.4);c.stroke();
  c.strokeStyle='#3a1a0c';c.lineWidth=.8;for(let x=xL+12;x<xR-8;x+=5){c.beginPath();c.moveTo(x,deck(x)-.4);c.lineTo(x,deck(x)-4);c.stroke()}c.beginPath();for(let x=xL+10;x<=xR-8;x+=2)c.lineTo(x,deck(x)-4);c.stroke();
  // shields along the rail
  if(lv>=2){for(let x=xL+20;x<xR-14;x+=9){const y=deck(x)-2.6;c.fillStyle=K.f;c.beginPath();c.arc(x,y,2.6,0,7);c.fill();c.strokeStyle=K.e;c.lineWidth=.6;c.stroke();c.fillStyle=K.e;c.fillRect(x-.4,y-.4,.8,.8)}}
  // stern sweep (left) curling up and inward
  c.fillStyle='#7a2a18';c.beginPath();c.moveTo(xL+6,deck(xL+6)-2);c.quadraticCurveTo(xL-6,96,xL-8,82);c.quadraticCurveTo(xL-9,72,xL-2,70);c.quadraticCurveTo(xL+4,70,xL+3,76);c.quadraticCurveTo(xL-2,76,xL-2,82);c.quadraticCurveTo(xL+1,94,xL+12,deck(xL+12)+6);c.closePath();c.fill();
  c.strokeStyle='#e0b048';c.lineWidth=1;c.beginPath();c.moveTo(xL+8,deck(xL+8)-1);c.quadraticCurveTo(xL-4,95,xL-6,82);c.quadraticCurveTo(xL-6,73,xL-1,72);c.stroke();
  // steering oar
  c.strokeStyle='#4a2a14';c.lineWidth=1.6;c.beginPath();c.moveTo(xL+10,deck(xL+10)-6);c.lineTo(xL+2,WL+9);c.stroke();c.fillStyle='#5a3418';c.beginPath();c.ellipse(xL+1.6,WL+8,1.6,4,.4,0,7);c.fill();
  // bow (right): ram + upturned prow with eye
  c.fillStyle='#b88a3a';c.beginPath();c.moveTo(xR+4,WL+1);c.lineTo(xR+16,WL+3.2);c.lineTo(xR+4,WL+6);c.closePath();c.fill();
  c.fillStyle='#7a2a18';c.beginPath();c.moveTo(xR-10,deck(xR-10));c.quadraticCurveTo(xR+2,deck(xR)-2,xR+6,88);c.quadraticCurveTo(xR+8,84,xR+4,82);c.lineTo(xR+1,86);c.quadraticCurveTo(xR-2,96,xR-12,deck(xR-12)+6);c.closePath();c.fill();
  c.strokeStyle='#e0b048';c.lineWidth=1;c.beginPath();c.moveTo(xR-10,deck(xR-10)-.5);c.quadraticCurveTo(xR+1,deck(xR)-3,xR+5,84);c.stroke();
  c.fillStyle='#f4ecd8';c.beginPath();c.ellipse(xR-3,deck(xR-3)+3,2.4,1.5,0,0,7);c.fill();c.fillStyle='#1a1012';c.beginPath();c.arc(xR-2.6,deck(xR-3)+3,.9,0,7);c.fill();
  // ---- mast, yard, striped sail
  const mx=cx-2,top=lv===1?30:18,yy=top+10,sw=lv===1?32:big?48:42,sb=deck(mx)-14,belly=4;
  c.fillStyle='#4a2a14';c.fillRect(mx-1.3,top,2.6,deck(mx)-top);c.fillStyle='#6a4020';c.fillRect(mx-1.3,top,.9,deck(mx)-top);
  c.fillStyle='#5a3418';c.save();c.translate(mx,yy);c.rotate(-.02);c.fillRect(-sw-4,-1.2,sw*2+8,2.4);c.restore();
  c.beginPath();c.moveTo(mx-sw,yy+1);c.lineTo(mx+sw,yy+1);c.quadraticCurveTo(mx+sw+belly,(yy+sb)/2,mx+sw-1,sb);c.lineTo(mx-sw+1,sb);c.quadraticCurveTo(mx-sw+belly*.6,(yy+sb)/2,mx-sw,yy+1);c.closePath();
  const sg=c.createLinearGradient(mx-sw,0,mx+sw,0);sg.addColorStop(0,'#cfc6b2');sg.addColorStop(.45,'#f6f1e6');sg.addColorStop(1,'#d8d0bc');c.fillStyle=sg;c.fill();
  c.save();c.clip();const ns=lv===1?3:big?6:5;for(let i=0;i<ns;i++){const x=mx-sw+(i+.5)*(sw*2/ns);c.fillStyle=K.f;c.beginPath();c.moveTo(x-3.2,yy);c.quadraticCurveTo(x-3.2+belly*.6,(yy+sb)/2,x-3.2,sb+2);c.lineTo(x+3.2,sb+2);c.quadraticCurveTo(x+3.2+belly*.6,(yy+sb)/2,x+3.2,yy);c.closePath();c.fill()}
  c.fillStyle='rgba(0,0,0,.12)';c.fillRect(mx-sw,sb-6,sw*2,8);c.fillStyle='rgba(0,0,0,.08)';for(let y=yy+6;y<sb;y+=7)c.fillRect(mx-sw,y,sw*2,.6);c.restore();
  // emblem
  const ey=(yy+sb)/2;c.fillStyle='#f6f1e6';c.beginPath();c.arc(mx+1,ey,6.4,0,7);c.fill();c.strokeStyle=K.f;c.lineWidth=1.2;c.stroke();c.fillStyle=K.f;c.beginPath();c.moveTo(mx+1,ey-4.6);c.lineTo(mx+4.4,ey);c.lineTo(mx+1,ey+4.6);c.lineTo(mx-2.4,ey);c.closePath();c.fill();c.fillStyle=K.e;c.beginPath();c.arc(mx+1,ey,1.4,0,7);c.fill();
  // rigging
  c.strokeStyle='rgba(30,16,8,.85)';c.lineWidth=.45;c.beginPath();c.moveTo(mx,top);c.lineTo(xL+4,deck(xL+4)-2);c.moveTo(mx,top);c.lineTo(xR-4,deck(xR-4)-2);c.moveTo(mx-sw,yy+1);c.lineTo(xL+16,deck(xL+16));c.moveTo(mx+sw,yy+1);c.lineTo(xR-14,deck(xR-14));c.moveTo(mx-sw*.5,sb);c.lineTo(mx-sw*.6,deck(mx-sw*.6)-1);c.moveTo(mx+sw*.5,sb);c.lineTo(mx+sw*.6,deck(mx+sw*.6)-1);c.stroke();
  // crew silhouettes (lv>=2)
  if(lv>=2)for(const dx of [-30,-12,22,40]){const x=mx+dx,y=deck(x)-4;c.fillStyle='#2a1a14';c.fillRect(x-1,y-5,2,5);c.beginPath();c.arc(x,y-6,1.2,0,7);c.fill()}
  if(lv>=4){c.strokeStyle='#f2d27a';c.lineWidth=.7;c.beginPath();for(let x=xL+10;x<=xR-10;x+=2)c.lineTo(x,deck(x)+9.6);c.stroke()}
  c.setTransform(1,0,0,1,0,0);try{spritePolish(cv,1)}catch(e){}
  return HDC[key]={cv,W,H,win:[],smoke:[],flags:[[mx+.5,top-8,K.f]],lan:[[xL+2,72],[xR+2,82]],torch:[],yard:[],b,sheer:deck(84)}}
/* small rowboat recoloured with the player's stripe */
function allegFlag(c,x,y,kind,t,h){const K=KCOL[kind]||KCOL.me;h=h||12;const WF=WINDF(t),wv=u=>(Math.sin(t/(190-WF*60)-u*4.2+x)*1+Math.sin(t/(83-WF*20)-u*7+x*1.7)*.4)*u*(.6+WF*1.2);
  c.fillStyle='#2a1a10';c.fillRect(x-.5,y-h,1,h);c.fillStyle='#c9a24a';c.fillRect(x-1,y-h-1.4,2,1.4);
  const fy=y-h+.6,N=8;c.fillStyle=K.f;c.beginPath();c.moveTo(x+.5,fy);for(let k=1;k<=N;k++){const u=k/N;c.lineTo(x+.5+u*9,fy+wv(u))}for(let k=N;k>=0;k--){const u=k/N;c.lineTo(x+.5+u*9,fy+5.4-u*.8+wv(u))}c.closePath();c.fill();
  c.fillStyle=K.s;c.beginPath();for(let k=0;k<=N;k++){const u=k/N;c.lineTo(x+.5+u*9,fy+2.2+wv(u))}for(let k=N;k>=0;k--){const u=k/N;c.lineTo(x+.5+u*9,fy+3.2+wv(u))}c.fill();
  c.fillStyle=K.e;c.fillRect(x+3.6,fy+1.6+wv(.4),1.4,2)}
function vilKind(vid){if(!vid)return 'me';const v=qVil(vid);if(!v)return 'me';return v.state==='allied'?'ally':v.war?'war':'hostile'}
function drawHouseFlag(c,r,sx,t){const sp=bldSprite(G.b,r.kind,r.v);allegFlag(c,sx+sp.W*.18,GY-sp.H*.72,vilKind(r.vid),t,13)}

/* ================= VIKING FERRY BOAT ================= */
function boatSprite(b){const key='vk2_'+b+RS;if(HDC[key])return HDC[key];const R=RS,W=60,H=30,cv=mkc(W*R,H*R),c=cv.getContext('2d');c.scale(R,R);c.lineCap='round';c.lineJoin='round';const K=KCOL.me,WL=13;
  const gun=x=>{const u=(x-30)/22;return 11.5-2.2*u*u},keel=x=>{const u=(x-30)/22;return 19.5-Math.pow(Math.abs(u),2.2)*6};
  // oars resting in the water
  c.strokeStyle='#3a2414';c.lineWidth=.9;for(const x of [18,26,34,42]){c.beginPath();c.moveTo(x,gun(x)+1.5);c.lineTo(x-5,WL+6);c.stroke();c.fillStyle='#4a2e18';c.beginPath();c.ellipse(x-5.4,WL+6.4,1.4,.7,-.5,0,7);c.fill()}
  // hull
  c.beginPath();c.moveTo(8,gun(8));for(let x=8;x<=52;x+=1.5)c.lineTo(x,gun(x));c.lineTo(54,14);for(let x=52;x>=8;x-=1.5)c.lineTo(x,keel(x));c.lineTo(6,14);c.closePath();
  const g=c.createLinearGradient(0,9,0,21);g.addColorStop(0,'#a06a3a');g.addColorStop(.5,'#6e4424');g.addColorStop(1,'#2e1a0c');c.fillStyle=g;c.fill();
  c.save();c.clip();c.strokeStyle='rgba(20,10,4,.6)';c.lineWidth=.45;for(let k=1;k<5;k++){c.beginPath();for(let x=6;x<=54;x+=1.5){const y=gun(x)+(keel(x)-gun(x))*k/5;x===6?c.moveTo(x,y):c.lineTo(x,y)}c.stroke()}
  c.strokeStyle='rgba(255,220,170,.18)';for(let k=1;k<5;k++){c.beginPath();for(let x=6;x<=54;x+=1.5){const y=gun(x)+(keel(x)-gun(x))*k/5+.6;x===6?c.moveTo(x,y):c.lineTo(x,y)}c.stroke()}
  c.fillStyle='rgba(10,20,30,.3)';c.fillRect(0,WL+1,W,10);c.restore();
  // stern: curled tail (left)
  c.fillStyle='#7a4a26';c.beginPath();c.moveTo(9,gun(9));c.quadraticCurveTo(3,10,3.4,5.4);c.quadraticCurveTo(3.8,2.4,6.6,2.8);c.quadraticCurveTo(8.6,3.4,7.6,5.4);c.quadraticCurveTo(6.4,4.6,5.6,5.8);c.quadraticCurveTo(5.6,10,11,gun(11)+1.6);c.closePath();c.fill();
  c.strokeStyle='#e0b048';c.lineWidth=.55;c.beginPath();c.moveTo(9.6,gun(9.6)-.2);c.quadraticCurveTo(4,10,4.2,5.6);c.quadraticCurveTo(4.6,3.2,6.6,3.4);c.stroke();
  // prow: dragon neck and head (right)
  c.fillStyle='#7a4a26';c.beginPath();c.moveTo(48,gun(48));c.quadraticCurveTo(55,10,55.4,5.4);c.lineTo(57.8,3.2);c.lineTo(59.4,3.8);c.lineTo(58,5.2);c.lineTo(58.8,6.6);c.lineTo(56.6,6.4);c.quadraticCurveTo(57,11,51,gun(51)+1.8);c.closePath();c.fill();
  c.fillStyle='#5a3418';c.beginPath();c.moveTo(55,4.2);c.lineTo(54.2,1);c.lineTo(56.2,3.2);c.closePath();c.fill();
  c.fillStyle='#ffd060';c.fillRect(56.6,3.9,.9,.8);c.strokeStyle='#e0b048';c.lineWidth=.55;c.beginPath();c.moveTo(48.6,gun(48.6)-.2);c.quadraticCurveTo(54.4,10,54.8,5.6);c.stroke();
  // gunwale rail + shields
  c.strokeStyle='#e0b048';c.lineWidth=.8;c.beginPath();for(let x=9;x<=50;x+=1.5)c.lineTo(x,gun(x)-.2);c.stroke();
  let i=0;for(let x=15;x<=45;x+=6,i++){const y=gun(x)+1.6;c.fillStyle=i%2?K.f:'#e8dcc0';c.beginPath();c.arc(x,y,2.3,0,7);c.fill();c.strokeStyle='#2a1a10';c.lineWidth=.5;c.stroke();c.fillStyle=i%2?'#e8dcc0':K.f;c.beginPath();c.moveTo(x,y-2.2);c.lineTo(x+.6,y);c.lineTo(x,y+2.2);c.lineTo(x-.6,y);c.closePath();c.fill();c.fillStyle='#c9a24a';c.beginPath();c.arc(x,y,.7,0,7);c.fill()}
  c.setTransform(1,0,0,1,0,0);try{spritePolish(cv,1)}catch(e){}
  return HDC[key]={cv,W,H,oy:12}}
/* progressive pre-render of horse gait frames so the first gallop doesn't stutter */
function gaitPrewarm(){if(!G||gaitPrewarm.done===RS+(S.mount||'horse'))return;const t0=performance.now();MOPT.m=S.mount||'horse';MOPT.nr=0;const L=gaitPrewarm.L||(gaitPrewarm.L=[]);
  if(!L.length)for(const m of ['walk','trot','gallop'])for(let f=0;f<24;f++)L.push([f,m]);gaitPrewarm.n=(gaitPrewarm.n||0)+1;if(GENB.used<3&&L.length){const[f,m]=L.shift();const k='mon3|'+JSON.stringify(riderPal())+'|'+f+'|'+m+'|'+MOPT.m+'@'+Math.min(5,RS+2);if(!SPR[k]){const t1=performance.now();monarchSprite0(f,m);GENB.used+=performance.now()-t1}}if(!L.length)gaitPrewarm.done=RS+(S.mount||'horse')}

/* ================= VIKING LONGSHIP FERRY (large, detailed) ================= */
var FM=40;
function boatSprite(b){const key='vk3_'+b+RS;if(HDC[key])return HDC[key];const R=RS,W=100,H=62,cv=mkc(W*R,H*R),c=cv.getContext('2d');c.scale(R,R);c.lineCap='round';c.lineJoin='round';const K=KCOL.me,WL=45;
  const cx=50,hw=38,gun=x=>{const u=(x-cx)/hw;return 40.5-4.2*u*u*u*u-1.2*u*u},keel=x=>{const u=(x-cx)/hw;return 52-Math.pow(Math.abs(u),2.3)*10};
  const P=(f,pts)=>{c.fillStyle=f;c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill()};
  // mast + striped sail (behind hull)
  c.fillStyle='#3a2210';c.fillRect(cx-1.1,6,2.2,gun(cx)-5);c.fillStyle='#5a3818';c.fillRect(cx-1.1,6,.8,gun(cx)-5);
  c.fillStyle='#4a2c14';c.save();c.translate(cx,9);c.rotate(-.015);c.fillRect(-23,-1,46,2);c.restore();
  const sl=cx-21,sr=cx+21,st=10,sb=31;c.beginPath();c.moveTo(sl,st);c.lineTo(sr,st);c.quadraticCurveTo(sr+3,(st+sb)/2,sr-1,sb);c.quadraticCurveTo(cx,sb+2.5,sl+1,sb);c.quadraticCurveTo(sl+2,(st+sb)/2,sl,st);c.closePath();
  const sg=c.createLinearGradient(sl,0,sr,0);sg.addColorStop(0,'#d8cfbc');sg.addColorStop(.5,'#f6f0e2');sg.addColorStop(1,'#cfc5b0');c.fillStyle=sg;c.fill();c.save();c.clip();
  for(let i=0;i<6;i++){const x=sl+i*7+1.5;c.fillStyle=i%2?K.f:'#9a2a24';c.beginPath();c.moveTo(x,st);c.quadraticCurveTo(x+1.6,(st+sb)/2,x,sb+3);c.lineTo(x+3.6,sb+3);c.quadraticCurveTo(x+5.2,(st+sb)/2,x+3.6,st);c.closePath();c.fill()}
  c.fillStyle='rgba(0,0,0,.12)';c.fillRect(sl,sb-4,42,6);c.restore();
  c.strokeStyle='rgba(30,16,8,.85)';c.lineWidth=.4;c.beginPath();c.moveTo(cx,6);c.lineTo(14,gun(14)-1);c.moveTo(cx,6);c.lineTo(86,gun(86)-1);c.moveTo(sl,sb);c.lineTo(sl+4,gun(sl+4));c.moveTo(sr,sb);c.lineTo(sr-4,gun(sr-4));c.stroke();
  c.fillStyle=K.f;c.beginPath();c.moveTo(cx+1,4);c.lineTo(cx+8,5.2);c.lineTo(cx+1,7.6);c.closePath();c.fill();c.fillStyle='#c9a24a';c.fillRect(cx-.8,3,1.6,1.4);
  // far oars
  c.strokeStyle='#2e1a0c';c.lineWidth=.9;for(let i=0;i<7;i++){const x=24+i*8.5;c.beginPath();c.moveTo(x+1,gun(x)+3);c.lineTo(x-7,WL+8);c.stroke()}
  // clinker hull: overlapping strakes
  const NS=6;for(let k=NS-1;k>=0;k--){const t0=k/NS,t1=(k+1)/NS;c.beginPath();for(let x=12;x<=88;x+=1.2){const y=gun(x)+(keel(x)-gun(x))*t0;x===12?c.moveTo(x,y):c.lineTo(x,y)}for(let x=88;x>=12;x-=1.2){const y=gun(x)+(keel(x)-gun(x))*t1+.4;c.lineTo(x,y)}c.closePath();
    const L=[[176,120,70],[150,98,56],[128,82,46],[106,66,36],[86,52,28],[64,38,20]][k];c.fillStyle=`rgb(${L.join(',')})`;c.fill();
    c.strokeStyle='rgba(16,8,4,.75)';c.lineWidth=.45;c.beginPath();for(let x=12;x<=88;x+=1.2){const y=gun(x)+(keel(x)-gun(x))*t1+.4;x===12?c.moveTo(x,y):c.lineTo(x,y)}c.stroke();
    c.strokeStyle='rgba(255,226,180,.25)';c.beginPath();for(let x=12;x<=88;x+=1.2){const y=gun(x)+(keel(x)-gun(x))*t0+.6;x===12?c.moveTo(x,y):c.lineTo(x,y)}c.stroke();
    c.fillStyle='rgba(20,10,4,.55)';for(let x=16+k*2;x<86;x+=7){const y=gun(x)+(keel(x)-gun(x))*(t0+t1)/2;c.fillRect(x,y,.6,.6)}}
  c.fillStyle='rgba(10,24,36,.32)';c.fillRect(0,WL+1,W,20);
  // stern post: rising spiral (left)
  P('#7a4a26',[[14,gun(14)],[8,36],[5,28],[5.4,20],[8,15.6],[12,15],[14.4,17.6],[13.6,21],[11,21.6],[9.6,19.6],[11,18.4],[10.8,24],[11.6,32],[17,gun(17)+3]]);
  c.strokeStyle='#e0b048';c.lineWidth=.7;c.beginPath();c.moveTo(15,gun(15)-.4);c.quadraticCurveTo(6,32,6.6,22);c.quadraticCurveTo(7.4,15.6,12,16.2);c.quadraticCurveTo(14.4,17.4,13.2,20.2);c.stroke();
  // prow: dragon neck and head (right)
  P('#7a4a26',[[84,gun(84)],[90,36],[93,27],[93.6,19],[95,14.4],[98.6,12.6],[99.6,14],[97.6,15],[99.4,16.4],[96.4,17.4],[96,21],[95.2,29],[91,37],[86,gun(86)+3]]);
  P('#5a3418',[[94.6,14.4],[93,9.6],[96,12.8]]);P('#5a3418',[[96.4,13.6],[96.2,9.2],[98,12.6]]);
  for(let k=0;k<5;k++){const y=19+k*3.4,x=93.6-k*.4;P('#5a3418',[[x,y],[x-2.6,y+1.2],[x,y+1.8]])}
  c.fillStyle='#f4ecd8';c.fillRect(97.4,15.6,.6,.9);c.fillRect(98.4,15.4,.6,.9);c.fillStyle='#ffd060';c.fillRect(96.4,13.6,1.1,.9);c.fillStyle='#e8464f';c.fillRect(98.8,16,1.8,.6);
  c.strokeStyle='#e0b048';c.lineWidth=.7;c.beginPath();c.moveTo(85,gun(85)-.4);c.quadraticCurveTo(93,30,94,19.6);c.stroke();
  // gunwale, oar ports, near shields
  c.strokeStyle='#e0b048';c.lineWidth=1;c.beginPath();for(let x=15;x<=85;x+=1.2)c.lineTo(x,gun(x)-.3);c.stroke();
  c.fillStyle='#120804';for(let i=0;i<7;i++){const x=25+i*8.5;c.beginPath();c.arc(x,gun(x)+5.6,.8,0,7);c.fill()}
  const SC=[K.f,'#e8dcc0','#9a2a24','#e8dcc0'];for(let i=0;i<10;i++){const x=21+i*6.6,y=gun(x)+2.2,col=SC[i%4];c.fillStyle=col;c.beginPath();c.arc(x,y,3.1,0,7);c.fill();c.strokeStyle='#2a1a10';c.lineWidth=.55;c.stroke();
    c.strokeStyle=i%2?'#9a2a24':'#e8dcc0';c.lineWidth=.7;c.beginPath();c.moveTo(x-2.6,y);c.lineTo(x+2.6,y);c.moveTo(x,y-2.6);c.lineTo(x,y+2.6);c.stroke();c.fillStyle='#c9a24a';c.beginPath();c.arc(x,y,.95,0,7);c.fill();c.fillStyle='rgba(255,255,255,.35)';c.beginPath();c.arc(x-.9,y-1,.8,0,7);c.fill()}
  // near oars (in water)
  c.strokeStyle='#4a2e16';c.lineWidth=1.1;for(let i=0;i<7;i++){const x=25+i*8.5;c.beginPath();c.moveTo(x,gun(x)+5.6);c.lineTo(x-6,WL+9);c.stroke();c.fillStyle='#5a3818';c.beginPath();c.ellipse(x-6.4,WL+9.6,1.8,.8,-.5,0,7);c.fill()}
  c.setTransform(1,0,0,1,0,0);try{spritePolish(cv,1)}catch(e){}
  return HDC[key]={cv,W,H,oy:WL-1}}

/* ================= COMMON & ENEMY HORSES ================= */
(function(){const C={
  chestnut:[['#2a1006','#4a1c0a','#6a2a12','#8a3a1a','#a8502a','#c46a3a','#dc8a52'],['#3a1408','#5a2410','#7a3618','#9a4a24']],
  palomino:[['#5a3e1a','#7e5a26','#a07a34','#c49a48','#dcb862','#ecd08a','#f6e4b0'],['#d8ccb0','#ece2c8','#f6f0e0','#ffffff']],
  grey:[['#3e4248','#5a5e66','#787c84','#9698a0','#b4b6bc','#cfd0d4','#e6e6e8'],['#2a2c30','#3e4046','#5a5c62','#7a7c82']],
  coal:[['#08080a','#121216','#1c1c22','#26262e','#30303a','#3c3c48','#4a4a56'],['#050505','#0e0e10','#18181c','#24242a']],
  dun:[['#4a3a24','#6a5434','#8a6e46','#a48858','#bca06c','#d0b884','#e2cea0'],['#120c08','#22180e','#342418','#463222']],
  roan:[['#3a1a1a','#5a2c2c','#7a4242','#985a58','#b47672','#cc9690','#e2b8b0'],['#1a0c0c','#2a1414','#3e1e1e','#522a2a']]};
  for(const k in C)MOUNTS['n_'+k]={n:k,coat:C[k][0].map(toA),mane:C[k][1],sp:1,cost:0,npc:1}})();
var NCOATS=['n_chestnut','n_palomino','n_grey','n_coal','n_dun','n_roan','horse'];
var HPAL=[{a:'#6a2a12',b:'#a8502a',c:'#2a1006',e:'#140c0a'},{a:'#30303a',b:'#4a4a56',c:'#0e0e10',e:'#ff4a2a'},{a:'#787c84',b:'#b4b6bc',c:'#3e4046',e:'#140c0a'},{a:'#8a6e46',b:'#bca06c',c:'#22180e',e:'#140c0a'}];
function nhorseUpdate(dt){if(!G||!G.props)return;for(const h of G.props){if(h.k!=='nhorse')continue;h.t=(h.t||0)+dt;
  const range=h.rider?240:70,sp=h.rider?(h.run?1.3:.55):.32;if(h.wait>0){h.wait-=dt;h.mv=0;continue}
  if(Math.abs(h.x-h.x0)>range){h.dir=Math.sign(h.x0-h.x)}else if(Math.random()<.004*dt){h.wait=60+Math.random()*240;h.run=h.rider&&Math.random()<.35;continue}
  const flee=!h.rider&&Math.abs(G.hx-h.x)<26&&Math.abs(G.vx||0)>1.4;if(flee)h.dir=Math.sign(h.x-G.hx)||1;
  h.sv=(h.sv||0)+((h.dir||1)*(flee?1.2:sp)-(h.sv||0))*.06*dt;h.x+=h.sv*dt;h.mv=Math.abs(h.sv)>.05}}
function drawNHorse(c,h,sx,t){const HS=.54,sp=Math.abs(h.sv||0);h._d=(h._d||0)+Math.min(6,Math.abs(h.x-(h._lx??h.x)));h._lx=h.x;
  MOPT.m=h.coat;MOPT.nr=h.rider?0:1;MOPT.rp=h.rider?NPCRP[h.rider==='villager'&&h.hij?'villagerH':h.rider]||NPCRP.farmer:null;let ms;try{if(!h.mv||sp<.06){ms=monarchSprite(0,(h.t%900)<420&&!h.rider?'graze':'idle')}else{const g=horseGait(sp*1.35,0,h._d,HS,h);ms=monarchSprite(g.fr,g.mode)}}finally{MOPT.nr=0;MOPT.rp=null;MOPT.m=S.mount||'horse'}
  const fl=(h.sv||h.dir||1)<0;c.fillStyle='rgba(0,0,0,.26)';c.beginPath();c.ellipse(sx,GY,10,1.8,0,0,7);c.fill();drawScaled(c,ms,sx,GY,HS,fl);
}
function drawBeastRider(c,r,sx,yy,spr,fl,t){if(!r.rider)return;const f=fl?1:-1,p=subjSprite(r.rider,0,0,r.v||1),bob=Math.abs(Math.sin((r.dist||0)/6))*1;c.save();c.translate(sx-f*1.2,yy+spr.H*.34-bob);c.scale(f*.62,.62);c.drawImage(p.cv,-9,-26,18,28);c.restore();
  c.strokeStyle='#5a3a1e';c.lineWidth=.9;c.beginPath();c.moveTo(sx+f*2,yy+spr.H*.34-bob-10);c.lineTo(sx+f*12,yy+spr.H*.34-bob-22);c.stroke();c.fillStyle='#c3cad6';c.beginPath();c.moveTo(sx+f*12,yy+spr.H*.34-bob-22);c.lineTo(sx+f*13.6,yy+spr.H*.34-bob-26);c.lineTo(sx+f*10.6,yy+spr.H*.34-bob-23);c.closePath();c.fill()}

/* ================= THE GHOST GUIDE (Kingdom-style spectral advisor) ================= */
function ghostSay(txt,ms,key){if(!G)return;G.gh=G.gh||{x:G.hx-40,y:GY-50,a:0,seen:{}};if(key){if(G.gh.seen[key])return;G.gh.seen[key]=1}G.gh.msg=txt;G.gh.key=key||null;G.gh.until=G.t+(ms||6500);G.gh.show=1}
function ghostUpdate(dt){if(!G||G.sail)return;if(S.opt&&!S.opt.ghost){if(G.gh)G.gh.a=0,G.gh.show=0;return}const gh=G.gh=G.gh||{x:G.hx-40,y:GY-50,a:0,seen:{}};
  const tut=(S.tut||0)<99&&(S.tut||0)<tutSteps().length,active=gh.show&&(tut||G.t<gh.until);
  if(tut){const st=tutSteps()[S.tut||0];gh.msg=tr(st.t)+' — '+tr(st.m);gh.show=1;gh.until=G.t+999999}
  else if(gh.show&&G.t>gh.until)gh.show=0;
  gh.a+=((gh.show?1:0)-gh.a)*Math.min(1,.04*dt);
  const tx=G.hx+(gh.tgt!=null?(Math.sign(gh.tgt-G.hx)||1):(G.face||1))*30,ty=GY-30-(G.alt||0)+Math.sin(G.t/700)*3;gh.x+=(tx-gh.x)*Math.min(1,.03*dt);gh.y+=(ty-gh.y)*Math.min(1,.05*dt);
  // contextual guidance on the early islands
  if(tut||G.si>14)return;const near=(k,f,m)=>G.props.find(p=>p.k===k&&(!f||f(p))&&Math.abs(p.x-G.hx)<m);
  if(near('camp',p=>!p.rival,40)&&G.people.some(p=>p.role==='vagrant'&&Math.abs(p.x-G.hx)<60))ghostSay(L2(gx('هؤلاء متجوّلون بلا مأوى… أعطِ كلًّا منهم عملة، فيصبحوا من أهل مملكتك.','هؤلاء متجوّلون بلا مأوى… أعطي كلًّا منهم عملة، فيصبحوا من أهل مملكتك.'),'These wanderers have no home… give each a coin and they’ll join your kingdom.'),7000,'vag');
  else if(near('rvil',null,170))ghostSay(L2(gx('هذه قرية لا تعرفك. كلّم شيخها… فالهدية تكسب القلوب قبل السيوف.','هذه قرية لا تعرفك. كلّمي شيخها… فالهدية تكسب القلوب قبل السيوف.'),'This village doesn’t know you. Talk to its elder… a gift wins hearts before swords do.'),8000,'vil');
  else if(near('npc',p=>p.role==='info',60))ghostSay(L2(gx('هذا الغريب يعرف أسرار الجزيرة… اسأله، وكن صبورًا معه.','هذا الغريب يعرف أسرار الجزيرة… اسأليه، وكوني صبورة معه.'),'This stranger knows the island’s secrets… ask, and be patient.'),7000,'npc');
  else if(near('portal',p=>!p.dead,120))ghostSay(L2(gx('من هنا يخرج الظلام كل ليلة… اجمع جيشك، ثم دمّر البوابة لتحرّر الجزيرة.','من هنا يخرج الظلام كل ليلة… اجمعي جيشك، ثم دمّري البوابة لتحرّري الجزيرة.'),'Darkness pours out of here every night… gather your army, then destroy the gate to free the island.'),8000,'portal');
  else if(G.sites.some(s=>s.k==='wall'&&!s.lvl&&Math.abs(s.x-G.hx)<30)&&G.tod>CYCLE.day*.5)ghostSay(L2(gx('الغروب يقترب… ابنِ سورًا هنا قبل أن تحلّ الظلمة.','الغروب يقترب… ابني سورًا هنا قبل أن تحلّ الظلمة.'),'Dusk is near… build a wall here before darkness falls.'),7000,'wall');
  else if(G.sites.some(s=>s.k==='bow'&&Math.abs(s.x-G.hx)<26)&&G.people.some(p=>p.role==='villager'))ghostSay(L2(gx('اشترِ قوسًا هنا، فيأخذه قروي ويصير راميًا يحرس المملكة ويصطاد.','اشتري قوسًا هنا، فيأخذه قروي ويصير راميًا يحرس المملكة ويصطاد.'),'Buy a bow here; a villager will take it and become an archer who guards and hunts.'),7000,'bow');
  else if(G.sites.some(s=>s.k==='hammer'&&Math.abs(s.x-G.hx)<26)&&G.people.some(p=>p.role==='villager'))ghostSay(L2(gx('المطرقة تصنع بنّائين… هم من يرفعون الأسوار ويصلحون السفينة.','المطرقة تصنع بنّائين… هم من يرفعون الأسوار ويصلحون السفينة.'),'The hammer makes builders… they raise walls and repair the ship.'),7000,'ham');
  else if(site('boat')&&Math.abs(site('boat').x-G.hx)<90)ghostSay(L2(gx('سفينتك محطّمة… حين تكفيك العملات، أصلحها لتبحر إلى أرض جديدة.','سفينتك محطّمة… حين تكفيكِ العملات، أصلحيها لتبحري إلى أرض جديدة.'),'Your ship is wrecked… when you have enough coins, repair it to sail to new lands.'),7000,'boat');
  else if(near('target',null,40))ghostSay(L2('جرّب لعبة السهم مرة كل يوم… الإصابة الدقيقة تربحك عملات.','Try the archery game once a day… accurate shots win you coins.'),6500,'arch');
  else if(near('pyre',p=>!p.lit,40))ghostSay(L2('أشعل نار المخيم بقطعة حطب… فالنار تدفئ أهلك وتطرد الظلام.','Light the campfire with one piece of wood… fire warms your people and drives back the dark.'),6500,'pyre');
  else if(G.sites.some(s=>s.k==='tentspot'&&!s.lvl&&Math.abs(s.x-G.hx)<30))ghostSay(L2('انصب خيمة هنا بعملتين… فيأتي إليها متجوّل جديد.','Pitch a tent here for two coins… a new wanderer will come to it.'),6500,'tent');
  else if(G.props.some(p=>(p.k==='deer'||p.k==='rabbit')&&p.alive&&Math.abs(p.x-G.hx)<70))ghostSay(L2(gx('الصيد يجلب العملات… اضرب الغزال أو الأرنب بسلاحك.','الصيد يجلب العملات… اضربي الغزال أو الأرنب بسلاحكِ.'),'Hunting brings coins… strike the deer or rabbit with your weapon.'),6000,'hunt')}
function ghostWrap(c,txt,maxW){const words=txt.split(' '),L=[];let cur='';for(const w of words){const t=cur?cur+' '+w:w;if(c.measureText(t).width>maxW&&cur){L.push(cur);cur=w}else cur=t}if(cur)L.push(cur);return L.slice(0,5)}
/* ================= SPECTRAL GUIDE (Kingdom-style ghost monarch) ================= */
function ghostSprite(fr){const key='ghs2_'+fr+'_'+RS;if(HDC[key])return HDC[key];const W=24,H=36,K=RS,cv=mkc(W*K,H*K),c=cv.getContext('2d');
  const C=['#f4ffff','#c6f2f8','#8fd2e6','#5aa2c8','#2e6a9a','#fff2b8','#e0c070'],px=(x,y,i,a)=>{c.globalAlpha=a??1;c.fillStyle=C[i];c.fillRect(x*K,y*K,K,K)},row=(y,x0,x1,i,a)=>{for(let x=x0;x<=x1;x++)px(x,y,i,a)};
  const ph=fr/8*Math.PI*2;
  // flowing cloak behind (left side, streaming back)
  for(let y=11;y<30;y++){const u=(y-11)/19,back=Math.round(2+u*4+Math.sin(ph+u*3)*1.2),x0=8-back;row(y,x0,8,4,.55+(1-u)*.3);if((x0+y)%2)px(x0-1,y,4,.3)}
  // robe body
  for(let y=11;y<29;y++){const u=(y-11)/17,hw=3+u*3.2,l=Math.round(12-hw),r=Math.round(12+hw);for(let x=l;x<=r;x++){const v=(x-l)/(r-l);let i=v<.25?3:v<.5?2:v<.8?1:0;if(v>.25&&v<.5&&(x+y)%2)i=(x+y)%4?2:3;if(x===12&&y>16)i=3;px(x,y,i,.92)}}
  // belt + chest clasp
  row(17,9,15,4,.9);px(12,17,5);px(13,14,5,.9);
  // wispy hem (no feet)
  for(let x=6;x<=18;x++){const len=2+Math.round(3*(.5+.5*Math.sin(ph+x*1.3)))+((x*7)%3),xs=x+Math.round(Math.sin(ph+x)*.6);for(let k=0;k<len;k++)px(xs,29+k,x>12?1:2,.7*(1-k/len))}
  // head (profile facing right)
  row(5,10,13,1);row(6,9,14,1);row(7,9,14,1);row(8,9,14,1);row(9,10,13,1);px(14,7,0);px(15,7,1,.9);
  px(9,6,2);px(9,7,2);px(9,8,2);row(4,10,13,2,.8);
  px(13,7,4);px(13,6,3);px(12,8,2);px(14,8,2); // eye, brow, cheek
  // long beard
  row(9,11,15,0);row(10,11,15,0);row(11,11,14,0);row(12,12,14,1);row(13,12,13,1,.8);px(13,14,1,.5);
  // crown
  row(3,9,14,5);row(2,9,14,5);px(9,1,5);px(11,0,5);px(11,1,5);px(14,1,5);px(12,1,5,.8);px(11,2,6);px(13,2,6);px(10,3,6,.7);
  // arm reaching forward, open hand
  row(13,14,15,1);row(14,14,15,2);px(15,15,1,.8);
  c.globalAlpha=1;return HDC[key]={cv,W,H}}
function ghostLines(B,txt,maxW){const ws=String(txt).split(/\s+/),L=[];let cur='';for(const w of ws){const tt=cur?cur+' '+w:w;if(B.measureText(tt).width>maxW&&cur){L.push(cur);cur=w}else cur=tt}if(cur)L.push(cur);return L}
function drawGhost(B,toS,t){const gh=G&&G.gh;if(!gh||gh.a<.02)return;const a=gh.a,f=gh.tgt!=null?(Math.sign(toS(gh.tgt)-toS(gh.x))||1):(G.face||1),sx=toS(gh.x),bob=Math.sin(t/650)*2.2,y=gh.y+bob,fr=Math.floor(t/110)%8,sp=ghostSprite(fr),sc=.95,W=sp.W*sc,H=sp.H*sc,x0=sx-W/2,y0=y-H*.5;
  B.save();
  // soft aura + ground light
  B.globalCompositeOperation='lighter';B.globalAlpha=a;let g=B.createRadialGradient(sx,y,1,sx,y,30);g.addColorStop(0,'rgba(150,230,255,.26)');g.addColorStop(.5,'rgba(110,200,240,.09)');g.addColorStop(1,'rgba(110,200,240,0)');B.fillStyle=g;B.fillRect(sx-30,y-30,60,60);
  g=B.createRadialGradient(sx,GY,1,sx,GY,22);g.addColorStop(0,'rgba(150,230,255,.18)');g.addColorStop(1,'rgba(150,230,255,0)');B.fillStyle=g;B.fillRect(sx-22,GY-8,44,12);
  B.globalCompositeOperation='source-over';
  // body drawn in rippling slices (heat-haze shimmer of a spirit)
  B.imageSmoothingEnabled=false;const sl=2;for(let yy=0;yy<sp.H;yy+=sl){const off=Math.sin(t/190+yy*.45)*.55*(yy/sp.H+.3);B.globalAlpha=a*(.78+.12*Math.sin(t/300+yy));
    B.save();B.translate(sx+off,0);if(f<0)B.scale(-1,1);B.drawImage(sp.cv,0,yy*RS,sp.W*RS,sl*RS,-W/2,y0+yy*sc,W,sl*sc+.05);B.restore()}
  // additive bloom pass
  B.globalCompositeOperation='lighter';B.globalAlpha=a*(.14+.06*Math.sin(t/400));B.save();B.translate(sx,0);if(f<0)B.scale(-1,1);B.drawImage(sp.cv,-W/2-.6,y0-.6,W+1.2,H+1.2);B.restore();
  // drifting motes shed from the robe
  for(let k=0;k<8;k++){const u=((t/1600+k/8)%1),xx=sx-f*(2+u*10)+Math.sin(t/500+k*2)*3,yy=y0+H*.55+k%3*3-u*16;B.globalAlpha=a*(1-u)*.8;B.fillStyle=k%2?'#c6f2f8':'#f4ffff';B.fillRect(xx,yy,1,1)}
  B.restore();
  try{if(gh.show&&gh.tgt!=null)drawGhostPoint(B,toS,t,gh,sx,y0,sc,W,f,a)}catch(e){}
  if(gh.show&&gh.msg){if(PIX())TXQ.push(()=>drawGhostText(gc,sx,y0,t,a));else drawGhostText(B,sx,y0,t,a)}}
function drawGhostText(B,sx,y0,t,a){const gh=G.gh,ar=LANG!=='en',full=tr(gh.msg);if(gh._m!==full){gh._m=full;gh._t0=t}
  const n=Math.floor((t-gh._t0)/(ar?28:22));B.save();B.textAlign='center';B.textBaseline='alphabetic';
  B.font=ar?'800 8px Tajawal, sans-serif':'7px "Press Start 2P", monospace';try{B.direction=ar?'rtl':'ltr'}catch(e){}
  const L=ghostLines(B,full,ar?190:210),lh=ar?11:10,cx=Math.max(100,Math.min(VW-100,sx)),top=Math.max(14,y0-8-L.length*lh);let shown=0;
  L.forEach((ln,i)=>{const yy=top+i*lh+lh;
    if(ar){const vis=ln.slice(0,Math.max(0,n-shown));shown+=ln.length+1;if(!vis)return;const ws=vis.split(' '),tw=B.measureText(vis).width;let xr=cx+tw/2;
      ws.forEach((w,k)=>{const ww=B.measureText(w).width,wx=xr-ww/2,wy=yy+Math.sin(t/260+k*.9+i)*.9;B.globalAlpha=a;B.lineWidth=2.4;B.strokeStyle='rgba(16,26,46,.85)';B.lineJoin='round';B.strokeText(w,wx,wy);B.fillStyle='#f2fbff';B.fillText(w,wx,wy);xr-=ww+B.measureText(' ').width})}
    else{const tw=B.measureText(ln).width;let x=cx-tw/2;B.textAlign='left';for(let k=0;k<ln.length;k++){if(shown>=n)break;shown++;const ch=ln[k],cw=B.measureText(ch).width,wy=yy+Math.sin(t/230+k*.55+i*1.3)*1.1;
      B.globalAlpha=a;B.lineWidth=2;B.strokeStyle='rgba(16,26,46,.85)';B.lineJoin='round';B.strokeText(ch,x,wy);B.fillStyle='#f2fbff';B.fillText(ch,x,wy);x+=cw}shown++;B.textAlign='center'}});
  try{B.direction='inherit'}catch(e){}B.restore()}

/* ================= KINGDOM-STYLE PAUSE MENU ================= */
function L2(ar,en){return LANG==='en'?en:ar}
function OPT(){S.opt=Object.assign({mus:.55,sfx:.8,br:1,sat:1,shake:1,ghost:1,fx:1,pix:1},S.opt||{});return S.opt}
function applyOpt(){const o=OPT();try{if(musicBus)musicBus.gain.value=o.mus;if(sfxBus)sfxBus.gain.value=o.sfx}catch(e){}const cv=document.getElementById('gcv');if(cv)cv.style.filter=(o.br!==1||o.sat!==1)?`brightness(${o.br}) saturate(${o.sat})`:'';GFX.bloom=GFX.q!=='smooth'&&!!o.fx;GFX.extra=GFX.q!=='smooth'&&!!o.fx;document.body.classList.toggle('pix',!!o.pix)}
function pmClose(){const m=document.getElementById('pmenu');if(m)m.hidden=true;if(G){G.paused=false;G.last=0}}
function pauseMenu(){if(!G||G.over)return;G.paused=true;const m=document.getElementById('pmenu');ptRoll();const tl=S.cfg.noLimit?'∞':fmtT(S.pt.left),d=STAGES[G.si].d,DF=d<8?L2('سهلة','EASY'):d<20?L2('عادية','NORMAL'):d<32?L2('صعبة','HARD'):L2('أسطورية','LEGENDARY');
  const g=qGoals(),ach=achList().filter(a=>achTier(a)>0).length;
  m.innerHTML=`<div class="pm-left">
    <div class="pm-title">${L2(WORLDS[STAGES[G.si].b].name,tr(WORLDS[STAGES[G.si].b].name)).toUpperCase()}</div>
    <div class="pm-board"><b>${L2('الجزيرة','ISLAND')} ${G.si+1}</b><span>${tr(STAGES[G.si].n)}</span></div>
    <div class="pm-time">${L2('الوقت المتبقي','TIME LEFT')}: <i>${tl}</i></div>
    <button class="pm-b" data-pm="resume">${L2('متابعة اللعب','RESUME GAME')}</button>
    <button class="pm-b" data-pm="campaign">${L2('الحملة','CAMPAIGN')}</button>
    <button class="pm-b" data-pm="events">${L2('أحداث اللعبة','GAME EVENTS')}</button>
    <button class="pm-b" data-pm="options">${L2('الإعدادات','OPTIONS')}</button>
    <button class="pm-b" data-pm="save">${L2('حفظ','SAVE')}</button>
    <button class="pm-b" data-pm="quit">${L2('حفظ والخروج','SAVE & QUIT')}</button>
    <div class="pm-diff">${L2('الصعوبة','DIFFICULTY')}: ${DF}</div></div>
   <div class="pm-center"><div class="pm-plate">${esc(heroName())}</div><div class="pm-badges"><button class="pm-ib" data-pm="ach" title="${L2('الإنجازات','Achievements')}">${ic('gift')}<em>${ach}</em></button><button class="pm-ib" data-pm="crown" title="${L2('المملكة','Kingdom')}">${ic('house')}<em>${g.filter(x=>x.ok).length}/4</em></button></div></div>
   <div class="pm-right"><div class="pm-scroll" id="pmPanel"></div></div>
   <div class="pm-ver">${L2('مملكة الإنجاز','KINGDOM OF ACHIEVEMENT')} v41</div>`;
  m.hidden=false;hydrate(m);imgify(m);pmPanel('events')}
function pmPanel(k){const p=document.getElementById('pmPanel');if(!p)return;let h='';
  if(k==='events'){const g=qGoals();h=`<h4>${L2('أهداف الجزيرة','ISLAND GOALS')}</h4>${g.map(x=>`<p class="${x.ok?'ok':''}">${x.ok?'✓':'•'} ${tr(x.t)}: <b>${tr(x.v)}</b></p>`).join('')}<h4>${L2('اليوم','DAY')} ${G.day}</h4><p>${tr(objective())}</p>${(S.lore||[]).length?`<h4>${L2('الحكاية','THE STORY')}</h4>${S.lore.slice(-2).map(l=>`<p>${tr(l)}</p>`).join('')}`:''}`}
  else if(k==='options')h=`<h4>${L2('الإعدادات','OPTIONS')}</h4><label class="pm-r"><span>${L2('الإضاءة','BRIGHTNESS')}</span><input type="range" data-opt="br" min=".6" max="1.5" step=".05" value="${OPT().br}"></label><label class="pm-r"><span>${L2('الألوان','COLOR')}</span><input type="range" data-opt="sat" min=".4" max="1.6" step=".05" value="${OPT().sat}"></label><label class="pm-r"><span>${L2('الموسيقى','MUSIC')}</span><input type="range" data-opt="mus" min="0" max="1" step=".05" value="${OPT().mus}"></label><label class="pm-r"><span>${L2('المؤثرات الصوتية','SOUND FX')}</span><input type="range" data-opt="sfx" min="0" max="1" step=".05" value="${OPT().sfx}"></label><button class="pm-s" data-pm="tg_pix">${L2('نمط البيكسل آرت','PIXEL ART MODE')}: ${OPT().pix?L2('تشغيل','ON'):L2('إيقاف','OFF')}</button><button class="pm-s" data-pm="tg_fx">${L2('التوهّج والمؤثرات','GLOW & EFFECTS')}: ${OPT().fx?L2('تشغيل','ON'):L2('إيقاف','OFF')}</button><button class="pm-s" data-pm="tg_shake">${L2('اهتزاز الشاشة','SCREEN SHAKE')}: ${OPT().shake?L2('تشغيل','ON'):L2('إيقاف','OFF')}</button><button class="pm-s" data-pm="tg_ghost">${L2('الشبح المرشد','GHOST GUIDE')}: ${OPT().ghost?L2('تشغيل','ON'):L2('إيقاف','OFF')}</button><button class="pm-s" data-pm="sound">${S.muted?L2('تشغيل الصوت','SOUND: OFF'):L2('كتم الصوت','SOUND: ON')}</button><button class="pm-s" data-pm="gq">${L2('الرسومات','GRAPHICS')}: ${tr(GQN[S.gq||'auto'])}</button><button class="pm-s" data-pm="lang">${L2('English','العربية')}</button><button class="pm-s" data-pm="tut">${L2('الدرس والشبح المرشد','TUTORIAL GHOST')}</button><button class="pm-s" data-pm="restart">${L2('إعادة الجزيرة','RESTART ISLAND')}</button>`;
  else if(k==='restart')h=`<h4>${L2('إعادة الجزيرة؟','RESTART ISLAND?')}</h4><p>${L2('ستبدأ الجزيرة من جديد وتعود عملاتها إلى الخزينة.','The island restarts and its coins return to the treasury.')}</p><button class="pm-s" data-pm="restartyes">${L2('نعم، أعد البدء','YES, RESTART')}</button><button class="pm-s" data-pm="options">${L2('تراجع','BACK')}</button>`;
  else if(k==='ach'){h=`<h4>${L2('الإنجازات','ACHIEVEMENTS')}</h4>`+achList().map(a=>{const t=achTier(a);return `<p class="${t?'ok':''}">${['○','🥉','🥈','🥇'][t]} ${tr(a.n)} <b>${a.v}</b></p>`}).join('')}
  else if(k==='crown'){h=`<h4>${L2('المملكة','KINGDOM')}</h4><p>${L2('العملات','Coins')}: <b>${G.purse}</b> · ${L2('الخشب','Wood')}: <b>${G.wood||0}</b></p><p>${L2('الطاقم','Crew')}: <b>${crewList().length}</b> · ${L2('الولاء','Loyalty')}: <b>${G.loyal??80}%</b></p><p>${L2('الجواهر','Gems')}: <b>${S.gems}</b> · ${L2('الجزر المحرّرة','Islands done')}: <b>${S.cleared}</b></p>`}
  p.innerHTML=h;p.dataset.k=k}
function pmClick(b,d){if(d.pm===undefined)return false;const k=d.pm;SFX.click();
  if(k==='resume'){pmClose();return true}
  if(k==='campaign'){campaignMap();return true}
  if(k==='events'||k==='options'||k==='ach'||k==='crown'||k==='restart'){pmPanel(k);return true}
  if(k==='save'){saveRun();save();toast(L2('حُفظت المغامرة','Game saved'),'check');return true}
  if(k==='quit'){document.getElementById('pmenu').hidden=true;if(G&&!G.over){saveRun();G.over=true}exitGame();tab='home';render();return true}
  if(k.startsWith('tg_')){const o=OPT(),kk=k.slice(3);o[kk]=o[kk]?0:1;save();applyOpt();pmPanel('options');return true}
  if(k==='sound'){initAudio();S.muted=!S.muted;if(master)master.gain.value=S.muted?0:.9;save();updateTop();pmPanel('options');return true}
  if(k==='gq'){const o=['auto','max','ultra','high','smooth'],q=o[(o.indexOf(S.gq||'auto')+1)%5];S.gq=q;if(q==='auto')S.gqAuto=null;save();applyQ();sizeGame();GFX.fps=[];pmPanel('options');return true}
  if(k==='lang'){saveRun();save();setLang(LANG==='en'?'ar':'en');return true}
  if(k==='tut'){S.tut=0;save();if(G.gh)G.gh.seen={};pmClose();return true}
  if(k==='restartyes'){document.getElementById('pmenu').hidden=true;const si=G.si;S.gold=(S.gold||0)+(G.purse||0);S.run=null;G.over=true;save();cancelAnimationFrame(graf);G=null;startStage(si);return true}
  return true}

/* ================= CAMP ACTIVITIES: tents, campfires, archery ================= */
function actsIsland(si,I,sites,props,R){for(const sd of [1,-1]){props.push({k:'pyre',x:sd*258,lit:0});sites.push({k:'tentspot',x:sd*330,lvl:0,paid:0,build:-1})}props.push({k:'target',x:-205})}
function actInteract(){const hx=G.hx;
  const py=G.props.find(p=>p.k==='pyre'&&!p.lit&&Math.abs(p.x-hx)<20);if(py){if((G.wood||0)<1){banner(`<div class="bs">${L2('تحتاج قطعة حطب لإشعال النار · اقطع شجرة','You need 1 wood to light the fire · chop a tree')}</div>`,2200);return true}
    G.wood--;py.lit=1;SFX.coin();puff(py.x,GY-6,16,'#ffb040',1.4);if(G.hp<G.maxhp)G.hp++;banner(`<div class="bt">${L2('أشعلت نار المخيم','Campfire lit')}</div><div class="bs">${L2('تدفئ أهل المملكة وتضيء الليل · +1 صحة','Warms your people and lights the night · +1 health')}</div>`,2600);gHud();return true}
  const tg=G.props.find(p=>p.k==='target'&&Math.abs(p.x-hx)<24);if(tg){if(G.arch)return true;if(G.archDay===G.day){banner(`<div class="bs">${L2('لعبت السهم اليوم · عد غدًا','You already played archery today · come back tomorrow')}</div>`,2000);return true}
    G.arch={n:5,hits:0,t:0,x:tg.x,fly:null,res:[]};banner(`<div class="bt">${L2('لعبة السهم','Archery game')}</div><div class="bs">${L2('اضغط زر العملة حين تكون العلامة في الوسط · 5 أسهم','Press the coin button when the marker is centered · 5 arrows')}</div>`,3000);return true}
  return false}
function archShoot(){const a=G.arch;if(!a||a.fly||a.n<=0)return;const off=Math.sin(a.t/18)*1,acc=Math.abs(off);a.fly={t:0,off};a.n--;SFX.click()}
function archUpdate(dt){const a=G.arch;if(!a)return;a.t+=dt;if(Math.abs(G.hx-a.x)>60){G.arch=null;return}
  if(a.fly){a.fly.t+=dt;if(a.fly.t>16){const o=Math.abs(a.fly.off),pts=o<.12?3:o<.35?2:o<.65?1:0;a.res.push([a.fly.off,pts]);a.hits+=pts;if(pts)SFX.coin();a.fly=null;
    if(a.n<=0){const c=Math.min(6,Math.floor(a.hits/2));for(let k=0;k<c;k++)dropCoin(a.x,GY-24,(Math.random()-.5)*2.4);G.archDay=G.day;if(S.cnt)S.cnt.study=S.cnt.study;
      banner(`<div class="bt">${L2('النتيجة','Score')}: ${a.hits} / 15</div><div class="bs">${c?L2('ربحت','You won')+' '+c+' '+ic('coin'):L2('حاول غدًا من جديد','Try again tomorrow')}</div>`,3200);setTimeout(()=>{G&&(G.arch=null)},1400)}}}}
function drawArch(B,toS,t){const a=G&&G.arch;if(!a)return;const sx=toS(a.x),cy=GY-60,R=18;
  B.save();B.fillStyle='rgba(10,8,20,.7)';B.beginPath();B.arc(sx,cy,R+4,0,7);B.fill();const cols=['#f4ecd8','#e8464f','#f4ecd8','#e8464f','#f2c24a'];for(let i=0;i<5;i++){B.fillStyle=cols[i];B.beginPath();B.arc(sx,cy,R*(1-i*.19),0,7);B.fill()}
  for(const[o,p] of a.res){B.fillStyle='#2a1a10';B.fillRect(sx+o*R-.8,cy-.8+((a.res.indexOf&&0)),1.6,1.6)}
  const o=a.fly?a.fly.off:Math.sin(a.t/18);if(!a.fly){B.strokeStyle='#ffffff';B.lineWidth=1;B.beginPath();B.moveTo(sx+o*R,cy-R-4);B.lineTo(sx+o*R,cy+R+4);B.stroke();B.fillStyle='#fff';B.beginPath();B.moveTo(sx+o*R-2.5,cy-R-7);B.lineTo(sx+o*R+2.5,cy-R-7);B.lineTo(sx+o*R,cy-R-3);B.fill()}
  else{const u=Math.min(1,a.fly.t/16),x0=toS(G.hx),y0=GY-30,x=x0+(sx+o*R-x0)*u,y=y0+(cy-y0)*u-Math.sin(u*Math.PI)*10;B.strokeStyle='#5a3a1e';B.lineWidth=1;B.beginPath();B.moveTo(x-4,y+1);B.lineTo(x+1,y);B.stroke();B.fillStyle='#c3cad6';B.fillRect(x,y-.6,1.6,1.2)}
  B.font='bold 6px Tajawal, sans-serif';B.textAlign='center';B.fillStyle='#fff';B.fillText(`${a.hits} · ${'➶'.repeat(a.n)}`,sx,cy+R+12);B.restore()}
function drawPyre(c,r,sx,t){c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.ellipse(sx,GY,9,1.6,0,0,7);c.fill();
  c.fillStyle='#6a6a72';for(let k=0;k<6;k++){c.beginPath();c.arc(sx-7+k*2.8,GY-1,1.4,0,7);c.fill()}c.fillStyle='#5a3418';c.save();c.translate(sx,GY-2);c.rotate(.4);c.fillRect(-6,-1,12,2);c.rotate(-.8);c.fillRect(-6,-1,12,2);c.restore();
  if(!r.lit){if(Math.abs(G.hx-r.x)<40){c.font='bold 5.5px Tajawal, sans-serif';c.textAlign='center';c.fillStyle='rgba(10,6,24,.75)';const tx=L2('أشعل النار (حطب)','Light fire (wood)'),w=c.measureText(tx).width+8;c.fillRect(sx-w/2,GY-22,w,8);c.fillStyle='#f6e6b8';c.fillText(tx,sx,GY-16)}return}
  const f=Math.sin(t/60+r.x)*.9;c.save();c.globalCompositeOperation='lighter';const g=c.createRadialGradient(sx,GY-6,0,sx,GY-6,22);g.addColorStop(0,'rgba(255,170,60,.55)');g.addColorStop(1,'rgba(255,120,30,0)');c.fillStyle=g;c.fillRect(sx-22,GY-28,44,40);c.restore();
  c.fillStyle='#ff6a1a';c.beginPath();c.moveTo(sx-4.5,GY-2);c.quadraticCurveTo(sx+f,GY-15,sx+4.5,GY-2);c.fill();c.fillStyle='#ffb040';c.beginPath();c.moveTo(sx-3,GY-2);c.quadraticCurveTo(sx+f*.7,GY-10,sx+3,GY-2);c.fill();c.fillStyle='#fff2a0';c.beginPath();c.moveTo(sx-1.4,GY-2);c.quadraticCurveTo(sx+f*.4,GY-6,sx+1.4,GY-2);c.fill();
  if(Math.random()<.3)P({t:'glow',x:r.x+rnd(-2,2),y:GY-10,vx:rnd(-.2,.2),vy:rnd(-.9,-.4),drag:.97,life:rnd(14,26),col:'#ffb040',s:rnd(.8,1.4)});if(NFNOW>.05)LITS.push([sx,GY-6,60,1])}
function drawTarget(c,r,sx,t){c.fillStyle='#4a2c14';c.fillRect(sx-5,GY-18,1.4,18);c.fillRect(sx+3.6,GY-18,1.4,18);c.fillStyle='#d8c08a';c.beginPath();c.arc(sx,GY-20,7,0,7);c.fill();const cols=['#f4ecd8','#c0392b','#f4ecd8','#c0392b'];for(let i=0;i<4;i++){c.fillStyle=cols[i];c.beginPath();c.arc(sx,GY-20,6-i*1.5,0,7);c.fill()}c.fillStyle='#f2c24a';c.beginPath();c.arc(sx,GY-20,.9,0,7);c.fill();
  c.strokeStyle='#5a3a1e';c.lineWidth=.6;c.beginPath();c.moveTo(sx+2,GY-21);c.lineTo(sx+7,GY-24);c.stroke();
  if(Math.abs(G.hx-r.x)<40&&!G.arch){c.font='bold 5.5px Tajawal, sans-serif';c.textAlign='center';c.fillStyle='rgba(10,6,24,.75)';const tx=L2('لعبة السهم','Archery'),w=c.measureText(tx).width+8;c.fillRect(sx-w/2,GY-38,w,8);c.fillStyle='#f6e6b8';c.fillText(tx,sx,GY-32)}}
function drawTentSpot(c,s,sx,t){if(s.lvl>0){drawTent(c,{x:s.x},sx,t);return}if(s.build>=0){const pr=s.build/100;c.fillStyle='#8a6a48';c.beginPath();c.moveTo(sx-14*pr,GY);c.lineTo(sx-2,GY-14*pr);c.lineTo(sx+10*pr,GY);c.closePath();c.fill();return}
  c.fillStyle='#5a3a1e';c.fillRect(sx-10,GY-3,1.2,3);c.fillRect(sx+8,GY-3,1.2,3);c.fillRect(sx-1,GY-9,1.2,9)}

/* ================= CAMPAIGN SCROLL MAP (parchment, Kingdom-style) ================= */
var CMAP={w:0,sel:-1,pos:null};
function cmLayout(w){const R=rng(9001+w*77),L=[];for(let i=0;i<PER;i++){const row=Math.floor(i/5),col=row%2?4-i%5:i%5;L.push({x:30+col*55+(R()-.5)*16,y:28+row*40+(R()-.5)*10,s:.8+R()*.45,seed:(R()*1e6)|0,ic:(R()*4)|0})}return L}
function campaignMap(){const m=document.getElementById('pmenu');CMAP.w=G?STAGES[G.si].b:maxWorld();CMAP.sel=G?G.si:Math.min(S.cleared,STAGES.length-1);
  m.innerHTML=`<div class="cm-wrap"><div class="cm-scroll"><div class="cm-rod l"></div><div class="cm-rod r"></div><div class="cm-tools"><button class="cm-x" data-cm="close">✕</button><button class="cm-x" data-cm="prev">◀</button><button class="cm-x" data-cm="next">▶</button><span class="cm-wn" id="cmWn"></span></div><canvas id="cmCv" width="300" height="190"></canvas></div>
   <div class="cm-side"><div class="cm-arrow up" data-cm="selp">▲</div><div class="cm-card" id="cmCard"></div><div class="cm-arrow dn" data-cm="seln">▼</div></div></div>`;
  m.hidden=false;const cv=document.getElementById('cmCv');cv.addEventListener('click',e=>{const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*300,y=(e.clientY-r.top)/r.height*190;const L=CMAP.pos||[];let best=-1,bd=1e9;L.forEach((p,i)=>{const d=Math.hypot(p.x-x,p.y-y);if(d<bd){bd=d;best=i}});if(bd<26){CMAP.sel=CMAP.w*PER+best;SFX.click();cmDraw()}});cmDraw()}
function cmDraw(){const cv=document.getElementById('cmCv');if(!cv)return;const c=cv.getContext('2d'),W=300,H=190,w=CMAP.w,L=CMAP.pos=cmLayout(w);c.imageSmoothingEnabled=false;
  c.fillStyle='#f0c8a0';c.fillRect(0,0,W,H);for(let i=0;i<900;i++){const x=(i*73.7)%W,y=(i*41.3)%H;c.fillStyle=i%3?'rgba(160,110,60,.06)':'rgba(255,240,210,.12)';c.fillRect(x|0,y|0,2,1)}
  c.strokeStyle='rgba(150,110,70,.35)';c.lineWidth=1;for(let i=0;i<40;i++){const x=(i*61)%W,y=(i*37)%H;c.beginPath();c.moveTo(x,y);c.lineTo(x+6,y);c.moveTo(x+2,y+2);c.lineTo(x+8,y+2);c.stroke()}
  for(let i=1;i<PER;i++){const a=L[i-1],b=L[i];c.strokeStyle='rgba(120,80,40,.35)';c.setLineDash([2,3]);c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke()}c.setLineDash([]);
  L.forEach((p,i)=>{const si=w*PER+i,done=!!(S.stars||{})[si],cur=si===(G?G.si:S.cleared),open=S.openAll||si<=S.cleared,sel=si===CMAP.sel,R=rng(p.seed),r0=12*p.s;
    const pts=[];for(let k=0;k<14;k++){const a=k/14*Math.PI*2,rr=r0*(.75+R()*.45);pts.push([p.x+Math.cos(a)*rr*1.3,p.y+Math.sin(a)*rr*.75])}
    const fill=cur?'#e8c84a':done?'#b8a85a':open?'#c8b87a':'#e2b88e',edge=cur?'#a8882a':done?'#7a6a30':'rgba(150,110,70,.5)';
    c.fillStyle=open||done?'rgba(80,60,30,.35)':'rgba(120,90,60,.15)';c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y+3):c.moveTo(x,y+3));c.closePath();c.fill();
    c.fillStyle=fill;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill();c.strokeStyle=edge;c.lineWidth=sel?2:1;c.stroke();
    if(sel){c.strokeStyle='#fff6d0';c.lineWidth=1;c.stroke()}
    const ink=open||done?'#5a4a20':'rgba(150,110,70,.5)';c.fillStyle=ink;const ix=p.x-4,iy=p.y-5;
    if(STAGES[si].o.boss){c.fillRect(ix,iy,8,5);c.fillRect(ix-1,iy-2,2,2);c.fillRect(ix+3,iy-2,2,2);c.fillRect(ix+7,iy-2,2,2)}
    else if(p.ic===0){c.fillRect(ix+1,iy+1,2,4);c.fillRect(ix+5,iy-1,2,6);c.fillRect(ix,iy+4,8,1)}else if(p.ic===1){c.beginPath();c.moveTo(ix,iy+5);c.lineTo(ix+4,iy);c.lineTo(ix+8,iy+5);c.fill()}else if(p.ic===2){c.fillRect(ix+3,iy-1,2,6);c.fillRect(ix+1,iy+1,6,1)}else{c.beginPath();c.arc(ix+4,iy+2,2.6,0,7);c.fill();c.fillRect(ix+3.5,iy+4,1,2)}
    if(done){c.fillStyle='#8a1f24';c.fillRect(p.x+6,p.y-9,1,7);c.fillRect(p.x+7,p.y-9,4,3)}
    if(!open&&!done){c.fillStyle='rgba(120,80,40,.55)';c.font='bold 8px monospace';c.textAlign='center';c.fillText('?',p.x,p.y+3)}
    c.fillStyle='rgba(90,60,30,.7)';c.font='bold 6px monospace';c.textAlign='center';c.fillText(String(si+1),p.x,p.y+r0*.75+7)});
  document.getElementById('cmWn').textContent=tr(WORLDS[w].name)+' · '+(w+1)+'/5';cmCard()}
function cmCard(){const el=document.getElementById('cmCard');if(!el)return;const si=CMAP.sel,st=STAGES[si],done=(S.stars||{})[si]||0,cur=G&&si===G.si,open=S.openAll||si<=S.cleared;
  const days=cur?G.day:S.run&&S.run.si===si?S.run.day:'—';
  el.innerHTML=`<div class="cm-pic"><canvas data-world="${st.b}" width="320" height="180"></canvas></div><b class="cm-n">${si+1}. ${open||done?tr(st.n):'؟'}</b>
   <div class="cm-st">${'★'.repeat(done)}${'☆'.repeat(3-done)}</div><div class="cm-d">${L2('الأيام','DAYS')}: ${days}</div>
   ${cur?qGoals().map(g=>`<div class="cm-g ${g.ok?'ok':''}">${g.ok?'✓':'•'} ${tr(g.t)} ${tr(g.v)}</div>`).join(''):st.o.boss?`<div class="cm-g">${L2('حارس أسطوري','Legendary guardian')}</div>`:''}
   ${!cur&&open&&!G?`<button class="pm-s" data-play="${si}">▶ ${L2('العب','PLAY')}</button>`:''}`;hydrate(el)}
function cmClick(b,d){if(d.cm===undefined)return false;const k=d.cm;SFX.click();
  if(k==='close'){if(G)pauseMenu();else{document.getElementById('pmenu').hidden=true}return true}
  if(k==='prev'){CMAP.w=(CMAP.w+4)%5;CMAP.sel=CMAP.w*PER;cmDraw();return true}
  if(k==='next'){CMAP.w=(CMAP.w+1)%5;CMAP.sel=CMAP.w*PER;cmDraw();return true}
  if(k==='selp'||k==='seln'){CMAP.sel=Math.max(CMAP.w*PER,Math.min(CMAP.w*PER+PER-1,CMAP.sel+(k==='seln'?1:-1)));cmDraw();return true}
  return true}

/* ================= v43: realistic falls, night fireflies, seated NPC riders ================= */
var NPCRP={knight:{h:'#2a2a30',s:'#d8a880',b:'#6a707c',p:'#34343c',girl:false,cape:'#7a1a1a',npc:'knight'},
  farmer:{h:'#4a2e18',s:'#c88e64',b:'#7a5a32',p:'#4a3a28',girl:false,cape:'#6a5a3a',npc:'farmer'},
  villager:{h:'#3a2414',s:'#e0aa80',b:'#3a6a5a',p:'#3a3040',girl:false,cape:'#5a4a30',npc:'farmer'},
  villagerH:{h:'#6a3a5a',s:'#e0aa80',b:'#8a4a5a',p:'#4a3040',girl:true,cape:'#5a4a30',npc:'farmer'}};
function npcHat(c,S,rb,rp){if(rp.npc==='knight'){c.fillStyle='#9aa2b0';c.beginPath();c.ellipse(30.4*S,(4.6+rb)*S,3.6*S,3.4*S,0,Math.PI,0);c.fill();c.fillRect(26.8*S,(4.4+rb)*S,7.2*S,2.6*S);
    c.fillStyle='#5a6270';c.fillRect(31.2*S,(5.4+rb)*S,2.8*S,.7*S);c.fillStyle='#d8dee8';c.fillRect(28*S,(2+rb)*S,3*S,.6*S);c.fillStyle='#a01e24';c.beginPath();c.moveTo(29.6*S,(1.2+rb)*S);c.quadraticCurveTo(26*S,(0+rb)*S,24.6*S,(3.4+rb)*S);c.quadraticCurveTo(27*S,(2.4+rb)*S,29.4*S,(2.4+rb)*S);c.fill()}
  else if(!rp.girl){c.fillStyle='#d8b460';c.beginPath();c.ellipse(30*S,(4.2+rb)*S,5.2*S,1*S,0,0,7);c.fill();c.beginPath();c.ellipse(30*S,(3.4+rb)*S,2.8*S,1.8*S,0,Math.PI,0);c.fill();c.fillStyle='#8a6a2a';c.fillRect(27.3*S,(3.6+rb)*S,5.4*S,.5*S)}}
function cavSpr(r,sp){const HS=.56,spd=Math.abs(r.spd||0);r._cd=(r._cd||0)+Math.min(6,Math.abs(r.x-(r._clx??r.x)));r._clx=r.x;
  MOPT.m=['n_coal','n_grey','n_roan','horse'][(r.v||0)%4];MOPT.rp=NPCRP.knight;let ms;try{if(spd<.04)ms=monarchSprite(0,'idle');else{const g=horseGait(Math.min(2.2,spd*1.6),0,r._cd,HS,r);ms=monarchSprite(g.fr,g.mode)}}finally{MOPT.rp=null;MOPT.m=S.mount||'horse'}
  return{cv:ms.cv,W:ms.W*HS,H:ms.H*HS,rf:1,hand:ms.hand,HS}}
function drawLance(c,spr,sx,yy,fl){const f=fl?1:-1,hx=sx+f*(spr.hand[0]-30)*spr.HS,hy=yy+spr.hand[1]*spr.HS;
  c.strokeStyle='#5a3a1e';c.lineWidth=.9;c.beginPath();c.moveTo(hx-f*6,hy+3);c.lineTo(hx+f*10,hy-9);c.stroke();c.fillStyle='#c3cad6';c.beginPath();c.moveTo(hx+f*10,hy-9);c.lineTo(hx+f*12.4,hy-12.6);c.lineTo(hx+f*8.8,hy-10.6);c.closePath();c.fill();
  c.fillStyle='#a01e24';c.beginPath();c.moveTo(hx+f*8.6,hy-8);c.lineTo(hx+f*5.4+Math.sin(performance.now()/160)*.6,hy-6.4);c.lineTo(hx+f*7.6,hy-6.6);c.fill()}
/* waterfall: accelerating streams, curved lip, layered curtains, rising mist */
function drawFallsW(B,r,sx,t,top,H){const fx=sx+(r.wx||0),y0=top+H*.26,w=r.big?15:11,L=GY-y0,R=rng((r.x|0)+7);
  const pts=k=>{const u=k/12,y=y0+L*u;return[w*.42+w*.2*u+Math.sin(u*3+t/700)*.4,y]};
  // back sheet
  const g=B.createLinearGradient(0,y0,0,GY);g.addColorStop(0,'rgba(150,205,235,.92)');g.addColorStop(.5,'rgba(110,175,215,.85)');g.addColorStop(1,'rgba(190,230,250,.9)');B.fillStyle=g;
  B.beginPath();for(let k=0;k<=12;k++){const[hw,y]=pts(k);k?B.lineTo(fx+hw,y):B.moveTo(fx+hw,y)}for(let k=12;k>=0;k--){const[hw,y]=pts(k);B.lineTo(fx-hw,y)}B.closePath();B.fill();
  B.save();B.clip();
  // vertical darker channels
  for(let i=0;i<6;i++){const xx=fx-w*.5+(i+.5)*w/6+Math.sin(t/900+i)*.4;B.fillStyle=`rgba(40,100,150,${.12+(i%2)*.08})`;B.fillRect(xx-.5,y0,1+(i%3)*.4,L)}
  // accelerating streaks (gravity: y ~ u^2)
  const n=Math.round(w*2.4);for(let i=0;i<n;i++){const ox=(R()-.5)*w*1.1,spd=.00045+R()*.00025,ph=R();for(let m=0;m<2;m++){const u=((t*spd+ph+m*.5)%1),uu=u*u,y=y0+L*uu,len=3+uu*10,sp=1+uu*.35;
      B.fillStyle=`rgba(255,255,255,${(.35+R()*.4)*(1-u*.4)})`;B.fillRect(fx+ox*sp,y,.55+uu*.5,len)}}
  // horizontal shimmer bands moving down
  for(let k=0;k<5;k++){const u=((t/2600+k/5)%1),y=y0+L*u*u;B.fillStyle=`rgba(230,248,255,${.18*(1-u)})`;B.fillRect(fx-w,y,w*2,1.2+u*2)}
  B.restore();
  // curved lip with spill
  B.fillStyle='rgba(235,250,255,.95)';B.beginPath();B.ellipse(fx,y0+.4,w*.46,1.3,0,0,7);B.fill();B.fillStyle='rgba(120,180,215,.9)';B.fillRect(fx-w*.42,y0-1.2,w*.84,1);
  for(let k=0;k<4;k++){const a=((t/260+k*.25)%1);B.fillStyle=`rgba(255,255,255,${.6*(1-a)})`;B.fillRect(fx-w*.4+k*w*.26,y0+a*3,.8,1.2)}
  // edge spray along the sides
  for(let k=0;k<10;k++){const u=((t/1800+k/10)%1),sd=k%2?1:-1,y=y0+L*u*u,x=fx+sd*(w*.45+w*.25*u+u*3);B.fillStyle=`rgba(230,245,255,${.35*(1-u*.6)})`;B.fillRect(x,y,1,1)}}
function drawFallsFoamW(B,r,sx,t){const fx=sx+(r.wx||0),w=r.big?15:11;
  B.fillStyle='rgba(110,170,205,.85)';B.beginPath();B.ellipse(fx,GY+1.8,w*2.2,2.8,0,0,7);B.fill();
  // expanding ripple rings
  for(let k=0;k<3;k++){const u=((t/1400+k/3)%1);B.strokeStyle=`rgba(230,248,255,${.55*(1-u)})`;B.lineWidth=.6;B.beginPath();B.ellipse(fx,GY+1.8,w*(.6+u*2),.8+u*1.6,0,0,7);B.stroke()}
  // churning foam
  for(let k=0;k<11;k++){const a=t/240+k*1.7,rr=1.2+((k*5)%4)*.6,xx=fx+Math.sin(a)*w*.75+(k-5)*.6,yy=GY-.5-Math.abs(Math.sin(a*1.4+k))*3.2;B.fillStyle=`rgba(255,255,255,${.55+(k%3)*.12})`;B.beginPath();B.arc(xx,yy,rr,0,7);B.fill()}
  // splash droplets (parabolic)
  for(let k=0;k<12;k++){const u=((t/700+k/12)%1),sd=k%2?1:-1,vx=(1.5+(k%4))*sd,h=6+(k%3)*3,x=fx+sd*w*.3+vx*u*4,y=GY-2-h*4*u*(1-u);B.fillStyle=`rgba(240,250,255,${.8*(1-u)})`;B.fillRect(x,y,.9,.9)}
  // rising mist
  B.save();B.globalCompositeOperation='lighter';for(let k=0;k<6;k++){const u=((t/3200+k/6)%1),x=fx+Math.sin(k*2.1+t/1500)*w*.8,y=GY-4-u*22,rr=6+u*12;const g=B.createRadialGradient(x,y,0,x,y,rr);g.addColorStop(0,`rgba(220,240,255,${.16*(1-u)})`);g.addColorStop(1,'rgba(220,240,255,0)');B.fillStyle=g;B.fillRect(x-rr,y-rr,rr*2,rr*2)}B.restore()}
/* fireflies */
function drawFireflies(B,toS,t){if(!G||NFNOW<.3||G.b===1||G.b===3)return;const a0=Math.min(1,(NFNOW-.3)/.35);if(!G.ffl){G.ffl=[];for(let i=0;i<42;i++)G.ffl.push({x:G.hx+(Math.random()-.5)*560,h:4+Math.random()*34,ph:Math.random()*99,s:.6+Math.random()*.8})}
  B.save();B.globalCompositeOperation='lighter';for(const f of G.ffl){if(f.x-G.hx>300)f.x-=600;else if(G.hx-f.x>300)f.x+=600;const T=t/1000*f.s+f.ph,x=toS(f.x+Math.sin(T*.7)*18+Math.sin(T*1.9)*5),y=GY-f.h-Math.sin(T*1.1)*6-Math.cos(T*2.3)*2;
    const bl=Math.max(0,Math.sin(T*2.2+f.ph))**3*a0;if(bl<.03)continue;const g=B.createRadialGradient(x,y,0,x,y,8);g.addColorStop(0,`rgba(240,255,140,${bl})`);g.addColorStop(.25,`rgba(190,250,90,${.5*bl})`);g.addColorStop(1,'rgba(120,200,60,0)');B.fillStyle=g;B.fillRect(x-8,y-8,16,16);
    B.fillStyle=`rgba(255,255,220,${bl})`;B.fillRect(x-.6,y-.6,1.3,1.3);if(bl>.4)LITS.push([x,y,10,.25*bl])}B.restore()}


/* ================= PIXEL-ART PRESENTATION (one true pixel grid, Kingdom-style) ================= */
var TXQ=[],PXC=null,PXC2=null;
function PIX(){return !S||!S.opt||S.opt.pix!==0}
function pixTextHook(){if(!KB||KB._txh)return;KB._txh=1;const PR=CanvasRenderingContext2D.prototype;
  for(const nm of ['fillText','strokeText'])KB[nm]=function(txt,x,y,mw){if(!PIX())return PR[nm].apply(this,arguments);const m=this.getTransform(),st={font:this.font,fillStyle:this.fillStyle,strokeStyle:this.strokeStyle,lineWidth:this.lineWidth,globalAlpha:this.globalAlpha,textAlign:this.textAlign,textBaseline:this.textBaseline,lineJoin:this.lineJoin,direction:this.direction,gco:this.globalCompositeOperation},args=[...arguments];
    TXQ.push(()=>{gc.save();gc.setTransform(m);for(const k in st)if(k!=='gco')try{gc[k]=st[k]}catch(e){}gc.globalCompositeOperation=st.gco;if(nm==='fillText'&&st.gco==='source-over'){const lw=gc.lineWidth;gc.lineWidth=Math.max(1.6,Math.min(2.6,parseFloat(st.font)/3.2||2));gc.strokeStyle='rgba(12,8,22,.85)';gc.lineJoin='round';PR.strokeText.apply(gc,args);gc.lineWidth=lw}PR[nm].apply(gc,args);gc.restore()})}}
function pixPost(){if(!PIX()){TXQ.forEach(f=>f());TXQ.length=0;return}
  const w=VW,h=VH;if(!PXC||PXC.width!==w||PXC.height!==h){PXC=mkc(w,h);PXC2=mkc(w,h)}
  const p=PXC.getContext('2d');p.imageSmoothingEnabled=false;p.globalCompositeOperation='source-over';p.drawImage(gcv,Math.floor(RS/2),Math.floor(RS/2),gcv.width-RS+1,gcv.height-RS+1,0,0,w,h);
  const q=PXC2.getContext('2d');q.globalCompositeOperation='source-over';if(!window._nofilt)q.filter='contrast(1.14) saturate(1.16) brightness(.97)';q.drawImage(PXC,0,0);q.filter='none';
  gc.save();gc.setTransform(1,0,0,1,0,0);gc.imageSmoothingEnabled=false;gc.drawImage(PXC2,0,0,gcv.width,gcv.height);gc.restore();
  for(const f of TXQ){try{f()}catch(e){}}TXQ.length=0}


/* Kingdom-style campfire: stone ring, crossed logs, licking pixel flames, embers and warm light */
function drawCampfireK(c,sx,y,t){const S0=['#3a3a44','#5a5a66','#7e7e8a','#9a9aa6'];
  c.save();c.globalCompositeOperation='lighter';const g=c.createRadialGradient(sx,y-5,1,sx,y-5,22);g.addColorStop(0,'rgba(255,150,50,.32)');g.addColorStop(1,'rgba(255,110,30,0)');c.fillStyle=g;c.fillRect(sx-22,y-27,44,30);c.restore();
  // logs
  c.fillStyle='#3a2210';c.fillRect(sx-7,y-3,14,2);c.fillStyle='#5a3618';c.fillRect(sx-6,y-4,5,1.6);c.fillRect(sx+1,y-4,5,1.6);c.fillStyle='#2a1608';c.fillRect(sx-2,y-5,4,2);
  // flames: 5 tongues with independent flicker
  for(let k=0;k<5;k++){const ph=t/(70+k*13)+k*1.9,h=4+Math.abs(Math.sin(ph))*4+(k===2?3:0)-Math.abs(k-2)*.9,x=sx-4+k*2,sw=Math.sin(ph*1.7)*.8;
    c.fillStyle='#d8441a';c.beginPath();c.moveTo(x-1.4,y-3);c.quadraticCurveTo(x+sw,y-3-h*1.1,x+sw*.6,y-3-h);c.quadraticCurveTo(x+1.6,y-3-h*.4,x+1.4,y-3);c.fill();
    c.fillStyle='#f5a030';c.beginPath();c.moveTo(x-.9,y-3);c.quadraticCurveTo(x+sw*.7,y-3-h*.75,x+sw*.4,y-3-h*.7);c.quadraticCurveTo(x+1,y-3-h*.3,x+.9,y-3);c.fill();
    if(k>0&&k<4){c.fillStyle='#fff0a0';c.fillRect(x-.4,y-3-h*.35,.9,h*.3)}}
  // stone ring in front
  for(let k=0;k<6;k++){const x=sx-8+k*3.2,col=S0[(k*3)%4];c.fillStyle=S0[0];c.fillRect(x-.2,y-2.2,3,2.4);c.fillStyle=col;c.fillRect(x,y-2.4,2.6,1.6);c.fillStyle='#b8b8c4';c.fillRect(x+.3,y-2.4,1,.6)}
  for(let k=0;k<4;k++){const u=((t/900+k/4)%1),ex=sx+Math.sin(t/300+k*2)*3*u+(k-1.5),ey=y-6-u*16;c.fillStyle=`rgba(255,${180-u*80|0},60,${1-u})`;c.fillRect(ex,ey,.8,.8)}
  if(typeof LITS!=='undefined')LITS.push([sx,y-6,34,.9])}

/* ================= PIXEL-ART SPRITE PASS: supersampled sprites -> crisp 1px-grid sprites with a reduced palette ================= */
var PXA=new WeakMap(),PXSTAT={n:0,ms:0};
function pxPalette(d,NC){NC=NC||14;const px=[];for(let i=0;i<d.length;i+=4)if(d[i+3]>=110)px.push([d[i],d[i+1],d[i+2]]);if(px.length<=NC)return px;
  let boxes=[px];while(boxes.length<NC){let bi=-1,br=-1,bc=0;boxes.forEach((b,i)=>{if(b.length<2)return;for(let c=0;c<3;c++){let mn=255,mx=0;for(const p of b){if(p[c]<mn)mn=p[c];if(p[c]>mx)mx=p[c]}if(mx-mn>br){br=mx-mn;bi=i;bc=c}}});if(bi<0||br<10)break;const b=boxes[bi].sort((p,q)=>p[bc]-q[bc]),h=b.length>>1;boxes.splice(bi,1,b.slice(0,h),b.slice(h))}
  return boxes.map(b=>{let r=0,g=0,bb=0;for(const p of b){r+=p[0];g+=p[1];bb+=p[2]}const n=b.length;return[r/n|0,g/n|0,bb/n|0]})}
function pxArt(src,sx,sy,sw,sh,tw,th){let m=PXA.get(src);if(!m){m=new Map();PXA.set(src,m)}const key=sx+','+sy+','+sw+','+sh+'>'+tw+'x'+th;let o=m.get(key);if(o)return o;
  const t0=performance.now(),cv=mkc(tw,th),c=cv.getContext('2d',{willReadFrequently:true});c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
  // two-step reduction for a cleaner box filter
  let s2=src,X=sx,Y=sy,W=sw,H=sh;if(sw>tw*2.5){const iw=tw*2,ih=th*2,ic=mkc(iw,ih),ix=ic.getContext('2d');ix.imageSmoothingEnabled=true;ix.imageSmoothingQuality='high';ix.drawImage(src,sx,sy,sw,sh,0,0,iw,ih);s2=ic;X=0;Y=0;W=iw;H=ih}
  c.drawImage(s2,X,Y,W,H,0,0,tw,th);const im=c.getImageData(0,0,tw,th),d=im.data;
  for(let i=0;i<d.length;i+=4){const a=d[i+3];if(a<100){d[i+3]=0;continue}const k=255/a;d[i]=Math.min(255,d[i]*k);d[i+1]=Math.min(255,d[i+1]*k);d[i+2]=Math.min(255,d[i+2]*k);d[i+3]=255}
  const pal=pxPalette(d,tw*th>9000?22:14);for(let i=0;i<d.length;i+=4){if(!d[i+3])continue;let bd=1e9,bp=pal[0];for(const p of pal){const dr=d[i]-p[0],dg=d[i+1]-p[1],db=d[i+2]-p[2],e=dr*dr*.3+dg*dg*.59+db*db*.11;if(e<bd){bd=e;bp=p}}d[i]=bp[0];d[i+1]=bp[1];d[i+2]=bp[2]}
  // soft dark rim on the lower/back silhouette edge (Kingdom-like readability)
  const w=tw;for(let y=0;y<th;y++)for(let x=0;x<tw;x++){const i=(y*w+x)*4;if(!d[i+3])continue;const below=y+1>=th||!d[i+4*w+3];if(below){d[i]*=.72;d[i+1]*=.72;d[i+2]*=.78}}
  c.putImageData(im,0,0);if(m.size>40)m.delete(m.keys().next().value);m.set(key,cv);PXSTAT.n++;PXSTAT.ms+=performance.now()-t0;return cv}
function pixSpriteHook(){if(!KB||KB._pxh)return;KB._pxh=1;const PR=CanvasRenderingContext2D.prototype,DI=PR.drawImage;
  KB.drawImage=function(src){if(!PIX()||!(src instanceof HTMLCanvasElement)||arguments.length<5||S.opt&&S.opt.pxs===0)return DI.apply(this,arguments);
    let sx,sy,sw,sh,dx,dy,dw,dh;if(arguments.length>=9){[,sx,sy,sw,sh,dx,dy,dw,dh]=arguments}else{[,dx,dy,dw,dh]=arguments;sx=0;sy=0;sw=src.width;sh=src.height}
    const m=this.getTransform(),scx=Math.hypot(m.a,m.b),scy=Math.hypot(m.c,m.d),devW=Math.abs(dw)*scx,devH=Math.abs(dh)*scy;
    if(devW>230*RS||devH>200*RS||devW<4*RS||sw<devW*1.35||Math.abs(m.b)>.08*scx)return DI.apply(this,arguments);
    const tw=Math.max(1,Math.round(devW/RS)),th=Math.max(1,Math.round(devH/RS));let pa;try{pa=pxArt(src,sx,sy,sw,sh,tw,th)}catch(e){return DI.apply(this,arguments)}
    // snap the sprite's top-left onto the logical pixel grid
    const x0=m.a*dx+m.c*dy+m.e,y0=m.b*dx+m.d*dy+m.f,ex=Math.round(x0/RS)*RS-x0,ey=Math.round(y0/RS)*RS-y0;
    const sm=this.imageSmoothingEnabled;this.imageSmoothingEnabled=false;DI.call(this,pa,0,0,tw,th,dx+ex/(m.a||1),dy+ey/(m.d||1),dw,dh);this.imageSmoothingEnabled=sm}}

/* ================= KINGDOM-STYLE TREES: native 1px pixel art, many species ================= */
var TRK={};
var TRSP={
 oak:{w:[70,96],h:[100,132],trunk:[6,9],crown:'round',cl:[26,38],cr:[9,15]},
 maple:{w:[64,88],h:[96,124],trunk:[5,7],crown:'round',cl:[24,34],cr:[8,13]},
 birch:{w:[40,58],h:[92,124],trunk:[3,4],crown:'airy',cl:[16,24],cr:[6,10],birch:1},
 poplar:{w:[30,42],h:[110,140],trunk:[4,5],crown:'tall',cl:[18,26],cr:[6,9]},
 willow:{w:[70,92],h:[90,112],trunk:[6,8],crown:'willow',cl:[20,28],cr:[9,13]},
 pine:{w:[40,58],h:[100,140],trunk:[4,6],crown:'pine'},
 dead:{w:[50,74],h:[80,110],trunk:[5,7],crown:'dead'},
 olive:{w:[54,70],h:[64,84],trunk:[5,7],crown:'round',cl:[16,22],cr:[7,11],gnarl:1},
 palm:{w:[50,66],h:[96,120],trunk:[4,5],crown:'palm'},
 cedar:{w:[90,120],h:[100,132],trunk:[6,8],crown:'cedar'},
 greatoak:{w:[100,130],h:[110,140],trunk:[11,14],crown:'round',cl:[40,52],cr:[12,18],gnarl:1,great:1},
 sakura:{w:[70,96],h:[84,110],trunk:[5,7],crown:'round',cl:[30,42],cr:[7,11],gnarl:1,sakura:1}};
var TRPAL={
 green:['#14261a','#1e3a22','#2c5229','#3e6c30','#58883a','#7aa648'],
 lime:['#1e2a12','#33461a','#4c6420','#6c8428','#94a83a','#bcc85a'],
 teal:['#0e2224','#16343a','#22484c','#2e6060','#447c70','#62987c'],
 red:['#2a0c10','#4a1216','#6e1a1c','#962620','#bc3a24','#de5a30'],
 orange:['#2e1608','#55280e','#7e3e12','#a85a18','#cc7c22','#eaa83a'],
 gold:['#2a220c','#4a3c12','#6e5a18','#968024','#bca434','#dcc858'],
 crimson:['#1e0a12','#36101c','#521626','#701e30','#8e2a3a','#aa3c48'],
 brown:['#1e140c','#36241a','#4e3622','#664a2e','#7e5e3a','#98764a'],
 pink:['#4a2240','#6e3460','#9a4c84','#c46ca8','#e494c4','#f8c4de'],
 lilac:['#2c2440','#423860','#5c4e84','#7a6aa6','#9a8cc4','#c2b6e0'],
 snow:['#1a2a30','#2a4044','#3e5a5a','#5a7a74','#c8d8e4','#f2f8ff'],
 sage:['#1e2620','#2e3a2e','#46543e','#60704e','#7e8c62','#a2ac80'],
 cedar:['#0c1a18','#132a26','#1c3c34','#285244','#386a52','#4e8462'],
 sakura:['#7a3a5c','#a85a80','#d07ea4','#ec9ec0','#f8c2d8','#fde4ee']};
var TRBARK={oak:['#1a120c','#2e2016','#45301e','#5e4228','#7a5838'],birch:['#2a2a2a','#7a7672','#bcb6ac','#e0dcd2','#f6f2ea'],dark:['#100c0a','#1e1612','#2e221a','#423224','#584430'],ash:['#141012','#241c1c','#362a28','#4a3a34','#5e4c42'],palm:['#3a2a18','#5a4428','#7a603a','#9a7e50','#b89a68']};
function treeSpeciesFor(b,seed){const R=rng(seed*7+b*101),q=R();
  if(b===0){const L=[['cedar','cedar'],['greatoak','green'],['sakura','sakura'],['greatoak','gold'],['cedar','cedar'],['sakura','sakura'],['oak','green'],['oak','teal'],['maple','red'],['maple','orange'],['oak','gold'],['birch','lime'],['birch','gold'],['poplar','green'],['willow','green'],['oak','crimson'],['maple','brown'],['oak','lime']];return L[Math.floor(q*L.length)]}
  if(b===1){const L=[['cedar','snow'],['cedar','cedar'],['pine','snow'],['pine','teal'],['pine','snow'],['birch','snow'],['dead','snow']];return L[Math.floor(q*L.length)]}
  if(b===2){const L=[['palm','lime'],['olive','sage'],['palm','green'],['olive','sage'],['poplar','sage']];return L[Math.floor(q*L.length)]}
  if(b===3){const L=[['dead','brown'],['dead','crimson'],['dead','brown']];return L[Math.floor(q*L.length)]}
  const L=[['sakura','sakura'],['sakura','pink'],['sakura','sakura'],['oak','pink'],['maple','pink'],['willow','lilac'],['birch','pink'],['oak','lilac']];return L[Math.floor(q*L.length)]}
function treeK(b,seed){const key=b+'_'+seed+'_'+RS;if(TRK[key])return TRK[key];const[sp,pn]=treeSpeciesFor(b,seed),T=TRSP[sp],R=rng(seed*13+b*7+3),rr=(a)=>a[0]+R()*(a[1]-a[0]);
  const W=Math.round(rr(T.w)),H=Math.round(rr(T.h)),cx=W>>1,pal=TRPAL[pn].map(toA),BK=(T.sakura?TRBARK.dark:sp==='cedar'?TRBARK.ash:T.birch?TRBARK.birch:sp==='palm'?TRBARK.palm:b===3?TRBARK.ash:pn==='teal'||pn==='crimson'?TRBARK.dark:TRBARK.oak).map(toA);
  const col=new Array(W*H).fill(null),set=(x,y,c)=>{x|=0;y|=0;if(x<0||y<0||x>=W||y>=H)return;col[y*W+x]=c},get=(x,y)=>x<0||y<0||x>=W||y>=H?null:col[y*W+x];
  const pick=(ramp,t)=>ramp[Math.max(0,Math.min(ramp.length-1,Math.round(t*(ramp.length-1))))];
  // ---- trunk + branches (polyline rasterizer with bark shading)
  const tw=rr(T.trunk),lean=(R()-.5)*(T.great?3:6),crownY=sp==='cedar'?H*.22:T.great?H*.48:sp==='pine'?H*.2:sp==='poplar'?H*.25:sp==='palm'?H*.18:H*(.42+R()*.08);
  const limb=(x0,y0,x1,y1,w0,w1)=>{const n=Math.ceil(Math.hypot(x1-x0,y1-y0));for(let i=0;i<=n;i++){const u=i/n,x=x0+(x1-x0)*u,y=y0+(y1-y0)*u,w=w0+(w1-w0)*u;for(let dx=-w/2;dx<=w/2;dx+=.5){const f=(dx+w/2)/Math.max(1,w);let t=f<.22?.85:f>.72?.12:.45;t+=(hsh2((x+dx)|0,y|0,seed)-.5)*.25;if(T.birch){t=f>.75?.25:.8+(hsh2((x+dx)|0,(y|0)>>1,seed)-.5)*.2;if(hsh2(0,(y|0),seed+5)>.82&&f>.15&&f<.85)t=0}set(x+dx,y,pick(BK,t))}}};
  const tb=sp==='palm'?H*.15:sp==='cedar'?H*.14:crownY+(sp==='pine'?0:4);
  {const segs=8;let px=cx,py=H-1;for(let k=1;k<=segs;k++){const u=k/segs,y=H-1-(H-1-tb)*u,x=cx+lean*u*u+(sp==='palm'?Math.sin(u*2.2)*5:0)+(T.gnarl?Math.sin(u*7)*1.5:0),w=tw*(1-u*.42)+(u<.15?(.15-u)*tw*3:0);limb(px,py,x,y,w+(k===1?tw*.5:0),w);px=x;py=y}
   // roots
   for(const sd of [-1,1]){limb(cx,H-3,cx+sd*(tw*.9+2),H-1,tw*.5,1.5)}
   if(sp!=='palm'&&sp!=='pine'&&sp!=='poplar'&&sp!=='cedar'){const nb=sp==='dead'?6:T.great?6:3+(R()*2|0);for(let k=0;k<nb;k++){const sd=k%2?1:-1,yb=tb+(H-tb)*(.05+R()*.3)-(sp==='dead'?R()*20:0),ex=cx+lean*.6+sd*(W*(sp==='dead'?.18+R()*.25:.1+R()*.16)),ey=Math.max(sp==='dead'?6:crownY*.55,yb-(10+R()*(sp==='dead'?26:16)));limb(cx+lean*.5,yb,ex,ey,tw*.45,1.2);if(sp==='dead'){limb(ex,ey,ex+sd*(4+R()*8),ey-(4+R()*8),1.2,1)}}}}
  // ---- canopy clumps
  const cl=[];const cr=T.cr?rr(T.cr):0;
  if(T.crown==='round'||T.crown==='airy'||T.crown==='tall'||T.crown==='willow'){const n=Math.round(rr(T.cl)*(T.sakura?.85:1.25)),ew=T.crown==='tall'?W*.36:W*(T.great?.5:.44),eh=T.crown==='tall'?crownY*1.05:crownY*(T.great?.8:T.sakura?.85:1.0),cy0=T.crown==='tall'?crownY*.55+H*.2:crownY*.6,cy=Math.max(cy0,eh*.55*.82+cr*1.5+2);
    for(let k=0;k<n;k++){const a=R()*Math.PI*2,d=Math.sqrt(R());let x=cx+lean*.7+Math.cos(a)*ew*d*.82,y=cy+Math.sin(a)*eh*.55*d;const r=cr*(.85+R()*.5)*(T.crown==='airy'?.82:1);cl.push({x,y,r,ph:R()*6})}
    if(T.crown==='willow')for(let k=0;k<n;k++){const x=cx+lean*.7+(R()-.5)*W*.9,y=cy+R()*eh*.35;cl.push({x,y,r:cr*.55,str:1,len:18+R()*26,ph:R()*6})}}
  const dither=(x,y)=>((x&1)^(y&1))?.04:-.04;
  if(cl.length){cl.sort((p,q)=>p.y-q.y);
    for(let y=0;y<H;y++)for(let x=0;x<W;x++){let best=null;for(let i=cl.length-1;i>=0;i--){const c=cl[i];if(c.str){const dx=x-c.x;if(Math.abs(dx)>1.6+((y-c.y)>c.len*.6?0:.6))continue;if(y<c.y-c.r||y>c.y+c.len)continue;best={c,dx,dy:(y-c.y)/c.len,str:1};break}
        const dx=x-c.x,dy=y-c.y,ang=Math.atan2(dy,dx),rj=c.r*(1+.07*Math.sin(ang*7+c.ph)+.05*Math.sin(ang*13+c.ph*2)+(hsh2(x,y,seed+21)-.5)*.12);if(dx*dx+dy*dy<=rj*rj){best={c,dx,dy,rj};break}}
      if(!best)continue;let t;
      if(best.str){t=.55-best.dy*.35+(hsh2(x,y,seed+3)-.5)*.2}
      else{const{dx,dy,rj}=best;t=.5+(-dx*.38-dy*.72)/rj*.62;const edge=Math.hypot(dx,dy)/rj;if(edge>.84&&dy>0)t-=.22;
        t+=-(best.c.y-crownY*.3)/H*.25;t+=dither(x,y)+(hsh2(x>>1,y>>1,seed+9)-.5)*.16;if(hsh2(x,y,seed+11)>.93)t+=.16}
      set(x,y,pick(pal,Math.max(0,Math.min(1,t))))}
    // leaf-clump separation: darken pixels whose upper neighbour is empty-under-different-clump (crisp dark notches)
  }
  if(T.crown==='pine'){const tiers=6+(R()*3|0),top=4;for(let k=0;k<tiers;k++){const u=k/(tiers-1),yb=top+(H*.82-top)*(.18+u*.82),wb=W*(.16+u*.34),hh=(H*.82)/tiers*1.5;
      for(let y=Math.round(yb-hh);y<=yb;y++){const f=(y-(yb-hh))/hh,ww=wb*f;for(let x=Math.round(cx-ww);x<=cx+ww;x++){const g=(x-cx)/Math.max(1,ww);let t=.5-g*.32-f*.25+dither(x,y)+(hsh2(x,y,seed)-.5)*.14;if(f>.86)t-=.25;if(pn==='snow'&&f<.32+hsh2(x>>1,k,seed)*.25&&g<.6)t=.92+(hsh2(x,y,seed+1)-.5)*.1;set(x,y,pick(pal,t))}}
      for(let x=Math.round(cx-wb);x<=cx+wb;x+=2)if(hsh2(x,k,seed+4)>.5)set(x,yb+1,pick(pal,.15))}}
  if(T.crown==='cedar'){const tiers=4+(R()*2|0);for(let k=0;k<tiers;k++){const u=k/(tiers-1),yc=H*.12+u*H*.5,half=W*(.2+u*.28)*(.85+R()*.3),off=(R()-.5)*W*.14,th=6+u*4;
      limb(cx+lean*.6,yc+th+4,cx+off,yc+th*.6,tw*.45,1.5);
      for(let n=0;n<11;n++){const v=n/10-.5,px0=cx+off+v*half*1.8,py0=yc+(R()-.5)*3+Math.abs(v)*th*.7,rx=half*(.2+R()*.16),ry=th*(.5+R()*.4)*(1-Math.abs(v)*.5);
        for(let y=Math.floor(py0-ry);y<=py0+ry+1;y++)for(let x=Math.floor(px0-rx);x<=px0+rx;x++){const dx=(x-px0)/rx,dy=(y-py0)/ry;if(dx*dx+dy*dy>1+(hsh2(x,y,seed+k)-.5)*.35)continue;let t=.55-dy*.38-dx*.12+dither(x,y)+(hsh2(x>>1,y,seed+3)-.5)*.16;if(dy>.6)t-=.22;
          if(pn==='snow'&&dy<-.25&&hsh2(x,y,seed+7)>.25)t=.95;set(x,y,pick(pal,Math.max(0,Math.min(1,t))))}}}}
  if(T.sakura){for(let k=0;k<70;k++){const x=cx+(R()-.5)*W*.9,y=crownY*(.2+R()*1.0);if(get(x|0,y|0))set(x,y,R()<.5?pal[5]:[255,246,250])}}
  if(T.crown==='palm'){const tx=cx+Math.sin(2.2)*5+lean,ty=H*.15;for(let k=0;k<7;k++){const a=-Math.PI*.95+k/6*Math.PI*.9,len=W*.38+R()*6;let px=tx,py=ty;for(let i=0;i<len;i++){const u=i/len,x=tx+Math.cos(a)*i,y=ty+Math.sin(a)*i*.35+u*u*len*.55;for(let w=-2;w<=2;w++){const lx=x-Math.sin(a)*w*.4,ly=y+w*(1-u)*1.2;if(Math.abs(w)<=2*(1-u)+.5)set(lx,ly,pick(pal,.75-Math.abs(w)*.15-u*.3))}}}set(tx,ty,pick(BK,.5));set(tx+1,ty+1,pick(BK,.3))}
  if(T.crown==='dead'&&pn==='snow'){for(let x=0;x<W;x++)for(let y=1;y<H;y++)if(get(x,y)&&!get(x,y-1)&&hsh2(x,y,seed)>.4)set(x,y,pal[5])}
  // ivy / moss on some trunks
  if(b===0&&sp==='oak'&&hsh2(seed,1,7)>.6){for(let y=Math.round(tb);y<H-4;y++)if(hsh2(1,y,seed)>.35){const x=cx+lean*((H-y)/H)**2+(hsh2(2,y,seed)-.5)*tw;set(x,y,pick(TRPAL.green,.5+hsh2(3,y,seed)*.4))}}
  // soft occlusion where canopy shadows the trunk top
  for(let y=Math.round(crownY*.9);y<Math.min(H,crownY+14);y++)for(let x=0;x<W;x++){const c=get(x,y);if(c&&BK.includes(c))set(x,y,BK[Math.max(0,BK.indexOf(c)-1)])}
  // rasterize to canvas at RS (nearest)
  const cv=mkc(W*RS,H*RS),c=cv.getContext('2d'),im=c.createImageData(W*RS,H*RS),d=im.data;for(let y=0;y<H;y++)for(let x=0;x<W;x++){const q=col[y*W+x];if(!q)continue;for(let yy=0;yy<RS;yy++){let p=((y*RS+yy)*W*RS+x*RS)*4;for(let xx=0;xx<RS;xx++){d[p]=q[0];d[p+1]=q[1];d[p+2]=q[2];d[p+3]=255;p+=4}}}c.putImageData(im,0,0);
  return TRK[key]={cv,W,H,cx,sp,crownY}}
var THZ={};function treeHaze(b,seed,col,amt){const k=b+'_'+seed+'_'+col+'_'+amt+'_'+RS;if(THZ[k])return THZ[k];const T=treeK(b,seed),cv=mkc(T.cv.width,T.cv.height),c=cv.getContext('2d');c.drawImage(T.cv,0,0);c.globalCompositeOperation='source-atop';c.globalAlpha=amt;c.fillStyle=col;c.fillRect(0,0,cv.width,cv.height);return THZ[k]={cv,W:T.W,H:T.H,cx:T.cx}}
function isTreeKind(r){const b=G?G.b:0;return b===1?(r.v===0||r.v===2):r.v===0}
function drawTreeK(B,r,sx,alpha,ang){const T=treeK(G?G.b:0,(r.seed??(r.seed=((r.x*7919)|0)&0xffff)));const s=Math.min(1.25,Math.max(.8,r.s||1)),W=T.W*s,H=T.H*s,sw=(Math.sin(performance.now()/1800+r.x*.01)*.006+WINDF(performance.now())*.004);
  B.save();B.translate(sx,GY+1);B.rotate((ang||0)+sw);if(alpha!=null)B.globalAlpha=alpha;B.imageSmoothingEnabled=false;B.drawImage(T.cv,-T.cx*s,-H,W,H);B.restore();if(T.sp==='sakura'&&alpha==null){const tt=performance.now();for(let k=0;k<7;k++){const per=4200+k*530,u=((tt+k*977+r.x*13)%per)/per,px=sx+(hsh2(k,r.x|0,3)-.5)*W*.8-u*24+Math.sin(u*9+k)*3,py=GY-H*(.75-u*.75);B.fillStyle=k%2?'#fde4ee':'#f4aac8';B.fillRect(Math.round(px),Math.round(py),1,1)}}}

/* ================= KINGDOM-STYLE CASTLE: native 1px pixel art ================= */
var KCS={};
var KSTONE={0:['#1a1820','#2e2c36','#45434e','#5c5a66','#76747e','#93919a'],1:['#161c26','#283242','#3c4858','#546072','#6e7a8c','#8e9aac'],2:['#3a2a1a','#5c4428','#7e6038','#9e7c4c','#bc9a64','#d8b882'],3:['#0e0a0c','#1e1618','#2e2426','#403434','#544644','#6a5a56'],4:['#3a3450','#544c70','#706890','#8e86ac','#aea6c8','#cec8e2']};
function ktcCastle(b,L){const key=b+'_'+L+'_'+RS;if(KCS[key])return KCS[key];
  const W=[0,84,96,150,186][L],H=[0,44,92,104,124][L],col=new Array(W*H).fill(null),set=(x,y,c)=>{x=Math.round(x);y=Math.round(y);if(x<0||y<0||x>=W||y>=H||!c)return;col[y*W+x]=c},get=(x,y)=>x<0||y<0||x>=W||y>=H?null:col[y*W+x];
  const ST=(KSTONE[b]||KSTONE[0]).map(toA),WD=['#1a0e06','#2e1a0c','#462a14','#5e3a1e','#7a4e2a','#966438'].map(toA),RF=['#24120a','#3e2010','#5a3018','#784222','#94582e'].map(toA),R=rng(b*31+L*7),K=KCOL.me,BN=toA(K.f),BN2=toA('#8a1f24'),GOLD=toA('#e8c24a'),BLK=toA('#1e1a22'),MOSS=['#2a3a1e','#3e5226','#56702e'].map(toA);
  const pk=(r,t)=>r[Math.max(0,Math.min(r.length-1,Math.round(t*(r.length-1))))],win=[],torch=[],flags=[];
  const stone=(x0,y0,x1,y1,tone)=>{tone=tone||0;let row=0;for(let y=y0;y<y1;y+=5,row++){const rh=Math.min(5,y1-y),off=(row%2)*5+((hsh2(row,x0,b)*4)|0);let x=x0-off;while(x<x1){const bw=8+((hsh2(x,row,b+L)*5)|0),t0=.46+(hsh2(x,row+7,b)-.5)*.5+tone-(y-y0)/(y1-y0+1)*.12;
      for(let yy=0;yy<rh;yy++)for(let xx=0;xx<bw;xx++){const X=x+xx,Y=y+yy;if(X<x0||X>=x1)continue;let c;if(yy===rh-1||xx===bw-1)c=ST[0];else{let t=t0;if(yy===0)t+=.22;if(xx===0)t+=.08;if(yy===rh-2)t-=.1;t+=(hsh2(X,Y,b+5)-.5)*.08;c=pk(ST,Math.max(.16,t))}set(X,Y,c)}x+=bw}}
    for(let x=x0;x<x1;x++){if(hsh2(x,y1,b+9)>.55){const h=1+((hsh2(x,1,b)*3)|0);for(let k=0;k<h;k++)set(x,y1-1-k,pk(MOSS,.3+k*.3))}}};
  const merlons=(x0,x1,y,h)=>{h=h||6;for(let x=x0;x<x1;x+=9){stone(x,y-h,Math.min(x1,x+5),y,.1)}};
  const outline=()=>{const o=col.slice();for(let y=0;y<H;y++)for(let x=0;x<W;x++){if(o[y*W+x])continue;if((x>0&&o[y*W+x-1])||(x<W-1&&o[y*W+x+1])||(y>0&&o[(y-1)*W+x])||(y<H-1&&o[(y+1)*W+x]))col[y*W+x]=ST[0]}};
  const banner=(x,y,w,h,c,pat)=>{for(let yy=0;yy<h;yy++){const notch=yy>=h-3?Math.abs(w/2-.5-0)-(h-yy)*1.2:-99;for(let xx=0;xx<w;xx++){if(yy>=h-3&&Math.abs(xx-(w-1)/2)<(yy-(h-4))*1.1)continue;let cc=c;const sh=xx===0||xx===w-1?.7:1;if(pat==='diamond'){const dx=Math.abs(xx-(w-1)/2),dy=((yy+2)%8)-4;if(Math.abs(dx)+Math.abs(dy)<=2&&yy<h-4)cc=GOLD}else if(pat==='stripe'&&yy%6<2)cc=BLK;set(x+xx,y+yy,cc.map(v=>v*sh))}}
    for(let xx=-1;xx<=w;xx++)set(x+xx,y-1,WD[4])};
  const windowAt=(x,y,w,h)=>{for(let yy=0;yy<h;yy++)for(let xx=0;xx<w;xx++)set(x+xx,y+yy,yy===0&&(xx===0||xx===w-1)?null:BLK);win.push([x+w/2,y+h/2,Math.max(w,h),0])};
  const roof=(xc,yb,hw,h)=>{for(let y=0;y<h;y++){const w=Math.round(hw*(y+1)/h);for(let x=-w;x<=w;x++){const t=.55+(((x+y*2)>>2)%2?.12:-.05)-(Math.abs(x)===w?.35:0)+(y%3===0?-.15:0);set(xc+x,yb-h+y,pk(RF,t))}}for(let x=-hw-1;x<=hw+1;x++)set(xc+x,yb,RF[0])};
  const gate=(xc,yb,w,h)=>{const r=w/2;for(let y=yb-h;y<yb;y++)for(let x=xc-r-2;x<=xc+r+2;x++){const dy=y-(yb-h+r),inA=(dy>=0&&Math.abs(x-xc)<=r)||(dy<0&&(x-xc)**2+dy*dy<=r*r),inR=(dy>=0&&Math.abs(x-xc)<=r+2)||(dy<0&&(x-xc)**2+dy*dy<=(r+2)*(r+2));
      if(inA){const pc=((x-xc+40)%3===0)||((y-yb+40)%4===0);set(x,y,pc?WD[3]:toA('#120c08'))}else if(inR)set(x,y,pk(ST,.85))}
    for(let k=-1;k<=1;k+=2)torch.push([xc+k*(r+5),yb-h*.55])};
  const tower=(x0,w,top,tone)=>{stone(x0,top,x0+w,H,tone);merlons(x0-1,x0+w+1,top,5);for(let x=x0-1;x<x0+w+1;x++)set(x,top,ST[4])};
  const watch=(x0)=>{for(let y=H-30;y<H;y++){set(x0,y,WD[2]);set(x0+9,y,WD[2]);if((y-(H-30))%8===0)for(let k=0;k<10;k++)set(x0+k,y-((k*.8)|0),WD[1])}for(let y=H-36;y<H-30;y++)for(let x=x0-2;x<x0+12;x++)set(x,y,pk(WD,.4+((x%3===0)?.3:0)+(y===H-36?.3:0)));torch.push([x0+5,H-40])};
  const hb=(x,y,c,pat)=>banner(x,y,7,19,c,pat);
  if(L===1){// wooden palisade camp with gate and banners
    for(let x=0;x<W;x+=3){const h=26+((hsh2(x,1,b)*5)|0);for(let y=H-h;y<H;y++)for(let k=0;k<3;k++)set(x+k,y,pk(WD,(k===0?.75:k===2?.25:.5)+(y<H-h+2?.2:0)));set(x+1,H-h-1,WD[1])}
    for(let x=0;x<W;x++){set(x,H-16,WD[1]);set(x,H-15,WD[0])}
    const gx=W/2;for(let y=H-22;y<H;y++)for(let x=gx-8;x<gx+8;x++)set(x,y,(x-gx+8)%4===0?WD[1]:pk(WD,.35));for(let x=gx-10;x<gx+10;x++){set(x,H-23,WD[4]);set(x,H-24,WD[2])}
    hb(gx-16,H-28,BN,'diamond');hb(gx+11,H-28,BN2,'stripe');flags.push([gx-1,H-40,K.f]);for(let y=H-40;y<H-23;y++)set(gx-2,y,WD[1]);torch.push([gx-12,H-20],[gx+12,H-20])}
  if(L>=2){const kx=L===2?W/2-17:W/2-20,kw=L===2?34:40,ktop=L===2?12:4;
    if(L>=3){// curtain walls with merlons and hanging banners
      const wt=H-40;stone(0,wt,W,H,-.04);merlons(0,W,wt,5);for(let x=0;x<W;x++)set(x,wt,ST[4]);
      for(let k=0;k<6;k++){const x=8+k*((W-24)/5);if(Math.abs(x-W/2)<28)continue;hb(Math.round(x),wt+3,k%2?BLK:BN2,k%2?null:'stripe')}
      if(L>=4){tower(2,22,H-74,.05);tower(W-24,22,H-74,.05);windowAt(10,H-62,4,7);windowAt(W-16,H-62,4,7);hb(8,H-56,BN,'diamond');hb(W-19,H-56,BN,'diamond');flags.push([12,H-86,K.f],[W-12,H-86,K.f]);for(const fx of [11,W-13])for(let y=H-86;y<H-74;y++)set(fx,y,WD[1])}}
    else{stone(0,H-22,W,H,-.05);merlons(0,W,H-22,4)}
    tower(kx,kw,ktop,.02);
    // keep banner
    banner(kx+kw/2-7,ktop+8,14,34,BN,'diamond');
    windowAt(kx+5,ktop+12,3,6);windowAt(kx+kw-8,ktop+12,3,6);
    flags.push([kx+kw/2,ktop-14,K.f]);for(let y=ktop-14;y<ktop-4;y++)set(kx+kw/2-1,y,WD[1]);
    // gatehouse
    const gw=L===2?14:20,gh=L===2?22:30,gx=W/2;if(L>=3){stone(gx-gw/2-8,H-gh-12,gx+gw/2+8,H,.08);roof(gx,H-gh-12,gw/2+12,10)}gate(gx,H,gw,gh);
    }
  outline();
  // drop shadow on lower right edges (depth)
  for(let y=1;y<H;y++)for(let x=0;x<W-1;x++){const c=col[y*W+x];if(c&&!col[(y-1)*W+x]&&c!==ST[0]){}}
  const cv=mkc(W*RS,H*RS),cx=cv.getContext('2d'),im=cx.createImageData(W*RS,H*RS),d=im.data;for(let y=0;y<H;y++)for(let x=0;x<W;x++){const q=col[y*W+x];if(!q)continue;for(let yy=0;yy<RS;yy++){let p=((y*RS+yy)*W*RS+x*RS)*4;for(let xx=0;xx<RS;xx++){d[p]=q[0];d[p+1]=q[1];d[p+2]=q[2];d[p+3]=255;p+=4}}}cx.putImageData(im,0,0);
  return KCS[key]={cv,W,H,win,smoke:[],flags,lan:[],torch,yard:[],b}}

/* ================= KINGDOM-STYLE BOATS: native 1px pixel art longships ================= */
var KBT={};
function pxBuf(W,H){const col=new Array(W*H).fill(null);return{W,H,col,set(x,y,c){x=Math.round(x);y=Math.round(y);if(x<0||y<0||x>=W||y>=H||!c)return;col[y*W+x]=c},get(x,y){return x<0||y<0||x>=W||y>=H?null:col[y*W+x]},
  outline(c0){const o=col.slice();for(let y=0;y<H;y++)for(let x=0;x<W;x++){if(o[y*W+x])continue;if((x>0&&o[y*W+x-1])||(x<W-1&&o[y*W+x+1])||(y>0&&o[(y-1)*W+x])||(y<H-1&&o[(y+1)*W+x]))col[y*W+x]=c0}},
  toCanvas(){const cv=mkc(W*RS,H*RS),cx=cv.getContext('2d'),im=cx.createImageData(W*RS,H*RS),d=im.data;for(let y=0;y<H;y++)for(let x=0;x<W;x++){const q=col[y*W+x];if(!q)continue;for(let yy=0;yy<RS;yy++){let p=((y*RS+yy)*W*RS+x*RS)*4;for(let xx=0;xx<RS;xx++){d[p]=q[0];d[p+1]=q[1];d[p+2]=q[2];d[p+3]=255;p+=4}}}cx.putImageData(im,0,0);return cv}}}
function ktcLongship(o){// o:{W,H,WL,x0,x1,depth,free,prow,shields,sail,oars,trim,lv}
  const P=pxBuf(o.W,o.H),WD=['#140a04','#24140a','#3a2212','#52321a','#6c4524','#885a30','#a4723e'].map(toA),K=KCOL.me,BN=toA(K.f),GOLD=toA(o.trim||'#e8c24a'),CREAM=['#7a7062','#a49a88','#cdc3ae','#ece4d0'].map(toA);
  const pk=(r,t)=>r[Math.max(0,Math.min(r.length-1,Math.round(t*(r.length-1))))],mid=(o.x0+o.x1)/2,hw=(o.x1-o.x0)/2;
  const gun=x=>{const u=(x-mid)/hw;return o.WL-o.free-Math.pow(Math.abs(u),5)*o.prow},keel=x=>{const u=(x-mid)/hw;return o.WL+o.depth*(1-Math.pow(Math.abs(u),2.4))};
  // sail first (behind rail) 
  let mast=null;if(o.sail){const mx=Math.round(mid+(o.mastOff||0)),top=o.sailTop,yb=Math.round(gun(mx))-2;mast=[mx,top];for(let y=top-4;y<yb;y++){P.set(mx,y,WD[2]);P.set(mx+1,y,WD[4])}
    const sw=o.sail,sh=o.sailH,sx0=mx-sw/2,belly=Math.max(2,sw*.06);for(let y=0;y<sh;y++){const u=y/(sh-1),bl=0;for(let x=0;x<sw;x++){const X=Math.round(sx0)+x,v=x/(sw-1),bel=Math.sin(u*Math.PI)*Math.sin(v*Math.PI);let c=pk(CREAM,.62+bel*.18-u*.1+(((x+y)&1)?.03:-.03));
        if(o.stripes&&Math.floor(v*o.stripes*2)%2===1)c=BN.map(q=>q*(.7+bel*.38));if(o.emblem){const dx=x-sw/2,dy=y-sh*.48,rr=Math.min(sw,sh)*.16;const d=Math.abs(dx)+Math.abs(dy);if(d<rr&&d>rr-2.2)c=GOLD}P.set(X,top+y,c)}}
    for(let x=-2;x<=sw+2;x++){P.set(sx0+x,top-1,WD[4]);P.set(sx0+x,top-2,WD[2])}
    // rigging
    for(const sd of [-1,1]){const ex=sd<0?o.x0+6:o.x1-6,ey=gun(ex)-1;const n=Math.ceil(Math.hypot(ex-mx,ey-top));for(let k=0;k<=n;k+=2){const X=mx+(ex-mx)*k/n,Y=top-3+(ey-top)*k/n;if(!P.get(Math.round(X),Math.round(Y)))P.set(X,Y,WD[1])}}}
  // hull
  for(let x=o.x0;x<=o.x1;x++){const g=Math.round(gun(x)),k=Math.round(keel(x));for(let y=g;y<=k;y++){const strake=Math.floor((y-g)/2.5);let t=.55-strake*.07+((strake%2)?.06:-.02)+(hsh2(x>>2,strake,7)-.5)*.08;if(y===g)t=.95;else if(y===g+1)t=.78;if(y>=o.WL)t-=.18;
      if(((x+strake*5)%13)===0&&y>g+1)t-=.12;P.set(x,y,pk(WD,t))}}
  // prow & stern posts curling up
  for(const sd of [-1,1]){const ex=sd<0?o.x0:o.x1,base=gun(ex);const n=o.post;for(let k=0;k<n;k++){const u=k/n,x=ex+sd*(Math.sin(u*1.7)*3+u*2)-sd*(u>.8?(u-.8)*14:0),y=base-u*o.post*.9;for(let w=-1;w<=1;w++)P.set(x+w,y,pk(WD,w===-1?.85:w===1?.3:.6))}
    const hx=ex+sd*2-sd*3,hy=base-o.post*.9;if(o.dragon){P.set(hx,hy-1,GOLD);P.set(hx-sd,hy,GOLD);P.set(hx+sd,hy-2,WD[1])}}
  // gunwale trim
  for(let x=o.x0+3;x<=o.x1-3;x++)if(o.lv>=4&&x%3===0)P.set(x,Math.round(gun(x))+1,GOLD);
  // shields on the rail
  if(o.shields){for(let x=o.x0+8;x<=o.x1-8;x+=6){const y=Math.round(gun(x))+1,c=(x/6|0)%2?BN:toA(o.shield2||'#8a1f24');for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++){if(dx*dx+dy*dy>5)continue;P.set(x+dx,y+dy,dx*dx+dy*dy<2?GOLD:c.map(v=>v*(dy<0?1.1:.85)))}}}
  // oars
  if(o.oars){for(let x=o.x0+10;x<=o.x1-12;x+=8){const y0=Math.round(gun(x))+3;for(let k=0;k<9;k++)P.set(x+k*.55,y0+k,WD[5]);P.set(x+5,y0+9,WD[4]);P.set(x+5.5,y0+10,WD[4])}}
  P.outline(WD[0]);return{P,gun,keel,mast}}
function ktcFerry(b){const key='kf_'+b+RS;if(KBT[key])return KBT[key];const W=100,H=62,WL=45,L=ktcLongship({W,H,WL,x0:12,x1:88,depth:6,free:7,prow:9,post:14,shields:1,oars:1,sail:0,dragon:1,lv:2});
  return KBT[key]={cv:L.P.toCanvas(),W,H,oy:WL-1}}
function ktcGalley(b,lv){const key='kg_'+b+'_'+lv+RS;if(KBT[key])return KBT[key];const W=170,H=150,WL=119,len=lv===1?.62:lv===2?.8:1,mid=86,hw=72*len;
  const L=ktcLongship({W,H,WL,x0:Math.round(mid-hw),x1:Math.round(mid+hw),depth:lv>=3?12:9,free:lv>=3?13:10,prow:lv>=3?16:11,post:lv>=3?22:15,shields:lv>=2,oars:lv>=3,sail:Math.round(hw*(lv>=4?1.05:.9)),sailH:lv>=4?62:lv>=3?54:40,sailTop:lv>=4?24:lv>=3?34:52,stripes:lv>=2?(lv>=4?4:3):0,emblem:lv>=3,dragon:lv>=3,lv,trim:lv>=5?'#ffd860':'#e8c24a'});
  const mx=L.mast?L.mast[0]:mid,top=L.mast?L.mast[1]:60;
  return KBT[key]={cv:L.P.toCanvas(),W,H,win:[],smoke:[],flags:[[mx+.5,top-9,KCOL.me.f]],lan:[[Math.round(mid-hw)+3,Math.round(L.gun(mid-hw+3))-2],[Math.round(mid+hw)-3,Math.round(L.gun(mid+hw-3))-2]],torch:[],yard:[],b,sheer:Math.round(L.gun(84))}}

(function(){const _sh=shipSprite,_bt=boatSprite;shipSprite=function(b,lv){if(S&&S.opt&&S.opt.oldboat)return _sh(b,lv);try{return ktcGalley(b,lv||S.ship||1)}catch(e){return _sh(b,lv)}};boatSprite=function(b){if(S&&S.opt&&S.opt.oldboat)return _bt(b);try{return ktcFerry(b)}catch(e){return _bt(b)}}})();
/* ================= CLEAR ONBOARDING (child → parent → how to play) + home guide ================= */
document.addEventListener('click',e=>{const b=e.target.closest('[data-approveall]');if(!b)return;e.stopPropagation();S.tasks.filter(t=>t.status==='pending').forEach(t=>{t.status='done';award(t.pts,t.name,catOf(t))});SFX.done();save();render();parentPanel();toast(L2('تمت الموافقة على كل المهام','All tasks approved'),'check')},true);
function obSteps(n){return `<div class="ob-steps">${[L2('البطل','Hero'),L2('ولي الأمر','Parent'),L2('طريقة اللعب','How to play')].map((t,i)=>`<span class="${i+1===n?'on':i+1<n?'ok':''}"><b>${i+1}</b>${t}</span>`).join('')}</div>`}
function obShow(n){const card=document.querySelector('#setup .card-b');if(!card)return;if(!obShow.c1)obShow.c1=card.innerHTML;
  const h=document.querySelector('#setup .card-h h2');
  if(n===1){h.textContent=L2('اختر بطلك','Choose your hero');card.innerHTML=obSteps(1)+obShow.c1;hydrate(card);if(window.pickG){card.querySelectorAll('.gopt').forEach(x=>x.setAttribute('aria-pressed',x.dataset.gender===pickG));$('#setupGo').disabled=false}if(obShow.nm)$('#sName').value=obShow.nm;return}
  if(n===2){obShow.nm=$('#sName')?$('#sName').value.trim():obShow.nm||'';h.textContent=L2('لولي الأمر','For the parent');
    card.innerHTML=obSteps(2)+`<div class="ob-note">${ic('lock')}<div>${L2('هذه الإعدادات لولي الأمر. يمكن تغييرها لاحقًا من زر القفل أعلى الشاشة.','These settings are for the parent. You can change them later from the lock button at the top.')}</div></div>
     <div class="field">${L2('اختر رمزًا سريًا لولي الأمر (4 أرقام) — لا تُطلع الطفل عليه','Choose a parent secret code (4 digits) — keep it from the child')}<input id="obPin" type="password" inputmode="numeric" autocomplete="new-password" maxlength="4" placeholder="••••" value=""></div><div class="field">${L2('أعد كتابة الرمز للتأكيد','Type the code again to confirm')}<input id="obPin2" type="password" inputmode="numeric" autocomplete="new-password" maxlength="4" placeholder="••••" value=""></div>
     <div class="row"><div class="field">${L2('عمر الطفل','Child age')}<select id="obAge"><option value="y" ${obShow.age==='y'?'selected':''}>${L2('من ٧ إلى ٩ سنوات','7–9 years')}</option><option value="o" ${obShow.age!=='y'?'selected':''}>${L2('من ١٠ إلى ١٢ سنة','10–12 years')}</option></select></div>
     <div class="field">${L2('أقصى وقت لعب يوميًا','Max play time per day')}<select id="obMax">${[20,30,45,60].map(m=>`<option value="${m}" ${(obShow.max||30)===m?'selected':''}>${m} ${L2('دقيقة','min')}</option>`).join('')}</select></div></div>
     <div class="ob-rule">${ic('star')}<span>${L2('كل','Every')} <b class="num">20</b> ${L2('نقطة إنجاز','achievement points')} = <b class="num">10</b> ${L2('دقائق لعب','minutes of play')}</span></div>
     <label class="switch">${L2('تجربة سريعة بتقدّم جاهز (للاستكشاف فقط)','Quick demo with ready progress (to explore only)')}<input type="checkbox" id="obDemo" ${obShow.demo?'checked':''}></label>
     <div class="row"><button class="btn ghost" data-ob="1">${L2('رجوع','Back')}</button><button class="btn gold" style="flex:1" data-ob="3">${L2('التالي','Next')} ◀</button></div>`;hydrate(card);return}
  if(n===3){const p=$('#obPin');if(p){const v=(p.value||'').replace(/\D/g,''),v2=($('#obPin2').value||'').replace(/\D/g,'');if(v.length!==4){toast(L2('اكتب رمزًا من 4 أرقام','Enter a 4-digit code'),'lock');p.focus();return}if(v!==v2){toast(L2('الرمزان غير متطابقين','The codes don’t match'),'lock');$('#obPin2').focus();return}obShow.pin=v;obShow.age=$('#obAge').value;obShow.max=+$('#obMax').value;obShow.demo=$('#obDemo').checked}h.textContent=L2('كيف نلعب؟','How do we play?');
    const st=[['list',L2('أنجز مهامك اليومية','Do your daily tasks'),L2('صلاة، دراسة، ترتيب، مساعدة… واضغط «أنجزت» بعد كل مهمة.','Prayer, study, tidying, helping… tap “I did it” after each task.')],
      ['check',L2('ولي الأمر يوافق','The parent approves'),L2('كل مهمة يرسلها الطفل تنتظر موافقة ولي الأمر من زر القفل، وبعدها فقط تتحول إلى نقاط وعملات.','Every task the child sends waits for the parent’s approval from the lock button — only then does it turn into points and coins.')],
      ['clock',L2('حوّل النقاط إلى وقت لعب','Turn points into play time'),L2('كل 20 نقطة تفتح 10 دقائق لعب.','Every 20 points unlock 10 minutes of play.')],
      ['map',L2('انطلق في المغامرة','Start the adventure'),L2('ابنِ مملكتك، اكسب ولاء القرى، واكتشف الكنوز في 100 جزيرة.','Build your kingdom, win villages’ loyalty and find treasures across 100 islands.')]];
    card.innerHTML=obSteps(3)+`<div class="ob-how">${st.map((x,i)=>`<div class="ob-c"><div class="ob-n num">${i+1}</div>${ic(x[0])}<b>${x[1]}</b><span>${x[2]}</span></div>`).join('')}</div>
     <div class="row"><button class="btn ghost" data-ob="2">${L2('رجوع','Back')}</button><button class="btn gold" style="flex:1" data-ob="go">▶ ${gender3()}</button></div>`;hydrate(card)}}
function gender3(){return (window.pickG==='f')?L2('هيّا نبدأ يا بطلة','Let’s go, heroine'):L2('هيّا نبدأ يا بطل','Let’s go, hero')}
function obFinish(){const m=S.muted,demo=!!obShow.demo;S=freshState(demo,pickG);S.muted=m;S.name=obShow.nm||'';S.pin=obShow.pin||'1234';kInit();S.cfg.age=obShow.age||'o';S.cfg.dailyMax=obShow.max||30;S.obDone=1;try{ptRoll()}catch(e){}save();$('#setup').hidden=true;tab='home';curTrack=null;render();SFX.win();obShow.c1&&(document.querySelector('#setup .card-b').innerHTML=obShow.c1);toast(L2('أهلًا بك في مملكة الإنجاز! ابدأ بمهامك','Welcome to the Kingdom! Start with your tasks'),'star')}
document.addEventListener('click',e=>{const b=e.target.closest('[data-ob]');if(!b)return;e.stopPropagation();SFX.click();const k=b.dataset.ob;if(k==='go')obFinish();else obShow(+k)},true);
/* home: today's steps */
function guideHTML(){if(!S.cfg)kInit();ptRoll();const tot=S.tasks.length,done=S.tasks.filter(t=>t.status==='done').length,pend=S.tasks.filter(t=>t.status==='pending').length,c=S.cfg,canB=typeof canBuy==='function'&&canBuy(),left=S.pt.left;
  const cur=left>0?3:canB?2:pend?1:0;
  const step=(i,icn,t,sub,btn)=>`<div class="gs ${i===cur?'on':i<cur?'ok':''}"><div class="gs-n num">${i<cur?'✓':i+1}</div>${ic(icn)}<div class="gs-t"><b>${t}</b><span>${sub}</span></div>${btn||''}</div>`;
  return `<div class="card guide">${cardH(L2('خطوات اليوم','Today’s steps'))}<div class="card-b light"><div class="gsteps">
   ${step(0,'list',L2('أنجز مهامك','Do your tasks'),`<span class="num">${done}/${tot}</span> ${L2('مهمة منجزة','tasks done')}`,`<button class="btn sm" data-goto="tasks">${L2('مهامي','My tasks')}</button>`)}
   ${step(1,'check',L2('موافقة ولي الأمر','Parent approval'),pend?`<span class="num">${pend}</span> ${L2('بانتظار الموافقة','waiting for approval')}`:L2('لا شيء بانتظار الموافقة','nothing waiting'),`<button class="btn sm ghost" data-ppanel>${ic('lock')} ${L2('ولي الأمر','Parent')}</button>`)}
   ${step(2,'clock',L2('افتح وقت اللعب','Unlock play time'),`${L2('رصيدك','Balance')} <span class="num">${S.points}</span> · ${L2('كل','every')} <span class="num">${c.ptsPer}</span> = <span class="num">${c.minPer}</span> ${L2('د','min')}`,`<button class="btn sm gold" data-timeshop>${ic('clock')} ${L2('افتح','Unlock')}</button>`)}
   ${step(3,'map',L2('العب','Play'),left>0?`${L2('متبقٍ','Left')} <span class="num">${fmtT(left)}</span>`:L2('يحتاج وقت لعب','needs play time'),`<button class="btn sm ${left>0?'gold':'ghost'}" data-goto="worlds">▶ ${L2('العب','Play')}</button>`)}
  </div></div></div>`}
document.addEventListener('click',e=>{const b=e.target.closest('[data-ppanel]');if(!b)return;e.stopPropagation();initAudio();pinPad()},true);
/* parent panel: friendly order with collapsible long sections */
(function(){const _pp=parentPanel;parentPanel=function(){_pp();try{const box=document.querySelector('#overlay');if(!box)return;const secs=[...box.querySelectorAll('.sec')];
  const fold=['سجل','التقدّم','فئات','إضافة مهمة','كل المهام','نقاط الإنجاز','الإعدادات'];
  const intro=document.createElement('div');intro.className='ob-note';intro.innerHTML=ic('lock')+'<div>'+L2('من هنا: وافق على مهام طفلك، وحدّد وقت اللعب، وأضف أو عدّل المهام. الأقسام الطويلة مطوية — اضغط على عنوانها لفتحها.','From here: approve your child’s tasks, set play time, and add or edit tasks. Long sections are folded — tap a title to open it.')+'</div>';if(secs[0])secs[0].parentNode.insertBefore(intro,secs[0]);hydrate(intro);
  for(const sc of secs){const t=sc.textContent.trim();if(!fold.some(f=>t.startsWith(f)))continue;const d=document.createElement('details');d.className='pfold';const sm=document.createElement('summary');sm.textContent=t;d.appendChild(sm);let n=sc.nextElementSibling;const move=[];while(n&&!n.classList.contains('sec')&&!(n.matches&&n.matches('[data-close],#resetBox'))){move.push(n);n=n.nextElementSibling}sc.parentNode.insertBefore(d,sc);sc.remove();move.forEach(x=>d.appendChild(x))}}catch(e){console.error(e)}}})();

/* ================= KINGDOM RULES: the crown, coins as protection, knight raids, dusk horn ================= */
(function(){const _rp=riderPal;riderPal=function(){const r=_rp();if(!MOPT.rp&&typeof G!=='undefined'&&G&&G.crown)return Object.assign({},r,{nc:1});return r}})();
damageHero=function(n,sx){if(!G||G.over||G.inv>0)return;G.inv=70;G.shake=9;SFX.hit();G.vx=Math.sign(G.hx-sx||1)*2.6;G.hurtT=0;G.flash=4;
  if(G.shield){G.shield=0;puff(G.hx,GY-24,10,'#bfe9ff',2);gHud();return}
  puff(G.hx,GY-30,8,'#f5c542',2);
  if(G.purse>0){const k=Math.min(G.purse,n>=3?4:2);G.purse-=k;for(let i=0;i<k;i++)dropCoin(G.hx,GY-30,(Math.random()-.5)*4.5);SND.coinLoss();if(!G._clT||G.t-G._clT>4000){G._clT=G.t;banner(`<div class="bs">${ic('coin')} ${L2('سقطت عملات من كيسك — العملات تحمي تاجك!','Coins fell from your purse — coins protect your crown!')}</div>`,1800)}gHud();return}
  if(!G.crown){const d=Math.sign(G.hx-sx||1);G.crown={x:G.hx,y:GY-34,vx:-d*1.6,vy:-2.6,t:0};G.vx=d*3.4;SND.crownFall();G.flash=10;banner(`<div class="bt">${ic('crown')} ${L2('سقط التاج!','The crown fell!')}</div><div class="bs">${L2('التقطه بسرعة قبل أن تخطفه المخلوقات','Grab it before the creatures snatch it')}</div>`,2600)}gHud()};
function crownLost(){if(G.over)return;G.over=true;S.gold=(S.gold||0)+Math.floor(G.purse/2);S.run=null;save();SND.crownLost();const si=G.si;
  setTimeout(()=>modal(`<div class="center celebrate">${L2('سُرق التاج!','The crown was stolen!')}</div><p class="center" style="margin:0;font-weight:800">${L2('في مملكة الإنجاز يحمي الذهبُ التاجَ. احمل عملات أكثر، وابنِ الأسوار، وجهّز الرماة، وعُد إلى المملكة قبل حلول الليل.','In the Kingdom, gold protects the crown. Carry more coins, build walls, equip archers, and return before nightfall.')}</p><button class="btn gold wide" data-play="${si}">↻ ${gx('أعد الجزيرة','أعيدي الجزيرة')}</button><button class="btn ghost wide" data-exitgame>${L2('الخريطة','Map')}</button>`,L2('الجزيرة ','Island ')+(si+1)),900)}
function crownTick(dt){const C=G.crown;if(!C)return;C.t+=dt;
  if(C.carrier){const g=C.carrier;if(g.gone){crownLost();return}if(g.dead||!G.greed.includes(g)){C.carrier=null;C.vy=-2;C.vx=0;C.y=GY-24;banner(`<div class="bs">${ic('crown')} ${L2('أسقط المخلوق التاج! التقطه','The creature dropped the crown! Grab it')}</div>`,1800);return}
    C.x=g.x;C.y=GY-30+Math.sin(G.t/90)*1.5;if(Math.abs(G.hx-g.x)<12){g.carry=0;g.flee=1;C.carrier=null;crownBack();return}return}
  C.vy+=.18*dt;C.x+=C.vx*dt;C.y+=C.vy*dt;if(C.y>GY-4){C.y=GY-4;C.vy*=-.35;C.vx*=.6}
  if(C.t>45&&Math.abs(G.hx-C.x)<11){crownBack();return}
  const g=G.greed.find(g=>!g.dead&&!g.flee&&!g.carry&&g.type!=='boss'&&Math.abs(g.x-C.x)<9);if(g){g.carry=1;C.carrier=g;SND.greedLaugh();banner(`<div class="bt">${L2('مخلوق يهرب بالتاج!','A creature runs off with the crown!')}</div><div class="bs">${L2('الحقه قبل أن يصل إلى بوابته','Catch it before it reaches its portal')}</div>`,2400)}}
function crownBack(){G.crown=null;G.inv=90;SND.crownBack();G.flash=6;puff(G.hx,GY-34,14,'#f5c542',2);banner(`<div class="bs">${ic('crown')} ${L2('استعدت تاجك!','You took back your crown!')}</div>`,1600);gHud()}
function drawCrownK(B,toS,t){const C=G&&G.crown;if(!C)return;const x=Math.round(toS(C.x)),y=Math.round(C.y),Y='#f5c542',O='#b07a10',R='#e8464f',W='#fff6c8';
  B.save();B.globalCompositeOperation='lighter';const g=B.createRadialGradient(x,y,0,x,y,12);g.addColorStop(0,`rgba(255,220,120,${.35+.15*Math.sin(t/160)})`);g.addColorStop(1,'rgba(255,220,120,0)');B.fillStyle=g;B.fillRect(x-12,y-12,24,24);B.restore();
  const p=(dx,dy,w,h,c)=>{B.fillStyle=c;B.fillRect(x+dx,y+dy,w,h)};p(-4,-1,9,3,Y);p(-4,-4,1,3,Y);p(-2,-3,1,2,Y);p(0,-5,1,4,Y);p(2,-3,1,2,Y);p(4,-4,1,3,Y);p(-4,2,9,1,O);p(0,0,1,1,R);p(-3,0,1,1,'#7fd3f7');p(3,0,1,1,'#7fd3f7');if(Math.sin(t/200)>.6)p(-1,-5,1,1,W)}
(function(){const _g=gHud;gHud=function(){_g();try{if(!G)return;const el=$('#gHearts');el.innerHTML=`<span class="crownst ${G.crown?'lost':''}">${ic('crown')}</span>${ic('coin')}<span class="num">${G.purse}</span>${ic(isNight()?'moon':'sun')}<span class="num">${G.day}</span>`+(G.shield?ic('shield'):'');hydrate(el);imgify(el)}catch(e){}}})();
/* knights raid live portals in daylight */
function raidDawn(){if(!G||G.si<5)return;const kn=G.people.filter(p=>p.role==='knight'&&!p.vid);const live=(G.I.portals||[]).filter(sd=>G.props.some(p=>p.k==='portal'&&p.side===sd&&!p.dead));
  if(kn.length>=2&&live.length){const sd=live[0];G.raid={side:sd};SND.horn(.6);banner(`<div class="bt">${ic('shield')} ${L2('الفرسان ينطلقون!','The knights ride out!')}</div><div class="bs">${L2('يهاجمون بوابة الظلام وسيعودون قبل الغروب','They attack the dark portal and will be back before sunset')}</div>`,3000)}else G.raid=null}
function raidTick(dt){if(!G||!G.raid)return;if(isNight()||(G.tod>CYCLE.day-30)){G.raid=null;return}const P=G.props.find(p=>p.k==='portal'&&p.side===G.raid.side&&!p.dead);if(!P){G.raid=null;banner(`<div class="bs">${L2('دمّر الفرسان البوابة!','The knights destroyed the portal!')}</div>`,2400);return}
  for(const k of G.people){if(k.role!=='knight'||k.vid||k.flee>0)continue;const d=P.x-k.x;if(Math.abs(d)>16){k.x+=Math.sign(d)*.95*dt;k.dir=Math.sign(d);k.moving=true}else{k.moving=false;k.rcd=(k.rcd||0)-dt;if(k.rcd<=0){k.rcd=48;hitPortal(P,1,'steel',Math.sign(d)||1)}}}}
/* day/night cues */
function cueTick(){if(!G)return;const ph=G.tod<CYCLE.day-25?'day':G.tod<CYCLE.day?'late':isNight()?'night':'dawn';if(ph!==G._ph){const prev=G._ph;G._ph=ph;
  if(ph==='late'&&prev){SND.horn(1);banner(`<div class="bt">${ic('moon')} ${L2('الشمس تغرب','The sun is setting')}</div><div class="bs">${L2('عُد إلى داخل الأسوار قبل حلول الليل','Head back inside the walls before night falls')}</div>`,2800)}
  if(ph==='night'&&prev)SND.nightFall();if(ph==='dawn'&&prev)SND.dawn()}}
function ktcUpdate(dt){try{crownTick(dt);raidTick(dt);cueTick();SND.tick(dt)}catch(e){console.error(e)}}

/* ================= SOUND DESIGN: ambient soundscapes + Kingdom-like sfx ================= */
var SND=(function(){let amb=null,last={},stepAcc=0;const now=()=>AC?AC.currentTime:0;
  function nb(len){const b=AC.createBuffer(1,AC.sampleRate*len,AC.sampleRate),d=b.getChannelData(0);let l=0;for(let i=0;i<d.length;i++){const w=Math.random()*2-1;l=(l+.02*w)/1.02;d[i]=l*3.5}return b}
  function wnb(len){const b=AC.createBuffer(1,AC.sampleRate*len,AC.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;return b}
  function ensure(){if(!AC||amb)return;amb={bus:AC.createGain()};amb.bus.gain.value=.9;amb.bus.connect(sfxBus);
    const mk=(buf,type,freq,q)=>{const s=AC.createBufferSource();s.buffer=buf;s.loop=true;const f=AC.createBiquadFilter();f.type=type;f.frequency.value=freq;f.Q.value=q||.7;const g=AC.createGain();g.gain.value=0;s.connect(f);f.connect(g);g.connect(amb.bus);s.start();return{f,g}};
    const brown=nb(4),white=wnb(3);amb.wind=mk(brown,'lowpass',420);amb.water=mk(white,'bandpass',900,.6);amb.sea=mk(brown,'lowpass',700);amb.fire=null}
  function set(node,v,tc){if(node)node.g.gain.setTargetAtTime(v,now(),tc||.8)}
  function env(t,a,d,v,nodeOut){const g=AC.createGain();g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+a);g.gain.exponentialRampToValueAtTime(.0001,t+a+d);g.connect(nodeOut||amb.bus);return g}
  function osc(type,f,t,dur,v,f2,out){const o=AC.createOscillator();o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);const g=env(t,Math.min(.02,dur/4),dur,v,out);o.connect(g);o.start(t);o.stop(t+dur+.05);return o}
  function burst(t,dur,v,type,freq,q,out){const s=AC.createBufferSource();s.buffer=noiseBuf;const f=AC.createBiquadFilter();f.type=type;f.frequency.value=freq;f.Q.value=q||1;const g=env(t,.004,dur,v,out);s.connect(f);f.connect(g);s.start(t);s.stop(t+dur+.05)}
  function bird(t){const n=2+(Math.random()*4|0),b=2400+Math.random()*1800;for(let i=0;i<n;i++){const tt=t+i*(.08+Math.random()*.06);osc('sine',b*(1+Math.random()*.2),tt,.06+Math.random()*.05,.025,b*(1.3+Math.random()*.4))}}
  function cricket(t){for(let i=0;i<6;i++)osc('sine',4400+Math.random()*200,t+i*.035,.018,.012)}
  function owl(t){osc('triangle',390,t,.32,.05,360);osc('triangle',380,t+.55,.5,.045,340)}
  function crackle(t,v){for(let i=0;i<3;i++)burst(t+Math.random()*.25,.012,v*(0.5+Math.random()),'highpass',2500,.5)}
  function frog(t){osc('square',180,t,.08,.012,140);osc('square',170,t+.14,.08,.01,130)}
  function context(){const s={wind:.05,water:.0,sea:0,birds:0,crick:0,owl:0,fire:0,frogs:0};if(!AC)return s;
    if(typeof G!=='undefined'&&G&&!G.over&&!document.getElementById('game').hidden){const nf=NFNOW||0,b=G.b;s.wind=b===1?.16:b===2?.11:b===4?.13:.06;s.water=.05;s.birds=(1-nf)*(b===3?0:1);s.crick=nf>.5&&b!==1?1:0;s.owl=nf>.6?1:0;s.frogs=nf>.4&&(b===0||b===4)?1:0;
      const near=(k,m)=>G.props.some(p=>p.k===k&&Math.abs(p.x-G.hx)<m);if(G.props.some(p=>p.k==='river'&&p.sea&&Math.abs(p.x-p.w/2-G.hx)<260))s.sea=.12;if(near('river',160)||near('falls',200))s.water=.11;
      if(near('camp',110)||near('pyre',90)||Math.abs(G.hx)<70)s.fire=1;if(G.paused)s.wind*=.5;return s}
    const t=typeof tab!=='undefined'?tab:'home',title=!document.getElementById('title').hidden;if(title){s.wind=.07;s.crick=1;s.fire=1;s.water=.04;s.owl=.5}else if(t==='home'){s.birds=.7;s.water=.05;s.fire=.6}else if(t==='worlds'){s.wind=.08;s.sea=.06;s.birds=.4}else{s.wind=.03;s.birds=.25}return s}
  function tick(dt){if(!AC||S.muted)return;ensure();const c=context(),t=now();set(amb.wind,c.wind*(.75+.25*Math.sin(t*.23)+.15*Math.sin(t*.71)),1.5);set(amb.water,c.water,1.2);set(amb.sea,c.sea*(.7+.3*Math.sin(t*.4)),1.2);
    const r=Math.random;if(c.birds&&r()<.012*c.birds)bird(t+.05);if(c.crick&&r()<.06)cricket(t+.02);if(c.owl&&r()<.0016*c.owl)owl(t+.05);if(c.fire&&r()<.12*c.fire)crackle(t,.06);if(c.frogs&&r()<.01)frog(t);
    // hooves while riding
    if(typeof G!=='undefined'&&G&&!G.foot&&!G.paused&&Math.abs(G.vx||0)>.2){stepAcc+=Math.abs(G.vx)*dt;const stride=G.gallop?13:9;if(stepAcc>stride){stepAcc=0;const tt=t+.01;burst(tt,.05,.08,'lowpass',260,2);if(G.gallop)burst(tt+.07,.04,.06,'lowpass',300,2)}}
    // creatures near at night
    if(typeof G!=='undefined'&&G&&G.greed&&G.greed.some(g=>!g.dead&&Math.abs(g.x-G.hx)<120)&&r()<.01){osc('sawtooth',110+r()*40,t,.35,.025,70)}}
  function ensureCall(f){return function(){if(!AC)return;ensure();try{f.apply(null,arguments)}catch(e){}}}
  return{tick,
    horn:ensureCall(v=>{const t=now()+.02,b=AC.createGain();b.gain.value=.12*(v||1);const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.setValueAtTime(400,t);lp.frequency.linearRampToValueAtTime(1400,t+.6);lp.frequency.linearRampToValueAtTime(500,t+2.2);lp.connect(b);b.connect(sfxBus);
      [[110,0],[165,0],[220,.9]].forEach(([f,d])=>{const o=AC.createOscillator();o.type='sawtooth';o.frequency.setValueAtTime(f*.97,t+d);o.frequency.linearRampToValueAtTime(f,t+d+.2);const g=AC.createGain();g.gain.setValueAtTime(.0001,t+d);g.gain.exponentialRampToValueAtTime(.5,t+d+.35);g.gain.setValueAtTime(.5,t+d+1);g.gain.exponentialRampToValueAtTime(.0001,t+d+2.2);o.connect(g);g.connect(lp);o.start(t+d);o.stop(t+d+2.3)})}),
    nightFall:ensureCall(()=>{const t=now();[220,207.6,174.6].forEach((f,i)=>osc('sine',f,t+i*.5,1.4,.05))}),
    dawn:ensureCall(()=>{const t=now();[523.3,659.3,784,1046.5].forEach((f,i)=>osc('triangle',f,t+i*.18,1.2,.05));bird(t+1);bird(t+1.6)}),
    crownFall:ensureCall(()=>{const t=now();[1318,1046,784,523].forEach((f,i)=>osc('triangle',f,t+i*.07,.25,.08));burst(t+.3,.08,.1,'bandpass',3000,3)}),
    crownBack:ensureCall(()=>{const t=now();[523,784,1046,1568].forEach((f,i)=>osc('triangle',f,t+i*.06,.4,.07))}),
    crownLost:ensureCall(()=>{const t=now();[392,370,330,262].forEach((f,i)=>osc('triangle',f,t+i*.3,.6,.07))}),
    greedLaugh:ensureCall(()=>{const t=now();for(let i=0;i<4;i++)osc('sawtooth',300-i*20,t+i*.11,.09,.04,180)}),
    coinLoss:ensureCall(()=>{const t=now();for(let i=0;i<3;i++)osc('triangle',1500-i*180,t+i*.06,.12,.05)})}})();
/* softer, Kingdom-like coin & music */
SFX.coin=function(){if(!AC)return;const t=AC.currentTime;tone(1568,t,.18,'triangle',.06);tone(2093,t+.05,.28,'sine',.045)};
SFX.buy=function(){if(!AC)return;const t=AC.currentTime;[784,1046,1318].forEach((f,i)=>tone(f,t+i*.07,.35,'triangle',.06))};
SFX.click=function(){if(!AC)return;tone(520,AC.currentTime,.05,'triangle',.05)};


/* ghost points at the place of the current task */
function ghostTarget(){if(!G)return null;const gh=G.gh||{};if(G.crown)return G.crown.x;
  const near=(arr,f)=>{let b=null,bd=1e9;for(const p of arr){if(f&&!f(p))continue;const d=Math.abs(p.x-G.hx);if(d<bd){bd=d;b=p}}return b?b.x:null};
  const P=G.props,Sx=G.sites;switch(gh.key){
    case 'vag':return near(P,p=>p.k==='camp'&&!p.rival);case 'vil':return near(P,p=>p.k==='rvil');case 'npc':return near(P,p=>p.k==='npc'&&p.role==='info');case 'portal':return near(P,p=>p.k==='portal'&&!p.dead);
    case 'wall':return near(Sx,s=>s.k==='wall'&&!s.lvl);case 'bow':return near(Sx,s=>s.k==='bow');case 'ham':return near(Sx,s=>s.k==='hammer');case 'boat':return site('boat')?site('boat').x:null;
    case 'arch':return near(P,p=>p.k==='target');case 'pyre':return near(P,p=>p.k==='pyre'&&!p.lit);case 'tent':return near(Sx,s=>s.k==='tentspot'&&!s.lvl);case 'hunt':return near(P,p=>(p.k==='deer'||p.k==='rabbit')&&p.alive)}
  // tutorial / general: nearest thing worth paying for, else the ship
  const vg=G.people.find(p=>p.role==='vagrant'&&Math.abs(p.x-G.hx)<400);if(vg&&G.purse>0)return vg.x;
  const pay=near(Sx,s=>{try{return payable(s)&&Math.abs(s.x-G.hx)<500}catch(e){return false}});if(pay!=null)return pay;
  const bt=site('boat');return bt&&bt.lvl<1?bt.x:null}
(function(){const _gu=ghostUpdate;ghostUpdate=function(dt){if(G&&G.gh){const gh=G.gh;const tg=gh.show?ghostTarget():null;gh.tgt=(tg!=null&&Math.abs(tg-G.hx)>8)?tg:(G.crown?G.crown.x:null)}if(G&&G.crown&&G.gh&&!G.gh._cs){G.gh._cs=1;ghostSay(L2('تاجك هناك! أسرع والتقطه','Your crown is over there! Hurry and grab it'),5000)}if(G&&!G.crown&&G.gh)G.gh._cs=0;return _gu(dt)}})();
function drawGhostPoint(B,toS,t,gh,sx,y0,sc,W,f,a){const tx=toS(gh.tgt),tyG=GY-14,shx=sx+f*2*sc,shy=y0+13*sc;let ang=Math.atan2(tyG-shy,tx-shx);if(Math.abs(tx-shx)<6)ang=Math.PI/2;
  // keep the arm in front of the body
  if(f>0)ang=Math.max(-1.1,Math.min(1.3,ang));else{let q=Math.PI-ang;if(q>Math.PI)q-=2*Math.PI;q=Math.max(-1.1,Math.min(1.3,q));ang=Math.PI-q}
  const poke=Math.sin(t/220)*1.2,len=(9+poke)*sc,ex=shx+Math.cos(ang)*len,ey=shy+Math.sin(ang)*len;
  B.save();B.globalAlpha=a*.9;B.strokeStyle='#c6f2f8';B.lineWidth=2.2*sc;B.lineCap='round';B.beginPath();B.moveTo(shx,shy);B.lineTo(ex,ey);B.stroke();B.strokeStyle='#f4ffff';B.lineWidth=1*sc;B.beginPath();B.moveTo(shx,shy-.6);B.lineTo(ex,ey-.6);B.stroke();
  const fx=ex+Math.cos(ang)*2.2*sc,fy=ey+Math.sin(ang)*2.2*sc;B.fillStyle='#f4ffff';B.fillRect(Math.round(ex)-1,Math.round(ey)-1,2,2);B.fillRect(Math.round(fx),Math.round(fy),1,1);
  B.globalCompositeOperation='lighter';let g=B.createRadialGradient(fx,fy,0,fx,fy,6);g.addColorStop(0,`rgba(190,240,255,${.55+.25*Math.sin(t/150)})`);g.addColorStop(1,'rgba(190,240,255,0)');B.fillStyle=g;B.fillRect(fx-6,fy-6,12,12);
  // dotted spirit trail from the finger toward the place
  const onS=tx>4&&tx<VW-4,txc=Math.max(10,Math.min(VW-10,tx));for(let k=1;k<=10;k++){const u=k/11,ph=(t/700+u)%1,qx=fx+(txc-fx)*u,qy=fy+((onS?GY-36:fy)-fy)*u-Math.sin(u*Math.PI)*10;B.globalAlpha=a*.55*(1-Math.abs(ph-.5)*1.4);B.fillStyle='#bfefff';B.fillRect(Math.round(qx),Math.round(qy),1,1)}
  // marker above the place (or edge arrow when off-screen)
  B.globalAlpha=a;const bob=Math.sin(t/260)*2;
  if(onS){const mx=Math.round(tx),my=Math.round(GY-44+bob);g=B.createRadialGradient(mx,GY-2,0,mx,GY-2,14);g.addColorStop(0,'rgba(170,235,255,.35)');g.addColorStop(1,'rgba(170,235,255,0)');B.fillStyle=g;B.fillRect(mx-14,GY-12,28,14);
    B.globalCompositeOperation='source-over';B.fillStyle='#2a4a6a';for(let r=0;r<5;r++)B.fillRect(mx-4+r,my+r,9-2*r,1);B.fillStyle='#d8f6ff';for(let r=0;r<4;r++)B.fillRect(mx-3+r,my+r,7-2*r,1)}
  else{const ex2=tx<0?6:VW-6,dir=tx<0?-1:1,my=Math.round(GY-40+bob);B.globalCompositeOperation='source-over';B.fillStyle='#d8f6ff';for(let r=0;r<5;r++)B.fillRect(ex2-dir*r,my-4+r,1,9-2*r);B.fillStyle='#2a4a6a';B.fillRect(ex2-dir*5,my-1,1,3)}
  B.restore()}

/* ================= EVENTS ================= */
document.addEventListener('click',e=>{
  const b=e.target.closest('button,[data-close]');if(!b)return;const d=b.dataset;
  if(d.setlang!==undefined){setLang(LANG==='en'?'ar':'en');return}
  if(kClick(b,d))return;
  if(cmClick(b,d))return;
  if(pmClick(b,d))return;
  if(pClick(b,d))return;
  if(qClick(b,d))return;
  if(d.mapclose!==undefined){closeModal();if(G)G.paused=false;return}
  if(d.gift!==undefined){if(S.gems<3){toast('تحتاج 3 جواهر','lock');return}S.gems-=3;G.loyal=Math.min(100,(G.loyal??80)+35);save();updateTop();SFX.buy();openMap();hydrate(ov);return}
  if(d.shipup!==undefined){const lv=S.ship||1,nx=SHIPS[lv+1];if(!nx)return;if((S.gold||0)<nx.gold||S.gems<nx.gems){toast('تحتاج '+nx.gold+' عملة و'+nx.gems+' جوهرة','lock');return}S.gold-=nx.gold;S.gems-=nx.gems;S.ship=lv+1;save();SFX.win();updateTop();render();toast(''+nx.n+'!','check');return}if(d.mount){S.mount=d.mount;save();if(G){G.rearT=G.rearMax=26}openMap();return}
  if(d.gender){pickG=d.gender;document.querySelectorAll('.gopt').forEach(x=>x.setAttribute('aria-pressed',x.dataset.gender===pickG));$('#setupGo').disabled=false;$('#sName').placeholder=pickG==='f'?'اكتبي اسمك':'اكتب اسمك';$('#setupGo').textContent=L2('التالي','Next')+' ◀';SFX.click();return}
  if(b.id==='setupGo'){window.pickG=pickG;SFX.click();obShow(2);return}
  if(d.resume!==undefined){closeModal();return}
  if(d.gateopen!==undefined){openGate(+d.gateopen);return}
  if(d.gotasks!==undefined){exitGame();tab='tasks';render();window.scrollTo(0,0);return}
  if(d.bestiary!==undefined){SFX.click();bestiary();return}
  if(d.tab){tab=d.tab;SFX.click();render();window.scrollTo(0,0);return}
  if(d.goto){tab=d.goto;render();window.scrollTo(0,0);return}
  if(d.done){markDone(d.done);return}
  if(d.filter){taskFilter=d.filter;render();return}
  if(d.cat){shopCat=d.cat;SFX.click();render();return}
  if(d.buy){buy(d.buy);return}
  if(d.equip){equip(d.equip);return}
  if(d.unlock){unlockWorld(+d.unlock);return}
  if(d.resumeRun!==undefined){if(G){cancelAnimationFrame(graf);G=null}startStage(+d.resumeRun,true);return}
  if(d.play!==undefined){{const gm=gateMsg(+d.play);if(gm){toast(gm,'lock');return}}if(G){cancelAnimationFrame(graf);G=null}startStage(+d.play);return}
  if(d.stage!==undefined){const si=+d.stage,st=STAGES[si];if(!S.unlocked[st.b]&&!S.openAll){toast('أكمل المملكة السابقة لتفتح هذه المملكة','lock');return}if(si>S.cleared&&!S.openAll){toast('أكمل المرحلة السابقة أولًا','lock');return}{const gm=gateMsg(si);if(gm){toast(gm,'lock');return}}SFX.click();stageInfo(si);return}
  if(d.exitgame!==undefined){exitGame();return}
  if(d.close!==undefined){closeModal();return}
  if(d.pin!==undefined){if(d.pin==='⌫')pinBuf=pinBuf.slice(0,-1);else if(pinBuf.length<4)pinBuf+=d.pin;SFX.click();
    if(pinBuf.length===4){if(pinBuf===S.pin){parentPanel();return}pinBuf='';toast('الرمز غير صحيح، حاول مجددًا')}pinPad.draw();return}
  if(d.approve){approve(d.approve,true);return}
  if(d.reject){approve(d.reject,false);return}
  if(d.bonus){award(+d.bonus,'مكافأة من ولي الأمر');SFX.done();save();render();parentPanel();return}
  if(d.del){S.tasks=S.tasks.filter(t=>t.id!==d.del);save();render();parentPanel();return}
  if(b.id==='addTask'){const n=$('#nName').value.trim();if(!n){toast('اكتب اسم المهمة أولًا');return}
    const p=Math.max(5,Math.min(50,+$('#nPts').value||10));S.tasks.push({id:'t'+(S.nextId++),time:$('#nTime').value||'17:00',name:n,icon:$('#nIcon').value,pts:p,type:$('#nType').value,status:'todo'});save();render();parentPanel();toast('أُضيفت المهمة','check');return}
  if(b.id==='saveSet'){const n=$('#cName').value.trim();if(n)S.name=n;const p=$('#cPin').value.trim();if(p){if(!/^\d{4}$/.test(p)){toast('الرمز يجب أن يكون 4 أرقام');return}S.pin=p}
    const ng=$('#cGender').value;if(ng!==S.gender)setGender(ng);save();render();toast('حُفظت الإعدادات','check');parentPanel();return}
  if(b.id==='resetBtn'){$('#resetBox').innerHTML='<p style="margin:0;font-weight:800">سيُحذف كل التقدم والمشتريات. متأكد؟</p><div class="row"><button class="btn red" id="resetYes">نعم، ابدأ من الصفر</button><button class="btn ghost" id="resetNo">تراجع</button></div>';return}
  if(b.id==='resetNo'){parentPanel();return}
  if(b.id==='resetYes'){const pin=S.pin,cf=S.cfg,m=S.muted,g=S.gender,n=S.name;S=freshState(false,g);S.name=n;S.pin=pin;S.cfg=cf;S.muted=m;S.kv=1;kInit();save();closeModal();tab='home';render();toast('بدأت رحلة جديدة','star');return}
  if(b.id==='copyCode'){const t=S.code;try{navigator.clipboard.writeText(t).then(()=>toast('نُسخ الرمز','check'),()=>selectCode())}catch(_){selectCode()}return}
});
function selectCode(){const r=document.createRange();r.selectNodeContents($('#myCode'));const s=getSelection();s.removeAllRanges();s.addRange(r);toast('حدّد الرمز وانسخه')}
document.addEventListener('input',e=>{const k=e.target&&e.target.dataset&&e.target.dataset.opt;if(k){OPT()[k]=+e.target.value;applyOpt();save()}});
document.addEventListener('change',e=>{kChange(e);if(e.target.id==='autoAp'){S.auto=e.target.checked;save()}
  if(e.target.id==='openAll'){S.openAll=e.target.checked;save();render();toast(S.openAll?'فُتحت جميع المراحل':'عادت المراحل للفتح التدريجي','check')}});
ov.addEventListener('click',e=>{if(e.target===ov&&!G)closeModal()});
$('#parentBtn').addEventListener('click',()=>{initAudio();pinPad()});
$('#sndBtn').addEventListener('click',()=>{initAudio();S.muted=!S.muted;if(master)master.gain.value=S.muted?0:.9;save();updateTop()});
const hold=(id,k)=>{const el=$(id),on=e=>{e.preventDefault();if(G)G.keys[k]=1;el.classList.add('on')},off=e=>{if(G)G.keys[k]=0;el.classList.remove('on')};el.addEventListener('pointerdown',on);['pointerup','pointerleave','pointercancel'].forEach(ev=>el.addEventListener(ev,off))};
hold('#gL','l');hold('#gR','r');
$('#gJump').addEventListener('pointerdown',e=>{e.preventDefault();jump()});$('#gJump').addEventListener('pointerup',jumpRel);
$('#gA').addEventListener('pointerdown',e=>{e.preventDefault();attack()});
$('#gM').addEventListener('pointerdown',e=>{e.preventDefault();toggleMount();gHud()});$('#gMap').addEventListener('click',()=>{if(!G||G.over)return;G.paused=true;campaignMap()});$('#gPause').addEventListener('click',()=>pauseMenu());

$('#gClose').addEventListener('click',()=>{if(G&&!G.over){saveRun();G.over=true}exitGame();tab='home';render();window.scrollTo(0,0)});
const KM={ArrowLeft:'l',KeyA:'l',ArrowRight:'r',KeyD:'r'};
document.addEventListener('keydown',e=>{if(!G||$('#game').hidden)return;if(KM[e.code]){G.keys[KM[e.code]]=1;e.preventDefault()}else if((e.code==='Space'||e.code==='ArrowUp'||e.code==='KeyW')&&!e.repeat){e.preventDefault();jump()}else if((e.code==='KeyJ'||e.code==='KeyX'||e.code==='KeyK')&&!e.repeat)attack();else if(e.code==='KeyF'&&!e.repeat){toggleMount();gHud()}else if(e.code==='KeyM'&&!e.repeat)openMap();else if((e.code==='KeyP'||e.code==='Escape')&&!e.repeat){const pm=document.getElementById('pmenu');if(pm&&!pm.hidden)pmClose();else if(G.paused&&!ov.hidden)closeModal();else pauseMenu()}});
document.addEventListener('keyup',e=>{if(!G)return;if(KM[e.code])G.keys[KM[e.code]]=0;if(e.code==='Space'||e.code==='ArrowUp'||e.code==='KeyW')jumpRel()});
setInterval(()=>{const d=S.day;rollover();if(S.day!==d)render()},60000);

/* ================= BOOT ================= */
if(S.gold===undefined)S.gold=30;if(!S.ship)S.ship=1;migrateStages();kInit();i18Init();hydrate(document);updateTop();render();
const tcv=$('#titleCv'),tc=tcv.getContext('2d');let traf;
function sizeTitle(){const w=tcv.clientWidth||innerWidth,h=tcv.clientHeight||innerHeight,s=Math.max(2,Math.round(h/200));tcv.width=Math.ceil(w/s);tcv.height=Math.ceil(h/s);tc.imageSmoothingEnabled=false}
sizeTitle();addEventListener('resize',sizeTitle);
let tlast=0;(function tl(t){traf=requestAnimationFrame(tl);t=t||0;if(t-tlast<33)return;tlast=t;try{sceneRender(tcv,t,{b:0,mode:'dusk',title:1,vh:205,gy:.72,cam:-10})}catch(e){console.error(e)}})();
$('#portOk')&&$('#portOk').addEventListener('click',()=>{document.body.classList.add('portok')});
function goLand(){try{const d=document.documentElement;if(matchMedia('(pointer:coarse)').matches&&d.requestFullscreen&&!document.fullscreenElement){d.requestFullscreen({navigationUI:'hide'}).then(()=>{try{screen.orientation.lock('landscape').catch(()=>{})}catch(e){}}).catch(()=>{})}}catch(e){}}
(function(){const Q=[['star','أنجز مهامك اليومية… تُبنى مملكتك'],['heart','برّ الوالدين طريق الأبطال'],['pray','الصلاة نور، والنور يهزم الظلام'],['shield','الصدق والأمانة أقوى من كل سلاح'],['book','العلم كنزٌ لا يُسرق'],['people','بالتعاون تُبنى القرى وتُحمى الحصون'],['sun','من جدّ وجد، ومن زرع حصد'],['gem','الكنوز الحقيقية في الأخلاق']];let i=0;setInterval(()=>{const e=$('#tQuote');if(!e||$('#title').hidden)return;i=(i+1)%Q.length;e.classList.remove('in');void e.offsetWidth;e.innerHTML=ic(Q[i][0])+'<span>'+Q[i][1]+'</span>';hydrate(e);e.classList.add('in')},4200)})();
$('#startBtn').addEventListener('click',()=>{goLand();initAudio();curTrack=null;playTrack('title');SFX.win();setTimeout(()=>{cancelAnimationFrame(traf);$('#title').hidden=true;if(!S.gender){$('#setup').hidden=false;try{obShow(1)}catch(e){}}curTrack=null;playTrack(tab)},900)});
/* ================= LOADING SCREEN: knight on a winged horse ================= */
(function(){const L=document.getElementById('loader');if(!L)return;const cv=document.getElementById('ldCv'),c=cv.getContext('2d'),bar=document.getElementById('ldBar'),pct=document.getElementById('ldPct');
  const W=200,H=112;cv.width=W;cv.height=H;c.imageSmoothingEnabled=false;
  const stars=Array.from({length:70},(_,i)=>[hsh2(i,1,9)*W,hsh2(i,2,9)*H*.7,hsh2(i,3,9)]);
  const clouds=Array.from({length:9},(_,i)=>({x:hsh2(i,4,9)*W*1.4,y:H*.62+hsh2(i,5,9)*H*.32,w:30+hsh2(i,6,9)*40,s:.25+hsh2(i,7,9)*.5,d:hsh2(i,8,9)}));
  const FR={};let done=0,t0=performance.now(),prog=0,shown=0,fin=false;
  // warm-up work, spread over frames: pegasus gallop frames, hero horse gaits, trees
  const jobs=[];for(let f=0;f<24;f++)jobs.push(()=>{const sv=MOPT.m;MOPT.m='pegasus';MOPT.nr=0;try{FR[f]=monarchSprite0(f,'trot')}finally{MOPT.m=sv}});
  for(const m of ['walk','trot','gallop'])for(let f=0;f<24;f+=3)jobs.push(()=>{const sv=MOPT.m;MOPT.m=(S&&S.mount)||'horse';try{monarchSprite0(f,m)}finally{MOPT.m=sv}});
  for(let k=0;k<14;k++)jobs.push(()=>{try{treeK(0,k*37)}catch(e){}});
  const total=jobs.length;
  function sky(t){let g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0c1024');g.addColorStop(.55,'#2a2448');g.addColorStop(1,'#5a3e5e');c.fillStyle=g;c.fillRect(0,0,W,H);
    for(const[x,y,b] of stars){const tw=.45+.55*Math.abs(Math.sin(t/700+b*20));c.fillStyle=`rgba(255,250,230,${(.35+b*.6)*tw})`;c.fillRect(Math.round(x),Math.round(y),b>.85?2:1,1)}
    const mx=W*.8,my=H*.24;g=c.createRadialGradient(mx,my,2,mx,my,30);g.addColorStop(0,'rgba(255,240,200,.45)');g.addColorStop(1,'rgba(255,240,200,0)');c.fillStyle=g;c.fillRect(mx-30,my-30,60,60);
    c.fillStyle='#f4ead2';c.beginPath();c.arc(mx,my,9,0,7);c.fill();c.fillStyle='#e0d2b0';c.fillRect(mx-4,my-3,3,2);c.fillRect(mx+2,my+2,2,2);c.fillRect(mx-1,my+4,2,1)}
  function cloud(cl,t,front){const x=Math.round(((cl.x-t*.02*cl.s*(front?2.2:1))%(W*1.4)+W*1.4)%(W*1.4)-W*.2),y=Math.round(cl.y),w=cl.w;
    const cols=front?['#6a5a80','#8a789c','#b09cba']:['#3e3658','#544a70','#6c5e86'];for(let k=0;k<3;k++){c.fillStyle=cols[k];const yy=y-k*2;for(let i=0;i<5;i++){const cx=x+i*w/5,r=w*(.16+.06*Math.sin(i*1.7+cl.d*9))-k*1.5;if(r>0)c.fillRect(Math.round(cx-r),Math.round(yy-r*.6),Math.round(r*2),Math.round(r*.9))}}}
  function draw(t){sky(t);clouds.forEach(cl=>cloud(cl,t,0));
    const fk=Object.keys(FR);if(fk.length){const fr=Math.floor(t/62)%24,sp=FR[fr]||FR[fk[fk.length-1]],sc=.62,bob=Math.sin(t/420)*3,x=W*.5,y=H*.5+bob;
      try{const pa=pxArt(sp.cv,0,0,sp.cv.width,sp.cv.height,Math.round(sp.W*sc),Math.round(sp.H*sc));c.drawImage(pa,Math.round(x-pa.width/2),Math.round(y-pa.height/2))}catch(e){}
      // wind streaks behind
      for(let k=0;k<6;k++){const u=((t/600+k/6)%1),yy=Math.round(y-8+k*5),xx=Math.round(x-30-u*60);c.fillStyle=`rgba(220,230,255,${.5*(1-u)})`;c.fillRect(xx,yy,8+k%3*3,1)}}
    clouds.forEach((cl,i)=>{if(i%3===0)cloud(cl,t,1)})}
  function step(now){if(fin)return;const tb=performance.now();while(done<total&&performance.now()-tb<10){try{jobs[done]()}catch(e){}done++}
    prog=done/total;const minT=Math.min(1,(now-t0)/2400),target=Math.min(prog,minT);shown+=(target-shown)*.18;if(target>=1&&shown>.995)shown=1;
    bar.style.width=(shown*100).toFixed(1)+'%';pct.textContent=Math.round(shown*100)+'%';draw(now);
    if(shown>=1){fin=true;setTimeout(()=>{L.classList.add('out');setTimeout(()=>{L.hidden=true},650)},250);return}requestAnimationFrame(step)}
  requestAnimationFrame(step)})();
