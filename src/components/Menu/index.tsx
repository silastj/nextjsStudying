import Link from 'next/link'
import styles from './Menu.module.css'

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const Menu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        {routes.map((route) => (             
          <Link 
            key={route.href} 
            href={route.href}            
          >
            {route.label}
          </Link>
        ))}        
      </ul>
    </nav>
  );
}

export default Menu