import create from 'zustand'

export default create(set => ({
    showMainBannerClickMe : false,
    toggleShowMainBannerClickMe : () => set(state => ({showMainBannerClickMe : !state.showMainBannerClickMe}))
}))