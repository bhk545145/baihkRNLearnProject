//
//  CalendarManager.m
//  AwesomeProject
//
//  Created by hongkun.bai on 2018/7/26.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import "AppDelegate.h"
@implementation CalendarManager

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(accountManagement:(NSString *)action params:(NSString *)params completionHandler:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"accountManagement %@ ,%@ ",action, params);
  [BLAsyncLet accountManagement:action params:params callback:^(NSString * _Nullable result) {
    callback(@[@(0), result]);
  }];
}

RCT_EXPORT_METHOD(familyManagement:(NSString *)action params:(NSString *)params completionHandler:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"familyManagement %@ ", params);
  [BLAsyncLet familyManagement:action params:params callback:^(NSString * _Nullable result) {
    callback(@[@(0), result]);
  }];
}

RCT_EXPORT_METHOD(deviceConfig:(NSString *)action params:(NSString *)params completionHandler:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"deviceConfig %@ ", params);
  [BLAsyncLet deviceConfig:action params:params callback:^(NSString * _Nullable result) {
    callback(@[@(0), result]);
  }];
}

RCT_EXPORT_METHOD(deviceControl:(NSString *)action endPointInfo:(NSString *)endPointInfo subEndPointInfo:(NSString *)subEndPointInfo params:(NSString *)params completionHandler:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"deviceControl %@ ", params);
  [BLAsyncLet deviceControl:action endPointInfo:endPointInfo subEndPointInfo:subEndPointInfo params:params callback:^(NSString * _Nullable result) {
    callback(@[@(0), result]);
  }];
}

RCT_EXPORT_METHOD(subDeviceManagement:(NSString *)action endPointInfo:(NSString *)endPointInfo params:(NSString *)params completionHandler:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"subDeviceManagement %@ ", params);
  [BLAsyncLet subDeviceManagement:action endPointInfo:endPointInfo params:params callback:^(NSString * _Nullable result)  {
    callback(@[@(0), result]);
  }];
}

RCT_EXPORT_METHOD(iRService:(NSString *)action params:(NSString *)params completionHandler:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"iRService %@ ", params);
  [BLAsyncLet iRService:action params:params callback:^(NSString * _Nullable result) {
    callback(@[@(0), result]);
  }];
}

@end
