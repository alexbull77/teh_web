# Generated by Django 3.2.18 on 2023-02-25 20:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products_api', '0002_productmodel_quantity'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productmodel',
            old_name='category',
            new_name='categories',
        ),
    ]
