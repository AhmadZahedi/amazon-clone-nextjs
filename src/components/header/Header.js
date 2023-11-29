export default function Header() {
    const menuItems = [
        {
            label: 'Shop',
            children: ['Men', 'Women']
        },
        {
            label: 'On Sale',
            children: []
        },
        {
            label: 'New Arrivals',
            children: []
        },
        {
            label: 'Brands',
            children: []
        }
    ];
    return(
        <header className="w-100 py-6 px-24 bg-slate-300">
            <div className="font-bold text-4xl font-integralCf">SHOP.CO</div>

        </header>
    )
}