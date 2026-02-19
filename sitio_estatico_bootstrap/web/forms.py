from django import forms

class ContactoForm(forms.Form):
    nombre = forms.CharField(
        max_length=60,
        required=True,
        widget=forms.TextInput(attrs={'class': 'mb-3 col-12'})
    )

    email = forms.EmailField(
        required=True,
        widget=forms.EmailInput(attrs={'class': 'mb-3 col-12'})
    )

    asunto = forms.CharField(
        max_length=80,
        required=True,
        widget=forms.TextInput(attrs={'class': 'mb-3 col-12'})
    )

    mensaje = forms.CharField(
        min_length=10,
        required=True,
        widget=forms.Textarea(attrs={'class': 'mb-3 col-12'})
    )
