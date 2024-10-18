export default function Card({ className, children }) {
   const cssClass = "my-4 mx-auto rounded-md p-4 w-11/12 max-w-xl"
   return (
      <section className={`${cssClass} ${className ? className : ''}`}>
         {children}
      </section>
   )
}