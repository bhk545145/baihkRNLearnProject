
package com.awesomeproject;

import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import org.json.JSONObject;

import java.util.Map;
import java.util.HashMap;

import cn.com.broadlink.blletasync.BLLetAsync;
import cn.com.broadlink.blletasync.callback.DeviceConfigCallback;

public class CalendarManager extends ReactContextBaseJavaModule {
    private static final String BLAPPSDK_TAG = "BLAPPSDK_TAG";
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public CalendarManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CalendarManager";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }


    @ReactMethod
    public void deviceConfig(
            String action,
            String params,
            final Callback successCallback) {
        BLLetAsync.getInstance().deviceConfig(action,params,new DeviceConfigCallback(){
            @Override
            public void configProgress(final String s) {
                Log.d(BLAPPSDK_TAG, "deviceConfig : " + s);
                successCallback.invoke(0, s);
            }
        });

    }
}