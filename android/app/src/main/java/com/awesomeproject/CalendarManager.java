
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
import cn.com.broadlink.blletasync.callback.BLLetAsyncRequestCallbacker;
import cn.com.broadlink.blletasync.callback.DeviceConfigCallback;
import cn.com.broadlink.blletasync.callback.SubDeviceManagementCallback;

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
    public void accountManagement(
            String action,
            String params,
            final Callback successCallback) {
        BLLetAsync.getInstance().accountManagement(action,params,new BLLetAsyncRequestCallbacker(){
            @Override
            public void onPostExecute(final String result) {
                Log.d(BLAPPSDK_TAG, "accountManagement : " + result);
                successCallback.invoke(0, result);

            }
        });

    }

    @ReactMethod
    public void familyManagement(
            String action,
            String params,
            final Callback successCallback) {
        BLLetAsync.getInstance().familyManagement(action,params,new BLLetAsyncRequestCallbacker(){
            @Override
            public void onPostExecute(final String result) {
                Log.d(BLAPPSDK_TAG, "familyManagement : " + result);
                successCallback.invoke(0, result);
            }
        });

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

    @ReactMethod
    public void deviceControl(
            String action,
            String params,
            String endString,
            String subendString,
            final Callback successCallback) {
        BLLetAsync.getInstance().deviceControl(action,endString,subendString,params,new BLLetAsyncRequestCallbacker(){
            @Override
            public void onPostExecute(final String result) {
                Log.d(BLAPPSDK_TAG, "deviceControl : " + result);
                successCallback.invoke(0, result);
            }
        });

    }

    @ReactMethod
    public void subDeviceManagement(
            String action,
            String params,
            String endString,
            final Callback successCallback) {
        BLLetAsync.getInstance().subDeviceManagement(action,endString,params,new SubDeviceManagementCallback(){
            @Override
            public void onPostExecute(final String result) {
                Log.d(BLAPPSDK_TAG, "subDeviceManagement : " + result);
                successCallback.invoke(0, result);
            }
        });

    }

    @ReactMethod
    public void iRService(
            String action,
            String params,
            final Callback successCallback) {
        BLLetAsync.getInstance().iRService(action,params,new BLLetAsyncRequestCallbacker(){
            @Override
            public void onPostExecute(final String result) {
                Log.d(BLAPPSDK_TAG, "subDeviceManagement : " + result);
                successCallback.invoke(0, result);
            }
        });

    }
}