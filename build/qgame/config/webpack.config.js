const fs = require('fs')
const path = require('path')

const outputPath = path.join(process.cwd(), './build')
const enginePath = path.join(process.cwd(), './engine')

function mkdirsSync (dirname) {
  if (fs.existsSync(dirname)) {
    return true
  }
  else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

function copyfile(src, dest) {
  if (fs.existsSync(src)) {
    const readable = fs.createReadStream(src)
    const writable = fs.createWriteStream(dest)
    readable.pipe(writable)
    readable.on('close', function () {
      // 拷贝完成
      writable.end()
    })
  }
}

function copyEngineFile (dir) {
  dir = dir || '.'
  let directory = path.join(enginePath, dir)

  fs.readdirSync(directory).forEach(function(file) {
    const fullpath = path.join(directory, file)
    const stat = fs.statSync(fullpath)
    const destPath = path.join('build', dir, path.basename(file))
    if (stat.isFile()) {
      copyfile(fullpath, destPath)
    }
    else if (stat.isDirectory()) {
      fs.mkdirSync(destPath)
      var subdir = path.join(dir, file)
      copyEngineFile(subdir)
    }
  })
}

module.exports = {
  postHook: function(webpackConf, options){
    // 设置externals
    webpackConf.externals = Object.assign(webpackConf.externals || {}, {"src/assets/Script/Framework/async.min.js":"commonjs src/assets/Script/Framework/async.min.js","src/cocos2d-runtime.js":"commonjs src/cocos2d-runtime.js","src/project.dev.js":"commonjs src/project.dev.js","src/qgame-adapter.js":"commonjs src/qgame-adapter.js","src/settings.js":"commonjs src/settings.js","jsb-adapter/engine/index.js":"commonjs jsb-adapter/engine/index.js","jsb-adapter/engine/rename-adapter.js":"commonjs jsb-adapter/engine/rename-adapter.js"})

    // copy engine文件
    mkdirsSync(outputPath)
    copyEngineFile()
  }
}
