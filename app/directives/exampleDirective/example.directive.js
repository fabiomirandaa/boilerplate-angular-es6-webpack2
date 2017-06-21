import './example.view.html'

export class ExampleDirective {
  constructor () {
    'ngInject'

    this.templateUrl = 'directives/exampleDirective/example.view.html'
    this.restrict = 'E'
    this.controllerAs = 'ctrl'
    this.scope = {
      title: '@'
    }

    this.setTitle()
  }

  // optional compile function
  compile (tElement) {
    tElement.css('position', 'relative')
  }

  // optional link function
  link (scope, element) {
    this.$interval(() => this.move(element), 1000)
  }

  setTitle (title) {
    this.title = title
  }

  move (element) {
    element.css('left', (Math.random() * 500) + 'px')
    element.css('top', (Math.random() * 500) + 'px')
  }
}
