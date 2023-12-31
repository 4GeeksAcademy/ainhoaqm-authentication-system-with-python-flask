"""empty message

Revision ID: 7303b013faba
Revises: dc3d3affeae6
Create Date: 2023-11-13 17:52:48.810324

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7303b013faba'
down_revision = 'dc3d3affeae6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))

    # ### end Alembic commands ###
