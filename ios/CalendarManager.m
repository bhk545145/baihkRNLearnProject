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

RCT_EXPORT_METHOD(familyManagement:(NSString *)params completionHandler:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"familyManagement %@ ", params);
  [BLAsyncLet familyManagement:@"" params:params callback:^(NSString * _Nullable result) {
    callback(@[@(0), result]);
  }];
}

@end
