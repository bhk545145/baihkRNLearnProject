/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <UIKit/UIKit.h>
#import <BLLetBase/BLLetBase.h>
#import <BLLetCore/BLLetCore.h>
#import <BLLetPlugins/BLLetPlugins.h>
#import <BLLetCloud/BLLetCloud.h>
#import <BLLetAccount/BLLetAccount.h>
#import <BLLetFamily/BLLetFamily.h>
@interface AppDelegate : UIResponder <UIApplicationDelegate,BLControllerDelegate>

@property (nonatomic, strong) UIWindow *window;
@property (strong, nonatomic) BLLet *let;
@property (strong, nonatomic) BLAccount *account;
@end
