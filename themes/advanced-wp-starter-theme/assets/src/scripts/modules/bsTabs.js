import { Tab } from 'bootstrap/js/dist/tab'
class BsTab {
  constructor() {
    this.init()
  }

  init() {
    this.initBsTab()
  }

  initBsTab = () => {
    let tabTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tab"]'))

    let tabList = tabTriggerList.map((tabTriggerEl) => {
      return new Tab(tabTriggerEl)
    })
  }
}

export default BsTab
