//
//  BLAsyncLet.h
//  Let
//
//  Created by zjjllj on 2017/9/12.
//  Copyright © 2017年 BroadLink Co., Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "BLConstantsAsync.h"

@interface BLAsyncLet : NSObject

/**
 Init SDK with params
 
 @param params params
 @return Init result
 */
+ (NSString *)sdkInit:(NSString *)params;

/**
 Destory SDK
 */
+ (void)sdkDestroy;

/**
 Manage account
 
 @param action action
 @param params params
 @param callback callback
 */
+ (void)accountManagement:(NSString *)action params:(NSString *)params callback:(BLLetAsyncRequestCallback)callback;

/**
 Manage family
 
 @param action action
 @param params params
 @param callback callback
 */
+ (void)familyManagement:(NSString *)action params:(NSString *)params callback:(BLLetAsyncRequestCallback)callback;

/**
 Config Device
 
 @param action action
 @param params params
 @param callback callback
 */
+ (void)deviceConfig:(NSString *)action params:(NSString *)params callback:(DeviceConfigCallback)callback;

/**
 Device Control
 
 @param action action
 @param endPointInfo endPointInfo
 @param subEndPointInfo subEndPointInfo
 @param params params
 @param callback callback
 */
+ (void)deviceControl:(NSString *)action endPointInfo:(NSString *)endPointInfo subEndPointInfo:(NSString *)subEndPointInfo params:(NSString *)params callback:(BLLetAsyncRequestCallback)callback;

/**
 subDevice Management
 
 @param action action
 @param params params
 @param callback callback
 */
+ (void)subDeviceManagement:(NSString *)action endPointInfo:(NSString *)endPointInfo params:(NSString *)params callback:(SubDeviceManagementCallback)callback;
/**
 Manage product
 
 @param action action
 @param params params
 @param callback callback
 */
+ (void)productManagement:(NSString *)action params:(NSString *)params callback:(BLLetAsyncRequestCallback)callback;

/**
 IRcode Service
 
 @param action action
 @param params params
 @param callback callback
 */
+ (void)iRService:(NSString *)action params:(NSString *)params callback:(BLLetAsyncRequestCallback)callback;

@end
