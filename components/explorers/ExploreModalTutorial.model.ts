export default [
    {
        description: {
            step: '1/3',
            content:
                'Puedes navegar entre las diferentes misiones, haciendo click en los iconos.',
        },
        component: {
            dom: null as Element | null,
            origin: ["bottom", "left"],
            direction: ["bottom", "right"]
        },
    },
    {
        description: {
            step: '2/3',
            content:
                'Puedes viajar a diferentes años consultando la línea de tiempo',
        },
        component: {
            dom: null as Element | null,
            origin: ["top", "left"],
            direction: ["bottom", "right"]
        },
    },
    {
        description: {
            step: '3/3',
            content:
                'Puedes saltarte esta sección e ir directamente a ver las misiones donde está el CAB participando',
        },
        component: {
            dom: null as Element | null,
            origin: ["top", "left"],
            direction: ["top", "right"]
        },
    },
]