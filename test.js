const fse = require("fs-extra");
const Promise = require("bluebird");
const _ = require("lodash");
const jsmediatags = require('jsmediatags')
const music =
  "/data/Musique/Definitif/30 Seconds to Mars/30 Seconds to Mars/01 Capricorn (A Brand New Name).mp3";


  jsmediatags.read(music, { onSuccess: function(tag) {
      var tags = tag.tags;
      const tagsToDelete = ["picture", "APIC", "IPLS", "PRIV", "TCOM", "TENC", "TPE3", "TYER", "USLT", "COMM", "RVA2", "TALB", "TCON", "TDAT", "TIT2", "TMED", "TORY", "TPE1", "TPE2", "TPOS", "TPUB", "TRCK", "TSO2", "TSOP", "TSRC", "TXXX", "ER", "UFID"];
      tagsToDelete.map(tagToDelete => delete tags[tagToDelete]);
      tags.path = music;
      console.log(tags)
    }, onError: _ => resolve({ path: music }) });
