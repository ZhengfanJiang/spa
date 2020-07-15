import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import List from '../../src/views/List'
import ListStore from '../../src/store/modules/list'

const fixture = [
  { body: 'fixture1' },
  { body: 'fixture2' },
  { body: 'fixture3' },
  { body: 'fixture4' }
]

const localVue = createLocalVue()

localVue.use(Vuex)

describe('List.vue', () => {
  let actions
  let state
  let store
  beforeEach(() => {
    actions = {
      addData: jest.fn(),
      getData: jest.fn()
    }
    state = {
      dataArr: fixture
    }
    store = new Vuex.Store({
      modules: {
        list: {
          state,
          getters: ListStore.getters,
          actions
        }
      }
    })
  })
  it('should render a list', () => {
    const wapper = shallowMount(List, { store, localVue })
    expect(wapper.contains('ul')).toBe(true)
  })
})
