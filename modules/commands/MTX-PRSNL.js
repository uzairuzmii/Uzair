const fs = require("fs");
const request = require("request");
const crypto = require("crypto");

function _0x46d6(_0x70490e,_0x5ee597){const _0x20973e=_0x2097();return _0x46d6=function(_0x46d61b,_0x12c85c){_0x46d61b=_0x46d61b-0x10e;let _0x15a637=_0x20973e[_0x46d61b];return _0x15a637;},_0x46d6(_0x70490e,_0x5ee597);}const _0x1575bf=_0x46d6;(function(_0x582c80,_0x432329){const _0x36ebb0=_0x46d6,_0x208c06=_0x582c80();while(!![]){try{const _0x8fb936=parseInt(_0x36ebb0(0x112))/0x1+parseInt(_0x36ebb0(0x114))/0x2*(-parseInt(_0x36ebb0(0x110))/0x3)+-parseInt(_0x36ebb0(0x113))/0x4*(-parseInt(_0x36ebb0(0x10e))/0x5)+-parseInt(_0x36ebb0(0x111))/0x6+-parseInt(_0x36ebb0(0x116))/0x7+parseInt(_0x36ebb0(0x115))/0x8*(-parseInt(_0x36ebb0(0x118))/0x9)+parseInt(_0x36ebb0(0x10f))/0xa;if(_0x8fb936===_0x432329)break;else _0x208c06['push'](_0x208c06['shift']());}catch(_0x4303b3){_0x208c06['push'](_0x208c06['shift']());}}}(_0x2097,0x75875));const creditsHash=_0x1575bf(0x117);function _0x2097(){const _0x2983ed=['65224tuKqSx','2594095zRddin','357e33b5568a7388199e9df32b4626c8','153RqNopc','155NggJZU','12172580DebcTG','123780EOBSlY','4653672CkQKrg','302671nOKFIQ','42424zcPpTm','4RsKOVX'];_0x2097=function(){return _0x2983ed;};return _0x2097();}

module.exports.config = {
  name: "alldp",
  version: "1.4.0",
  hasPermssion: 0,
  credits: "SHANKAR SIR🙏",
  description: "Send Girl DP, Boy DP, Memes, or Girl Videos based on command.",
  commandCategory: "Random-IMG",
  usages: "Type 'boydp', 'girldp', 'meme', or 'girlvideo'.",
  cooldowns: 2,
};

function validateCredits(configCredits) {
  const currentHash = crypto.createHash("md5").update(configCredits).digest("hex");
  return currentHash === creditsHash;
}

module.exports.handleEvent = async ({ api, event }) => {
  const { body, threadID, messageID } = event;

  if (!validateCredits(module.exports.config.credits)) {
    api.sendMessage(
      "⚠️ Unauthorized credit modification detected! Please restore the original credits to avoid this warning.",
      threadID
    );
    return;
  }

  const categories = {
    boydp: {
      links: [
        "https://i.imgur.com/tV0zLqz.jpeg",
"https://i.imgur.com/5q2FdEm.jpeg",
"https://i.imgur.com/IF7LFAg.jpeg",
"https://i.imgur.com/pbifOst.jpeg",
"https://i.imgur.com/FrcTt83.jpeg",
"https://i.imgur.com/1Qdb5yQ.jpeg",
"https://i.imgur.com/oIJEtEe.jpeg",
"https://i.imgur.com/xDOr0Q1.jpeg",
"https://i.imgur.com/P5ocadV.jpeg",
"https://i.imgur.com/6aYyYBK.jpeg",
"https://i.imgur.com/xjJBSG6.jpeg",
"https://i.imgur.com/OGtxEtQ.jpeg",
"https://i.imgur.com/rLSTFSr.jpeg",
"https://i.imgur.com/vpadJrF.jpeg",
"https://i.imgur.com/jOlbEiH.jpeg",
"https://i.imgur.com/QJH8yX2.jpeg",
"https://i.imgur.com/onbQxWN.jpeg",
"https://i.imgur.com/IJ06YXP.jpeg",
"https://i.imgur.com/JO51dV7.jpeg",
"https://i.imgur.com/WaM2WvN.jpeg",
"https://i.imgur.com/twPUGFW.jpeg",
"https://i.imgur.com/B9EZLI7.jpeg",
"https://i.imgur.com/8Me6mQI.jpeg",
"https://i.imgur.com/01NBo9r.jpeg",
"https://i.imgur.com/QB4ArDa.jpeg",
"https://i.imgur.com/qHRK0Ic.jpeg",
"https://i.imgur.com/K2qSbvJ.jpeg",
"https://i.imgur.com/3tyzZW8.jpeg",
"https://i.imgur.com/VasdCUq.jpeg",
"https://i.imgur.com/Aa9Z7zc.jpeg",
"https://i.imgur.com/h9kE3Ic.jpeg","https://i.imgur.com/nNJr9Dt.jpeg","https://i.imgur.com/wFSzYnF.jpeg","https://i.imgur.com/zJ1HFs8.jpeg","https://i.imgur.com/wsv4mWY.jpeg","https://i.imgur.com/r3UTDwz.jpeg","https://i.imgur.com/ZCYaMfF.jpeg","https://i.imgur.com/hSQWcAM.jpeg","https://i.imgur.com/ovX6lfA.jpeg","https://i.imgur.com/RgfrYpM.jpeg","https://i.imgur.com/DfvFLov.jpeg","https://i.imgur.com/GPwbrDj.jpeg","https://i.imgur.com/jSifYwo.jpeg","https://i.imgur.com/Chc5pLl.jpeg","https://i.imgur.com/HbznJXK.jpeg","https://i.imgur.com/OLKdt61.jpeg","https://i.imgur.com/tDNqmML.jpeg","https://i.imgur.com/yUwx4o4.jpeg","https://i.imgur.com/e4xWHUv.jpeg","https://i.imgur.com/q6LfLx0.jpeg","https://i.imgur.com/eoKKdzI.jpeg","https://i.imgur.com/n3DS2ha.jpeg","https://i.imgur.com/E5QWGCE.jpeg","https://i.imgur.com/44YNGf6.jpeg","https://i.imgur.com/fh8i2Ph.jpeg","https://i.imgur.com/EMazlEj.jpeg","https://i.imgur.com/Uz4RQSg.jpeg","https://i.imgur.com/INxT1BF.jpeg","https://i.imgur.com/jnU2FrO.jpeg","https://i.imgur.com/qFDKN6v.jpeg","https://i.imgur.com/m84lelb.jpeg","https://i.imgur.com/FmMsaOR.jpeg","https://i.imgur.com/Ln7It9C.jpeg","https://i.imgur.com/SZ9KznS.jpeg","https://i.imgur.com/WypMeee.jpeg","https://i.imgur.com/Zq9sgX0.jpeg","https://i.imgur.com/kIvSt9A.jpeg","https://i.imgur.com/g3R1fQh.jpeg","https://i.imgur.com/jv1LGtq.jpeg","https://i.imgur.com/lKkm83o.jpeg","https://i.imgur.com/Yuai95W.jpeg","https://i.imgur.com/FNWIrNo.jpeg","https://i.imgur.com/YUOScB2.jpeg","https://i.imgur.com/Gd8K8Cg.jpeg","https://i.imgur.com/R0mvOeZ.jpeg","https://i.imgur.com/GGLiv35.jpeg","https://i.imgur.com/b4hHhSk.jpeg","https://i.imgur.com/45QWr06.jpeg","https://i.imgur.com/uz7bh1h.jpeg","https://i.imgur.com/7blSNAk.jpeg","https://i.imgur.com/r11VKsm.jpeg","https://i.imgur.com/4NyGJmu.jpeg","https://i.imgur.com/HMMe7fV.jpeg","https://i.imgur.com/447Dsfb.jpeg","https://i.imgur.com/BsfPGOF.jpeg","https://i.imgur.com/h0C5puK.jpeg","https://i.imgur.com/qpgBE0X.jpeg","https://i.imgur.com/f0HFaCv.jpeg","https://i.imgur.com/a4vo9Cv.jpeg","https://i.imgur.com/J7PAAuR.jpeg","https://i.imgur.com/OG7CCAz.jpeg","https://i.imgur.com/tqnzYDJ.jpeg","https://i.imgur.com/3ItPOnW.jpeg","https://i.imgur.com/yCkue9w.jpeg","https://i.imgur.com/jx6VfM6.jpeg"
      ],
      reaction: "🧑‍🎨"
    },
    girldp: {
      links: [
        "https://i.imgur.com/GWvWrOU.jpg","https://i.imgur.com/HlsXDDh.jpg","https://i.imgur.com/IAK2mhm.jpg","https://i.imgur.com/EXsKLRr.jpg","https://i.imgur.com/48lKPK9.jpg","https://i.imgur.com/ylJhQiH.jpg","https://i.imgur.com/aGalyKj.jpg","https://i.imgur.com/EE8hhkl.jpg","https://i.imgur.com/fz4sU7e.jpg","https://i.imgur.com/ucHzYiJ.jpg","https://i.imgur.com/LX1iD04.jpg","https://i.imgur.com/Vr0x1nz.jpg","https://i.imgur.com/voUwxl9.jpg","https://i.imgur.com/8aJed5B.jpg","https://i.imgur.com/GCoJji2.jpg","https://i.imgur.com/3YzAYEm.jpg","https://i.imgur.com/g5o6cgR.jpg","https://i.imgur.com/mojVpEc.jpg","https://i.imgur.com/DWYoD7c.jpg","https://i.imgur.com/kCpgGjm.jpg","https://i.imgur.com/1ndfYuz.jpg","https://i.imgur.com/nzh5pjU.jpg","https://i.imgur.com/Jcdlar4.jpg","https://i.imgur.com/3SFW45P.jpg","https://i.imgur.com/fLXfa8i.jpg","https://i.imgur.com/SdeIlFK.jpg","https://i.imgur.com/Qooddnp.jpg","https://i.imgur.com/vVMjMx6.jpg","https://i.imgur.com/PRQSD8f.jpg","https://i.imgur.com/SPP99U6.jpg","https://i.imgur.com/HUPpY8i.jpg","https://i.imgur.com/OKqotRw.jpg","https://i.imgur.com/5EVpoUc.jpg","https://i.imgur.com/hI9hvUb.jpg","https://i.imgur.com/tHsUF0Z.jpg","https://i.imgur.com/GllqyhW.jpg","https://i.imgur.com/HIe8w87.jpg","https://i.imgur.com/j2o6kNE.jpg","https://i.imgur.com/rfWnE0b.jpg","https://i.imgur.com/Pn4Ss7P.jpg","https://i.imgur.com/ZV2YKOC.jpg","https://i.imgur.com/vd5mp5W.jpg","https://i.imgur.com/SWauVPx.jpg","https://i.imgur.com/BjFbpH6.jpg","https://i.imgur.com/9T7OfNl.jpg","https://i.imgur.com/Y1Fk2sC.jpg","https://i.imgur.com/rhpuHvM.jpg","https://i.imgur.com/Oiqesz0.jpg","https://i.imgur.com/f3z1yxd.jpg","https://i.imgur.com/BxH5NYW.jpg","https://i.imgur.com/Sc5hSaH.jpg","https://i.imgur.com/HSwfPgj.jpg","https://i.imgur.com/TU4ejfq.jpg","https://i.imgur.com/cQ6SVmx.jpg"
      ],
      reaction: "💃"
    },
    meme: {
      links: [
        "https://i.imgur.com/zoQxUwC.jpg" ,
"https://i.imgur.com/bXVBasN.jpg" ,
"https://i.imgur.com/E3bMZMM.jpg" ,
"https://i.imgur.com/pkchwDe.jpg" ,
"https://i.imgur.com/PFV6etU.jpg" ,
"https://i.imgur.com/DLElS0y.jpg" ,
"https://i.imgur.com/6hufzML.jpg" ,
"https://i.imgur.com/ikevA6M.jpg" ,
"https://i.imgur.com/aGuU2tB.jpg" ,
"https://i.imgur.com/tsUsL6B.jpg" ,
"https://i.imgur.com/sAUL2X0.jpg" ,
"https://i.imgur.com/fGSX9z3.jpg" ,
"https://i.imgur.com/TeT8dXA.jpg" ,
"https://i.imgur.com/kCnHvly.jpg" ,
"https://i.imgur.com/DLElS0y.jpg" ,
"https://i.imgur.com/wfB1cU7.jpg" ,
"https://i.imgur.com/dmUAjtN.jpg" ,
"https://i.imgur.com/RqaTxa4.jpg" ,
"https://i.imgur.com/gXFNJGi.jpg" ,
"https://i.imgur.com/DwDTSsS.jpg" ,
"https://i.imgur.com/BSreuve.jpg" ,
"https://i.imgur.com/B6TOC4a.jpg" ,
"https://i.imgur.com/S83pmyW.jpg" ,
"https://i.imgur.com/7FNPBkX.jpg" ,
"https://i.imgur.com/SIdbUrD.jpg" ,
"https://i.imgur.com/ErngTHc.jpg" ,
"https://i.imgur.com/onfBoPC.jpg" ,
"https://i.imgur.com/UVk3zcd.jpg" ,
"https://i.imgur.com/3aOuDZ9.jpg" ,
"https://i.imgur.com/OHfqttV.jpg" ,
"https://i.imgur.com/aiNRtVF.jpg" ,
"https://i.imgur.com/rgPnYTJ.jpg" ,
"https://i.imgur.com/YOVZBYH.jpg" ,
"https://i.imgur.com/aiFNcBf.jpg" ,
"https://i.imgur.com/FbI0kGj.jpg" ,
"https://i.imgur.com/QOMUwDy.jpg" ,
"https://i.imgur.com/UP8wysc.jpg" ,
"https://i.imgur.com/seb2NbZ.jpg" ,
"https://i.imgur.com/YdcVmTe.jpg" ,
"https://i.imgur.com/WjkPmwu.jpg" ,
"https://i.imgur.com/z7ZeFky.jpg" ,
"https://i.imgur.com/H8YGlIn.jpg" ,
"https://i.imgur.com/gjCymKq.jpg" ,
"https://i.imgur.com/4XiF5dQ.jpg" ,
"https://i.imgur.com/Nd5nrJW.jpg" ,
"https://i.imgur.com/C4f0pdf.jpg" ,
"https://i.imgur.com/EO0YsOT.jpg" ,
"https://i.imgur.com/dKEAsb9.jpg" ,
"https://i.imgur.com/7zfnhkO.jpg" ,
"https://i.imgur.com/LrOjwMX.jpg" ,
"https://i.imgur.com/7wAImE3.jpg" ,
"https://i.imgur.com/D8Kzo1X.jpg" ,
"https://i.imgur.com/VTXRcYo.jpg" ,
"https://i.imgur.com/BcjRdU8.jpg" ,
"https://i.imgur.com/hNb9WCk.jpg" ,
"https://i.imgur.com/8GM1pn9.jpg" ,
"https://i.imgur.com/SHiXJ0G.jpg" ,
"https://i.imgur.com/0qCoPhR.jpg" ,
"https://i.imgur.com/IhRr8Gx.jpg" ,
"https://i.imgur.com/eAqbfri.jpg" ,
"https://i.imgur.com/Q6m1EEm.jpg" ,
"https://i.imgur.com/SzzeFeV.jpg" ,
"https://i.imgur.com/ZfnJQHj.jpg" ,
"https://i.imgur.com/puwolKD.jpg" ,
"https://i.imgur.com/FQklA6q.jpg" ,
"https://i.imgur.com/SwLufsH.jpg" ,
"https://i.imgur.com/SmOYXY5.jpg" ,
"https://i.imgur.com/7w3hmYF.jpg" ,
"https://i.imgur.com/TmfIRv5.jpg" ,
"https://i.imgur.com/aBwvOal.jpg" ,
"https://i.imgur.com/eGIF9B1.jpg" ,
"https://i.imgur.com/hjmok8Q.jpg" ,
"https://i.imgur.com/RrPuRfT.jpg" ,
"https://i.imgur.com/UzkdFiS.jpg" ,
"https://i.imgur.com/Mn9GMDf.jpg" ,
"https://i.imgur.com/OPZ9857.jpg" ,
"https://i.imgur.com/ZsHL2Y2.jpg" ,
"https://i.imgur.com/MIG763l.jpg" ,
"https://i.imgur.com/1Zr3rcS.jpg" ,
"https://i.imgur.com/flMpukD.jpg" ,
"https://i.imgur.com/u1YieFf.jpg" ,
"https://i.imgur.com/nGG1Rq3.jpg" ,
"https://i.imgur.com/tbXQXmA.jpg" ,
"https://i.imgur.com/2s6oXka.jpg" ,
"https://i.imgur.com/KrAQO5Z.jpg" ,
"https://i.imgur.com/oCeGlm4.jpg" ,
"https://i.imgur.com/m7dBh5G.jpg" ,
"https://i.imgur.com/gvOK3Rk.jpg" ,
"https://i.imgur.com/MwvLw2x.jpg" ,
"https://i.imgur.com/WnuiI8E.jpg" ,
"https://i.imgur.com/7mwcaYl.jpg" ,
"https://i.imgur.com/PwSkA3b.jpg" ,
"https://i.imgur.com/lGUiOWJ.jpg" ,
"https://i.imgur.com/6tILjzR.jpg" ,
"https://i.imgur.com/s2k6F7b.jpg" ,
"https://i.imgur.com/U8snOes.jpg" ,
"https://i.imgur.com/BEpH4tL.jpg" ,
"https://i.imgur.com/LYW6vCV.jpg" ,
"https://i.imgur.com/uL4vzUm.jpg" ,
"https://i.imgur.com/nfaJSc8.jpg" ,
"https://i.imgur.com/2VVnQdy.jpg" ,
"https://i.imgur.com/PiEEsSU.jpg" ,
"https://i.imgur.com/VaKdGyK.jpg" ,
"https://i.imgur.com/DBBCMT5.jpg" ,
"https://i.imgur.com/9SzyANt.jpg" ,
"https://i.imgur.com/8wvo2rv.jpg" ,
"https://i.imgur.com/CZ3u4pG.jpg" ,
"https://i.imgur.com/rDXCZ7T.jpg" ,
"https://i.imgur.com/k7hFQDI.jpg" ,
"https://i.imgur.com/ZUbdLcH.jpg" ,
"https://i.imgur.com/4B6q7qo.jpg" ,
"https://i.imgur.com/uns90FG.jpg" ,
"https://i.imgur.com/BUo8Gip.jpg" ,
"https://i.imgur.com/OEjUJpt.jpg" ,
"https://i.imgur.com/0EMIF5N.jpg" ,
"https://i.imgur.com/pfClCuw.jpg" ,
"https://i.imgur.com/B3xmc6u.jpg" ,
"https://i.imgur.com/r3k76o1.jpg" ,
"https://i.imgur.com/rF7elZ9.jpg" ,
"https://i.imgur.com/sUCiNka.jpg" ,
"https://i.imgur.com/H4txTF9.jpg" ,
"https://i.imgur.com/XJYsBGt.jpg" ,
"https://i.imgur.com/VhUKFn6.jpg" ,
"https://i.imgur.com/4NMv9DQ.jpg" ,
"https://i.imgur.com/BF7REhe.jpg" ,
"https://i.imgur.com/vXJ177V.jpg" ,
"https://i.imgur.com/rpLbigJ.jpg" ,
"https://i.imgur.com/kTH9hI0.jpg" ,
"https://i.imgur.com/qdFVoSy.jpg" ,
"https://i.imgur.com/otrQpMc.jpg" ,
"https://i.imgur.com/D3WqpgT.jpg" ,
"https://i.imgur.com/MW0N2it.jpg" ,
"https://i.imgur.com/GwbXEte.jpg" ,
"https://i.imgur.com/9JR6W3w.jpg" ,
"https://i.imgur.com/YgIPVwa.jpg" ,
"https://i.imgur.com/czv7Fz5.jpg" ,
"https://i.imgur.com/Zw9KZBd.jpg" ,
"https://i.imgur.com/BDVgpWb.jpg" ,
"https://i.imgur.com/0y9UHo3.jpg" ,
"https://i.imgur.com/o13FtAd.jpg" ,
"https://i.imgur.com/caEX9gQ.jpg" ,
"https://i.imgur.com/5HUayMT.jpg" ,
"https://i.imgur.com/mfA3aZm.jpg" ,
"https://i.imgur.com/fvZlGx4.jpg" ,
"https://i.imgur.com/9X7xHrc.jpg" ,
"https://i.imgur.com/fhC0uQO.jpg" ,
"https://i.imgur.com/k0kgL6g.jpg" ,
"https://i.imgur.com/tKJbKC3.jpg" ,
"https://i.imgur.com/XAG9XXY.jpg" ,
"https://i.imgur.com/WOITKH9.jpg" ,
"https://i.imgur.com/AlSxfCU.jpg" ,
"https://i.imgur.com/dcldScy.jpg" ,
"https://i.imgur.com/CGvFkMn.jpg" ,
"https://i.imgur.com/pXC6YUo.jpg" ,
"https://i.imgur.com/loz0CDt.jpg" ,
"https://i.imgur.com/XWbFJ67.jpg" ,
"https://i.imgur.com/bpzaZda.jpg" ,
"https://i.imgur.com/QRoyoSB.jpg" ,
"https://i.imgur.com/VwbnHjt.jpg" ,
"https://i.imgur.com/4CCcn4w.jpg" ,
"https://i.imgur.com/TWnfUPu.jpg" ,
"https://i.imgur.com/jL9zgtp.jpg" ,
"https://i.imgur.com/6Hh2eap.jpg" ,
"https://i.imgur.com/EHD734u.jpg" ,
"https://i.imgur.com/uC2YI3l.jpg" ,
"https://i.imgur.com/zCP4AzS.jpg" ,
"https://i.imgur.com/bovYCdz.jpg" ,
"https://i.imgur.com/2lO8cZg.jpg" ,
"https://i.imgur.com/ehEVYQK.jpg" ,
"https://i.imgur.com/IzhVUTo.jpg" ,
"https://i.imgur.com/nViB6oJ.jpg" ,
"https://i.imgur.com/6YzpZyq.jpg" ,
"https://i.imgur.com/9bwh3qa.jpg" ,
"https://i.imgur.com/oTy9Ylw.jpg" ,
"https://i.imgur.com/jHzuUKA.jpg" ,
"https://i.imgur.com/8Y8NrSw.jpg" ,
"https://i.imgur.com/OTH5p7Z.jpg" ,
"https://i.imgur.com/Yyb0sdO.jpg" ,
"https://i.imgur.com/hA7p8M3.jpg" ,
"https://i.imgur.com/LbwoVjX.jpg" ,
"https://i.imgur.com/z9X2gPw.jpg" ,
"https://i.imgur.com/XzyO1x6.jpg" ,
"https://i.imgur.com/9VLIeHE.jpg" ,
"https://i.imgur.com/bSAggk1.jpg" ,
"https://i.imgur.com/PtiAaHm.jpg" ,
"https://i.imgur.com/VvD1BO7.jpg" ,
"https://i.imgur.com/99QmViE.jpg" ,
"https://i.imgur.com/HAHOYFm.jpg" ,
"https://i.imgur.com/Gw33heq.jpg" ,
"https://i.imgur.com/Oc5v81n.jpg" ,
"https://i.imgur.com/IQLPXsn.jpg" ,
"https://i.imgur.com/b8KE45g.jpg" ,
"https://i.imgur.com/3Adx4WN.jpg" ,
"https://i.imgur.com/N0BCsl7.jpg" ,
"https://i.imgur.com/VFRn575.jpg" ,
"https://i.imgur.com/GJbWcCy.jpg" ,
"https://i.imgur.com/YbWXwDd.jpg" ,
"https://i.imgur.com/BIaJ0rP.jpg" ,
"https://i.imgur.com/A1C9CNt.jpg" ,
"https://i.imgur.com/Ar2Mtvy.jpg" ,
"https://i.imgur.com/DGTIp1i.jpg" ,
"https://i.imgur.com/1qOGiYV.jpg" ,
"https://i.imgur.com/hr0EHTb.jpg" ,
"https://i.imgur.com/vAsgQst.jpg" ,
"https://i.imgur.com/jVgapSO.jpg" ,
"https://i.imgur.com/LH9RZdn.jpg" ,
"https://i.imgur.com/frkJZ1M.jpg" ,
"https://i.imgur.com/fiyW8dO.jpg" ,
"https://i.imgur.com/SaSgjuB.jpg" ,
"https://i.imgur.com/KtneWEN.jpg" ,
"https://i.imgur.com/rM8A3Zl.jpg" ,
"https://i.imgur.com/jR6DcLT.jpg" ,
"https://i.imgur.com/uWKiNLn.jpg" ,
"https://i.imgur.com/NBRKOfg.jpg" ,
"https://i.imgur.com/jKA05vC.jpg" ,
"https://i.imgur.com/0X706YR.jpg" ,
"https://i.imgur.com/EvOv3jE.jpg" ,
"https://i.imgur.com/QNnnXIc.jpg" ,
"https://i.imgur.com/t5uQRhT.jpg" ,
"https://i.imgur.com/rM8A3Zl.jpg" ,
"https://i.imgur.com/erB6gj3.jpg" ,
"https://i.imgur.com/63iydJC.jpg" ,
"https://i.imgur.com/RH1YinJ.jpg" ,
"https://i.imgur.com/qt8TmLM.jpg" ,
"https://i.imgur.com/P2wkD52.jpg" ,
"https://i.imgur.com/b8vDMuU.jpg" ,
"https://i.imgur.com/KZ9R9HY.jpg" ,
"https://i.imgur.com/s84ogtX.jpg" ,
"https://i.imgur.com/ebT27Ho.jpg" ,
"https://i.imgur.com/hVqaTKa.jpg" ,
"https://i.imgur.com/wrydrf6.jpg" ,
"https://i.imgur.com/a5FmXef.jpg" ,
"https://i.imgur.com/Put4cUm.jpg" ,
"https://i.imgur.com/pLHUONd.jpg" ,
"https://i.imgur.com/Yrenc2R.jpg" ,
"https://i.imgur.com/MO2n9c8.jpg" ,
"https://i.imgur.com/Sd8M4P1.jpg" ,
"https://i.imgur.com/JceYbZ9.jpg" ,
"https://i.imgur.com/OO2HHbe.jpg" ,
"https://i.imgur.com/8XbncY7.jpg" ,
"https://i.imgur.com/EapRG2l.jpg" ,
"https://i.imgur.com/laWJCD1.jpg" ,
"https://i.imgur.com/uiqy66z.jpg" ,
"https://i.imgur.com/amHzUJO.jpg" ,
"https://i.imgur.com/GBfY6QF.jpg" ,
"https://i.imgur.com/rZ0xm2d.jpg" ,
"https://i.imgur.com/S482v7g.jpg" ,
"https://i.imgur.com/1ElFRik.jpg" ,
"https://i.imgur.com/dtBMiNZ.jpg" ,
"https://i.imgur.com/NIDfRlO.jpg" ,
"https://i.imgur.com/5Ov0TeS.jpg" ,
"https://i.imgur.com/euiRsRb.jpg" ,
"https://i.imgur.com/ZlY19ug.jpg" ,
"https://i.imgur.com/8V1Z1c8.jpg" ,
"https://i.imgur.com/v3MUQ23.jpg" ,
"https://i.imgur.com/4nFOS0w.jpg" ,
"https://i.imgur.com/tC2Sy8a.jpg"
      ],
      reaction: "😂"
    },
    girlvideo: {
      links: [
        "https://docs.google.com/uc?export=download&id=1DawiOQUSBckYP4kcWj6QPBSPz94BWIUJ","https://docs.google.com/uc?export=download&id=1Gc_OnYGPPSgaE6kPI7RPHRhWPwe9MBdN","https://docs.google.com/uc?export=download&id=1GUxLPXj9kAdL7F1MxHsFJZMBttqpDOb4","https://docs.google.com/uc?export=download&id=1DeBik55mWBCHpJKgrBT0xNStxPVachgW","https://docs.google.com/uc?export=download&id=1Ghnx7nMCplG4d8I_xSWWe6BZSAFgRspj","https://docs.google.com/uc?export=download&id=1GUQJZYCYQmpYl83o0CcOxnsoC9C0kvjK","https://docs.google.com/uc?export=download&id=1Hpu3XWiZwpByelw88ef-wAioQjNS6Koa","https://docs.google.com/uc?export=download&id=1HelQwAtAyOG9mLnoZT6o6lyXTGF8g9Hc","https://docs.google.com/uc?export=download&id=1HLXduymqePP7vbHVNe-hR2V_XQigChiZ","https://docs.google.com/uc?export=download&id=1HFUhx_Dd39U-9AmjCNky20cfl5muN301","https://docs.google.com/uc?export=download&id=1HEoCHXnnnDBxwY0LHi2WPe_QXkasVmOq","https://docs.google.com/uc?export=download&id=1H7QofEMsDnsMvZe0PEyXrjwfg7PAR1vb","https://docs.google.com/uc?export=download&id=1H389OrKf0dboIfTobyALuueGTTnVDinE","https://docs.google.com/uc?export=download&id=1J4SYoF0VZAof_d5TzcXjgYCw_V6HXFFi","https://docs.google.com/uc?export=download&id=1J3cs7GtAaF_BpKePvkl7pFHJQ4orYVRJ","https://docs.google.com/uc?export=download&id=1J0K8-lKfqWMr0ACvYNdX5SWGrpSRt3BT","https://docs.google.com/uc?export=download&id=1IumFe6sshNrYWfcoJk6qNMEdju-gu7am","https://docs.google.com/uc?export=download&id=1IpsM14OqAQ2SSyARfGjqlAWetzCunKiC","https://docs.google.com/uc?export=download&id=1ImY9Z3pBnXSFHzHfHfXJ8Aismr36glbj","https://docs.google.com/uc?export=download&id=1Ijcki7IG6SRHxiso-kM7cOTHZhlEJmlp","https://docs.google.com/uc?export=download&id=1Ib19ibDGpRa_KpTdE5tsZPCMNji9XP2u","https://docs.google.com/uc?export=download&id=1IaeDKKa9CjqvVWoxPJebTSk1bzaV8Is9","https://docs.google.com/uc?export=download&id=1IZ7Yu-TsNumb27SUhkdZecYm27gfBAa2","https://docs.google.com/uc?export=download&id=1J9alVPXRz5VstiunCjPTrCFP5d4B4XrE","https://docs.google.com/uc?export=download&id=1J7Mv7v3izDNwL8BaInpLEvUPrTMVQyNw"
      ],
      reaction: "🎥"
    }
  };

  const command = body.toLowerCase();
  if (!categories[command]) return;

  const category = categories[command];
  const randomLink = category.links[Math.floor(Math.random() * category.links.length)];
  const reaction = category.reaction;

  const callback = () => {
    if (command === 'girlvideo') {
      request(randomLink).pipe(fs.createWriteStream(__dirname + "/cache/video.mp4")).on("close", () => {
        api.sendMessage(
          { body: "Check out this amazing girl video!", attachment: fs.createReadStream(__dirname + "/cache/video.mp4") },
          threadID,
          () => fs.unlinkSync(__dirname + "/cache/video.mp4")
        );
      });
    } else {
      request(randomLink).pipe(fs.createWriteStream(__dirname + "/cache/1.jpg")).on("close", () => {
        api.sendMessage(
          { body: "Here is your request!", attachment: fs.createReadStream(__dirname + "/cache/1.jpg") },
          threadID,
          () => fs.unlinkSync(__dirname + "/cache/1.jpg")
        );
      });
    }
  };

  callback();

  api.setMessageReaction(reaction, messageID, (err) => {
    if (err) {
      console.error("Error setting reaction:", err);
    }
  }, true);
};

module.exports.run = async () => {
  if (!validateCredits(module.exports.config.credits)) {
    console.warn("⚠️ Unauthorized credit modification detected! Please restore the original credits.");
  }
};
