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
  NSDictionary *initDic = @{
                            @"license":@"9LARHwsb33GcYoMfg24HpDmp3T1AzfUbCIMODlk5U5kk3FG4E20fq3CNBP+sjXJCgLtjWwAAAAAdxpGCmmkZ9SVX4elwwiRLrG6dyS3/pQTNw+HA0SFm+Y/iiDqaRYAfjPqN0aWCrEKpyNLH0ul/EUxOj+xrY3ELsEkbxXTfoUSQjDzWcfVjcAAAAAA=",
                            @"loglevel":@(4)
                            };
  
  NSString *sdkInitResult = [BLAsyncLet sdkInit:[self jsonStringFromDictionary:initDic]];
  NSLog(@"loadAppSdk: %@", sdkInitResult);
}

- (NSString*)jsonStringFromDictionary:(NSDictionary *)dic {
  return [[NSString alloc] initWithData:[NSJSONSerialization dataWithJSONObject:dic options:0 error:nil]
                               encoding:NSUTF8StringEncoding];
}

- (id)dictionaryFromJsonString:(NSString*)jsonString {
  if (jsonString) {
    return [NSJSONSerialization JSONObjectWithData:[jsonString dataUsingEncoding:NSUTF8StringEncoding]
                                           options:NSJSONReadingMutableLeaves error:nil];
  }
  return nil;
}
@end
