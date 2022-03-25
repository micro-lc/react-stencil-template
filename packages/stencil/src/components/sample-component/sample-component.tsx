import {Component, h, Element, Host, Prop} from '@stencil/core'
import React from 'react'
import ReactDOM from 'react-dom'
import {Subscription, Subject} from 'rxjs'

import {SampleReactComponent} from '@micro-lc/react'

@Component({
  tag: 'sample-component',
  styleUrl: 'sample-component.css',
  shadow: true,
})
export class SampleComponent {
  @Element() element: HTMLElement

  
  @Prop() eventBus?: Subject<any>

  private subscriptions = new Subscription()

  componentWillLoad (): void {
    ReactDOM.render(this.createReactComponent(), this.element)
  }

  connectedCallback (): void {
    this.subscriptions.add(
      this.eventBus?.subscribe(console.log)
    )
  }

  componentDidUpdate (): void {
    this.componentWillLoad()
  }

  disconnectedCallback (): void {
    ReactDOM.unmountComponentAtNode(this.element)
    this.subscriptions.unsubscribe()
  }

  render (): React.FunctionComponentElement<HTMLElement> {
    return (
      <Host>
        <slot />
      </Host>
    )
  }

  private createReactComponent () {
    return React.createElement(SampleReactComponent)
  }
}
