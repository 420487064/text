const genFrames = (fix = { pre: "《 ", suf: " 》" }, normal, active, len) => {
  const frames = [];
  for (let i = 0; i <= len; i++) {
    let str = fix.pre;
    for (let j = 0; j < len; j++) {
      if (j < i) str += active;
      else str += normal;
    }
    frames[i] = str + fix.suf;
  }
  return frames;
}

module.exports = genFrames;