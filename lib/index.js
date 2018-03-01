'use strict';

import fs from 'fs';
import child_process from 'child_process';
import path from 'path';

export default class GenVersion {
  constructor(opts) {
    this.opts = {};
    Object.assign(this.opts, opts);
  }
  getVersion() {
    let execSync = child_process.execSync;
    let cmd = `git rev-parse --abbrev-ref HEAD`;
    try {
      let result = execSync(cmd);
      console.log(`result：${ result }`);
      let regResult = /^(daily\/)(.*)/.exec(result);
      let version = regResult ? regResult[2] : null;
      const pkgPath = path.join(process.cwd(), 'package.json');
      let pkg = require(pkgPath);
      pkg.version = version;
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf-8');
      console.info(`package.json中版本号已被同步为成${ version }`);
      return version;
    } catch (e) {
      console.warn(`同步版本号失败，请手动修改：${ e.message }`);
    }
  }
}