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

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location completionHandler:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  BLAccount *account = [BLAccount sharedAccount];
  [account login:name password:location completionHandler:^(BLLoginResult * _Nonnull result) {
    callback(@[@(result.error), result.nickname]);
  }];
}


@end
