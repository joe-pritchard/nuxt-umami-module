export interface Umami {
    (eventValue: string): void

    trackView(url: string, referer?: string, websiteId?: string): void
    trackEvent(eventValue: string, eventType: string, url?: string, websiteId?: string): void

    addEvents(): void
    removeEvents(): void
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $umami: Umami
    }

    interface Context {
        $umami: Umami
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $umami: Umami;
    }
}
