import { NavigationGuard } from 'vue-router'
import Vue from 'vue'

export type from = Parameters<NavigationGuard<Vue>>[0]
export type to = Parameters<NavigationGuard<Vue>>[1]
export type next<T extends Vue> = Parameters<NavigationGuard<T>>[2]

export type NavigationGuardParams = Parameters<NavigationGuard<Vue>>
