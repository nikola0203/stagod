import { Tab } from 'bootstrap'

class BsTab {
  constructor() {
    this.init()
  }

  init() {
    this.initBsTab()
  }

  initBsTab() {
    let tabTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tab"]'))

    let tabList = tabTriggerList.map(function (tabTriggerEl) {
      return new Tab(tabTriggerEl)
    })
  }
}

export default BsTab
