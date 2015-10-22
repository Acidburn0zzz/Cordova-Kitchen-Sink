/* Copyright 2015 BlackBerry Ltd.

 Licensed under the Apache License, Version 2.0 (the 'License');
 you may not use this file except in compliance with the License.

 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an 'AS IS' BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied. See the License for the specific language
 governing permissions and limitations under the License.  */

angular.module('tsteas')
  .controller('ClockCtrl', ['Utils',
    function(Utils) {

      _this = this;
      this.title = 'Clock';
      this.selectedClockMode = 'worldClockTab';

      this.clockModes = [{
        text: 'Alarm',
        value: 'alarmClockPane'
      }, {
        text: 'World',
        value: 'worldClockTab'
      }, {
        text: 'Stop Watch',
        value: 'stopwatchTab'
      }, {
        text: 'Timer',
        value: 'timerTab'
      }];

      this.targets = [{
        text: 'Open Clock',
        request: {
          target: 'bb.clock.launcher',
          action: 'bb.action.VIEW',
          type: 'text/plain',
          data: ''
        }

      }];


      this.invoke = function(request) {
        request.data = _this.selectedClockMode;

        // invoke
        Utils.invokeApp(
          request,
          // success
          function(data) {},
          // error
          function(e) {}
        );

      };

    }
  ]);
