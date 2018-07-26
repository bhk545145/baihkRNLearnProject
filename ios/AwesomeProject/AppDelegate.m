/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"AwesomeProject"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  [self loadAPPSDK];

  
  return YES;
}

- (void)loadAPPSDK {
  self.let = [BLLet sharedLetWithLicense:@"0PlPqgTGPZt7CwNNz4lWVm7qQZqm8AdPyooafIrN9QX5UING6RYrag2V2nFqWRIQrFDxVgAAAADoWWz5UyBiHvQQIPyIUhi4XFSykPGAqniglnoIUWhvuHCgxWxDEyF0yb0xHzyz6V5BLR6D0KoiI6QqjWxRKs8JsEkbxXTfoUSQjDzWcfVjcA4AAADzeX7wfU+3ndxs2/3yXOnJrFAlYyFEltcuD9SloQA7kInW0ynCvel2PMHSm6RgRp/xNYhi5LPROx4fnr746yHD"];
  [self.let setDebugLog:BL_LEVEL_ALL];                           // Set APPSDK debug log level
  [self.let.controller setSDKRawDebugLevel:BL_LEVEL_ALL];        // Set DNASDK debug log level
  self.let.configParam.controllerSendCount = 5;
  
  [BLLet sharedLet].configParam.controllerLocalTimeout = 2000;
  [BLLet sharedLet].configParam.controllerRemoteTimeout = 4000;
  
  self.let.configParam.controllerScriptDownloadVersion = 1;
  
  
  [self.let.controller startProbe:3000];                           // Start probe device
  self.let.controller.delegate = self;
  
  NSString *licenseId = self.let.configParam.licenseId;
  NSString *companyId = self.let.configParam.companyId;
  
  //BLLetAccount
  self.account = [BLAccount sharedAccountWithlicenseId:licenseId CompanyId:companyId];
}
@end
