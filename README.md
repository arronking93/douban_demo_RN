## I.首页
#### 配置Tab栏
1. [框架](https://github.com/happypancake/react-native-tab-navigator)
* RN项目，推荐使用yarn装包
* View容器设置高度，才能显示内部内容
```js
container: {
  flex: 1
}
```
* 切换的实现：
```js
// 先自定义selectedTab
...
this.state = {
  selectedTab: 'home'
}
...

// 再结合各栏目自带的属性
selected={this.state.selectedTab === 'me'}
onPress={() => this.setState({selectedTab: 'me'})}
```

2. [图标](https://github.com/oblador/react-native-vector-icons)
* 其下分很多块，每一块都是字体库，如`FontAwesome.ttf`
* 若更改了Android目录下的文件，要查看效果，需要重新编译安装手机App
`react-native run-android`

> (?)注意：使用图标，需要使用 `Android SDK Manager` 安装 `Android SDK Build-tools 26.0.1` 并接收其 license;
> (?)MainApplication.java中下面这一项未修改成功，保持原状(其余功能仍可使用)
![d9e5a441c302fb5614b307039632f044.png](evernotecid://27EC7195-ACCF-412E-903C-21FE5B484259/appyinxiangcom/24470308/ENResource/p143)

#### 配置首页的轮播图

> 首页轮播图片URL地址
[图片地址1](http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg)
[图片地址2](http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg)
[图片地址3](http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg)

> [轮播图插件](https://github.com/leecade/react-native-swiper?utm_source=tuicool&utm_medium=referral)

1. 安装：`npm i react-native-swiper --save`

2. 导入：`import Swiper from 'react-native-swiper'`

3. 引入标签块
* Swiper的外层需要有高度的View标签
* 在Swiper身上，`showsPagination={false}`是用来控制页码的；`showsButtons={false}`是用来控制左右箭头显示与隐藏；`height={160}`是用来控制轮播图区域的高度的(可设置在外出View上)；`autoplay={true}`是用来控制自动轮播

4. 引入轮播图的样式：
```js
// 可在里面设置image的样式，不必在标签中设置(网络图片必须设置宽高)，用style.image引用
image:{
    width:'100%',
    height:'100%'
}
```

#### 首页六宫格的完成
* flex布局，所有View已经实现纵向弹性布局


## II.路由实现
 [官网](https://github.com/aksonov/react-native-router-flux)

1. 安装`npm i react-native-router-flux --save`

2. [配置](https://github.com/aksonov/react-native-router-flux/blob/master/docs/API.md)

3. [路由简单的DEMO](https://github.com/aksonov/react-native-router-flux/blob/v3/docs/MINI_TUTORIAL.md)
```jsx
  render() {
    return <Router sceneStyle={{ backgroundColor: 'white' }}>
      <Stack key="root">
        {/* 配置路由规则 */}
        {/* 注意，所有的路由规则，都应该写到这个位置 */}
        {/* 第一个 Scene 就是默认要展示的首页 */}
        {/* key 属性，表示路由的规则名称，将来可以使用这个 key ，进行编程式导航，每一个路由规则，都应该提供一个 唯一的key， key不能重复 */}
        <Scene key="app" component={App} title="" hideNavBar={true} />
        {/* 电影列表的路由规则 */}
        <Scene key="movielist" component={MovieList} title="热映电影列表" />
        <Scene key="moviedetail" component={MovieDetail} title="电影详情" />
      </Stack>
    </Router>
  }
```

4. 总结：
* 创建根组件Main.js，是App.js的外层
* `import {Router, Stack, Scene} from 'react-native-router-flux'`
Router相当于HashRouter；Stack是一个给路由分组的容器；Scene表示一个具体的路由规则，相当于Route

5. 路由跳转1--TouchableHighlight组件
* 用于封装视图，使其可以正确响应触摸操作
* 内部只能放置唯一的一个元素
* 属性onPress可以定义路由脚本，实现编程式导航
* 属性underlayColor可以设置触摸时显示的底色

6. 路由跳转2--Actions
* 与前面呼应，引入：
`import {Actions} from 'react-native-router-flux'`
* 直接拿到前面Scene中定义的key并传参
`Actions.movielist(params object)`

## III.渲染电影列表/详情

#### 豆瓣电影接口
* `?apikey=0df993c66c0c636e29ecbb5344252a4a`
* `&start=n&count=pagesize`
1. 电影列表数据：`https://api.douban.com/v2/movie/in_theaters`
2. 电影详细数据：`https://api.douban.com/v2/movie/subject/26309788`

#### 电影列表
=> 主要通过FlatList组件实现
1. 布局
```jsx
return <FlatList
    data={this.state.movies}
    keyExtractor={(item, i)=>i}
    renderItem = {({item})=>this.renderItem(item)}
/>
```

2. 美化：用StyleSheet.creat() 结合 ItemSeparatorComponent
* ItemSeparatorComponent 用在FlatList中，行与行之间的分隔线组件,不会出现在第一行之前和最后一行之后。
`ItemSeparatorComponent={this.getSeparator}`
> getSeparator函数返回一个组件

3. 下拉加载更多：onEndReachedThreshold 和 onEndReached
* 前者决定当距离内容最底部还有多远时(比例形式)触发onEndReached回调

## IV.签名打包发布Release版本的apk安装包
请参考以下两篇文章：
[ReactNative之Android打包APK方法（趟坑过程）](http://www.jianshu.com/p/1380d4c8b596)
[React Native发布APP之签名打包APK](http://blog.csdn.net/fengyuzhengfan/article/details/51958848)
[React Native for Android 发布独立的安装包](http://blog.csdn.net/u013531824/article/details/51003775)

#### 如何发布一个apk
1. 先保证自己正确配置了所有的 RN 环境

2. 在 cmd 命令行中，运行这一句话`keytool -genkey -v -keystore my-release-key2.keystore -alias my-key-alias2 -keyalg RSA -keysize 2048 -validity 10000`
* 其中： `my-release-key.keystore` 表示你一会儿要生成的那个签名文件的名称
* `-alias`参数后面的别名是你将来为应用签名时所需要用到的，所以记得记录这个别名，这个名称可以根据自己的需求改动
* 当运行找个命令的时候，需要输入一系列的参数，找个口令的密码，【一定要找个小本本记下来】

3. 当生成了签名之后，这个签名，默认保存到了自己的用户目录下
* 会在当前工作目录生成

4. 将你的签名证书copy到 android/app 目录下。

5. 编辑 `android` -> `gradle.properties`文件，在最后，添加如下代码：
```
MYAPP_RELEASE_STORE_FILE=your keystore filename
MYAPP_RELEASE_KEY_ALIAS=your keystore alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

6. 编辑 android/app/build.gradle文件添加如下代码：
```
...
android {
    ...
    defaultConfig { ... }
    + signingConfigs {
    +    release {
    +        storeFile file(MYAPP_RELEASE_STORE_FILE)
    +        storePassword MYAPP_RELEASE_STORE_PASSWORD
    +        keyAlias MYAPP_RELEASE_KEY_ALIAS
    +        keyPassword MYAPP_RELEASE_KEY_PASSWORD
    +    }
    +}
    buildTypes {
        release {
            ...
    +        signingConfig signingConfigs.release
        }
    }
}
...
```

7. 进入项目根目录下的`android`文件夹，在当前目录打开终端，然后输入`./gradlew assembleRelease`开始发布APK的Release版；

8. 当发行完毕后，进入自己项目的`android\app\build\outputs\apk`目录中，找到`app-release.apk`，这就是我们发布完毕之后的完整安装包；就可以上传到各大应用商店供用户使用啦；

> 2019.09.16 上述方法可行(debug.apk --> release.apk)
> 注意：请记得妥善地保管好你的密钥库文件，不要上传到版本库或者其它的地方。

## V.调用摄像头拍照
[react-native-image-picker的github官网](https://github.com/marcshilling/react-native-image-picker)
[react native 之 react-native-image-picke的详细使用图解](http://www.cnblogs.com/shaoting/p/6148085.html)

1. 运行`npm install react-native-image-picker@latest --save`安装到项目运行依赖，此时调试**可能会报错**，如果报错，需要使用下面的步骤解决：
* 先删除`node_modules`文件夹
* 运行`npm i`
* 运行`npm start --reset-cache`

2. 运行`react-native link`自动注册相关的组件到原生配置中
* 做一部分配置工作

3. 打开项目中的`android`->`app`->`src`->`main`->`AndroidManifest.xml`文件，在第8行添加如下配置：
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```
* 放在同样的`uses-permission`标签下

4. 打开项目中的`android`->`app`->`src`->`main`->`java`->`com`->`当前项目名称文件夹`->`MainActivity.java`文件，修改配置如下：
```java
package com.native_camera;
import com.facebook.react.ReactActivity;

// 1. 添加以下两行：
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import

public class MainActivity extends ReactActivity {
    // 2. 添加如下一行：
    private PermissionListener listener; // <- add this attribute

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "native_camera";
    }
}
```
    
5. 在项目中添加如下代码：
```js
// 第1步：
import {View, Button, Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'
var photoOptions = {
  // 底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75, // 照片的质量
  allowsEditing: true, // 允许被编辑
  noData: false, // 不添加日期
  storageOptions: {
    skipBackup: true, // ios跳过云端备份
    path: 'images'
  }
}

// 第2步：
constructor(props) {
  super(props);
  this.state = {
    imgURL: ''
  }
}

// 第3步：
<Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200 }}></Image>
<Button title="拍照" onPress={this.cameraAction}></Button>

// 第4步：
cameraAction = () => {
  ImagePicker.showImagePicker(photoOptions, (response) => {
    console.log('response' + response);
    if (response.didCancel) {
      return
    }
    this.setState({
      imgURL: response.uri
    });
  })
}
```
> 因为RN中flex的默认设定，一般常用`alignItems: 'center'`让图片居中

6. **一定要退出之前调试的App**，并重新运行`react-native run-android`进行打包部署；这次打包期间会下载一些jar的包，需要耐心等待！(一路顺利)

7. 重新发行：进入项目根目录下的`android`文件夹，在当前目录打开终端，然后输入`./gradlew assembleRelease`开始发布APK的Release版
> 然后删除掉密钥文件(`./android/app`目录下)！！！