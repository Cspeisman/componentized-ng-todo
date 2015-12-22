export default function() {
  return {
    scope: {
      value: '=',
      submit: '&'
    },
    template: `<form ng-submit="submit()">
                 <input placeholder="buy salami..." type="text" ng-value="value" ng-model="value"/>
                 <input type='submit' />
              </form>`
  }
}
