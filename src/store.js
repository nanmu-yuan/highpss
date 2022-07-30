import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    part1: [],
    part2: [],
    part3: [],
    part4: [],
    part5: [],
    part6: [],
    part7: [],
    part8: [],
    part9: [],
    part10: [],
    answer1: [],
    answer2: [],
    draggable: [
      {
        val: '',
        flag: true
      },
      {
        val: '',
        flag: true
      },
      {
        val: '',
        flag: true
      },
      {
        val: '',
        flag: true
      },
      {
        val: '',
        flag: true
      },
      {
        val: '',
        flag: true
      },
      {
        val: '',
        flag: true
      },
      {
        val: '',
        flag: true
      }
    ],
    often: {
      timeUsing1: 0,
      timeUsing2: 0,
      timeUsing3: 0,
      timeUsing4: 0,
      timeUsing5: 0,
      timeUsing6: 0,
      timeUsing7: 0,
      timeUsing8: 0,
      timeUsing9: 0,
      timeUsing10: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addDraggable(state, val) {
      state.draggable = val
    },
    setTime(state, obj) {
      state.often[`timeUsing${obj.id}`] = obj.timeUsing
    },
    del(state) {
      state.part1 = []
      state.part2 = []
      state.part3 = []
      state.part4 = []
      state.part5 = []
      state.part6 = []
      state.part7 = []
      state.part8 = []
      state.part9 = []
      state.part10 = []
      state.answer1 = []
      state.answer2 = []
      state.draggable = [
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        }
      ]
    },
    drop1(state, obj) {
      state.answer1[obj.e] = { value: obj.val, id: obj.id }
    },
    deldrop1(state, id) {
      state.answer1[id] = ''
      state.part6[id] = ''
    },
    drop2(state, obj) {
      state.answer2[obj.e] = { id: obj.id }
    },
    deldrop2(state, id) {
      state.answer2[id] = ''
    },
    addAnswer1(state, val) {
      state.part1 = val
    },
    addAnswer2(state, val) {
      state.part2 = val
    },
    addAnswer3(state, val) {
      state.part3 = val
    },
    addAnswer4(state, val) {
      state.part4 = val
    },
    addAnswer5(state, val) {
      state.part5 = val
    },
    addAnswer6(state, val) {
      state.part6 = val
    },
    addAnswer7(state, val) {
      state.part7 = val
    },
    addAnswer8(state, val) {
      state.part8 = val
    },
    addAnswer9(state, val) {
      state.part9 = val
    },
    addAnswer10(state, val) {
      state.part10 = val
    },
  }
})

