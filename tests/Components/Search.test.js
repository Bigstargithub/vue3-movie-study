import { shallowMount } from '@vue/test-utils'
import Search from '~/components/Search.vue';

describe('components/Search.vue', () => {
  let wrapper 

  beforeEach(() => {
    wrapper = shallowMount(Search)
  })

  test('선택 가능한 연도의 갯수가 일치합니다.', () => {
    const year = wrapper.vm.filters.find(f => f.name === 'year');
    const yearLength = new Date().getFullYear() - 1985 + 1;
    expect(year.items.length).toBe(yearLength);
  })
})