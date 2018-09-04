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
                            @"license":@"CceFpDt7d+r4pZ8KP74tbpNSf9Ug9pP+ytpIXApsCYpvvDEid0s8SdJtKgQMc5QmUsWWVwAAAACvEX37zpG5Wgi/Mlnda1pd2B9J96AQz9N0vO6WstfgR9yEgbkpFXFyJbsnfyHXt8pOdkTVo81rQrPhkOnhmpQBsEkbxXTfoUSQjDzWcfVjcAAAAAA=",
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
