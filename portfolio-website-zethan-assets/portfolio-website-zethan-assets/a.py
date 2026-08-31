
numero = []
contacto = []

print("1.ingresa un contacto")
print("2.buscar contacto")
print("1.ingresa un contacto")
print("1.ingresa un contacto")
opcion = input("eligue una opcion\n")

if opcion == "1" :
   
    nuevo_numero = input("ingresa numero\n")
    nuevo_contacto = input("ingresa su nombre\n")
    contacto.append(nuevo_contacto)
    numero.append(nuevo_numero)
    print(f"tus numero {numero} tus contactos {contacto}")
elif opcion == "2" :
    contacto = input("ingresa nombre a eliminar")
    contacto.remove(contacto)
    print(f"eliminaste {contacto}")

    
    