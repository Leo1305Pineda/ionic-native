import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * Object of options to pass into the playVideo method.
 */
export interface StreamingVideoLiveOptions {
  /** Executes after success playing audio. */
  successCallback?: Function;
  /** Executes after error playing video. */
  errorCallback?: Function;
}

/**
 * @name Streaming Video Live
 * @description
 * This plugin to stream video in live with rtsp, native on Android.
 *
 * @usage
 * ```typescript
 * import { StreamingVideoLive, StreamingVideoLiveOptions } from '@ionic-native/streaming-video-live';
 *
 * constructor(private streamingVideoLive: StreamingVideo) { }
 *
 * let options: StreamingVideoLiveOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') }
 * };
 *
 * this.streamingVideo.streamVideo('rtsp://ip:port/app_name/chanel_name', options);
 *
 * ```
 * @interfaces
 * StreamingVideoLiveOptions
 */
@Plugin({
  pluginName: 'StreamingVideoLive',
  plugin: 'cordova-plugin-streaming-video-live',
  pluginRef: 'plugins.streamingVideoLive',
  repo: 'https://github.com/Leo1305Pineda/cordova-plugin-streaming-video-live',
  platforms: ['Android']
})
@Injectable()
export class StreamingVideo extends IonicNativePlugin {
  /**
   * Streams a video in live
   * @param streamUrl {string} The URL of the video in live
   * @param options {StreamingVideoLiveOptions} Options
   */
  @Cordova({ sync: true })
  streamVideo(streamUrl: string, options?: StreamingVideoLiveOptions): void {}
}