import qrcode

content = input("Type your content for your qr code: ")
name = input("Now type a name for your file: ")

img = qrcode.make(content)
img.save(f"qrcodes/{name}.png")
print(f"Done! Your qr code is saved as {name}.png")