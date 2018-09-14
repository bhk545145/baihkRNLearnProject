package com.awesomeproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.pusherman.networkinfo.RNNetworkInfoPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import cn.com.broadlink.blletasync.BLLetAsync;
import cn.com.broadlink.blletasync.callback.BLLetAsyncRequestCallbacker;

public class MainApplication extends Application implements ReactApplication {
  private static final String BLAPPSDK_TAG = "BLAPPSDK_TAG";

  private static final String license = "9LARHwsb33GcYoMfg24HpDmp3T1AzfUbCIMODlk5U5kk3FG4E20fq3CNBP+sjXJCgLtjWwAAAAAdxpGCmmkZ9SVX4elwwiRLrG6dyS3/pQTNw+HA0SFm+Y/iiDqaRYAfjPqN0aWCrEKpyNLH0ul/EUxOj+xrY3ELsEkbxXTfoUSQjDzWcfVjcAAAAAA=";

  private static final int PERMISSIONS_REQUEST_WRITE_EXTERNAL_STORAGE = 1;
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage(),
            new RNNetworkInfoPackage(),
              new AnExampleReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
