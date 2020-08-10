import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { DevicesStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const devicesModule: Module<DevicesStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default devicesModule;
