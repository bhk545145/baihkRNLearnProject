//
//  BLDeviceManagement.h
//  Let
//
//  Created by zhujunjie on 2017/9/9.
//  Copyright © 2017年 BroadLink Co., Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "BLConstantsAsync.h"

@interface BLDeviceManagement : NSObject

- (void)startDeviceManagment;

- (void)stopDeviceManagment;

- (void)deviceConfig:(NSString *_Nonnull)action params:(NSString *_Nullable)params deviceConfigCallback:(DeviceConfigCallback _Nonnull)callback;

- (NSString *_Nonnull)deviceControl:(NSString *_Nonnull)action endPointInfo:(NSString *_Nonnull)endPointInfo subEndPointInfo:(NSString *_Nullable)subEndPointInfo params:(NSString *_Nullable)params;

- (void)subDeviceManagement:(NSString *_Nonnull)action endPointInfo:(NSString *_Nonnull)endPointInfo params:(NSString *_Nullable)params deviceConfigCallback:(DeviceConfigCallback _Nonnull)callback;

@end
