from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from .forms import ContactoForm


def home(request: HttpRequest) -> HttpResponse:
    return render(
        request,
        "web/home.html",
        {
            "titulo": "Inicio",
            "beneficios": [
                "Bootstrap",
                "Templates con herencia",
                "Archivos estáticos",
                "Navegación interna",
            ],
        },
    )


def acerca(request: HttpRequest) -> HttpResponse:
    return render(
        request,
        "web/acerca.html",
        {
            "titulo": "Acerca",
            "equipo": ["Backend", "Frontend", "UX"],
        },
    )


def contacto(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        form = ContactoForm(request.POST)
        if form.is_valid():
            return render(
                request,
                "web/contacto_ok.html",
                {
                    "titulo": "Contacto",
                    "data": form.cleaned_data,
                },
            )
    else:
        form = ContactoForm()

    return render(
        request,
        "web/contacto.html",
        {
            "titulo": "Contacto",
            "form": form,
        },
    )