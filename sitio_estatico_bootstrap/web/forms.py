from django import forms


class ContactoForm(forms.Form):
    nombre = forms.CharField(max_length=60, required=True)
    email = forms.EmailField(required=True)
    asunto = forms.CharField(max_length=80, required=True)
    mensaje = forms.CharField(min_length=10, required=True, widget=forms.Textarea)