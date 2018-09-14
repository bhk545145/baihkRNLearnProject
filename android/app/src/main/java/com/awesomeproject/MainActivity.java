package com.awesomeproject;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.util.Log;

import com.facebook.react.ReactActivity;

import org.json.JSONObject;

import cn.com.broadlink.blletasync.BLLetAsync;
import cn.com.broadlink.blletasync.callback.BLLetAsyncRequestCallbacker;

public class MainActivity extends ReactActivity {
    private static final String BLAPPSDK_TAG = "BLAPPSDK_TAG";

    private static final String license = "CceFpDt7d+r4pZ8KP74tbpNSf9Ug9pP+ytpIXApsCYpvvDEid0s8SdJtKgQMc5QmUsWWVwAAAACvEX37zpG5Wgi/Mlnda1pd2B9J96AQz9N0vO6WstfgR9yEgbkpFXFyJbsnfyHXt8pOdkTVo81rQrPhkOnhmpQBsEkbxXTfoUSQjDzWcfVjcAAAAAA=";

    private static final int PERMISSIONS_REQUEST_WRITE_EXTERNAL_STORAGE = 1;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        checkPermissions();
    }

    private void checkPermissions() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE)
                != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},
                    PERMISSIONS_REQUEST_WRITE_EXTERNAL_STORAGE);
            Log.d(BLAPPSDK_TAG, "申请权限失败 ");
        } else {
            appsdkInit();
        }
    }

    private void appsdkInit() {
        try {
            JSONObject object = new JSONObject();
            object.put("license", license);
            object.put("channel", "");
            object.put("loglevel", 4);

            String result = BLLetAsync.getInstance().sdkInit(MainActivity.this, object.toString());
            Log.d(BLAPPSDK_TAG, "SDK init result : " + result);

        } catch (Exception e) {

        }
    }
}
